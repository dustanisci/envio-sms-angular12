import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/service/api/api.service';
import { environment } from 'src/environments/environment';
import { Sms } from '../model/sms';

@Injectable({
  providedIn: 'root'
})
export class SmsListCancelService {

  constructor(private api: ApiService) { }

  getAll(): Observable<Sms[]> {
    return this.api.get(environment.apiShedule);
  }
}
