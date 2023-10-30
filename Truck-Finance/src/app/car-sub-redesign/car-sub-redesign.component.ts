import { Component, OnInit, Renderer2 } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';

import { flatMap, partition } from 'rxjs';

import { RedirectMenuService } from 'src/services/redirect-menu.service';

import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-car-sub-redesign',

  templateUrl: './car-sub-redesign.component.html',

  styleUrls: ['./car-sub-redesign.component.scss'],
})
export class CarSubRedesignComponent implements OnInit {
  myObserver;
  currentUrl: any;
  variantName: any = "Default";

  // currentCar:any;

  visible1:boolean=false;
  visible2:boolean=false;

  ownership: any = "Business";
  currentCarDetails!: any;
  eligibleForm: FormGroup;
  techDetailsParameter: any = 0;
  techDetailsParameterList: any = [];
  amountCalc: any;
  amm = 0;
  price = 0;
  localData: any;

  incomingData:any= [];

  totalonroadprice:number = 0;
  totalemiprice:number = 0;

  setCarData(listt: { id: number, roadprice: any, emi: any, quantityy:number}) {
    // console.log("before", this.incomingData);
    console.log("Hellll", listt);
    this.incomingData[listt.id].roadprice = listt.roadprice;
    this.incomingData[listt.id].emi = listt.emi
    this.incomingData[listt.id].quantityy = listt.quantityy
    this.calculateTotalPrice();
    // this.incomingData.forEach((a: { roadprice: number; }) => sum += a.roadprice);
    
  }

  calculateTotalPrice(){
    this.totalonroadprice = 0
    this.totalemiprice = 0
    for (let i=0; i<this.incomingData.length; i++){
      this.totalonroadprice += this.incomingData[i].roadprice * this.incomingData[i].quantityy
      this.totalemiprice += this.incomingData[i].emi * this.incomingData[i].quantityy
    }
    
  }


  specificaiton: any;

  isEligible: number = -1;

  EMI: any;

  colorList: string[] = [];

  maxDownPayment?: number;

  selectedRadio: string = 'large';

  months_24: number = 1000; //3244

  months_36: number = 1500; //2246

  months_48: number = 2000; //1,750

  months_60: number = 2500; //1,452   on 5 % buyback change increase emi by 1k

  months_72: number = 3000; //1,255

  months_84: number = 3500; //1,115

  tenureAdjusted: boolean = false;

  border1: Boolean = false;

  border2: Boolean = false;

  updatedPrice: any;

  storePrice: any;

  service_package: number = 0;

  // selectedColor: string = '45473D';

  globalEMI: number = 0;

  isCarCardVisible = true;
  expandCard() {
    if (this.isCarCardVisible) {
      this.isCarCardVisible = false;
    } else {
      this.isCarCardVisible = true;
    }
  }

  showEmi(input: number) {
    if (input == 3169) {
      this.techDetailsParameter.emi = 3244;
      return 3244;
    }
    return input
  }

