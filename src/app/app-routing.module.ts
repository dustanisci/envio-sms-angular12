import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export enum appPath {
  home = 'home',
  phonesCreate = 'phones/add',
  phonesEdit = 'phones/edit/',
  phoneListDelete = 'phones/list',
  smsShedule = 'sms/add',
  smsEdit = 'sms/edit/',
  smsListCancel = 'sms/list',
}

const appRoutes: Routes = [
  {
    path: appPath.home,
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: appPath.phonesCreate,
    loadChildren: () => import('./pages/phones/phone-create-edit/phone-create-edit.module').then(m => m.PhoneCreateEditModule),
  },
  {
    path: appPath.phonesEdit + ':list-phone',
    loadChildren: () => import('./pages/phones/phone-create-edit/phone-create-edit.module').then(m => m.PhoneCreateEditModule),
  },
  {
    path: appPath.phoneListDelete,
    loadChildren: () => import('./pages/phones/phone-list/phone-list.module').then(m => m.PhoneListModule),
  },
  {
    path: appPath.smsShedule,
    loadChildren: () => import('./pages/sms/sms-shedule-edit/sms-shedule-edit.module').then(m => m.SmsSheduleEditModule),
  },
  {
    path: appPath.smsEdit + ':sms-shedule',
    loadChildren: () => import('./pages/sms/sms-shedule-edit/sms-shedule-edit.module').then(m => m.SmsSheduleEditModule),
  },
  {
    path: appPath.smsListCancel,
    loadChildren: () => import('./pages/sms/sms-list-cancel/sms-list-cancel.module').then(m => m.SmsListCancelModule),
  },
  {
    path: '',
    redirectTo: appPath.home,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: appPath.home,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
