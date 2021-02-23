import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiBaseService {

  constructor(private http: HttpClient) { }

  getData(url: any): Observable<any> {
    return this.http.get(url);
  }
}
