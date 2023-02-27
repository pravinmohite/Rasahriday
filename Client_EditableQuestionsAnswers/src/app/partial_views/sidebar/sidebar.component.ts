import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { faBars, faSignInAlt, faUser, faUserCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { CommonService } from 'src/app/services/common-service/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input('isSideBarOpen') isSideBarOpen;
  @Output('sidebarStatus') sidebarStatus = new EventEmitter();
  @Output('openAboutUs') openAboutUs = new EventEmitter();
  faTimes = faTimes;
  faUserCircle = faUserCircle;
  // faFacebook = faFacebookF;
  // faTwitter = faTwitter;
  userName;
  isLandingPage: boolean;
  loginPage: boolean;
  constructor(
    private router: Router,
    private commonService: CommonService
    ) { }

  ngOnInit(): void {
    this.handleSubscriptions();
    this.setUserName();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.isSideBarOpen = changes.isSideBarOpen.currentValue;
  }

  
  checkRouterEvent() {
    this.router.events.subscribe((val) => {
      this.checkIfLoginPage();
      this.checkIfLandingPage();
    });
  }

  checkIfLandingPage() {
    this.isLandingPage = this.commonService.checkIfLandingPage();
  }

  checkIfLoginPage() {
    let url = window.location.href;
    if (url.indexOf('login') > -1) {
      this.loginPage = true;
    }
    else {
      this.loginPage = false;
    }
  }

  handleSubscriptions() {
    this.commonService.userLoggedIn.subscribe(data=>{
      this.userName = data['userName'];
    })
  }

  setUserName() {
    if(!this.userName && this.commonService.userDetails) {
      this.userName = this.commonService.userDetails.userName;
    }
  }

  logOut() {
    this.commonService.removeUserDetails();
    this.removeUserName();
    this.navigateToLoginPage();
  }

  removeUserName() {
    this.userName ='';
  }

  navigateToLoginPage() {
    this.router.navigate(['/login']);
  }

  closeSideBar(): void{
    this.sidebarStatus.emit('close');
    this.isSideBarOpen = false;
  }

  openAboutusModal(): void{
     this.openAboutUs.emit();
  }

  setLoggedInUser() {
    this.userName = this.commonService.userDetails;
  }

}

