import { Injectable } from '@angular/core';
//import { RestaurantsService } from './services/restaurants/restaurants.service'; 

import { Restaurant } from './shared/models/Restaurant';
import { Offer } from './shared/models/Offer';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  restaurants: Restaurant[] = []; // Corrected variable name to restaurants
  Offers: Offer[] = [];
  
  getAll: any;

 // getAll: any;
  constructor(    private http: HttpClient,
  ) { }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>('/api/searchPage');
  }

  getOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>('/api/offersPage');
  }
  getRestaurantById(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`/api/restaurant/${id}`);
  }


}
