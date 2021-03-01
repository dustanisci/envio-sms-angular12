import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmsSheduleEditComponent } from './sms-shedule-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FullScreenLoadingModule } from 'src/app/shared/components/full-screen-loading/full-screen-loading.module';
import { ModalModule } from 'src/app/shared/components/modal/modal.module';
import { MatSelectModule } from '@angular/material/select';
import { SmsSheduleEditService } from './sms-shedule-edit.service';
import { ApiService } from 'src/app/shared/service/api/api.service';
import { PhoneListService } from '../../phones/phone-list/phone-list.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';

const smsSheduleRoutes: Routes = [{ path: '', component: SmsSheduleEditComponent }];

@NgModule({
  declarations: [
    SmsSheduleEditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(smsSheduleRoutes),
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    ModalModule,
    FullScreenLoadingModule,
    MatSelectModule,
    MatFormFieldModule,
    HttpClientModule,
  ],
  providers: [
    SmsSheduleEditService,
    ApiService,
    PhoneListService,
  ],
})
export class SmsSheduleEditModule { }
