import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(username: string, password: string): Observable<any> {
    // Dummy hardcoded credentials
    if (username === 'admin' && password === '12345') {
      // Simulate backend delay
      return of({ token: 'dummy-token' }).pipe(delay(500));
    } else {
      return throwError(() => new Error('Invalid credentials'));
    }
  }
}
