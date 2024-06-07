import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';            // <-- required


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Asset Hunter';
  showError: boolean = false;

  validateScore(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = parseInt(input.value);
    this.showError = (value < 300 || value > 850) ? true : false;
  }

  changeButtonColor(event: Event): void {
    const button = event.target as HTMLInputElement;
    button.classList.add('orange-button');
  }
}
