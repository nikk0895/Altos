import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  errorMessage = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    // ✅ Check if code runs in the browser
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');
      if (token) {
        this.router.navigate(['/dashboard']);
      }
    }
  }

  login(): void {
  if (!isPlatformBrowser(this.platformId)) return; // SSR-safe guard

  this.authService.login(this.username, this.password).subscribe({
    next: (response) => {
      localStorage.setItem('token', response.token); // ✅ Save mock token
      this.errorMessage = '';
      this.router.navigate(['/dashboard']); // ✅ Navigate
    },
    error: () => {
      this.errorMessage = 'Invalid credentials';
    }
  });
}

}
