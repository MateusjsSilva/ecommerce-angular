import { Component, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(private _authService: AuthService, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.initializeMobileNavToggle();
    
    this._authService.getLoggedInStatus().subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
  }

  logout() {
    this._authService.logout();
  }

  initializeMobileNavToggle(): void {
    // Wait until the DOM is fully loaded before attaching event listeners
    setTimeout(() => {
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
    }, 0); // Ensure DOM is loaded
  }
}