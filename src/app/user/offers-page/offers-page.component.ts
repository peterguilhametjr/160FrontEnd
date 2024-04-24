import { Component, OnInit } from '@angular/core';
import {OffersService} from '../../services/offers/offers.service';
import {Offer} from '../../shared/models/Offer'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offers-page',
  templateUrl: './offers-page.component.html',
  styleUrl: './offers-page.component.css'
})
export class OffersPageComponent implements OnInit{
  offers:Offer[] = [];
  // searchTitle: string;

  constructor(private offersService:OffersService, private route:ActivatedRoute){
    // this.searchTitle = 'Recommended restaurants nearby';
  }

  ngOnInit(): void {
    this.offers = this.offersService.getAll();
  }
}
