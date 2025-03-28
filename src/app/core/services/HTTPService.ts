import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap, throwError } from 'rxjs';

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

  public listStocks(): Observable<any> {
    const url = `${this.REST_API_SERVER}/stocks`;
    return this.http.get<any>(url, this.httpOptions);
  }

  public addStock(body: any): Observable<any> {
    const url = `${this.REST_API_SERVER}/stocks`;
    console.log('postStock= ', url);
    console.log('postStock: body', body);
    return this.http.post<any>(url, body);
  }

  public deleteStock(code: string): Observable<any> {
    // const url = `${this.REST_API_SERVER}/stocks?code=${code}`;
    // return this.http.delete<any>(url);

    return this.findStockIDByCode(code).pipe(
      switchMap((id) => {
        if (id !== null) {
          return this.http.delete<any>(`${this.REST_API_SERVER}/stocks/${id}`);
        } else {
          return throwError(() => new Error(`Không tìm thấy stock với code: ${code}`));
        }
      })
    );
  }

  public updateStock(body: any) {
    const url = `${this.REST_API_SERVER}/stocks`;
    return this.http.put<any>(url, body);
  }

  public findStockByCode(code: string): Observable<any> {
    return this.http.get<any[]>(`${this.REST_API_SERVER}/stocks?code=${code}`);
  }

  public findStockIDByCode(code: string): Observable<number | null> {
    return this.http.get<any[]>(`${this.REST_API_SERVER}/stocks?code=${code}`).pipe(
      map((stocks) => (stocks.length > 0 ? stocks[0].id : null))
    );
  }
}
