import { Component, OnInit } from '@angular/core';
import {QuestionAnswerService} from '../../services/question-answer-service/question-answer.service';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product-service/product.service';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isSignUpMode = false;
  faArrowRight = faArrowRight;

  constructor(private productService :ProductService,private router:Router) { }
   login:any={username:"",password:""};

  ngOnInit(): void {
    if(localStorage.getItem('loggedIn')=="true") {
      this.router.navigateByUrl('/admin-panel/updateInterviewQuestions');
    }
  }

  
  loginToApplication() {
    this.productService.getloginDetails().subscribe(data=>{
      if(this.login.username==data[0].username && this.login.password==data[0].password)
       {
          localStorage.setItem('loggedIn','true');
          this.router.navigateByUrl('/admin-panel/updateInterviewQuestions');
       }
     })
  }

  validateLoginDetails() {
    this.productService.validateLoginDetails(this.login).subscribe(data=>{
      if(data['isAdmin']) {
          localStorage.setItem('loggedIn','true');
          localStorage.setItem('isAdmin','true');
          this.router.navigateByUrl('/products');
       }
       else if(data) {
         localStorage.setItem('loggedIn','true');
         localStorage.setItem('isAdmin','false');
         this.router.navigateByUrl('/products');
       }
       else {
         localStorage.removeItem('loggedIn');
         localStorage.removeItem('isAdmin');
         alert('invalid user, please enter correct username or password');
       }
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
