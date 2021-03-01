import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskPhone'
})
export class MaskPhonePipe implements PipeTransform {

  transform(phone: string): string {
    if (phone.length) {
      phone = phone.replace(/\D/g, "");
      phone = phone.replace(/^(\d{2})(\d)/g, "($1) $2");
      phone = phone.replace(/(\d)(\d{4})$/, "$1-$2");
    }
    return phone;
  }

}
