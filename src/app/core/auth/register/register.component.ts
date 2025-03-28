import { Component } from '@angular/core';
import { AuthService } from '../../services/AuthService';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username = '';
  password = '';
  message = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    this.authService.register(this.username, this.password).subscribe(success => {
      if (success) {
        this.message = 'Đăng ký thành công! Hãy đăng nhập.';
        setTimeout(() => this.router.navigate(['/login']), 2000);
      } else {
        this.message = 'Tài khoản đã tồn tại!';
      }
    });
  }
}
