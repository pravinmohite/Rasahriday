function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"], {
  /***/
  "./src/app/products/modals/add-product/add-product.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/products/modals/add-product/add-product.component.ts ***!
    \**********************************************************************/

  /*! exports provided: AddProductComponent */

  /***/
  function srcAppProductsModalsAddProductAddProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddProductComponent", function () {
      return AddProductComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_pipes_safe_resource_url_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/pipes/safe-resource-url.pipe */
    "./src/app/pipes/safe-resource-url.pipe.ts");
    /* harmony import */


    var src_app_services_product_service_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/product-service/product.service */
    "./src/app/services/product-service/product.service.ts");
    /* harmony import */


    var src_app_services_common_service_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/common-service/common.service */
    "./src/app/services/common-service/common.service.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var src_app_services_loader_service_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/loader-service/loader.service */
    "./src/app/services/loader-service/loader.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["addProductTemplate"];

    function AddProductComponent_button_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProductComponent_button_0_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          return ctx_r3.openAddProductModal(_r1, false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "+ add product");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddProductComponent_ng_template_1_option_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r9._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r9.categoryName, " ");
      }
    }

    function AddProductComponent_ng_template_1_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please fill name.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddProductComponent_ng_template_1_div_103_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function AddProductComponent_ng_template_1_div_103_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddProductComponent_ng_template_1_div_103_div_1_Template, 2, 1, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.productImagesToBeEdited);
      }
    }

    function AddProductComponent_ng_template_1_div_104_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "safeResourceUrl");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r15 = ctx.index;

        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r13.currentlyUploadedImageSrc[i_r15]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function AddProductComponent_ng_template_1_div_104_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddProductComponent_ng_template_1_div_104_div_1_Template, 3, 3, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.productImages);
      }
    }

    function AddProductComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Product");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProductComponent_ng_template_1_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.modalRef == null ? null : ctx_r16.modalRef.hide();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddProductComponent_ng_template_1_Template_form_ngSubmit_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.submit(ctx_r18.productForm.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Category");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AddProductComponent_ng_template_1_option_15_Template, 2, 2, "option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AddProductComponent_ng_template_1_div_22_Template, 2, 0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Shlok");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "textarea", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "textarea", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Reference");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "dosage");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Indications");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Contra-indications");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Sanskrit Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Botanical Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Drug Quantity");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "input", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Stock");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "input", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Price");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "input", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Product Images");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "label", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Choose file ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddProductComponent_ng_template_1_Template_input_change_102_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.getFiles($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, AddProductComponent_ng_template_1_div_103_Template, 2, 1, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, AddProductComponent_ng_template_1_div_104_Template, 2, 1, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProductComponent_ng_template_1_Template_button_click_110_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.modalRef == null ? null : ctx_r20.modalRef.hide();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.productForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.categories);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.productForm.controls["productName"].errors == null ? null : ctx_r2.productForm.controls["productName"].errors.required) && ctx_r2.productForm.controls["productName"].touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.currentlyUploadedImageSrc.length == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.currentlyUploadedImageSrc.length > 0);
      }
    }

    var AddProductComponent = /*#__PURE__*/function () {
      function AddProductComponent(productService, commonService, modalService, loaderService, safeResourceUrl) {
        _classCallCheck(this, AddProductComponent);

        this.productService = productService;
        this.commonService = commonService;
        this.modalService = modalService;
        this.loaderService = loaderService;
        this.safeResourceUrl = safeResourceUrl;
        this.productImages = [];
        this.className = 'add-product-modalcontainer';
        this.isAdmin = false;
        this.currentlyUploadedImageSrc = [];
        this.productImagesToBeEdited = [];
      }

      _createClass(AddProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.resetCurrentlySelectedImages();
          this.setPrivileges();
          this.createForm();
        }
      }, {
        key: "resetCurrentlySelectedImages",
        value: function resetCurrentlySelectedImages() {
          this.currentlyUploadedImageSrc = [];
        }
      }, {
        key: "setPrivileges",
        value: function setPrivileges() {
          this.isAdmin = this.commonService.userDetails.isAdmin;
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            categoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            productName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            shlok: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            references: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            dosage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            indications: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            contraIndications: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            sanskritName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            botanicalName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            drugQuantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            stock: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            productImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          if (this.editMode && this.editMode.status) {
            this.openAddProductModal(this.templateRef);
            this.setValuesToBeEdited(this.editMode.editedItem);
          }
        }
      }, {
        key: "setValuesToBeEdited",
        value: function setValuesToBeEdited(editedItem) {
          this.productForm.patchValue(editedItem);
          this.setImagesToBeEdited(editedItem);
        }
      }, {
        key: "getProductImageToBeShown",
        value: function getProductImageToBeShown() {
          this.currentlyUploadedImageSrc = [];
          this.productImagesToBeEdited = this.productService.getAllProductImagesToBeShown(this.productImages);
        }
      }, {
        key: "setImagesToBeEdited",
        value: function setImagesToBeEdited(editedItem) {
          this.productImages = editedItem.productImages;
          this.getProductImageToBeShown();
        }
      }, {
        key: "openAddProductModal",
        value: function openAddProductModal(templateRef, editMode) {
          this.setEditModeForAdd(editMode);
          this.productForm.reset();
          this.getCategories();
          var config = this.commonService.getModalConfig(this.className);
          this.modalRef = this.modalService.show(templateRef, config);
        }
      }, {
        key: "setEditModeForAdd",
        value: function setEditModeForAdd(editMode) {
          if (editMode == false) {
            this.editMode.status = editMode;
            this.resetProductImagesToBeEdited();
          }
        }
      }, {
        key: "resetProductImagesToBeEdited",
        value: function resetProductImagesToBeEdited() {
          this.productImagesToBeEdited = [];
        }
      }, {
        key: "getFiles",
        value: function getFiles(event) {
          this.productImages = [];
          this.currentlyUploadedImageSrc = [];

          for (var i = 0; i < event.target.files.length; i++) {
            this.productImages.push(event.target.files[i]);
            this.setCurrentlyUploadedImgArr(event.target.files[i]);
          }
        }
      }, {
        key: "setCurrentlyUploadedImgArr",
        value: function setCurrentlyUploadedImgArr(file) {
          var imgSrc = URL.createObjectURL(file);
          this.currentlyUploadedImageSrc.push(imgSrc);
        }
      }, {
        key: "submit",
        value: function submit(formVal) {
          if (this.editMode && this.editMode.status) {
            this.update(formVal);
          } else {
            this.save(formVal);
          }
        }
      }, {
        key: "setAllFilesInFormData",
        value: function setAllFilesInFormData(formData) {
          if (Array.isArray(this.productImages)) {
            for (var i = 0; i < this.productImages.length; i++) {
              formData.append('files', this.productImages[i]);
            }
          } else {
            formData.append('productImages', this.productImages);
          }
        }
      }, {
        key: "setFormDetailsInFormData",
        value: function setFormDetailsInFormData(formData, data) {
          for (var property in data) {
            formData.append(property, data[property]);
          }
        }
      }, {
        key: "save",
        value: function save(data) {
          var _this = this;

          var formData = new FormData();
          this.setFilesAndFormDetails(formData, data);
          this.loaderService.display(true);
          this.productService.addProduct(formData).subscribe(function (response) {
            _this.loaderService.display(false);

            _this.handleProductChangeEvent(data);
          });
        }
      }, {
        key: "setFilesAndFormDetails",
        value: function setFilesAndFormDetails(formData, data) {
          this.setAllFilesInFormData(formData);
          this.setFormDetailsInFormData(formData, data);
        }
      }, {
        key: "update",
        value: function update(data) {
          var _this2 = this;

          var formData = new FormData();
          this.setFilesAndFormDetails(formData, data);
          this.loaderService.display(true);
          this.productService.updateProduct(formData, data).subscribe(function (response) {
            _this2.loaderService.display(false);

            _this2.handleProductChangeEvent(_this2.editMode.editedItem);
          });
        }
      }, {
        key: "handleProductChangeEvent",
        value: function handleProductChangeEvent(data) {
          this.hideModalAndClearForm();

          if (data.categoryId) {
            this.commonService.refreshProductEvent(data);
          }
        }
      }, {
        key: "hideModalAndClearForm",
        value: function hideModalAndClearForm() {
          var _a;

          (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.hide();
          this.productForm.reset();
          this.productImages = [];
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          this.categories = this.commonService.getCategories();
        }
      }]);

      return AddProductComponent;
    }();

    AddProductComponent.ɵfac = function AddProductComponent_Factory(t) {
      return new (t || AddProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_product_service_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_common_service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_loader_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_pipes_safe_resource_url_pipe__WEBPACK_IMPORTED_MODULE_2__["SafeResourceUrlPipe"]));
    };

    AddProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddProductComponent,
      selectors: [["app-add-product"]],
      viewQuery: function AddProductComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
        }
      },
      inputs: {
        editMode: "editMode"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_pipes_safe_resource_url_pipe__WEBPACK_IMPORTED_MODULE_2__["SafeResourceUrlPipe"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 3,
      vars: 1,
      consts: [["class", "btn btn-outline btn-light btn-light-default", 3, "click", 4, "ngIf"], ["addProductTemplate", ""], [1, "btn", "btn-outline", "btn-light", "btn-light-default", 3, "click"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "modal-body"], [1, "add-product-form", 3, "formGroup", "ngSubmit"], [1, "form-group", "row"], [1, "mobile-field", "col-12", "col-md-6"], [1, "row"], ["for", "type", 1, "col-3", "col-form-label"], [1, "col-9"], ["id", "type", "name", "type", "formControlName", "categoryId", 1, "custom-select"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "text", 1, "col-3", "col-form-label"], ["type", "text", "formControlName", "productName", 1, "form-control"], ["class", "error-message", 4, "ngIf"], ["type", "text", "formControlName", "shlok", 1, "form-control"], ["type", "text", "formControlName", "description", 1, "form-control"], ["type", "text", "formControlName", "references", 1, "form-control"], ["type", "text", "formControlName", "dosage", 1, "form-control"], ["type", "text", "formControlName", "indications", 1, "form-control"], ["type", "text", "formControlName", "contraIndications", 1, "form-control"], ["type", "text", "formControlName", "sanskritName", 1, "form-control"], ["type", "text", "formControlName", "botanicalName", 1, "form-control"], ["type", "text", "formControlName", "drugQuantity", 1, "form-control"], ["type", "number", "formControlName", "stock", 1, "form-control"], ["type", "number", "formControlName", "price", 1, "form-control"], ["for", "upload", 1, "custom-upload-btn", "btn-light", "btn-light-default"], ["type", "file", "multiple", "", 1, "file-upload", 3, "change"], ["class", "form-group product-img-container row", 4, "ngIf"], [1, "offset-2", "col-4"], ["name", "submit", "type", "submit", 1, "btn", "btn-outline-modal", "btn-full-width"], [1, "col-4"], ["name", "submit", "type", "button", 1, "btn", "btn-outline-removebtn", "btn-full-width", 3, "click"], [3, "value"], [1, "error-message"], [1, "form-group", "product-img-container", "row"], ["class", "col-4", 4, "ngFor", "ngForOf"], [1, "product-img", 3, "src"], ["class", "img-container col-12 col-md-4", 4, "ngFor", "ngForOf"], [1, "img-container", "col-12", "col-md-4"]],
      template: function AddProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AddProductComponent_button_0_Template, 2, 0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddProductComponent_ng_template_1_Template, 112, 5, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      pipes: [src_app_pipes_safe_resource_url_pipe__WEBPACK_IMPORTED_MODULE_2__["SafeResourceUrlPipe"]],
      styles: [".input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 15px;\n  border-top-left-radius: 15px;\n}\n.input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  border-bottom-right-radius: 15px;\n  border-top-right-radius: 15px;\n}\n.btn-full-width[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n.edit-icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n@media only screen and (max-width: 768px) {\n  .edit-icon[_ngcontent-%COMP%] {\n    margin-right: 15px;\n  }\n}\n.delete-icon[_ngcontent-%COMP%] {\n  color: #ce4545;\n}\n.no-padding[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n.no-padding-left[_ngcontent-%COMP%] {\n  padding-left: 0px !important;\n}\n.no-padding-right[_ngcontent-%COMP%] {\n  padding-right: 0px !important;\n}\n.empty-data[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.default-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n}\n.cart-container[_ngcontent-%COMP%] {\n  width: 64%;\n  margin: auto;\n  padding: 10px;\n}\n@media only screen and (max-width: 768px) {\n  .cart-container[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n.cart-container[_ngcontent-%COMP%]   .product-ordered-datecontainer[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.cart-container[_ngcontent-%COMP%]   .product-ordered-datecontainer[_ngcontent-%COMP%]   .ordered-date[_ngcontent-%COMP%] {\n  background-color: #ad974f !important;\n  color: #fff !important;\n  border-radius: 20px;\n  padding: 5px;\n}\n.cart-container[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  padding-top: 15px;\n  box-shadow: 0px 0px 2px 2px gainsboro;\n  background: #e3dfce;\n  border-radius: 20px;\n}\n.cart-container[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%] {\n  color: #313e24 !important;\n  border: solid 1px #ad974f;\n  border-radius: 15px;\n  padding: 5px;\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n.cart-container[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .phone-number[_ngcontent-%COMP%] {\n  color: green !important;\n}\n@media only screen and (max-width: 768px) {\n  .cart-container[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n.cart-container[_ngcontent-%COMP%]   .product-img-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  display: flex;\n}\n.cart-container[_ngcontent-%COMP%]   .product-img-container[_ngcontent-%COMP%]   .product-images[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  max-width: 100%;\n}\n.cart-container[_ngcontent-%COMP%]   .product-img-container[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.cart-container[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%] {\n  height: 250px;\n  width: 100%;\n  border: solid 1px #dcdcdc;\n  margin: auto auto 15px auto;\n  display: block;\n  border-top-right-radius: 20px;\n  border-top-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n}\n.cart-container[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%] {\n  float: right;\n}\n.cart-container[_ngcontent-%COMP%]   .cart-item-actionbtns[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.cart-container[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  color: #ad974f;\n  font-size: 18px;\n  font-weight: 800;\n  text-transform: capitalize;\n}\n.cart-container[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%] {\n  color: #7e6e6e !important;\n  display: inline-block;\n  width: calc(100% - 30px);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 0;\n}\n.cart-container[_ngcontent-%COMP%]   .drug-quantity-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-family: sans-serif;\n}\n.cart-container[_ngcontent-%COMP%]   .drug-quantity-container[_ngcontent-%COMP%]   .drug-quantity-title[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  color: #313e24;\n}\n.cart-container[_ngcontent-%COMP%]   .drug-quantity-container[_ngcontent-%COMP%]   .drug-quantityvalue-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.cart-container[_ngcontent-%COMP%]   .drug-quantity-container[_ngcontent-%COMP%]   .drug-quantityvalue-container[_ngcontent-%COMP%]   .drug-quantity-value[_ngcontent-%COMP%] {\n  background: #313e24;\n  color: #fff;\n  padding: 6px 12px 6px 12px;\n  border-radius: 20px;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%]   .qty-input[_ngcontent-%COMP%] {\n  text-align: center;\n  background: #e3dfce;\n  border-color: #313e24;\n}\n@media screen and (min-width: 993px) and (max-width: 1500px) {\n  .cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%]   .quantity-fields-container[_ngcontent-%COMP%] {\n    flex-basis: 32% !important;\n    max-width: 32% !important;\n  }\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  width: 35px;\n  cursor: pointer;\n  background: #313e24;\n  color: #ad974f;\n  border: solid 1px #313e24;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%]   .quantity-title[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 16px;\n  margin-bottom: 10px;\n  color: #313e24;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-readonly-container[_ngcontent-%COMP%]   .quantity-value[_ngcontent-%COMP%] {\n  background-color: #ad974f;\n  color: #fff;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-readonly-container[_ngcontent-%COMP%]   .quantity-text[_ngcontent-%COMP%] {\n  color: #313e24;\n  font-weight: bold;\n}\n.cart-container[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%], .cart-container[_ngcontent-%COMP%]   .btn-outline-modal[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.product-price[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.product-price[_ngcontent-%COMP%]   .current-currency-symbol[_ngcontent-%COMP%] {\n  top: -4.25px;\n  font-size: 11px;\n  position: relative;\n}\n.product-price[_ngcontent-%COMP%]   .price-value[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-family: cursive;\n}\n@media only screen and (max-width: 768px) {\n  .product-price[_ngcontent-%COMP%]   .price-value[_ngcontent-%COMP%] {\n    font-family: sans-serif;\n  }\n}\n.btn-outline[_ngcontent-%COMP%], .btn-outline-modal[_ngcontent-%COMP%] {\n  color: #313e24;\n  background-color: #e3dfce;\n  border-color: #313e24;\n  font-weight: bold;\n  letter-spacing: 0.05em;\n  border-radius: 20px;\n  padding: 3px 10px !important;\n  cursor: pointer;\n}\n.btn-outline[_ngcontent-%COMP%]:active, .btn-outline-modal[_ngcontent-%COMP%]:active, .btn-outline[_ngcontent-%COMP%]:hover, .btn-outline-modal[_ngcontent-%COMP%]:hover, .btn-outline[_ngcontent-%COMP%]:focus, .btn-outline-modal[_ngcontent-%COMP%]:focus {\n  color: #313e24;\n  background-color: #e3dfce;\n  border-color: #313e24;\n}\n.btn-outline[_ngcontent-%COMP%]:active, .btn-outline-modal[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n}\n.btn-outline-customsecondary[_ngcontent-%COMP%], .btn-outline-removebtn[_ngcontent-%COMP%] {\n  color: #ad974f;\n  background-color: #313e24;\n  border-color: #ad974f;\n  font-weight: bold;\n  letter-spacing: 0.05em;\n  border-radius: 20px;\n  padding: 3px 10px !important;\n  box-shadow: 2px 2px gainsboro;\n  cursor: pointer;\n}\n.btn-outline-customsecondary[_ngcontent-%COMP%]:active, .btn-outline-removebtn[_ngcontent-%COMP%]:active, .btn-outline-customsecondary[_ngcontent-%COMP%]:hover, .btn-outline-removebtn[_ngcontent-%COMP%]:hover, .btn-outline-customsecondary[_ngcontent-%COMP%]:focus, .btn-outline-removebtn[_ngcontent-%COMP%]:focus {\n  color: #ad974f;\n  background-color: #313e24;\n  border-color: #ad974f;\n}\n.btn-outline-customsecondary[_ngcontent-%COMP%]:active, .btn-outline-removebtn[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n}\n.btn-color-1[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #004E64;\n  border-color: #004E64;\n  font-weight: bold;\n  letter-spacing: 0.05em;\n  border-radius: 0;\n}\n.btn-color-1[_ngcontent-%COMP%]:hover, .btn-color-1[_ngcontent-%COMP%]:active, .btn-color-1[_ngcontent-%COMP%]:focus {\n  background: #003D4F !important;\n  color: #fff !important;\n  border-color: #003D4F !important;\n}\n.btn-outline-removebtn[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 15px;\n  font-weight: 600;\n  z-index: 1000;\n  white-space: pre-wrap;\n  border: none !important;\n}\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  margin: -0.5rem -0.2rem -1rem auto !important;\n}\n  .modal-content {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  background-color: #e3dfce;\n}\n@media only screen and (max-width: 768px) {\n  .modal-body[_ngcontent-%COMP%] {\n    max-height: 580px;\n    overflow: auto;\n  }\n}\nbutton[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed !important;\n}\n.total-text[_ngcontent-%COMP%] {\n  font-weight: 600 !important;\n}\n.out-of-stock[_ngcontent-%COMP%]   .out-of-stock-text[_ngcontent-%COMP%] {\n  margin: auto;\n  text-transform: uppercase;\n  color: #fff;\n  background: #a90b0b;\n  border: solid 1px gainsboro;\n  border-radius: 20px;\n  padding: 6.5px 10px;\n}\n.page-heading[_ngcontent-%COMP%] {\n  text-align: center !important;\n  font-family: cursive;\n  margin-bottom: 15px !important;\n  color: #313e24;\n}\n@media only screen and (max-width: 768px) {\n  .page-heading[_ngcontent-%COMP%] {\n    font-family: sans-serif;\n  }\n}\n.hidden[_ngcontent-%COMP%] {\n  visibility: hidden !important;\n}\n@media only screen and (max-width: 768px) {\n    .alert-dismissible .close {\n    z-index: 0;\n  }\n}\n  .alert-info {\n  background-color: #313e24 !important;\n  color: #ad974f !important;\n  border-radius: 20px;\n}\n.kupipakwa[_ngcontent-%COMP%] {\n  background-image: url('kupipakwa.png');\n}\n.pottali[_ngcontent-%COMP%] {\n  background-image: url('pottali.png');\n}\n.khalviya[_ngcontent-%COMP%] {\n  background-image: url('khalviya.png');\n}\n@media screen and (min-width: 769px) {\n  .display-inline[_ngcontent-%COMP%] {\n    display: inline !important;\n  }\n}\n\n.pyro[_ngcontent-%COMP%] {\n  position: relative !important;\n  z-index: 999;\n}\n.pyro[_ngcontent-%COMP%]    > .before[_ngcontent-%COMP%], .pyro[_ngcontent-%COMP%]    > .after[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  box-shadow: 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff;\n  animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;\n}\n.pyro[_ngcontent-%COMP%]    > .after[_ngcontent-%COMP%] {\n  animation-delay: 1.25s, 1.25s, 1.25s;\n  animation-duration: 1.25s, 1.25s, 6.25s;\n}\n@keyframes bang {\n  to {\n    box-shadow: 43px -284.6666666667px #00ff88, -195px -45.6666666667px #00ff80, 220px -268.6666666667px #bb00ff, 57px -161.6666666667px #48ff00, 230px -97.6666666667px #ff1e00, -192px -148.6666666667px #c400ff, -189px -273.6666666667px #ff0009, -232px -355.6666666667px #9d00ff, 156px -358.6666666667px #b700ff, 201px 24.3333333333px #ff0077, 73px -222.6666666667px #0d00ff, 6px -389.6666666667px #ffcc00, 227px 22.3333333333px #002fff, 129px -289.6666666667px #00ff22, 119px -179.6666666667px #007bff, 16px -197.6666666667px #001aff, -232px -356.6666666667px #e6ff00, -160px -13.6666666667px #ffa200, -49px -187.6666666667px #00ff91, -212px -101.6666666667px #95ff00, -129px -20.6666666667px #ff3300, -228px -135.6666666667px #00ff91, 26px -281.6666666667px #ff006f, -166px 77.3333333333px #0400ff, 164px -184.6666666667px #11ff00, -153px -286.6666666667px #00ff22, -229px -196.6666666667px #0022ff, 128px -265.6666666667px #ff0091, -2px -130.6666666667px #aeff00, 133px -207.6666666667px #00ff73, 0px -194.6666666667px #00ffbf, 53px -299.6666666667px fuchsia, -2px 77.3333333333px #00ff0d, -213px -153.6666666667px blue, 139px -145.6666666667px #ff2200, -48px 43.3333333333px #ff0d00, 12px 26.3333333333px #ff00d0, 243px -343.6666666667px #c800ff, -89px -385.6666666667px #00ffd5, -116px -288.6666666667px #ffee00, 70px -205.6666666667px #006aff, -202px -297.6666666667px fuchsia, 94px 10.3333333333px #ff0048, -201px -207.6666666667px #00ff51, 216px -356.6666666667px #ff0400, 221px -261.6666666667px #eeff00, -228px -335.6666666667px #00b3ff, 23px -152.6666666667px #9900ff, -9px -376.6666666667px #7b00ff, -131px -152.6666666667px #ff0040, -199px -37.6666666667px #91ff00;\n  }\n}\n@keyframes gravity {\n  to {\n    transform: translateY(200px);\n    -moz-transform: translateY(200px);\n    -webkit-transform: translateY(200px);\n    -o-transform: translateY(200px);\n    -ms-transform: translateY(200px);\n    opacity: 0;\n  }\n}\n@keyframes position {\n  0%, 19.9% {\n    margin-top: 10%;\n    margin-left: 40%;\n  }\n  20%, 39.9% {\n    margin-top: 40%;\n    margin-left: 30%;\n  }\n  40%, 59.9% {\n    margin-top: 20%;\n    margin-left: 70%;\n  }\n  60%, 79.9% {\n    margin-top: 30%;\n    margin-left: 20%;\n  }\n  80%, 99.9% {\n    margin-top: 30%;\n    margin-left: 80%;\n  }\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 2px;\n}\n.inline-block[_ngcontent-%COMP%] {\n  display: inline-block;\n}\nform[_ngcontent-%COMP%]   .ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: red;\n}\n.add-product-form[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n.modal-dialog-container.modal-dialog[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n.product-img[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: solid 1px gainsboro;\n  margin: auto;\n  display: block;\n}\n.custom-upload-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  background-color: #313e24;\n  color: #ad974f;\n  padding: 0.5rem;\n  font-family: sans-serif;\n  border-radius: 0.3rem;\n  cursor: pointer;\n}\n.custom-upload-btn[_ngcontent-%COMP%]:active {\n  background-color: #313e24 !important;\n  color: #ad974f !important;\n}\n.file-upload[_ngcontent-%COMP%] {\n  margin-top: -5px;\n  position: absolute;\n  margin-left: -88px;\n  opacity: 0;\n}\n@media screen and (max-width: 768px) {\n  .product-img-container[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .form-group[_ngcontent-%COMP%]   .mobile-field[_ngcontent-%COMP%]:first-child {\n    margin-bottom: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvbW9kYWxzL2FkZC1wcm9kdWN0L0U6XFxVSSBwcm9qZWN0XFxSYXNhaHJpZGF5XFxDbGllbnRfRWRpdGFibGVRdWVzdGlvbnNBbnN3ZXJzL3NyY1xcYXNzZXRzXFxzY3NzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcHJvZHVjdHMvbW9kYWxzL2FkZC1wcm9kdWN0L0U6XFxVSSBwcm9qZWN0XFxSYXNhaHJpZGF5XFxDbGllbnRfRWRpdGFibGVRdWVzdGlvbnNBbnN3ZXJzL3NyY1xcYXNzZXRzXFxzY3NzXFxjb21tb24uc2NzcyIsInNyYy9hcHAvcHJvZHVjdHMvbW9kYWxzL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9kdWN0cy9tb2RhbHMvYWRkLXByb2R1Y3QvRTpcXFVJIHByb2plY3RcXFJhc2FocmlkYXlcXENsaWVudF9FZGl0YWJsZVF1ZXN0aW9uc0Fuc3dlcnMvc3JjXFxhcHBcXHByb2R1Y3RzXFxtb2RhbHNcXGFkZC1wcm9kdWN0XFxhZGQtcHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3REEsaUJBQUE7QUNwREE7RUFDRSwrQkFBQTtFQUNBLDRCQUFBO0FDRkY7QURLQTtFQUNFLGdDQUFBO0VBQ0EsNkJBQUE7QUNGRjtBREtBO0VBQ0Usc0JBQUE7QUNGRjtBREtBO0VBQ0UsaUJBQUE7QUNGRjtBRElFO0VBSEY7SUFJSSxrQkFBQTtFQ0RGO0FBQ0Y7QURJQTtFQUNFLGNEUmtCO0FFT3BCO0FESUE7RUFDRSx1QkFBQTtBQ0RGO0FESUE7RUFDRSw0QkFBQTtBQ0RGO0FESUE7RUFDRSw2QkFBQTtBQ0RGO0FESUE7RUFDRSxrQkFBQTtBQ0RGO0FES0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0ZKO0FETUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNIRjtBREtFO0VBTEY7SUFNSSxVQUFBO0VDRkY7QUFDRjtBRElFO0VBQ0csbUJBQUE7QUNGTDtBREdJO0VBQ0Usb0NBQUE7RUFDQSxzQkFBQTtFQUNBLG1CRFZzQjtFQ1d0QixZQUFBO0FDRE47QURLRTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CRDNCMkI7RUM0QjNCLG1CQUFBO0FDSEo7QURLSTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDSE47QURLTTtFQUNFLHVCQUFBO0FDSFI7QURPSTtFQXBCRjtJQXFCSSxZQUFBO0VDSko7QUFDRjtBRE9FO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FDTEo7QURPSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0xOO0FEUUk7RUFDRSxZQUFBO0FDTk47QURVRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSw2QkQ3RHdCO0VDOER4Qiw0QkQ5RHdCO0VDK0R4QixnQ0QvRHdCO0VDZ0V4QiwrQkRoRXdCO0FFd0Q1QjtBRFlFO0VBQ0UsWUFBQTtBQ1ZKO0FEYUU7RUFDRyxnQkFBQTtFQUNBLG1CQUFBO0FDWEw7QURjRTtFQUNFLGNEdkY0QjtFQ3dGNUIsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUNaSjtBRGVFO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ2JKO0FEZ0JFO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtBQ2RKO0FEZ0JJO0VBQ0Usa0JBQUE7RUFDQSxjRDlHMEI7QUVnR2hDO0FEaUJJO0VBQ0ksbUJBQUE7QUNmUjtBRGlCUTtFQUNJLG1CRHJIb0I7RUNzSHBCLFdEaElZO0VDaUlaLDBCQUFBO0VBQ0EsbUJBQUE7QUNmWjtBRG9CRTtFQUNFLG1CQUFBO0FDbEJKO0FEb0JJO0VBQ0Usa0JBQUE7RUFDQSxtQkRoSXlCO0VDaUl6QixxQkRuSTBCO0FFaUhoQztBRHNCTztFQURIO0lBRU0sMEJBQUE7SUFDQSx5QkFBQTtFQ25CUjtBQUNGO0FEdUJJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkRqSndCO0VDa0p4QixjRGpKd0I7RUNrSnhCLHlCQUFBO0FDckJSO0FEd0JJO0VBQ0ksdUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjRDFKd0I7QUVvSWhDO0FEMkJJO0VBQ0UseUJEL0owQjtFQ2dLMUIsV0Q1Sm1CO0FFbUl6QjtBRDJCSTtFQUNFLGNEcEswQjtFQ3FLMUIsaUJBQUE7QUN6Qk47QUQ2QkU7RUFDRSxpQkFBQTtBQzNCSjtBRDBDQTtFQUNFLG1CQUFBO0FDdkNGO0FEeUNFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ3ZDSjtBRHlDRTtFQUNHLGVBQUE7RUFDQSxvQkFBQTtBQ3ZDTDtBRHlDSztFQUpIO0lBS0ksdUJBQUE7RUN0Q0o7QUFDRjtBRDBDQTtFQUNFLGNENU04QjtFQzZNOUIseUJEM002QjtFQzRNN0IscUJEOU04QjtFQytNOUIsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FDdkNGO0FEeUNFO0VBR0UsY0R4TjRCO0VDeU41Qix5QkR2TjJCO0VDd04zQixxQkQxTjRCO0FFaUxoQztBRDJDRTtFQUNFLDBCQUFBO0FDekNKO0FENkNBO0VBQ0UsY0RqTzhCO0VDa085Qix5QkRuTzhCO0VDb085QixxQkRuTzhCO0VDb085QixpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQzFDRjtBRDRDRTtFQUdFLGNEOU80QjtFQytPNUIseUJEaFA0QjtFQ2lQNUIscUJEaFA0QjtBRW9NaEM7QUQ4Q0U7RUFDRSwwQkFBQTtBQzVDSjtBRGlEQTtFQUNFLFdEdFNrQjtFQ3VTbEIseUJEOVFtQjtFQytRbkIscUJEL1FtQjtFQ2dSbkIsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDOUNGO0FEZ0RFO0VBR0UsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0FDaERKO0FEb0RBO0VBRUUsZUFBQTtBQ2xERjtBRDBEQTtFQUNFLHNCQUFBO0FDeERGO0FEMkRBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FDeERGO0FEMERFO0VBQ0UsNkNBQUE7QUN4REo7QUQ2REU7RUFDRSw0QkQ3UndCO0VDOFJ4Qiw2QkQ5UndCO0VDK1J4QiwrQkQvUndCO0VDZ1N4QixnQ0RoU3dCO0VDaVN4Qix5QkR6UzJCO0FFK08vQjtBRCtERTtFQURGO0lBRUksaUJBQUE7SUFDQSxjQUFBO0VDM0RGO0FBQ0Y7QUQ4REE7RUFDRSw4QkFBQTtBQzNERjtBRDhEQTtFQUNFLDJCQUFBO0FDM0RGO0FEK0RFO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0Q1VWtCO0VDNlVsQixtQkRyVXdCO0VDc1V4QiwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUM1RE47QURvRUE7RUFDRSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7RUFDQSxjRGxWOEI7QUVpUmhDO0FEbUVFO0VBTkY7SUFPSSx1QkFBQTtFQ2hFRjtBQUNGO0FEbUVBO0VBQ0UsNkJBQUE7QUNoRUY7QURzRU07RUFERjtJQUVJLFVBQUE7RUNsRU47QUFDRjtBRHFFRTtFQUNFLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkQ5VndCO0FFMlI1QjtBRHVFQTtFQUNFLHNDQUFBO0FDcEVGO0FEdUVBO0VBQ0Usb0NBQUE7QUNwRUY7QUR1RUE7RUFDRSxxQ0FBQTtBQ3BFRjtBRHdFRTtFQURGO0lBRU0sMEJBQUE7RUNwRUo7QUFDRjtBRHVFQSxpQ0FBQTtBQXFFQTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtBQ3hJRjtBRDJJQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHdnQkFsRWM7RUE2Q1osNEhBc0JpQjtBQ3BJckI7QUR1SUE7RUF6Q0ksb0NBMEN1QjtFQWxDdkIsdUNBbUMwQjtBQzVIOUI7QUR1RUk7RUF5REY7SUFDRSx5b0RBakZXO0VDdkJiO0FBQ0Y7QUQ2Q0k7RUErREY7SUFqQ0UsNEJBa0NtQjtJQWpDbkIsaUNBaUNtQjtJQWhDbkIsb0NBZ0NtQjtJQS9CbkIsK0JBK0JtQjtJQTlCbkIsZ0NBOEJtQjtJQUNuQixVQUFBO0VDN0RGO0FBQ0Y7QURMSTtFQXNFRjtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQzBCRjtFRHhCQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQzBCRjtFRHhCQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQzBCRjtFRHhCQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQzBCRjtFRHhCQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQzBCRjtBQUNGO0FDOWpCQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBRGdrQko7QUM3akJBO0VBQ0kscUJBQUE7QURna0JKO0FDN2pCQTtFQUNJLHFCQUFBO0FEZ2tCSjtBQzdqQkE7RUFDSSxVQUFBO0FEZ2tCSjtBQzdqQkE7RUFDSSxZQUFBO0FEZ2tCSjtBQzVqQkk7RUFDSSxnQkFBQTtBRCtqQlI7QUMzakJBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FEOGpCSjtBQzNqQkE7RUFDSSxxQkFBQTtFQUNBLHlCSFE0QjtFR1A1QixjSFE0QjtFR1A1QixlQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUQ4akJKO0FDNWpCSTtFQUNJLG9DQUFBO0VBQ0EseUJBQUE7QUQ4akJSO0FDMWpCQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUQ2akJKO0FDeGpCUTtFQURKO0lBRVEsbUJBQUE7RUQ0akJWO0FBQ0Y7QUNwakJZO0VBREo7SUFFUSxtQkFBQTtFRHdqQmQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL21vZGFscy9hZGQtcHJvZHVjdC9hZGQtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRoZWFkZXItdGhlbWUtYmFja2dyb3VuZDojZmJmYmZiO1xyXG4kaGVhZGVyLXRoZW1lLWNvbG9yOiNkODQzMTU7XHJcbiRidXR0b24tdGhlbWUtYmFja2dyb3VuZDojZjA3YzI5O1xyXG4kYnV0dG9uLXRoZW1lLWNvbG9yOiNmZmY7XHJcbiRzZWFyY2hCdG4tdGhlbWUtYmFja2dyb3VuZDojMjhhNzQ1O1xyXG4kc2VhcmNoQnRuLXRoZW1lLWNvbG9yOiNmZmY7XHJcbiRxdWVzdGlvbnMtdGhlbWUtY29sb3I6YmxhY2s7XHJcbiRzaG93SGlkZVRvZ2dsZUljb24tY29sb3I6I2YwN2MyOTtcclxuJHNob3dIaWRlLWJ0bi1iYWNrZ3JvdW5kOndoaXRlO1xyXG4kc2hvd0hpZGUtYnRuLWNvbG9yOmdyZXk7XHJcbiRiYWNrZ3JvdW5kLWltZzonYmFja2dyb3VuZC1pbWcucG5nJztcclxuJGltZy1wYXRoOicuL2Fzc2V0cy9pbWFnZXMvJztcclxuJGdvbGRlbnRoZW1lLWJhY2tncm91bmQtaW1nOiAnZ29sZGVudGhlbWUtYmFja2dyb3VuZC1pbWcucG5nJzsgXHJcbiRib2R5LWJhY2tncm91bmQ6ICNmZmY7XHJcbiRwYWdlLWNvbnRhaW5lci1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuJHByb2R1Y3QtbmFtZS1jb2xvcjojMzMzO1xyXG4kcHJvZHVjdC1kZXNjcmlwdGlvbi1jb2xvcjojN2U2ZTZlO1xyXG4kY29udGFpbmVyLWJvcmRlci1jb2xvcjogI2RjZGNkYztcclxuJGJ0bi1saWdodGRlZmF1bHQtYm9yZGVyOiAjZGNkY2RjO1xyXG4kZGVsZXRlLWljb24tY29sb3I6ICNjZTQ1NDU7XHJcbiRidG4tZGVmYXVsdDojZjhmOWZhOyBcclxuJGNvbmZpcm0tc3RhdHVzLWJhY2tncm91bmQ6IGFsaWNlQmx1ZTtcclxuJGNoZWNrLWljb24tY29sb3I6IGdyZWVuO1xyXG4kcGVuZGluZ2Nsb2NrLWljb24tY29sb3I6ICM1OGI2ZDU7XHJcbiRwZW5kaW5nLXN0YXR1cy1iYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG4kcHJvZHVjdC1ob3Zlci1ib3JkZXI6IGJsYWNrO1xyXG4kZ29sZGVudGhlbWUtcHJvZHVjdC1ob3ZlcjogI2VlY2Q1ZjtcclxuJGJ0bi1vdXRsaW5lLWNvbG9yOiAjNGZiZmE4O1xyXG4kYnRuLW91dGxpbmUtY29sb3IxOiAjMDA0RTY0O1xyXG4kYnRuLW91dGxpbmUtY29sb3IxLWFjdGl2ZTogIzAwM0Q0RjtcclxuJGNvbnRhY3QtdXMtZm9vdGVyOiAjZWRmMGY1O1xyXG4kY29weXJpZ2h0LWZvb3RlcjogIzMxM2UyNDtcclxuJGdvbGRlbnRoZW1lLWNvcHlyaWdodC1mb290ZXI6ICMzMTNlMjQ7XHJcbiRjb250YWN0LXVzLWZvb3RlcmNvbG9yOiAjMjEyNTI5O1xyXG4kY29udGFjdHVzLWxpbmtpY29uLWNvbG9yOiAjMDA1YzUwO1xyXG4kY29udGFjdC11cy1ib3JkZXI6IGdhaW5zYm9ybztcclxuJGJveC1zaGFkb3ctY29sb3I6IGdhaW5zYm9ybztcclxuJGJ0bi1vdXRsaW5lLXRleHRjb2xvcjogI2ZmZjtcclxuJGJ0bi1vdXRsaW5lc2Vjb25kYXJ5LWJvcmRlcmhvdmVyOiAjMDA2NDAwO1xyXG4kYnRuLW91dGxpbmUtYmFja2dyb3VuZGhvdmVyOiAjM2Q4ZDdjO1xyXG4kYnRuLXNlYXJjaC1iYWNrZ3JvdW5kOiAjMzc3ZDZlOyBcclxuJGhlYWRlci1ib3gtc2hhZG93Y29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiRidG4tb3V0bGluZS1yZW1vdmVidG46IGluZGlhbnJlZDtcclxuJHBob25lbnVtYmVyLWxpbmstY29sb3I6IGdyZWVuO1xyXG4kY2FydC1zdGlja3ktYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxuJG91dE9mU3RvY2stYmFja2dyb3VuZC1jb2xvcjogI2E5MGIwYjtcclxuJGNhcnQtaWNvbi1jb2xvcjogI2E5MGIwYjtcclxuJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kOiAjMzEzZTI0O1xyXG4kZ29sZGVudGhlbWUtaGVhZGVydGV4dC1jb2xvcjogICNhZDk3NGY7XHJcbiRnb2xkZW50aGVtZS1wYW5lbC1iYWNrZ3JvdW5kOiAjZTNkZmNlO1xyXG4kZ29sZGVudGhlbWUtcHJvZHVjdGRlc2NyaXB0aW9uLWNvbG9yOiAjMjMxZjIwO1xyXG4kZ29sZGVudGhlbWUtcHJvZHVjdGRlc2NyaXB0aW9uLWNvbG9yOiMzMzM7XHJcbiRnb2xkZW50aGVtZS1iYWRnZS10ZXh0OiAjZmZmO1xyXG4kZ29sZGVudGhlbWUtZm9vdGVyLWNvbG9yOiAjYjViMTk2O1xyXG4kZ29sZGVudGhlbWUtY29uZmlybW1vZGFsLWJvcmRlcmNvbG9yOiAjYzRiYWJhO1xyXG4kZ29sZGVudGhlbWUtY2Fyb3VzZWx0ZXh0LWNvbG9yOiAjYmViODljO1xyXG4vKiBjb25zdCB2YWx1ZXMgKi9cclxuJGdvbGRlbnRoZW1lLWJvcmRlci1yYWRpdXM6IDIwcHg7IiwiQGltcG9ydCBcIi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbiRpbWctcGF0aDogJ35zcmMvYXNzZXRzL2ltYWdlcy8nO1xyXG5cclxuJXF1YW50aXR5YnRuLWxlZnQtYm9yZGVycmFkaXVzIHtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbiVxdWFudGl0eWJ0bi1yaWdodC1ib3JkZXJyYWRpdXMge1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uYnRuLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5lZGl0LWljb24ge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZGVsZXRlLWljb24ge1xyXG4gIGNvbG9yOiAkZGVsZXRlLWljb24tY29sb3I7XHJcbn1cclxuXHJcbi5uby1wYWRkaW5nIHtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5vLXBhZGRpbmctbGVmdCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5vLXBhZGRpbmctcmlnaHQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZW1wdHktZGF0YSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGVmYXVsdC1pbWctY29udGFpbmVyIHtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJ0LWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDY0JTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcblxyXG4gIC5wcm9kdWN0LW9yZGVyZWQtZGF0ZWNvbnRhaW5lciB7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIC5vcmRlcmVkLWRhdGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVydGV4dC1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogJGdvbGRlbnRoZW1lLWJhZGdlLXRleHQgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGdvbGRlbnRoZW1lLWJvcmRlci1yYWRpdXM7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnByb2R1Y3QtaXRlbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAycHggJGJveC1zaGFkb3ctY29sb3I7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZ29sZGVudGhlbWUtcGFuZWwtYmFja2dyb3VuZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblxyXG4gICAgLnVzZXItZGV0YWlscyB7XHJcbiAgICAgIGNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggJGdvbGRlbnRoZW1lLWhlYWRlcnRleHQtY29sb3I7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gICAgICAucGhvbmUtbnVtYmVyIHtcclxuICAgICAgICBjb2xvcjogJHBob25lbnVtYmVyLWxpbmstY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHsgXHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wcm9kdWN0LWltZy1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgLnByb2R1Y3QtaW1hZ2VzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2R1Y3QtaW1nIHtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnByb2R1Y3QtaW1nIHtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICRjb250YWluZXItYm9yZGVyLWNvbG9yO1xyXG4gICAgbWFyZ2luOiBhdXRvIGF1dG8gMTVweCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJGdvbGRlbnRoZW1lLWJvcmRlci1yYWRpdXM7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkZ29sZGVudGhlbWUtYm9yZGVyLXJhZGl1cztcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkZ29sZGVudGhlbWUtYm9yZGVyLXJhZGl1cztcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRnb2xkZW50aGVtZS1ib3JkZXItcmFkaXVzO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAuYWRkLXRvLWNhcnQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgLmNhcnQtaXRlbS1hY3Rpb25idG5zIHtcclxuICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1uYW1lIHtcclxuICAgIGNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVydGV4dC1jb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcblxyXG4gIC5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcclxuICAgIGNvbG9yOiAkcHJvZHVjdC1kZXNjcmlwdGlvbi1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICAuZHJ1Zy1xdWFudGl0eS1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG5cclxuICAgIC5kcnVnLXF1YW50aXR5LXRpdGxlIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICBjb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmRydWctcXVhbnRpdHl2YWx1ZS1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmRydWctcXVhbnRpdHktdmFsdWUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYnRuLW91dGxpbmUtdGV4dGNvbG9yO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA2cHggMTJweCA2cHggMTJweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5xdWFudGl0eS1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBcclxuICAgIC5xdHktaW5wdXQge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRnb2xkZW50aGVtZS1wYW5lbC1iYWNrZ3JvdW5kO1xyXG4gICAgICBib3JkZXItY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICAgIH1cclxuXHJcbiAgICAucXVhbnRpdHktZmllbGRzLWNvbnRhaW5lciB7XHJcbiAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjk5M3B4KSBhbmQgKG1heC13aWR0aDogMTUwMHB4KSB7XHJcbiAgICAgICAgICBmbGV4LWJhc2lzOiAzMiUgIWltcG9ydGFudDtcclxuICAgICAgICAgIG1heC13aWR0aDogMzIlICFpbXBvcnRhbnQ7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gIFxyXG4gICAgLmlucHV0LWdyb3VwLXRleHQge1xyXG4gICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgICAgICAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXJ0ZXh0LWNvbG9yO1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICAgIH1cclxuICBcclxuICAgIC5xdWFudGl0eS10aXRsZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgLnF1YW50aXR5LXJlYWRvbmx5LWNvbnRhaW5lciB7XHJcbiAgICAucXVhbnRpdHktdmFsdWUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVydGV4dC1jb2xvcjtcclxuICAgICAgY29sb3I6ICRnb2xkZW50aGVtZS1iYWRnZS10ZXh0O1xyXG4gICAgfVxyXG4gICAgLnF1YW50aXR5LXRleHQge1xyXG4gICAgICBjb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5idG4tb3V0bGluZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cC1wcmVwZW5kIHtcclxuICAuaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgICAgIEBleHRlbmQgJXF1YW50aXR5YnRuLWxlZnQtYm9yZGVycmFkaXVzO1xyXG4gIH1cclxufVxyXG4uaW5wdXQtZ3JvdXAtYXBwZW5kIHtcclxuICAgIC5pbnB1dC1ncm91cC10ZXh0IHtcclxuICAgICAgICBAZXh0ZW5kICVxdWFudGl0eWJ0bi1yaWdodC1ib3JkZXJyYWRpdXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9kdWN0LXByaWNlIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAuY3VycmVudC1jdXJyZW5jeS1zeW1ib2wge1xyXG4gICAgdG9wOiAtNC4yNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAucHJpY2UtdmFsdWUge1xyXG4gICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuXHJcbiAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZSB7XHJcbiAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ29sZGVudGhlbWUtcGFuZWwtYmFja2dyb3VuZDtcclxuICBib3JkZXItY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogM3B4IDEwcHggIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICY6YWN0aXZlLFxyXG4gICY6aG92ZXIsXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBjb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdvbGRlbnRoZW1lLXBhbmVsLWJhY2tncm91bmQ7XHJcbiAgICBib3JkZXItY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICB9XHJcbiAgJjphY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtY3VzdG9tc2Vjb25kYXJ5IHtcclxuICBjb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlcnRleHQtY29sb3I7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kO1xyXG4gIGJvcmRlci1jb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlcnRleHQtY29sb3I7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDNweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCAkYm94LXNoYWRvdy1jb2xvcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgXHJcbiAgJjphY3RpdmUsXHJcbiAgJjpob3ZlcixcclxuICAmOmZvY3VzIHtcclxuICAgIGNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVydGV4dC1jb2xvcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICAgIGJvcmRlci1jb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlcnRleHQtY29sb3I7XHJcbiAgfVxyXG4gICY6YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5idG4tY29sb3ItMSB7XHJcbiAgY29sb3I6ICRidXR0b24tdGhlbWUtY29sb3I7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJ0bi1vdXRsaW5lLWNvbG9yMTtcclxuICBib3JkZXItY29sb3I6ICRidG4tb3V0bGluZS1jb2xvcjE7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG5cclxuICAmOmhvdmVyLFxyXG4gICY6YWN0aXZlLFxyXG4gICY6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogJGJ0bi1vdXRsaW5lLWNvbG9yMS1hY3RpdmUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAkYnV0dG9uLXRoZW1lLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICRidG4tb3V0bGluZS1jb2xvcjEtYWN0aXZlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtcmVtb3ZlYnRuIHtcclxuICBAZXh0ZW5kIC5idG4tb3V0bGluZS1jdXN0b21zZWNvbmRhcnk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAmOmFjdGl2ZSxcclxuICAmOmhvdmVyLFxyXG4gICY6Zm9jdXMge1xyXG4gIH1cclxufVxyXG5cclxuLmZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcblxyXG4gIC5jbG9zZSB7XHJcbiAgICBtYXJnaW46IC0wLjVyZW0gLTAuMnJlbSAtMXJlbSBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAge1xyXG4gIC5tb2RhbC1jb250ZW50IHtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRnb2xkZW50aGVtZS1ib3JkZXItcmFkaXVzO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRnb2xkZW50aGVtZS1ib3JkZXItcmFkaXVzO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGdvbGRlbnRoZW1lLWJvcmRlci1yYWRpdXM7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGdvbGRlbnRoZW1lLWJvcmRlci1yYWRpdXM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ29sZGVudGhlbWUtcGFuZWwtYmFja2dyb3VuZDtcclxuIH1cclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIG1heC1oZWlnaHQ6IDU4MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG5idXR0b25bZGlzYWJsZWRdIHtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50b3RhbC10ZXh0IHtcclxuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vdXQtb2Ytc3RvY2sge1xyXG4gIC5vdXQtb2Ytc3RvY2stdGV4dCB7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgY29sb3I6ICRidG4tb3V0bGluZS10ZXh0Y29sb3I7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRvdXRPZlN0b2NrLWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgIGJvcmRlcjogc29saWQgMXB4ICRib3gtc2hhZG93LWNvbG9yO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICBwYWRkaW5nOiA2LjVweCAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLW1vZGFsIHtcclxuICBAZXh0ZW5kIC5idG4tb3V0bGluZTtcclxufVxyXG5cclxuLnBhZ2UtaGVhZGluZyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIH1cclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCB7XHJcbiAgLmFsZXJ0LWRpc21pc3NpYmxlIHtcclxuICAgIC5jbG9zZSB7XHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5hbGVydC1pbmZvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXJ0ZXh0LWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkZ29sZGVudGhlbWUtYm9yZGVyLXJhZGl1cztcclxuIH1cclxufVxyXG5cclxuLmt1cGlwYWt3YSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCRpbWctcGF0aCArICdrdXBpcGFrd2EucG5nJyk7XHJcbn1cclxuXHJcbi5wb3R0YWxpIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJGltZy1wYXRoICsgJ3BvdHRhbGkucG5nJyk7XHJcbn1cclxuXHJcbi5raGFsdml5YSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCRpbWctcGF0aCArICdraGFsdml5YS5wbmcnKTtcclxufVxyXG5cclxuLmRpc3BsYXktaW5saW5lIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDsgXHJcbiAgfVxyXG59XHJcblxyXG4vKi0tLS1maXJlY3JhY2tlcnMgYW5pbWF0aW9uIC0tLSovXHJcbiRwYXJ0aWNsZXM6IDUwO1xyXG4kd2lkdGg6IDUwMDtcclxuJGhlaWdodDogNTAwO1xyXG5cclxuLy8gQ3JlYXRlIHRoZSBleHBsb3Npb24uLi5cclxuJGJveC1zaGFkb3c6ICgpO1xyXG4kYm94LXNoYWRvdzI6ICgpO1xyXG5AZm9yICRpIGZyb20gMCB0aHJvdWdoICRwYXJ0aWNsZXMge1xyXG4gICRib3gtc2hhZG93OiAkYm94LXNoYWRvdyxcclxuICAgICAgICAgICAgICAgcmFuZG9tKCR3aWR0aCktJHdpZHRoIC8gMiArIHB4XHJcbiAgICAgICAgICAgICAgIHJhbmRvbSgkaGVpZ2h0KS0kaGVpZ2h0IC8gMS4yICsgcHhcclxuICAgICAgICAgICAgICAgaHNsKHJhbmRvbSgzNjApLCAxMDAsIDUwKTtcclxuICAkYm94LXNoYWRvdzI6ICRib3gtc2hhZG93MiwgMCAwICNmZmZcclxufVxyXG5AbWl4aW4ga2V5ZnJhbWVzICgkYW5pbWF0aW9uTmFtZSkge1xyXG4gICAgQC13ZWJraXQta2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxuXHJcbiAgICBALW1vei1rZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIEAtby1rZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIEAtbXMta2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxuXHJcbiAgICBAa2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGFuaW1hdGlvbi1kZWxheSAoJHNldHRpbmdzKSB7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogJHNldHRpbmdzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6ICRzZXR0aW5ncztcclxuICAgIC1vLWFuaW1hdGlvbi1kZWxheTogJHNldHRpbmdzO1xyXG4gICAgLW1zLWFuaW1hdGlvbi1kZWxheTogJHNldHRpbmdzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAkc2V0dGluZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiBhbmltYXRpb24tZHVyYXRpb24gKCRzZXR0aW5ncykge1xyXG4gICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246ICRzZXR0aW5ncztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAkc2V0dGluZ3M7XHJcbiAgICAtby1hbmltYXRpb24tZHVyYXRpb246ICRzZXR0aW5ncztcclxuICAgIC1tcy1hbmltYXRpb24tZHVyYXRpb246ICRzZXR0aW5ncztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogJHNldHRpbmdzO1xyXG59XHJcblxyXG5AbWl4aW4gYW5pbWF0aW9uICgkc2V0dGluZ3MpIHtcclxuICAgIC1tb3otYW5pbWF0aW9uOiAkc2V0dGluZ3M7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogJHNldHRpbmdzO1xyXG4gICAgLW8tYW5pbWF0aW9uOiAkc2V0dGluZ3M7XHJcbiAgICAtbXMtYW5pbWF0aW9uOiAkc2V0dGluZ3M7XHJcbiAgICBhbmltYXRpb246ICRzZXR0aW5ncztcclxufVxyXG5cclxuQG1peGluIHRyYW5zZm9ybSAoJHNldHRpbmdzKSB7XHJcbiAgICB0cmFuc2Zvcm06ICRzZXR0aW5ncztcclxuICAgIC1tb3otdHJhbnNmb3JtOiAkc2V0dGluZ3M7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogJHNldHRpbmdzO1xyXG4gICAgLW8tdHJhbnNmb3JtOiAkc2V0dGluZ3M7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiAkc2V0dGluZ3M7XHJcbn1cclxuXHJcbi5weXJvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbi5weXJvID4gLmJlZm9yZSwgLnB5cm8gPiAuYWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogNXB4O1xyXG4gIGhlaWdodDogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3gtc2hhZG93OiAkYm94LXNoYWRvdzI7XHJcbiAgQGluY2x1ZGUgYW5pbWF0aW9uKCgxcyBiYW5nIGVhc2Utb3V0IGluZmluaXRlIGJhY2t3YXJkcywgMXMgZ3Jhdml0eSBlYXNlLWluIGluZmluaXRlIGJhY2t3YXJkcywgNXMgcG9zaXRpb24gbGluZWFyIGluZmluaXRlIGJhY2t3YXJkcykpO1xyXG59XHJcbiAgICBcclxuLnB5cm8gPiAuYWZ0ZXIge1xyXG4gIEBpbmNsdWRlIGFuaW1hdGlvbi1kZWxheSgoMS4yNXMsIDEuMjVzLCAxLjI1cykpO1xyXG4gIEBpbmNsdWRlIGFuaW1hdGlvbi1kdXJhdGlvbigoMS4yNXMsIDEuMjVzLCA2LjI1cykpO1xyXG59XHJcbiAgICAgICAgXHJcbkBpbmNsdWRlIGtleWZyYW1lcyhiYW5nKSB7XHJcbiAgdG8ge1xyXG4gICAgYm94LXNoYWRvdzokYm94LXNoYWRvdztcclxuICB9XHJcbn1cclxuICAgIFxyXG5AaW5jbHVkZSBrZXlmcmFtZXMoZ3Jhdml0eSkgIHtcclxuICB0byB7XHJcbiAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWSgyMDBweCkpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuICAgIFxyXG5AaW5jbHVkZSBrZXlmcmFtZXMocG9zaXRpb24pIHtcclxuICAwJSwgMTkuOSUge1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICB9XHJcbiAgMjAlLCAzOS45JSB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gIH1cclxuICA0MCUsIDU5LjklIHsgIFxyXG4gICAgbWFyZ2luLXRvcDogMjAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDcwJVxyXG4gIH1cclxuICA2MCUsIDc5LjklIHsgIFxyXG4gICAgbWFyZ2luLXRvcDogMzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICB9XHJcbiAgODAlLCA5OS45JSB7ICBcclxuICAgIG1hcmdpbi10b3A6IDMwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XHJcbiAgfVxyXG59XHJcblxyXG4iLCIvKiBjb25zdCB2YWx1ZXMgKi9cbi5pbnB1dC1ncm91cC1wcmVwZW5kIC5pbnB1dC1ncm91cC10ZXh0IHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbn1cblxuLmlucHV0LWdyb3VwLWFwcGVuZCAuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbn1cblxuLmJ0bi1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLmVkaXQtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZWRpdC1pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIH1cbn1cblxuLmRlbGV0ZS1pY29uIHtcbiAgY29sb3I6ICNjZTQ1NDU7XG59XG5cbi5uby1wYWRkaW5nIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5uby1wYWRkaW5nLWxlZnQge1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubm8tcGFkZGluZy1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uZW1wdHktZGF0YSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRlZmF1bHQtaW1nLWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5jYXJ0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiA2NCU7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMTBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNhcnQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG59XG4uY2FydC1jb250YWluZXIgLnByb2R1Y3Qtb3JkZXJlZC1kYXRlY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAucHJvZHVjdC1vcmRlcmVkLWRhdGVjb250YWluZXIgLm9yZGVyZWQtZGF0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZDk3NGYgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogNXB4O1xufVxuLmNhcnQtY29udGFpbmVyIC5wcm9kdWN0LWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMnB4IGdhaW5zYm9ybztcbiAgYmFja2dyb3VuZDogI2UzZGZjZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAucHJvZHVjdC1pdGVtIC51c2VyLWRldGFpbHMge1xuICBjb2xvcjogIzMxM2UyNCAhaW1wb3J0YW50O1xuICBib3JkZXI6IHNvbGlkIDFweCAjYWQ5NzRmO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNhcnQtY29udGFpbmVyIC5wcm9kdWN0LWl0ZW0gLnVzZXItZGV0YWlscyAucGhvbmUtbnVtYmVyIHtcbiAgY29sb3I6IGdyZWVuICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJ0LWNvbnRhaW5lciAucHJvZHVjdC1pdGVtIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbi5jYXJ0LWNvbnRhaW5lciAucHJvZHVjdC1pbWctY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAucHJvZHVjdC1pbWctY29udGFpbmVyIC5wcm9kdWN0LWltYWdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLmNhcnQtY29udGFpbmVyIC5wcm9kdWN0LWltZy1jb250YWluZXIgLnByb2R1Y3QtaW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmNhcnQtY29udGFpbmVyIC5wcm9kdWN0LWltZyB7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IHNvbGlkIDFweCAjZGNkY2RjO1xuICBtYXJnaW46IGF1dG8gYXV0byAxNXB4IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG59XG4uY2FydC1jb250YWluZXIgLmFkZC10by1jYXJ0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmNhcnQtY29udGFpbmVyIC5jYXJ0LWl0ZW0tYWN0aW9uYnRucyB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uY2FydC1jb250YWluZXIgLnByb2R1Y3QtbmFtZSB7XG4gIGNvbG9yOiAjYWQ5NzRmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLmNhcnQtY29udGFpbmVyIC5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6ICM3ZTZlNmUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwO1xufVxuLmNhcnQtY29udGFpbmVyIC5kcnVnLXF1YW50aXR5LWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuLmNhcnQtY29udGFpbmVyIC5kcnVnLXF1YW50aXR5LWNvbnRhaW5lciAuZHJ1Zy1xdWFudGl0eS10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY29sb3I6ICMzMTNlMjQ7XG59XG4uY2FydC1jb250YWluZXIgLmRydWctcXVhbnRpdHktY29udGFpbmVyIC5kcnVnLXF1YW50aXR5dmFsdWUtY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAuZHJ1Zy1xdWFudGl0eS1jb250YWluZXIgLmRydWctcXVhbnRpdHl2YWx1ZS1jb250YWluZXIgLmRydWctcXVhbnRpdHktdmFsdWUge1xuICBiYWNrZ3JvdW5kOiAjMzEzZTI0O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNnB4IDEycHggNnB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4uY2FydC1jb250YWluZXIgLnF1YW50aXR5LWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uY2FydC1jb250YWluZXIgLnF1YW50aXR5LWNvbnRhaW5lciAucXR5LWlucHV0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZTNkZmNlO1xuICBib3JkZXItY29sb3I6ICMzMTNlMjQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTNweCkgYW5kIChtYXgtd2lkdGg6IDE1MDBweCkge1xuICAuY2FydC1jb250YWluZXIgLnF1YW50aXR5LWNvbnRhaW5lciAucXVhbnRpdHktZmllbGRzLWNvbnRhaW5lciB7XG4gICAgZmxleC1iYXNpczogMzIlICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAzMiUgIWltcG9ydGFudDtcbiAgfVxufVxuLmNhcnQtY29udGFpbmVyIC5xdWFudGl0eS1jb250YWluZXIgLmlucHV0LWdyb3VwLXRleHQge1xuICB3aWR0aDogMzVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjMzEzZTI0O1xuICBjb2xvcjogI2FkOTc0ZjtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzMxM2UyNDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAucXVhbnRpdHktY29udGFpbmVyIC5xdWFudGl0eS10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjMzEzZTI0O1xufVxuLmNhcnQtY29udGFpbmVyIC5xdWFudGl0eS1yZWFkb25seS1jb250YWluZXIgLnF1YW50aXR5LXZhbHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FkOTc0ZjtcbiAgY29sb3I6ICNmZmY7XG59XG4uY2FydC1jb250YWluZXIgLnF1YW50aXR5LXJlYWRvbmx5LWNvbnRhaW5lciAucXVhbnRpdHktdGV4dCB7XG4gIGNvbG9yOiAjMzEzZTI0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAuYnRuLW91dGxpbmUsIC5jYXJ0LWNvbnRhaW5lciAuYnRuLW91dGxpbmUtbW9kYWwge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnByb2R1Y3QtcHJpY2Uge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnByb2R1Y3QtcHJpY2UgLmN1cnJlbnQtY3VycmVuY3ktc3ltYm9sIHtcbiAgdG9wOiAtNC4yNXB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9kdWN0LXByaWNlIC5wcmljZS12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wcm9kdWN0LXByaWNlIC5wcmljZS12YWx1ZSB7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIH1cbn1cblxuLmJ0bi1vdXRsaW5lLCAuYnRuLW91dGxpbmUtbW9kYWwge1xuICBjb2xvcjogIzMxM2UyNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZGZjZTtcbiAgYm9yZGVyLWNvbG9yOiAjMzEzZTI0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogM3B4IDEwcHggIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJ0bi1vdXRsaW5lOmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLW1vZGFsOmFjdGl2ZSwgLmJ0bi1vdXRsaW5lOmhvdmVyLCAuYnRuLW91dGxpbmUtbW9kYWw6aG92ZXIsIC5idG4tb3V0bGluZTpmb2N1cywgLmJ0bi1vdXRsaW5lLW1vZGFsOmZvY3VzIHtcbiAgY29sb3I6ICMzMTNlMjQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2RmY2U7XG4gIGJvcmRlci1jb2xvcjogIzMxM2UyNDtcbn1cbi5idG4tb3V0bGluZTphY3RpdmUsIC5idG4tb3V0bGluZS1tb2RhbDphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcbn1cblxuLmJ0bi1vdXRsaW5lLWN1c3RvbXNlY29uZGFyeSwgLmJ0bi1vdXRsaW5lLXJlbW92ZWJ0biB7XG4gIGNvbG9yOiAjYWQ5NzRmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzZTI0O1xuICBib3JkZXItY29sb3I6ICNhZDk3NGY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAzcHggMTBweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAycHggMnB4IGdhaW5zYm9ybztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJ0bi1vdXRsaW5lLWN1c3RvbXNlY29uZGFyeTphY3RpdmUsIC5idG4tb3V0bGluZS1yZW1vdmVidG46YWN0aXZlLCAuYnRuLW91dGxpbmUtY3VzdG9tc2Vjb25kYXJ5OmhvdmVyLCAuYnRuLW91dGxpbmUtcmVtb3ZlYnRuOmhvdmVyLCAuYnRuLW91dGxpbmUtY3VzdG9tc2Vjb25kYXJ5OmZvY3VzLCAuYnRuLW91dGxpbmUtcmVtb3ZlYnRuOmZvY3VzIHtcbiAgY29sb3I6ICNhZDk3NGY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTNlMjQ7XG4gIGJvcmRlci1jb2xvcjogI2FkOTc0Zjtcbn1cbi5idG4tb3V0bGluZS1jdXN0b21zZWNvbmRhcnk6YWN0aXZlLCAuYnRuLW91dGxpbmUtcmVtb3ZlYnRuOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xufVxuXG4uYnRuLWNvbG9yLTEge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNEU2NDtcbiAgYm9yZGVyLWNvbG9yOiAjMDA0RTY0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5idG4tY29sb3ItMTpob3ZlciwgLmJ0bi1jb2xvci0xOmFjdGl2ZSwgLmJ0bi1jb2xvci0xOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogIzAwM0Q0RiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICMwMDNENEYgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1vdXRsaW5lLXJlbW92ZWJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgei1pbmRleDogMTAwMDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5tb2RhbC1oZWFkZXIgLmNsb3NlIHtcbiAgbWFyZ2luOiAtMC41cmVtIC0wLjJyZW0gLTFyZW0gYXV0byAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1vZGFsLWNvbnRlbnQge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2RmY2U7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1vZGFsLWJvZHkge1xuICAgIG1heC1oZWlnaHQ6IDU4MHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG59XG5cbmJ1dHRvbltkaXNhYmxlZF0ge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XG59XG5cbi50b3RhbC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xufVxuXG4ub3V0LW9mLXN0b2NrIC5vdXQtb2Ytc3RvY2stdGV4dCB7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICNhOTBiMGI7XG4gIGJvcmRlcjogc29saWQgMXB4IGdhaW5zYm9ybztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogNi41cHggMTBweDtcbn1cblxuLnBhZ2UtaGVhZGluZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzMxM2UyNDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnBhZ2UtaGVhZGluZyB7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIH1cbn1cblxuLmhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIDo6bmctZGVlcCAuYWxlcnQtZGlzbWlzc2libGUgLmNsb3NlIHtcbiAgICB6LWluZGV4OiAwO1xuICB9XG59XG46Om5nLWRlZXAgLmFsZXJ0LWluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzZTI0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjYWQ5NzRmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5rdXBpcGFrd2Ege1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJ+c3JjL2Fzc2V0cy9pbWFnZXMva3VwaXBha3dhLnBuZ1wiKTtcbn1cblxuLnBvdHRhbGkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJ+c3JjL2Fzc2V0cy9pbWFnZXMvcG90dGFsaS5wbmdcIik7XG59XG5cbi5raGFsdml5YSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIn5zcmMvYXNzZXRzL2ltYWdlcy9raGFsdml5YS5wbmdcIik7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gIC5kaXNwbGF5LWlubGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLyotLS0tZmlyZWNyYWNrZXJzIGFuaW1hdGlvbiAtLS0qL1xuLnB5cm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5O1xufVxuXG4ucHlybyA+IC5iZWZvcmUsIC5weXJvID4gLmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmO1xuICAtbW96LWFuaW1hdGlvbjogMXMgYmFuZyBlYXNlLW91dCBpbmZpbml0ZSBiYWNrd2FyZHMsIDFzIGdyYXZpdHkgZWFzZS1pbiBpbmZpbml0ZSBiYWNrd2FyZHMsIDVzIHBvc2l0aW9uIGxpbmVhciBpbmZpbml0ZSBiYWNrd2FyZHM7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAxcyBiYW5nIGVhc2Utb3V0IGluZmluaXRlIGJhY2t3YXJkcywgMXMgZ3Jhdml0eSBlYXNlLWluIGluZmluaXRlIGJhY2t3YXJkcywgNXMgcG9zaXRpb24gbGluZWFyIGluZmluaXRlIGJhY2t3YXJkcztcbiAgLW8tYW5pbWF0aW9uOiAxcyBiYW5nIGVhc2Utb3V0IGluZmluaXRlIGJhY2t3YXJkcywgMXMgZ3Jhdml0eSBlYXNlLWluIGluZmluaXRlIGJhY2t3YXJkcywgNXMgcG9zaXRpb24gbGluZWFyIGluZmluaXRlIGJhY2t3YXJkcztcbiAgLW1zLWFuaW1hdGlvbjogMXMgYmFuZyBlYXNlLW91dCBpbmZpbml0ZSBiYWNrd2FyZHMsIDFzIGdyYXZpdHkgZWFzZS1pbiBpbmZpbml0ZSBiYWNrd2FyZHMsIDVzIHBvc2l0aW9uIGxpbmVhciBpbmZpbml0ZSBiYWNrd2FyZHM7XG4gIGFuaW1hdGlvbjogMXMgYmFuZyBlYXNlLW91dCBpbmZpbml0ZSBiYWNrd2FyZHMsIDFzIGdyYXZpdHkgZWFzZS1pbiBpbmZpbml0ZSBiYWNrd2FyZHMsIDVzIHBvc2l0aW9uIGxpbmVhciBpbmZpbml0ZSBiYWNrd2FyZHM7XG59XG5cbi5weXJvID4gLmFmdGVyIHtcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDEuMjVzLCAxLjI1cywgMS4yNXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxLjI1cywgMS4yNXMsIDEuMjVzO1xuICAtby1hbmltYXRpb24tZGVsYXk6IDEuMjVzLCAxLjI1cywgMS4yNXM7XG4gIC1tcy1hbmltYXRpb24tZGVsYXk6IDEuMjVzLCAxLjI1cywgMS4yNXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMS4yNXMsIDEuMjVzLCAxLjI1cztcbiAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDEuMjVzLCAxLjI1cywgNi4yNXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjI1cywgMS4yNXMsIDYuMjVzO1xuICAtby1hbmltYXRpb24tZHVyYXRpb246IDEuMjVzLCAxLjI1cywgNi4yNXM7XG4gIC1tcy1hbmltYXRpb24tZHVyYXRpb246IDEuMjVzLCAxLjI1cywgNi4yNXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS4yNXMsIDEuMjVzLCA2LjI1cztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGJhbmcge1xuICB0byB7XG4gICAgYm94LXNoYWRvdzogNDNweCAtMjg0LjY2NjY2NjY2NjdweCAjMDBmZjg4LCAtMTk1cHggLTQ1LjY2NjY2NjY2NjdweCAjMDBmZjgwLCAyMjBweCAtMjY4LjY2NjY2NjY2NjdweCAjYmIwMGZmLCA1N3B4IC0xNjEuNjY2NjY2NjY2N3B4ICM0OGZmMDAsIDIzMHB4IC05Ny42NjY2NjY2NjY3cHggI2ZmMWUwMCwgLTE5MnB4IC0xNDguNjY2NjY2NjY2N3B4ICNjNDAwZmYsIC0xODlweCAtMjczLjY2NjY2NjY2NjdweCAjZmYwMDA5LCAtMjMycHggLTM1NS42NjY2NjY2NjY3cHggIzlkMDBmZiwgMTU2cHggLTM1OC42NjY2NjY2NjY3cHggI2I3MDBmZiwgMjAxcHggMjQuMzMzMzMzMzMzM3B4ICNmZjAwNzcsIDczcHggLTIyMi42NjY2NjY2NjY3cHggIzBkMDBmZiwgNnB4IC0zODkuNjY2NjY2NjY2N3B4ICNmZmNjMDAsIDIyN3B4IDIyLjMzMzMzMzMzMzNweCAjMDAyZmZmLCAxMjlweCAtMjg5LjY2NjY2NjY2NjdweCAjMDBmZjIyLCAxMTlweCAtMTc5LjY2NjY2NjY2NjdweCAjMDA3YmZmLCAxNnB4IC0xOTcuNjY2NjY2NjY2N3B4ICMwMDFhZmYsIC0yMzJweCAtMzU2LjY2NjY2NjY2NjdweCAjZTZmZjAwLCAtMTYwcHggLTEzLjY2NjY2NjY2NjdweCAjZmZhMjAwLCAtNDlweCAtMTg3LjY2NjY2NjY2NjdweCAjMDBmZjkxLCAtMjEycHggLTEwMS42NjY2NjY2NjY3cHggIzk1ZmYwMCwgLTEyOXB4IC0yMC42NjY2NjY2NjY3cHggI2ZmMzMwMCwgLTIyOHB4IC0xMzUuNjY2NjY2NjY2N3B4ICMwMGZmOTEsIDI2cHggLTI4MS42NjY2NjY2NjY3cHggI2ZmMDA2ZiwgLTE2NnB4IDc3LjMzMzMzMzMzMzNweCAjMDQwMGZmLCAxNjRweCAtMTg0LjY2NjY2NjY2NjdweCAjMTFmZjAwLCAtMTUzcHggLTI4Ni42NjY2NjY2NjY3cHggIzAwZmYyMiwgLTIyOXB4IC0xOTYuNjY2NjY2NjY2N3B4ICMwMDIyZmYsIDEyOHB4IC0yNjUuNjY2NjY2NjY2N3B4ICNmZjAwOTEsIC0ycHggLTEzMC42NjY2NjY2NjY3cHggI2FlZmYwMCwgMTMzcHggLTIwNy42NjY2NjY2NjY3cHggIzAwZmY3MywgMHB4IC0xOTQuNjY2NjY2NjY2N3B4ICMwMGZmYmYsIDUzcHggLTI5OS42NjY2NjY2NjY3cHggZnVjaHNpYSwgLTJweCA3Ny4zMzMzMzMzMzMzcHggIzAwZmYwZCwgLTIxM3B4IC0xNTMuNjY2NjY2NjY2N3B4IGJsdWUsIDEzOXB4IC0xNDUuNjY2NjY2NjY2N3B4ICNmZjIyMDAsIC00OHB4IDQzLjMzMzMzMzMzMzNweCAjZmYwZDAwLCAxMnB4IDI2LjMzMzMzMzMzMzNweCAjZmYwMGQwLCAyNDNweCAtMzQzLjY2NjY2NjY2NjdweCAjYzgwMGZmLCAtODlweCAtMzg1LjY2NjY2NjY2NjdweCAjMDBmZmQ1LCAtMTE2cHggLTI4OC42NjY2NjY2NjY3cHggI2ZmZWUwMCwgNzBweCAtMjA1LjY2NjY2NjY2NjdweCAjMDA2YWZmLCAtMjAycHggLTI5Ny42NjY2NjY2NjY3cHggZnVjaHNpYSwgOTRweCAxMC4zMzMzMzMzMzMzcHggI2ZmMDA0OCwgLTIwMXB4IC0yMDcuNjY2NjY2NjY2N3B4ICMwMGZmNTEsIDIxNnB4IC0zNTYuNjY2NjY2NjY2N3B4ICNmZjA0MDAsIDIyMXB4IC0yNjEuNjY2NjY2NjY2N3B4ICNlZWZmMDAsIC0yMjhweCAtMzM1LjY2NjY2NjY2NjdweCAjMDBiM2ZmLCAyM3B4IC0xNTIuNjY2NjY2NjY2N3B4ICM5OTAwZmYsIC05cHggLTM3Ni42NjY2NjY2NjY3cHggIzdiMDBmZiwgLTEzMXB4IC0xNTIuNjY2NjY2NjY2N3B4ICNmZjAwNDAsIC0xOTlweCAtMzcuNjY2NjY2NjY2N3B4ICM5MWZmMDA7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBiYW5nIHtcbiAgdG8ge1xuICAgIGJveC1zaGFkb3c6IDQzcHggLTI4NC42NjY2NjY2NjY3cHggIzAwZmY4OCwgLTE5NXB4IC00NS42NjY2NjY2NjY3cHggIzAwZmY4MCwgMjIwcHggLTI2OC42NjY2NjY2NjY3cHggI2JiMDBmZiwgNTdweCAtMTYxLjY2NjY2NjY2NjdweCAjNDhmZjAwLCAyMzBweCAtOTcuNjY2NjY2NjY2N3B4ICNmZjFlMDAsIC0xOTJweCAtMTQ4LjY2NjY2NjY2NjdweCAjYzQwMGZmLCAtMTg5cHggLTI3My42NjY2NjY2NjY3cHggI2ZmMDAwOSwgLTIzMnB4IC0zNTUuNjY2NjY2NjY2N3B4ICM5ZDAwZmYsIDE1NnB4IC0zNTguNjY2NjY2NjY2N3B4ICNiNzAwZmYsIDIwMXB4IDI0LjMzMzMzMzMzMzNweCAjZmYwMDc3LCA3M3B4IC0yMjIuNjY2NjY2NjY2N3B4ICMwZDAwZmYsIDZweCAtMzg5LjY2NjY2NjY2NjdweCAjZmZjYzAwLCAyMjdweCAyMi4zMzMzMzMzMzMzcHggIzAwMmZmZiwgMTI5cHggLTI4OS42NjY2NjY2NjY3cHggIzAwZmYyMiwgMTE5cHggLTE3OS42NjY2NjY2NjY3cHggIzAwN2JmZiwgMTZweCAtMTk3LjY2NjY2NjY2NjdweCAjMDAxYWZmLCAtMjMycHggLTM1Ni42NjY2NjY2NjY3cHggI2U2ZmYwMCwgLTE2MHB4IC0xMy42NjY2NjY2NjY3cHggI2ZmYTIwMCwgLTQ5cHggLTE4Ny42NjY2NjY2NjY3cHggIzAwZmY5MSwgLTIxMnB4IC0xMDEuNjY2NjY2NjY2N3B4ICM5NWZmMDAsIC0xMjlweCAtMjAuNjY2NjY2NjY2N3B4ICNmZjMzMDAsIC0yMjhweCAtMTM1LjY2NjY2NjY2NjdweCAjMDBmZjkxLCAyNnB4IC0yODEuNjY2NjY2NjY2N3B4ICNmZjAwNmYsIC0xNjZweCA3Ny4zMzMzMzMzMzMzcHggIzA0MDBmZiwgMTY0cHggLTE4NC42NjY2NjY2NjY3cHggIzExZmYwMCwgLTE1M3B4IC0yODYuNjY2NjY2NjY2N3B4ICMwMGZmMjIsIC0yMjlweCAtMTk2LjY2NjY2NjY2NjdweCAjMDAyMmZmLCAxMjhweCAtMjY1LjY2NjY2NjY2NjdweCAjZmYwMDkxLCAtMnB4IC0xMzAuNjY2NjY2NjY2N3B4ICNhZWZmMDAsIDEzM3B4IC0yMDcuNjY2NjY2NjY2N3B4ICMwMGZmNzMsIDBweCAtMTk0LjY2NjY2NjY2NjdweCAjMDBmZmJmLCA1M3B4IC0yOTkuNjY2NjY2NjY2N3B4IGZ1Y2hzaWEsIC0ycHggNzcuMzMzMzMzMzMzM3B4ICMwMGZmMGQsIC0yMTNweCAtMTUzLjY2NjY2NjY2NjdweCBibHVlLCAxMzlweCAtMTQ1LjY2NjY2NjY2NjdweCAjZmYyMjAwLCAtNDhweCA0My4zMzMzMzMzMzMzcHggI2ZmMGQwMCwgMTJweCAyNi4zMzMzMzMzMzMzcHggI2ZmMDBkMCwgMjQzcHggLTM0My42NjY2NjY2NjY3cHggI2M4MDBmZiwgLTg5cHggLTM4NS42NjY2NjY2NjY3cHggIzAwZmZkNSwgLTExNnB4IC0yODguNjY2NjY2NjY2N3B4ICNmZmVlMDAsIDcwcHggLTIwNS42NjY2NjY2NjY3cHggIzAwNmFmZiwgLTIwMnB4IC0yOTcuNjY2NjY2NjY2N3B4IGZ1Y2hzaWEsIDk0cHggMTAuMzMzMzMzMzMzM3B4ICNmZjAwNDgsIC0yMDFweCAtMjA3LjY2NjY2NjY2NjdweCAjMDBmZjUxLCAyMTZweCAtMzU2LjY2NjY2NjY2NjdweCAjZmYwNDAwLCAyMjFweCAtMjYxLjY2NjY2NjY2NjdweCAjZWVmZjAwLCAtMjI4cHggLTMzNS42NjY2NjY2NjY3cHggIzAwYjNmZiwgMjNweCAtMTUyLjY2NjY2NjY2NjdweCAjOTkwMGZmLCAtOXB4IC0zNzYuNjY2NjY2NjY2N3B4ICM3YjAwZmYsIC0xMzFweCAtMTUyLjY2NjY2NjY2NjdweCAjZmYwMDQwLCAtMTk5cHggLTM3LjY2NjY2NjY2NjdweCAjOTFmZjAwO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIGJhbmcge1xuICB0byB7XG4gICAgYm94LXNoYWRvdzogNDNweCAtMjg0LjY2NjY2NjY2NjdweCAjMDBmZjg4LCAtMTk1cHggLTQ1LjY2NjY2NjY2NjdweCAjMDBmZjgwLCAyMjBweCAtMjY4LjY2NjY2NjY2NjdweCAjYmIwMGZmLCA1N3B4IC0xNjEuNjY2NjY2NjY2N3B4ICM0OGZmMDAsIDIzMHB4IC05Ny42NjY2NjY2NjY3cHggI2ZmMWUwMCwgLTE5MnB4IC0xNDguNjY2NjY2NjY2N3B4ICNjNDAwZmYsIC0xODlweCAtMjczLjY2NjY2NjY2NjdweCAjZmYwMDA5LCAtMjMycHggLTM1NS42NjY2NjY2NjY3cHggIzlkMDBmZiwgMTU2cHggLTM1OC42NjY2NjY2NjY3cHggI2I3MDBmZiwgMjAxcHggMjQuMzMzMzMzMzMzM3B4ICNmZjAwNzcsIDczcHggLTIyMi42NjY2NjY2NjY3cHggIzBkMDBmZiwgNnB4IC0zODkuNjY2NjY2NjY2N3B4ICNmZmNjMDAsIDIyN3B4IDIyLjMzMzMzMzMzMzNweCAjMDAyZmZmLCAxMjlweCAtMjg5LjY2NjY2NjY2NjdweCAjMDBmZjIyLCAxMTlweCAtMTc5LjY2NjY2NjY2NjdweCAjMDA3YmZmLCAxNnB4IC0xOTcuNjY2NjY2NjY2N3B4ICMwMDFhZmYsIC0yMzJweCAtMzU2LjY2NjY2NjY2NjdweCAjZTZmZjAwLCAtMTYwcHggLTEzLjY2NjY2NjY2NjdweCAjZmZhMjAwLCAtNDlweCAtMTg3LjY2NjY2NjY2NjdweCAjMDBmZjkxLCAtMjEycHggLTEwMS42NjY2NjY2NjY3cHggIzk1ZmYwMCwgLTEyOXB4IC0yMC42NjY2NjY2NjY3cHggI2ZmMzMwMCwgLTIyOHB4IC0xMzUuNjY2NjY2NjY2N3B4ICMwMGZmOTEsIDI2cHggLTI4MS42NjY2NjY2NjY3cHggI2ZmMDA2ZiwgLTE2NnB4IDc3LjMzMzMzMzMzMzNweCAjMDQwMGZmLCAxNjRweCAtMTg0LjY2NjY2NjY2NjdweCAjMTFmZjAwLCAtMTUzcHggLTI4Ni42NjY2NjY2NjY3cHggIzAwZmYyMiwgLTIyOXB4IC0xOTYuNjY2NjY2NjY2N3B4ICMwMDIyZmYsIDEyOHB4IC0yNjUuNjY2NjY2NjY2N3B4ICNmZjAwOTEsIC0ycHggLTEzMC42NjY2NjY2NjY3cHggI2FlZmYwMCwgMTMzcHggLTIwNy42NjY2NjY2NjY3cHggIzAwZmY3MywgMHB4IC0xOTQuNjY2NjY2NjY2N3B4ICMwMGZmYmYsIDUzcHggLTI5OS42NjY2NjY2NjY3cHggZnVjaHNpYSwgLTJweCA3Ny4zMzMzMzMzMzMzcHggIzAwZmYwZCwgLTIxM3B4IC0xNTMuNjY2NjY2NjY2N3B4IGJsdWUsIDEzOXB4IC0xNDUuNjY2NjY2NjY2N3B4ICNmZjIyMDAsIC00OHB4IDQzLjMzMzMzMzMzMzNweCAjZmYwZDAwLCAxMnB4IDI2LjMzMzMzMzMzMzNweCAjZmYwMGQwLCAyNDNweCAtMzQzLjY2NjY2NjY2NjdweCAjYzgwMGZmLCAtODlweCAtMzg1LjY2NjY2NjY2NjdweCAjMDBmZmQ1LCAtMTE2cHggLTI4OC42NjY2NjY2NjY3cHggI2ZmZWUwMCwgNzBweCAtMjA1LjY2NjY2NjY2NjdweCAjMDA2YWZmLCAtMjAycHggLTI5Ny42NjY2NjY2NjY3cHggZnVjaHNpYSwgOTRweCAxMC4zMzMzMzMzMzMzcHggI2ZmMDA0OCwgLTIwMXB4IC0yMDcuNjY2NjY2NjY2N3B4ICMwMGZmNTEsIDIxNnB4IC0zNTYuNjY2NjY2NjY2N3B4ICNmZjA0MDAsIDIyMXB4IC0yNjEuNjY2NjY2NjY2N3B4ICNlZWZmMDAsIC0yMjhweCAtMzM1LjY2NjY2NjY2NjdweCAjMDBiM2ZmLCAyM3B4IC0xNTIuNjY2NjY2NjY2N3B4ICM5OTAwZmYsIC05cHggLTM3Ni42NjY2NjY2NjY3cHggIzdiMDBmZiwgLTEzMXB4IC0xNTIuNjY2NjY2NjY2N3B4ICNmZjAwNDAsIC0xOTlweCAtMzcuNjY2NjY2NjY2N3B4ICM5MWZmMDA7XG4gIH1cbn1cbkAtbXMta2V5ZnJhbWVzIGJhbmcge1xuICB0byB7XG4gICAgYm94LXNoYWRvdzogNDNweCAtMjg0LjY2NjY2NjY2NjdweCAjMDBmZjg4LCAtMTk1cHggLTQ1LjY2NjY2NjY2NjdweCAjMDBmZjgwLCAyMjBweCAtMjY4LjY2NjY2NjY2NjdweCAjYmIwMGZmLCA1N3B4IC0xNjEuNjY2NjY2NjY2N3B4ICM0OGZmMDAsIDIzMHB4IC05Ny42NjY2NjY2NjY3cHggI2ZmMWUwMCwgLTE5MnB4IC0xNDguNjY2NjY2NjY2N3B4ICNjNDAwZmYsIC0xODlweCAtMjczLjY2NjY2NjY2NjdweCAjZmYwMDA5LCAtMjMycHggLTM1NS42NjY2NjY2NjY3cHggIzlkMDBmZiwgMTU2cHggLTM1OC42NjY2NjY2NjY3cHggI2I3MDBmZiwgMjAxcHggMjQuMzMzMzMzMzMzM3B4ICNmZjAwNzcsIDczcHggLTIyMi42NjY2NjY2NjY3cHggIzBkMDBmZiwgNnB4IC0zODkuNjY2NjY2NjY2N3B4ICNmZmNjMDAsIDIyN3B4IDIyLjMzMzMzMzMzMzNweCAjMDAyZmZmLCAxMjlweCAtMjg5LjY2NjY2NjY2NjdweCAjMDBmZjIyLCAxMTlweCAtMTc5LjY2NjY2NjY2NjdweCAjMDA3YmZmLCAxNnB4IC0xOTcuNjY2NjY2NjY2N3B4ICMwMDFhZmYsIC0yMzJweCAtMzU2LjY2NjY2NjY2NjdweCAjZTZmZjAwLCAtMTYwcHggLTEzLjY2NjY2NjY2NjdweCAjZmZhMjAwLCAtNDlweCAtMTg3LjY2NjY2NjY2NjdweCAjMDBmZjkxLCAtMjEycHggLTEwMS42NjY2NjY2NjY3cHggIzk1ZmYwMCwgLTEyOXB4IC0yMC42NjY2NjY2NjY3cHggI2ZmMzMwMCwgLTIyOHB4IC0xMzUuNjY2NjY2NjY2N3B4ICMwMGZmOTEsIDI2cHggLTI4MS42NjY2NjY2NjY3cHggI2ZmMDA2ZiwgLTE2NnB4IDc3LjMzMzMzMzMzMzNweCAjMDQwMGZmLCAxNjRweCAtMTg0LjY2NjY2NjY2NjdweCAjMTFmZjAwLCAtMTUzcHggLTI4Ni42NjY2NjY2NjY3cHggIzAwZmYyMiwgLTIyOXB4IC0xOTYuNjY2NjY2NjY2N3B4ICMwMDIyZmYsIDEyOHB4IC0yNjUuNjY2NjY2NjY2N3B4ICNmZjAwOTEsIC0ycHggLTEzMC42NjY2NjY2NjY3cHggI2FlZmYwMCwgMTMzcHggLTIwNy42NjY2NjY2NjY3cHggIzAwZmY3MywgMHB4IC0xOTQuNjY2NjY2NjY2N3B4ICMwMGZmYmYsIDUzcHggLTI5OS42NjY2NjY2NjY3cHggZnVjaHNpYSwgLTJweCA3Ny4zMzMzMzMzMzMzcHggIzAwZmYwZCwgLTIxM3B4IC0xNTMuNjY2NjY2NjY2N3B4IGJsdWUsIDEzOXB4IC0xNDUuNjY2NjY2NjY2N3B4ICNmZjIyMDAsIC00OHB4IDQzLjMzMzMzMzMzMzNweCAjZmYwZDAwLCAxMnB4IDI2LjMzMzMzMzMzMzNweCAjZmYwMGQwLCAyNDNweCAtMzQzLjY2NjY2NjY2NjdweCAjYzgwMGZmLCAtODlweCAtMzg1LjY2NjY2NjY2NjdweCAjMDBmZmQ1LCAtMTE2cHggLTI4OC42NjY2NjY2NjY3cHggI2ZmZWUwMCwgNzBweCAtMjA1LjY2NjY2NjY2NjdweCAjMDA2YWZmLCAtMjAycHggLTI5Ny42NjY2NjY2NjY3cHggZnVjaHNpYSwgOTRweCAxMC4zMzMzMzMzMzMzcHggI2ZmMDA0OCwgLTIwMXB4IC0yMDcuNjY2NjY2NjY2N3B4ICMwMGZmNTEsIDIxNnB4IC0zNTYuNjY2NjY2NjY2N3B4ICNmZjA0MDAsIDIyMXB4IC0yNjEuNjY2NjY2NjY2N3B4ICNlZWZmMDAsIC0yMjhweCAtMzM1LjY2NjY2NjY2NjdweCAjMDBiM2ZmLCAyM3B4IC0xNTIuNjY2NjY2NjY2N3B4ICM5OTAwZmYsIC05cHggLTM3Ni42NjY2NjY2NjY3cHggIzdiMDBmZiwgLTEzMXB4IC0xNTIuNjY2NjY2NjY2N3B4ICNmZjAwNDAsIC0xOTlweCAtMzcuNjY2NjY2NjY2N3B4ICM5MWZmMDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYmFuZyB7XG4gIHRvIHtcbiAgICBib3gtc2hhZG93OiA0M3B4IC0yODQuNjY2NjY2NjY2N3B4ICMwMGZmODgsIC0xOTVweCAtNDUuNjY2NjY2NjY2N3B4ICMwMGZmODAsIDIyMHB4IC0yNjguNjY2NjY2NjY2N3B4ICNiYjAwZmYsIDU3cHggLTE2MS42NjY2NjY2NjY3cHggIzQ4ZmYwMCwgMjMwcHggLTk3LjY2NjY2NjY2NjdweCAjZmYxZTAwLCAtMTkycHggLTE0OC42NjY2NjY2NjY3cHggI2M0MDBmZiwgLTE4OXB4IC0yNzMuNjY2NjY2NjY2N3B4ICNmZjAwMDksIC0yMzJweCAtMzU1LjY2NjY2NjY2NjdweCAjOWQwMGZmLCAxNTZweCAtMzU4LjY2NjY2NjY2NjdweCAjYjcwMGZmLCAyMDFweCAyNC4zMzMzMzMzMzMzcHggI2ZmMDA3NywgNzNweCAtMjIyLjY2NjY2NjY2NjdweCAjMGQwMGZmLCA2cHggLTM4OS42NjY2NjY2NjY3cHggI2ZmY2MwMCwgMjI3cHggMjIuMzMzMzMzMzMzM3B4ICMwMDJmZmYsIDEyOXB4IC0yODkuNjY2NjY2NjY2N3B4ICMwMGZmMjIsIDExOXB4IC0xNzkuNjY2NjY2NjY2N3B4ICMwMDdiZmYsIDE2cHggLTE5Ny42NjY2NjY2NjY3cHggIzAwMWFmZiwgLTIzMnB4IC0zNTYuNjY2NjY2NjY2N3B4ICNlNmZmMDAsIC0xNjBweCAtMTMuNjY2NjY2NjY2N3B4ICNmZmEyMDAsIC00OXB4IC0xODcuNjY2NjY2NjY2N3B4ICMwMGZmOTEsIC0yMTJweCAtMTAxLjY2NjY2NjY2NjdweCAjOTVmZjAwLCAtMTI5cHggLTIwLjY2NjY2NjY2NjdweCAjZmYzMzAwLCAtMjI4cHggLTEzNS42NjY2NjY2NjY3cHggIzAwZmY5MSwgMjZweCAtMjgxLjY2NjY2NjY2NjdweCAjZmYwMDZmLCAtMTY2cHggNzcuMzMzMzMzMzMzM3B4ICMwNDAwZmYsIDE2NHB4IC0xODQuNjY2NjY2NjY2N3B4ICMxMWZmMDAsIC0xNTNweCAtMjg2LjY2NjY2NjY2NjdweCAjMDBmZjIyLCAtMjI5cHggLTE5Ni42NjY2NjY2NjY3cHggIzAwMjJmZiwgMTI4cHggLTI2NS42NjY2NjY2NjY3cHggI2ZmMDA5MSwgLTJweCAtMTMwLjY2NjY2NjY2NjdweCAjYWVmZjAwLCAxMzNweCAtMjA3LjY2NjY2NjY2NjdweCAjMDBmZjczLCAwcHggLTE5NC42NjY2NjY2NjY3cHggIzAwZmZiZiwgNTNweCAtMjk5LjY2NjY2NjY2NjdweCBmdWNoc2lhLCAtMnB4IDc3LjMzMzMzMzMzMzNweCAjMDBmZjBkLCAtMjEzcHggLTE1My42NjY2NjY2NjY3cHggYmx1ZSwgMTM5cHggLTE0NS42NjY2NjY2NjY3cHggI2ZmMjIwMCwgLTQ4cHggNDMuMzMzMzMzMzMzM3B4ICNmZjBkMDAsIDEycHggMjYuMzMzMzMzMzMzM3B4ICNmZjAwZDAsIDI0M3B4IC0zNDMuNjY2NjY2NjY2N3B4ICNjODAwZmYsIC04OXB4IC0zODUuNjY2NjY2NjY2N3B4ICMwMGZmZDUsIC0xMTZweCAtMjg4LjY2NjY2NjY2NjdweCAjZmZlZTAwLCA3MHB4IC0yMDUuNjY2NjY2NjY2N3B4ICMwMDZhZmYsIC0yMDJweCAtMjk3LjY2NjY2NjY2NjdweCBmdWNoc2lhLCA5NHB4IDEwLjMzMzMzMzMzMzNweCAjZmYwMDQ4LCAtMjAxcHggLTIwNy42NjY2NjY2NjY3cHggIzAwZmY1MSwgMjE2cHggLTM1Ni42NjY2NjY2NjY3cHggI2ZmMDQwMCwgMjIxcHggLTI2MS42NjY2NjY2NjY3cHggI2VlZmYwMCwgLTIyOHB4IC0zMzUuNjY2NjY2NjY2N3B4ICMwMGIzZmYsIDIzcHggLTE1Mi42NjY2NjY2NjY3cHggIzk5MDBmZiwgLTlweCAtMzc2LjY2NjY2NjY2NjdweCAjN2IwMGZmLCAtMTMxcHggLTE1Mi42NjY2NjY2NjY3cHggI2ZmMDA0MCwgLTE5OXB4IC0zNy42NjY2NjY2NjY3cHggIzkxZmYwMDtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGdyYXZpdHkge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGdyYXZpdHkge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBncmF2aXR5IHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkAtbXMta2V5ZnJhbWVzIGdyYXZpdHkge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBncmF2aXR5IHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBwb3NpdGlvbiB7XG4gIDAlLCAxOS45JSB7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XG4gIH1cbiAgMjAlLCAzOS45JSB7XG4gICAgbWFyZ2luLXRvcDogNDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIH1cbiAgNDAlLCA1OS45JSB7XG4gICAgbWFyZ2luLXRvcDogMjAlO1xuICAgIG1hcmdpbi1sZWZ0OiA3MCU7XG4gIH1cbiAgNjAlLCA3OS45JSB7XG4gICAgbWFyZ2luLXRvcDogMzAlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gIH1cbiAgODAlLCA5OS45JSB7XG4gICAgbWFyZ2luLXRvcDogMzAlO1xuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBwb3NpdGlvbiB7XG4gIDAlLCAxOS45JSB7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XG4gIH1cbiAgMjAlLCAzOS45JSB7XG4gICAgbWFyZ2luLXRvcDogNDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIH1cbiAgNDAlLCA1OS45JSB7XG4gICAgbWFyZ2luLXRvcDogMjAlO1xuICAgIG1hcmdpbi1sZWZ0OiA3MCU7XG4gIH1cbiAgNjAlLCA3OS45JSB7XG4gICAgbWFyZ2luLXRvcDogMzAlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gIH1cbiAgODAlLCA5OS45JSB7XG4gICAgbWFyZ2luLXRvcDogMzAlO1xuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgcG9zaXRpb24ge1xuICAwJSwgMTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xuICB9XG4gIDIwJSwgMzkuOSUge1xuICAgIG1hcmdpbi10b3A6IDQwJTtcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xuICB9XG4gIDQwJSwgNTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICBtYXJnaW4tbGVmdDogNzAlO1xuICB9XG4gIDYwJSwgNzkuOSUge1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xuICB9XG4gIDgwJSwgOTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICBtYXJnaW4tbGVmdDogODAlO1xuICB9XG59XG5ALW1zLWtleWZyYW1lcyBwb3NpdGlvbiB7XG4gIDAlLCAxOS45JSB7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XG4gIH1cbiAgMjAlLCAzOS45JSB7XG4gICAgbWFyZ2luLXRvcDogNDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIH1cbiAgNDAlLCA1OS45JSB7XG4gICAgbWFyZ2luLXRvcDogMjAlO1xuICAgIG1hcmdpbi1sZWZ0OiA3MCU7XG4gIH1cbiAgNjAlLCA3OS45JSB7XG4gICAgbWFyZ2luLXRvcDogMzAlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gIH1cbiAgODAlLCA5OS45JSB7XG4gICAgbWFyZ2luLXRvcDogMzAlO1xuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcG9zaXRpb24ge1xuICAwJSwgMTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xuICB9XG4gIDIwJSwgMzkuOSUge1xuICAgIG1hcmdpbi10b3A6IDQwJTtcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xuICB9XG4gIDQwJSwgNTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICBtYXJnaW4tbGVmdDogNzAlO1xuICB9XG4gIDYwJSwgNzkuOSUge1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xuICB9XG4gIDgwJSwgOTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICBtYXJnaW4tbGVmdDogODAlO1xuICB9XG59XG5sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbi5pbmxpbmUtYmxvY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmZvcm0gLm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogcmVkO1xufVxuXG4uYWRkLXByb2R1Y3QtZm9ybSB7XG4gIG1hcmdpbjogMTVweDtcbn1cblxuLm1vZGFsLWRpYWxvZy1jb250YWluZXIubW9kYWwtZGlhbG9nIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbn1cblxuLnByb2R1Y3QtaW1nIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCBnYWluc2Jvcm87XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jdXN0b20tdXBsb2FkLWJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxM2UyNDtcbiAgY29sb3I6ICNhZDk3NGY7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmN1c3RvbS11cGxvYWQtYnRuOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTNlMjQgIWltcG9ydGFudDtcbiAgY29sb3I6ICNhZDk3NGYgIWltcG9ydGFudDtcbn1cblxuLmZpbGUtdXBsb2FkIHtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogLTg4cHg7XG4gIG9wYWNpdHk6IDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wcm9kdWN0LWltZy1jb250YWluZXIgLmltZy1jb250YWluZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmZvcm0tZ3JvdXAgLm1vYmlsZS1maWVsZDpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgfVxufSIsIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbW1vbi5zY3NzXCI7XHJcblxyXG5sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxufVxyXG5cclxuLmlubGluZS1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbmZvcm0gLm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbi5lcnJvci1tZXNzYWdlIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5hZGQtcHJvZHVjdC1mb3JtIHtcclxuICAgIG1hcmdpbjogMTVweDtcclxufVxyXG5cclxuLm1vZGFsLWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgJi5tb2RhbC1kaWFsb2cge1xyXG4gICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9kdWN0LWltZyB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggZ2FpbnNib3JvO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5jdXN0b20tdXBsb2FkLWJ0biB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgICBjb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlcnRleHQtY29sb3I7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXJ0ZXh0LWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5maWxlLXVwbG9hZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC04OHB4O1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLnByb2R1Y3QtaW1nLWNvbnRhaW5lciB7XHJcbiAgICAuaW1nLWNvbnRhaW5lciB7XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICAgIC5tb2JpbGUtZmllbGQge1xyXG5cclxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-product',
          templateUrl: './add-product.component.html',
          styleUrls: ['./add-product.component.scss'],
          providers: [src_app_pipes_safe_resource_url_pipe__WEBPACK_IMPORTED_MODULE_2__["SafeResourceUrlPipe"]]
        }]
      }], function () {
        return [{
          type: src_app_services_product_service_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
        }, {
          type: src_app_services_common_service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]
        }, {
          type: src_app_services_loader_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]
        }, {
          type: src_app_pipes_safe_resource_url_pipe__WEBPACK_IMPORTED_MODULE_2__["SafeResourceUrlPipe"]
        }];
      }, {
        editMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        templateRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['addProductTemplate']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/products/modals/product-description/product-description.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/products/modals/product-description/product-description.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: ProductDescriptionComponent */

  /***/
  function srcAppProductsModalsProductDescriptionProductDescriptionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDescriptionComponent", function () {
      return ProductDescriptionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-bootstrap/carousel */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
    /* harmony import */


    var _confirm_order_details_confirm_order_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../confirm-order-details/confirm-order-details.component */
    "./src/app/products/modals/confirm-order-details/confirm-order-details.component.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var src_app_services_product_service_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/product-service/product.service */
    "./src/app/services/product-service/product.service.ts");
    /* harmony import */


    var src_app_services_common_service_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/common-service/common.service */
    "./src/app/services/common-service/common.service.ts");
    /* harmony import */


    var src_app_services_loader_service_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/loader-service/loader.service */
    "./src/app/services/loader-service/loader.service.ts");
    /* harmony import */


    var src_app_services_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/cart-service/cart.service */
    "./src/app/services/cart-service/cart.service.ts");
    /* harmony import */


    var src_app_services_order_service_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/order-service/order.service */
    "./src/app/services/order-service/order.service.ts");
    /* harmony import */


    var angular_notifier__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function ProductDescriptionComponent_ng_template_2_div_7_slide_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "slide");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ProductDescriptionComponent_ng_template_2_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "carousel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductDescriptionComponent_ng_template_2_div_7_slide_2_Template, 2, 1, "slide", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.productImages);
      }
    }

    function ProductDescriptionComponent_ng_template_2_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductDescriptionComponent_ng_template_2_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Drug quantity");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.product.drugQuantity);
      }
    }

    function ProductDescriptionComponent_ng_template_2_div_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Quantity");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDescriptionComponent_ng_template_2_div_21_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.decrementQuantity(ctx_r11.product);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductDescriptionComponent_ng_template_2_div_21_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.product.quantity = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDescriptionComponent_ng_template_2_div_21_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r14.incrementQuantity(ctx_r14.product);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.product.quantity);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r5.product.quantity >= ctx_r5.product.stock);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", ctx_r5.product.quantity >= ctx_r5.product.stock ? ctx_r5.sellerStocksEmptyText : "");
      }
    }

    function ProductDescriptionComponent_ng_template_2_div_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDescriptionComponent_ng_template_2_div_22_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r15.addToCart(ctx_r15.product);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add to cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDescriptionComponent_ng_template_2_div_22_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r17.openOrderConfirmationModal(ctx_r17.product);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Buy now");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductDescriptionComponent_ng_template_2_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.outOfStockText);
      }
    }

    function ProductDescriptionComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDescriptionComponent_ng_template_2_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.modalRefProductDescription == null ? null : ctx_r18.modalRefProductDescription.hide();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProductDescriptionComponent_ng_template_2_div_7_Template, 3, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProductDescriptionComponent_ng_template_2_div_8_Template, 2, 0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ProductDescriptionComponent_ng_template_2_div_20_Template, 6, 1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProductDescriptionComponent_ng_template_2_div_21_Template, 11, 3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProductDescriptionComponent_ng_template_2_div_22_Template, 6, 0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProductDescriptionComponent_ng_template_2_div_23_Template, 3, 1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.productImages);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.productImages);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.product.productName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.product.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.currentCurrency);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.product.price);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.product.drugQuantity && ctx_r1.product.drugQuantity !== "null");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.product.stock > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.product.stock > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.product.stock <= 0);
      }
    }

    var ProductDescriptionComponent = /*#__PURE__*/function () {
      function ProductDescriptionComponent(modalService, productService, commonService, loaderService, cartService, orderService, notifierService) {
        _classCallCheck(this, ProductDescriptionComponent);

        this.modalService = modalService;
        this.productService = productService;
        this.commonService = commonService;
        this.loaderService = loaderService;
        this.cartService = cartService;
        this.orderService = orderService;
        this.notifierService = notifierService;
        this.className = 'product-description-modalcontainer';
        this.outOfStockText = this.commonService.outOfStockText;
        this.sellerStocksEmptyText = this.commonService.sellerStocksEmptyText;
        this.orderConfirmationClass = this.commonService.orderConfirmationClass;
      }

      _createClass(ProductDescriptionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setCurrentCurrency();
          this.setProductQuantityIfNull();
        }
      }, {
        key: "openProductDescriptionModal",
        value: function openProductDescriptionModal(templateRef) {
          var config = this.commonService.getModalConfig(this.className);
          this.modalRefProductDescription = this.modalService.show(templateRef, config);
          this.getProductImageToBeShown();
        }
      }, {
        key: "setCurrentCurrency",
        value: function setCurrentCurrency() {
          this.currentCurrency = this.commonService.currentCurrency;
        }
      }, {
        key: "getProductImageToBeShown",
        value: function getProductImageToBeShown() {
          this.productImages = this.productService.getAllProductImagesToBeShown(this.product.productImages);
        }
      }, {
        key: "addToCart",
        value: function addToCart(product) {
          var _this3 = this;

          if (this.commonService.checkIfVisitorAndNavigate()) {
            this.modalRefProductDescription.hide();
            this.commonService.navigateToLoginPage();
          } else {
            var data = product;
            this.commonService.addUserDetails(data);
            this.loaderService.display(true);
            this.cartService.addToCartList(data).subscribe(function (response) {
              _this3.loaderService.display(false);

              _this3.cartService.cartItemChange.next();
            });
          }
        }
      }, {
        key: "changeQty",
        value: function changeQty(product) {}
      }, {
        key: "setProductQuantityIfNull",
        value: function setProductQuantityIfNull() {
          if (!this.product.quantity) {
            this.product.quantity = 1;
          }
        }
      }, {
        key: "decrementQuantity",
        value: function decrementQuantity(product) {
          if (product.quantity > 0) {
            product.quantity -= 1;
          }
        }
      }, {
        key: "incrementQuantity",
        value: function incrementQuantity(product) {
          product.quantity += 1;
        }
      }, {
        key: "openOrderConfirmationModal",
        value: function openOrderConfirmationModal(product) {
          var _this4 = this;

          if (this.commonService.checkIfVisitorAndNavigate()) {
            this.modalRefProductDescription.hide();
            this.commonService.navigateToLoginPage();
          } else {
            this.modalRefProductDescription.hide();
            this.commonService.addUserDetails(product);
            var initialState = {
              initialState: {
                product: product
              },
              "class": this.orderConfirmationClass
            };
            var config = this.commonService.getModalConfig(this.orderConfirmationClass);
            this.modalRefOrderConfirmation = this.modalService.show(_confirm_order_details_confirm_order_details_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmOrderDetailsComponent"], initialState);
            this.modalRefOrderConfirmation.content.event.subscribe(function (data) {
              _this4.placeOrder(data);
            });
          }
        }
      }, {
        key: "placeOrder",
        value: function placeOrder(cartItem) {
          var _this5 = this;

          this.loaderService.display(true);
          this.orderService.addToOrderList(cartItem).subscribe(function (response) {
            _this5.loaderService.display(false);

            _this5.notifierService.notify('success', 'Order placed successfully!');

            _this5.modalRefProductDescription.hide();
          });
        }
      }]);

      return ProductDescriptionComponent;
    }();

    ProductDescriptionComponent.ɵfac = function ProductDescriptionComponent_Factory(t) {
      return new (t || ProductDescriptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_product_service_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_common_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_loader_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_order_service_order_service__WEBPACK_IMPORTED_MODULE_8__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_9__["NotifierService"]));
    };

    ProductDescriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductDescriptionComponent,
      selectors: [["app-product-description"]],
      inputs: {
        product: "product"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselConfig"],
        useValue: {
          showIndicators: true
        }
      }])],
      decls: 4,
      vars: 1,
      consts: [[1, "product-name", "product-name-link", 3, "click"], ["productDescriptionTemplate", ""], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "modal-body", "product-description-modal"], [1, "row"], [1, "col-md-7", "col-xs-12"], ["class", "carousel-container", 4, "ngIf"], ["class", "product-image-container", 4, "ngIf"], [1, "col-md-5", "col-xs-12"], [1, "product-details"], [1, "product-name"], [1, "product-description"], [1, "product-price"], [1, "current-currency-symbol"], [1, "price-value"], ["class", "row drug-quantity-container", 4, "ngIf"], ["class", "row quantity-container", 4, "ngIf"], ["class", "user-action-btns row", 4, "ngIf"], ["class", "row out-of-stock", 4, "ngIf"], [1, "carousel-container"], [4, "ngFor", "ngForOf"], ["alt", "first slide", 2, "display", "block", "width", "100%", 3, "src"], [1, "product-image-container"], ["src", "assets/images/herbal-med.jpg", 1, "product-image"], [1, "row", "drug-quantity-container"], [1, "col-12", "quantity-title"], [1, "col-12", "drug-quantityvalue-container"], [1, "drug-quantity-value"], [1, "row", "quantity-container"], [1, "input-group", "col-md-4", "col-5"], [1, "input-group-prepend"], [1, "input-group-text", 3, "click"], ["type", "text", "value", "1", "id", "input1", "placeholder", "Qty", 1, "qty-input", "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], [1, "input-group-text", 3, "disabled", "click"], [1, "user-action-btns", "row"], [1, "col-12"], [1, "btn", "btn-primary", "btn-outline", "add-to-cart", "add-cart-btn", 3, "click"], ["value", "1", 1, "btn", "btn-primary", "btn-outline-customsecondary", "add-to-cart", "buy-btn", 3, "click"], [1, "row", "out-of-stock"], [1, "out-of-stock-text"]],
      template: function ProductDescriptionComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDescriptionComponent_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            return ctx.openProductDescriptionModal(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductDescriptionComponent_ng_template_2_Template, 24, 10, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.product.productName, "\n");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__["SlideComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]],
      styles: [".input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 15px;\n  border-top-left-radius: 15px;\n}\n.input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  border-bottom-right-radius: 15px;\n  border-top-right-radius: 15px;\n}\n.btn-full-width[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n.edit-icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n@media only screen and (max-width: 768px) {\n  .edit-icon[_ngcontent-%COMP%] {\n    margin-right: 15px;\n  }\n}\n.delete-icon[_ngcontent-%COMP%] {\n  color: #ce4545;\n}\n.no-padding[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n.no-padding-left[_ngcontent-%COMP%] {\n  padding-left: 0px !important;\n}\n.no-padding-right[_ngcontent-%COMP%] {\n  padding-right: 0px !important;\n}\n.empty-data[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.default-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n}\n.cart-container[_ngcontent-%COMP%] {\n  width: 64%;\n  margin: auto;\n  padding: 10px;\n}\n@media only screen and (max-width: 768px) {\n  .cart-container[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n.cart-container[_ngcontent-%COMP%]   .product-ordered-datecontainer[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.cart-container[_ngcontent-%COMP%]   .product-ordered-datecontainer[_ngcontent-%COMP%]   .ordered-date[_ngcontent-%COMP%] {\n  background-color: #ad974f !important;\n  color: #fff !important;\n  border-radius: 20px;\n  padding: 5px;\n}\n.cart-container[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  padding-top: 15px;\n  box-shadow: 0px 0px 2px 2px gainsboro;\n  background: #e3dfce;\n  border-radius: 20px;\n}\n.cart-container[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%] {\n  color: #313e24 !important;\n  border: solid 1px #ad974f;\n  border-radius: 15px;\n  padding: 5px;\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n.cart-container[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .phone-number[_ngcontent-%COMP%] {\n  color: green !important;\n}\n@media only screen and (max-width: 768px) {\n  .cart-container[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n.cart-container[_ngcontent-%COMP%]   .product-img-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  display: flex;\n}\n.cart-container[_ngcontent-%COMP%]   .product-img-container[_ngcontent-%COMP%]   .product-images[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  max-width: 100%;\n}\n.cart-container[_ngcontent-%COMP%]   .product-img-container[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.cart-container[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%] {\n  height: 250px;\n  width: 100%;\n  border: solid 1px #dcdcdc;\n  margin: auto auto 15px auto;\n  display: block;\n  border-top-right-radius: 20px;\n  border-top-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n}\n.cart-container[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%] {\n  float: right;\n}\n.cart-container[_ngcontent-%COMP%]   .cart-item-actionbtns[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.cart-container[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  color: #ad974f;\n  font-size: 18px;\n  font-weight: 800;\n  text-transform: capitalize;\n}\n.cart-container[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%] {\n  color: #7e6e6e !important;\n  display: inline-block;\n  width: calc(100% - 30px);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 0;\n}\n.cart-container[_ngcontent-%COMP%]   .drug-quantity-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-family: sans-serif;\n}\n.cart-container[_ngcontent-%COMP%]   .drug-quantity-container[_ngcontent-%COMP%]   .drug-quantity-title[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  color: #313e24;\n}\n.cart-container[_ngcontent-%COMP%]   .drug-quantity-container[_ngcontent-%COMP%]   .drug-quantityvalue-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.cart-container[_ngcontent-%COMP%]   .drug-quantity-container[_ngcontent-%COMP%]   .drug-quantityvalue-container[_ngcontent-%COMP%]   .drug-quantity-value[_ngcontent-%COMP%] {\n  background: #313e24;\n  color: #fff;\n  padding: 6px 12px 6px 12px;\n  border-radius: 20px;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%]   .qty-input[_ngcontent-%COMP%] {\n  text-align: center;\n  background: #e3dfce;\n  border-color: #313e24;\n}\n@media screen and (min-width: 993px) and (max-width: 1500px) {\n  .cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%]   .quantity-fields-container[_ngcontent-%COMP%] {\n    flex-basis: 32% !important;\n    max-width: 32% !important;\n  }\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  width: 35px;\n  cursor: pointer;\n  background: #313e24;\n  color: #ad974f;\n  border: solid 1px #313e24;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%]   .quantity-title[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 16px;\n  margin-bottom: 10px;\n  color: #313e24;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-readonly-container[_ngcontent-%COMP%]   .quantity-value[_ngcontent-%COMP%] {\n  background-color: #ad974f;\n  color: #fff;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-readonly-container[_ngcontent-%COMP%]   .quantity-text[_ngcontent-%COMP%] {\n  color: #313e24;\n  font-weight: bold;\n}\n.cart-container[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%], .cart-container[_ngcontent-%COMP%]   .btn-outline-modal[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.product-price[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.product-price[_ngcontent-%COMP%]   .current-currency-symbol[_ngcontent-%COMP%] {\n  top: -4.25px;\n  font-size: 11px;\n  position: relative;\n}\n.product-price[_ngcontent-%COMP%]   .price-value[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-family: cursive;\n}\n@media only screen and (max-width: 768px) {\n  .product-price[_ngcontent-%COMP%]   .price-value[_ngcontent-%COMP%] {\n    font-family: sans-serif;\n  }\n}\n.btn-outline[_ngcontent-%COMP%], .btn-outline-modal[_ngcontent-%COMP%] {\n  color: #313e24;\n  background-color: #e3dfce;\n  border-color: #313e24;\n  font-weight: bold;\n  letter-spacing: 0.05em;\n  border-radius: 20px;\n  padding: 3px 10px !important;\n  cursor: pointer;\n}\n.btn-outline[_ngcontent-%COMP%]:active, .btn-outline-modal[_ngcontent-%COMP%]:active, .btn-outline[_ngcontent-%COMP%]:hover, .btn-outline-modal[_ngcontent-%COMP%]:hover, .btn-outline[_ngcontent-%COMP%]:focus, .btn-outline-modal[_ngcontent-%COMP%]:focus {\n  color: #313e24;\n  background-color: #e3dfce;\n  border-color: #313e24;\n}\n.btn-outline[_ngcontent-%COMP%]:active, .btn-outline-modal[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n}\n.btn-outline-customsecondary[_ngcontent-%COMP%], .btn-outline-removebtn[_ngcontent-%COMP%] {\n  color: #ad974f;\n  background-color: #313e24;\n  border-color: #ad974f;\n  font-weight: bold;\n  letter-spacing: 0.05em;\n  border-radius: 20px;\n  padding: 3px 10px !important;\n  box-shadow: 2px 2px gainsboro;\n  cursor: pointer;\n}\n.btn-outline-customsecondary[_ngcontent-%COMP%]:active, .btn-outline-removebtn[_ngcontent-%COMP%]:active, .btn-outline-customsecondary[_ngcontent-%COMP%]:hover, .btn-outline-removebtn[_ngcontent-%COMP%]:hover, .btn-outline-customsecondary[_ngcontent-%COMP%]:focus, .btn-outline-removebtn[_ngcontent-%COMP%]:focus {\n  color: #ad974f;\n  background-color: #313e24;\n  border-color: #ad974f;\n}\n.btn-outline-customsecondary[_ngcontent-%COMP%]:active, .btn-outline-removebtn[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n}\n.btn-color-1[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #004E64;\n  border-color: #004E64;\n  font-weight: bold;\n  letter-spacing: 0.05em;\n  border-radius: 0;\n}\n.btn-color-1[_ngcontent-%COMP%]:hover, .btn-color-1[_ngcontent-%COMP%]:active, .btn-color-1[_ngcontent-%COMP%]:focus {\n  background: #003D4F !important;\n  color: #fff !important;\n  border-color: #003D4F !important;\n}\n.btn-outline-removebtn[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 15px;\n  font-weight: 600;\n  z-index: 1000;\n  white-space: pre-wrap;\n  border: none !important;\n}\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  margin: -0.5rem -0.2rem -1rem auto !important;\n}\n  .modal-content {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  background-color: #e3dfce;\n}\n@media only screen and (max-width: 768px) {\n  .modal-body[_ngcontent-%COMP%] {\n    max-height: 580px;\n    overflow: auto;\n  }\n}\nbutton[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed !important;\n}\n.total-text[_ngcontent-%COMP%] {\n  font-weight: 600 !important;\n}\n.out-of-stock[_ngcontent-%COMP%]   .out-of-stock-text[_ngcontent-%COMP%] {\n  margin: auto;\n  text-transform: uppercase;\n  color: #fff;\n  background: #a90b0b;\n  border: solid 1px gainsboro;\n  border-radius: 20px;\n  padding: 6.5px 10px;\n}\n.page-heading[_ngcontent-%COMP%] {\n  text-align: center !important;\n  font-family: cursive;\n  margin-bottom: 15px !important;\n  color: #313e24;\n}\n@media only screen and (max-width: 768px) {\n  .page-heading[_ngcontent-%COMP%] {\n    font-family: sans-serif;\n  }\n}\n.hidden[_ngcontent-%COMP%] {\n  visibility: hidden !important;\n}\n@media only screen and (max-width: 768px) {\n    .alert-dismissible .close {\n    z-index: 0;\n  }\n}\n  .alert-info {\n  background-color: #313e24 !important;\n  color: #ad974f !important;\n  border-radius: 20px;\n}\n.kupipakwa[_ngcontent-%COMP%] {\n  background-image: url('kupipakwa.png');\n}\n.pottali[_ngcontent-%COMP%] {\n  background-image: url('pottali.png');\n}\n.khalviya[_ngcontent-%COMP%] {\n  background-image: url('khalviya.png');\n}\n@media screen and (min-width: 769px) {\n  .display-inline[_ngcontent-%COMP%] {\n    display: inline !important;\n  }\n}\n\n.pyro[_ngcontent-%COMP%] {\n  position: relative !important;\n  z-index: 999;\n}\n.pyro[_ngcontent-%COMP%]    > .before[_ngcontent-%COMP%], .pyro[_ngcontent-%COMP%]    > .after[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  box-shadow: 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff;\n  animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;\n}\n.pyro[_ngcontent-%COMP%]    > .after[_ngcontent-%COMP%] {\n  animation-delay: 1.25s, 1.25s, 1.25s;\n  animation-duration: 1.25s, 1.25s, 6.25s;\n}\n@keyframes bang {\n  to {\n    box-shadow: -202px -138.6666666667px #8400ff, 145px 60.3333333333px #00a2ff, -181px -3.6666666667px #4800ff, -225px -6.6666666667px #ff00d5, -114px -259.6666666667px #1e00ff, 9px -235.6666666667px #ff00ae, 171px 1.3333333333px #59ff00, 14px 57.3333333333px #0026ff, 96px -240.6666666667px #ff00b3, -243px 2.3333333333px #0900ff, -139px -410.6666666667px #1eff00, 0px -2.6666666667px #ff002f, 124px -304.6666666667px #ff00f7, -83px -23.6666666667px #ea00ff, -132px -224.6666666667px #fff700, -231px -178.6666666667px #00b7ff, -85px -85.6666666667px #6200ff, 188px -89.6666666667px #2bff00, -131px -313.6666666667px #0015ff, -177px -279.6666666667px #00ff51, 94px -252.6666666667px #c400ff, -109px -387.6666666667px #000dff, -217px -324.6666666667px #ff5100, -143px -216.6666666667px #ff002b, 4px -200.6666666667px yellow, -146px -105.6666666667px #88ff00, -62px -241.6666666667px #1100ff, 220px -260.6666666667px #ff006a, -53px -252.6666666667px #002bff, 202px -306.6666666667px #001aff, 182px -9.6666666667px #ffbf00, 102px -69.6666666667px #00e6ff, 137px -20.6666666667px #00ff66, -44px 57.3333333333px #ffaa00, 184px -37.6666666667px #ccff00, -51px -21.6666666667px #cc00ff, -100px -119.6666666667px #00b7ff, -7px -2.6666666667px #8c00ff, 13px -219.6666666667px #ff0022, 25px 20.3333333333px #00d9ff, 117px -85.6666666667px #5500ff, 191px -328.6666666667px #ff6f00, -34px -136.6666666667px #00ff77, -56px -211.6666666667px #008cff, 75px 4.3333333333px #00d0ff, 235px -182.6666666667px #09ff00, 38px -95.6666666667px #00ff55, 216px 31.3333333333px #00ffd0, -37px -252.6666666667px #00ff77, -51px -59.6666666667px #00c8ff, 197px -160.6666666667px #00ff55;\n  }\n}\n@keyframes gravity {\n  to {\n    transform: translateY(200px);\n    -moz-transform: translateY(200px);\n    -webkit-transform: translateY(200px);\n    -o-transform: translateY(200px);\n    -ms-transform: translateY(200px);\n    opacity: 0;\n  }\n}\n@keyframes position {\n  0%, 19.9% {\n    margin-top: 10%;\n    margin-left: 40%;\n  }\n  20%, 39.9% {\n    margin-top: 40%;\n    margin-left: 30%;\n  }\n  40%, 59.9% {\n    margin-top: 20%;\n    margin-left: 70%;\n  }\n  60%, 79.9% {\n    margin-top: 30%;\n    margin-left: 20%;\n  }\n  80%, 99.9% {\n    margin-top: 30%;\n    margin-left: 80%;\n  }\n}\n  .product-description-modalcontainer.modal-dialog .carousel-container {\n  height: 450px;\n  width: 500px;\n}\n@media screen and (max-width: 768px) {\n    .product-description-modalcontainer.modal-dialog .carousel-container {\n    height: 320px;\n    width: 100%;\n  }\n}\n  .product-description-modalcontainer.modal-dialog .carousel-container img {\n  height: 430px;\n  width: 480px;\n}\n@media screen and (max-width: 768px) {\n    .product-description-modalcontainer.modal-dialog .carousel-container img {\n    height: 300px;\n    width: 100%;\n  }\n}\n.product-description-modal[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .user-action-btns[_ngcontent-%COMP%]   .add-cart-btn[_ngcontent-%COMP%], .product-description-modal[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .user-action-btns[_ngcontent-%COMP%]   .buy-btn[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  padding: 5px 10px !important;\n}\n.product-name-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: calc(100% - 20px);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 0;\n}\n.product-description-modal[_ngcontent-%COMP%]   .product-image-container[_ngcontent-%COMP%] {\n  text-align: center;\n  height: 450px;\n  width: 500px;\n  padding: 5px 20px !important;\n}\n.product-description-modal[_ngcontent-%COMP%]   .product-image-container[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%] {\n  height: 430px;\n  width: 100%;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n}\n.product-description-modal[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.product-description-modal[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.product-description-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%], .product-description-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  font-family: \"Arial\";\n}\n.product-description-modal[_ngcontent-%COMP%]   .product-img-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.product-description-modal[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  color: #ad974f;\n  font-size: 20px;\n  font-weight: bold;\n  text-transform: capitalize;\n  cursor: pointer;\n}\n.product-description-modal[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #313e24 !important;\n}\n.product-description-modal[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.product-description-modal[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%]   .current-currency-symbol[_ngcontent-%COMP%] {\n  top: -12.25px;\n  font-size: 12px;\n  padding-right: 2px;\n}\n.product-description-modal[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%]   .price-value[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.product-description-modal[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .drug-quantity-container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-family: sans-serif;\n}\n.product-description-modal[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .drug-quantity-container[_ngcontent-%COMP%]   .drug-quantityvalue-container[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.product-description-modal[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .drug-quantity-container[_ngcontent-%COMP%]   .drug-quantityvalue-container[_ngcontent-%COMP%]   .drug-quantity-value[_ngcontent-%COMP%] {\n  background: #313e24;\n  color: #fff;\n  padding: 6px 12px 6px 12px;\n  border-radius: 20px;\n}\n.product-description-modal[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.product-description-modal[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%]   .qty-input[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  text-align: center;\n  background-color: #e3dfce;\n  border: solid 1px #313e24;\n}\n.product-description-modal[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  width: 35px;\n  cursor: pointer;\n  background-color: #313e24;\n  color: #ad974f;\n  border: solid 1px #313e24;\n}\n.product-description-modal[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%]   .quantity-title[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 16px;\n  margin-bottom: 10px;\n}\n.product-description-modal[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .user-action-btns[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  margin-bottom: 10px;\n}\n@media screen and (max-width: 768px) {\n  .product-description-modal[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .user-action-btns[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n.product-description-modal[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .user-action-btns[_ngcontent-%COMP%]   .buy-btn[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.product-description-modal[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .user-action-btns[_ngcontent-%COMP%]   .add-cart-btn[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.product-description-modal[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: solid 1px gainsboro;\n  margin: auto;\n  display: block;\n}\n.product-description-modal[_ngcontent-%COMP%]   .out-of-stock[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  margin-left: 0px;\n}\n.product-description-modal[_ngcontent-%COMP%]   .out-of-stock[_ngcontent-%COMP%]   .out-of-stock-text[_ngcontent-%COMP%] {\n  margin: initial !important;\n  padding: 10px 15px !important;\n}\n  .product-description-modalcontainer.modal-dialog {\n  max-width: 1000px;\n}\n  .product-description-modalcontainer.modal-dialog .modal-body {\n  padding: 15px 15px 5px 15px !important;\n}\n  .product-description-modalcontainer.modal-dialog .carousel-container {\n  padding: 5px 20px !important;\n}\n  .product-description-modalcontainer.modal-dialog .carousel-container img {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvbW9kYWxzL3Byb2R1Y3QtZGVzY3JpcHRpb24vRTpcXFVJIHByb2plY3RcXFJhc2FocmlkYXlcXENsaWVudF9FZGl0YWJsZVF1ZXN0aW9uc0Fuc3dlcnMvc3JjXFxhc3NldHNcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9wcm9kdWN0cy9tb2RhbHMvcHJvZHVjdC1kZXNjcmlwdGlvbi9FOlxcVUkgcHJvamVjdFxcUmFzYWhyaWRheVxcQ2xpZW50X0VkaXRhYmxlUXVlc3Rpb25zQW5zd2Vycy9zcmNcXGFzc2V0c1xcc2Nzc1xcY29tbW9uLnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3RzL21vZGFscy9wcm9kdWN0LWRlc2NyaXB0aW9uL3Byb2R1Y3QtZGVzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3RzL21vZGFscy9wcm9kdWN0LWRlc2NyaXB0aW9uL0U6XFxVSSBwcm9qZWN0XFxSYXNhaHJpZGF5XFxDbGllbnRfRWRpdGFibGVRdWVzdGlvbnNBbnN3ZXJzL3NyY1xcYXBwXFxwcm9kdWN0c1xcbW9kYWxzXFxwcm9kdWN0LWRlc2NyaXB0aW9uXFxwcm9kdWN0LWRlc2NyaXB0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEQSxpQkFBQTtBQ3BEQTtFQUNFLCtCQUFBO0VBQ0EsNEJBQUE7QUNGRjtBREtBO0VBQ0UsZ0NBQUE7RUFDQSw2QkFBQTtBQ0ZGO0FES0E7RUFDRSxzQkFBQTtBQ0ZGO0FES0E7RUFDRSxpQkFBQTtBQ0ZGO0FESUU7RUFIRjtJQUlJLGtCQUFBO0VDREY7QUFDRjtBRElBO0VBQ0UsY0RSa0I7QUVPcEI7QURJQTtFQUNFLHVCQUFBO0FDREY7QURJQTtFQUNFLDRCQUFBO0FDREY7QURJQTtFQUNFLDZCQUFBO0FDREY7QURJQTtFQUNFLGtCQUFBO0FDREY7QURLRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDRko7QURNQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0hGO0FES0U7RUFMRjtJQU1JLFVBQUE7RUNGRjtBQUNGO0FESUU7RUFDRyxtQkFBQTtBQ0ZMO0FER0k7RUFDRSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJEVnNCO0VDV3RCLFlBQUE7QUNETjtBREtFO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJEM0IyQjtFQzRCM0IsbUJBQUE7QUNISjtBREtJO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNITjtBREtNO0VBQ0UsdUJBQUE7QUNIUjtBRE9JO0VBcEJGO0lBcUJJLFlBQUE7RUNKSjtBQUNGO0FET0U7RUFDRSxtQkFBQTtFQUNBLGFBQUE7QUNMSjtBRE9JO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDTE47QURRSTtFQUNFLFlBQUE7QUNOTjtBRFVFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCRDdEd0I7RUM4RHhCLDRCRDlEd0I7RUMrRHhCLGdDRC9Ed0I7RUNnRXhCLCtCRGhFd0I7QUV3RDVCO0FEWUU7RUFDRSxZQUFBO0FDVko7QURhRTtFQUNHLGdCQUFBO0VBQ0EsbUJBQUE7QUNYTDtBRGNFO0VBQ0UsY0R2RjRCO0VDd0Y1QixlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ1pKO0FEZUU7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDYko7QURnQkU7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0FDZEo7QURnQkk7RUFDRSxrQkFBQTtFQUNBLGNEOUcwQjtBRWdHaEM7QURpQkk7RUFDSSxtQkFBQTtBQ2ZSO0FEaUJRO0VBQ0ksbUJEckhvQjtFQ3NIcEIsV0RoSVk7RUNpSVosMEJBQUE7RUFDQSxtQkFBQTtBQ2ZaO0FEb0JFO0VBQ0UsbUJBQUE7QUNsQko7QURvQkk7RUFDRSxrQkFBQTtFQUNBLG1CRGhJeUI7RUNpSXpCLHFCRG5JMEI7QUVpSGhDO0FEc0JPO0VBREg7SUFFTSwwQkFBQTtJQUNBLHlCQUFBO0VDbkJSO0FBQ0Y7QUR1Qkk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CRGpKd0I7RUNrSnhCLGNEakp3QjtFQ2tKeEIseUJBQUE7QUNyQlI7QUR3Qkk7RUFDSSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNEMUp3QjtBRW9JaEM7QUQyQkk7RUFDRSx5QkQvSjBCO0VDZ0sxQixXRDVKbUI7QUVtSXpCO0FEMkJJO0VBQ0UsY0RwSzBCO0VDcUsxQixpQkFBQTtBQ3pCTjtBRDZCRTtFQUNFLGlCQUFBO0FDM0JKO0FEMENBO0VBQ0UsbUJBQUE7QUN2Q0Y7QUR5Q0U7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDdkNKO0FEeUNFO0VBQ0csZUFBQTtFQUNBLG9CQUFBO0FDdkNMO0FEeUNLO0VBSkg7SUFLSSx1QkFBQTtFQ3RDSjtBQUNGO0FEMENBO0VBQ0UsY0Q1TThCO0VDNk05Qix5QkQzTTZCO0VDNE03QixxQkQ5TThCO0VDK005QixpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7QUN2Q0Y7QUR5Q0U7RUFHRSxjRHhONEI7RUN5TjVCLHlCRHZOMkI7RUN3TjNCLHFCRDFONEI7QUVpTGhDO0FEMkNFO0VBQ0UsMEJBQUE7QUN6Q0o7QUQ2Q0E7RUFDRSxjRGpPOEI7RUNrTzlCLHlCRG5POEI7RUNvTzlCLHFCRG5POEI7RUNvTzlCLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FDMUNGO0FENENFO0VBR0UsY0Q5TzRCO0VDK081Qix5QkRoUDRCO0VDaVA1QixxQkRoUDRCO0FFb01oQztBRDhDRTtFQUNFLDBCQUFBO0FDNUNKO0FEaURBO0VBQ0UsV0R0U2tCO0VDdVNsQix5QkQ5UW1CO0VDK1FuQixxQkQvUW1CO0VDZ1JuQixpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUM5Q0Y7QURnREU7RUFHRSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QUNoREo7QURvREE7RUFFRSxlQUFBO0FDbERGO0FEMERBO0VBQ0Usc0JBQUE7QUN4REY7QUQyREE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUN4REY7QUQwREU7RUFDRSw2Q0FBQTtBQ3hESjtBRDZERTtFQUNFLDRCRDdSd0I7RUM4UnhCLDZCRDlSd0I7RUMrUnhCLCtCRC9Sd0I7RUNnU3hCLGdDRGhTd0I7RUNpU3hCLHlCRHpTMkI7QUUrTy9CO0FEK0RFO0VBREY7SUFFSSxpQkFBQTtJQUNBLGNBQUE7RUMzREY7QUFDRjtBRDhEQTtFQUNFLDhCQUFBO0FDM0RGO0FEOERBO0VBQ0UsMkJBQUE7QUMzREY7QUQrREU7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXRDVVa0I7RUM2VWxCLG1CRHJVd0I7RUNzVXhCLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQzVETjtBRG9FQTtFQUNFLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSw4QkFBQTtFQUNBLGNEbFY4QjtBRWlSaEM7QURtRUU7RUFORjtJQU9JLHVCQUFBO0VDaEVGO0FBQ0Y7QURtRUE7RUFDRSw2QkFBQTtBQ2hFRjtBRHNFTTtFQURGO0lBRUksVUFBQTtFQ2xFTjtBQUNGO0FEcUVFO0VBQ0Usb0NBQUE7RUFDQSx5QkFBQTtFQUNBLG1CRDlWd0I7QUUyUjVCO0FEdUVBO0VBQ0Usc0NBQUE7QUNwRUY7QUR1RUE7RUFDRSxvQ0FBQTtBQ3BFRjtBRHVFQTtFQUNFLHFDQUFBO0FDcEVGO0FEd0VFO0VBREY7SUFFTSwwQkFBQTtFQ3BFSjtBQUNGO0FEdUVBLGlDQUFBO0FBcUVBO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0FDeElGO0FEMklBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esd2dCQWxFYztFQTZDWiw0SEFzQmlCO0FDcElyQjtBRHVJQTtFQXpDSSxvQ0EwQ3VCO0VBbEN2Qix1Q0FtQzBCO0FDNUg5QjtBRHVFSTtFQXlERjtJQUNFLHNuREFqRlc7RUN2QmI7QUFDRjtBRDZDSTtFQStERjtJQWpDRSw0QkFrQ21CO0lBakNuQixpQ0FpQ21CO0lBaENuQixvQ0FnQ21CO0lBL0JuQiwrQkErQm1CO0lBOUJuQixnQ0E4Qm1CO0lBQ25CLFVBQUE7RUM3REY7QUFDRjtBRExJO0VBc0VGO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0VDMEJGO0VEeEJBO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0VDMEJGO0VEeEJBO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0VDMEJGO0VEeEJBO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0VDMEJGO0VEeEJBO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0VDMEJGO0FBQ0Y7QUM5akJBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QURna0JKO0FDOWpCSTtFQUpKO0lBS08sYUFBQTtJQUNBLFdBQUE7RURpa0JMO0FBQ0Y7QUM5akJBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QURpa0JKO0FDL2pCSTtFQUpKO0lBS00sYUFBQTtJQUNBLFdBQUE7RURra0JKO0FBQ0Y7QUMvakJBO0VBQ0ksMEJBQUE7RUFDQSw0QkFBQTtBRGtrQko7QUMvakJBO0VBQ0UscUJBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QURra0JGO0FDOWpCSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBRGlrQlI7QUNoa0JRO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSw0QkhZa0I7RUdYbEIsNkJIV2tCO0VHVmxCLCtCSFVrQjtFR1RsQixnQ0hTa0I7QUV5akI1QjtBQzlqQkk7RUFDSSxpQkFBQTtBRGdrQlI7QUM3akJJO0VBQ0ksZUFBQTtBRCtqQlI7QUM1akJJOztFQUVJLG9CQUFBO0FEOGpCUjtBQzNqQkk7RUFDSSxXQUFBO0FENmpCUjtBQ3pqQk87RUFDQyxjSHZCd0I7RUd3QnhCLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBRDJqQlI7QUN6akJNO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0FEMmpCUjtBQ3hqQk07RUFDRSxnQkFBQTtBRDBqQlI7QUN4akJRO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBRDBqQlo7QUN2akJRO0VBQ0ksZUFBQTtBRHlqQlo7QUNyakJNO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtBRHVqQlI7QUNyakJRO0VBQ0ksZ0JBQUE7QUR1akJaO0FDcmpCWTtFQUNJLG1CSHpEZ0I7RUcwRGhCLFdIckRTO0VHc0RULDBCQUFBO0VBQ0EsbUJBQUE7QUR1akJoQjtBQ2xqQk07RUFDRSxnQkFBQTtBRG9qQlI7QUNsakJRO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCSHJFcUI7RUdzRXJCLHlCQUFBO0FEb2pCVjtBQ2pqQlE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCSDlFb0I7RUcrRXBCLGNIOUVvQjtFRytFcEIseUJBQUE7QURtakJaO0FDaGpCUTtFQUNJLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FEa2pCWjtBQzlpQk07RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FEZ2pCUjtBQzlpQlE7RUFKRjtJQUtJLG1CQUFBO0VEaWpCUjtBQUNGO0FDL2lCUTtFQUNFLGlCQUFBO0FEaWpCVjtBQzlpQlE7RUFDRSxpQkFBQTtBRGdqQlY7QUMxaUJJO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FENGlCUjtBQ3ppQkk7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FEMmlCTjtBQzFpQk07RUFDRSwwQkFBQTtFQUNBLDZCQUFBO0FENGlCUjtBQ25pQlE7RUFDSSxpQkFBQTtBRHNpQlo7QUNwaUJZO0VBQ0ksc0NBQUE7QURzaUJoQjtBQ25pQlk7RUFFSSw0QkFBQTtBRG9pQmhCO0FDbmlCZ0I7RUFFSSw0QkhySVE7RUdzSVIsNkJIdElRO0VHdUlSLCtCSHZJUTtFR3dJUixnQ0h4SVE7QUU0cUI1QiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL21vZGFscy9wcm9kdWN0LWRlc2NyaXB0aW9uL3Byb2R1Y3QtZGVzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkaGVhZGVyLXRoZW1lLWJhY2tncm91bmQ6I2ZiZmJmYjtcclxuJGhlYWRlci10aGVtZS1jb2xvcjojZDg0MzE1O1xyXG4kYnV0dG9uLXRoZW1lLWJhY2tncm91bmQ6I2YwN2MyOTtcclxuJGJ1dHRvbi10aGVtZS1jb2xvcjojZmZmO1xyXG4kc2VhcmNoQnRuLXRoZW1lLWJhY2tncm91bmQ6IzI4YTc0NTtcclxuJHNlYXJjaEJ0bi10aGVtZS1jb2xvcjojZmZmO1xyXG4kcXVlc3Rpb25zLXRoZW1lLWNvbG9yOmJsYWNrO1xyXG4kc2hvd0hpZGVUb2dnbGVJY29uLWNvbG9yOiNmMDdjMjk7XHJcbiRzaG93SGlkZS1idG4tYmFja2dyb3VuZDp3aGl0ZTtcclxuJHNob3dIaWRlLWJ0bi1jb2xvcjpncmV5O1xyXG4kYmFja2dyb3VuZC1pbWc6J2JhY2tncm91bmQtaW1nLnBuZyc7XHJcbiRpbWctcGF0aDonLi9hc3NldHMvaW1hZ2VzLyc7XHJcbiRnb2xkZW50aGVtZS1iYWNrZ3JvdW5kLWltZzogJ2dvbGRlbnRoZW1lLWJhY2tncm91bmQtaW1nLnBuZyc7IFxyXG4kYm9keS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4kcGFnZS1jb250YWluZXItYmFja2dyb3VuZDogd2hpdGU7XHJcbiRwcm9kdWN0LW5hbWUtY29sb3I6IzMzMztcclxuJHByb2R1Y3QtZGVzY3JpcHRpb24tY29sb3I6IzdlNmU2ZTtcclxuJGNvbnRhaW5lci1ib3JkZXItY29sb3I6ICNkY2RjZGM7XHJcbiRidG4tbGlnaHRkZWZhdWx0LWJvcmRlcjogI2RjZGNkYztcclxuJGRlbGV0ZS1pY29uLWNvbG9yOiAjY2U0NTQ1O1xyXG4kYnRuLWRlZmF1bHQ6I2Y4ZjlmYTsgXHJcbiRjb25maXJtLXN0YXR1cy1iYWNrZ3JvdW5kOiBhbGljZUJsdWU7XHJcbiRjaGVjay1pY29uLWNvbG9yOiBncmVlbjtcclxuJHBlbmRpbmdjbG9jay1pY29uLWNvbG9yOiAjNThiNmQ1O1xyXG4kcGVuZGluZy1zdGF0dXMtYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxuJHByb2R1Y3QtaG92ZXItYm9yZGVyOiBibGFjaztcclxuJGdvbGRlbnRoZW1lLXByb2R1Y3QtaG92ZXI6ICNlZWNkNWY7XHJcbiRidG4tb3V0bGluZS1jb2xvcjogIzRmYmZhODtcclxuJGJ0bi1vdXRsaW5lLWNvbG9yMTogIzAwNEU2NDtcclxuJGJ0bi1vdXRsaW5lLWNvbG9yMS1hY3RpdmU6ICMwMDNENEY7XHJcbiRjb250YWN0LXVzLWZvb3RlcjogI2VkZjBmNTtcclxuJGNvcHlyaWdodC1mb290ZXI6ICMzMTNlMjQ7XHJcbiRnb2xkZW50aGVtZS1jb3B5cmlnaHQtZm9vdGVyOiAjMzEzZTI0O1xyXG4kY29udGFjdC11cy1mb290ZXJjb2xvcjogIzIxMjUyOTtcclxuJGNvbnRhY3R1cy1saW5raWNvbi1jb2xvcjogIzAwNWM1MDtcclxuJGNvbnRhY3QtdXMtYm9yZGVyOiBnYWluc2Jvcm87XHJcbiRib3gtc2hhZG93LWNvbG9yOiBnYWluc2Jvcm87XHJcbiRidG4tb3V0bGluZS10ZXh0Y29sb3I6ICNmZmY7XHJcbiRidG4tb3V0bGluZXNlY29uZGFyeS1ib3JkZXJob3ZlcjogIzAwNjQwMDtcclxuJGJ0bi1vdXRsaW5lLWJhY2tncm91bmRob3ZlcjogIzNkOGQ3YztcclxuJGJ0bi1zZWFyY2gtYmFja2dyb3VuZDogIzM3N2Q2ZTsgXHJcbiRoZWFkZXItYm94LXNoYWRvd2NvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4kYnRuLW91dGxpbmUtcmVtb3ZlYnRuOiBpbmRpYW5yZWQ7XHJcbiRwaG9uZW51bWJlci1saW5rLWNvbG9yOiBncmVlbjtcclxuJGNhcnQtc3RpY2t5LWJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbiRvdXRPZlN0b2NrLWJhY2tncm91bmQtY29sb3I6ICNhOTBiMGI7XHJcbiRjYXJ0LWljb24tY29sb3I6ICNhOTBiMGI7XHJcbiRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDogIzMxM2UyNDtcclxuJGdvbGRlbnRoZW1lLWhlYWRlcnRleHQtY29sb3I6ICAjYWQ5NzRmO1xyXG4kZ29sZGVudGhlbWUtcGFuZWwtYmFja2dyb3VuZDogI2UzZGZjZTtcclxuJGdvbGRlbnRoZW1lLXByb2R1Y3RkZXNjcmlwdGlvbi1jb2xvcjogIzIzMWYyMDtcclxuJGdvbGRlbnRoZW1lLXByb2R1Y3RkZXNjcmlwdGlvbi1jb2xvcjojMzMzO1xyXG4kZ29sZGVudGhlbWUtYmFkZ2UtdGV4dDogI2ZmZjtcclxuJGdvbGRlbnRoZW1lLWZvb3Rlci1jb2xvcjogI2I1YjE5NjtcclxuJGdvbGRlbnRoZW1lLWNvbmZpcm1tb2RhbC1ib3JkZXJjb2xvcjogI2M0YmFiYTtcclxuJGdvbGRlbnRoZW1lLWNhcm91c2VsdGV4dC1jb2xvcjogI2JlYjg5YztcclxuLyogY29uc3QgdmFsdWVzICovXHJcbiRnb2xkZW50aGVtZS1ib3JkZXItcmFkaXVzOiAyMHB4OyIsIkBpbXBvcnQgXCIuL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4kaW1nLXBhdGg6ICd+c3JjL2Fzc2V0cy9pbWFnZXMvJztcclxuXHJcbiVxdWFudGl0eWJ0bi1sZWZ0LWJvcmRlcnJhZGl1cyB7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4lcXVhbnRpdHlidG4tcmlnaHQtYm9yZGVycmFkaXVzIHtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcclxufVxyXG5cclxuLmJ0bi1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZWRpdC1pY29uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmRlbGV0ZS1pY29uIHtcclxuICBjb2xvcjogJGRlbGV0ZS1pY29uLWNvbG9yO1xyXG59XHJcblxyXG4ubm8tcGFkZGluZyB7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uby1wYWRkaW5nLWxlZnQge1xyXG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uby1wYWRkaW5nLXJpZ2h0IHtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmVtcHR5LWRhdGEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRlZmF1bHQtaW1nLWNvbnRhaW5lciB7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FydC1jb250YWluZXIge1xyXG4gIHdpZHRoOiA2NCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1vcmRlcmVkLWRhdGVjb250YWluZXIge1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAub3JkZXJlZC1kYXRlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlcnRleHQtY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6ICRnb2xkZW50aGVtZS1iYWRnZS10ZXh0ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRnb2xkZW50aGVtZS1ib3JkZXItcmFkaXVzO1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9kdWN0LWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMnB4ICRib3gtc2hhZG93LWNvbG9yO1xyXG4gICAgYmFja2dyb3VuZDogJGdvbGRlbnRoZW1lLXBhbmVsLWJhY2tncm91bmQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cclxuICAgIC51c2VyLWRldGFpbHMge1xyXG4gICAgICBjb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlcjogc29saWQgMXB4ICRnb2xkZW50aGVtZS1oZWFkZXJ0ZXh0LWNvbG9yO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAgICAgLnBob25lLW51bWJlciB7XHJcbiAgICAgICAgY29sb3I6ICRwaG9uZW51bWJlci1saW5rLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7IFxyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1pbWctY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIC5wcm9kdWN0LWltYWdlcyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9kdWN0LWltZyB7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wcm9kdWN0LWltZyB7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAkY29udGFpbmVyLWJvcmRlci1jb2xvcjtcclxuICAgIG1hcmdpbjogYXV0byBhdXRvIDE1cHggYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRnb2xkZW50aGVtZS1ib3JkZXItcmFkaXVzO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJGdvbGRlbnRoZW1lLWJvcmRlci1yYWRpdXM7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGdvbGRlbnRoZW1lLWJvcmRlci1yYWRpdXM7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkZ29sZGVudGhlbWUtYm9yZGVyLXJhZGl1cztcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLmFkZC10by1jYXJ0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcblxyXG4gIC5jYXJ0LWl0ZW0tYWN0aW9uYnRucyB7XHJcbiAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLnByb2R1Y3QtbmFtZSB7XHJcbiAgICBjb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlcnRleHQtY29sb3I7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1kZXNjcmlwdGlvbiB7XHJcbiAgICBjb2xvcjogJHByb2R1Y3QtZGVzY3JpcHRpb24tY29sb3IgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgLmRydWctcXVhbnRpdHktY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuXHJcbiAgICAuZHJ1Zy1xdWFudGl0eS10aXRsZSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICAgIH1cclxuICBcclxuICAgIC5kcnVnLXF1YW50aXR5dmFsdWUtY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5kcnVnLXF1YW50aXR5LXZhbHVlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kO1xyXG4gICAgICAgICAgICBjb2xvcjogJGJ0bi1vdXRsaW5lLXRleHRjb2xvcjtcclxuICAgICAgICAgICAgcGFkZGluZzogNnB4IDEycHggNnB4IDEycHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucXVhbnRpdHktY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgXHJcbiAgICAucXR5LWlucHV0IHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkZ29sZGVudGhlbWUtcGFuZWwtYmFja2dyb3VuZDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnF1YW50aXR5LWZpZWxkcy1jb250YWluZXIge1xyXG4gICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTNweCkgYW5kIChtYXgtd2lkdGg6IDE1MDBweCkge1xyXG4gICAgICAgICAgZmxleC1iYXNpczogMzIlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDMyJSAhaW1wb3J0YW50O1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG5cclxuICBcclxuICAgIC5pbnB1dC1ncm91cC10ZXh0IHtcclxuICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kO1xyXG4gICAgICAgIGNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVydGV4dC1jb2xvcjtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucXVhbnRpdHktdGl0bGUge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIC5xdWFudGl0eS1yZWFkb25seS1jb250YWluZXIge1xyXG4gICAgLnF1YW50aXR5LXZhbHVlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlcnRleHQtY29sb3I7XHJcbiAgICAgIGNvbG9yOiAkZ29sZGVudGhlbWUtYmFkZ2UtdGV4dDtcclxuICAgIH1cclxuICAgIC5xdWFudGl0eS10ZXh0IHtcclxuICAgICAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYnRuLW91dGxpbmUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtcHJlcGVuZCB7XHJcbiAgLmlucHV0LWdyb3VwLXRleHQge1xyXG4gICAgICBAZXh0ZW5kICVxdWFudGl0eWJ0bi1sZWZ0LWJvcmRlcnJhZGl1cztcclxuICB9XHJcbn1cclxuLmlucHV0LWdyb3VwLWFwcGVuZCB7XHJcbiAgICAuaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgICAgICAgQGV4dGVuZCAlcXVhbnRpdHlidG4tcmlnaHQtYm9yZGVycmFkaXVzO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucHJvZHVjdC1wcmljZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgLmN1cnJlbnQtY3VycmVuY3ktc3ltYm9sIHtcclxuICAgIHRvcDogLTQuMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLnByaWNlLXZhbHVlIHtcclxuICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcblxyXG4gICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLW91dGxpbmUge1xyXG4gIGNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdvbGRlbnRoZW1lLXBhbmVsLWJhY2tncm91bmQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDNweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAmOmFjdGl2ZSxcclxuICAmOmhvdmVyLFxyXG4gICY6Zm9jdXMge1xyXG4gICAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRnb2xkZW50aGVtZS1wYW5lbC1iYWNrZ3JvdW5kO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgfVxyXG4gICY6YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLWN1c3RvbXNlY29uZGFyeSB7XHJcbiAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXJ0ZXh0LWNvbG9yO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICBib3JkZXItY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXJ0ZXh0LWNvbG9yO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiAzcHggMTBweCAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggJGJveC1zaGFkb3ctY29sb3I7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIFxyXG4gICY6YWN0aXZlLFxyXG4gICY6aG92ZXIsXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBjb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlcnRleHQtY29sb3I7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgICBib3JkZXItY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXJ0ZXh0LWNvbG9yO1xyXG4gIH1cclxuICAmOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcclxuICB9XHJcblxyXG59XHJcblxyXG4uYnRuLWNvbG9yLTEge1xyXG4gIGNvbG9yOiAkYnV0dG9uLXRoZW1lLWNvbG9yO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRidG4tb3V0bGluZS1jb2xvcjE7XHJcbiAgYm9yZGVyLWNvbG9yOiAkYnRuLW91dGxpbmUtY29sb3IxO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuXHJcbiAgJjpob3ZlcixcclxuICAmOmFjdGl2ZSxcclxuICAmOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6ICRidG4tb3V0bGluZS1jb2xvcjEtYWN0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogJGJ1dHRvbi10aGVtZS1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkYnRuLW91dGxpbmUtY29sb3IxLWFjdGl2ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXJlbW92ZWJ0biB7XHJcbiAgQGV4dGVuZCAuYnRuLW91dGxpbmUtY3VzdG9tc2Vjb25kYXJ5O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgJjphY3RpdmUsXHJcbiAgJjpob3ZlcixcclxuICAmOmZvY3VzIHtcclxuICB9XHJcbn1cclxuXHJcbi5mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG5cclxuICAuY2xvc2Uge1xyXG4gICAgbWFyZ2luOiAtMC41cmVtIC0wLjJyZW0gLTFyZW0gYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICAubW9kYWwtY29udGVudCB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkZ29sZGVudGhlbWUtYm9yZGVyLXJhZGl1cztcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkZ29sZGVudGhlbWUtYm9yZGVyLXJhZGl1cztcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRnb2xkZW50aGVtZS1ib3JkZXItcmFkaXVzO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRnb2xkZW50aGVtZS1ib3JkZXItcmFkaXVzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdvbGRlbnRoZW1lLXBhbmVsLWJhY2tncm91bmQ7XHJcbiB9XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXgtaGVpZ2h0OiA1ODBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuYnV0dG9uW2Rpc2FibGVkXSB7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udG90YWwtdGV4dCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ub3V0LW9mLXN0b2NrIHtcclxuICAub3V0LW9mLXN0b2NrLXRleHQge1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGNvbG9yOiAkYnRuLW91dGxpbmUtdGV4dGNvbG9yO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkb3V0T2ZTdG9jay1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICBib3JkZXI6IHNvbGlkIDFweCAkYm94LXNoYWRvdy1jb2xvcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgcGFkZGluZzogNi41cHggMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1tb2RhbCB7XHJcbiAgQGV4dGVuZCAuYnRuLW91dGxpbmU7XHJcbn1cclxuXHJcbi5wYWdlLWhlYWRpbmcge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcclxuICBjb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICB9XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAge1xyXG4gIC5hbGVydC1kaXNtaXNzaWJsZSB7XHJcbiAgICAuY2xvc2Uge1xyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuYWxlcnQtaW5mbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVydGV4dC1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGdvbGRlbnRoZW1lLWJvcmRlci1yYWRpdXM7XHJcbiB9XHJcbn1cclxuXHJcbi5rdXBpcGFrd2Ege1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkaW1nLXBhdGggKyAna3VwaXBha3dhLnBuZycpO1xyXG59XHJcblxyXG4ucG90dGFsaSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCRpbWctcGF0aCArICdwb3R0YWxpLnBuZycpO1xyXG59XHJcblxyXG4ua2hhbHZpeWEge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkaW1nLXBhdGggKyAna2hhbHZpeWEucG5nJyk7XHJcbn1cclxuXHJcbi5kaXNwbGF5LWlubGluZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7IFxyXG4gIH1cclxufVxyXG5cclxuLyotLS0tZmlyZWNyYWNrZXJzIGFuaW1hdGlvbiAtLS0qL1xyXG4kcGFydGljbGVzOiA1MDtcclxuJHdpZHRoOiA1MDA7XHJcbiRoZWlnaHQ6IDUwMDtcclxuXHJcbi8vIENyZWF0ZSB0aGUgZXhwbG9zaW9uLi4uXHJcbiRib3gtc2hhZG93OiAoKTtcclxuJGJveC1zaGFkb3cyOiAoKTtcclxuQGZvciAkaSBmcm9tIDAgdGhyb3VnaCAkcGFydGljbGVzIHtcclxuICAkYm94LXNoYWRvdzogJGJveC1zaGFkb3csXHJcbiAgICAgICAgICAgICAgIHJhbmRvbSgkd2lkdGgpLSR3aWR0aCAvIDIgKyBweFxyXG4gICAgICAgICAgICAgICByYW5kb20oJGhlaWdodCktJGhlaWdodCAvIDEuMiArIHB4XHJcbiAgICAgICAgICAgICAgIGhzbChyYW5kb20oMzYwKSwgMTAwLCA1MCk7XHJcbiAgJGJveC1zaGFkb3cyOiAkYm94LXNoYWRvdzIsIDAgMCAjZmZmXHJcbn1cclxuQG1peGluIGtleWZyYW1lcyAoJGFuaW1hdGlvbk5hbWUpIHtcclxuICAgIEAtd2Via2l0LWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgQC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxuXHJcbiAgICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxuXHJcbiAgICBALW1zLWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgQGtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBhbmltYXRpb24tZGVsYXkgKCRzZXR0aW5ncykge1xyXG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6ICRzZXR0aW5ncztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAkc2V0dGluZ3M7XHJcbiAgICAtby1hbmltYXRpb24tZGVsYXk6ICRzZXR0aW5ncztcclxuICAgIC1tcy1hbmltYXRpb24tZGVsYXk6ICRzZXR0aW5ncztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogJHNldHRpbmdzO1xyXG59XHJcblxyXG5AbWl4aW4gYW5pbWF0aW9uLWR1cmF0aW9uICgkc2V0dGluZ3MpIHtcclxuICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAkc2V0dGluZ3M7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogJHNldHRpbmdzO1xyXG4gICAgLW8tYW5pbWF0aW9uLWR1cmF0aW9uOiAkc2V0dGluZ3M7XHJcbiAgICAtbXMtYW5pbWF0aW9uLWR1cmF0aW9uOiAkc2V0dGluZ3M7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246ICRzZXR0aW5ncztcclxufVxyXG5cclxuQG1peGluIGFuaW1hdGlvbiAoJHNldHRpbmdzKSB7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogJHNldHRpbmdzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246ICRzZXR0aW5ncztcclxuICAgIC1vLWFuaW1hdGlvbjogJHNldHRpbmdzO1xyXG4gICAgLW1zLWFuaW1hdGlvbjogJHNldHRpbmdzO1xyXG4gICAgYW5pbWF0aW9uOiAkc2V0dGluZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2Zvcm0gKCRzZXR0aW5ncykge1xyXG4gICAgdHJhbnNmb3JtOiAkc2V0dGluZ3M7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogJHNldHRpbmdzO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICRzZXR0aW5ncztcclxuICAgIC1vLXRyYW5zZm9ybTogJHNldHRpbmdzO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogJHNldHRpbmdzO1xyXG59XHJcblxyXG4ucHlybyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4ucHlybyA+IC5iZWZvcmUsIC5weXJvID4gLmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDVweDtcclxuICBoZWlnaHQ6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm94LXNoYWRvdzogJGJveC1zaGFkb3cyO1xyXG4gIEBpbmNsdWRlIGFuaW1hdGlvbigoMXMgYmFuZyBlYXNlLW91dCBpbmZpbml0ZSBiYWNrd2FyZHMsIDFzIGdyYXZpdHkgZWFzZS1pbiBpbmZpbml0ZSBiYWNrd2FyZHMsIDVzIHBvc2l0aW9uIGxpbmVhciBpbmZpbml0ZSBiYWNrd2FyZHMpKTtcclxufVxyXG4gICAgXHJcbi5weXJvID4gLmFmdGVyIHtcclxuICBAaW5jbHVkZSBhbmltYXRpb24tZGVsYXkoKDEuMjVzLCAxLjI1cywgMS4yNXMpKTtcclxuICBAaW5jbHVkZSBhbmltYXRpb24tZHVyYXRpb24oKDEuMjVzLCAxLjI1cywgNi4yNXMpKTtcclxufVxyXG4gICAgICAgIFxyXG5AaW5jbHVkZSBrZXlmcmFtZXMoYmFuZykge1xyXG4gIHRvIHtcclxuICAgIGJveC1zaGFkb3c6JGJveC1zaGFkb3c7XHJcbiAgfVxyXG59XHJcbiAgICBcclxuQGluY2x1ZGUga2V5ZnJhbWVzKGdyYXZpdHkpICB7XHJcbiAgdG8ge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZVkoMjAwcHgpKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcbiAgICBcclxuQGluY2x1ZGUga2V5ZnJhbWVzKHBvc2l0aW9uKSB7XHJcbiAgMCUsIDE5LjklIHtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbiAgfVxyXG4gIDIwJSwgMzkuOSUge1xyXG4gICAgbWFyZ2luLXRvcDogNDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICB9XHJcbiAgNDAlLCA1OS45JSB7ICBcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA3MCVcclxuICB9XHJcbiAgNjAlLCA3OS45JSB7ICBcclxuICAgIG1hcmdpbi10b3A6IDMwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgfVxyXG4gIDgwJSwgOTkuOSUgeyAgXHJcbiAgICBtYXJnaW4tdG9wOiAzMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogODAlO1xyXG4gIH1cclxufVxyXG5cclxuIiwiLyogY29uc3QgdmFsdWVzICovXG4uaW5wdXQtZ3JvdXAtcHJlcGVuZCAuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG59XG5cbi5pbnB1dC1ncm91cC1hcHBlbmQgLmlucHV0LWdyb3VwLXRleHQge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG59XG5cbi5idG4tZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5lZGl0LWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmVkaXQtaWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICB9XG59XG5cbi5kZWxldGUtaWNvbiB7XG4gIGNvbG9yOiAjY2U0NTQ1O1xufVxuXG4ubm8tcGFkZGluZyB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubm8tcGFkZGluZy1sZWZ0IHtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLm5vLXBhZGRpbmctcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLmVtcHR5LWRhdGEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kZWZhdWx0LWltZy1jb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uY2FydC1jb250YWluZXIge1xuICB3aWR0aDogNjQlO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJ0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxufVxuLmNhcnQtY29udGFpbmVyIC5wcm9kdWN0LW9yZGVyZWQtZGF0ZWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uY2FydC1jb250YWluZXIgLnByb2R1Y3Qtb3JkZXJlZC1kYXRlY29udGFpbmVyIC5vcmRlcmVkLWRhdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWQ5NzRmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAucHJvZHVjdC1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IDJweCBnYWluc2Jvcm87XG4gIGJhY2tncm91bmQ6ICNlM2RmY2U7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4uY2FydC1jb250YWluZXIgLnByb2R1Y3QtaXRlbSAudXNlci1kZXRhaWxzIHtcbiAgY29sb3I6ICMzMTNlMjQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2FkOTc0ZjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAucHJvZHVjdC1pdGVtIC51c2VyLWRldGFpbHMgLnBob25lLW51bWJlciB7XG4gIGNvbG9yOiBncmVlbiAhaW1wb3J0YW50O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY2FydC1jb250YWluZXIgLnByb2R1Y3QtaXRlbSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG4uY2FydC1jb250YWluZXIgLnByb2R1Y3QtaW1nLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY2FydC1jb250YWluZXIgLnByb2R1Y3QtaW1nLWNvbnRhaW5lciAucHJvZHVjdC1pbWFnZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi5jYXJ0LWNvbnRhaW5lciAucHJvZHVjdC1pbWctY29udGFpbmVyIC5wcm9kdWN0LWltZyB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5jYXJ0LWNvbnRhaW5lciAucHJvZHVjdC1pbWcge1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2RjZGNkYztcbiAgbWFyZ2luOiBhdXRvIGF1dG8gMTVweCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xufVxuLmNhcnQtY29udGFpbmVyIC5hZGQtdG8tY2FydCB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAuY2FydC1pdGVtLWFjdGlvbmJ0bnMge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmNhcnQtY29udGFpbmVyIC5wcm9kdWN0LW5hbWUge1xuICBjb2xvcjogI2FkOTc0ZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5jYXJ0LWNvbnRhaW5lciAucHJvZHVjdC1kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiAjN2U2ZTZlICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAuZHJ1Zy1xdWFudGl0eS1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cbi5jYXJ0LWNvbnRhaW5lciAuZHJ1Zy1xdWFudGl0eS1jb250YWluZXIgLmRydWctcXVhbnRpdHktdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGNvbG9yOiAjMzEzZTI0O1xufVxuLmNhcnQtY29udGFpbmVyIC5kcnVnLXF1YW50aXR5LWNvbnRhaW5lciAuZHJ1Zy1xdWFudGl0eXZhbHVlLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uY2FydC1jb250YWluZXIgLmRydWctcXVhbnRpdHktY29udGFpbmVyIC5kcnVnLXF1YW50aXR5dmFsdWUtY29udGFpbmVyIC5kcnVnLXF1YW50aXR5LXZhbHVlIHtcbiAgYmFja2dyb3VuZDogIzMxM2UyNDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDZweCAxMnB4IDZweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLmNhcnQtY29udGFpbmVyIC5xdWFudGl0eS1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmNhcnQtY29udGFpbmVyIC5xdWFudGl0eS1jb250YWluZXIgLnF0eS1pbnB1dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2UzZGZjZTtcbiAgYm9yZGVyLWNvbG9yOiAjMzEzZTI0O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkzcHgpIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpIHtcbiAgLmNhcnQtY29udGFpbmVyIC5xdWFudGl0eS1jb250YWluZXIgLnF1YW50aXR5LWZpZWxkcy1jb250YWluZXIge1xuICAgIGZsZXgtYmFzaXM6IDMyJSAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMzIlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5jYXJ0LWNvbnRhaW5lciAucXVhbnRpdHktY29udGFpbmVyIC5pbnB1dC1ncm91cC10ZXh0IHtcbiAgd2lkdGg6IDM1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogIzMxM2UyNDtcbiAgY29sb3I6ICNhZDk3NGY7XG4gIGJvcmRlcjogc29saWQgMXB4ICMzMTNlMjQ7XG59XG4uY2FydC1jb250YWluZXIgLnF1YW50aXR5LWNvbnRhaW5lciAucXVhbnRpdHktdGl0bGUge1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogIzMxM2UyNDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAucXVhbnRpdHktcmVhZG9ubHktY29udGFpbmVyIC5xdWFudGl0eS12YWx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZDk3NGY7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNhcnQtY29udGFpbmVyIC5xdWFudGl0eS1yZWFkb25seS1jb250YWluZXIgLnF1YW50aXR5LXRleHQge1xuICBjb2xvcjogIzMxM2UyNDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY2FydC1jb250YWluZXIgLmJ0bi1vdXRsaW5lLCAuY2FydC1jb250YWluZXIgLmJ0bi1vdXRsaW5lLW1vZGFsIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5wcm9kdWN0LXByaWNlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5wcm9kdWN0LXByaWNlIC5jdXJyZW50LWN1cnJlbmN5LXN5bWJvbCB7XG4gIHRvcDogLTQuMjVweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvZHVjdC1wcmljZSAucHJpY2UtdmFsdWUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucHJvZHVjdC1wcmljZSAucHJpY2UtdmFsdWUge1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICB9XG59XG5cbi5idG4tb3V0bGluZSwgLmJ0bi1vdXRsaW5lLW1vZGFsIHtcbiAgY29sb3I6ICMzMTNlMjQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2RmY2U7XG4gIGJvcmRlci1jb2xvcjogIzMxM2UyNDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDNweCAxMHB4ICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idG4tb3V0bGluZTphY3RpdmUsIC5idG4tb3V0bGluZS1tb2RhbDphY3RpdmUsIC5idG4tb3V0bGluZTpob3ZlciwgLmJ0bi1vdXRsaW5lLW1vZGFsOmhvdmVyLCAuYnRuLW91dGxpbmU6Zm9jdXMsIC5idG4tb3V0bGluZS1tb2RhbDpmb2N1cyB7XG4gIGNvbG9yOiAjMzEzZTI0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkZmNlO1xuICBib3JkZXItY29sb3I6ICMzMTNlMjQ7XG59XG4uYnRuLW91dGxpbmU6YWN0aXZlLCAuYnRuLW91dGxpbmUtbW9kYWw6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG59XG5cbi5idG4tb3V0bGluZS1jdXN0b21zZWNvbmRhcnksIC5idG4tb3V0bGluZS1yZW1vdmVidG4ge1xuICBjb2xvcjogI2FkOTc0ZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxM2UyNDtcbiAgYm9yZGVyLWNvbG9yOiAjYWQ5NzRmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogM3B4IDEwcHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCBnYWluc2Jvcm87XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idG4tb3V0bGluZS1jdXN0b21zZWNvbmRhcnk6YWN0aXZlLCAuYnRuLW91dGxpbmUtcmVtb3ZlYnRuOmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLWN1c3RvbXNlY29uZGFyeTpob3ZlciwgLmJ0bi1vdXRsaW5lLXJlbW92ZWJ0bjpob3ZlciwgLmJ0bi1vdXRsaW5lLWN1c3RvbXNlY29uZGFyeTpmb2N1cywgLmJ0bi1vdXRsaW5lLXJlbW92ZWJ0bjpmb2N1cyB7XG4gIGNvbG9yOiAjYWQ5NzRmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzZTI0O1xuICBib3JkZXItY29sb3I6ICNhZDk3NGY7XG59XG4uYnRuLW91dGxpbmUtY3VzdG9tc2Vjb25kYXJ5OmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLXJlbW92ZWJ0bjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcbn1cblxuLmJ0bi1jb2xvci0xIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDRFNjQ7XG4gIGJvcmRlci1jb2xvcjogIzAwNEU2NDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uYnRuLWNvbG9yLTE6aG92ZXIsIC5idG4tY29sb3ItMTphY3RpdmUsIC5idG4tY29sb3ItMTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICMwMDNENEYgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjMDAzRDRGICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tb3V0bGluZS1yZW1vdmVidG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG4ubW9kYWwtaGVhZGVyIC5jbG9zZSB7XG4gIG1hcmdpbjogLTAuNXJlbSAtMC4ycmVtIC0xcmVtIGF1dG8gIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tb2RhbC1jb250ZW50IHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkZmNlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tb2RhbC1ib2R5IHtcbiAgICBtYXgtaGVpZ2h0OiA1ODBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxufVxuXG5idXR0b25bZGlzYWJsZWRdIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O1xufVxuXG4udG90YWwtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbn1cblxuLm91dC1vZi1zdG9jayAub3V0LW9mLXN0b2NrLXRleHQge1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjYTkwYjBiO1xuICBib3JkZXI6IHNvbGlkIDFweCBnYWluc2Jvcm87XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDYuNXB4IDEwcHg7XG59XG5cbi5wYWdlLWhlYWRpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICMzMTNlMjQ7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wYWdlLWhlYWRpbmcge1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICB9XG59XG5cbi5oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICA6Om5nLWRlZXAgLmFsZXJ0LWRpc21pc3NpYmxlIC5jbG9zZSB7XG4gICAgei1pbmRleDogMDtcbiAgfVxufVxuOjpuZy1kZWVwIC5hbGVydC1pbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxM2UyNCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2FkOTc0ZiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4ua3VwaXBha3dhIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwifnNyYy9hc3NldHMvaW1hZ2VzL2t1cGlwYWt3YS5wbmdcIik7XG59XG5cbi5wb3R0YWxpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwifnNyYy9hc3NldHMvaW1hZ2VzL3BvdHRhbGkucG5nXCIpO1xufVxuXG4ua2hhbHZpeWEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJ+c3JjL2Fzc2V0cy9pbWFnZXMva2hhbHZpeWEucG5nXCIpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICAuZGlzcGxheS1pbmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8qLS0tLWZpcmVjcmFja2VycyBhbmltYXRpb24gLS0tKi9cbi5weXJvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLnB5cm8gPiAuYmVmb3JlLCAucHlybyA+IC5hZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZjtcbiAgLW1vei1hbmltYXRpb246IDFzIGJhbmcgZWFzZS1vdXQgaW5maW5pdGUgYmFja3dhcmRzLCAxcyBncmF2aXR5IGVhc2UtaW4gaW5maW5pdGUgYmFja3dhcmRzLCA1cyBwb3NpdGlvbiBsaW5lYXIgaW5maW5pdGUgYmFja3dhcmRzO1xuICAtd2Via2l0LWFuaW1hdGlvbjogMXMgYmFuZyBlYXNlLW91dCBpbmZpbml0ZSBiYWNrd2FyZHMsIDFzIGdyYXZpdHkgZWFzZS1pbiBpbmZpbml0ZSBiYWNrd2FyZHMsIDVzIHBvc2l0aW9uIGxpbmVhciBpbmZpbml0ZSBiYWNrd2FyZHM7XG4gIC1vLWFuaW1hdGlvbjogMXMgYmFuZyBlYXNlLW91dCBpbmZpbml0ZSBiYWNrd2FyZHMsIDFzIGdyYXZpdHkgZWFzZS1pbiBpbmZpbml0ZSBiYWNrd2FyZHMsIDVzIHBvc2l0aW9uIGxpbmVhciBpbmZpbml0ZSBiYWNrd2FyZHM7XG4gIC1tcy1hbmltYXRpb246IDFzIGJhbmcgZWFzZS1vdXQgaW5maW5pdGUgYmFja3dhcmRzLCAxcyBncmF2aXR5IGVhc2UtaW4gaW5maW5pdGUgYmFja3dhcmRzLCA1cyBwb3NpdGlvbiBsaW5lYXIgaW5maW5pdGUgYmFja3dhcmRzO1xuICBhbmltYXRpb246IDFzIGJhbmcgZWFzZS1vdXQgaW5maW5pdGUgYmFja3dhcmRzLCAxcyBncmF2aXR5IGVhc2UtaW4gaW5maW5pdGUgYmFja3dhcmRzLCA1cyBwb3NpdGlvbiBsaW5lYXIgaW5maW5pdGUgYmFja3dhcmRzO1xufVxuXG4ucHlybyA+IC5hZnRlciB7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAxLjI1cywgMS4yNXMsIDEuMjVzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMS4yNXMsIDEuMjVzLCAxLjI1cztcbiAgLW8tYW5pbWF0aW9uLWRlbGF5OiAxLjI1cywgMS4yNXMsIDEuMjVzO1xuICAtbXMtYW5pbWF0aW9uLWRlbGF5OiAxLjI1cywgMS4yNXMsIDEuMjVzO1xuICBhbmltYXRpb24tZGVsYXk6IDEuMjVzLCAxLjI1cywgMS4yNXM7XG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjI1cywgMS4yNXMsIDYuMjVzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS4yNXMsIDEuMjVzLCA2LjI1cztcbiAgLW8tYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjI1cywgMS4yNXMsIDYuMjVzO1xuICAtbXMtYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjI1cywgMS4yNXMsIDYuMjVzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDEuMjVzLCAxLjI1cywgNi4yNXM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBiYW5nIHtcbiAgdG8ge1xuICAgIGJveC1zaGFkb3c6IC0yMDJweCAtMTM4LjY2NjY2NjY2NjdweCAjODQwMGZmLCAxNDVweCA2MC4zMzMzMzMzMzMzcHggIzAwYTJmZiwgLTE4MXB4IC0zLjY2NjY2NjY2NjdweCAjNDgwMGZmLCAtMjI1cHggLTYuNjY2NjY2NjY2N3B4ICNmZjAwZDUsIC0xMTRweCAtMjU5LjY2NjY2NjY2NjdweCAjMWUwMGZmLCA5cHggLTIzNS42NjY2NjY2NjY3cHggI2ZmMDBhZSwgMTcxcHggMS4zMzMzMzMzMzMzcHggIzU5ZmYwMCwgMTRweCA1Ny4zMzMzMzMzMzMzcHggIzAwMjZmZiwgOTZweCAtMjQwLjY2NjY2NjY2NjdweCAjZmYwMGIzLCAtMjQzcHggMi4zMzMzMzMzMzMzcHggIzA5MDBmZiwgLTEzOXB4IC00MTAuNjY2NjY2NjY2N3B4ICMxZWZmMDAsIDBweCAtMi42NjY2NjY2NjY3cHggI2ZmMDAyZiwgMTI0cHggLTMwNC42NjY2NjY2NjY3cHggI2ZmMDBmNywgLTgzcHggLTIzLjY2NjY2NjY2NjdweCAjZWEwMGZmLCAtMTMycHggLTIyNC42NjY2NjY2NjY3cHggI2ZmZjcwMCwgLTIzMXB4IC0xNzguNjY2NjY2NjY2N3B4ICMwMGI3ZmYsIC04NXB4IC04NS42NjY2NjY2NjY3cHggIzYyMDBmZiwgMTg4cHggLTg5LjY2NjY2NjY2NjdweCAjMmJmZjAwLCAtMTMxcHggLTMxMy42NjY2NjY2NjY3cHggIzAwMTVmZiwgLTE3N3B4IC0yNzkuNjY2NjY2NjY2N3B4ICMwMGZmNTEsIDk0cHggLTI1Mi42NjY2NjY2NjY3cHggI2M0MDBmZiwgLTEwOXB4IC0zODcuNjY2NjY2NjY2N3B4ICMwMDBkZmYsIC0yMTdweCAtMzI0LjY2NjY2NjY2NjdweCAjZmY1MTAwLCAtMTQzcHggLTIxNi42NjY2NjY2NjY3cHggI2ZmMDAyYiwgNHB4IC0yMDAuNjY2NjY2NjY2N3B4IHllbGxvdywgLTE0NnB4IC0xMDUuNjY2NjY2NjY2N3B4ICM4OGZmMDAsIC02MnB4IC0yNDEuNjY2NjY2NjY2N3B4ICMxMTAwZmYsIDIyMHB4IC0yNjAuNjY2NjY2NjY2N3B4ICNmZjAwNmEsIC01M3B4IC0yNTIuNjY2NjY2NjY2N3B4ICMwMDJiZmYsIDIwMnB4IC0zMDYuNjY2NjY2NjY2N3B4ICMwMDFhZmYsIDE4MnB4IC05LjY2NjY2NjY2NjdweCAjZmZiZjAwLCAxMDJweCAtNjkuNjY2NjY2NjY2N3B4ICMwMGU2ZmYsIDEzN3B4IC0yMC42NjY2NjY2NjY3cHggIzAwZmY2NiwgLTQ0cHggNTcuMzMzMzMzMzMzM3B4ICNmZmFhMDAsIDE4NHB4IC0zNy42NjY2NjY2NjY3cHggI2NjZmYwMCwgLTUxcHggLTIxLjY2NjY2NjY2NjdweCAjY2MwMGZmLCAtMTAwcHggLTExOS42NjY2NjY2NjY3cHggIzAwYjdmZiwgLTdweCAtMi42NjY2NjY2NjY3cHggIzhjMDBmZiwgMTNweCAtMjE5LjY2NjY2NjY2NjdweCAjZmYwMDIyLCAyNXB4IDIwLjMzMzMzMzMzMzNweCAjMDBkOWZmLCAxMTdweCAtODUuNjY2NjY2NjY2N3B4ICM1NTAwZmYsIDE5MXB4IC0zMjguNjY2NjY2NjY2N3B4ICNmZjZmMDAsIC0zNHB4IC0xMzYuNjY2NjY2NjY2N3B4ICMwMGZmNzcsIC01NnB4IC0yMTEuNjY2NjY2NjY2N3B4ICMwMDhjZmYsIDc1cHggNC4zMzMzMzMzMzMzcHggIzAwZDBmZiwgMjM1cHggLTE4Mi42NjY2NjY2NjY3cHggIzA5ZmYwMCwgMzhweCAtOTUuNjY2NjY2NjY2N3B4ICMwMGZmNTUsIDIxNnB4IDMxLjMzMzMzMzMzMzNweCAjMDBmZmQwLCAtMzdweCAtMjUyLjY2NjY2NjY2NjdweCAjMDBmZjc3LCAtNTFweCAtNTkuNjY2NjY2NjY2N3B4ICMwMGM4ZmYsIDE5N3B4IC0xNjAuNjY2NjY2NjY2N3B4ICMwMGZmNTU7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBiYW5nIHtcbiAgdG8ge1xuICAgIGJveC1zaGFkb3c6IC0yMDJweCAtMTM4LjY2NjY2NjY2NjdweCAjODQwMGZmLCAxNDVweCA2MC4zMzMzMzMzMzMzcHggIzAwYTJmZiwgLTE4MXB4IC0zLjY2NjY2NjY2NjdweCAjNDgwMGZmLCAtMjI1cHggLTYuNjY2NjY2NjY2N3B4ICNmZjAwZDUsIC0xMTRweCAtMjU5LjY2NjY2NjY2NjdweCAjMWUwMGZmLCA5cHggLTIzNS42NjY2NjY2NjY3cHggI2ZmMDBhZSwgMTcxcHggMS4zMzMzMzMzMzMzcHggIzU5ZmYwMCwgMTRweCA1Ny4zMzMzMzMzMzMzcHggIzAwMjZmZiwgOTZweCAtMjQwLjY2NjY2NjY2NjdweCAjZmYwMGIzLCAtMjQzcHggMi4zMzMzMzMzMzMzcHggIzA5MDBmZiwgLTEzOXB4IC00MTAuNjY2NjY2NjY2N3B4ICMxZWZmMDAsIDBweCAtMi42NjY2NjY2NjY3cHggI2ZmMDAyZiwgMTI0cHggLTMwNC42NjY2NjY2NjY3cHggI2ZmMDBmNywgLTgzcHggLTIzLjY2NjY2NjY2NjdweCAjZWEwMGZmLCAtMTMycHggLTIyNC42NjY2NjY2NjY3cHggI2ZmZjcwMCwgLTIzMXB4IC0xNzguNjY2NjY2NjY2N3B4ICMwMGI3ZmYsIC04NXB4IC04NS42NjY2NjY2NjY3cHggIzYyMDBmZiwgMTg4cHggLTg5LjY2NjY2NjY2NjdweCAjMmJmZjAwLCAtMTMxcHggLTMxMy42NjY2NjY2NjY3cHggIzAwMTVmZiwgLTE3N3B4IC0yNzkuNjY2NjY2NjY2N3B4ICMwMGZmNTEsIDk0cHggLTI1Mi42NjY2NjY2NjY3cHggI2M0MDBmZiwgLTEwOXB4IC0zODcuNjY2NjY2NjY2N3B4ICMwMDBkZmYsIC0yMTdweCAtMzI0LjY2NjY2NjY2NjdweCAjZmY1MTAwLCAtMTQzcHggLTIxNi42NjY2NjY2NjY3cHggI2ZmMDAyYiwgNHB4IC0yMDAuNjY2NjY2NjY2N3B4IHllbGxvdywgLTE0NnB4IC0xMDUuNjY2NjY2NjY2N3B4ICM4OGZmMDAsIC02MnB4IC0yNDEuNjY2NjY2NjY2N3B4ICMxMTAwZmYsIDIyMHB4IC0yNjAuNjY2NjY2NjY2N3B4ICNmZjAwNmEsIC01M3B4IC0yNTIuNjY2NjY2NjY2N3B4ICMwMDJiZmYsIDIwMnB4IC0zMDYuNjY2NjY2NjY2N3B4ICMwMDFhZmYsIDE4MnB4IC05LjY2NjY2NjY2NjdweCAjZmZiZjAwLCAxMDJweCAtNjkuNjY2NjY2NjY2N3B4ICMwMGU2ZmYsIDEzN3B4IC0yMC42NjY2NjY2NjY3cHggIzAwZmY2NiwgLTQ0cHggNTcuMzMzMzMzMzMzM3B4ICNmZmFhMDAsIDE4NHB4IC0zNy42NjY2NjY2NjY3cHggI2NjZmYwMCwgLTUxcHggLTIxLjY2NjY2NjY2NjdweCAjY2MwMGZmLCAtMTAwcHggLTExOS42NjY2NjY2NjY3cHggIzAwYjdmZiwgLTdweCAtMi42NjY2NjY2NjY3cHggIzhjMDBmZiwgMTNweCAtMjE5LjY2NjY2NjY2NjdweCAjZmYwMDIyLCAyNXB4IDIwLjMzMzMzMzMzMzNweCAjMDBkOWZmLCAxMTdweCAtODUuNjY2NjY2NjY2N3B4ICM1NTAwZmYsIDE5MXB4IC0zMjguNjY2NjY2NjY2N3B4ICNmZjZmMDAsIC0zNHB4IC0xMzYuNjY2NjY2NjY2N3B4ICMwMGZmNzcsIC01NnB4IC0yMTEuNjY2NjY2NjY2N3B4ICMwMDhjZmYsIDc1cHggNC4zMzMzMzMzMzMzcHggIzAwZDBmZiwgMjM1cHggLTE4Mi42NjY2NjY2NjY3cHggIzA5ZmYwMCwgMzhweCAtOTUuNjY2NjY2NjY2N3B4ICMwMGZmNTUsIDIxNnB4IDMxLjMzMzMzMzMzMzNweCAjMDBmZmQwLCAtMzdweCAtMjUyLjY2NjY2NjY2NjdweCAjMDBmZjc3LCAtNTFweCAtNTkuNjY2NjY2NjY2N3B4ICMwMGM4ZmYsIDE5N3B4IC0xNjAuNjY2NjY2NjY2N3B4ICMwMGZmNTU7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgYmFuZyB7XG4gIHRvIHtcbiAgICBib3gtc2hhZG93OiAtMjAycHggLTEzOC42NjY2NjY2NjY3cHggIzg0MDBmZiwgMTQ1cHggNjAuMzMzMzMzMzMzM3B4ICMwMGEyZmYsIC0xODFweCAtMy42NjY2NjY2NjY3cHggIzQ4MDBmZiwgLTIyNXB4IC02LjY2NjY2NjY2NjdweCAjZmYwMGQ1LCAtMTE0cHggLTI1OS42NjY2NjY2NjY3cHggIzFlMDBmZiwgOXB4IC0yMzUuNjY2NjY2NjY2N3B4ICNmZjAwYWUsIDE3MXB4IDEuMzMzMzMzMzMzM3B4ICM1OWZmMDAsIDE0cHggNTcuMzMzMzMzMzMzM3B4ICMwMDI2ZmYsIDk2cHggLTI0MC42NjY2NjY2NjY3cHggI2ZmMDBiMywgLTI0M3B4IDIuMzMzMzMzMzMzM3B4ICMwOTAwZmYsIC0xMzlweCAtNDEwLjY2NjY2NjY2NjdweCAjMWVmZjAwLCAwcHggLTIuNjY2NjY2NjY2N3B4ICNmZjAwMmYsIDEyNHB4IC0zMDQuNjY2NjY2NjY2N3B4ICNmZjAwZjcsIC04M3B4IC0yMy42NjY2NjY2NjY3cHggI2VhMDBmZiwgLTEzMnB4IC0yMjQuNjY2NjY2NjY2N3B4ICNmZmY3MDAsIC0yMzFweCAtMTc4LjY2NjY2NjY2NjdweCAjMDBiN2ZmLCAtODVweCAtODUuNjY2NjY2NjY2N3B4ICM2MjAwZmYsIDE4OHB4IC04OS42NjY2NjY2NjY3cHggIzJiZmYwMCwgLTEzMXB4IC0zMTMuNjY2NjY2NjY2N3B4ICMwMDE1ZmYsIC0xNzdweCAtMjc5LjY2NjY2NjY2NjdweCAjMDBmZjUxLCA5NHB4IC0yNTIuNjY2NjY2NjY2N3B4ICNjNDAwZmYsIC0xMDlweCAtMzg3LjY2NjY2NjY2NjdweCAjMDAwZGZmLCAtMjE3cHggLTMyNC42NjY2NjY2NjY3cHggI2ZmNTEwMCwgLTE0M3B4IC0yMTYuNjY2NjY2NjY2N3B4ICNmZjAwMmIsIDRweCAtMjAwLjY2NjY2NjY2NjdweCB5ZWxsb3csIC0xNDZweCAtMTA1LjY2NjY2NjY2NjdweCAjODhmZjAwLCAtNjJweCAtMjQxLjY2NjY2NjY2NjdweCAjMTEwMGZmLCAyMjBweCAtMjYwLjY2NjY2NjY2NjdweCAjZmYwMDZhLCAtNTNweCAtMjUyLjY2NjY2NjY2NjdweCAjMDAyYmZmLCAyMDJweCAtMzA2LjY2NjY2NjY2NjdweCAjMDAxYWZmLCAxODJweCAtOS42NjY2NjY2NjY3cHggI2ZmYmYwMCwgMTAycHggLTY5LjY2NjY2NjY2NjdweCAjMDBlNmZmLCAxMzdweCAtMjAuNjY2NjY2NjY2N3B4ICMwMGZmNjYsIC00NHB4IDU3LjMzMzMzMzMzMzNweCAjZmZhYTAwLCAxODRweCAtMzcuNjY2NjY2NjY2N3B4ICNjY2ZmMDAsIC01MXB4IC0yMS42NjY2NjY2NjY3cHggI2NjMDBmZiwgLTEwMHB4IC0xMTkuNjY2NjY2NjY2N3B4ICMwMGI3ZmYsIC03cHggLTIuNjY2NjY2NjY2N3B4ICM4YzAwZmYsIDEzcHggLTIxOS42NjY2NjY2NjY3cHggI2ZmMDAyMiwgMjVweCAyMC4zMzMzMzMzMzMzcHggIzAwZDlmZiwgMTE3cHggLTg1LjY2NjY2NjY2NjdweCAjNTUwMGZmLCAxOTFweCAtMzI4LjY2NjY2NjY2NjdweCAjZmY2ZjAwLCAtMzRweCAtMTM2LjY2NjY2NjY2NjdweCAjMDBmZjc3LCAtNTZweCAtMjExLjY2NjY2NjY2NjdweCAjMDA4Y2ZmLCA3NXB4IDQuMzMzMzMzMzMzM3B4ICMwMGQwZmYsIDIzNXB4IC0xODIuNjY2NjY2NjY2N3B4ICMwOWZmMDAsIDM4cHggLTk1LjY2NjY2NjY2NjdweCAjMDBmZjU1LCAyMTZweCAzMS4zMzMzMzMzMzMzcHggIzAwZmZkMCwgLTM3cHggLTI1Mi42NjY2NjY2NjY3cHggIzAwZmY3NywgLTUxcHggLTU5LjY2NjY2NjY2NjdweCAjMDBjOGZmLCAxOTdweCAtMTYwLjY2NjY2NjY2NjdweCAjMDBmZjU1O1xuICB9XG59XG5ALW1zLWtleWZyYW1lcyBiYW5nIHtcbiAgdG8ge1xuICAgIGJveC1zaGFkb3c6IC0yMDJweCAtMTM4LjY2NjY2NjY2NjdweCAjODQwMGZmLCAxNDVweCA2MC4zMzMzMzMzMzMzcHggIzAwYTJmZiwgLTE4MXB4IC0zLjY2NjY2NjY2NjdweCAjNDgwMGZmLCAtMjI1cHggLTYuNjY2NjY2NjY2N3B4ICNmZjAwZDUsIC0xMTRweCAtMjU5LjY2NjY2NjY2NjdweCAjMWUwMGZmLCA5cHggLTIzNS42NjY2NjY2NjY3cHggI2ZmMDBhZSwgMTcxcHggMS4zMzMzMzMzMzMzcHggIzU5ZmYwMCwgMTRweCA1Ny4zMzMzMzMzMzMzcHggIzAwMjZmZiwgOTZweCAtMjQwLjY2NjY2NjY2NjdweCAjZmYwMGIzLCAtMjQzcHggMi4zMzMzMzMzMzMzcHggIzA5MDBmZiwgLTEzOXB4IC00MTAuNjY2NjY2NjY2N3B4ICMxZWZmMDAsIDBweCAtMi42NjY2NjY2NjY3cHggI2ZmMDAyZiwgMTI0cHggLTMwNC42NjY2NjY2NjY3cHggI2ZmMDBmNywgLTgzcHggLTIzLjY2NjY2NjY2NjdweCAjZWEwMGZmLCAtMTMycHggLTIyNC42NjY2NjY2NjY3cHggI2ZmZjcwMCwgLTIzMXB4IC0xNzguNjY2NjY2NjY2N3B4ICMwMGI3ZmYsIC04NXB4IC04NS42NjY2NjY2NjY3cHggIzYyMDBmZiwgMTg4cHggLTg5LjY2NjY2NjY2NjdweCAjMmJmZjAwLCAtMTMxcHggLTMxMy42NjY2NjY2NjY3cHggIzAwMTVmZiwgLTE3N3B4IC0yNzkuNjY2NjY2NjY2N3B4ICMwMGZmNTEsIDk0cHggLTI1Mi42NjY2NjY2NjY3cHggI2M0MDBmZiwgLTEwOXB4IC0zODcuNjY2NjY2NjY2N3B4ICMwMDBkZmYsIC0yMTdweCAtMzI0LjY2NjY2NjY2NjdweCAjZmY1MTAwLCAtMTQzcHggLTIxNi42NjY2NjY2NjY3cHggI2ZmMDAyYiwgNHB4IC0yMDAuNjY2NjY2NjY2N3B4IHllbGxvdywgLTE0NnB4IC0xMDUuNjY2NjY2NjY2N3B4ICM4OGZmMDAsIC02MnB4IC0yNDEuNjY2NjY2NjY2N3B4ICMxMTAwZmYsIDIyMHB4IC0yNjAuNjY2NjY2NjY2N3B4ICNmZjAwNmEsIC01M3B4IC0yNTIuNjY2NjY2NjY2N3B4ICMwMDJiZmYsIDIwMnB4IC0zMDYuNjY2NjY2NjY2N3B4ICMwMDFhZmYsIDE4MnB4IC05LjY2NjY2NjY2NjdweCAjZmZiZjAwLCAxMDJweCAtNjkuNjY2NjY2NjY2N3B4ICMwMGU2ZmYsIDEzN3B4IC0yMC42NjY2NjY2NjY3cHggIzAwZmY2NiwgLTQ0cHggNTcuMzMzMzMzMzMzM3B4ICNmZmFhMDAsIDE4NHB4IC0zNy42NjY2NjY2NjY3cHggI2NjZmYwMCwgLTUxcHggLTIxLjY2NjY2NjY2NjdweCAjY2MwMGZmLCAtMTAwcHggLTExOS42NjY2NjY2NjY3cHggIzAwYjdmZiwgLTdweCAtMi42NjY2NjY2NjY3cHggIzhjMDBmZiwgMTNweCAtMjE5LjY2NjY2NjY2NjdweCAjZmYwMDIyLCAyNXB4IDIwLjMzMzMzMzMzMzNweCAjMDBkOWZmLCAxMTdweCAtODUuNjY2NjY2NjY2N3B4ICM1NTAwZmYsIDE5MXB4IC0zMjguNjY2NjY2NjY2N3B4ICNmZjZmMDAsIC0zNHB4IC0xMzYuNjY2NjY2NjY2N3B4ICMwMGZmNzcsIC01NnB4IC0yMTEuNjY2NjY2NjY2N3B4ICMwMDhjZmYsIDc1cHggNC4zMzMzMzMzMzMzcHggIzAwZDBmZiwgMjM1cHggLTE4Mi42NjY2NjY2NjY3cHggIzA5ZmYwMCwgMzhweCAtOTUuNjY2NjY2NjY2N3B4ICMwMGZmNTUsIDIxNnB4IDMxLjMzMzMzMzMzMzNweCAjMDBmZmQwLCAtMzdweCAtMjUyLjY2NjY2NjY2NjdweCAjMDBmZjc3LCAtNTFweCAtNTkuNjY2NjY2NjY2N3B4ICMwMGM4ZmYsIDE5N3B4IC0xNjAuNjY2NjY2NjY2N3B4ICMwMGZmNTU7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYmFuZyB7XG4gIHRvIHtcbiAgICBib3gtc2hhZG93OiAtMjAycHggLTEzOC42NjY2NjY2NjY3cHggIzg0MDBmZiwgMTQ1cHggNjAuMzMzMzMzMzMzM3B4ICMwMGEyZmYsIC0xODFweCAtMy42NjY2NjY2NjY3cHggIzQ4MDBmZiwgLTIyNXB4IC02LjY2NjY2NjY2NjdweCAjZmYwMGQ1LCAtMTE0cHggLTI1OS42NjY2NjY2NjY3cHggIzFlMDBmZiwgOXB4IC0yMzUuNjY2NjY2NjY2N3B4ICNmZjAwYWUsIDE3MXB4IDEuMzMzMzMzMzMzM3B4ICM1OWZmMDAsIDE0cHggNTcuMzMzMzMzMzMzM3B4ICMwMDI2ZmYsIDk2cHggLTI0MC42NjY2NjY2NjY3cHggI2ZmMDBiMywgLTI0M3B4IDIuMzMzMzMzMzMzM3B4ICMwOTAwZmYsIC0xMzlweCAtNDEwLjY2NjY2NjY2NjdweCAjMWVmZjAwLCAwcHggLTIuNjY2NjY2NjY2N3B4ICNmZjAwMmYsIDEyNHB4IC0zMDQuNjY2NjY2NjY2N3B4ICNmZjAwZjcsIC04M3B4IC0yMy42NjY2NjY2NjY3cHggI2VhMDBmZiwgLTEzMnB4IC0yMjQuNjY2NjY2NjY2N3B4ICNmZmY3MDAsIC0yMzFweCAtMTc4LjY2NjY2NjY2NjdweCAjMDBiN2ZmLCAtODVweCAtODUuNjY2NjY2NjY2N3B4ICM2MjAwZmYsIDE4OHB4IC04OS42NjY2NjY2NjY3cHggIzJiZmYwMCwgLTEzMXB4IC0zMTMuNjY2NjY2NjY2N3B4ICMwMDE1ZmYsIC0xNzdweCAtMjc5LjY2NjY2NjY2NjdweCAjMDBmZjUxLCA5NHB4IC0yNTIuNjY2NjY2NjY2N3B4ICNjNDAwZmYsIC0xMDlweCAtMzg3LjY2NjY2NjY2NjdweCAjMDAwZGZmLCAtMjE3cHggLTMyNC42NjY2NjY2NjY3cHggI2ZmNTEwMCwgLTE0M3B4IC0yMTYuNjY2NjY2NjY2N3B4ICNmZjAwMmIsIDRweCAtMjAwLjY2NjY2NjY2NjdweCB5ZWxsb3csIC0xNDZweCAtMTA1LjY2NjY2NjY2NjdweCAjODhmZjAwLCAtNjJweCAtMjQxLjY2NjY2NjY2NjdweCAjMTEwMGZmLCAyMjBweCAtMjYwLjY2NjY2NjY2NjdweCAjZmYwMDZhLCAtNTNweCAtMjUyLjY2NjY2NjY2NjdweCAjMDAyYmZmLCAyMDJweCAtMzA2LjY2NjY2NjY2NjdweCAjMDAxYWZmLCAxODJweCAtOS42NjY2NjY2NjY3cHggI2ZmYmYwMCwgMTAycHggLTY5LjY2NjY2NjY2NjdweCAjMDBlNmZmLCAxMzdweCAtMjAuNjY2NjY2NjY2N3B4ICMwMGZmNjYsIC00NHB4IDU3LjMzMzMzMzMzMzNweCAjZmZhYTAwLCAxODRweCAtMzcuNjY2NjY2NjY2N3B4ICNjY2ZmMDAsIC01MXB4IC0yMS42NjY2NjY2NjY3cHggI2NjMDBmZiwgLTEwMHB4IC0xMTkuNjY2NjY2NjY2N3B4ICMwMGI3ZmYsIC03cHggLTIuNjY2NjY2NjY2N3B4ICM4YzAwZmYsIDEzcHggLTIxOS42NjY2NjY2NjY3cHggI2ZmMDAyMiwgMjVweCAyMC4zMzMzMzMzMzMzcHggIzAwZDlmZiwgMTE3cHggLTg1LjY2NjY2NjY2NjdweCAjNTUwMGZmLCAxOTFweCAtMzI4LjY2NjY2NjY2NjdweCAjZmY2ZjAwLCAtMzRweCAtMTM2LjY2NjY2NjY2NjdweCAjMDBmZjc3LCAtNTZweCAtMjExLjY2NjY2NjY2NjdweCAjMDA4Y2ZmLCA3NXB4IDQuMzMzMzMzMzMzM3B4ICMwMGQwZmYsIDIzNXB4IC0xODIuNjY2NjY2NjY2N3B4ICMwOWZmMDAsIDM4cHggLTk1LjY2NjY2NjY2NjdweCAjMDBmZjU1LCAyMTZweCAzMS4zMzMzMzMzMzMzcHggIzAwZmZkMCwgLTM3cHggLTI1Mi42NjY2NjY2NjY3cHggIzAwZmY3NywgLTUxcHggLTU5LjY2NjY2NjY2NjdweCAjMDBjOGZmLCAxOTdweCAtMTYwLjY2NjY2NjY2NjdweCAjMDBmZjU1O1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZ3Jhdml0eSB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgZ3Jhdml0eSB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIGdyYXZpdHkge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQC1tcy1rZXlmcmFtZXMgZ3Jhdml0eSB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGdyYXZpdHkge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHBvc2l0aW9uIHtcbiAgMCUsIDE5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgfVxuICAyMCUsIDM5LjklIHtcbiAgICBtYXJnaW4tdG9wOiA0MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgfVxuICA0MCUsIDU5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDcwJTtcbiAgfVxuICA2MCUsIDc5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgfVxuICA4MCUsIDk5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIHBvc2l0aW9uIHtcbiAgMCUsIDE5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgfVxuICAyMCUsIDM5LjklIHtcbiAgICBtYXJnaW4tdG9wOiA0MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgfVxuICA0MCUsIDU5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDcwJTtcbiAgfVxuICA2MCUsIDc5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgfVxuICA4MCUsIDk5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBwb3NpdGlvbiB7XG4gIDAlLCAxOS45JSB7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XG4gIH1cbiAgMjAlLCAzOS45JSB7XG4gICAgbWFyZ2luLXRvcDogNDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIH1cbiAgNDAlLCA1OS45JSB7XG4gICAgbWFyZ2luLXRvcDogMjAlO1xuICAgIG1hcmdpbi1sZWZ0OiA3MCU7XG4gIH1cbiAgNjAlLCA3OS45JSB7XG4gICAgbWFyZ2luLXRvcDogMzAlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gIH1cbiAgODAlLCA5OS45JSB7XG4gICAgbWFyZ2luLXRvcDogMzAlO1xuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XG4gIH1cbn1cbkAtbXMta2V5ZnJhbWVzIHBvc2l0aW9uIHtcbiAgMCUsIDE5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgfVxuICAyMCUsIDM5LjklIHtcbiAgICBtYXJnaW4tdG9wOiA0MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgfVxuICA0MCUsIDU5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDcwJTtcbiAgfVxuICA2MCUsIDc5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgfVxuICA4MCUsIDk5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcbiAgfVxufVxuQGtleWZyYW1lcyBwb3NpdGlvbiB7XG4gIDAlLCAxOS45JSB7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XG4gIH1cbiAgMjAlLCAzOS45JSB7XG4gICAgbWFyZ2luLXRvcDogNDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIH1cbiAgNDAlLCA1OS45JSB7XG4gICAgbWFyZ2luLXRvcDogMjAlO1xuICAgIG1hcmdpbi1sZWZ0OiA3MCU7XG4gIH1cbiAgNjAlLCA3OS45JSB7XG4gICAgbWFyZ2luLXRvcDogMzAlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gIH1cbiAgODAlLCA5OS45JSB7XG4gICAgbWFyZ2luLXRvcDogMzAlO1xuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XG4gIH1cbn1cbjo6bmctZGVlcCAucHJvZHVjdC1kZXNjcmlwdGlvbi1tb2RhbGNvbnRhaW5lci5tb2RhbC1kaWFsb2cgLmNhcm91c2VsLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNDUwcHg7XG4gIHdpZHRoOiA1MDBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIDo6bmctZGVlcCAucHJvZHVjdC1kZXNjcmlwdGlvbi1tb2RhbGNvbnRhaW5lci5tb2RhbC1kaWFsb2cgLmNhcm91c2VsLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAzMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG46Om5nLWRlZXAgLnByb2R1Y3QtZGVzY3JpcHRpb24tbW9kYWxjb250YWluZXIubW9kYWwtZGlhbG9nIC5jYXJvdXNlbC1jb250YWluZXIgaW1nIHtcbiAgaGVpZ2h0OiA0MzBweDtcbiAgd2lkdGg6IDQ4MHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgOjpuZy1kZWVwIC5wcm9kdWN0LWRlc2NyaXB0aW9uLW1vZGFsY29udGFpbmVyLm1vZGFsLWRpYWxvZyAuY2Fyb3VzZWwtY29udGFpbmVyIGltZyB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4ucHJvZHVjdC1kZXNjcmlwdGlvbi1tb2RhbCAucHJvZHVjdC1kZXRhaWxzIC51c2VyLWFjdGlvbi1idG5zIC5hZGQtY2FydC1idG4sIC5wcm9kdWN0LWRlc2NyaXB0aW9uLW1vZGFsIC5wcm9kdWN0LWRldGFpbHMgLnVzZXItYWN0aW9uLWJ0bnMgLmJ1eS1idG4ge1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogNXB4IDEwcHggIWltcG9ydGFudDtcbn1cblxuLnByb2R1Y3QtbmFtZS1saW5rIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ucHJvZHVjdC1kZXNjcmlwdGlvbi1tb2RhbCAucHJvZHVjdC1pbWFnZS1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNDUwcHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgcGFkZGluZzogNXB4IDIwcHggIWltcG9ydGFudDtcbn1cbi5wcm9kdWN0LWRlc2NyaXB0aW9uLW1vZGFsIC5wcm9kdWN0LWltYWdlLWNvbnRhaW5lciAucHJvZHVjdC1pbWFnZSB7XG4gIGhlaWdodDogNDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG59XG4ucHJvZHVjdC1kZXNjcmlwdGlvbi1tb2RhbCAucHJvZHVjdC1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucHJvZHVjdC1kZXNjcmlwdGlvbi1tb2RhbCAudGFibGUge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4ucHJvZHVjdC1kZXNjcmlwdGlvbi1tb2RhbCAubW9kYWwtaGVhZGVyLFxuLnByb2R1Y3QtZGVzY3JpcHRpb24tbW9kYWwgLm1vZGFsLWJvZHkge1xuICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xufVxuLnByb2R1Y3QtZGVzY3JpcHRpb24tbW9kYWwgLnByb2R1Y3QtaW1nLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnByb2R1Y3QtZGVzY3JpcHRpb24tbW9kYWwgLnByb2R1Y3QtZGV0YWlscyAucHJvZHVjdC1uYW1lIHtcbiAgY29sb3I6ICNhZDk3NGY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucHJvZHVjdC1kZXNjcmlwdGlvbi1tb2RhbCAucHJvZHVjdC1kZXRhaWxzIC5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzMxM2UyNCAhaW1wb3J0YW50O1xufVxuLnByb2R1Y3QtZGVzY3JpcHRpb24tbW9kYWwgLnByb2R1Y3QtZGV0YWlscyAucHJvZHVjdC1wcmljZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ucHJvZHVjdC1kZXNjcmlwdGlvbi1tb2RhbCAucHJvZHVjdC1kZXRhaWxzIC5wcm9kdWN0LXByaWNlIC5jdXJyZW50LWN1cnJlbmN5LXN5bWJvbCB7XG4gIHRvcDogLTEyLjI1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZy1yaWdodDogMnB4O1xufVxuLnByb2R1Y3QtZGVzY3JpcHRpb24tbW9kYWwgLnByb2R1Y3QtZGV0YWlscyAucHJvZHVjdC1wcmljZSAucHJpY2UtdmFsdWUge1xuICBmb250LXNpemU6IDMwcHg7XG59XG4ucHJvZHVjdC1kZXNjcmlwdGlvbi1tb2RhbCAucHJvZHVjdC1kZXRhaWxzIC5kcnVnLXF1YW50aXR5LWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuLnByb2R1Y3QtZGVzY3JpcHRpb24tbW9kYWwgLnByb2R1Y3QtZGV0YWlscyAuZHJ1Zy1xdWFudGl0eS1jb250YWluZXIgLmRydWctcXVhbnRpdHl2YWx1ZS1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnByb2R1Y3QtZGVzY3JpcHRpb24tbW9kYWwgLnByb2R1Y3QtZGV0YWlscyAuZHJ1Zy1xdWFudGl0eS1jb250YWluZXIgLmRydWctcXVhbnRpdHl2YWx1ZS1jb250YWluZXIgLmRydWctcXVhbnRpdHktdmFsdWUge1xuICBiYWNrZ3JvdW5kOiAjMzEzZTI0O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNnB4IDEycHggNnB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4ucHJvZHVjdC1kZXNjcmlwdGlvbi1tb2RhbCAucHJvZHVjdC1kZXRhaWxzIC5xdWFudGl0eS1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnByb2R1Y3QtZGVzY3JpcHRpb24tbW9kYWwgLnByb2R1Y3QtZGV0YWlscyAucXVhbnRpdHktY29udGFpbmVyIC5xdHktaW5wdXQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkZmNlO1xuICBib3JkZXI6IHNvbGlkIDFweCAjMzEzZTI0O1xufVxuLnByb2R1Y3QtZGVzY3JpcHRpb24tbW9kYWwgLnByb2R1Y3QtZGV0YWlscyAucXVhbnRpdHktY29udGFpbmVyIC5pbnB1dC1ncm91cC10ZXh0IHtcbiAgd2lkdGg6IDM1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxM2UyNDtcbiAgY29sb3I6ICNhZDk3NGY7XG4gIGJvcmRlcjogc29saWQgMXB4ICMzMTNlMjQ7XG59XG4ucHJvZHVjdC1kZXNjcmlwdGlvbi1tb2RhbCAucHJvZHVjdC1kZXRhaWxzIC5xdWFudGl0eS1jb250YWluZXIgLnF1YW50aXR5LXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5wcm9kdWN0LWRlc2NyaXB0aW9uLW1vZGFsIC5wcm9kdWN0LWRldGFpbHMgLnVzZXItYWN0aW9uLWJ0bnMge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnByb2R1Y3QtZGVzY3JpcHRpb24tbW9kYWwgLnByb2R1Y3QtZGV0YWlscyAudXNlci1hY3Rpb24tYnRucyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxufVxuLnByb2R1Y3QtZGVzY3JpcHRpb24tbW9kYWwgLnByb2R1Y3QtZGV0YWlscyAudXNlci1hY3Rpb24tYnRucyAuYnV5LWJ0biB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLnByb2R1Y3QtZGVzY3JpcHRpb24tbW9kYWwgLnByb2R1Y3QtZGV0YWlscyAudXNlci1hY3Rpb24tYnRucyAuYWRkLWNhcnQtYnRuIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ucHJvZHVjdC1kZXNjcmlwdGlvbi1tb2RhbCAucHJvZHVjdC1pbWcge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4IGdhaW5zYm9ybztcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5wcm9kdWN0LWRlc2NyaXB0aW9uLW1vZGFsIC5vdXQtb2Ytc3RvY2sge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuLnByb2R1Y3QtZGVzY3JpcHRpb24tbW9kYWwgLm91dC1vZi1zdG9jayAub3V0LW9mLXN0b2NrLXRleHQge1xuICBtYXJnaW46IGluaXRpYWwgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweCAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAucHJvZHVjdC1kZXNjcmlwdGlvbi1tb2RhbGNvbnRhaW5lci5tb2RhbC1kaWFsb2cge1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbn1cbjo6bmctZGVlcCAucHJvZHVjdC1kZXNjcmlwdGlvbi1tb2RhbGNvbnRhaW5lci5tb2RhbC1kaWFsb2cgLm1vZGFsLWJvZHkge1xuICBwYWRkaW5nOiAxNXB4IDE1cHggNXB4IDE1cHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAucHJvZHVjdC1kZXNjcmlwdGlvbi1tb2RhbGNvbnRhaW5lci5tb2RhbC1kaWFsb2cgLmNhcm91c2VsLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDVweCAyMHB4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLnByb2R1Y3QtZGVzY3JpcHRpb24tbW9kYWxjb250YWluZXIubW9kYWwtZGlhbG9nIC5jYXJvdXNlbC1jb250YWluZXIgaW1nIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xufSIsIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbW1vbi5zY3NzXCI7XHJcblxyXG4lY2Fyb3VzZS1jb250YWluZXItZGltZW5zaW9ucyB7XHJcbiAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICBoZWlnaHQ6IDMyMHB4O1xyXG4gICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbiVpbWctZGltZW5zaW9ucyB7XHJcbiAgICBoZWlnaHQ6IDQzMHB4O1xyXG4gICAgd2lkdGg6IDQ4MHB4O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICB9XHJcbn1cclxuXHJcbiVhY3Rpb24tYnRuLXNpemUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHJvZHVjdC1uYW1lLWxpbmsge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWRlc2NyaXB0aW9uLW1vZGFsIHtcclxuICAgIC5wcm9kdWN0LWltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLnByb2R1Y3QtaW1hZ2Uge1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MzBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJGdvbGRlbnRoZW1lLWJvcmRlci1yYWRpdXM7XHJcbiAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJGdvbGRlbnRoZW1lLWJvcmRlci1yYWRpdXM7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkZ29sZGVudGhlbWUtYm9yZGVyLXJhZGl1cztcclxuICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkZ29sZGVudGhlbWUtYm9yZGVyLXJhZGl1cztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcm9kdWN0LW5hbWUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGFibGUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1vZGFsLWhlYWRlcixcclxuICAgIC5tb2RhbC1ib2R5IHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnByb2R1Y3QtaW1nLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcm9kdWN0LWRldGFpbHMge1xyXG4gICAgICAgLnByb2R1Y3QtbmFtZSB7XHJcbiAgICAgICAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXJ0ZXh0LWNvbG9yO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wcm9kdWN0LXByaWNlIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAgICAgICAuY3VycmVudC1jdXJyZW5jeS1zeW1ib2wge1xyXG4gICAgICAgICAgICB0b3A6IC0xMi4yNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcmljZS12YWx1ZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kcnVnLXF1YW50aXR5LWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuXHJcbiAgICAgICAgLmRydWctcXVhbnRpdHl2YWx1ZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgLmRydWctcXVhbnRpdHktdmFsdWUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRnb2xkZW50aGVtZS1iYWRnZS10ZXh0O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNnB4IDEycHggNnB4IDEycHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAucXVhbnRpdHktY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAgICAgICAucXR5LWlucHV0IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdvbGRlbnRoZW1lLXBhbmVsLWJhY2tncm91bmQ7XHJcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICAgICAgICAgICAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXJ0ZXh0LWNvbG9yO1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucXVhbnRpdHktdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAudXNlci1hY3Rpb24tYnRucyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDozMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJ1eS1idG4ge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICBAZXh0ZW5kICVhY3Rpb24tYnRuLXNpemU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hZGQtY2FydC1idG4ge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICBAZXh0ZW5kICVhY3Rpb24tYnRuLXNpemU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcm9kdWN0LWltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggZ2FpbnNib3JvO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAub3V0LW9mLXN0b2NrIHtcclxuICAgICAgbWFyZ2luLXRvcDogMzBweDsgIFxyXG4gICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAub3V0LW9mLXN0b2NrLXRleHQge1xyXG4gICAgICAgIG1hcmdpbjogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweCAhaW1wb3J0YW50OyBcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCB7XHJcbiAgICAucHJvZHVjdC1kZXNjcmlwdGlvbi1tb2RhbGNvbnRhaW5lciB7XHJcbiAgICAgICAgJi5tb2RhbC1kaWFsb2cge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuXHJcbiAgICAgICAgICAgIC5tb2RhbC1ib2R5IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMTVweCA1cHggMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY2Fyb3VzZWwtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIEBleHRlbmQgJWNhcm91c2UtY29udGFpbmVyLWRpbWVuc2lvbnM7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICVpbWctZGltZW5zaW9ucztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkZ29sZGVudGhlbWUtYm9yZGVyLXJhZGl1cztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJGdvbGRlbnRoZW1lLWJvcmRlci1yYWRpdXM7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGdvbGRlbnRoZW1lLWJvcmRlci1yYWRpdXM7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRnb2xkZW50aGVtZS1ib3JkZXItcmFkaXVzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDescriptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product-description',
          templateUrl: './product-description.component.html',
          styleUrls: ['./product-description.component.scss'],
          providers: [{
            provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselConfig"],
            useValue: {
              showIndicators: true
            }
          }]
        }]
      }], function () {
        return [{
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]
        }, {
          type: src_app_services_product_service_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
        }, {
          type: src_app_services_common_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
        }, {
          type: src_app_services_loader_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]
        }, {
          type: src_app_services_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"]
        }, {
          type: src_app_services_order_service_order_service__WEBPACK_IMPORTED_MODULE_8__["OrderService"]
        }, {
          type: angular_notifier__WEBPACK_IMPORTED_MODULE_9__["NotifierService"]
        }];
      }, {
        product: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/products/product-list/product-list.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/products/product-list/product-list.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ProductListComponent */

  /***/
  function srcAppProductsProductListProductListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListComponent", function () {
      return ProductListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _modals_confirm_order_details_confirm_order_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../modals/confirm-order-details/confirm-order-details.component */
    "./src/app/products/modals/confirm-order-details/confirm-order-details.component.ts");
    /* harmony import */


    var src_app_services_loader_service_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/loader-service/loader.service */
    "./src/app/services/loader-service/loader.service.ts");
    /* harmony import */


    var src_app_services_product_service_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/product-service/product.service */
    "./src/app/services/product-service/product.service.ts");
    /* harmony import */


    var src_app_services_common_service_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/common-service/common.service */
    "./src/app/services/common-service/common.service.ts");
    /* harmony import */


    var src_app_services_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/cart-service/cart.service */
    "./src/app/services/cart-service/cart.service.ts");
    /* harmony import */


    var src_app_services_order_service_order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/order-service/order.service */
    "./src/app/services/order-service/order.service.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var angular_notifier__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _partial_views_category_menu_category_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../partial_views/category-menu/category-menu.component */
    "./src/app/partial_views/category-menu/category-menu.component.ts");
    /* harmony import */


    var _modals_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../modals/add-product/add-product.component */
    "./src/app/products/modals/add-product/add-product.component.ts");
    /* harmony import */


    var _modals_product_description_product_description_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../modals/product-description/product-description.component */
    "./src/app/products/modals/product-description/product-description.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    function ProductListComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductListComponent_div_12_img_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 29);
      }

      if (rf & 2) {
        var product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r3.getProductImageToBeShown(product_r2.productImages), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ProductListComponent_div_12_img_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 30);
      }
    }

    function ProductListComponent_div_12_div_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_div_12_div_15_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.decrementQuantity(product_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductListComponent_div_12_div_15_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return product_r2.quantity = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_div_12_div_15_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.incrementQuantity(product_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", product_r2.quantity);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", product_r2.quantity >= product_r2.stock);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", product_r2.quantity >= product_r2.stock ? ctx_r5.sellerStocksEmptyText : "");
      }
    }

    function ProductListComponent_div_12_div_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_div_12_div_16_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.addToCart(product_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Add to cart ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_div_12_div_16_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.openOrderConfirmationModal(product_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Buy now");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductListComponent_div_12_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.outOfStockText);
      }
    }

    function ProductListComponent_div_12_span_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fa-icon", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_div_12_span_19_Template_fa_icon_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.editProduct(product_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "fa-icon", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_div_12_span_19_Template_fa_icon_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.deleteProduct(product_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r8.faEdit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r8.faTrash);
      }
    }

    function ProductListComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductListComponent_div_12_img_3_Template, 1, 1, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductListComponent_div_12_img_4_Template, 1, 0, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-product-description", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProductListComponent_div_12_div_15_Template, 9, 3, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProductListComponent_div_12_div_16_Template, 5, 0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProductListComponent_div_12_div_17_Template, 3, 1, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProductListComponent_div_12_span_19_Template, 3, 2, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r2 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r2.productImages && product_r2.productImages[0]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(product_r2.productImages && product_r2.productImages[0]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r2.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.currentCurrency);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r2.price);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r2.stock > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r2.stock > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r2.stock <= 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isAdmin);
      }
    }

    var ProductListComponent = /*#__PURE__*/function () {
      function ProductListComponent(loaderService, productService, commonService, cartService, orderService, modalService, notifierService) {
        _classCallCheck(this, ProductListComponent);

        this.loaderService = loaderService;
        this.productService = productService;
        this.commonService = commonService;
        this.cartService = cartService;
        this.orderService = orderService;
        this.modalService = modalService;
        this.notifierService = notifierService;
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrash"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEdit"];
        this.isAllCategorySelected = true;
        this.editMode = {
          status: false,
          editedItem: {}
        };
        this.isAdmin = false;
        this.isFireCrackerShown = false;
        this.outOfStockText = this.commonService.outOfStockText;
        this.sellerStocksEmptyText = this.commonService.sellerStocksEmptyText;
        this.orderConfirmationClass = this.commonService.orderConfirmationClass;
      }

      _createClass(ProductListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setPrivileges();
          this.handleSubscriptions();
          this.handleProductSearchSubsriptions();
          this.setCurrentCurrency();
        }
      }, {
        key: "setPrivileges",
        value: function setPrivileges() {
          this.isAdmin = this.commonService.userDetails.isAdmin;
        }
      }, {
        key: "setCurrentCurrency",
        value: function setCurrentCurrency() {
          this.currentCurrency = this.commonService.currentCurrency;
        }
      }, {
        key: "handleSubscriptions",
        value: function handleSubscriptions() {
          var _this6 = this;

          this.commonService.refreshProduct.subscribe(function (data) {
            if (data && data['isAllCategorySelected']) {
              _this6.isAllCategorySelected = true;

              _this6.getAllProducts();
            } else {
              _this6.isAllCategorySelected = false;

              _this6.setCategoryIdParamIfNotAvailable(data);

              _this6.getProducts(data['categoryId']);
            }
          });
        }
      }, {
        key: "handleProductSearchSubsriptions",
        value: function handleProductSearchSubsriptions() {
          var _this7 = this;

          this.productService.productDataSearch.subscribe(function (data) {
            _this7.products = _this7.commonService.filterDataBySearchString(_this7.unfilteredProducts, data);
          });
        }
      }, {
        key: "setCategoryIdParamIfNotAvailable",
        value: function setCategoryIdParamIfNotAvailable(data) {
          if (!data.categoryId) {
            data.categoryId = data['_id'];
          }
        }
      }, {
        key: "getProducts",
        value: function getProducts(data) {
          var _this8 = this;

          this.loaderService.display(true);
          this.productService.getProductListByCategoryId(data).subscribe(function (data) {
            _this8.products = data;
            _this8.unfilteredProducts = data;

            _this8.loaderService.display(false);
          });
        }
      }, {
        key: "getAllProducts",
        value: function getAllProducts() {
          var _this9 = this;

          this.loaderService.display(true);
          this.productService.getAllProductList().subscribe(function (data) {
            _this9.products = data;
            _this9.unfilteredProducts = data;

            _this9.loaderService.display(false);
          });
        }
      }, {
        key: "deleteProduct",
        value: function deleteProduct(data) {
          var _this10 = this;

          var result = this.commonService.confirmAction();

          if (result) {
            this.loaderService.display(true);
            this.productService.deleteProduct(data._id).subscribe(function (response) {
              _this10.checkAndLoadProductsByCategory(data);

              _this10.loaderService.display(false);
            });
          }
        }
      }, {
        key: "checkAndLoadProductsByCategory",
        value: function checkAndLoadProductsByCategory(data) {
          if (this.isAllCategorySelected) {
            this.getAllProducts();
          } else {
            this.getProducts(data['categoryId']);
          }
        }
      }, {
        key: "editProduct",
        value: function editProduct(item) {
          var editedItem = JSON.parse(JSON.stringify(item));
          this.editMode = {
            status: true,
            editedItem: editedItem
          };
        }
      }, {
        key: "getProductImageToBeShown",
        value: function getProductImageToBeShown(productImage) {
          return this.productService.getProductImageToBeShown(productImage);
        }
      }, {
        key: "addToCart",
        value: function addToCart(product) {
          var _this11 = this;

          if (this.commonService.checkIfVisitorAndNavigate()) {
            this.commonService.navigateToLoginPage();
          } else {
            this.setProductId(product);
            var data = product;
            this.commonService.addUserDetails(data);
            this.loaderService.display(true);
            this.cartService.addToCartList(data).subscribe(function (response) {
              _this11.loaderService.display(false);

              _this11.cartService.cartItemChange.next();
            });
          }
        }
      }, {
        key: "setProductId",
        value: function setProductId(product) {
          product.productId = product._id;
        }
      }, {
        key: "changeQty",
        value: function changeQty(product) {}
      }, {
        key: "receiveProductAddEvent",
        value: function receiveProductAddEvent(data) {}
      }, {
        key: "receiveCategoryAddEvent",
        value: function receiveCategoryAddEvent() {}
      }, {
        key: "openOrderConfirmationModal",
        value: function openOrderConfirmationModal(product) {
          var _this12 = this;

          if (this.commonService.checkIfVisitorAndNavigate()) {
            this.commonService.navigateToLoginPage();
          } else {
            this.commonService.addUserDetails(product);
            var initialState = {
              initialState: {
                product: product
              },
              "class": this.orderConfirmationClass
            };
            var config = this.commonService.getModalConfig(this.orderConfirmationClass);
            this.modalRef = this.modalService.show(_modals_confirm_order_details_confirm_order_details_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmOrderDetailsComponent"], initialState);
            this.modalRef.content.event.subscribe(function (data) {
              _this12.placeOrder(data);
            });
          }
        }
      }, {
        key: "placeOrder",
        value: function placeOrder(cartItem) {
          var _this13 = this;

          this.loaderService.display(true);
          this.orderService.addToOrderList(cartItem).subscribe(function (response) {
            _this13.loaderService.display(false);

            _this13.notifierService.notify('success', 'Order placed successfully!');

            _this13.showFireCrackers();
          });
        }
      }, {
        key: "decrementQuantity",
        value: function decrementQuantity(product) {
          if (product.quantity > 0) {
            product.quantity -= 1;
          }
        }
      }, {
        key: "incrementQuantity",
        value: function incrementQuantity(product) {
          product.quantity += 1;
        }
      }, {
        key: "showFireCrackers",
        value: function showFireCrackers() {
          var _this14 = this;

          this.isFireCrackerShown = true;
          setTimeout(function () {
            _this14.isFireCrackerShown = false;
          }, this.commonService.fireCrackersTimeout);
        }
      }]);

      return ProductListComponent;
    }();

    ProductListComponent.ɵfac = function ProductListComponent_Factory(t) {
      return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_loader_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_product_service_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_common_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_order_service_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_9__["NotifierService"]));
    };

    ProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductListComponent,
      selectors: [["app-product-list"]],
      decls: 13,
      vars: 3,
      consts: [["class", "pyro", 4, "ngIf"], [1, "page-heading"], [1, "product-page-container"], [1, "row"], [1, "col-md-2", "col-4", "d-none", "d-md-block"], [1, "col-md-10", "col-12", "product-list-container"], [1, "col-md-3", "addproduct-btn-container"], [1, "add-product-container", 3, "editMode", "productAddEvent"], ["class", "col-md-3 col-sm-12 col-xs-12 col-12 product-list-item-container", 4, "ngFor", "ngForOf"], [1, "pyro"], [1, "before"], [1, "after"], [1, "col-md-3", "col-sm-12", "col-xs-12", "col-12", "product-list-item-container"], [1, "product-list-item"], [1, "product-img-container"], ["class", "product-img", 3, "src", 4, "ngIf"], ["class", "product-img", "src", "./../../../assets/images/herbal-med.jpg", 4, "ngIf"], [1, "img-details-container"], [1, "product-name"], [3, "product"], [1, "product-description"], [1, "product-price"], [1, "current-currency-symbol"], [1, "price-value"], ["class", "user-action-btns row", 4, "ngIf"], ["class", "row cart-buy-btncontainer", 4, "ngIf"], ["class", "row out-of-stock", 4, "ngIf"], [1, "admin-btn"], ["class", "edit-delete-btncontainer", 4, "ngIf"], [1, "product-img", 3, "src"], ["src", "./../../../assets/images/herbal-med.jpg", 1, "product-img"], [1, "user-action-btns", "row"], [1, "input-group", "col-md-5", "col-4"], [1, "input-group-prepend"], [1, "input-group-text", 3, "click"], ["type", "text", "value", "1", "id", "input1", "placeholder", "Qty", 1, "qty-input", "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], [1, "input-group-text", 3, "disabled", "click"], [1, "row", "cart-buy-btncontainer"], [1, "col-5", "btn", "btn-outline", "add-to-cart", "add-cart-btn", 3, "click"], ["value", "1", 1, "col-6", "btn", "btn-outline-customsecondary", "add-to-cart", "buy-btn", 3, "click"], [1, "row", "out-of-stock"], [1, "out-of-stock-text"], [1, "edit-delete-btncontainer"], [1, "hand-cursor", "edit-icon", 3, "icon", "click"], [1, "hand-cursor", "delete-icon", 3, "icon", "click"]],
      template: function ProductListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductListComponent_div_0_Template, 3, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-category-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-add-product", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("productAddEvent", function ProductListComponent_Template_app_add_product_productAddEvent_10_listener($event) {
            return ctx.receiveProductAddEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProductListComponent_div_12_Template, 20, 10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFireCrackerShown);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editMode", ctx.editMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _partial_views_category_menu_category_menu_component__WEBPACK_IMPORTED_MODULE_11__["CategoryMenuComponent"], _modals_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_12__["AddProductComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _modals_product_description_product_description_component__WEBPACK_IMPORTED_MODULE_13__["ProductDescriptionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FaIconComponent"]],
      styles: [".input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 15px;\n  border-top-left-radius: 15px;\n}\n.input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  border-bottom-right-radius: 15px;\n  border-top-right-radius: 15px;\n}\n.btn-full-width[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n.edit-icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n@media only screen and (max-width: 768px) {\n  .edit-icon[_ngcontent-%COMP%] {\n    margin-right: 15px;\n  }\n}\n.delete-icon[_ngcontent-%COMP%] {\n  color: #ce4545;\n}\n.no-padding[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n.no-padding-left[_ngcontent-%COMP%] {\n  padding-left: 0px !important;\n}\n.no-padding-right[_ngcontent-%COMP%] {\n  padding-right: 0px !important;\n}\n.empty-data[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.default-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n}\n.cart-container[_ngcontent-%COMP%] {\n  width: 64%;\n  margin: auto;\n  padding: 10px;\n}\n@media only screen and (max-width: 768px) {\n  .cart-container[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n.cart-container[_ngcontent-%COMP%]   .product-ordered-datecontainer[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.cart-container[_ngcontent-%COMP%]   .product-ordered-datecontainer[_ngcontent-%COMP%]   .ordered-date[_ngcontent-%COMP%] {\n  background-color: #ad974f !important;\n  color: #fff !important;\n  border-radius: 20px;\n  padding: 5px;\n}\n.cart-container[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  padding-top: 15px;\n  box-shadow: 0px 0px 2px 2px gainsboro;\n  background: #e3dfce;\n  border-radius: 20px;\n}\n.cart-container[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%] {\n  color: #313e24 !important;\n  border: solid 1px #ad974f;\n  border-radius: 15px;\n  padding: 5px;\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n.cart-container[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .phone-number[_ngcontent-%COMP%] {\n  color: green !important;\n}\n@media only screen and (max-width: 768px) {\n  .cart-container[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n.cart-container[_ngcontent-%COMP%]   .product-img-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  display: flex;\n}\n.cart-container[_ngcontent-%COMP%]   .product-img-container[_ngcontent-%COMP%]   .product-images[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  max-width: 100%;\n}\n.cart-container[_ngcontent-%COMP%]   .product-img-container[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.cart-container[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%] {\n  height: 250px;\n  width: 100%;\n  border: solid 1px #dcdcdc;\n  margin: auto auto 15px auto;\n  display: block;\n  border-top-right-radius: 20px;\n  border-top-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n}\n.cart-container[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%] {\n  float: right;\n}\n.cart-container[_ngcontent-%COMP%]   .cart-item-actionbtns[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.cart-container[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  color: #ad974f;\n  font-size: 18px;\n  font-weight: 800;\n  text-transform: capitalize;\n}\n.cart-container[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%] {\n  color: #7e6e6e !important;\n  display: inline-block;\n  width: calc(100% - 30px);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 0;\n}\n.cart-container[_ngcontent-%COMP%]   .drug-quantity-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-family: sans-serif;\n}\n.cart-container[_ngcontent-%COMP%]   .drug-quantity-container[_ngcontent-%COMP%]   .drug-quantity-title[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  color: #313e24;\n}\n.cart-container[_ngcontent-%COMP%]   .drug-quantity-container[_ngcontent-%COMP%]   .drug-quantityvalue-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.cart-container[_ngcontent-%COMP%]   .drug-quantity-container[_ngcontent-%COMP%]   .drug-quantityvalue-container[_ngcontent-%COMP%]   .drug-quantity-value[_ngcontent-%COMP%] {\n  background: #313e24;\n  color: #fff;\n  padding: 6px 12px 6px 12px;\n  border-radius: 20px;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%]   .qty-input[_ngcontent-%COMP%] {\n  text-align: center;\n  background: #e3dfce;\n  border-color: #313e24;\n}\n@media screen and (min-width: 993px) and (max-width: 1500px) {\n  .cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%]   .quantity-fields-container[_ngcontent-%COMP%] {\n    flex-basis: 32% !important;\n    max-width: 32% !important;\n  }\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  width: 35px;\n  cursor: pointer;\n  background: #313e24;\n  color: #ad974f;\n  border: solid 1px #313e24;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%]   .quantity-title[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 16px;\n  margin-bottom: 10px;\n  color: #313e24;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-readonly-container[_ngcontent-%COMP%]   .quantity-value[_ngcontent-%COMP%] {\n  background-color: #ad974f;\n  color: #fff;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-readonly-container[_ngcontent-%COMP%]   .quantity-text[_ngcontent-%COMP%] {\n  color: #313e24;\n  font-weight: bold;\n}\n.cart-container[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%], .cart-container[_ngcontent-%COMP%]   .btn-outline-modal[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.product-price[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.product-price[_ngcontent-%COMP%]   .current-currency-symbol[_ngcontent-%COMP%] {\n  top: -4.25px;\n  font-size: 11px;\n  position: relative;\n}\n.product-price[_ngcontent-%COMP%]   .price-value[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-family: cursive;\n}\n@media only screen and (max-width: 768px) {\n  .product-price[_ngcontent-%COMP%]   .price-value[_ngcontent-%COMP%] {\n    font-family: sans-serif;\n  }\n}\n.btn-outline[_ngcontent-%COMP%], .btn-outline-modal[_ngcontent-%COMP%] {\n  color: #313e24;\n  background-color: #e3dfce;\n  border-color: #313e24;\n  font-weight: bold;\n  letter-spacing: 0.05em;\n  border-radius: 20px;\n  padding: 3px 10px !important;\n  cursor: pointer;\n}\n.btn-outline[_ngcontent-%COMP%]:active, .btn-outline-modal[_ngcontent-%COMP%]:active, .btn-outline[_ngcontent-%COMP%]:hover, .btn-outline-modal[_ngcontent-%COMP%]:hover, .btn-outline[_ngcontent-%COMP%]:focus, .btn-outline-modal[_ngcontent-%COMP%]:focus {\n  color: #313e24;\n  background-color: #e3dfce;\n  border-color: #313e24;\n}\n.btn-outline[_ngcontent-%COMP%]:active, .btn-outline-modal[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n}\n.btn-outline-customsecondary[_ngcontent-%COMP%], .btn-outline-removebtn[_ngcontent-%COMP%] {\n  color: #ad974f;\n  background-color: #313e24;\n  border-color: #ad974f;\n  font-weight: bold;\n  letter-spacing: 0.05em;\n  border-radius: 20px;\n  padding: 3px 10px !important;\n  box-shadow: 2px 2px gainsboro;\n  cursor: pointer;\n}\n.btn-outline-customsecondary[_ngcontent-%COMP%]:active, .btn-outline-removebtn[_ngcontent-%COMP%]:active, .btn-outline-customsecondary[_ngcontent-%COMP%]:hover, .btn-outline-removebtn[_ngcontent-%COMP%]:hover, .btn-outline-customsecondary[_ngcontent-%COMP%]:focus, .btn-outline-removebtn[_ngcontent-%COMP%]:focus {\n  color: #ad974f;\n  background-color: #313e24;\n  border-color: #ad974f;\n}\n.btn-outline-customsecondary[_ngcontent-%COMP%]:active, .btn-outline-removebtn[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n}\n.btn-color-1[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #004E64;\n  border-color: #004E64;\n  font-weight: bold;\n  letter-spacing: 0.05em;\n  border-radius: 0;\n}\n.btn-color-1[_ngcontent-%COMP%]:hover, .btn-color-1[_ngcontent-%COMP%]:active, .btn-color-1[_ngcontent-%COMP%]:focus {\n  background: #003D4F !important;\n  color: #fff !important;\n  border-color: #003D4F !important;\n}\n.btn-outline-removebtn[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 15px;\n  font-weight: 600;\n  z-index: 1000;\n  white-space: pre-wrap;\n  border: none !important;\n}\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  margin: -0.5rem -0.2rem -1rem auto !important;\n}\n  .modal-content {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  background-color: #e3dfce;\n}\n@media only screen and (max-width: 768px) {\n  .modal-body[_ngcontent-%COMP%] {\n    max-height: 580px;\n    overflow: auto;\n  }\n}\nbutton[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed !important;\n}\n.total-text[_ngcontent-%COMP%] {\n  font-weight: 600 !important;\n}\n.out-of-stock[_ngcontent-%COMP%]   .out-of-stock-text[_ngcontent-%COMP%] {\n  margin: auto;\n  text-transform: uppercase;\n  color: #fff;\n  background: #a90b0b;\n  border: solid 1px gainsboro;\n  border-radius: 20px;\n  padding: 6.5px 10px;\n}\n.page-heading[_ngcontent-%COMP%] {\n  text-align: center !important;\n  font-family: cursive;\n  margin-bottom: 15px !important;\n  color: #313e24;\n}\n@media only screen and (max-width: 768px) {\n  .page-heading[_ngcontent-%COMP%] {\n    font-family: sans-serif;\n  }\n}\n.hidden[_ngcontent-%COMP%] {\n  visibility: hidden !important;\n}\n@media only screen and (max-width: 768px) {\n    .alert-dismissible .close {\n    z-index: 0;\n  }\n}\n  .alert-info {\n  background-color: #313e24 !important;\n  color: #ad974f !important;\n  border-radius: 20px;\n}\n.kupipakwa[_ngcontent-%COMP%] {\n  background-image: url('kupipakwa.png');\n}\n.pottali[_ngcontent-%COMP%] {\n  background-image: url('pottali.png');\n}\n.khalviya[_ngcontent-%COMP%] {\n  background-image: url('khalviya.png');\n}\n@media screen and (min-width: 769px) {\n  .display-inline[_ngcontent-%COMP%] {\n    display: inline !important;\n  }\n}\n\n.pyro[_ngcontent-%COMP%] {\n  position: relative !important;\n  z-index: 999;\n}\n.pyro[_ngcontent-%COMP%]    > .before[_ngcontent-%COMP%], .pyro[_ngcontent-%COMP%]    > .after[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  box-shadow: 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff;\n  animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;\n}\n.pyro[_ngcontent-%COMP%]    > .after[_ngcontent-%COMP%] {\n  animation-delay: 1.25s, 1.25s, 1.25s;\n  animation-duration: 1.25s, 1.25s, 6.25s;\n}\n@keyframes bang {\n  to {\n    box-shadow: 65px -230.6666666667px #00eeff, -89px -26.6666666667px #0900ff, -155px -370.6666666667px #e100ff, -177px -115.6666666667px #6aff00, -207px -112.6666666667px #8400ff, -70px -155.6666666667px #80ff00, -102px -369.6666666667px #ff0d00, -119px 28.3333333333px #ffa200, -15px -79.6666666667px #ffc400, 241px -363.6666666667px #40ff00, -204px -82.6666666667px #b300ff, -55px -241.6666666667px #4800ff, -199px 6.3333333333px #b300ff, 104px -298.6666666667px #95ff00, 228px -160.6666666667px #ff0400, -214px -180.6666666667px #aeff00, 16px -135.6666666667px deepskyblue, 49px -55.6666666667px #00ff44, 8px -257.6666666667px #ff00d9, -182px -106.6666666667px fuchsia, 117px -263.6666666667px #00ffc4, 201px -22.6666666667px #ccff00, 140px -158.6666666667px #ffb300, 247px -255.6666666667px #00a6ff, 233px -135.6666666667px #ff00d0, -166px -249.6666666667px #00eaff, 112px -234.6666666667px #9100ff, -54px -129.6666666667px #ffee00, 117px -21.6666666667px #9d00ff, 186px -324.6666666667px #001aff, -26px -83.6666666667px #006aff, -226px 49.3333333333px #7bff00, 173px -146.6666666667px #0095ff, 81px -218.6666666667px #00ff3c, -149px -1.6666666667px #ff7300, 56px -93.6666666667px #aa00ff, -88px -5.6666666667px #ffae00, -34px 6.3333333333px #0400ff, -178px -64.6666666667px #ffd900, 189px -64.6666666667px #aa00ff, 231px -345.6666666667px #ff00d9, -68px -35.6666666667px #6200ff, -205px -33.6666666667px #ffa600, -155px -54.6666666667px #0400ff, 74px -298.6666666667px #00ff80, 231px -210.6666666667px #00ffc4, 219px -287.6666666667px #ff0077, -156px 67.3333333333px #0040ff, -116px 11.3333333333px fuchsia, -81px -244.6666666667px #40ff00, -81px -402.6666666667px #5e00ff;\n  }\n}\n@keyframes gravity {\n  to {\n    transform: translateY(200px);\n    -moz-transform: translateY(200px);\n    -webkit-transform: translateY(200px);\n    -o-transform: translateY(200px);\n    -ms-transform: translateY(200px);\n    opacity: 0;\n  }\n}\n@keyframes position {\n  0%, 19.9% {\n    margin-top: 10%;\n    margin-left: 40%;\n  }\n  20%, 39.9% {\n    margin-top: 40%;\n    margin-left: 30%;\n  }\n  40%, 59.9% {\n    margin-top: 20%;\n    margin-left: 70%;\n  }\n  60%, 79.9% {\n    margin-top: 30%;\n    margin-left: 20%;\n  }\n  80%, 99.9% {\n    margin-top: 30%;\n    margin-left: 80%;\n  }\n}\n.product-page-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.product-page-container[_ngcontent-%COMP%]   .product-list-container[_ngcontent-%COMP%]   .addproduct-btn-container[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n@media only screen and (max-width: 768px) {\n  .product-page-container[_ngcontent-%COMP%]   .product-list-container[_ngcontent-%COMP%] {\n    max-height: initial;\n  }\n}\n.product-page-container[_ngcontent-%COMP%]   .product-list-container[_ngcontent-%COMP%]   .add-category-container[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.product-page-container[_ngcontent-%COMP%]   .product-list-container[_ngcontent-%COMP%]   .product-list-item-container[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n@media only screen and (max-width: 768px) {\n  .product-page-container[_ngcontent-%COMP%]   .product-list-container[_ngcontent-%COMP%]   .product-list-item-container[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n}\n.product-page-container[_ngcontent-%COMP%]   .product-list-item[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 2px 2px gainsboro;\n  float: left;\n  border: solid 1px gainsboro;\n  padding: 10px;\n  margin-bottom: 10px;\n  width: 100%;\n  background-color: #e3dfce;\n  border-radius: 50px;\n}\n.product-page-container[_ngcontent-%COMP%]   .product-list-item[_ngcontent-%COMP%]   .user-action-btns[_ngcontent-%COMP%] {\n  margin-top: 10px !important;\n}\n@media screen and (min-width: 993px) and (max-width: 1500px) {\n  .product-page-container[_ngcontent-%COMP%]   .product-list-item[_ngcontent-%COMP%]   .user-action-btns[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n    flex-basis: 54% !important;\n    max-width: 54% !important;\n  }\n}\n.product-page-container[_ngcontent-%COMP%]   .product-list-item[_ngcontent-%COMP%]   .user-action-btns[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  width: 30px;\n  cursor: pointer;\n  background: #313e24;\n  color: #ad974f;\n  border: solid 1px #313e24;\n}\n.product-page-container[_ngcontent-%COMP%]   .product-list-item[_ngcontent-%COMP%]   .user-action-btns[_ngcontent-%COMP%]   .qty-input[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  text-align: center;\n  background: #e3dfce;\n  border-color: #313e24;\n}\n.product-page-container[_ngcontent-%COMP%]   .product-list-item[_ngcontent-%COMP%]   .cart-buy-btncontainer[_ngcontent-%COMP%] {\n  padding: 15px 15px 10px 15px !important;\n}\n.product-page-container[_ngcontent-%COMP%]   .product-list-item[_ngcontent-%COMP%]   .cart-buy-btncontainer[_ngcontent-%COMP%]   .buy-btn[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.product-page-container[_ngcontent-%COMP%]   .product-list-item[_ngcontent-%COMP%]   .cart-buy-btncontainer[_ngcontent-%COMP%]   .add-cart-btn[_ngcontent-%COMP%] {\n  margin-right: 15px !important;\n  padding-left: 3px !important;\n  padding-right: 3px !important;\n}\n.product-page-container[_ngcontent-%COMP%]   .product-list-item[_ngcontent-%COMP%]   .edit-delete-btncontainer[_ngcontent-%COMP%] {\n  vertical-align: sub !important;\n}\n.product-page-container[_ngcontent-%COMP%]   .product-list-item[_ngcontent-%COMP%]   .img-details-container[_ngcontent-%COMP%] {\n  padding: 5px 5px 5px 5px !important;\n  \n  \n}\n.product-page-container[_ngcontent-%COMP%]   .product-list-item[_ngcontent-%COMP%]   .product-img-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  overflow: hidden;\n}\n.product-page-container[_ngcontent-%COMP%]   .product-list-item[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 70%;\n  border-radius: 20px;\n  margin: auto;\n  margin-top: 30px;\n  display: block;\n  transition: transform 250ms ease-out;\n}\n.product-page-container[_ngcontent-%COMP%]   .product-list-item[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.product-page-container[_ngcontent-%COMP%]   .product-list-item[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%] {\n  float: right;\n}\n@media screen and (min-width: 993px) and (max-width: 1500px) {\n  .product-page-container[_ngcontent-%COMP%]   .product-list-item[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%] {\n    flex-basis: 46%;\n    font-size: 13px;\n  }\n}\n.product-page-container[_ngcontent-%COMP%]   .product-list-item[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  color: #313e24;\n  font-size: 16px;\n  font-weight: 700;\n  text-transform: capitalize;\n}\n.product-page-container[_ngcontent-%COMP%]   .product-list-item[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #333 !important;\n  width: calc(100% - 20px);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 0;\n  font-size: 14px;\n  font-weight: bold;\n}\n@media (min-width: 768px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    max-width: 800px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1saXN0L0U6XFxVSSBwcm9qZWN0XFxSYXNhaHJpZGF5XFxDbGllbnRfRWRpdGFibGVRdWVzdGlvbnNBbnN3ZXJzL3NyY1xcYXNzZXRzXFxzY3NzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1saXN0L0U6XFxVSSBwcm9qZWN0XFxSYXNhaHJpZGF5XFxDbGllbnRfRWRpdGFibGVRdWVzdGlvbnNBbnN3ZXJzL3NyY1xcYXNzZXRzXFxzY3NzXFxjb21tb24uc2NzcyIsInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1saXN0L0U6XFxVSSBwcm9qZWN0XFxSYXNhaHJpZGF5XFxDbGllbnRfRWRpdGFibGVRdWVzdGlvbnNBbnN3ZXJzL3NyY1xcYXBwXFxwcm9kdWN0c1xccHJvZHVjdC1saXN0XFxwcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0RBLGlCQUFBO0FBQUEsaUJBQUE7QUNwREE7RUFDRSwrQkFBQTtFQUNBLDRCQUFBO0FDREY7QURJQTtFQUNFLGdDQUFBO0VBQ0EsNkJBQUE7QUNERjtBRElBO0VBQ0Usc0JBQUE7QUNERjtBRElBO0VBQ0UsaUJBQUE7QUNERjtBREdFO0VBSEY7SUFJSSxrQkFBQTtFQ0FGO0FBQ0Y7QURHQTtFQUNFLGNEUmtCO0FFUXBCO0FER0E7RUFDRSx1QkFBQTtBQ0FGO0FER0E7RUFDRSw0QkFBQTtBQ0FGO0FER0E7RUFDRSw2QkFBQTtBQ0FGO0FER0E7RUFDRSxrQkFBQTtBQ0FGO0FESUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0RKO0FES0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNGRjtBRElFO0VBTEY7SUFNSSxVQUFBO0VDREY7QUFDRjtBREdFO0VBQ0csbUJBQUE7QUNETDtBREVJO0VBQ0Usb0NBQUE7RUFDQSxzQkFBQTtFQUNBLG1CRFZzQjtFQ1d0QixZQUFBO0FDQU47QURJRTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CRDNCMkI7RUM0QjNCLG1CQUFBO0FDRko7QURJSTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDRk47QURJTTtFQUNFLHVCQUFBO0FDRlI7QURNSTtFQXBCRjtJQXFCSSxZQUFBO0VDSEo7QUFDRjtBRE1FO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FDSko7QURNSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0pOO0FET0k7RUFDRSxZQUFBO0FDTE47QURTRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSw2QkQ3RHdCO0VDOER4Qiw0QkQ5RHdCO0VDK0R4QixnQ0QvRHdCO0VDZ0V4QiwrQkRoRXdCO0FFeUQ1QjtBRFdFO0VBQ0UsWUFBQTtBQ1RKO0FEWUU7RUFDRyxnQkFBQTtFQUNBLG1CQUFBO0FDVkw7QURhRTtFQUNFLGNEdkY0QjtFQ3dGNUIsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUNYSjtBRGNFO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ1pKO0FEZUU7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0FDYko7QURlSTtFQUNFLGtCQUFBO0VBQ0EsY0Q5RzBCO0FFaUdoQztBRGdCSTtFQUNJLG1CQUFBO0FDZFI7QURnQlE7RUFDSSxtQkRySG9CO0VDc0hwQixXRGhJWTtFQ2lJWiwwQkFBQTtFQUNBLG1CQUFBO0FDZFo7QURtQkU7RUFDRSxtQkFBQTtBQ2pCSjtBRG1CSTtFQUNFLGtCQUFBO0VBQ0EsbUJEaEl5QjtFQ2lJekIscUJEbkkwQjtBRWtIaEM7QURxQk87RUFESDtJQUVNLDBCQUFBO0lBQ0EseUJBQUE7RUNsQlI7QUFDRjtBRHNCSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJEakp3QjtFQ2tKeEIsY0RqSndCO0VDa0p4Qix5QkFBQTtBQ3BCUjtBRHVCSTtFQUNJLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0QxSndCO0FFcUloQztBRDBCSTtFQUNFLHlCRC9KMEI7RUNnSzFCLFdENUptQjtBRW9JekI7QUQwQkk7RUFDRSxjRHBLMEI7RUNxSzFCLGlCQUFBO0FDeEJOO0FENEJFO0VBQ0UsaUJBQUE7QUMxQko7QUR5Q0E7RUFDRSxtQkFBQTtBQ3RDRjtBRHdDRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUN0Q0o7QUR3Q0U7RUFDRyxlQUFBO0VBQ0Esb0JBQUE7QUN0Q0w7QUR3Q0s7RUFKSDtJQUtJLHVCQUFBO0VDckNKO0FBQ0Y7QUR5Q0E7RUFDRSxjRDVNOEI7RUM2TTlCLHlCRDNNNkI7RUM0TTdCLHFCRDlNOEI7RUMrTTlCLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtBQ3RDRjtBRHdDRTtFQUdFLGNEeE40QjtFQ3lONUIseUJEdk4yQjtFQ3dOM0IscUJEMU40QjtBRWtMaEM7QUQwQ0U7RUFDRSwwQkFBQTtBQ3hDSjtBRDRDQTtFQUNFLGNEak84QjtFQ2tPOUIseUJEbk84QjtFQ29POUIscUJEbk84QjtFQ29POUIsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUN6Q0Y7QUQyQ0U7RUFHRSxjRDlPNEI7RUMrTzVCLHlCRGhQNEI7RUNpUDVCLHFCRGhQNEI7QUVxTWhDO0FENkNFO0VBQ0UsMEJBQUE7QUMzQ0o7QURnREE7RUFDRSxXRHRTa0I7RUN1U2xCLHlCRDlRbUI7RUMrUW5CLHFCRC9RbUI7RUNnUm5CLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQzdDRjtBRCtDRTtFQUdFLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtBQy9DSjtBRG1EQTtFQUVFLGVBQUE7QUNqREY7QUR5REE7RUFDRSxzQkFBQTtBQ3ZERjtBRDBEQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQ3ZERjtBRHlERTtFQUNFLDZDQUFBO0FDdkRKO0FENERFO0VBQ0UsNEJEN1J3QjtFQzhSeEIsNkJEOVJ3QjtFQytSeEIsK0JEL1J3QjtFQ2dTeEIsZ0NEaFN3QjtFQ2lTeEIseUJEelMyQjtBRWdQL0I7QUQ4REU7RUFERjtJQUVJLGlCQUFBO0lBQ0EsY0FBQTtFQzFERjtBQUNGO0FENkRBO0VBQ0UsOEJBQUE7QUMxREY7QUQ2REE7RUFDRSwyQkFBQTtBQzFERjtBRDhERTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFdENVVrQjtFQzZVbEIsbUJEclV3QjtFQ3NVeEIsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDM0ROO0FEbUVBO0VBQ0UsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0RsVjhCO0FFa1JoQztBRGtFRTtFQU5GO0lBT0ksdUJBQUE7RUMvREY7QUFDRjtBRGtFQTtFQUNFLDZCQUFBO0FDL0RGO0FEcUVNO0VBREY7SUFFSSxVQUFBO0VDakVOO0FBQ0Y7QURvRUU7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJEOVZ3QjtBRTRSNUI7QURzRUE7RUFDRSxzQ0FBQTtBQ25FRjtBRHNFQTtFQUNFLG9DQUFBO0FDbkVGO0FEc0VBO0VBQ0UscUNBQUE7QUNuRUY7QUR1RUU7RUFERjtJQUVNLDBCQUFBO0VDbkVKO0FBQ0Y7QURzRUEsaUNBQUE7QUFxRUE7RUFDRSw2QkFBQTtFQUNBLFlBQUE7QUN2SUY7QUQwSUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Z0JBbEVjO0VBNkNaLDRIQXNCaUI7QUNuSXJCO0FEc0lBO0VBekNJLG9DQTBDdUI7RUFsQ3ZCLHVDQW1DMEI7QUMzSDlCO0FEc0VJO0VBeURGO0lBQ0UsMm9EQWpGVztFQ3RCYjtBQUNGO0FENENJO0VBK0RGO0lBakNFLDRCQWtDbUI7SUFqQ25CLGlDQWlDbUI7SUFoQ25CLG9DQWdDbUI7SUEvQm5CLCtCQStCbUI7SUE5Qm5CLGdDQThCbUI7SUFDbkIsVUFBQTtFQzVERjtBQUNGO0FETkk7RUFzRUY7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUMyQkY7RUR6QkE7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUMyQkY7RUR6QkE7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUMyQkY7RUR6QkE7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUMyQkY7RUR6QkE7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUMyQkY7QUFDRjtBQzlqQkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRGdrQko7QUM1akJRO0VBQ0ksbUJBQUE7QUQ4akJaO0FDM2pCUTtFQU5KO0lBT1EsbUJBQUE7RUQ4akJWO0FBQ0Y7QUM1akJRO0VBQ0ksaUJBQUE7QUQ4akJaO0FDM2pCUTtFQUNJLG1CQUFBO0FENmpCWjtBQzVqQlk7RUFGSjtJQUdPLG1CQUFBO0VEK2pCYjtBQUNGO0FDM2pCSTtFQUNJLHFDQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCSFl1QjtFR1h2QixtQkFBQTtBRDZqQlI7QUMzakJRO0VBQ0ksMkJBQUE7QUQ2akJaO0FDMWpCZ0I7RUFESjtJQUVRLDBCQUFBO0lBQ0EseUJBQUE7RUQ2akJsQjtBQUNGO0FDMWpCWTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJITmdCO0VHT2hCLGNITmdCO0VHT2hCLHlCQUFBO0FENGpCaEI7QUN6akJZO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CSFplO0VHYWYscUJIZmdCO0FFMGtCaEM7QUN2akJRO0VBQ0ksdUNBQUE7QUR5akJaO0FDdmpCWTtFQUNJLGlCQUFBO0FEeWpCaEI7QUN0akJZO0VBQ0ksNkJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FEd2pCaEI7QUNwakJRO0VBQ0ksOEJBQUE7QURzakJaO0FDbmpCUTtFQUNJLG1DQUFBO0VBRUEsa0NBQUE7RUFDQTs7OztLQUFBO0FEd2pCWjtBQ2pqQlE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FEbWpCWjtBQ2hqQlE7RUFDSSxhQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0FEa2pCWjtBQ2hqQlk7RUFDSSxxQkFBQTtBRGtqQmhCO0FDOWlCUTtFQUNJLFlBQUE7QURnakJaO0FDOWlCWTtFQUhKO0lBSVEsZUFBQTtJQUNBLGVBQUE7RURpakJkO0FBQ0Y7QUM5aUJRO0VBQ0ksY0g3RW9CO0VHOEVwQixlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBRGdqQlo7QUM3aUJRO0VBQ0kscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBRCtpQlo7QUMxaUJBO0VBQ0k7SUFDSSxnQkFBQTtFRDZpQk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkaGVhZGVyLXRoZW1lLWJhY2tncm91bmQ6I2ZiZmJmYjtcclxuJGhlYWRlci10aGVtZS1jb2xvcjojZDg0MzE1O1xyXG4kYnV0dG9uLXRoZW1lLWJhY2tncm91bmQ6I2YwN2MyOTtcclxuJGJ1dHRvbi10aGVtZS1jb2xvcjojZmZmO1xyXG4kc2VhcmNoQnRuLXRoZW1lLWJhY2tncm91bmQ6IzI4YTc0NTtcclxuJHNlYXJjaEJ0bi10aGVtZS1jb2xvcjojZmZmO1xyXG4kcXVlc3Rpb25zLXRoZW1lLWNvbG9yOmJsYWNrO1xyXG4kc2hvd0hpZGVUb2dnbGVJY29uLWNvbG9yOiNmMDdjMjk7XHJcbiRzaG93SGlkZS1idG4tYmFja2dyb3VuZDp3aGl0ZTtcclxuJHNob3dIaWRlLWJ0bi1jb2xvcjpncmV5O1xyXG4kYmFja2dyb3VuZC1pbWc6J2JhY2tncm91bmQtaW1nLnBuZyc7XHJcbiRpbWctcGF0aDonLi9hc3NldHMvaW1hZ2VzLyc7XHJcbiRnb2xkZW50aGVtZS1iYWNrZ3JvdW5kLWltZzogJ2dvbGRlbnRoZW1lLWJhY2tncm91bmQtaW1nLnBuZyc7IFxyXG4kYm9keS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4kcGFnZS1jb250YWluZXItYmFja2dyb3VuZDogd2hpdGU7XHJcbiRwcm9kdWN0LW5hbWUtY29sb3I6IzMzMztcclxuJHByb2R1Y3QtZGVzY3JpcHRpb24tY29sb3I6IzdlNmU2ZTtcclxuJGNvbnRhaW5lci1ib3JkZXItY29sb3I6ICNkY2RjZGM7XHJcbiRidG4tbGlnaHRkZWZhdWx0LWJvcmRlcjogI2RjZGNkYztcclxuJGRlbGV0ZS1pY29uLWNvbG9yOiAjY2U0NTQ1O1xyXG4kYnRuLWRlZmF1bHQ6I2Y4ZjlmYTsgXHJcbiRjb25maXJtLXN0YXR1cy1iYWNrZ3JvdW5kOiBhbGljZUJsdWU7XHJcbiRjaGVjay1pY29uLWNvbG9yOiBncmVlbjtcclxuJHBlbmRpbmdjbG9jay1pY29uLWNvbG9yOiAjNThiNmQ1O1xyXG4kcGVuZGluZy1zdGF0dXMtYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxuJHByb2R1Y3QtaG92ZXItYm9yZGVyOiBibGFjaztcclxuJGdvbGRlbnRoZW1lLXByb2R1Y3QtaG92ZXI6ICNlZWNkNWY7XHJcbiRidG4tb3V0bGluZS1jb2xvcjogIzRmYmZhODtcclxuJGJ0bi1vdXRsaW5lLWNvbG9yMTogIzAwNEU2NDtcclxuJGJ0bi1vdXRsaW5lLWNvbG9yMS1hY3RpdmU6ICMwMDNENEY7XHJcbiRjb250YWN0LXVzLWZvb3RlcjogI2VkZjBmNTtcclxuJGNvcHlyaWdodC1mb290ZXI6ICMzMTNlMjQ7XHJcbiRnb2xkZW50aGVtZS1jb3B5cmlnaHQtZm9vdGVyOiAjMzEzZTI0O1xyXG4kY29udGFjdC11cy1mb290ZXJjb2xvcjogIzIxMjUyOTtcclxuJGNvbnRhY3R1cy1saW5raWNvbi1jb2xvcjogIzAwNWM1MDtcclxuJGNvbnRhY3QtdXMtYm9yZGVyOiBnYWluc2Jvcm87XHJcbiRib3gtc2hhZG93LWNvbG9yOiBnYWluc2Jvcm87XHJcbiRidG4tb3V0bGluZS10ZXh0Y29sb3I6ICNmZmY7XHJcbiRidG4tb3V0bGluZXNlY29uZGFyeS1ib3JkZXJob3ZlcjogIzAwNjQwMDtcclxuJGJ0bi1vdXRsaW5lLWJhY2tncm91bmRob3ZlcjogIzNkOGQ3YztcclxuJGJ0bi1zZWFyY2gtYmFja2dyb3VuZDogIzM3N2Q2ZTsgXHJcbiRoZWFkZXItYm94LXNoYWRvd2NvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4kYnRuLW91dGxpbmUtcmVtb3ZlYnRuOiBpbmRpYW5yZWQ7XHJcbiRwaG9uZW51bWJlci1saW5rLWNvbG9yOiBncmVlbjtcclxuJGNhcnQtc3RpY2t5LWJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbiRvdXRPZlN0b2NrLWJhY2tncm91bmQtY29sb3I6ICNhOTBiMGI7XHJcbiRjYXJ0LWljb24tY29sb3I6ICNhOTBiMGI7XHJcbiRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDogIzMxM2UyNDtcclxuJGdvbGRlbnRoZW1lLWhlYWRlcnRleHQtY29sb3I6ICAjYWQ5NzRmO1xyXG4kZ29sZGVudGhlbWUtcGFuZWwtYmFja2dyb3VuZDogI2UzZGZjZTtcclxuJGdvbGRlbnRoZW1lLXByb2R1Y3RkZXNjcmlwdGlvbi1jb2xvcjogIzIzMWYyMDtcclxuJGdvbGRlbnRoZW1lLXByb2R1Y3RkZXNjcmlwdGlvbi1jb2xvcjojMzMzO1xyXG4kZ29sZGVudGhlbWUtYmFkZ2UtdGV4dDogI2ZmZjtcclxuJGdvbGRlbnRoZW1lLWZvb3Rlci1jb2xvcjogI2I1YjE5NjtcclxuJGdvbGRlbnRoZW1lLWNvbmZpcm1tb2RhbC1ib3JkZXJjb2xvcjogI2M0YmFiYTtcclxuJGdvbGRlbnRoZW1lLWNhcm91c2VsdGV4dC1jb2xvcjogI2JlYjg5YztcclxuLyogY29uc3QgdmFsdWVzICovXHJcbiRnb2xkZW50aGVtZS1ib3JkZXItcmFkaXVzOiAyMHB4OyIsIkBpbXBvcnQgXCIuL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4kaW1nLXBhdGg6ICd+c3JjL2Fzc2V0cy9pbWFnZXMvJztcclxuXHJcbiVxdWFudGl0eWJ0bi1sZWZ0LWJvcmRlcnJhZGl1cyB7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4lcXVhbnRpdHlidG4tcmlnaHQtYm9yZGVycmFkaXVzIHtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcclxufVxyXG5cclxuLmJ0bi1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZWRpdC1pY29uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmRlbGV0ZS1pY29uIHtcclxuICBjb2xvcjogJGRlbGV0ZS1pY29uLWNvbG9yO1xyXG59XHJcblxyXG4ubm8tcGFkZGluZyB7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uby1wYWRkaW5nLWxlZnQge1xyXG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uby1wYWRkaW5nLXJpZ2h0IHtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmVtcHR5LWRhdGEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRlZmF1bHQtaW1nLWNvbnRhaW5lciB7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FydC1jb250YWluZXIge1xyXG4gIHdpZHRoOiA2NCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1vcmRlcmVkLWRhdGVjb250YWluZXIge1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAub3JkZXJlZC1kYXRlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlcnRleHQtY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6ICRnb2xkZW50aGVtZS1iYWRnZS10ZXh0ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRnb2xkZW50aGVtZS1ib3JkZXItcmFkaXVzO1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9kdWN0LWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMnB4ICRib3gtc2hhZG93LWNvbG9yO1xyXG4gICAgYmFja2dyb3VuZDogJGdvbGRlbnRoZW1lLXBhbmVsLWJhY2tncm91bmQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cclxuICAgIC51c2VyLWRldGFpbHMge1xyXG4gICAgICBjb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlcjogc29saWQgMXB4ICRnb2xkZW50aGVtZS1oZWFkZXJ0ZXh0LWNvbG9yO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAgICAgLnBob25lLW51bWJlciB7XHJcbiAgICAgICAgY29sb3I6ICRwaG9uZW51bWJlci1saW5rLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7IFxyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1pbWctY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIC5wcm9kdWN0LWltYWdlcyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9kdWN0LWltZyB7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wcm9kdWN0LWltZyB7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAkY29udGFpbmVyLWJvcmRlci1jb2xvcjtcclxuICAgIG1hcmdpbjogYXV0byBhdXRvIDE1cHggYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRnb2xkZW50aGVtZS1ib3JkZXItcmFkaXVzO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJGdvbGRlbnRoZW1lLWJvcmRlci1yYWRpdXM7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGdvbGRlbnRoZW1lLWJvcmRlci1yYWRpdXM7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkZ29sZGVudGhlbWUtYm9yZGVyLXJhZGl1cztcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLmFkZC10by1jYXJ0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcblxyXG4gIC5jYXJ0LWl0ZW0tYWN0aW9uYnRucyB7XHJcbiAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLnByb2R1Y3QtbmFtZSB7XHJcbiAgICBjb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlcnRleHQtY29sb3I7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1kZXNjcmlwdGlvbiB7XHJcbiAgICBjb2xvcjogJHByb2R1Y3QtZGVzY3JpcHRpb24tY29sb3IgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgLmRydWctcXVhbnRpdHktY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuXHJcbiAgICAuZHJ1Zy1xdWFudGl0eS10aXRsZSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICAgIH1cclxuICBcclxuICAgIC5kcnVnLXF1YW50aXR5dmFsdWUtY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5kcnVnLXF1YW50aXR5LXZhbHVlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kO1xyXG4gICAgICAgICAgICBjb2xvcjogJGJ0bi1vdXRsaW5lLXRleHRjb2xvcjtcclxuICAgICAgICAgICAgcGFkZGluZzogNnB4IDEycHggNnB4IDEycHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucXVhbnRpdHktY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgXHJcbiAgICAucXR5LWlucHV0IHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkZ29sZGVudGhlbWUtcGFuZWwtYmFja2dyb3VuZDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnF1YW50aXR5LWZpZWxkcy1jb250YWluZXIge1xyXG4gICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTNweCkgYW5kIChtYXgtd2lkdGg6IDE1MDBweCkge1xyXG4gICAgICAgICAgZmxleC1iYXNpczogMzIlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDMyJSAhaW1wb3J0YW50O1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG5cclxuICBcclxuICAgIC5pbnB1dC1ncm91cC10ZXh0IHtcclxuICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kO1xyXG4gICAgICAgIGNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVydGV4dC1jb2xvcjtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucXVhbnRpdHktdGl0bGUge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIC5xdWFudGl0eS1yZWFkb25seS1jb250YWluZXIge1xyXG4gICAgLnF1YW50aXR5LXZhbHVlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlcnRleHQtY29sb3I7XHJcbiAgICAgIGNvbG9yOiAkZ29sZGVudGhlbWUtYmFkZ2UtdGV4dDtcclxuICAgIH1cclxuICAgIC5xdWFudGl0eS10ZXh0IHtcclxuICAgICAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYnRuLW91dGxpbmUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtcHJlcGVuZCB7XHJcbiAgLmlucHV0LWdyb3VwLXRleHQge1xyXG4gICAgICBAZXh0ZW5kICVxdWFudGl0eWJ0bi1sZWZ0LWJvcmRlcnJhZGl1cztcclxuICB9XHJcbn1cclxuLmlucHV0LWdyb3VwLWFwcGVuZCB7XHJcbiAgICAuaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgICAgICAgQGV4dGVuZCAlcXVhbnRpdHlidG4tcmlnaHQtYm9yZGVycmFkaXVzO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucHJvZHVjdC1wcmljZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgLmN1cnJlbnQtY3VycmVuY3ktc3ltYm9sIHtcclxuICAgIHRvcDogLTQuMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLnByaWNlLXZhbHVlIHtcclxuICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcblxyXG4gICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLW91dGxpbmUge1xyXG4gIGNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdvbGRlbnRoZW1lLXBhbmVsLWJhY2tncm91bmQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDNweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAmOmFjdGl2ZSxcclxuICAmOmhvdmVyLFxyXG4gICY6Zm9jdXMge1xyXG4gICAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRnb2xkZW50aGVtZS1wYW5lbC1iYWNrZ3JvdW5kO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgfVxyXG4gICY6YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLWN1c3RvbXNlY29uZGFyeSB7XHJcbiAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXJ0ZXh0LWNvbG9yO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICBib3JkZXItY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXJ0ZXh0LWNvbG9yO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiAzcHggMTBweCAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggJGJveC1zaGFkb3ctY29sb3I7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIFxyXG4gICY6YWN0aXZlLFxyXG4gICY6aG92ZXIsXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBjb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlcnRleHQtY29sb3I7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgICBib3JkZXItY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXJ0ZXh0LWNvbG9yO1xyXG4gIH1cclxuICAmOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcclxuICB9XHJcblxyXG59XHJcblxyXG4uYnRuLWNvbG9yLTEge1xyXG4gIGNvbG9yOiAkYnV0dG9uLXRoZW1lLWNvbG9yO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRidG4tb3V0bGluZS1jb2xvcjE7XHJcbiAgYm9yZGVyLWNvbG9yOiAkYnRuLW91dGxpbmUtY29sb3IxO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuXHJcbiAgJjpob3ZlcixcclxuICAmOmFjdGl2ZSxcclxuICAmOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6ICRidG4tb3V0bGluZS1jb2xvcjEtYWN0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogJGJ1dHRvbi10aGVtZS1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkYnRuLW91dGxpbmUtY29sb3IxLWFjdGl2ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXJlbW92ZWJ0biB7XHJcbiAgQGV4dGVuZCAuYnRuLW91dGxpbmUtY3VzdG9tc2Vjb25kYXJ5O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgJjphY3RpdmUsXHJcbiAgJjpob3ZlcixcclxuICAmOmZvY3VzIHtcclxuICB9XHJcbn1cclxuXHJcbi5mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG5cclxuICAuY2xvc2Uge1xyXG4gICAgbWFyZ2luOiAtMC41cmVtIC0wLjJyZW0gLTFyZW0gYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICAubW9kYWwtY29udGVudCB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkZ29sZGVudGhlbWUtYm9yZGVyLXJhZGl1cztcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkZ29sZGVudGhlbWUtYm9yZGVyLXJhZGl1cztcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRnb2xkZW50aGVtZS1ib3JkZXItcmFkaXVzO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRnb2xkZW50aGVtZS1ib3JkZXItcmFkaXVzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdvbGRlbnRoZW1lLXBhbmVsLWJhY2tncm91bmQ7XHJcbiB9XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXgtaGVpZ2h0OiA1ODBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuYnV0dG9uW2Rpc2FibGVkXSB7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udG90YWwtdGV4dCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ub3V0LW9mLXN0b2NrIHtcclxuICAub3V0LW9mLXN0b2NrLXRleHQge1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGNvbG9yOiAkYnRuLW91dGxpbmUtdGV4dGNvbG9yO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkb3V0T2ZTdG9jay1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICBib3JkZXI6IHNvbGlkIDFweCAkYm94LXNoYWRvdy1jb2xvcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgcGFkZGluZzogNi41cHggMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1tb2RhbCB7XHJcbiAgQGV4dGVuZCAuYnRuLW91dGxpbmU7XHJcbn1cclxuXHJcbi5wYWdlLWhlYWRpbmcge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcclxuICBjb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICB9XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAge1xyXG4gIC5hbGVydC1kaXNtaXNzaWJsZSB7XHJcbiAgICAuY2xvc2Uge1xyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuYWxlcnQtaW5mbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVydGV4dC1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGdvbGRlbnRoZW1lLWJvcmRlci1yYWRpdXM7XHJcbiB9XHJcbn1cclxuXHJcbi5rdXBpcGFrd2Ege1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkaW1nLXBhdGggKyAna3VwaXBha3dhLnBuZycpO1xyXG59XHJcblxyXG4ucG90dGFsaSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCRpbWctcGF0aCArICdwb3R0YWxpLnBuZycpO1xyXG59XHJcblxyXG4ua2hhbHZpeWEge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkaW1nLXBhdGggKyAna2hhbHZpeWEucG5nJyk7XHJcbn1cclxuXHJcbi5kaXNwbGF5LWlubGluZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7IFxyXG4gIH1cclxufVxyXG5cclxuLyotLS0tZmlyZWNyYWNrZXJzIGFuaW1hdGlvbiAtLS0qL1xyXG4kcGFydGljbGVzOiA1MDtcclxuJHdpZHRoOiA1MDA7XHJcbiRoZWlnaHQ6IDUwMDtcclxuXHJcbi8vIENyZWF0ZSB0aGUgZXhwbG9zaW9uLi4uXHJcbiRib3gtc2hhZG93OiAoKTtcclxuJGJveC1zaGFkb3cyOiAoKTtcclxuQGZvciAkaSBmcm9tIDAgdGhyb3VnaCAkcGFydGljbGVzIHtcclxuICAkYm94LXNoYWRvdzogJGJveC1zaGFkb3csXHJcbiAgICAgICAgICAgICAgIHJhbmRvbSgkd2lkdGgpLSR3aWR0aCAvIDIgKyBweFxyXG4gICAgICAgICAgICAgICByYW5kb20oJGhlaWdodCktJGhlaWdodCAvIDEuMiArIHB4XHJcbiAgICAgICAgICAgICAgIGhzbChyYW5kb20oMzYwKSwgMTAwLCA1MCk7XHJcbiAgJGJveC1zaGFkb3cyOiAkYm94LXNoYWRvdzIsIDAgMCAjZmZmXHJcbn1cclxuQG1peGluIGtleWZyYW1lcyAoJGFuaW1hdGlvbk5hbWUpIHtcclxuICAgIEAtd2Via2l0LWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgQC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxuXHJcbiAgICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxuXHJcbiAgICBALW1zLWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgQGtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBhbmltYXRpb24tZGVsYXkgKCRzZXR0aW5ncykge1xyXG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6ICRzZXR0aW5ncztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAkc2V0dGluZ3M7XHJcbiAgICAtby1hbmltYXRpb24tZGVsYXk6ICRzZXR0aW5ncztcclxuICAgIC1tcy1hbmltYXRpb24tZGVsYXk6ICRzZXR0aW5ncztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogJHNldHRpbmdzO1xyXG59XHJcblxyXG5AbWl4aW4gYW5pbWF0aW9uLWR1cmF0aW9uICgkc2V0dGluZ3MpIHtcclxuICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAkc2V0dGluZ3M7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogJHNldHRpbmdzO1xyXG4gICAgLW8tYW5pbWF0aW9uLWR1cmF0aW9uOiAkc2V0dGluZ3M7XHJcbiAgICAtbXMtYW5pbWF0aW9uLWR1cmF0aW9uOiAkc2V0dGluZ3M7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246ICRzZXR0aW5ncztcclxufVxyXG5cclxuQG1peGluIGFuaW1hdGlvbiAoJHNldHRpbmdzKSB7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogJHNldHRpbmdzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246ICRzZXR0aW5ncztcclxuICAgIC1vLWFuaW1hdGlvbjogJHNldHRpbmdzO1xyXG4gICAgLW1zLWFuaW1hdGlvbjogJHNldHRpbmdzO1xyXG4gICAgYW5pbWF0aW9uOiAkc2V0dGluZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2Zvcm0gKCRzZXR0aW5ncykge1xyXG4gICAgdHJhbnNmb3JtOiAkc2V0dGluZ3M7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogJHNldHRpbmdzO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICRzZXR0aW5ncztcclxuICAgIC1vLXRyYW5zZm9ybTogJHNldHRpbmdzO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogJHNldHRpbmdzO1xyXG59XHJcblxyXG4ucHlybyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4ucHlybyA+IC5iZWZvcmUsIC5weXJvID4gLmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDVweDtcclxuICBoZWlnaHQ6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm94LXNoYWRvdzogJGJveC1zaGFkb3cyO1xyXG4gIEBpbmNsdWRlIGFuaW1hdGlvbigoMXMgYmFuZyBlYXNlLW91dCBpbmZpbml0ZSBiYWNrd2FyZHMsIDFzIGdyYXZpdHkgZWFzZS1pbiBpbmZpbml0ZSBiYWNrd2FyZHMsIDVzIHBvc2l0aW9uIGxpbmVhciBpbmZpbml0ZSBiYWNrd2FyZHMpKTtcclxufVxyXG4gICAgXHJcbi5weXJvID4gLmFmdGVyIHtcclxuICBAaW5jbHVkZSBhbmltYXRpb24tZGVsYXkoKDEuMjVzLCAxLjI1cywgMS4yNXMpKTtcclxuICBAaW5jbHVkZSBhbmltYXRpb24tZHVyYXRpb24oKDEuMjVzLCAxLjI1cywgNi4yNXMpKTtcclxufVxyXG4gICAgICAgIFxyXG5AaW5jbHVkZSBrZXlmcmFtZXMoYmFuZykge1xyXG4gIHRvIHtcclxuICAgIGJveC1zaGFkb3c6JGJveC1zaGFkb3c7XHJcbiAgfVxyXG59XHJcbiAgICBcclxuQGluY2x1ZGUga2V5ZnJhbWVzKGdyYXZpdHkpICB7XHJcbiAgdG8ge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZVkoMjAwcHgpKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcbiAgICBcclxuQGluY2x1ZGUga2V5ZnJhbWVzKHBvc2l0aW9uKSB7XHJcbiAgMCUsIDE5LjklIHtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbiAgfVxyXG4gIDIwJSwgMzkuOSUge1xyXG4gICAgbWFyZ2luLXRvcDogNDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICB9XHJcbiAgNDAlLCA1OS45JSB7ICBcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA3MCVcclxuICB9XHJcbiAgNjAlLCA3OS45JSB7ICBcclxuICAgIG1hcmdpbi10b3A6IDMwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgfVxyXG4gIDgwJSwgOTkuOSUgeyAgXHJcbiAgICBtYXJnaW4tdG9wOiAzMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogODAlO1xyXG4gIH1cclxufVxyXG5cclxuIiwiLyogY29uc3QgdmFsdWVzICovXG4vKiBjb25zdCB2YWx1ZXMgKi9cbi5pbnB1dC1ncm91cC1wcmVwZW5kIC5pbnB1dC1ncm91cC10ZXh0IHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbn1cblxuLmlucHV0LWdyb3VwLWFwcGVuZCAuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbn1cblxuLmJ0bi1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLmVkaXQtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZWRpdC1pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIH1cbn1cblxuLmRlbGV0ZS1pY29uIHtcbiAgY29sb3I6ICNjZTQ1NDU7XG59XG5cbi5uby1wYWRkaW5nIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5uby1wYWRkaW5nLWxlZnQge1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubm8tcGFkZGluZy1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uZW1wdHktZGF0YSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRlZmF1bHQtaW1nLWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5jYXJ0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiA2NCU7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMTBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNhcnQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG59XG4uY2FydC1jb250YWluZXIgLnByb2R1Y3Qtb3JkZXJlZC1kYXRlY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAucHJvZHVjdC1vcmRlcmVkLWRhdGVjb250YWluZXIgLm9yZGVyZWQtZGF0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZDk3NGYgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogNXB4O1xufVxuLmNhcnQtY29udGFpbmVyIC5wcm9kdWN0LWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMnB4IGdhaW5zYm9ybztcbiAgYmFja2dyb3VuZDogI2UzZGZjZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAucHJvZHVjdC1pdGVtIC51c2VyLWRldGFpbHMge1xuICBjb2xvcjogIzMxM2UyNCAhaW1wb3J0YW50O1xuICBib3JkZXI6IHNvbGlkIDFweCAjYWQ5NzRmO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNhcnQtY29udGFpbmVyIC5wcm9kdWN0LWl0ZW0gLnVzZXItZGV0YWlscyAucGhvbmUtbnVtYmVyIHtcbiAgY29sb3I6IGdyZWVuICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJ0LWNvbnRhaW5lciAucHJvZHVjdC1pdGVtIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbi5jYXJ0LWNvbnRhaW5lciAucHJvZHVjdC1pbWctY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAucHJvZHVjdC1pbWctY29udGFpbmVyIC5wcm9kdWN0LWltYWdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLmNhcnQtY29udGFpbmVyIC5wcm9kdWN0LWltZy1jb250YWluZXIgLnByb2R1Y3QtaW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmNhcnQtY29udGFpbmVyIC5wcm9kdWN0LWltZyB7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IHNvbGlkIDFweCAjZGNkY2RjO1xuICBtYXJnaW46IGF1dG8gYXV0byAxNXB4IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG59XG4uY2FydC1jb250YWluZXIgLmFkZC10by1jYXJ0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmNhcnQtY29udGFpbmVyIC5jYXJ0LWl0ZW0tYWN0aW9uYnRucyB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uY2FydC1jb250YWluZXIgLnByb2R1Y3QtbmFtZSB7XG4gIGNvbG9yOiAjYWQ5NzRmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLmNhcnQtY29udGFpbmVyIC5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6ICM3ZTZlNmUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwO1xufVxuLmNhcnQtY29udGFpbmVyIC5kcnVnLXF1YW50aXR5LWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuLmNhcnQtY29udGFpbmVyIC5kcnVnLXF1YW50aXR5LWNvbnRhaW5lciAuZHJ1Zy1xdWFudGl0eS10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY29sb3I6ICMzMTNlMjQ7XG59XG4uY2FydC1jb250YWluZXIgLmRydWctcXVhbnRpdHktY29udGFpbmVyIC5kcnVnLXF1YW50aXR5dmFsdWUtY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAuZHJ1Zy1xdWFudGl0eS1jb250YWluZXIgLmRydWctcXVhbnRpdHl2YWx1ZS1jb250YWluZXIgLmRydWctcXVhbnRpdHktdmFsdWUge1xuICBiYWNrZ3JvdW5kOiAjMzEzZTI0O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNnB4IDEycHggNnB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4uY2FydC1jb250YWluZXIgLnF1YW50aXR5LWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uY2FydC1jb250YWluZXIgLnF1YW50aXR5LWNvbnRhaW5lciAucXR5LWlucHV0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZTNkZmNlO1xuICBib3JkZXItY29sb3I6ICMzMTNlMjQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTNweCkgYW5kIChtYXgtd2lkdGg6IDE1MDBweCkge1xuICAuY2FydC1jb250YWluZXIgLnF1YW50aXR5LWNvbnRhaW5lciAucXVhbnRpdHktZmllbGRzLWNvbnRhaW5lciB7XG4gICAgZmxleC1iYXNpczogMzIlICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAzMiUgIWltcG9ydGFudDtcbiAgfVxufVxuLmNhcnQtY29udGFpbmVyIC5xdWFudGl0eS1jb250YWluZXIgLmlucHV0LWdyb3VwLXRleHQge1xuICB3aWR0aDogMzVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjMzEzZTI0O1xuICBjb2xvcjogI2FkOTc0ZjtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzMxM2UyNDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAucXVhbnRpdHktY29udGFpbmVyIC5xdWFudGl0eS10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjMzEzZTI0O1xufVxuLmNhcnQtY29udGFpbmVyIC5xdWFudGl0eS1yZWFkb25seS1jb250YWluZXIgLnF1YW50aXR5LXZhbHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FkOTc0ZjtcbiAgY29sb3I6ICNmZmY7XG59XG4uY2FydC1jb250YWluZXIgLnF1YW50aXR5LXJlYWRvbmx5LWNvbnRhaW5lciAucXVhbnRpdHktdGV4dCB7XG4gIGNvbG9yOiAjMzEzZTI0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAuYnRuLW91dGxpbmUsIC5jYXJ0LWNvbnRhaW5lciAuYnRuLW91dGxpbmUtbW9kYWwge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnByb2R1Y3QtcHJpY2Uge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnByb2R1Y3QtcHJpY2UgLmN1cnJlbnQtY3VycmVuY3ktc3ltYm9sIHtcbiAgdG9wOiAtNC4yNXB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9kdWN0LXByaWNlIC5wcmljZS12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wcm9kdWN0LXByaWNlIC5wcmljZS12YWx1ZSB7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIH1cbn1cblxuLmJ0bi1vdXRsaW5lLCAuYnRuLW91dGxpbmUtbW9kYWwge1xuICBjb2xvcjogIzMxM2UyNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZGZjZTtcbiAgYm9yZGVyLWNvbG9yOiAjMzEzZTI0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogM3B4IDEwcHggIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJ0bi1vdXRsaW5lOmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLW1vZGFsOmFjdGl2ZSwgLmJ0bi1vdXRsaW5lOmhvdmVyLCAuYnRuLW91dGxpbmUtbW9kYWw6aG92ZXIsIC5idG4tb3V0bGluZTpmb2N1cywgLmJ0bi1vdXRsaW5lLW1vZGFsOmZvY3VzIHtcbiAgY29sb3I6ICMzMTNlMjQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2RmY2U7XG4gIGJvcmRlci1jb2xvcjogIzMxM2UyNDtcbn1cbi5idG4tb3V0bGluZTphY3RpdmUsIC5idG4tb3V0bGluZS1tb2RhbDphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcbn1cblxuLmJ0bi1vdXRsaW5lLWN1c3RvbXNlY29uZGFyeSwgLmJ0bi1vdXRsaW5lLXJlbW92ZWJ0biB7XG4gIGNvbG9yOiAjYWQ5NzRmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzZTI0O1xuICBib3JkZXItY29sb3I6ICNhZDk3NGY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAzcHggMTBweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAycHggMnB4IGdhaW5zYm9ybztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJ0bi1vdXRsaW5lLWN1c3RvbXNlY29uZGFyeTphY3RpdmUsIC5idG4tb3V0bGluZS1yZW1vdmVidG46YWN0aXZlLCAuYnRuLW91dGxpbmUtY3VzdG9tc2Vjb25kYXJ5OmhvdmVyLCAuYnRuLW91dGxpbmUtcmVtb3ZlYnRuOmhvdmVyLCAuYnRuLW91dGxpbmUtY3VzdG9tc2Vjb25kYXJ5OmZvY3VzLCAuYnRuLW91dGxpbmUtcmVtb3ZlYnRuOmZvY3VzIHtcbiAgY29sb3I6ICNhZDk3NGY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTNlMjQ7XG4gIGJvcmRlci1jb2xvcjogI2FkOTc0Zjtcbn1cbi5idG4tb3V0bGluZS1jdXN0b21zZWNvbmRhcnk6YWN0aXZlLCAuYnRuLW91dGxpbmUtcmVtb3ZlYnRuOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xufVxuXG4uYnRuLWNvbG9yLTEge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNEU2NDtcbiAgYm9yZGVyLWNvbG9yOiAjMDA0RTY0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5idG4tY29sb3ItMTpob3ZlciwgLmJ0bi1jb2xvci0xOmFjdGl2ZSwgLmJ0bi1jb2xvci0xOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogIzAwM0Q0RiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICMwMDNENEYgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1vdXRsaW5lLXJlbW92ZWJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgei1pbmRleDogMTAwMDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5tb2RhbC1oZWFkZXIgLmNsb3NlIHtcbiAgbWFyZ2luOiAtMC41cmVtIC0wLjJyZW0gLTFyZW0gYXV0byAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1vZGFsLWNvbnRlbnQge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2RmY2U7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1vZGFsLWJvZHkge1xuICAgIG1heC1oZWlnaHQ6IDU4MHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG59XG5cbmJ1dHRvbltkaXNhYmxlZF0ge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XG59XG5cbi50b3RhbC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xufVxuXG4ub3V0LW9mLXN0b2NrIC5vdXQtb2Ytc3RvY2stdGV4dCB7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICNhOTBiMGI7XG4gIGJvcmRlcjogc29saWQgMXB4IGdhaW5zYm9ybztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogNi41cHggMTBweDtcbn1cblxuLnBhZ2UtaGVhZGluZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzMxM2UyNDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnBhZ2UtaGVhZGluZyB7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIH1cbn1cblxuLmhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIDo6bmctZGVlcCAuYWxlcnQtZGlzbWlzc2libGUgLmNsb3NlIHtcbiAgICB6LWluZGV4OiAwO1xuICB9XG59XG46Om5nLWRlZXAgLmFsZXJ0LWluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzZTI0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjYWQ5NzRmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5rdXBpcGFrd2Ege1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJ+c3JjL2Fzc2V0cy9pbWFnZXMva3VwaXBha3dhLnBuZ1wiKTtcbn1cblxuLnBvdHRhbGkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJ+c3JjL2Fzc2V0cy9pbWFnZXMvcG90dGFsaS5wbmdcIik7XG59XG5cbi5raGFsdml5YSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIn5zcmMvYXNzZXRzL2ltYWdlcy9raGFsdml5YS5wbmdcIik7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gIC5kaXNwbGF5LWlubGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLyotLS0tZmlyZWNyYWNrZXJzIGFuaW1hdGlvbiAtLS0qL1xuLnB5cm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5O1xufVxuXG4ucHlybyA+IC5iZWZvcmUsIC5weXJvID4gLmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmO1xuICAtbW96LWFuaW1hdGlvbjogMXMgYmFuZyBlYXNlLW91dCBpbmZpbml0ZSBiYWNrd2FyZHMsIDFzIGdyYXZpdHkgZWFzZS1pbiBpbmZpbml0ZSBiYWNrd2FyZHMsIDVzIHBvc2l0aW9uIGxpbmVhciBpbmZpbml0ZSBiYWNrd2FyZHM7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAxcyBiYW5nIGVhc2Utb3V0IGluZmluaXRlIGJhY2t3YXJkcywgMXMgZ3Jhdml0eSBlYXNlLWluIGluZmluaXRlIGJhY2t3YXJkcywgNXMgcG9zaXRpb24gbGluZWFyIGluZmluaXRlIGJhY2t3YXJkcztcbiAgLW8tYW5pbWF0aW9uOiAxcyBiYW5nIGVhc2Utb3V0IGluZmluaXRlIGJhY2t3YXJkcywgMXMgZ3Jhdml0eSBlYXNlLWluIGluZmluaXRlIGJhY2t3YXJkcywgNXMgcG9zaXRpb24gbGluZWFyIGluZmluaXRlIGJhY2t3YXJkcztcbiAgLW1zLWFuaW1hdGlvbjogMXMgYmFuZyBlYXNlLW91dCBpbmZpbml0ZSBiYWNrd2FyZHMsIDFzIGdyYXZpdHkgZWFzZS1pbiBpbmZpbml0ZSBiYWNrd2FyZHMsIDVzIHBvc2l0aW9uIGxpbmVhciBpbmZpbml0ZSBiYWNrd2FyZHM7XG4gIGFuaW1hdGlvbjogMXMgYmFuZyBlYXNlLW91dCBpbmZpbml0ZSBiYWNrd2FyZHMsIDFzIGdyYXZpdHkgZWFzZS1pbiBpbmZpbml0ZSBiYWNrd2FyZHMsIDVzIHBvc2l0aW9uIGxpbmVhciBpbmZpbml0ZSBiYWNrd2FyZHM7XG59XG5cbi5weXJvID4gLmFmdGVyIHtcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDEuMjVzLCAxLjI1cywgMS4yNXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxLjI1cywgMS4yNXMsIDEuMjVzO1xuICAtby1hbmltYXRpb24tZGVsYXk6IDEuMjVzLCAxLjI1cywgMS4yNXM7XG4gIC1tcy1hbmltYXRpb24tZGVsYXk6IDEuMjVzLCAxLjI1cywgMS4yNXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMS4yNXMsIDEuMjVzLCAxLjI1cztcbiAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDEuMjVzLCAxLjI1cywgNi4yNXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjI1cywgMS4yNXMsIDYuMjVzO1xuICAtby1hbmltYXRpb24tZHVyYXRpb246IDEuMjVzLCAxLjI1cywgNi4yNXM7XG4gIC1tcy1hbmltYXRpb24tZHVyYXRpb246IDEuMjVzLCAxLjI1cywgNi4yNXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS4yNXMsIDEuMjVzLCA2LjI1cztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGJhbmcge1xuICB0byB7XG4gICAgYm94LXNoYWRvdzogNjVweCAtMjMwLjY2NjY2NjY2NjdweCAjMDBlZWZmLCAtODlweCAtMjYuNjY2NjY2NjY2N3B4ICMwOTAwZmYsIC0xNTVweCAtMzcwLjY2NjY2NjY2NjdweCAjZTEwMGZmLCAtMTc3cHggLTExNS42NjY2NjY2NjY3cHggIzZhZmYwMCwgLTIwN3B4IC0xMTIuNjY2NjY2NjY2N3B4ICM4NDAwZmYsIC03MHB4IC0xNTUuNjY2NjY2NjY2N3B4ICM4MGZmMDAsIC0xMDJweCAtMzY5LjY2NjY2NjY2NjdweCAjZmYwZDAwLCAtMTE5cHggMjguMzMzMzMzMzMzM3B4ICNmZmEyMDAsIC0xNXB4IC03OS42NjY2NjY2NjY3cHggI2ZmYzQwMCwgMjQxcHggLTM2My42NjY2NjY2NjY3cHggIzQwZmYwMCwgLTIwNHB4IC04Mi42NjY2NjY2NjY3cHggI2IzMDBmZiwgLTU1cHggLTI0MS42NjY2NjY2NjY3cHggIzQ4MDBmZiwgLTE5OXB4IDYuMzMzMzMzMzMzM3B4ICNiMzAwZmYsIDEwNHB4IC0yOTguNjY2NjY2NjY2N3B4ICM5NWZmMDAsIDIyOHB4IC0xNjAuNjY2NjY2NjY2N3B4ICNmZjA0MDAsIC0yMTRweCAtMTgwLjY2NjY2NjY2NjdweCAjYWVmZjAwLCAxNnB4IC0xMzUuNjY2NjY2NjY2N3B4IGRlZXBza3libHVlLCA0OXB4IC01NS42NjY2NjY2NjY3cHggIzAwZmY0NCwgOHB4IC0yNTcuNjY2NjY2NjY2N3B4ICNmZjAwZDksIC0xODJweCAtMTA2LjY2NjY2NjY2NjdweCBmdWNoc2lhLCAxMTdweCAtMjYzLjY2NjY2NjY2NjdweCAjMDBmZmM0LCAyMDFweCAtMjIuNjY2NjY2NjY2N3B4ICNjY2ZmMDAsIDE0MHB4IC0xNTguNjY2NjY2NjY2N3B4ICNmZmIzMDAsIDI0N3B4IC0yNTUuNjY2NjY2NjY2N3B4ICMwMGE2ZmYsIDIzM3B4IC0xMzUuNjY2NjY2NjY2N3B4ICNmZjAwZDAsIC0xNjZweCAtMjQ5LjY2NjY2NjY2NjdweCAjMDBlYWZmLCAxMTJweCAtMjM0LjY2NjY2NjY2NjdweCAjOTEwMGZmLCAtNTRweCAtMTI5LjY2NjY2NjY2NjdweCAjZmZlZTAwLCAxMTdweCAtMjEuNjY2NjY2NjY2N3B4ICM5ZDAwZmYsIDE4NnB4IC0zMjQuNjY2NjY2NjY2N3B4ICMwMDFhZmYsIC0yNnB4IC04My42NjY2NjY2NjY3cHggIzAwNmFmZiwgLTIyNnB4IDQ5LjMzMzMzMzMzMzNweCAjN2JmZjAwLCAxNzNweCAtMTQ2LjY2NjY2NjY2NjdweCAjMDA5NWZmLCA4MXB4IC0yMTguNjY2NjY2NjY2N3B4ICMwMGZmM2MsIC0xNDlweCAtMS42NjY2NjY2NjY3cHggI2ZmNzMwMCwgNTZweCAtOTMuNjY2NjY2NjY2N3B4ICNhYTAwZmYsIC04OHB4IC01LjY2NjY2NjY2NjdweCAjZmZhZTAwLCAtMzRweCA2LjMzMzMzMzMzMzNweCAjMDQwMGZmLCAtMTc4cHggLTY0LjY2NjY2NjY2NjdweCAjZmZkOTAwLCAxODlweCAtNjQuNjY2NjY2NjY2N3B4ICNhYTAwZmYsIDIzMXB4IC0zNDUuNjY2NjY2NjY2N3B4ICNmZjAwZDksIC02OHB4IC0zNS42NjY2NjY2NjY3cHggIzYyMDBmZiwgLTIwNXB4IC0zMy42NjY2NjY2NjY3cHggI2ZmYTYwMCwgLTE1NXB4IC01NC42NjY2NjY2NjY3cHggIzA0MDBmZiwgNzRweCAtMjk4LjY2NjY2NjY2NjdweCAjMDBmZjgwLCAyMzFweCAtMjEwLjY2NjY2NjY2NjdweCAjMDBmZmM0LCAyMTlweCAtMjg3LjY2NjY2NjY2NjdweCAjZmYwMDc3LCAtMTU2cHggNjcuMzMzMzMzMzMzM3B4ICMwMDQwZmYsIC0xMTZweCAxMS4zMzMzMzMzMzMzcHggZnVjaHNpYSwgLTgxcHggLTI0NC42NjY2NjY2NjY3cHggIzQwZmYwMCwgLTgxcHggLTQwMi42NjY2NjY2NjY3cHggIzVlMDBmZjtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGJhbmcge1xuICB0byB7XG4gICAgYm94LXNoYWRvdzogNjVweCAtMjMwLjY2NjY2NjY2NjdweCAjMDBlZWZmLCAtODlweCAtMjYuNjY2NjY2NjY2N3B4ICMwOTAwZmYsIC0xNTVweCAtMzcwLjY2NjY2NjY2NjdweCAjZTEwMGZmLCAtMTc3cHggLTExNS42NjY2NjY2NjY3cHggIzZhZmYwMCwgLTIwN3B4IC0xMTIuNjY2NjY2NjY2N3B4ICM4NDAwZmYsIC03MHB4IC0xNTUuNjY2NjY2NjY2N3B4ICM4MGZmMDAsIC0xMDJweCAtMzY5LjY2NjY2NjY2NjdweCAjZmYwZDAwLCAtMTE5cHggMjguMzMzMzMzMzMzM3B4ICNmZmEyMDAsIC0xNXB4IC03OS42NjY2NjY2NjY3cHggI2ZmYzQwMCwgMjQxcHggLTM2My42NjY2NjY2NjY3cHggIzQwZmYwMCwgLTIwNHB4IC04Mi42NjY2NjY2NjY3cHggI2IzMDBmZiwgLTU1cHggLTI0MS42NjY2NjY2NjY3cHggIzQ4MDBmZiwgLTE5OXB4IDYuMzMzMzMzMzMzM3B4ICNiMzAwZmYsIDEwNHB4IC0yOTguNjY2NjY2NjY2N3B4ICM5NWZmMDAsIDIyOHB4IC0xNjAuNjY2NjY2NjY2N3B4ICNmZjA0MDAsIC0yMTRweCAtMTgwLjY2NjY2NjY2NjdweCAjYWVmZjAwLCAxNnB4IC0xMzUuNjY2NjY2NjY2N3B4IGRlZXBza3libHVlLCA0OXB4IC01NS42NjY2NjY2NjY3cHggIzAwZmY0NCwgOHB4IC0yNTcuNjY2NjY2NjY2N3B4ICNmZjAwZDksIC0xODJweCAtMTA2LjY2NjY2NjY2NjdweCBmdWNoc2lhLCAxMTdweCAtMjYzLjY2NjY2NjY2NjdweCAjMDBmZmM0LCAyMDFweCAtMjIuNjY2NjY2NjY2N3B4ICNjY2ZmMDAsIDE0MHB4IC0xNTguNjY2NjY2NjY2N3B4ICNmZmIzMDAsIDI0N3B4IC0yNTUuNjY2NjY2NjY2N3B4ICMwMGE2ZmYsIDIzM3B4IC0xMzUuNjY2NjY2NjY2N3B4ICNmZjAwZDAsIC0xNjZweCAtMjQ5LjY2NjY2NjY2NjdweCAjMDBlYWZmLCAxMTJweCAtMjM0LjY2NjY2NjY2NjdweCAjOTEwMGZmLCAtNTRweCAtMTI5LjY2NjY2NjY2NjdweCAjZmZlZTAwLCAxMTdweCAtMjEuNjY2NjY2NjY2N3B4ICM5ZDAwZmYsIDE4NnB4IC0zMjQuNjY2NjY2NjY2N3B4ICMwMDFhZmYsIC0yNnB4IC04My42NjY2NjY2NjY3cHggIzAwNmFmZiwgLTIyNnB4IDQ5LjMzMzMzMzMzMzNweCAjN2JmZjAwLCAxNzNweCAtMTQ2LjY2NjY2NjY2NjdweCAjMDA5NWZmLCA4MXB4IC0yMTguNjY2NjY2NjY2N3B4ICMwMGZmM2MsIC0xNDlweCAtMS42NjY2NjY2NjY3cHggI2ZmNzMwMCwgNTZweCAtOTMuNjY2NjY2NjY2N3B4ICNhYTAwZmYsIC04OHB4IC01LjY2NjY2NjY2NjdweCAjZmZhZTAwLCAtMzRweCA2LjMzMzMzMzMzMzNweCAjMDQwMGZmLCAtMTc4cHggLTY0LjY2NjY2NjY2NjdweCAjZmZkOTAwLCAxODlweCAtNjQuNjY2NjY2NjY2N3B4ICNhYTAwZmYsIDIzMXB4IC0zNDUuNjY2NjY2NjY2N3B4ICNmZjAwZDksIC02OHB4IC0zNS42NjY2NjY2NjY3cHggIzYyMDBmZiwgLTIwNXB4IC0zMy42NjY2NjY2NjY3cHggI2ZmYTYwMCwgLTE1NXB4IC01NC42NjY2NjY2NjY3cHggIzA0MDBmZiwgNzRweCAtMjk4LjY2NjY2NjY2NjdweCAjMDBmZjgwLCAyMzFweCAtMjEwLjY2NjY2NjY2NjdweCAjMDBmZmM0LCAyMTlweCAtMjg3LjY2NjY2NjY2NjdweCAjZmYwMDc3LCAtMTU2cHggNjcuMzMzMzMzMzMzM3B4ICMwMDQwZmYsIC0xMTZweCAxMS4zMzMzMzMzMzMzcHggZnVjaHNpYSwgLTgxcHggLTI0NC42NjY2NjY2NjY3cHggIzQwZmYwMCwgLTgxcHggLTQwMi42NjY2NjY2NjY3cHggIzVlMDBmZjtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBiYW5nIHtcbiAgdG8ge1xuICAgIGJveC1zaGFkb3c6IDY1cHggLTIzMC42NjY2NjY2NjY3cHggIzAwZWVmZiwgLTg5cHggLTI2LjY2NjY2NjY2NjdweCAjMDkwMGZmLCAtMTU1cHggLTM3MC42NjY2NjY2NjY3cHggI2UxMDBmZiwgLTE3N3B4IC0xMTUuNjY2NjY2NjY2N3B4ICM2YWZmMDAsIC0yMDdweCAtMTEyLjY2NjY2NjY2NjdweCAjODQwMGZmLCAtNzBweCAtMTU1LjY2NjY2NjY2NjdweCAjODBmZjAwLCAtMTAycHggLTM2OS42NjY2NjY2NjY3cHggI2ZmMGQwMCwgLTExOXB4IDI4LjMzMzMzMzMzMzNweCAjZmZhMjAwLCAtMTVweCAtNzkuNjY2NjY2NjY2N3B4ICNmZmM0MDAsIDI0MXB4IC0zNjMuNjY2NjY2NjY2N3B4ICM0MGZmMDAsIC0yMDRweCAtODIuNjY2NjY2NjY2N3B4ICNiMzAwZmYsIC01NXB4IC0yNDEuNjY2NjY2NjY2N3B4ICM0ODAwZmYsIC0xOTlweCA2LjMzMzMzMzMzMzNweCAjYjMwMGZmLCAxMDRweCAtMjk4LjY2NjY2NjY2NjdweCAjOTVmZjAwLCAyMjhweCAtMTYwLjY2NjY2NjY2NjdweCAjZmYwNDAwLCAtMjE0cHggLTE4MC42NjY2NjY2NjY3cHggI2FlZmYwMCwgMTZweCAtMTM1LjY2NjY2NjY2NjdweCBkZWVwc2t5Ymx1ZSwgNDlweCAtNTUuNjY2NjY2NjY2N3B4ICMwMGZmNDQsIDhweCAtMjU3LjY2NjY2NjY2NjdweCAjZmYwMGQ5LCAtMTgycHggLTEwNi42NjY2NjY2NjY3cHggZnVjaHNpYSwgMTE3cHggLTI2My42NjY2NjY2NjY3cHggIzAwZmZjNCwgMjAxcHggLTIyLjY2NjY2NjY2NjdweCAjY2NmZjAwLCAxNDBweCAtMTU4LjY2NjY2NjY2NjdweCAjZmZiMzAwLCAyNDdweCAtMjU1LjY2NjY2NjY2NjdweCAjMDBhNmZmLCAyMzNweCAtMTM1LjY2NjY2NjY2NjdweCAjZmYwMGQwLCAtMTY2cHggLTI0OS42NjY2NjY2NjY3cHggIzAwZWFmZiwgMTEycHggLTIzNC42NjY2NjY2NjY3cHggIzkxMDBmZiwgLTU0cHggLTEyOS42NjY2NjY2NjY3cHggI2ZmZWUwMCwgMTE3cHggLTIxLjY2NjY2NjY2NjdweCAjOWQwMGZmLCAxODZweCAtMzI0LjY2NjY2NjY2NjdweCAjMDAxYWZmLCAtMjZweCAtODMuNjY2NjY2NjY2N3B4ICMwMDZhZmYsIC0yMjZweCA0OS4zMzMzMzMzMzMzcHggIzdiZmYwMCwgMTczcHggLTE0Ni42NjY2NjY2NjY3cHggIzAwOTVmZiwgODFweCAtMjE4LjY2NjY2NjY2NjdweCAjMDBmZjNjLCAtMTQ5cHggLTEuNjY2NjY2NjY2N3B4ICNmZjczMDAsIDU2cHggLTkzLjY2NjY2NjY2NjdweCAjYWEwMGZmLCAtODhweCAtNS42NjY2NjY2NjY3cHggI2ZmYWUwMCwgLTM0cHggNi4zMzMzMzMzMzMzcHggIzA0MDBmZiwgLTE3OHB4IC02NC42NjY2NjY2NjY3cHggI2ZmZDkwMCwgMTg5cHggLTY0LjY2NjY2NjY2NjdweCAjYWEwMGZmLCAyMzFweCAtMzQ1LjY2NjY2NjY2NjdweCAjZmYwMGQ5LCAtNjhweCAtMzUuNjY2NjY2NjY2N3B4ICM2MjAwZmYsIC0yMDVweCAtMzMuNjY2NjY2NjY2N3B4ICNmZmE2MDAsIC0xNTVweCAtNTQuNjY2NjY2NjY2N3B4ICMwNDAwZmYsIDc0cHggLTI5OC42NjY2NjY2NjY3cHggIzAwZmY4MCwgMjMxcHggLTIxMC42NjY2NjY2NjY3cHggIzAwZmZjNCwgMjE5cHggLTI4Ny42NjY2NjY2NjY3cHggI2ZmMDA3NywgLTE1NnB4IDY3LjMzMzMzMzMzMzNweCAjMDA0MGZmLCAtMTE2cHggMTEuMzMzMzMzMzMzM3B4IGZ1Y2hzaWEsIC04MXB4IC0yNDQuNjY2NjY2NjY2N3B4ICM0MGZmMDAsIC04MXB4IC00MDIuNjY2NjY2NjY2N3B4ICM1ZTAwZmY7XG4gIH1cbn1cbkAtbXMta2V5ZnJhbWVzIGJhbmcge1xuICB0byB7XG4gICAgYm94LXNoYWRvdzogNjVweCAtMjMwLjY2NjY2NjY2NjdweCAjMDBlZWZmLCAtODlweCAtMjYuNjY2NjY2NjY2N3B4ICMwOTAwZmYsIC0xNTVweCAtMzcwLjY2NjY2NjY2NjdweCAjZTEwMGZmLCAtMTc3cHggLTExNS42NjY2NjY2NjY3cHggIzZhZmYwMCwgLTIwN3B4IC0xMTIuNjY2NjY2NjY2N3B4ICM4NDAwZmYsIC03MHB4IC0xNTUuNjY2NjY2NjY2N3B4ICM4MGZmMDAsIC0xMDJweCAtMzY5LjY2NjY2NjY2NjdweCAjZmYwZDAwLCAtMTE5cHggMjguMzMzMzMzMzMzM3B4ICNmZmEyMDAsIC0xNXB4IC03OS42NjY2NjY2NjY3cHggI2ZmYzQwMCwgMjQxcHggLTM2My42NjY2NjY2NjY3cHggIzQwZmYwMCwgLTIwNHB4IC04Mi42NjY2NjY2NjY3cHggI2IzMDBmZiwgLTU1cHggLTI0MS42NjY2NjY2NjY3cHggIzQ4MDBmZiwgLTE5OXB4IDYuMzMzMzMzMzMzM3B4ICNiMzAwZmYsIDEwNHB4IC0yOTguNjY2NjY2NjY2N3B4ICM5NWZmMDAsIDIyOHB4IC0xNjAuNjY2NjY2NjY2N3B4ICNmZjA0MDAsIC0yMTRweCAtMTgwLjY2NjY2NjY2NjdweCAjYWVmZjAwLCAxNnB4IC0xMzUuNjY2NjY2NjY2N3B4IGRlZXBza3libHVlLCA0OXB4IC01NS42NjY2NjY2NjY3cHggIzAwZmY0NCwgOHB4IC0yNTcuNjY2NjY2NjY2N3B4ICNmZjAwZDksIC0xODJweCAtMTA2LjY2NjY2NjY2NjdweCBmdWNoc2lhLCAxMTdweCAtMjYzLjY2NjY2NjY2NjdweCAjMDBmZmM0LCAyMDFweCAtMjIuNjY2NjY2NjY2N3B4ICNjY2ZmMDAsIDE0MHB4IC0xNTguNjY2NjY2NjY2N3B4ICNmZmIzMDAsIDI0N3B4IC0yNTUuNjY2NjY2NjY2N3B4ICMwMGE2ZmYsIDIzM3B4IC0xMzUuNjY2NjY2NjY2N3B4ICNmZjAwZDAsIC0xNjZweCAtMjQ5LjY2NjY2NjY2NjdweCAjMDBlYWZmLCAxMTJweCAtMjM0LjY2NjY2NjY2NjdweCAjOTEwMGZmLCAtNTRweCAtMTI5LjY2NjY2NjY2NjdweCAjZmZlZTAwLCAxMTdweCAtMjEuNjY2NjY2NjY2N3B4ICM5ZDAwZmYsIDE4NnB4IC0zMjQuNjY2NjY2NjY2N3B4ICMwMDFhZmYsIC0yNnB4IC04My42NjY2NjY2NjY3cHggIzAwNmFmZiwgLTIyNnB4IDQ5LjMzMzMzMzMzMzNweCAjN2JmZjAwLCAxNzNweCAtMTQ2LjY2NjY2NjY2NjdweCAjMDA5NWZmLCA4MXB4IC0yMTguNjY2NjY2NjY2N3B4ICMwMGZmM2MsIC0xNDlweCAtMS42NjY2NjY2NjY3cHggI2ZmNzMwMCwgNTZweCAtOTMuNjY2NjY2NjY2N3B4ICNhYTAwZmYsIC04OHB4IC01LjY2NjY2NjY2NjdweCAjZmZhZTAwLCAtMzRweCA2LjMzMzMzMzMzMzNweCAjMDQwMGZmLCAtMTc4cHggLTY0LjY2NjY2NjY2NjdweCAjZmZkOTAwLCAxODlweCAtNjQuNjY2NjY2NjY2N3B4ICNhYTAwZmYsIDIzMXB4IC0zNDUuNjY2NjY2NjY2N3B4ICNmZjAwZDksIC02OHB4IC0zNS42NjY2NjY2NjY3cHggIzYyMDBmZiwgLTIwNXB4IC0zMy42NjY2NjY2NjY3cHggI2ZmYTYwMCwgLTE1NXB4IC01NC42NjY2NjY2NjY3cHggIzA0MDBmZiwgNzRweCAtMjk4LjY2NjY2NjY2NjdweCAjMDBmZjgwLCAyMzFweCAtMjEwLjY2NjY2NjY2NjdweCAjMDBmZmM0LCAyMTlweCAtMjg3LjY2NjY2NjY2NjdweCAjZmYwMDc3LCAtMTU2cHggNjcuMzMzMzMzMzMzM3B4ICMwMDQwZmYsIC0xMTZweCAxMS4zMzMzMzMzMzMzcHggZnVjaHNpYSwgLTgxcHggLTI0NC42NjY2NjY2NjY3cHggIzQwZmYwMCwgLTgxcHggLTQwMi42NjY2NjY2NjY3cHggIzVlMDBmZjtcbiAgfVxufVxuQGtleWZyYW1lcyBiYW5nIHtcbiAgdG8ge1xuICAgIGJveC1zaGFkb3c6IDY1cHggLTIzMC42NjY2NjY2NjY3cHggIzAwZWVmZiwgLTg5cHggLTI2LjY2NjY2NjY2NjdweCAjMDkwMGZmLCAtMTU1cHggLTM3MC42NjY2NjY2NjY3cHggI2UxMDBmZiwgLTE3N3B4IC0xMTUuNjY2NjY2NjY2N3B4ICM2YWZmMDAsIC0yMDdweCAtMTEyLjY2NjY2NjY2NjdweCAjODQwMGZmLCAtNzBweCAtMTU1LjY2NjY2NjY2NjdweCAjODBmZjAwLCAtMTAycHggLTM2OS42NjY2NjY2NjY3cHggI2ZmMGQwMCwgLTExOXB4IDI4LjMzMzMzMzMzMzNweCAjZmZhMjAwLCAtMTVweCAtNzkuNjY2NjY2NjY2N3B4ICNmZmM0MDAsIDI0MXB4IC0zNjMuNjY2NjY2NjY2N3B4ICM0MGZmMDAsIC0yMDRweCAtODIuNjY2NjY2NjY2N3B4ICNiMzAwZmYsIC01NXB4IC0yNDEuNjY2NjY2NjY2N3B4ICM0ODAwZmYsIC0xOTlweCA2LjMzMzMzMzMzMzNweCAjYjMwMGZmLCAxMDRweCAtMjk4LjY2NjY2NjY2NjdweCAjOTVmZjAwLCAyMjhweCAtMTYwLjY2NjY2NjY2NjdweCAjZmYwNDAwLCAtMjE0cHggLTE4MC42NjY2NjY2NjY3cHggI2FlZmYwMCwgMTZweCAtMTM1LjY2NjY2NjY2NjdweCBkZWVwc2t5Ymx1ZSwgNDlweCAtNTUuNjY2NjY2NjY2N3B4ICMwMGZmNDQsIDhweCAtMjU3LjY2NjY2NjY2NjdweCAjZmYwMGQ5LCAtMTgycHggLTEwNi42NjY2NjY2NjY3cHggZnVjaHNpYSwgMTE3cHggLTI2My42NjY2NjY2NjY3cHggIzAwZmZjNCwgMjAxcHggLTIyLjY2NjY2NjY2NjdweCAjY2NmZjAwLCAxNDBweCAtMTU4LjY2NjY2NjY2NjdweCAjZmZiMzAwLCAyNDdweCAtMjU1LjY2NjY2NjY2NjdweCAjMDBhNmZmLCAyMzNweCAtMTM1LjY2NjY2NjY2NjdweCAjZmYwMGQwLCAtMTY2cHggLTI0OS42NjY2NjY2NjY3cHggIzAwZWFmZiwgMTEycHggLTIzNC42NjY2NjY2NjY3cHggIzkxMDBmZiwgLTU0cHggLTEyOS42NjY2NjY2NjY3cHggI2ZmZWUwMCwgMTE3cHggLTIxLjY2NjY2NjY2NjdweCAjOWQwMGZmLCAxODZweCAtMzI0LjY2NjY2NjY2NjdweCAjMDAxYWZmLCAtMjZweCAtODMuNjY2NjY2NjY2N3B4ICMwMDZhZmYsIC0yMjZweCA0OS4zMzMzMzMzMzMzcHggIzdiZmYwMCwgMTczcHggLTE0Ni42NjY2NjY2NjY3cHggIzAwOTVmZiwgODFweCAtMjE4LjY2NjY2NjY2NjdweCAjMDBmZjNjLCAtMTQ5cHggLTEuNjY2NjY2NjY2N3B4ICNmZjczMDAsIDU2cHggLTkzLjY2NjY2NjY2NjdweCAjYWEwMGZmLCAtODhweCAtNS42NjY2NjY2NjY3cHggI2ZmYWUwMCwgLTM0cHggNi4zMzMzMzMzMzMzcHggIzA0MDBmZiwgLTE3OHB4IC02NC42NjY2NjY2NjY3cHggI2ZmZDkwMCwgMTg5cHggLTY0LjY2NjY2NjY2NjdweCAjYWEwMGZmLCAyMzFweCAtMzQ1LjY2NjY2NjY2NjdweCAjZmYwMGQ5LCAtNjhweCAtMzUuNjY2NjY2NjY2N3B4ICM2MjAwZmYsIC0yMDVweCAtMzMuNjY2NjY2NjY2N3B4ICNmZmE2MDAsIC0xNTVweCAtNTQuNjY2NjY2NjY2N3B4ICMwNDAwZmYsIDc0cHggLTI5OC42NjY2NjY2NjY3cHggIzAwZmY4MCwgMjMxcHggLTIxMC42NjY2NjY2NjY3cHggIzAwZmZjNCwgMjE5cHggLTI4Ny42NjY2NjY2NjY3cHggI2ZmMDA3NywgLTE1NnB4IDY3LjMzMzMzMzMzMzNweCAjMDA0MGZmLCAtMTE2cHggMTEuMzMzMzMzMzMzM3B4IGZ1Y2hzaWEsIC04MXB4IC0yNDQuNjY2NjY2NjY2N3B4ICM0MGZmMDAsIC04MXB4IC00MDIuNjY2NjY2NjY2N3B4ICM1ZTAwZmY7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBncmF2aXR5IHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBncmF2aXR5IHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgZ3Jhdml0eSB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ALW1zLWtleWZyYW1lcyBncmF2aXR5IHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZ3Jhdml0eSB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgcG9zaXRpb24ge1xuICAwJSwgMTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xuICB9XG4gIDIwJSwgMzkuOSUge1xuICAgIG1hcmdpbi10b3A6IDQwJTtcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xuICB9XG4gIDQwJSwgNTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICBtYXJnaW4tbGVmdDogNzAlO1xuICB9XG4gIDYwJSwgNzkuOSUge1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xuICB9XG4gIDgwJSwgOTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICBtYXJnaW4tbGVmdDogODAlO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgcG9zaXRpb24ge1xuICAwJSwgMTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xuICB9XG4gIDIwJSwgMzkuOSUge1xuICAgIG1hcmdpbi10b3A6IDQwJTtcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xuICB9XG4gIDQwJSwgNTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICBtYXJnaW4tbGVmdDogNzAlO1xuICB9XG4gIDYwJSwgNzkuOSUge1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xuICB9XG4gIDgwJSwgOTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICBtYXJnaW4tbGVmdDogODAlO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIHBvc2l0aW9uIHtcbiAgMCUsIDE5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgfVxuICAyMCUsIDM5LjklIHtcbiAgICBtYXJnaW4tdG9wOiA0MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgfVxuICA0MCUsIDU5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDcwJTtcbiAgfVxuICA2MCUsIDc5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgfVxuICA4MCUsIDk5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcbiAgfVxufVxuQC1tcy1rZXlmcmFtZXMgcG9zaXRpb24ge1xuICAwJSwgMTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xuICB9XG4gIDIwJSwgMzkuOSUge1xuICAgIG1hcmdpbi10b3A6IDQwJTtcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xuICB9XG4gIDQwJSwgNTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICBtYXJnaW4tbGVmdDogNzAlO1xuICB9XG4gIDYwJSwgNzkuOSUge1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xuICB9XG4gIDgwJSwgOTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICBtYXJnaW4tbGVmdDogODAlO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHBvc2l0aW9uIHtcbiAgMCUsIDE5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgfVxuICAyMCUsIDM5LjklIHtcbiAgICBtYXJnaW4tdG9wOiA0MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgfVxuICA0MCUsIDU5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDcwJTtcbiAgfVxuICA2MCUsIDc5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgfVxuICA4MCUsIDk5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcbiAgfVxufVxuLnByb2R1Y3QtcGFnZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuLnByb2R1Y3QtcGFnZS1jb250YWluZXIgLnByb2R1Y3QtbGlzdC1jb250YWluZXIgLmFkZHByb2R1Y3QtYnRuLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wcm9kdWN0LXBhZ2UtY29udGFpbmVyIC5wcm9kdWN0LWxpc3QtY29udGFpbmVyIHtcbiAgICBtYXgtaGVpZ2h0OiBpbml0aWFsO1xuICB9XG59XG4ucHJvZHVjdC1wYWdlLWNvbnRhaW5lciAucHJvZHVjdC1saXN0LWNvbnRhaW5lciAuYWRkLWNhdGVnb3J5LWNvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLnByb2R1Y3QtcGFnZS1jb250YWluZXIgLnByb2R1Y3QtbGlzdC1jb250YWluZXIgLnByb2R1Y3QtbGlzdC1pdGVtLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wcm9kdWN0LXBhZ2UtY29udGFpbmVyIC5wcm9kdWN0LWxpc3QtY29udGFpbmVyIC5wcm9kdWN0LWxpc3QtaXRlbS1jb250YWluZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbn1cbi5wcm9kdWN0LXBhZ2UtY29udGFpbmVyIC5wcm9kdWN0LWxpc3QtaXRlbSB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IDJweCBnYWluc2Jvcm87XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXI6IHNvbGlkIDFweCBnYWluc2Jvcm87XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkZmNlO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuLnByb2R1Y3QtcGFnZS1jb250YWluZXIgLnByb2R1Y3QtbGlzdC1pdGVtIC51c2VyLWFjdGlvbi1idG5zIHtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkzcHgpIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpIHtcbiAgLnByb2R1Y3QtcGFnZS1jb250YWluZXIgLnByb2R1Y3QtbGlzdC1pdGVtIC51c2VyLWFjdGlvbi1idG5zIC5pbnB1dC1ncm91cCB7XG4gICAgZmxleC1iYXNpczogNTQlICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiA1NCUgIWltcG9ydGFudDtcbiAgfVxufVxuLnByb2R1Y3QtcGFnZS1jb250YWluZXIgLnByb2R1Y3QtbGlzdC1pdGVtIC51c2VyLWFjdGlvbi1idG5zIC5pbnB1dC1ncm91cC10ZXh0IHtcbiAgd2lkdGg6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogIzMxM2UyNDtcbiAgY29sb3I6ICNhZDk3NGY7XG4gIGJvcmRlcjogc29saWQgMXB4ICMzMTNlMjQ7XG59XG4ucHJvZHVjdC1wYWdlLWNvbnRhaW5lciAucHJvZHVjdC1saXN0LWl0ZW0gLnVzZXItYWN0aW9uLWJ0bnMgLnF0eS1pbnB1dCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNlM2RmY2U7XG4gIGJvcmRlci1jb2xvcjogIzMxM2UyNDtcbn1cbi5wcm9kdWN0LXBhZ2UtY29udGFpbmVyIC5wcm9kdWN0LWxpc3QtaXRlbSAuY2FydC1idXktYnRuY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTVweCAxNXB4IDEwcHggMTVweCAhaW1wb3J0YW50O1xufVxuLnByb2R1Y3QtcGFnZS1jb250YWluZXIgLnByb2R1Y3QtbGlzdC1pdGVtIC5jYXJ0LWJ1eS1idG5jb250YWluZXIgLmJ1eS1idG4ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5wcm9kdWN0LXBhZ2UtY29udGFpbmVyIC5wcm9kdWN0LWxpc3QtaXRlbSAuY2FydC1idXktYnRuY29udGFpbmVyIC5hZGQtY2FydC1idG4ge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAzcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogM3B4ICFpbXBvcnRhbnQ7XG59XG4ucHJvZHVjdC1wYWdlLWNvbnRhaW5lciAucHJvZHVjdC1saXN0LWl0ZW0gLmVkaXQtZGVsZXRlLWJ0bmNvbnRhaW5lciB7XG4gIHZlcnRpY2FsLWFsaWduOiBzdWIgIWltcG9ydGFudDtcbn1cbi5wcm9kdWN0LXBhZ2UtY29udGFpbmVyIC5wcm9kdWN0LWxpc3QtaXRlbSAuaW1nLWRldGFpbHMtY29udGFpbmVyIHtcbiAgcGFkZGluZzogNXB4IDVweCA1cHggNXB4ICFpbXBvcnRhbnQ7XG4gIC8qY2FuIGJlIGFkZGVkIGxhdGVyIGlmIHJlcXVpcmVkICovXG4gIC8qICAgJjpob3ZlciB7XG4gICAgICAudXNlci1hY3Rpb24tYnRucyB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2shaW1wb3J0YW50O1xuICAgICAgfVxuICB9ICovXG59XG4ucHJvZHVjdC1wYWdlLWNvbnRhaW5lciAucHJvZHVjdC1saXN0LWl0ZW0gLnByb2R1Y3QtaW1nLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucHJvZHVjdC1wYWdlLWNvbnRhaW5lciAucHJvZHVjdC1saXN0LWl0ZW0gLnByb2R1Y3QtaW1nIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDcwJTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2Utb3V0O1xufVxuLnByb2R1Y3QtcGFnZS1jb250YWluZXIgLnByb2R1Y3QtbGlzdC1pdGVtIC5wcm9kdWN0LWltZzpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbi5wcm9kdWN0LXBhZ2UtY29udGFpbmVyIC5wcm9kdWN0LWxpc3QtaXRlbSAuYWRkLXRvLWNhcnQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTNweCkgYW5kIChtYXgtd2lkdGg6IDE1MDBweCkge1xuICAucHJvZHVjdC1wYWdlLWNvbnRhaW5lciAucHJvZHVjdC1saXN0LWl0ZW0gLmFkZC10by1jYXJ0IHtcbiAgICBmbGV4LWJhc2lzOiA0NiU7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG59XG4ucHJvZHVjdC1wYWdlLWNvbnRhaW5lciAucHJvZHVjdC1saXN0LWl0ZW0gLnByb2R1Y3QtbmFtZSB7XG4gIGNvbG9yOiAjMzEzZTI0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLnByb2R1Y3QtcGFnZS1jb250YWluZXIgLnByb2R1Y3QtbGlzdC1pdGVtIC5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm1vZGFsLWRpYWxvZyB7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgfVxufSIsIkBpbXBvcnQgXCIuLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzXCI7XHJcbkBpbXBvcnQgXCIuLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbW1vbi5zY3NzXCI7XHJcblxyXG4ucHJvZHVjdC1wYWdlLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcblxyXG4gICAgLnByb2R1Y3QtbGlzdC1jb250YWluZXIge1xyXG5cclxuICAgICAgICAuYWRkcHJvZHVjdC1idG4tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogaW5pdGlhbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hZGQtY2F0ZWdvcnktY29udGFpbmVyIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJvZHVjdC1saXN0LWl0ZW0tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wcm9kdWN0LWxpc3QtaXRlbSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMnB4ICRib3gtc2hhZG93LWNvbG9yO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICRib3gtc2hhZG93LWNvbG9yO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ29sZGVudGhlbWUtcGFuZWwtYmFja2dyb3VuZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5cclxuICAgICAgICAudXNlci1hY3Rpb24tYnRucyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgIC5pbnB1dC1ncm91cCB7XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTNweCkgYW5kIChtYXgtd2lkdGg6IDE1MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDU0JSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTQlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pbnB1dC1ncm91cC10ZXh0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXJ0ZXh0LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucXR5LWlucHV0IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGdvbGRlbnRoZW1lLXBhbmVsLWJhY2tncm91bmQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcnQtYnV5LWJ0bmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMTVweCAxMHB4IDE1cHggIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgIC5idXktYnRuIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYWRkLWNhcnQtYnRuIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZWRpdC1kZWxldGUtYnRuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHN1YiAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltZy1kZXRhaWxzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDVweCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgLypjYW4gYmUgYWRkZWQgbGF0ZXIgaWYgcmVxdWlyZWQgKi9cclxuICAgICAgICAgICAgLyogICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIC51c2VyLWFjdGlvbi1idG5zIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jayFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gKi9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm9kdWN0LWltZy1jb250YWluZXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByb2R1Y3QtaW1nIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2Utb3V0O1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hZGQtdG8tY2FydCB7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTkzcHgpIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpIHtcclxuICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDQ2JTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByb2R1Y3QtbmFtZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJvZHVjdC1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgY29sb3I6ICRnb2xkZW50aGVtZS1wcm9kdWN0ZGVzY3JpcHRpb24tY29sb3IgICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product-list',
          templateUrl: './product-list.component.html',
          styleUrls: ['./product-list.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_loader_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]
        }, {
          type: src_app_services_product_service_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
        }, {
          type: src_app_services_common_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
        }, {
          type: src_app_services_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"]
        }, {
          type: src_app_services_order_service_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"]
        }, {
          type: angular_notifier__WEBPACK_IMPORTED_MODULE_9__["NotifierService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/products-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/products/products-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ProductsRoutingModule */

  /***/
  function srcAppProductsProductsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function () {
      return ProductsRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./product-list/product-list.component */
    "./src/app/products/product-list/product-list.component.ts");

    var routes = [// {
    //   path: 'updateInterviewQuestions',
    //   component: InterviewQuestionsPanelComponent
    // },
    {
      path: '',
      component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"]
    }];

    var ProductsRoutingModule = /*#__PURE__*/_createClass(function ProductsRoutingModule() {
      _classCallCheck(this, ProductsRoutingModule);
    });

    ProductsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProductsRoutingModule
    });
    ProductsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProductsRoutingModule_Factory(t) {
        return new (t || ProductsRoutingModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductsRoutingModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/products.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/products/products.module.ts ***!
    \*********************************************/

  /*! exports provided: ProductsModule */

  /***/
  function srcAppProductsProductsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsModule", function () {
      return ProductsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./product-list/product-list.component */
    "./src/app/products/product-list/product-list.component.ts");
    /* harmony import */


    var _products_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./products-routing.module */
    "./src/app/products/products-routing.module.ts");
    /* harmony import */


    var _modals_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./modals/add-product/add-product.component */
    "./src/app/products/modals/add-product/add-product.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _modals_product_description_product_description_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modals/product-description/product-description.component */
    "./src/app/products/modals/product-description/product-description.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-bootstrap/carousel */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
    /* harmony import */


    var _modals_confirm_order_details_confirm_order_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./modals/confirm-order-details/confirm-order-details.component */
    "./src/app/products/modals/confirm-order-details/confirm-order-details.component.ts");
    /* harmony import */


    var _partial_views_category_menu_category_menu_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../partial_views/category-menu/category-menu.module */
    "./src/app/partial_views/category-menu/category-menu.module.ts");
    /* harmony import */


    var _modals_add_category_add_category_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./modals/add-category/add-category.module */
    "./src/app/products/modals/add-category/add-category.module.ts");
    /* harmony import */


    var _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../shared-module/shared.module */
    "./src/app/shared-module/shared.module.ts");

    var ProductsModule = /*#__PURE__*/_createClass(function ProductsModule() {
      _classCallCheck(this, ProductsModule);
    });

    ProductsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProductsModule
    });
    ProductsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProductsModule_Factory(t) {
        return new (t || ProductsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _partial_views_category_menu_category_menu_module__WEBPACK_IMPORTED_MODULE_10__["CategoryMenuModule"], _modals_add_category_add_category_module__WEBPACK_IMPORTED_MODULE_11__["AddCategoryModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"].forRoot(), _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductsModule, {
        declarations: [_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"], _modals_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_4__["AddProductComponent"], _modals_product_description_product_description_component__WEBPACK_IMPORTED_MODULE_6__["ProductDescriptionComponent"], _modals_confirm_order_details_confirm_order_details_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmOrderDetailsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _partial_views_category_menu_category_menu_module__WEBPACK_IMPORTED_MODULE_10__["CategoryMenuModule"], _modals_add_category_add_category_module__WEBPACK_IMPORTED_MODULE_11__["AddCategoryModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"], _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"], _modals_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_4__["AddProductComponent"], _modals_product_description_product_description_component__WEBPACK_IMPORTED_MODULE_6__["ProductDescriptionComponent"], _modals_confirm_order_details_confirm_order_details_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmOrderDetailsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _partial_views_category_menu_category_menu_module__WEBPACK_IMPORTED_MODULE_10__["CategoryMenuModule"], _modals_add_category_add_category_module__WEBPACK_IMPORTED_MODULE_11__["AddCategoryModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"].forRoot(), _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=products-products-module-es5.js.map