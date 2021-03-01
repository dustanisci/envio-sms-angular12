import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmsListCancelComponent } from './sms-list-cancel.component';
import { RouterModule, Routes } from '@angular/router';
import { SmsListCancelService } from './sms-list-cancel.service';
import { HttpClientModule } from '@angular/common/http';
import { MatChipsModule } from '@angular/material/chips';
import { AccordionModule } from 'src/app/shared/components/accordion/accordion.module';
import { FullScreenLoadingModule } from 'src/app/shared/components/full-screen-loading/full-screen-loading.module';
import { ModalModule } from 'src/app/shared/components/modal/modal.module';
import { MatIconModule } from '@angular/material/icon';
import { ApiService } from 'src/app/shared/service/api/api.service';
import { SmsSheduleEditService } from '../sms-shedule-edit/sms-shedule-edit.service';

const smsListCancelRoutes: Routes = [{ path: '', component: SmsListCancelComponent }];

@NgModule({
  declarations: [
    SmsListCancelComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(smsListCancelRoutes),
    AccordionModule,
    HttpClientModule,
    MatChipsModule,
    ModalModule,
    FullScreenLoadingModule,
    MatIconModule,
  ],
  providers: [
    SmsListCancelService,
    SmsSheduleEditService,
    ApiService,
  ]
})
export class SmsListCancelModule { }
