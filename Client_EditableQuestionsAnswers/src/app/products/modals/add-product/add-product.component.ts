import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CommonService } from 'src/app/services/common-service/common.service';
import { LoaderService } from 'src/app/services/loader-service/loader.service';
import { ProductService } from 'src/app/services/product-service/product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  @Input() editMode; 
  @ViewChild('addProductTemplate') templateRef: TemplateRef<any>;
  modalRef?: BsModalRef;
  productForm: FormGroup;
  categories: any;
  className = 'add-product-modalcontainer'
  isAdmin = false;

  constructor(
    private productService: ProductService,
    private commonService: CommonService,
    private modalService: BsModalService,
    private loaderService: LoaderService
    ) { }

  ngOnInit(): void {
    this.setPrivileges();
    this.createForm();
  }

  setPrivileges() {
    this.isAdmin = this.commonService.userDetails.isAdmin;
  }

  createForm(): void{
    this.productForm = new FormGroup({
      _id: new FormControl('') , 
      categoryId: new FormControl('', Validators.required) , 
      productName: new FormControl('', Validators.required) ,      
      description: new FormControl(''),
      shlok: new FormControl(''),
      references: new FormControl(''),
      dosage: new FormControl(''),
      indications: new FormControl(''),
      contraIndications: new FormControl(''),
      sanskritName: new FormControl(''),
      botanicalName: new FormControl(''),
      drugQuantity: new FormControl(''),
      stock: new FormControl(0),
      price: new FormControl(0),
    })
  }

  ngOnChanges() {
    if(this.editMode && this.editMode.status) {
      this.openAddProductModal(this.templateRef);
      this.setValuesToBeEdited(this.editMode.editedItem);
    }
  }

  setValuesToBeEdited(editedItem) {
    this.productForm.patchValue(editedItem)
  }


  openAddProductModal(templateRef:TemplateRef<any>): void{
    this.productForm.reset();
    this.getCategories();
    const config= this.commonService.getModalConfig(this.className);
    this.modalRef = this.modalService.show(templateRef, config);
  }

  submit(formVal): void{
    if(this.editMode && this.editMode.status) {
      this.update(formVal);
    }
    else {
      this.save(formVal);
    }
  }

  save(data) {
    this.loaderService.display(true);
    this.productService.addProduct(data).subscribe(response=>{
      this.loaderService.display(false);
      this.handleProductChangeEvent(data);
    })
  }

  update(data) {
    this.loaderService.display(true);
    this.productService.updateProduct(data).subscribe(response=>{
      this.loaderService.display(false);
      this.handleProductChangeEvent(this.editMode.editedItem);
    })
  }

  handleProductChangeEvent(data) {
    this.hideModalAndClearForm();
    if(data.categoryId) {
      this.commonService.refreshProductEvent(data);
    }
  }

  hideModalAndClearForm() {
    this.modalRef?.hide();
    this.productForm.reset();
  }

  getCategories() {
    this.categories = this.commonService.getCategories();
  }
}
