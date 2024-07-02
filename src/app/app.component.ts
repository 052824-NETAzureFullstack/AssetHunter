import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, RouterModule],
  template: `

  <header class="header">

  <nav>
    <input type="checkbox" id="check">
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
    <div class="nav-mobile">
        <a href="#">Home</a>
        <a href="#">?</a>
        <a href="#">?</a>
        <a href="#">?</a>
    </div>
  </nav>
<!-- 
    <div class="hamburger" onclick="toggleMenu()">
      <span></span>
      <span></span>
      <span></span>
    </div>
    --> 
    <a class="ah-logo-container" [routerLink]="['/']">
      <img class="ah-logo" src="/assets/assetHunterLogo3.png" alt="Asset Hunter Logo" aria-hidden="true">
    </a><br>
  </header>

    <main>
      <section>
        <router-outlet></router-outlet>
        <!-- only need one router outlet, have the outlet point to a component and have it wrap that decides how they are displayed... something that has a side-by-side strucure -->
      </section>

      <footer class="footer">
        <img class="gg-logo" src="assets/garrett_gray_LLC_logo.jpg" alt="Garrett Gray LLC logo" aria-hidden="true"><br><br><br><br><br><br>
        <p>&copy; All rights reserved. Garrett Gray LLC&trade; .</p>
    </footer>

    </main>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Asset Hunter';
}
