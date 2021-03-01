import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/service/api/api.service';
import { environment } from 'src/environments/environment';
import { ListPhone } from '../model/list-phone';

@Injectable({
  providedIn: 'root'
})
export class PhoneListService {

  constructor(private api: ApiService) { }

  getAll(): Observable<ListPhone[]> {
    return this.api.get(environment.apiPhone);
  }

}
