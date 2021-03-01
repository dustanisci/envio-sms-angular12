import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneListComponent } from './phone-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AccordionModule } from 'src/app/shared/components/accordion/accordion.module';
import { PhoneListService } from './phone-list.service';
import { HttpClientModule } from '@angular/common/http';
import { MatChipsModule } from '@angular/material/chips';
import { ModalModule } from 'src/app/shared/components/modal/modal.module';
import { FullScreenLoadingModule } from 'src/app/shared/components/full-screen-loading/full-screen-loading.module';
import { ApiService } from 'src/app/shared/service/api/api.service';

const phoneListDeleteRoutes: Routes = [{ path: '', component: PhoneListComponent }];

@NgModule({
  declarations: [
    PhoneListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(phoneListDeleteRoutes),
    AccordionModule,
    HttpClientModule,
    MatChipsModule,
    ModalModule,
    FullScreenLoadingModule,
  ],
  providers: [
    ApiService,
    PhoneListService,
  ]
})
export class PhoneListModule { }
