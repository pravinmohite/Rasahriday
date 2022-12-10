import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  userDetails: string;

  constructor() { }

  setUserDetails(userDetails) {
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    this.userDetails =userDetails;
  }

  getUserDetails() {
    let retrievedDetails = localStorage.getItem('userDetails');
    if(retrievedDetails) {
      this.userDetails = JSON.parse(retrievedDetails);
    }
  }

  removeUserDetails() {
    localStorage.removeItem('userDetails');
  }
}
