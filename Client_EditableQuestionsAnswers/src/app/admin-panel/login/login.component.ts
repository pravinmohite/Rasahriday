import { Component, OnInit } from '@angular/core';
import {QuestionAnswerService} from '../../services/question-answer-service/question-answer.service';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product-service/product.service';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { CommonService } from 'src/app/services/common-service/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isSignUpMode = false;
  faArrowRight = faArrowRight;

  constructor(
    private productService :ProductService,
    private commonService: CommonService,
    private router:Router
    ) { }
   login:any={username:"",password:""};

  ngOnInit(): void {
    if(localStorage.getItem('loggedIn')=="true") {
      this.router.navigateByUrl('/admin-panel/updateInterviewQuestions');
    }
  }

  
  loginToApplication() {
    if(this.isSignUpMode) {
       this.signUpUser();
    }
    else {
       this.validateLoginDetails();
    }
    // this.productService.getloginDetails().subscribe(data=>{
    //   if(this.login.username==data[0].username && this.login.password==data[0].password)
    //    {
    //       localStorage.setItem('loggedIn','true');
    //       this.router.navigateByUrl('/admin-panel/updateInterviewQuestions');
    //    }
    //  })
  }

  signUpUser() {
     this.productService.signUpUser(this.login).subscribe(data=>{
        console.log('Registration successfull');
        this.setPrivilegesOfUser(data);
     })
  }

  setPrivilegesOfUser(data) {
    if(data['isAdmin']) {
      localStorage.setItem('loggedIn','true');
      localStorage.setItem('isAdmin','true');
      this.setLoggedInUserDetails(data);
      this.router.navigateByUrl('/products');
   }
   else if(data) {
     localStorage.setItem('loggedIn','true');
     localStorage.setItem('isAdmin','false');
     this.setLoggedInUserDetails(data);
     this.router.navigateByUrl('/products');
   }
   else {
     localStorage.removeItem('loggedIn');
     localStorage.removeItem('isAdmin');
     this.removeUserDetails();
     alert('invalid user, please enter correct username or password');
   }
  }

  removeUserDetails(){
    this.commonService.removeUserDetails();
  }

  setLoggedInUserDetails(userDetails) {
    const formattedUserDetails ={
      userName: userDetails.username,
      address: userDetails.address,
      phoneNumber: userDetails.phoneNumber,
      isAdmin: userDetails.isAdmin
    }
    this.commonService.setUserDetails(formattedUserDetails);
  }

  validateLoginDetails() {
    this.productService.validateLoginDetails(this.login).subscribe(data=>{
       this.setPrivilegesOfUser(data);
     })
  }

  keyPressEvent(event) {
    if(event.keyCode==13) {
      this.validateLoginDetails();
    }
  }

  setSignUpMode() {
    this.isSignUpMode = true;
  }

  setLoginMode() {
    this.isSignUpMode = false;
  }
}
