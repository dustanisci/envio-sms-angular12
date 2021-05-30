import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { appPath } from 'src/app/app-routing.module';
import { Modal } from 'src/app/shared/components/modal/model/modal';
import { MenssageErrorApi } from 'src/app/shared/helper/error-api';
import { ListPhone } from '../model/list-phone';
import { PhoneListService } from './phone-list.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.scss'],
})
export class PhoneListComponent extends MenssageErrorApi implements OnInit {
  listPhone: ListPhone[] = [] as ListPhone[];
  modal: Modal = {} as Modal;
  idDelete = 0;
  loader = false;

  constructor(private service: PhoneListService, private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.loader = true;
    this.service
      .getAll()
      .pipe(take(1))
      .subscribe({
        next: (resp: ListPhone[]) => {
          this.listPhone = resp;
          this.loader = false;
        },
        error: () => {
          this.loader = false;
          this.modal = this.errorApi();
        },
      });
  }

  edit(listPhone: ListPhone): void {
    this.router.navigate([appPath.phonesEdit, JSON.stringify(listPhone)]);
  }
}
