import { Component,OnInit } from '@angular/core';
import { RouterOutlet,RouterModule,Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ZillowService } from '../zillow.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, HttpClientModule],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})

export class ResultsComponent implements OnInit {
  data: any;

  constructor(private zillowService: ZillowService) { }

  ngOnInit(): void {
    this.zillowService.getZillowData().subscribe(
      response => {
        this.data = response;
        console.log(this.data);
      },
      error => {
        console.error('Error fetching data', error);
      }
    );
  }
}