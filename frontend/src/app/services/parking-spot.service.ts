import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParkingSpotService {
  private baseUrl = 'http://localhost:2001/api/parking';

  constructor(private http: HttpClient) {}

  getParkingSpots(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
}
