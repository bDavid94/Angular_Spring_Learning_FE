import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class HomeService {

  public readonly endpoint = `${environment.api}/hello/customers`;

  constructor(private http: HttpClient) { }

  public getCustomers(): Observable<any> {
    return this.http.get<any>(this.endpoint);
  }
}
