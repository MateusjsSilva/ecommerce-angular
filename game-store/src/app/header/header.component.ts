import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.initializeMobileNavToggle();
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