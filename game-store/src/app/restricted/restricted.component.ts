import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restricted',
  templateUrl: './restricted.component.html',
  styleUrls: ['./restricted.component.css']
})
export class RestrictedComponent implements OnInit {

  public showSection: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.setShowSection();
    });

    this.setShowSection();
  }

  setShowSection(): void {
    const currentRoute = this.activatedRoute.snapshot.firstChild?.routeConfig?.path;
    this.showSection = !(currentRoute === 'edit/:id'|| currentRoute === 'list' || currentRoute === 'register');
  }
}