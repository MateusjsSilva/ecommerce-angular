import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: string = '';
  password: string = '';

  constructor(private _loginService: LoginService, private _router: Router) { }

  login() {
    this._loginService.login(this.user, this.password);

    if (this._loginService.isLoggedIn()) {
      this._loginService.setShowMenu(true);
      this._router.navigate(['/restricted/list']);
    } else {
      this._loginService.setShowMenu(false);
    }
  }
}