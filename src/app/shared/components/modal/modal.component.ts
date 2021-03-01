import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export enum Type {
  ERROR = 0,
  SUCCESS = 1,
}

export enum MsgType{
  ERROR = 'Ocorreu um erro, tente novamente em instantes.',
  SUCCESS = 'Realizado com sucesso.'
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() description = '';
  @Input() title = '';
  @Input() btnPrimary = '';
  @Input() btnSecondary = '';
  @Input() type = Type.SUCCESS;

  @Output() btnPrimaryClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() btnSecondaryClick: EventEmitter<void> = new EventEmitter<void>();

}
