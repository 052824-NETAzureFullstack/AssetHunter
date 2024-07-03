import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ZillowService {
  private apiUrl = 'https://api.zillow.com/...';
  private apiKey = 'ZILLOW_API_KEY'; 

  constructor(private http: HttpClient) { }

  getZillowData(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    return this.http.get(this.apiUrl, { headers });
  }
}