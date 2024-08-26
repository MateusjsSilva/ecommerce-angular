import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  showMenu = new Subject<boolean>();

  constructor(private _router: Router) { }

  login(username: string, password: string): void {
    if (username === "aluno" && password === "1234") {
      localStorage.setItem('token', 'qwer1234');
    }
  }

  setShowMenu(value: boolean) {
    this.showMenu.next(value);
  }

  getShowMenu() {
    return this.showMenu.asObservable();
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }  
}