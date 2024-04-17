import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { OffersPageComponent } from './offers-page/offers-page.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'searchPage', component:SearchComponent},
  {path:'searchPage/search/:searchTerm', component:SearchComponent},
  {path:'offersPage', component:OffersPageComponent},
  {path:'cartPage', component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
