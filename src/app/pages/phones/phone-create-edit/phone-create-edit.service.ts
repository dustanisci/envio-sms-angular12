import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/service/api/api.service';
import { environment } from 'src/environments/environment';
import { ListPhone } from '../model/list-phone';

@Injectable({
  providedIn: 'root'
})
export class PhoneCreateEditService {

  constructor(private api: ApiService) { }

  insertListPhone(listPhone: ListPhone): Observable<void> {
    return this.api.post(environment.apiPhone, listPhone);
  }

  updateListPhone(listPhone: ListPhone): Observable<void> {
    return this.api.put(`${environment.apiPhone}/${listPhone.id}`, listPhone);
  }
}
