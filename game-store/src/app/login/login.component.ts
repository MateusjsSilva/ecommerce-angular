import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: string = '';
  password: string = '';

  constructor(private _authService: AuthService, private _router: Router) { }

  login() {
    this._authService.login(this.user, this.password);
    this._router.navigate(['/restricted']);
  }
}