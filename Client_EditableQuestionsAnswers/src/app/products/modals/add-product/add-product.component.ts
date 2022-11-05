import { Component, createPlatform, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  modalRef?: BsModalRef;
  productForm: FormGroup;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(): void{
    this.productForm = new FormGroup({
      name: new FormControl('', Validators.required) ,      
      description: new FormControl(''),
      shlok: new FormControl(''),
      reference: new FormControl(''),
      dosage: new FormControl(''),
      indications: new FormControl(''),
      contraindications: new FormControl(''),
      sanskritName: new FormControl(''),
      botanicalName: new FormControl(''),
      drugQuantity: new FormControl(''),
      stock: new FormControl(0),
      price: new FormControl(0),
    })
  }


  openAddProductModal(templateRef:TemplateRef<any>): void{
    this.modalRef = this.modalService.show(templateRef);
  }

  handleFormSubmit(formVal): void{
    console.log(formVal);
  }

}
