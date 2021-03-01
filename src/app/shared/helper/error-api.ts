import { MsgType, Type } from '../components/modal/modal.component';
import { Modal } from '../components/modal/model/modal';

export class MenssageErrorApi {

  errorApi(): Modal {
    const modal = {} as Modal;
    modal.btnPrimary = 'Fechar';
    modal.btnSecondary = '';
    modal.description = MsgType.ERROR;
    modal.type = Type.ERROR;
    modal.isOpen = true;
    return modal;
  }
}
