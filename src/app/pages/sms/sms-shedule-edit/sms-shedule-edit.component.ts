import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { take } from 'rxjs/operators';
import { Status } from 'src/app/shared/components/accordion/accordion.component';
import { MsgType, Type } from 'src/app/shared/components/modal/modal.component';
import { Modal } from 'src/app/shared/components/modal/model/modal';
import { MenssageErrorApi } from 'src/app/shared/helper/error-api';
import { ListPhone } from '../../phones/model/list-phone';
import { PhoneListService } from '../../phones/phone-list/phone-list.service';
import { Sms } from '../model/sms';
import { SmsSheduleEditService } from './sms-shedule-edit.service';


@Component({
  selector: 'app-sms-shedule-edit',
  templateUrl: './sms-shedule-edit.component.html',
  styleUrls: ['./sms-shedule-edit.component.scss']
})
export class SmsSheduleEditComponent extends MenssageErrorApi implements OnInit {

  sms: Sms = {} as Sms;
  modal: Modal = {} as Modal;
  listPhone: ListPhone[] = [] as ListPhone[];
  loader = false;
  editMode = false;

  constructor(
    private serviceShedule: SmsSheduleEditService,
    private servicePhone: PhoneListService,
    private activatedRoute: ActivatedRoute) {
    super();
    this.sms.msg = '';
    this.sms.listPhone = {} as ListPhone;
    this.sms.status = Status.PENDING;
    this.modal.btnPrimary = 'Fechar';
    this.modal.description = '';
    this.modal.isOpen = false;
  }

  ngOnInit(): void {
    this.getListPhones();

    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['sms-shedule']) {
        this.sms = JSON.parse(params['sms-shedule']);
        this.editMode = true;
      }
    });
  }

  getListPhones(): void {
    this.loader = true;
    this.servicePhone.getAll().pipe(take(1)).subscribe((resp: ListPhone[]) => {

      this.listPhone = resp;
      this.loader = false;

    }, () => {
      this.loader = false;
      this.modal = this.errorApi();
    });
  }

  save(): void {
    this.loader = true;

    this.listPhone.find((resp: ListPhone) => {
      if (this.sms.listPhone.id === resp.id) {
        this.sms.listPhone.phones = resp.phones;
        this.sms.listPhone.listName = resp.listName;
      }
    });

    if (!this.editMode) {

      this.serviceShedule.insertSms(this.sms).pipe(take(1)).subscribe(() => {
        this.loader = false;
        this.modal.description = MsgType.SUCCESS;
        this.modal.type = Type.SUCCESS;
        this.modal.isOpen = true;
        this.sms.msg = '';
        this.sms.listPhone = {} as ListPhone;
        this.sms.hour = {} as Time;
      }, () => {
        this.loader = false;
        this.modal = this.errorApi();
      });

    } else {

      this.serviceShedule.updateSms(this.sms).pipe(take(1)).subscribe(() => {
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
