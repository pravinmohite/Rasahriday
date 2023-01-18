import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common-service/common.service';
import { LandingPageService } from '../services/landing-page-service/landing-page.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  landingPageDetails: any;
  randomProductsArr=[];
  constructor(
    private commonService: CommonService,
    private landingPageService: LandingPageService
  ) { }

  ngOnInit(): void {
    this.getLandingPageDetails();
  }

  getLandingPageDetails() {
     this.landingPageService.getLandingPageDetails().subscribe(response=>{
      this.landingPageDetails = response;
      this.getRandomProductsToShow();
     });
  }

  getRandomProductsToShow() {
    for(let i=0;i<3;i++){
      let index= Math.floor(Math.random()*this.landingPageDetails.length);
      while(this.landingPageDetails[index].productImages==null || this.landingPageDetails[index].productImages=="") {
        index = Math.floor(Math.random()*this.landingPageDetails.length);
      }
      let currentProductImage = this.commonService.getProductImageToBeShown(this.landingPageDetails[index].productImages);
      this.randomProductsArr.push(currentProductImage);
    }
    console.log('product',this.randomProductsArr);
  }
}
