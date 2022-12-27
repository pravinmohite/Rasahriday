import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CommonService } from 'src/app/services/common-service/common.service';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {
  @Input() product; 
  modalRef?: BsModalRef;
  productImages: any;
  productImagesToBeEdited: any;
  className = 'product-description-modalcontainer'
  constructor(
    private modalService: BsModalService,
    private productService: ProductService,
    private commonService: CommonService
    
    ) { }

  ngOnInit(): void {
  }

  openProductDescriptionModal(templateRef:TemplateRef<any>): void{
    const config= this.commonService.getModalConfig(this.className);
    this.modalRef = this.modalService.show(templateRef, config);
    this.getProductImageToBeShown();
  }

  getProductImageToBeShown() {
    this.productImages= this.productService.getAllProductImagesToBeShown(this.product.productImages);
  }

}
