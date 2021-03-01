import { Time } from '@angular/common';
import { Status } from 'src/app/shared/components/accordion/accordion.component';
import { ListPhone } from '../../phones/model/list-phone';

export interface Sms {
  id: number;
  msg: string;
  hour: Time;
  listPhone: ListPhone;
  status: Status;
}
