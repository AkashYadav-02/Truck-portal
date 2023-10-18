import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RedirectMenuService } from 'src/services/redirect-menu.service';

@Component({
  selector: 'app-rm-car-collec',
  templateUrl: './rm-car-collec.component.html',
  styleUrls: ['./rm-car-collec.component.scss']
})
export class RmCarCollecComponent {
  data:any = {};
  constructor(private router:Router,private fb: FormBuilder,
    private redirectMenu : RedirectMenuService,
     ) {}
  carDetails=[
    {
      name:"2023 Toyota Glanza",
      price: '17,949',
      imgUrl : "../../assets/Toyota-Glanza-060520221539 2.png",
      speed: 2000,
      gear:"Manual",
      capacity:5,
      type:"Petrol"
    },
    {
      name:"2023 Toyota Fortuner",
      price: '61,490',
      imgUrl: "../../assets/Toyota-Fortuner-110120211829 2.png",
      speed: 3577,
      gear:"Automatic",
      capacity:7,
      type:"Diesel"
    },
    {
      name:"2023 Toyota Innova Crysta",
      price: "30,990",
      imgUrl: "../../assets/innovaaa.jpg",
      speed: 4200,
      gear:"Automatic",
      capacity:7,
      type:"Diesel"
    },
    {
      name:"2023 Toyota Vellfire ",
      price: "130,830",
      imgUrl: "../../assets/toyota vellfire.png",
      speed: 2500,
      gear:"CVT",
      capacity:8,
      type:"Petrol"
    },
    {
      name:"2023 Toyota Urban Cruiser ",
      price: '25,989',
      imgUrl: "../../assets/urban-cruiser-hyryder-exterior-right-front-three-quarter-72 2.png",
      speed: 4000,
      gear:"Automatic",
      capacity:4,
      type:"Electric"
    },
    {
      name:"Toyota Camry",
      price: '47,390',
      imgUrl: "../../assets/CamryModelImage 2.png",
      speed: 2593,
      gear:"Automatic",
      capacity:5,
      type:"Hybrid"
    }
    
  ]

  white="../../../assets/logos/heart.png";
  red="../../../assets/logos/heartred.png"
  heartURL=this.white;

  turnRed(){
    if (this.heartURL==this.white){
      this.heartURL=this.red
    }
    else if (this.heartURL==this.red){
      this.heartURL=this.white
    }
  }

  buyNow(num:number){

      for (let index = 0; index < this.carDetails.length; index++) {
        if(index == num){
          this.data = this.carDetails[index];
          break;
        }
      }
      this.redirectWithData("car-sub-redesign",this.data);
  }

  allowCars(num : number){
    let list = [0,1,2];

      for(let i in list){
          if(Number(i) == num) 
            return true;
      }
      return false;
  }

  redirect(path : string){
    this.redirectMenu.redirectTo(path);
  }
  redirectWithData(path : string, data : any){
    this.redirectMenu.redirectWithdata(path,data);
  }
  
}