  calculateTenure(option: string) {
    this.resetAddedCost();

    switch (option) {
      case 'small':
        if (typeof this.techDetailsParameter.price === 'string') {
          this.techDetailsParameter.price =
            this.techDetailsParameter.price.replace(/,/g, '');
          this.techDetailsParameter.price -= this.months_24;
          console.log('Tenure ' + this.techDetailsParameter.price);
        } else {
          console.log(
            'Type of else loop ======================== ' +
            typeof this.techDetailsParameter.price +
            ' value is ' +
            this.techDetailsParameter.price
          );
          this.techDetailsParameter.price -= this.months_24;
          console.log('Tenure ' + this.techDetailsParameter.price);
        }
        break;
      case 'medium':
        if (typeof this.techDetailsParameter.price === 'string') {
          this.techDetailsParameter.price =
            this.techDetailsParameter.price.replace(/,/g, '');
          this.techDetailsParameter.price -= this.months_36;
          console.log('Tenure ' + this.techDetailsParameter.price);
        } else {
          console.log(
            'Type of else loop ======================== ' +
            typeof this.techDetailsParameter.price +
            ' value is ' +
            this.techDetailsParameter.price
          );
          this.techDetailsParameter.price -= this.months_36;
          console.log('Tenure ' + this.techDetailsParameter.price);
        }
        break;
      case 'large':
        if (typeof this.techDetailsParameter.price === 'string') {
          this.techDetailsParameter.price =
            this.techDetailsParameter.price.replace(/,/g, '');
          this.techDetailsParameter.price -= this.months_48;
          console.log('Tenure ' + this.techDetailsParameter.price);
        } else {
          console.log(
            'Type of else loop ======================== ' +
            typeof this.techDetailsParameter.price +
            ' value is ' +
            this.techDetailsParameter.price
          );
          this.techDetailsParameter.price -= this.months_48;
          console.log('Tenure ' + this.techDetailsParameter.price);
        }
        break;
      case 'xl':
        if (typeof this.techDetailsParameter.price === 'string') {
          this.techDetailsParameter.price =
            this.techDetailsParameter.price.replace(/,/g, '');
          this.techDetailsParameter.price -= this.months_60;
          console.log('Tenure ' + this.techDetailsParameter.price);
        } else {
          console.log(
            'Type of else loop ======================== ' +
            typeof this.techDetailsParameter.price +
            ' value is ' +
            this.techDetailsParameter.price
          );
          this.techDetailsParameter.price -= this.months_60;
          console.log('Tenure ' + this.techDetailsParameter.price);
        }
        break;
      case 'xxl':
        if (typeof this.techDetailsParameter.price === 'string') {
          this.techDetailsParameter.price =
            this.techDetailsParameter.price.replace(/,/g, '');
          this.techDetailsParameter.price -= this.months_72;
          console.log('Tenure ' + this.techDetailsParameter.price);
        } else {
          console.log(
            'Type of else loop ======================== ' +
            typeof this.techDetailsParameter.price +
            ' value is ' +
            this.techDetailsParameter.price
          );
          this.techDetailsParameter.price -= this.months_72;
          console.log('Tenure ' + this.techDetailsParameter.price);
        }
        break;
      case 'xxxl':
        if (typeof this.techDetailsParameter.price === 'string') {
          this.techDetailsParameter.price =
            this.techDetailsParameter.price.replace(/,/g, '');
          this.techDetailsParameter.price -= this.months_84;
          console.log('Tenure ' + this.techDetailsParameter.price);
        } else {
          console.log(
            'Type of else loop ======================== ' +
            typeof this.techDetailsParameter.price +
            ' value is ' +
            this.techDetailsParameter.price
          );
          this.techDetailsParameter.price -= this.months_84;
          console.log('Tenure ' + this.techDetailsParameter.price);
        }
        break;
    }
  }


  resetAddedCost() {
    this.techDetailsParameter.price = this.updatedPrice;
  }



