import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HouseingService {
  constructor(private http: HttpClient) {}

  getAllproperties() {
    return this.http.get('data/properties.json');
  }
}
