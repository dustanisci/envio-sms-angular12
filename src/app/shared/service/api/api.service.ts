import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  get(url: string, httpHeaders?: any): Observable<any> {
    return this.http.get<any>(url, { headers: httpHeaders });
  }

  post(url: string, value: any, httpHeaders?: any): Observable<any> {
    return this.http.post<any>(url, value, { headers: httpHeaders });
  }

  put(url: string, value: any, httpHeaders?: any): Observable<any> {
    return this.http.put<any>(`${url}`, value, { headers: httpHeaders });
  }

  delete(url: string, id: any, httpHeaders?: any): Observable<any> {
    return this.http.delete<any>(`${url}/${id}`, { headers: httpHeaders });
  }

}
