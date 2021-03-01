import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from './model/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Input() items: MenuItem[] = [];
  isOpen = false;

  constructor(private router: Router) {
  }

  click(href: string): void {
    this.router.navigate([href]);
    this.isOpen = false;
  }

}
