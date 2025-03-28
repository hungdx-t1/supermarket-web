import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  /** Đăng nhập */
  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.API_URL}?username=${username}&password=${password}`)
      .pipe(
        map(users => {
          if (users.length > 0) {
            sessionStorage.setItem('user', JSON.stringify(users[0])); // Lưu session
            return true;
          }
          return false;
        })
      );
  }

  /** Đăng ký */
  register(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.API_URL}?username=${username}`)
      .pipe(
        map(users => {
          if (users.length > 0) {
            return false; // Tài khoản đã tồn tại
          } else {
            this.http.post(`${this.API_URL}`, { username, password }).subscribe();
            return true;
          }
        })
      );
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem('user') !== null;
  }

  /** Đăng xuất */
  logout(): void {
    sessionStorage.removeItem('user');
  }
}
