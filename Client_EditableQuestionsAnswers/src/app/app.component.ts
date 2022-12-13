import { Component, TemplateRef } from '@angular/core';
import { DataService } from './services/data.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { CommonService } from './services/common-service/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  sideBarOpen:boolean = false;
  modalRef?: BsModalRef;
  isSideBarUntouched:boolean = true;


  constructor(
    private dataService:DataService,
    private modalService: BsModalService,
    private commonService: CommonService,
    private router: Router
    ) {
  }

  ngOnInit() {
    this.checkAndSetLoggedInDetails();
    this.createWebStorageDemo();
  }

  checkAndSetLoggedInDetails() {
   if(localStorage.getItem('loggedIn')=="true") {
      this.commonService.getUserDetails();
   }
   else {
     this.router.navigateByUrl('/login');
   }
  }

  createWebStorageDemo(): void{
    console.log(sessionStorage['dev1']);
    console.log(localStorage['dev2']);
    if( !sessionStorage['dev1']){
      sessionStorage['dev1'] = 'viresh';
      console.log('dev1 set')
    }
    if(!localStorage['dev2']){
      localStorage['dev2'] = 'Praveen';
      console.log('dev2 set')
    }
  }

  openOrCloseSidebar(sidebarStatus):void{
    this.sideBarOpen = sidebarStatus === 'open' ? true : false;
    this.isSideBarUntouched = false;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
