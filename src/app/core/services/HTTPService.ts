import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock';

@Injectable({
  providedIn: 'root',
})
export class HTTPServiceService {
  private REST_API_SERVER = 'http://localhost:3000';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  public getStocks(): Observable<any> {
    const url = `${this.REST_API_SERVER}/stocks`;
    return this.http.get<any>(url, this.httpOptions);
  }

  public postStock(body: any): Observable<any> {
    const url = `${this.REST_API_SERVER}/stocks`;
    console.log('postStock= ', url);
    console.log('postStock: body', body);
    // return this.http.put<any>(url, body, this.httpOptions);
    return this.http.put<any>(url, body);
  }

  public deleteStock() {}

  public updateStock() {}
}
