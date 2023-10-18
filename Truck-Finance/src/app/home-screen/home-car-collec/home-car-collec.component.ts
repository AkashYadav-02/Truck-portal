import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RedirectMenuService } from 'src/services/redirect-menu.service';

@Component({
  selector: 'app-home-car-collec',
  templateUrl: './home-car-collec.component.html',
  styleUrls: ['./home-car-collec.component.scss']
})
export class HomeCarCollecComponent {
  constructor(private router:Router, private redirectMenu : RedirectMenuService){

  }


  redirect(path : string){
    this.redirectMenu.redirectTo(path);
  }
  value: number = 50;
  carDetails=[
    {
      name:"2023 Toyota Glanza",
      price: "$17,949",
      imgUrl : "../../assets/Toyota-Glanza-060520221539 2.png",
      speed: 2000,
      gear:"Manual",
      capacity:5,
      type:"Petrol"
    },
    {
      name:"2023 Toyota Fortuner",
      price: "$61,490",
      imgUrl: "../../assets/Toyota-Fortuner-110120211829 2.png",
    
      speed: 3577,
      gear:"Automatic",
      capacity:7,
      type:"Diesel"
    },
    {
      name:"2023 Toyota Innova Crysta",
      price: "$30,990",
      imgUrl: "../../assets/crysta.png",
      speed: 4200,
      gear:"Automatic",
      capacity:7,
      type:"Diesel"
    },
    {
      name:"2023 Toyota Vellfire ",
      price: "$130,830",
      imgUrl: "../../assets/toyota vellfire.png",
      speed: 2500,
      gear:"CVT",
      capacity:8,
      type:"Petrol"
    },
    {
      name:"2023 Toyota Urban Cruiser ",
      price: "$25,989",
      imgUrl: "../../assets/urban-cruiser-hyryder-exterior-right-front-three-quarter-72 2.png",
      speed: 4000,
      gear:"Automatic",
      capacity:4,
      type:"Electric"
    },
    {
      name:"Toyota Camry",
      price: "$47,390",
      imgUrl: "../../assets/CamryModelImage 2.png",
      speed: 2593,
      gear:"Automatic",
      capacity:5,
      type:"Hybrid"
    },
    
   
    
    
  ]

}
