import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
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

  changeButtonColor(event: Event): void {
    const button = event.target as HTMLInputElement;
    button.classList.add('button-clicked');
  }
}
