import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../shared/models/Restaurant';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from '../../services/restaurants/restaurants.service';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrl: './restaurant-page.component.css'
})
export class RestaurantPageComponent implements OnInit {
  restaurant!:Restaurant;
  constructor(private activatedRoute:ActivatedRoute, private restaurantsService: RestaurantsService){
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
        this.restaurant = restaurantsService.getRestaurantById(params['id']);
    })
   }

  ngOnInit(): void{

  }
}
