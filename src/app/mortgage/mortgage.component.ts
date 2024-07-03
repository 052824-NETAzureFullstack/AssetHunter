import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-mortgage',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterModule, FormsModule],
  templateUrl: './mortgage.component.html',
  styleUrl: './mortgage.component.css'
})
export class MortgageComponent {
  showError: boolean = false;

  validateScore(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = parseInt(input.value);
    this.showError = (value < 300 || value > 850) ? true : false;
  }
}
