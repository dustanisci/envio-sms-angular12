import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { AccordionComponent } from './accordion.component';


@NgModule({
  declarations: [
    AccordionComponent,
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
  ],
  exports: [
    AccordionComponent,
  ]
})
export class AccordionModule { }
