import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private loggedInSubject = new BehaviorSubject<boolean>(this.isLoggedIn());

  constructor(private _router: Router) { }

  login(username: string, password: string): void {
    if (username === "aluno" && password === "1234") {
      localStorage.setItem('token', 'qwer1234');
      this.loggedInSubject.next(true);
    } else {
      this.loggedInSubject.next(false);
    }
  }

  logout(): void {
    localStorage.removeItem('token')
    this.loggedInSubject.next(false);
    this._router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  getLoggedInStatus() {
    return this.loggedInSubject.asObservable();
  }
}