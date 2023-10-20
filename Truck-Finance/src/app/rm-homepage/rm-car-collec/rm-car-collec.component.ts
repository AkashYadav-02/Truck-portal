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

      name:"T680 Next Gen",

      price: "17,949",

      imgUrl : "../../assets/Truck1.png",

      speed: 'MX-13',

      gear:"1,550-1,850 lb",

      capacity:12.9,

      type:"405-510 HP"

    },

    {

      name:"T680 Signature Edition",

      price: "61,490",

      imgUrl: "../../assets/Truck2.png",

      speed: 'MX-11',

      gear:"1,250-1,700 lb",

      capacity:10.8,

      type:"355-455 HP"

    },

    {

      name:"T880",
      price: "30,990",
      imgUrl: "../../assets/Truck3.png",

      speed: 'MX-13',

      gear:"1,450–1,850 lb",

      capacity:12.9,

      type:"405-510 HP"

    },

    {

      name:"T280",

      price: "$130,830",

      imgUrl: "../../assets/Truck4.png",

      speed: 'PX-9',

      gear:"860–1,250lb",

      capacity:12.9 ,

      type:"260-450 HP"

    },

    {

      name:"W990",

      price: "$25,989",

      imgUrl: "../../assets/Truck5.png",

      speed: 'MX-13',

      gear:"1,450–1,850lb",

      capacity:12.9,

      type:"405-510 HP"

    },

    {

      name:"T380",

      price: "$47,390",

      imgUrl: "../../assets/Truck6.png",

      speed: 'PX-9',

      gear:"860–1,250 lb",

      capacity:12.5,

      type:"260-450 HP"

    },

    // {

    //   name:"LF 260",

    //   price: "$47,390",

    //   imgUrl: "../../assets/CamryModelImage 2.png",

    //   speed: 'PX-7',

    //   gear:"6 cylinder",

    //   capacity:6.7,

    //   type:"264HP"

    // },

    // {

    //   name:"LF 290",

    //   price: "$47,390",

    //   imgUrl: "../../assets/CamryModelImage 2.png",

    //   speed: 'PX-7',

    //   gear:"6 cylinder",

    //   capacity:6.7,

    //   type:"295HP"

    // },

    // {

    //   name:"XF FTT",

    //   price: "$47,390",

    //   imgUrl: "../../assets/CamryModelImage 2.png",

    //   speed: 'MX-13',

    //   gear:"Automatic",

    //   capacity:12.9,

    //   type:"530HP/2,600 Nm"

    // },
    
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
