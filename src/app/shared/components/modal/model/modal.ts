import { Type } from '../modal.component';

export interface Modal {
  title: string;
  description: string;
  btnPrimary: string;
  btnSecondary?: string;
  type: Type;
  isOpen: boolean;
}
