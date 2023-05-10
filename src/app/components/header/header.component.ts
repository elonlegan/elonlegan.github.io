import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  burgerMenuActive: boolean = false;

  hideShow() {
    console.log('hideShow');
    this.burgerMenuActive = !this.burgerMenuActive;
    localStorage.setItem('menu', `${this.burgerMenuActive}`);
  }
}
