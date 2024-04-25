import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms'; // Import necessary modules
import { RestaurantsService } from '../../../services/restaurants/restaurants.service';
import { MenuItem } from '../../../shared/models/Restaurant';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  restaurantForm!: FormGroup; // Declare a FormGroup variable

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder, // Inject FormBuilder
    private restaurantService: RestaurantsService
  ) {

  }

  ngOnInit(): void {
    this.initForm(); // Initialize the form when component initializes
  }

  initForm(): void {
    this.restaurantForm = this.fb.group({
      name: ['', Validators.required], // Set up form fields with validators
      location: ['', Validators.required],
      stars: [0, [Validators.required, Validators.max(5)]],
      menuItems: this.fb.array([]) // Initialize an empty form array for menu items
    });
  }

  get menuItems(): FormArray {
    return this.restaurantForm.get('menuItems') as FormArray; // Getter function for menuItems form array
  }

  // Function to add a new menu item field to the form array
  addMenuItem(): void {
    this.menuItems.push(this.fb.group({
      foodName: ['', Validators.required], // Set up form fields with validators
      foodPrice: [0, Validators.required]
    }));
  }

  // Function to remove a menu item field from the form array
  removeMenuItem(index: number): void {
    this.menuItems.removeAt(index);
  }

  // Function to handle form submission
  onSubmit(): void {
    if (this.restaurantForm.valid) {
      const formData = this.restaurantForm.value; // Get form data
      const { name, location, stars, menuItems } = formData; // Destructure form data
      const menu: MenuItem[] = menuItems.map((item: any) => ({ foodName: item.foodName, foodPrice: item.foodPrice })); // Map form data to MenuItem array
      this.restaurantService.addTo(name, stars, location, menu); // Call addTo method with form data
      this.router.navigateByUrl('/ownerPage');
    }
  }
}
