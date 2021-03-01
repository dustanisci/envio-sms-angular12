import { Component, EventEmitter, Input, Output } from '@angular/core';

export enum Status {
  SENT = 'Enviado',
  CANCELED = 'Cancelado',
  PENDING = 'Pendente',
}

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

  @Input() title: any = '';
  @Input() status = '';
  @Input() enableEdit = true;
  @Input() enableCancel = true;
  statusValue = Status;

  @Output() btnEdit: EventEmitter<void> = new EventEmitter<void>();
  @Output() btnDelete: EventEmitter<void> = new EventEmitter<void>();

  isOpen = false;

}
