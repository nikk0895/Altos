import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, of, throwError } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  // Mock login
  login(email: string, password: string): Observable<any> {
    // Simulate backend authentication
    if (email === 'abc@gmail.com' && password === '12345') {
      const mockResponse = { token: 'mock-jwt-token', role: 'admin' };
      localStorage.setItem('token', mockResponse.token);
      return of(mockResponse);
    } else {
      return throwError(() => new Error('Invalid credentials'));
    }
  }

  // Mock signup
  signup(firstName: string, lastName: string, email: string, password: string): Observable<any> {
    console.log('User registered:', { firstName, lastName, email });
    return of({ message: 'Signup successful' }); // Simulate success
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }
}
