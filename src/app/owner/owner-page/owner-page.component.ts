import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../shared/models/Restaurant';
import { RestaurantsService } from '../../services/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-owner-page',
  templateUrl: './owner-page.component.html',
  styleUrl: './owner-page.component.css'
})
export class OwnerPageComponent implements OnInit{

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

import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../shared/models/Restaurant';
import { RestaurantsService } from '../../services/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-owner-page',
  templateUrl: './owner-page.component.html',
  styleUrl: './owner-page.component.css'
})
export class OwnerPageComponent implements OnInit{

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
