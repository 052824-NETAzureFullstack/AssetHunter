import { Component } from '@angular/core';
import { RouterOutlet,RouterModule,Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {

}
