import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DarkModeService } from 'angular-dark-mode';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  burgerMenuActive: boolean = false;
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;

  constructor(private darkModeService: DarkModeService) {}

  hideShow() {
    console.log('hideShow');
    this.burgerMenuActive = !this.burgerMenuActive;
    localStorage.setItem('menu', `${this.burgerMenuActive}`);
  }

  onToggle(): void {
    this.darkModeService.toggle();
  }
}
