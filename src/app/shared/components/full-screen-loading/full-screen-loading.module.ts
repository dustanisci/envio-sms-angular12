import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FullScreenLoadingComponent } from './full-screen-loading.component';

@NgModule({
  declarations: [
    FullScreenLoadingComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    FullScreenLoadingComponent,
  ],
})
export class FullScreenLoadingModule { }
