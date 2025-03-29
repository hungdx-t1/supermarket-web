import { Component } from '@angular/core';
import { AuthService } from '../../services/AuthService';
import { Router } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  /*
  
  onLogin(): void {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/home']); // Điều hướng sau khi đăng nhập thành công
    } else {
      this.errorMessage = 'Tên đăng nhập hoặc mật khẩu không đúng!';
    }
  }

  */

  onLogin() {
    this.authService.login(this.username, this.password).subscribe(success => {
      if (success) {
        this.router.navigate(['/home']);
      } else {
        this.errorMessage = 'Sai tài khoản hoặc mật khẩu!';
      }
    });
  }
}
