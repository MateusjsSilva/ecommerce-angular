import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'GameStore';

  ngOnDestroy() {
    if (typeof window !== 'undefined') {
      localStorage.clear();
    }
  }
}