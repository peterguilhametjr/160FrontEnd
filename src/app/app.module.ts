import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
    DriverPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
