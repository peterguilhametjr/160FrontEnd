import { Injectable } from '@angular/core';
import {Restaurant} from '../../shared/models/Restaurant';
import { MenuItem } from '../../shared/models/Restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  restaurants:Restaurant[] = [
    {
      id:1,
      name:"Burger King",
      tags: ["FastFood", "Takeout", "Burgers"],
      favorite: true,
      stars: 4.5,
      imageURL: '/assets/images/Restaurants/burgerking.jpg',
      location: "15478 Burger Lane, 95030",
      menu: [{
        foodName: "burger", foodPrice: 5
      }]
    },
    {
      id:2,
      name:"KFC",
      tags: ["FastFood", "Takeout", "Fried Chicken"],
      favorite: true,
      stars: 4.0,
      imageURL: '/assets/images/Restaurants/kfc.jpg',
      location: "25718 Chicken Lane, 95030",
      menu: [{
        foodName: "chicken", foodPrice: 5
      }]
    },
    {
      id:3,
      name:"McDonalds",
      tags: ["FastFood", "Takeout", "Burgers"],
      favorite: false,
      stars: 2.5,
      imageURL: '/assets/images/Restaurants/McDonalds.jpg',
      location: "15479 Burger Lane, 95030",
      menu: [{
        foodName: "burger", foodPrice: 2
      }]
    }
  ];

  restidcount:number = 3;

  constructor() { }

  getRestaurantById(id: number): Restaurant{
    return this.getAll().find(restaurant => restaurant.id == id)!;
  }

  getAll():Restaurant[]{
    return this.restaurants
  }

  addTo(name: string, stars: number, location: string, menu: MenuItem[]):void{
    this.restidcount++;
    this.restaurants.push({
      id: this.restidcount,
      name: name,
      stars: stars,
      location: location,
      menu: menu
    });
  }

  updateRestaurant(id: number, newData: Restaurant): boolean {
    // Find the index of the restaurant with the given ID
    const index = this.restaurants.findIndex(restaurant => restaurant.id == id);
    // console.log("Restaurants ", this.restaurants);
    // If the restaurant with the given ID is found
    if (index != -1) {
      // Update the restaurant data with the new data
      console.log('bamwham kabloom', newData.menu)
      this.restaurants[index] = { ...this.restaurants[index], ...newData };
      //console.log(this.restaurants[index]);
      console.log('bamwham kablam', newData.menu)
      return true; // Return true indicating successful update
    }
    return false;
     // Return false indicating failure to find the restaurant
  }
  
}

