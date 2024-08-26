import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor( private _router: Router, private _loginService: LoginService) { }

  ngOnInit(): void {

    // Initialize the mobile menu functionality
    this.initializeMobileNavToggle();

    // Subscribe to the Subject to receive login status
    this._loginService.getShowMenu().subscribe((showMenu) => {
      console.log('Show Menu Status:', showMenu);
      this.isLoggedIn = showMenu;
    });    
  }

  logout(){
    localStorage.removeItem('token');
    this._loginService.setShowMenu(false);
    this._router.navigate(['/login']);
  }

  initializeMobileNavToggle(): void {
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle') as HTMLElement;

    const mobileNavToggle = (): void => {
      const body = document.querySelector('header') as HTMLElement;

      body.classList.toggle('mobile-nav-active');
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    };

    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener('click', mobileNavToggle);
    }

    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        const body = document.querySelector('body') as HTMLElement;
        if (body.classList.contains('mobile-nav-active')) {
          mobileNavToggle();
        }
      });
    });
  }
  
}