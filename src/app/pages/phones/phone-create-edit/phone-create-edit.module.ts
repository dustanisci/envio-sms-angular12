import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneCreateEditComponent } from './phone-create-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MaskPhonePipe } from 'src/app/shared/pipes/mask-phone/mask-phone.pipe';
import { PhoneCreateEditService } from './phone-create-edit.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'src/app/shared/components/modal/modal.module';
import { FullScreenLoadingModule } from 'src/app/shared/components/full-screen-loading/full-screen-loading.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ApiService } from 'src/app/shared/service/api/api.service';

const phoneCreateEditRoutes: Routes = [{ path: '', component: PhoneCreateEditComponent }];

@NgModule({
  declarations: [
    PhoneCreateEditComponent,
    MaskPhonePipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(phoneCreateEditRoutes),
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    ModalModule,
    FullScreenLoadingModule,
    MatFormFieldModule,
  ],
  providers: [
    PhoneCreateEditService,
    ApiService,
  ],
})
export class PhoneCreateEditModule { }
