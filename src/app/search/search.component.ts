import { Component } from '@angular/core';
import {RestaurantsService} from '../services/restaurants/restaurants.service';
import {Restaurant} from '../shared/models/Restaurant'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  restaurants:Restaurant[] = [];
  constructor(private restaurantsService:RestaurantsService){

  }

  ngOnInit(): void {
    this.restaurants = this.restaurantsService.getAll();
  }

}
