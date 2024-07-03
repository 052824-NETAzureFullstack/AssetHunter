import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, RouterModule],
  template: `


  <header class="header">
    <div class="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <a class="ah-logo-container" routerLink="/">
      <img class="ah-logo" src="/assets/assetHunterLogo3.png" alt="Asset Hunter Logo" aria-hidden="true">
    </a><br>
  </header>

  <main>
    <section>
      <router-outlet>  </router-outlet>
    </section>
  </main>
  
  <footer class="footer">
    <img class="gg-logo" src="assets/garrett_gray_LLC_logo.jpg" alt="Garrett Gray LLC logo" aria-hidden="true"><br><br><br><br><br><br>
    <p>&copy; All rights reserved. Garrett Gray LLC&trade; .</p>
  </footer>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Asset Hunter';
}
