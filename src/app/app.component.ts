import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, RouterModule],
  template: `
    <style>
      .container { max-width: 600px; margin: 0 auto; }
      .row { margin-bottom: 15px; }
      .input-group { margin-bottom: 15px; }
      .input-group-icon { position: relative; }
      .input-icon { position: absolute; left: 10px; top: 10px; }
      .col-half { width: 48%; display: inline-block; }
      .col-third { width: 30%; display: inline-block; }
    </style>
    <main>
      <header class="header">
        <div class="hamburger" onclick="toggleMenu()">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <a class="custom-underline" [routerLink]="['/']">
          <img class="ah-logo" src="assets/assetHunterLogo3.png" alt="Asset Hunter Logo" aria-hidden="true">
        </a><br>
      </header>

      <section class="metrics">
        <router-outlet></router-outlet>
      </section>

      <section class="terms">
        <router-outlet></router-outlet>
      </section>

      <footer class="footer">
        <img class="gg-logo" src="assets/garrett_gray_LLC_logo.jpg" alt="Garrett Gray LLC logo" aria-hidden="true"><br><br><br><br><br><br>
        <p>&copy; All rights reserved. Garrett Gray LLC&trade; 2025. </p>
    </footer>

    </main>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Asset Hunter';

}
