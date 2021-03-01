import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/service/api/api.service';
import { environment } from 'src/environments/environment';
import { Sms } from '../model/sms';

@Injectable({
  providedIn: 'root'
})
export class SmsSheduleEditService {

  constructor(
    private api: ApiService) { }

  insertSms(sms: Sms): Observable<void> {
    return this.api.post(environment.apiShedule, sms);
  }

  updateSms(sms: Sms): Observable<void> {
    return this.api.put(`${environment.apiShedule}/${sms.id}`, sms);
  }
}
