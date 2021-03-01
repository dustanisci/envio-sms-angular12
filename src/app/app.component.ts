import { Component } from '@angular/core';
import { appPath } from './app-routing.module';
import { MenuItem } from './shared/components/menu/model/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuItems: MenuItem[] = [
    { icon: 'home', label: 'Início', href: appPath.home },
    { icon: 'contact_phone', label: 'Adicionar telefones', href: appPath.phonesCreate },
    { icon: 'contacts', label: 'Listagem e gerenciamento de telefones', href: appPath.phoneListDelete },
    { icon: 'message', label: 'Agendar SMS', href: appPath.smsShedule },
    { icon: 'textsms', label: 'Listagem e gerenciamento de SMS', href: appPath.smsListCancel },
  ];

}
