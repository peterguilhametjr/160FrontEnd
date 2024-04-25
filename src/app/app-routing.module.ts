import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './user/search/search.component';
import { OffersPageComponent } from './user/offers-page/offers-page.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './user/cart/cart.component';
import { RestaurantPageComponent } from './user/restaurant-page/restaurant-page.component';
import { OwnerPageComponent } from './owner/owner-page/owner-page.component';
import { DriverPageComponent } from './driver/driver-page/driver-page.component';
import { AddRestaurantComponent } from './owner/owner-page/add-restaurant/add-restaurant.component';
import { UpdateRestaurantComponent } from './owner/owner-page/update-restaurant/update-restaurant.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'searchPage', component:SearchComponent},
  {path:'searchPage/search/:searchTerm', component:SearchComponent},
  {path:'offersPage', component:OffersPageComponent},
  {path:'cartPage', component:CartComponent},
  {path:'restaurant/:id', component:RestaurantPageComponent},
  {path:'ownerPage', component:OwnerPageComponent},
  {path:'driverPage', component:DriverPageComponent},
  {path:'ownerPage/addPage', component:AddRestaurantComponent},
  {path:'updatePage/:id', component:UpdateRestaurantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
