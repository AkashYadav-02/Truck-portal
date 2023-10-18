import { Dialog } from '@angular/cdk/dialog';

import { Component, OnInit } from '@angular/core';

import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

import { NavigationEnd, Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

// import { Router } from '@angular/router';

import { RedirectMenuService } from 'src/services/redirect-menu.service';

import { MessageService } from 'primeng/api';

import { leftcard } from '../carddetails';

 

// import { Route } from '@angular/router';

@Component({

  selector: 'app-credit-information',

  templateUrl: './credit-information.component.html',

  styleUrls: ['./credit-information.component.scss'],

})

export class CreditInformationComponent implements OnInit {

  isChecked: boolean = false;

  myObserver;

  currentUrl: any;

  techDetailsParameter: any;

  creditScreenData: any;

  leftcard = leftcard;
  currentInstallment : any;

  DSR_ratio : number = 0;

  uploadedFiles: any[] = [];

  showCredit: boolean = true;

  submitPopup: boolean = false;

  isShowInfoMsg: boolean = false;

  text: any;

  text1: any = 'chooseOption';

  txt_full_arr: { dropdownVal: string; cost: number }[] = [];

  txt_full_arr1: { dropdownVal: string; cost: number }[] = [];

  txt_full_arr2: { dropdownVal: string; cost: number }[] = [];

  txt_full_arr3: { dropdownVal: string; cost: number }[] = [];

 

  sum: number = 0;

  sum1: number = 0;

  sum2: number = 0;

  sum3: number = 0;

 

  package: string = 'Standard';

  romDigits: any[] = [

    '(i)',

    '(ii)',

    '(iii)',

    '(iv)',

    '(v)',

    '(vi)',

    '(vii)',

    '(viii)',

    '(ix)',

    '(x)',

  ];

 

  constructor(

    private messageService: MessageService,

    private dialog: Dialog,

    private router: Router,

    private redirect: RedirectMenuService

  ) {

    this.myObserver = this.router.events.subscribe((event) => {

      if (event instanceof NavigationEnd) {

        this.currentUrl = event.url;

        const navigation = this.router.getCurrentNavigation();

        if (navigation?.extras.state) {

          this.techDetailsParameter = navigation.extras.state;
          this.currentInstallment = this.techDetailsParameter.leftcard.currentInstallment;

          console.log('from credit comp', this.techDetailsParameter);

        }

      }

    });

  }

  ngOnInit(): void {

    if (this.techDetailsParameter.option == 0) {

      this.package = 'Standard';

    } else {

      this.package = 'Advanced';

    }

  }

  onSubmit() {

    this.showCredit = false;

    this.submitPopup = true;

  }

 

  onClicked1() {

    this.isChecked = true;

    this.isShowInfoMsg = true;

    this.showCredit = false;

    setTimeout(() => {

      this.isShowInfoMsg = false;

      this.showCredit = true;

    }, 2000);

  }

 

  onOk() {

    this.techDetailsParameter.comp = 'credit';

    this.showCredit = true;

    this.redirect.redirectWithdata('work-space', this.techDetailsParameter);

  }

  calculate(){
    // let expense =  this.creditInfoForm.controls['Expense'].value;
    let expense =  this.sum2;
    // let income =  this.creditInfoForm.controls['Income'].value;
    let income = this.sum1;
    // let liabilities = this.creditInfoForm.controls['Liabilities'].value;
    let liabilities = this.sum3;
    let calculation = (parseInt(liabilities.toString()) + parseInt(this.currentInstallment) + parseInt(expense.toString())) * 100 / parseInt(income.toString());
    console.log("calucalted ans is ",calculation);
    this.DSR_ratio = parseInt(calculation.toString());
  }

  redirectToApplyNow() {

    this.techDetailsParameter.leftcard = this.leftcard;

    this.redirect.redirectWithdata(

      'apply-now-flow-1',

      this.techDetailsParameter

    );

  }

 

  onCancel1() {

    this.showCredit = true;

    this.isShowInfoMsg = false;

  }

  numberWithCommas(x: any) {

    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  }

  onCancel() {

    this.techDetailsParameter.comp = 'credit';

    this.showCredit = true;

    this.redirect.redirectWithdata('work-space', this.techDetailsParameter);

  }

 

  add(txt: any, txt1: any, module: any) {

    if (txt != '' && txt1 != 'chooseOption') {

      switch (module) {
        case 'assetAdd':
          this.text = '$ ' + txt;
            this.txt_full_arr.push({ dropdownVal: `${txt1}`, cost: this.text});
            this.sum += Number(txt);
          break;
        case 'incomeAdd':
          this.text = '$ ' + txt;
          this.txt_full_arr1.push({ dropdownVal: ` ${txt1}`, cost: this.text });
          this.sum1 += Number(txt);
        this.calculate();
          break;

        case 'expenseAdd':

            this.text = '$ ' + txt;

            this.txt_full_arr2.push({ dropdownVal: ` ${txt1}`, cost: this.text });

            this.sum2 += Number(txt);
            this.calculate();
          break;

        case 'liabilityAdd':

            this.text = '$ ' + txt;

            this.txt_full_arr3.push({ dropdownVal: ` ${txt1}`, cost: this.text });

            this.sum3 += Number(txt);
            this.calculate();
      }

    }

  }

 

  getAssetLabel(index: number) {

    let assetLabel = document.getElementById('assetLabel')!;

    return index === 0

      ? (assetLabel.innerHTML =

          'Asset Type ' + this.romDigits[index])

      : this.romDigits[index];

  }

 

  getIncomeLabel(index: number) {

    let incomeLabel = document.getElementById('incomeLabel')!;

    return index === 0

      ? (incomeLabel.innerHTML =

          'Income Type &nbsp;&nbsp;&nbsp;' + this.romDigits[index])

      : this.romDigits[index];

  }

 

  alignText(index: number) {

    return { 'text-align': 'right', width: '20%', 'font-family': 'Verdana' };

  }

}

 