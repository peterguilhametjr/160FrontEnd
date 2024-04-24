import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withFetch, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './user/header/header.component';
import { SearchComponent } from './user/search/search.component';
import { SearchBarComponent } from './user/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './user/cart/cart.component';
import { OffersPageComponent } from './user/offers-page/offers-page.component';
import { RestaurantPageComponent } from './user/restaurant-page/restaurant-page.component';
import { OwnerPageComponent } from './owner/owner-page/owner-page.component';
import { DriverPageComponent } from './driver/driver-page/driver-page.component';
import { OwnerTaskBarComponent } from './owner/owner-task-bar/owner-task-bar.component';
import { AddRestaurantComponent } from './owner/owner-page/add-restaurant/add-restaurant.component';
import { RestaurantDetailsComponent } from './owner/owner-page/restaurant-details/restaurant-details.component';
import { UpdateRestaurantComponent } from './owner/owner-page/update-restaurant/update-restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    SearchBarComponent,
    HomeComponent,
    CartComponent,
    OffersPageComponent,
    RestaurantPageComponent,
    OwnerPageComponent,
    DriverPageComponent,
    OwnerTaskBarComponent,
    AddRestaurantComponent,
    RestaurantDetailsComponent,
    UpdateRestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],

providers: [provideHttpClient(withFetch()), provideClientHydration()],

bootstrap: [AppComponent]
})
export class AppModule { }
