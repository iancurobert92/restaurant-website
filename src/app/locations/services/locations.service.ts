import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantLocation } from '../models';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  private baseUrl = 'http://localhost:8000/locations';

  constructor(private http: HttpClient) { }

  getAll(): Observable<RestaurantLocation[]> {
    return this.http.get<RestaurantLocation[]>(this.baseUrl);
  }
}
