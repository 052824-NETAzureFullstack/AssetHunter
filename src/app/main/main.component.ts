import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  showError: boolean = false;

  validateScore(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = parseInt(input.value);
    this.showError = (value < 300 || value > 850) ? true : false;
  }
}
