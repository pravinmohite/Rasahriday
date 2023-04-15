import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, NgZone, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { faEdit, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { CommonService } from 'src/app/services/common-service/common.service';
import Stepper from 'bs-stepper';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-confirm-order-details',
  templateUrl: './confirm-order-details.component.html',
  styleUrls: ['./confirm-order-details.component.scss']
})
export class ConfirmOrderDetailsComponent implements OnInit {
  public event: EventEmitter<any> = new EventEmitter();
  @Input() product;
  @Input() productList?;
  isPaymentGatewaySupported = false;
  razorPayApiKey;
  private stepper: Stepper;
  productImages: any;
  faEdit = faEdit;
  faCheckSquare = faCheckSquare;
  editedProduct: any;
  productImagesToBeEdited: any;
  editMode = false;
  currentCurrency: any;
  options: any;
  rzp1: any;
  rzPay: any;
  onlinePayment = false;
  constructor(
    public modalRef: BsModalRef,
    private commonService: CommonService,
    private notifierService: NotifierService
    ) {
      this.isPaymentGatewaySupported = this.commonService.isPaymentGatewaySupported;
      this.razorPayApiKey = this.commonService.razorPayApiKey;
  }

  ngOnInit(): void {
    this.setCurrentCurrency();
    this.setUserDetailsForMultipleItems();
  }

  ngAfterViewInit() {
    this.initializeStepper();
    this.initializePaymentOptions();
  }

  initializeStepper() {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })
  }

  initializePaymentOptions() {
    this.product.price*=100 /*--to convert to rupees--*/
    this.options = {
      "key": this.razorPayApiKey, // Enter the Key ID generated from the Dashboard
      "amount": this.product.price, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Acme Corp", //your business name
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": (response) =>  {
          this.product.paidOnline = true;
          this.save();
      },
      "prefill": {
          "name": "Gaurav Kumar", //your customer's name
          "email": "gaurav.kumar@example.com",
          "contact": "9000090000"
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }
  };
  //  this.options.handler== ((response, error) => {
  //   this.options.response = response;
  //   console.log(response);
  //   console.log(this.options);
  // });
  }

  next() {
    this.stepper.next();
  }

  onStepperSubmit() {

  }

  payUsingSelectedOption() {
    if(this.onlinePayment) {
      this.payUsingPaymentGateway();
    }
    else {
      this.save();
    }
  }

  payUsingPaymentGateway() {
    this.rzPay = new this.commonService.nativeWindow.Razorpay(this.options);
    this.rzPay.open();
    this.rzPay.on('payment.failed', function (response){
      // alert(response.error.code +'-'+ response.error.description);
      // alert(response.error.description);
      // alert(response.error.source);
      // alert(response.error.step);
      // alert(response.error.reason);
      // alert(response.error.metadata.order_id);
      // alert(response.error.metadata.payment_id);
    });
  }

  setCurrentCurrency() {
    this.currentCurrency = this.commonService.currentCurrency;
  }

  setUserDetailsForMultipleItems() {
    if(!this.product) {
        this.product = {
          userName: this.productList.userName,
          userAddress: this.productList.userAddress,
          userPhoneNumber: this.productList.userPhoneNumber,
          price: this.productList.price,
          deliveryCharges: this.productList.deliveryCharges
        }
   }
  }

  setEditMode(value) {
    this.editMode = value;
    if(value) {
      this.setDetailsToBeEdited();
    }
    else {
      this.saveEditedDetails();
    }
  }

  setDetailsToBeEdited() {
    this.editedProduct ={
      userAddress: this.product.userAddress,
      userPhoneNumber: this.product.userPhoneNumber
    }
  }
  saveEditedDetails() {
    this.product.userAddress = this.editedProduct.userAddress;
    this.product.userPhoneNumber = this.editedProduct.userPhoneNumber;
  }

  save() {
    this.event.emit(this.product);
    this.modalRef.hide();
  }
}