  constructor(
    private redirectMenu: RedirectMenuService,
    private router: Router,
    private renderer: Renderer2,
    private formBuilder: FormBuilder
  ) {
    this.myObserver = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;

        const navigation = this.router.getCurrentNavigation();

        if (navigation?.extras.state) {



          this.techDetailsParameterList = navigation.extras.state;
          this.localData = Object.values(this.techDetailsParameterList);
          this.techDetailsParameter = this.localData[0];
          console.log("constructor");
          console.log(this.techDetailsParameter);


          console.log(this.localData);
          console.log(this.localData.length);
          for (let i = 0; i < this.localData.length; i++) {
            this.incomingData.push({name:this.localData[i].name, roadprice: 0, emi: 0, quantityy:0});

          }



          
          console.log("heyy", this.techDetailsParameter);

          console.log('form credit info', this.techDetailsParameter);
          this.updatedPrice = this.techDetailsParameter.price;
          this.price = Number(
            this.techDetailsParameter.price.replace(/,/g, '')
          );

          console.log(this.price);

          this.amm = Math.ceil(this.techDetailsParameter.price.replace(/,/g, '') * 0.35);

          this.storePrice = this.updatedPrice;
          // console.log('stored price', this.storePrice);

          console.log('tech param:', this.techDetailsParameter);
        }
      }
    });

    this.eligibleForm = this.formBuilder.group({
      Liabilities: new FormControl(),
      Income: new FormControl(),
      Expense: new FormControl(),
    });
  }


  carDetails = [
    {
      name: 'W990',
      engine_capacity: '2.8L/213',
      transmmission_type: 'Manual',
      Fuel_Type: 'Petrol',
      color_options: {
        white: 'White',
        black: 'Black',
        blue: 'Blue',
        grey: 'Grey',
      },
      emi: '811',
      select_variant: ['T680', 'Next Generation', 'Signature Edition'],
    },
    {
      name: 'T680',
      engine_capacity: '12.6L',
      transmmission_type: 'Automatic',
      Fuel_Type: 'Diesel',
      color_options: {
        white: 'White',
        black: 'Black',
        grey: 'Grey',
      },
      emi: '2,778',
      select_variant: ['Next Generation', 'Signature Edition'],
    },
    {
      name: 'T880',
      engine_capacity: '2.2L/213',
      transmmission_type: 'Automatic',
      Fuel_Type: 'Diesel',
      color_options: {
        white: 'Orange',
        black: 'Blue',
        blue: 'Grey',
      },
      emi: '1,400',
      select_variant: ['T680', 'Next Generation', 'Signature Edition'],
    },
    {
      name: '2023 Toyota Vellfire ',
      engine_capacity: '3.5L/213',
      transmmission_type: 'Manual',
      Fuel_Type: 'Diesel',
      color_options: {
        white: 'White',
        black: 'Black',
        blue: 'Blue',
        grey: 'Grey',
      },
    },
    {
      name: '2023 Toyota Urban Cruiser ',
      engine_capacity: '3.5L/213',
      transmmission_type: 'Manual',
      Fuel_Type: 'Diesel',
      color_options: {
        white: 'White',
        black: 'Black',
        blue: 'Blue',
        grey: 'Grey',
      },
    },
    {
      name: 'Toyota Camry',
      engine_capacity: '3.5L/213',
      transmmission_type: 'Manual',
      Fuel_Type: 'Diesel',
      color_options: {
        white: 'White',
        black: 'Black',
        blue: 'Blue',
        grey: 'Grey',
      },
    },
    // {
    //   name: '2023 Toyota Glanza',
    //   engine_capacity: '3.5L/213',
    //   transmmission_type: 'Manual',
    //   Fuel_Type: 'Diesel',
    //   color_options: {
    //     white: 'White',
    //     black: 'Black',
    //     blue: 'Blue',
    //     grey: 'Grey',
    //   },
    // },
    // {
    //   name: '2023 Toyota Fortuner',
    //   engine_capacity: '3.5L/213',
    //   transmmission_type: 'Manual',
    //   Fuel_Type: 'Diesel',
    //   color_options: {
    //     white: 'White',
    //     black: 'Black',
    //     blue: 'Blue',
    //     grey: 'Grey',
    //   },
    // },
    {
      name: '2023 Toyota Innova Crysta',
      engine_capacity: '3.5L/213',
      transmmission_type: 'Manual',
      Fuel_Type: 'Diesel',
      color_options: {
        white: 'White',
        black: 'Black',
        blue: 'Blue',
        grey: 'Grey',
      },
    },
  ];

  //this.currentCar = this.carDetails.filter((car) => { return car.name === this.techDetailsParameter.name; })

  ngOnInit() {
    console.log("refresshh");

    const labels = document.querySelectorAll('label');

    this.currentCarDetails = this.carDetails.filter((car) => { return car.name === this.techDetailsParameter.name });
    console.log(this.currentCarDetails);
    this.variantName = this.currentCarDetails[0].select_variant[0];

    labels.forEach((label) => {
      this.renderer.listen(label, 'click', () => {
        const getValue = label.getAttribute('for');

        const goToParent = label.closest('.select-size');

        if (goToParent) {
          const getInputRadio = goToParent.querySelector(
            `input[id="${getValue}"]`
          );

          if (getInputRadio) {
            console.log(getInputRadio.getAttribute('id'));
          }
        }
      });
    });

    this.filterDetails();

    // $(document).ready(function () {
    //   $('#demo').vc3dEye({
    //     imagePath: '../../assets/3Dimages/', // the location where you’ve put the images.

    //     totalImages: 50, // the number of images you have.

    //     imageExtension: 'jpg', // the extension of the images. Make sure all the images have same extension.
    //   });
    // });



    // this.variantName = this.currentCarDetails[0].select_variant[this.variant];

  }

  percentageValue: number = 35; // Initial percentage value

  displayRadioValue() {
    var loanHire = document.getElementsByName(
      'radio1'
    ) as NodeListOf<HTMLElement>;

    for (var i = 0; i < loanHire.length; i++) {
      if (loanHire[i]) {
        console.log(loanHire[i].nodeValue);
      }
    }
  }

  checkNow() {
    console.log('fomr is ', this.eligibleForm);
    this.eligibleForm.controls['Expense'].value;
    console.log('emi', this.globalEMI);

    console.log('Liabiliyt', this.eligibleForm.controls['Liabilities'].value);
    console.log('Income', this.eligibleForm.controls['Income'].value);
    console.log('emi', this.globalEMI);

    let Liabilities = parseInt(this.eligibleForm.controls['Liabilities'].value);
    let income = parseInt(this.eligibleForm.controls['Income'].value);

    // let isElible = (Liabilities + this.globalEMI)/ income)* 100;
    // let isEligible: number = (parseInt(Liabilities) + parseInt(this.globalEMI)) / parseInt(income) * 100;

    let numerator =
      this.eligibleForm.controls['Liabilities'].value + this.globalEMI;
    console.log('num', numerator);
    let numDr = numerator / this.eligibleForm.controls['Income'].value;
    let into = numDr * 100;
    console.log('into', into);

    // console.log("resutl",isElible/100);
    const liabilitiesValue: number = parseFloat(
      this.eligibleForm.controls['Liabilities'].value
    );
    const incomeValue: number = parseFloat(
      String(this.eligibleForm.controls['Income'].value)
    );
    this.isEligible =
      isNaN(liabilitiesValue) || isNaN(incomeValue)
        ? NaN
        : ((liabilitiesValue + this.globalEMI) / incomeValue) * 100;

    console.log('Result:', this.isEligible);
  }

  tenureList = {
    small: "24",
    medium: "36",
    large: "48",
    xl: "60",
    xxl: "72",
    xxxl: "84"
  }


  eligibality() {
    if (this.isEligible < 60 && this.isEligible >= 0) {
      return 'true'
    }
    else if (this.isEligible >= 60) {
      return 'false'
    } else {
      return 'none'
    }

  }

  // Function to update the percentage value when the slider changes

  updatePercentage(event: Event) {
    const sliderValue = (event.target as HTMLInputElement).value;

    this.percentageValue = parseFloat(sliderValue);
    if (typeof this.techDetailsParameter.price === 'string') {
      this.techDetailsParameter.price = this.techDetailsParameter.price.replace(
        /,/g,
        ''
      );
      this.amm = Math.ceil(
        this.techDetailsParameter.price.replace(/,/g, '') *
        (this.percentageValue / 100)
      );
    } else {
      this.amm = Math.ceil(
        this.techDetailsParameter.price * (this.percentageValue / 100)
      );
    }
    console.log('update percentage clg ' + this.amm);
  }

  isUpperVisible = true;
  isLowerVisible = false;
  isMidVisible = false;
  loanHire = 'Lease';

  onClick() {
    if (this.isUpperVisible) {
      this.isUpperVisible = false;
    } else {
      this.isUpperVisible = true;
    }
  }

  isVariantExpand = false;

  expandVariant() {
    if (this.isVariantExpand) {
      this.isVariantExpand = false;
    } else {
      this.isVariantExpand = true;
    }
  }

  getColorList(spec: any) {
    let colors = Object.keys(spec.color_options).map(
      (key) => spec.color_options[key]
    );

    let flattenedColor = [].concat(...colors);

    this.colorList.push(...flattenedColor);
  }

  filterDetails() {
    this.specificaiton = this.carDetails.find(
      (element) => element.name == this.techDetailsParameter.name
    );

    this.getColorList(this.specificaiton);
  }

  onPress() {
    if (this.isLowerVisible) {
      this.isLowerVisible = false;
    } else {
      this.isLowerVisible = true;
    }
  }

  onTap() {
    if (this.isMidVisible) {
      this.isMidVisible = false;
    } else {
      this.isMidVisible = true;
    }
  }

  outline(event: Event) {
    (<HTMLButtonElement>event.target).style.outlineColor = (<HTMLButtonElement>(
      event.target
    )).id;
  }

  redirect(path: string) {
    this.redirectMenu.redirectTo(path);
  }

  backPage() {
    // if data need to carry then this will bring price in original position
    this.techDetailsParameter.price = this.storePrice;
    this.redirect('rm-car');
  }

  homepage() {
    this.redirect('homepage');
  }
  onSubmit() {
    this.redirect('apply-now-flow-1');
  }

  applyNow() {
    const now = new Date()
    // Income Liabilities
    this.techDetailsParameter.price = this.storePrice;
    if (this.globalEMI == 3169) {
      this.globalEMI = 3244
    }
    this.techDetailsParameter.emi = this.globalEMI;

    let data = {
      image: this.techDetailsParameter.imgUrl,

      name: this.techDetailsParameter.name,

      price: this.totalonroadprice,

      emi: this.totalemiprice,

      option: this.service_package,
      datee: now.toLocaleString()
    };

    console.log('data->', data);

    this.redirectMenu.redirectWithdata('apply-now-flow-1', data);
  }

  calculateEMI(Price: string) {
    if (typeof Price === 'string') {
      let price = Price.replace(/,/g, '');
      let totalCarPrice: number = parseFloat(price);
      let annualVerdanaestRate: number = 7;
      let tenureInYears: number = 2;
      const monthlyVerdanaestRate = annualVerdanaestRate / 12 / 100;
      const numberOfMonths = tenureInYears * 12;
      const roughemi =
        (totalCarPrice *
          monthlyVerdanaestRate *
          Math.pow(1 + monthlyVerdanaestRate, numberOfMonths)) /
        (Math.pow(1 + monthlyVerdanaestRate, numberOfMonths) - 1);
      // console.log(emi.toFixed(0));
      const emi = Math.trunc(roughemi) + 1000 * this.mile;
      this.globalEMI = emi;
      // console.log('EMI is of if loop' + emi + typeof emi);
      return emi;
    } else {
      let price = Price;
      let totalCarPrice: number = parseFloat(price);
      let annualVerdanaestRate: number = 7;
      let tenureInYears: number = 2;
      const monthlyVerdanaestRate = annualVerdanaestRate / 12 / 100;
      const numberOfMonths = tenureInYears * 12;
      const roughemi =
        (totalCarPrice *
          monthlyVerdanaestRate *
          Math.pow(1 + monthlyVerdanaestRate, numberOfMonths)) /
        (Math.pow(1 + monthlyVerdanaestRate, numberOfMonths) - 1);
      // console.log(emi.toFixed(0));
      let emi = Math.trunc(roughemi) + 1000 * this.mile;
      // console.log('EMI is of else loop ' + emi + typeof emi);
      this.globalEMI = emi;
      return emi;
    }
  }

  variant = 0;
  // this.variantName = this.currentCarDetails[0].select_variant[this.variant];
  // variantName = "";
  service = 0;
  serviceName = "Standard";
  mile = 0;
  selecVar(num: number) {
    if (num == 0) {
      if (this.service != 0) {
        this.storePrice = this.price + this.service * 10000;
      } else {
        this.storePrice = this.price;
      }
    } else {
      this.storePrice = this.price + (num + this.service) * 10000;
    }
    this.variant = num;
    // this.techDetailsParameter.price = this.storePrice;
    console.log(this.storePrice);
    this.variantName = this.currentCarDetails[0].select_variant[this.variant];
    // console.log(this.variantName);
    // console.log(this.currentCarDetails[0].select_variant);


  }

  selecService(num: number) {
    if (num == 0) {
      this.service_package = num;
      console.log('serive option ' + this.service_package);
      if (this.variant != 0) {
        this.storePrice = this.price + this.variant * 10000;
      } else {
        this.storePrice = this.price;
      }
    } else {
      this.service_package = num;
      console.log('serive option else loop ' + this.service_package);
      this.storePrice = this.price + (num + this.variant) * 10000;
    }
    this.service = num;
    // this.techDetailsParameter.price = this.storePrice;
    console.log(this.storePrice);
  }

  selecMile(num: number) {
    this.mile = num;
  }


  dashCamPrice = "$ 0";
  wifiPrice = "$ 0";

  addBorder() {
    let elem = document.getElementById('speedometer') as HTMLElement;
    let check1 = document.getElementById('radio13') as HTMLInputElement;

    if (this.border1 == false) {
      // this.check1 = false;

      elem.setAttribute(
        'style',
        'border:1px solid #0381BA;margin-right: 1rem;height: 2.6rem;width: auto;padding: 0.2rem;border-radius:0.2rem'
      );

      this.border1 = true;
      check1.checked = true;
      this.dashCamPrice = "$ 300";

      let myPrice = this.techDetailsParameter.price;

      if (typeof this.storePrice == 'string') {
        this.storePrice = this.storePrice.replace(/,/g, '');
        this.updatedPrice = parseInt(this.storePrice) + 300;
      } else {
        this.updatedPrice = this.storePrice + 300;
      }

      console.log('before ' + myPrice);

      console.log('paseint ' + parseInt(myPrice));

      // this.updatedPrice = parseInt(myPrice) + 300;

      this.storePrice = this.updatedPrice;

      console.log(
        'Inside if loop of add border ' +
        this.techDetailsParameter.price +
        ' ' +
        typeof this.techDetailsParameter.price +
        ' store price ' +
        this.storePrice
      );

      this.calculateEMI(this.techDetailsParameter.price);
      // this.calculateTenureFromBorder(this.techDetailsParameter.price,"border");
    } else {
      elem.setAttribute('style', 'border:none');

      this.border1 = false;
      check1.checked = false;
      this.dashCamPrice = "$ 0";

      let myPrice = this.techDetailsParameter.price;
      if (typeof this.storePrice == 'string') {
        this.storePrice = this.storePrice.replace(/,/g, '');
        this.updatedPrice = parseInt(this.storePrice) - 300;
      } else {
        this.updatedPrice = this.storePrice - 300;
      }
      // myPrice = myPrice.replace(/,/g, '');

      console.log('before ' + myPrice);

      console.log('paseint ' + parseInt(myPrice));

      this.storePrice = this.updatedPrice;

      console.log(
        'Inside else loop of emi ' +
        this.techDetailsParameter.price +
        ' store price ' +
        typeof this.storePrice +
        ' updated price ' +
        this.updatedPrice +
        ' store price ' +
        this.storePrice
      );

      this.calculateEMI(this.techDetailsParameter.price);
      // this.calculateTenureFromBorder(this.techDetailsParameter.price,"border");
    }
    // console.log(this.check1);

  }

  addBorder2() {
    let elem = document.getElementById('engine') as HTMLElement;
    let check2 = document.getElementById('radio14') as HTMLInputElement;

    if (this.border2 == false) {
      // this.check2 = true;
      elem.setAttribute(
        'style',
        'border:1px solid #0381BA;margin-right: 1rem;height: 2.5rem;width: auto;padding: 0.3rem;border-radius:0.2rem'
      );

      this.border2 = true;
      check2.checked = true;
      this.wifiPrice = "$ 2400";

      let myPrice = this.techDetailsParameter.price;

      if (typeof this.storePrice == 'string') {
        this.storePrice = this.storePrice.replace(/,/g, '');
        this.updatedPrice = parseInt(this.storePrice) + 2400;
      } else {
        this.updatedPrice = this.storePrice + 2400;
      }

      console.log('before ' + myPrice);

      console.log('paseint ' + parseInt(myPrice));

      // this.updatedPrice = parseInt(myPrice) + 300;

      this.storePrice = this.updatedPrice;

      console.log(
        'Inside if loop of add border ' +
        this.techDetailsParameter.price +
        ' ' +
        typeof this.techDetailsParameter.price +
        ' store price ' +
        this.storePrice
      );

      this.calculateEMI(this.techDetailsParameter.price);
      // this.calculateTenureFromBorder(this.techDetailsParameter.price,"border");
    } else {
      elem.setAttribute('style', 'border:none');
      // this.check2 = false;

      this.border2 = false;
      check2.checked = false;
      this.wifiPrice = "$ 0";

      let myPrice = this.techDetailsParameter.price;
      if (typeof this.storePrice == 'string') {
        this.storePrice = this.storePrice.replace(/,/g, '');
        this.updatedPrice = parseInt(this.storePrice) - 2400;
      } else {
        this.updatedPrice = this.storePrice - 2400;
      }
      // myPrice = myPrice.replace(/,/g, '');

      console.log('before ' + myPrice);

      console.log('paseint ' + parseInt(myPrice));

      this.storePrice = this.updatedPrice;

      console.log(
        'Inside else loop of emi ' +
        this.techDetailsParameter.price +
        ' store price ' +
        typeof this.storePrice +
        ' updated price ' +
        this.updatedPrice +
        ' store price ' +
        this.storePrice
      );

      this.calculateEMI(this.techDetailsParameter.price);
      // this.calculateTenureFromBorder(this.techDetailsParameter.price,"border");
    }
  }

  numberWithCommas(x: any) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  onClickMenu(){
    
  }
}
