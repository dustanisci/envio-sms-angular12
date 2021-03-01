import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { appPath } from 'src/app/app-routing.module';
import { Status } from 'src/app/shared/components/accordion/accordion.component';
import { Modal } from 'src/app/shared/components/modal/model/modal';
import { MenssageErrorApi } from 'src/app/shared/helper/error-api';
import { Sms } from '../model/sms';
import { SmsSheduleEditService } from '../sms-shedule-edit/sms-shedule-edit.service';
import { SmsListCancelService } from './sms-list-cancel.service';

@Component({
  selector: 'app-sms-list-cancel',
  templateUrl: './sms-list-cancel.component.html',
  styleUrls: ['./sms-list-cancel.component.scss']
})
export class SmsListCancelComponent extends MenssageErrorApi implements OnInit {

  modal: Modal = {} as Modal;
  loader = false;
  sms: Sms[] = [] as Sms[];
  smsCancel: Sms = {} as Sms;
  idCancel = 0;

  constructor(
    private router: Router,
    private serviceListCancelSms: SmsListCancelService,
    private serviceEditSms: SmsSheduleEditService) {
    super();
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.loader = true;
    this.serviceListCancelSms.getAll().pipe(take(1)).subscribe((resp: Sms[]) => {

      this.sms = resp;
      this.loader = false;

    }, () => {
      this.loader = false;
      this.modal = this.errorApi();
    });
  }

  edit(sms: Sms): void {
    this.router.navigate([appPath.smsEdit, JSON.stringify(sms)]);
  }

  actionCancel(sms: Sms): void {
    this.modal.btnPrimary = 'Cancelar';
    this.modal.btnSecondary = 'Confirmar';
    this.modal.description = 'Deseja realmente cancelar o agendamento do SMS?';
    this.modal.type = 0;
    this.modal.isOpen = true;
    this.smsCancel = sms;
  }

  cancel(): void {
    this.smsCancel.status = Status.CANCELED;
    this.loader = true;
    this.serviceEditSms.updateSms(this.smsCancel).pipe(take(1)).subscribe(() => {
      this.sms.find((resp: Sms) => {
        if (resp.id === this.smsCancel.id) {
          resp.status = Status.CANCELED;
        }

        this.modal.isOpen = false;
        this.loader = false;
      });
    }, () => {
      this.loader = false;
      this.modal = this.errorApi();
    });
  }

}
