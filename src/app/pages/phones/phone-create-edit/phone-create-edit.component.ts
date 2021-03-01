import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MaskPhonePipe } from 'src/app/shared/pipes/mask-phone/mask-phone.pipe';
import { ListPhone } from '../model/list-phone';
import { PhoneCreateEditService } from './phone-create-edit.service';
import { take } from 'rxjs/operators';
import { Modal } from 'src/app/shared/components/modal/model/modal';
import { MsgType, Type } from 'src/app/shared/components/modal/modal.component';
import { ActivatedRoute, Params } from '@angular/router';
import { MenssageErrorApi } from 'src/app/shared/helper/error-api';

enum DigitPhoneMask {
  CELL = 15,
  TELEPHONE = 14
}

@Component({
  selector: 'app-phone-create-edit',
  templateUrl: './phone-create-edit.component.html',
  styleUrls: ['./phone-create-edit.component.scss']
})
export class PhoneCreateEditComponent extends MenssageErrorApi implements OnInit {

  listPhone: ListPhone = {} as ListPhone;
  phone = '';
  loader = false;
  maskPhone = new MaskPhonePipe();
  editMode = false;
  modal: Modal = {} as Modal;
  @ViewChild('inputFile') inputFile: ElementRef = {} as ElementRef;

  constructor(
    private service: PhoneCreateEditService,
    private activatedRoute: ActivatedRoute) {
    super();
    this.listPhone.listName = '';
    this.listPhone.phones = [];
    this.modal.btnPrimary = 'Fechar';
    this.modal.description = '';
    this.modal.isOpen = false;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['list-phone']) {
        this.listPhone = JSON.parse(params['list-phone']);
        this.editMode = true;
      }
    });
  }

  addPhone(): void {
    this.listPhone.phones.push(this.phone);
    this.phone = '';
  }

  removePhone(phone: string): void {
    this.listPhone.phones = this.listPhone.phones.filter((resp) => resp !== phone);
  }

  uploadFile(files: any): void {
    const reader = new FileReader();
    reader.onload = () => {
      const phonesCSV = reader.result?.toString().split(/\r\n|\n/) as string[];
      phonesCSV.map((phone: string) => {
        const phoneFormatted = this.maskPhone.transform(phone);
        if (phoneFormatted && phoneFormatted.length >= DigitPhoneMask.TELEPHONE && phoneFormatted.length <= DigitPhoneMask.CELL) {
          this.listPhone.phones.push(phoneFormatted);
        }
      });
    };
    reader.readAsBinaryString(files.target.files[0]);
    this.inputFile.nativeElement.value = '';
  }

  save(): void {
    this.loader = true;

    if (!this.editMode) {

      this.service.insertListPhone(this.listPhone).pipe(take(1)).subscribe(() => {
        this.loader = false;
        this.modal.description = MsgType.SUCCESS;
        this.modal.type = Type.SUCCESS;
        this.modal.isOpen = true;
        this.phone = '';
        this.listPhone.listName = '';
        this.listPhone.phones = [];

      }, () => {
        this.loader = false;
        this.modal = this.errorApi();
      });

    } else {

      this.service.updateListPhone(this.listPhone).pipe(take(1)).subscribe(() => {
        this.loader = false;
        this.modal.description = MsgType.SUCCESS;
        this.modal.type = Type.SUCCESS;
        this.modal.isOpen = true;
      }, () => {
        this.loader = false;
        this.modal = this.errorApi();
      });

    }
  }

}
