import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrl: './add-restaurant.component.css'
})


export class AddRestaurantComponent implements OnInit{
  


    
  constructor(private route:ActivatedRoute, private router:Router) {
  
  }
  
  ngOnInit(): void {

  }
  

}

