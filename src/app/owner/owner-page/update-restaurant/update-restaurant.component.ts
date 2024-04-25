import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { RestaurantsService } from '../../../services/restaurants/restaurants.service';
import { Restaurant, MenuItem } from '../../../shared/models/Restaurant';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {
  restaurantForm!: FormGroup;
  restaurantId: number = 0;
  restaurantData: Restaurant | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private restaurantService: RestaurantsService
  ) { }

  ngOnInit(): void {
    this.restaurantId = this.route.snapshot.params['id'];
    this.restaurantData = this.restaurantService.getRestaurantById(this.restaurantId);
    console.log(this.restaurantData.menu);
    if (this.restaurantData) {
      this.initForm(this.restaurantData);
    } else {
      // Handle case where restaurant data is not found
    }
  }

  initForm(restaurant: Restaurant): void {
    this.restaurantForm = this.fb.group({
      name: [restaurant.name, Validators.required],
      location: [restaurant.location, Validators.required],
      stars: [restaurant.stars, Validators.required],
      menu: this.fb.array([]), // Initialize an empty form array for menu items
      
    });

    // Populate menu items if they exist
    if (restaurant.menu && restaurant.menu.length > 0) {
      console.log('menu:', restaurant.menu);
      restaurant.menu.forEach((menuItem: MenuItem) => {
        this.addMenuItem(menuItem.foodName, menuItem.foodPrice);
        // console.log('wtffff bro',restaurant)
      });

    }
  }


  get menu(): FormArray {
    return this.restaurantForm.get('menu') as FormArray;
  }

  addMenuItem(foodName: string = '', foodPrice: number = 0): void {
    this.menu.push(this.fb.group({
      foodName: [foodName, Validators.required],
      foodPrice: [foodPrice, Validators.required]
    }));
  }

  removeMenuItem(index: number): void {
    this.menu.removeAt(index);
  }

  onSubmit(): void {
    if (this.restaurantForm.valid) {
      const formData = this.restaurantForm.value;

      console.log("not hello there anikan", formData.menu);
      console.log("not hello there anikan sky", formData);
      this.restaurantService.updateRestaurant(this.restaurantId, formData);
      this.router.navigateByUrl('/ownerPage');
      console.log("not hello there ", formData.menu);

    }
  }
}
