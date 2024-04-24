import { Component, OnInit } from '@angular/core';
import {RestaurantsService} from '../../services/restaurants/restaurants.service';
import {Restaurant} from '../../shared/models/Restaurant'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{

  restaurants:Restaurant[] = [];
  searchTitle: string;

  constructor(private restaurantsService:RestaurantsService, private route:ActivatedRoute){
    this.searchTitle = 'Recommended restaurants nearby';
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        this.restaurants = this.restaurantsService.getAll().filter(restuarant => restuarant.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
      } 
      else {
        this.restaurants = this.restaurantsService.getAll();
      }
    })
  }
}
