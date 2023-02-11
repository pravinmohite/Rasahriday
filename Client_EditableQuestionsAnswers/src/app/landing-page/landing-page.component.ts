import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../services/common-service/common.service';
import { LandingPageService } from '../services/landing-page-service/landing-page.service';
import { LoaderService } from '../services/loader-service/loader.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  landingPageDetails: any;
  randomProductsArr=[];
  path = './../../assets/images/landingpage_img_';
  imgFormat = '.jpg';
  itemsPerSlide = 3;
  singleSlideOffset = true;
  noWrap = true;
  slidesChangeMessage = '';
  productPerCategorySlides = [];
  showIndicator = false;

  constructor(
    private commonService: CommonService,
    private landingPageService: LandingPageService,
    private router: Router,
    private loaderService: LoaderService
  ) {
    
   }

  ngOnInit(): void {
   // this.getLandingPageDetails();
   this.getStaticLandingPageImages();
   this.getProductPerCategory();
  }

  onSlideRangeChange(indexes: number[]): void {
    this.slidesChangeMessage = `Slides have been switched: ${indexes}`;
  }

  addFadeAnimation() {
    this.commonService.addFadeObserver();
  }

  getStaticLandingPageImages() {
    for(let i=1;i<=3;i++){
       this.randomProductsArr.push(this.path+i+this.imgFormat);
    }
  }

  getLandingPageDetails() {
     this.loaderService.display(true);
     this.landingPageService.getLandingPageDetails().subscribe(response=>{
      this.loaderService.display(false);
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

  showAllProducts() {
    this.router.navigate(["/products"]);
  }

  setProductPerCategoryInSlides(response) {
    for(const item of response) {
       let productImage= this.commonService.getProductImageToBeShown(item['productImages']);
       let imgObj = {
        image: productImage,
        data: item
       }
       this.productPerCategorySlides.push(imgObj);
    }
    this.addFadeAnimation();
  }

  getProductPerCategory() {
    this.loaderService.display(true);
    this.landingPageService.getProductPerCategory().subscribe(response=>{
       this.loaderService.display(false);
       this.setProductPerCategoryInSlides(response);
    })
  }
}
