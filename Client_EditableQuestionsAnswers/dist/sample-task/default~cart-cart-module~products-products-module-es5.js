function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~cart-cart-module~products-products-module"], {
  /***/
  "./src/app/products/modals/confirm-order-details/confirm-order-details.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/products/modals/confirm-order-details/confirm-order-details.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: ConfirmOrderDetailsComponent */

  /***/
  function srcAppProductsModalsConfirmOrderDetailsConfirmOrderDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmOrderDetailsComponent", function () {
      return ConfirmOrderDetailsComponent;
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


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var src_app_services_common_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/common-service/common.service */
    "./src/app/services/common-service/common.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function ConfirmOrderDetailsComponent_fa_icon_39_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fa-icon", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmOrderDetailsComponent_fa_icon_39_Template_fa_icon_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.setEditMode(false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faCheckSquare);
      }
    }

    function ConfirmOrderDetailsComponent_fa_icon_40_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fa-icon", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmOrderDetailsComponent_fa_icon_40_Template_fa_icon_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.setEditMode(true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faEdit);
      }
    }

    function ConfirmOrderDetailsComponent_div_50_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx_r2.product.firstName, " ", ctx_r2.product.middleName, " ", ctx_r2.product.lastName, "");
      }
    }

    function ConfirmOrderDetailsComponent_input_53_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfirmOrderDetailsComponent_input_53_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.editedProduct.firstName = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.editedProduct.firstName);
      }
    }

    function ConfirmOrderDetailsComponent_input_55_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfirmOrderDetailsComponent_input_55_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.editedProduct.middleName = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.editedProduct.middleName);
      }
    }

    function ConfirmOrderDetailsComponent_input_57_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfirmOrderDetailsComponent_input_57_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.editedProduct.lastName = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.editedProduct.lastName);
      }
    }

    function ConfirmOrderDetailsComponent_label_62_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.product.userAddress);
      }
    }

    function ConfirmOrderDetailsComponent_input_63_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfirmOrderDetailsComponent_input_63_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.editedProduct.userAddress = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.editedProduct.userAddress);
      }
    }

    function ConfirmOrderDetailsComponent_div_64_label_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.product.regNumber);
      }
    }

    function ConfirmOrderDetailsComponent_div_64_input_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfirmOrderDetailsComponent_div_64_input_9_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r25.editedProduct.regNumber = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r24.editedProduct.regNumber);
      }
    }

    function ConfirmOrderDetailsComponent_div_64_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Practitioner:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Yes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Registration Number:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ConfirmOrderDetailsComponent_div_64_label_8_Template, 2, 1, "label", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ConfirmOrderDetailsComponent_div_64_input_9_Template, 1, 1, "input", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.editMode);
      }
    }

    function ConfirmOrderDetailsComponent_label_69_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.product.userPhoneNumber);
      }
    }

    function ConfirmOrderDetailsComponent_input_70_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfirmOrderDetailsComponent_input_70_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.editedProduct.userPhoneNumber = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10.editedProduct.userPhoneNumber);
      }
    }

    var ConfirmOrderDetailsComponent = /*#__PURE__*/function () {
      function ConfirmOrderDetailsComponent(modalRef, commonService) {
        _classCallCheck(this, ConfirmOrderDetailsComponent);

        this.modalRef = modalRef;
        this.commonService = commonService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEdit"];
        this.faCheckSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCheckSquare"];
        this.editMode = false;
      }

      _createClass(ConfirmOrderDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setCurrentCurrency();
          this.setUserDetailsForMultipleItems();
        }
      }, {
        key: "setCurrentCurrency",
        value: function setCurrentCurrency() {
          this.currentCurrency = this.commonService.currentCurrency;
        }
      }, {
        key: "setUserDetailsForMultipleItems",
        value: function setUserDetailsForMultipleItems() {
          if (!this.product) {
            this.product = {
              userName: this.productList.userName,
              firstName: this.product.firstName,
              middleName: this.product.middleName,
              lastName: this.product.lastName,
              userAddress: this.productList.userAddress,
              userPhoneNumber: this.productList.userPhoneNumber,
              price: this.productList.price,
              deliveryCharges: this.productList.deliveryCharges,
              isPractitioner: this.productList.isPractitioner,
              regNumber: this.productList.regNumber
            };
          }
        }
      }, {
        key: "setEditMode",
        value: function setEditMode(value) {
          this.editMode = value;

          if (value) {
            this.setDetailsToBeEdited();
          } else {
            this.saveEditedDetails();
          }
        }
      }, {
        key: "setDetailsToBeEdited",
        value: function setDetailsToBeEdited() {
          var _a;

          this.editedProduct = Object.assign({
            firstName: this.product.firstName,
            middleName: this.product.middleName,
            lastName: this.product.lastName,
            userAddress: this.product.userAddress,
            userPhoneNumber: this.product.userPhoneNumber
          }, ((_a = this.product) === null || _a === void 0 ? void 0 : _a.isPractitioner) ? {
            regNumber: this.product.regNumber
          } : {});
        }
      }, {
        key: "saveEditedDetails",
        value: function saveEditedDetails() {
          if (this.editedProduct) {
            this.product.firstName = this.editedProduct.firstName, this.product.middleName = this.editedProduct.middleName, this.product.lastName = this.editedProduct.lastName, this.product.userAddress = this.editedProduct.userAddress;
            this.product.userPhoneNumber = this.editedProduct.userPhoneNumber;

            if (this.product.isPractitioner) {
              this.product.regNumber = this.editedProduct.regNumber;
            }

            this.updateEditedUserDetails();
          }
        }
      }, {
        key: "updateEditedUserDetails",
        value: function updateEditedUserDetails() {
          this.commonService.userDetails.firstName = this.editedProduct.firstName;
          this.commonService.userDetails.middleName = this.editedProduct.middleName;
          this.commonService.userDetails.lastName = this.editedProduct.lastName;
          this.commonService.setUserDetails(this.commonService.userDetails);
        }
      }, {
        key: "save",
        value: function save() {
          this.setEditMode(false);
          this.modalRef.hide();
          this.event.emit(this.product);
        }
      }]);

      return ConfirmOrderDetailsComponent;
    }();

    ConfirmOrderDetailsComponent.ɵfac = function ConfirmOrderDetailsComponent_Factory(t) {
      return new (t || ConfirmOrderDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_common_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]));
    };

    ConfirmOrderDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfirmOrderDetailsComponent,
      selectors: [["app-confirm-order-details"]],
      inputs: {
        product: "product",
        productList: "productList"
      },
      decls: 84,
      vars: 16,
      consts: [[1, "confirm-order-modal"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "modal-body"], [1, "fieldset-container", "border", "p-2"], [1, "legend-title", "w-auto"], [1, "user-details", "order-details"], [1, "form-group", "row"], ["for", "categoryName", 1, "col-5", "col-form-label"], [1, "col-7"], ["for", "categoryName", 1, "col-form-label"], [1, "current-currency-symbol"], ["for", "categoryName", 1, "col-5", "col-form-label", "order-total-text"], ["for", "categoryName", 1, "col-form-label", "product-final-price"], [1, "user-details"], ["class", "hand-cursor fa-icon check-icon", 3, "icon", "click", 4, "ngIf"], ["class", "hand-cursor fa-icon edit-icon", 3, "icon", "click", 4, "ngIf"], ["class", "col-7 fullName-container", 4, "ngIf"], [1, "col-7", "fullName-container"], [1, "col-md-4", "col-12", "firstNameField"], ["id", "firstName", "name", "firstName", "placeholder", "First name", "type", "text", "class", "form-control", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["id", "middleName", "name", "middleName", "placeholder", "Middle name", "type", "text", "class", "form-control", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["id", "lastName", "name", "lastName", "placeholder", "Last name", "type", "text", "class", "form-control", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "col-form-label", "for", "categoryName", 4, "ngIf"], ["id", "userAddress", "name", "userAddress", "placeholder", "Enter user address", "type", "text", "class", "form-control", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "form-group row", 4, "ngIf"], ["id", "userPhoneNumber", "name", "userPhoneNumber", "placeholder", "Enter user contact No.", "type", "text", "class", "form-control", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "row", "note-container"], [1, "col-12"], [1, "note-label"], [1, "note-text"], [1, "offset-1", "offset-md-2", "col-md-4", "col-6"], ["name", "submit", "type", "submit", 1, "btn", "btn-outline-modal", "btn-full-width", 3, "click"], [1, "col-md-3", "col-4"], ["name", "submit", "type", "button", 1, "btn", "btn-outline-removebtn", "btn-full-width", 3, "click"], [1, "hand-cursor", "fa-icon", "check-icon", 3, "icon", "click"], [1, "hand-cursor", "fa-icon", "edit-icon", 3, "icon", "click"], ["id", "firstName", "name", "firstName", "placeholder", "First name", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "middleName", "name", "middleName", "placeholder", "Middle name", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "lastName", "name", "lastName", "placeholder", "Last name", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "userAddress", "name", "userAddress", "placeholder", "Enter user address", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "regNumber", "name", "regNumber", "placeholder", "Enter user address", "type", "text", "class", "form-control", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["id", "regNumber", "name", "regNumber", "placeholder", "Enter user address", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "userPhoneNumber", "name", "userPhoneNumber", "placeholder", "Enter user contact No.", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"]],
      template: function ConfirmOrderDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Confirm order details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmOrderDetailsComponent_Template_button_click_4_listener() {
            return ctx.modalRef == null ? null : ctx.modalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "fieldset", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "legend", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Order Summary:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Price ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Delivery Charges");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Delivery charges extra, free delivery only on orders above ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " 1000/- ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Order Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "fieldset", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "legend", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "User Details:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ConfirmOrderDetailsComponent_fa_icon_39_Template, 1, 1, "fa-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ConfirmOrderDetailsComponent_fa_icon_40_Template, 1, 1, "fa-icon", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "User Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Full Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ConfirmOrderDetailsComponent_div_50_Template, 3, 3, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ConfirmOrderDetailsComponent_input_53_Template, 1, 1, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ConfirmOrderDetailsComponent_input_55_Template, 1, 1, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ConfirmOrderDetailsComponent_input_57_Template, 1, 1, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "User Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, ConfirmOrderDetailsComponent_label_62_Template, 2, 1, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, ConfirmOrderDetailsComponent_input_63_Template, 1, 1, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, ConfirmOrderDetailsComponent_div_64_Template, 10, 2, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "User Contact No.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, ConfirmOrderDetailsComponent_label_69_Template, 2, 1, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, ConfirmOrderDetailsComponent_input_70_Template, 1, 1, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Note: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Only cash on delivery is supported");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmOrderDetailsComponent_Template_button_click_79_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Confirm Order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmOrderDetailsComponent_Template_button_click_82_listener() {
            return ctx.modalRef == null ? null : ctx.modalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.price);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentCurrency);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentCurrency);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.product.price, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.userName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product == null ? null : ctx.product.isPractitioner);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editMode);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]],
      styles: [".input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 15px;\n  border-top-left-radius: 15px;\n}\n.input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  border-bottom-right-radius: 15px;\n  border-top-right-radius: 15px;\n}\n.btn-full-width[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n.edit-icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n@media only screen and (max-width: 768px) {\n  .edit-icon[_ngcontent-%COMP%] {\n    margin-right: 15px;\n  }\n}\n.delete-icon[_ngcontent-%COMP%] {\n  color: #ce4545;\n}\n.no-padding[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n.no-padding-left[_ngcontent-%COMP%] {\n  padding-left: 0px !important;\n}\n.no-padding-right[_ngcontent-%COMP%] {\n  padding-right: 0px !important;\n}\n.empty-data[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.default-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n}\n.cart-container[_ngcontent-%COMP%] {\n  width: 64%;\n  margin: auto;\n  padding: 10px;\n}\n@media only screen and (max-width: 768px) {\n  .cart-container[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n.cart-container[_ngcontent-%COMP%]   .product-ordered-datecontainer[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.cart-container[_ngcontent-%COMP%]   .product-ordered-datecontainer[_ngcontent-%COMP%]   .ordered-date[_ngcontent-%COMP%] {\n  background-color: #ad974f !important;\n  color: #fff !important;\n  border-radius: 20px;\n  padding: 5px;\n}\n.cart-container[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  padding-top: 15px;\n  box-shadow: 0px 0px 2px 2px gainsboro;\n  background: #e3dfce;\n  border-radius: 20px;\n}\n.cart-container[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%] {\n  color: #313e24 !important;\n  border: solid 1px #ad974f;\n  border-radius: 15px;\n  padding: 5px;\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n.cart-container[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .phone-number[_ngcontent-%COMP%] {\n  color: green !important;\n}\n@media only screen and (max-width: 768px) {\n  .cart-container[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n.cart-container[_ngcontent-%COMP%]   .product-img-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  display: flex;\n}\n.cart-container[_ngcontent-%COMP%]   .product-img-container[_ngcontent-%COMP%]   .product-images[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  max-width: 100%;\n}\n.cart-container[_ngcontent-%COMP%]   .product-img-container[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.cart-container[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%] {\n  height: 250px;\n  width: 100%;\n  border: solid 1px #dcdcdc;\n  margin: auto auto 15px auto;\n  display: block;\n  border-top-right-radius: 20px;\n  border-top-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n}\n.cart-container[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%] {\n  float: right;\n}\n.cart-container[_ngcontent-%COMP%]   .cart-item-actionbtns[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.cart-container[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  color: #ad974f;\n  font-size: 18px;\n  font-weight: 800;\n  text-transform: capitalize;\n}\n.cart-container[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%] {\n  color: #7e6e6e !important;\n  display: inline-block;\n  width: calc(100% - 30px);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 0;\n}\n.cart-container[_ngcontent-%COMP%]   .drug-quantity-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-family: sans-serif;\n}\n.cart-container[_ngcontent-%COMP%]   .drug-quantity-container[_ngcontent-%COMP%]   .drug-quantity-title[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  color: #313e24;\n}\n.cart-container[_ngcontent-%COMP%]   .drug-quantity-container[_ngcontent-%COMP%]   .drug-quantityvalue-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.cart-container[_ngcontent-%COMP%]   .drug-quantity-container[_ngcontent-%COMP%]   .drug-quantityvalue-container[_ngcontent-%COMP%]   .drug-quantity-value[_ngcontent-%COMP%] {\n  background: #313e24;\n  color: #fff;\n  padding: 6px 12px 6px 12px;\n  border-radius: 20px;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%]   .qty-input[_ngcontent-%COMP%] {\n  text-align: center;\n  background: #e3dfce;\n  border-color: #313e24;\n}\n@media screen and (min-width: 993px) and (max-width: 1500px) {\n  .cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%]   .quantity-fields-container[_ngcontent-%COMP%] {\n    flex-basis: 32% !important;\n    max-width: 32% !important;\n  }\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  width: 35px;\n  cursor: pointer;\n  background: #313e24;\n  color: #ad974f;\n  border: solid 1px #313e24;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%]   .quantity-title[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 16px;\n  margin-bottom: 10px;\n  color: #313e24;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-readonly-container[_ngcontent-%COMP%]   .quantity-value[_ngcontent-%COMP%] {\n  background-color: #ad974f;\n  color: #fff;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-readonly-container[_ngcontent-%COMP%]   .quantity-text[_ngcontent-%COMP%] {\n  color: #313e24;\n  font-weight: bold;\n}\n.cart-container[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%], .cart-container[_ngcontent-%COMP%]   .btn-outline-modal[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.product-price[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.product-price[_ngcontent-%COMP%]   .current-currency-symbol[_ngcontent-%COMP%] {\n  top: -4.25px;\n  font-size: 11px;\n  position: relative;\n}\n.product-price[_ngcontent-%COMP%]   .price-value[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-family: cursive;\n}\n@media only screen and (max-width: 768px) {\n  .product-price[_ngcontent-%COMP%]   .price-value[_ngcontent-%COMP%] {\n    font-family: sans-serif;\n  }\n}\n.btn-outline[_ngcontent-%COMP%], .btn-outline-modal[_ngcontent-%COMP%] {\n  color: #313e24;\n  background-color: #e3dfce;\n  border-color: #313e24;\n  font-weight: bold;\n  letter-spacing: 0.05em;\n  border-radius: 20px;\n  padding: 3px 10px !important;\n  cursor: pointer;\n}\n.btn-outline[_ngcontent-%COMP%]:active, .btn-outline-modal[_ngcontent-%COMP%]:active, .btn-outline[_ngcontent-%COMP%]:hover, .btn-outline-modal[_ngcontent-%COMP%]:hover, .btn-outline[_ngcontent-%COMP%]:focus, .btn-outline-modal[_ngcontent-%COMP%]:focus {\n  color: #313e24;\n  background-color: #e3dfce;\n  border-color: #313e24;\n}\n.btn-outline[_ngcontent-%COMP%]:active, .btn-outline-modal[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n}\n.btn-outline-customsecondary[_ngcontent-%COMP%], .btn-outline-removebtn[_ngcontent-%COMP%] {\n  color: #ad974f;\n  background-color: #313e24;\n  border-color: #ad974f;\n  font-weight: bold;\n  letter-spacing: 0.05em;\n  border-radius: 20px;\n  padding: 3px 10px !important;\n  box-shadow: 2px 2px gainsboro;\n  cursor: pointer;\n}\n.btn-outline-customsecondary[_ngcontent-%COMP%]:active, .btn-outline-removebtn[_ngcontent-%COMP%]:active, .btn-outline-customsecondary[_ngcontent-%COMP%]:hover, .btn-outline-removebtn[_ngcontent-%COMP%]:hover, .btn-outline-customsecondary[_ngcontent-%COMP%]:focus, .btn-outline-removebtn[_ngcontent-%COMP%]:focus {\n  color: #ad974f;\n  background-color: #313e24;\n  border-color: #ad974f;\n}\n.btn-outline-customsecondary[_ngcontent-%COMP%]:active, .btn-outline-removebtn[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n}\n.btn-color-1[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #004E64;\n  border-color: #004E64;\n  font-weight: bold;\n  letter-spacing: 0.05em;\n  border-radius: 0;\n}\n.btn-color-1[_ngcontent-%COMP%]:hover, .btn-color-1[_ngcontent-%COMP%]:active, .btn-color-1[_ngcontent-%COMP%]:focus {\n  background: #003D4F !important;\n  color: #fff !important;\n  border-color: #003D4F !important;\n}\n.btn-outline-removebtn[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 15px;\n  font-weight: 600;\n  z-index: 1000;\n  white-space: pre-wrap;\n  border: none !important;\n}\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  margin: -0.5rem -0.2rem -1rem auto !important;\n}\n  .modal-content {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  background-color: #e3dfce;\n}\n@media only screen and (max-width: 768px) {\n  .modal-body[_ngcontent-%COMP%] {\n    max-height: 580px;\n    overflow: auto;\n  }\n}\nbutton[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed !important;\n}\n.total-text[_ngcontent-%COMP%] {\n  font-weight: 600 !important;\n}\n.out-of-stock[_ngcontent-%COMP%]   .out-of-stock-text[_ngcontent-%COMP%] {\n  margin: auto;\n  text-transform: uppercase;\n  color: #fff;\n  background: #a90b0b;\n  border: solid 1px gainsboro;\n  border-radius: 20px;\n  padding: 6.5px 10px;\n}\n.page-heading[_ngcontent-%COMP%] {\n  text-align: center !important;\n  font-family: cursive;\n  margin-bottom: 15px !important;\n  color: #313e24;\n}\n@media only screen and (max-width: 768px) {\n  .page-heading[_ngcontent-%COMP%] {\n    font-family: sans-serif;\n  }\n}\n.hidden[_ngcontent-%COMP%] {\n  visibility: hidden !important;\n}\n@media only screen and (max-width: 768px) {\n    .alert-dismissible .close {\n    z-index: 0;\n  }\n}\n  .alert-info {\n  background-color: #313e24 !important;\n  color: #ad974f !important;\n  border-radius: 20px;\n}\n.kupipakwa[_ngcontent-%COMP%] {\n  background-image: url('kupipakwa.png');\n}\n.pottali[_ngcontent-%COMP%] {\n  background-image: url('pottali.png');\n}\n.khalviya[_ngcontent-%COMP%] {\n  background-image: url('khalviya.png');\n}\n@media screen and (min-width: 769px) {\n  .display-inline[_ngcontent-%COMP%] {\n    display: inline !important;\n  }\n}\n\n.pyro[_ngcontent-%COMP%] {\n  position: relative !important;\n  z-index: 999;\n}\n.pyro[_ngcontent-%COMP%]    > .before[_ngcontent-%COMP%], .pyro[_ngcontent-%COMP%]    > .after[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  box-shadow: 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff;\n  animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;\n}\n.pyro[_ngcontent-%COMP%]    > .after[_ngcontent-%COMP%] {\n  animation-delay: 1.25s, 1.25s, 1.25s;\n  animation-duration: 1.25s, 1.25s, 6.25s;\n}\n@keyframes bang {\n  to {\n    box-shadow: -65px -324.6666666667px #84ff00, 58px 36.3333333333px #80ff00, 63px -249.6666666667px #0022ff, 45px -23.6666666667px #0091ff, -147px -36.6666666667px #d0ff00, 42px 60.3333333333px #ff003c, 87px -36.6666666667px #00ff04, 1px 64.3333333333px #c400ff, -88px -262.6666666667px #84ff00, -26px -56.6666666667px #003cff, 143px -141.6666666667px #0077ff, 27px -244.6666666667px #ff0084, 147px -117.6666666667px #0900ff, -95px -247.6666666667px #ff00dd, -239px 77.3333333333px #ffee00, 5px -159.6666666667px #ff5500, -199px -386.6666666667px #ff009d, 47px -118.6666666667px #00aaff, -135px -124.6666666667px #fbff00, 54px -66.6666666667px #6aff00, 8px -152.6666666667px #33ff00, 121px -75.6666666667px #73ff00, -182px -310.6666666667px #00ff37, 244px -360.6666666667px #ff0080, 187px -160.6666666667px #c4ff00, -86px -214.6666666667px #00ffbb, 195px -94.6666666667px #ff00cc, 24px -21.6666666667px #b3ff00, 100px -114.6666666667px #00ff3c, 10px -118.6666666667px #d0ff00, -140px 18.3333333333px #ff0084, -168px -47.6666666667px #ff00c4, 180px 59.3333333333px #ff00ea, -213px 9.3333333333px #00ffe1, -12px -142.6666666667px #d0ff00, 222px -127.6666666667px #ff0051, 67px 33.3333333333px #2b00ff, 96px -388.6666666667px #0080ff, 173px -382.6666666667px #7bff00, 23px -319.6666666667px #00e1ff, -30px -128.6666666667px #aeff00, -237px -333.6666666667px #ffb300, 178px 7.3333333333px #00ff1e, 31px -254.6666666667px #a200ff, -6px -54.6666666667px #0400ff, 111px -399.6666666667px #15ff00, -114px -270.6666666667px #00ff73, -149px -254.6666666667px #00ffee, 184px -283.6666666667px #ff3700, -70px 57.3333333333px #ff00d9, -195px -54.6666666667px #0066ff;\n  }\n}\n@keyframes gravity {\n  to {\n    transform: translateY(200px);\n    -moz-transform: translateY(200px);\n    -webkit-transform: translateY(200px);\n    -o-transform: translateY(200px);\n    -ms-transform: translateY(200px);\n    opacity: 0;\n  }\n}\n@keyframes position {\n  0%, 19.9% {\n    margin-top: 10%;\n    margin-left: 40%;\n  }\n  20%, 39.9% {\n    margin-top: 40%;\n    margin-left: 30%;\n  }\n  40%, 59.9% {\n    margin-top: 20%;\n    margin-left: 70%;\n  }\n  60%, 79.9% {\n    margin-top: 30%;\n    margin-left: 20%;\n  }\n  80%, 99.9% {\n    margin-top: 30%;\n    margin-left: 80%;\n  }\n}\n  .order-confirmation .confirm-order-modal .user-details,   .order-confirmation .confirm-order-modal .product-details {\n  padding: 5px;\n}\n@media screen and (min-width: 769px) {\n  .fullName-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n  }\n}\n.fullName-container[_ngcontent-%COMP%]   .firstNameField[_ngcontent-%COMP%] {\n  padding: 0;\n}\n@media screen and (max-width: 768px) {\n  .fullName-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media screen and (min-width: 769px) {\n    .order-confirmation {\n    max-width: 600px;\n  }\n}\n  .order-confirmation .confirm-order-modal .fieldset-container.border {\n  border-color: #c4baba !important;\n}\n  .order-confirmation .confirm-order-modal .product-details {\n  position: relative;\n}\n  .order-confirmation .confirm-order-modal .product-details .form-group {\n  margin-bottom: 10px;\n}\n  .order-confirmation .confirm-order-modal .user-details {\n  position: relative;\n}\n  .order-confirmation .confirm-order-modal .user-details .form-group {\n  margin-bottom: 8px;\n}\n  .order-confirmation .confirm-order-modal .fa-icon {\n  position: absolute;\n  margin-top: -26px;\n  right: 0;\n}\n  .order-confirmation .confirm-order-modal .check-icon {\n  color: green;\n  margin-right: 5px;\n  font-size: 18px;\n}\n  .order-confirmation .confirm-order-modal .order-details .order-total-text {\n  font-weight: 600;\n}\n  .order-confirmation .confirm-order-modal .order-details .product-final-price {\n  background-color: #ad974f !important;\n  color: #fff !important;\n  border-radius: 20px;\n  padding: 5px 10px;\n}\n  .order-confirmation .confirm-order-modal .note-container {\n  margin-bottom: 20px;\n}\n  .legend-title {\n  font-size: 16px;\n  font-weight: 500;\n}\n  .fieldset-container {\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvbW9kYWxzL2NvbmZpcm0tb3JkZXItZGV0YWlscy9FOlxcVUkgcHJvamVjdFxcUmFzYWhyaWRheVxcQ2xpZW50X0VkaXRhYmxlUXVlc3Rpb25zQW5zd2Vycy9zcmNcXGFzc2V0c1xcc2Nzc1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3RzL21vZGFscy9jb25maXJtLW9yZGVyLWRldGFpbHMvRTpcXFVJIHByb2plY3RcXFJhc2FocmlkYXlcXENsaWVudF9FZGl0YWJsZVF1ZXN0aW9uc0Fuc3dlcnMvc3JjXFxhc3NldHNcXHNjc3NcXGNvbW1vbi5zY3NzIiwic3JjL2FwcC9wcm9kdWN0cy9tb2RhbHMvY29uZmlybS1vcmRlci1kZXRhaWxzL2NvbmZpcm0tb3JkZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZHVjdHMvbW9kYWxzL2NvbmZpcm0tb3JkZXItZGV0YWlscy9FOlxcVUkgcHJvamVjdFxcUmFzYWhyaWRheVxcQ2xpZW50X0VkaXRhYmxlUXVlc3Rpb25zQW5zd2Vycy9zcmNcXGFwcFxccHJvZHVjdHNcXG1vZGFsc1xcY29uZmlybS1vcmRlci1kZXRhaWxzXFxjb25maXJtLW9yZGVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0RBLGlCQUFBO0FDcERBO0VBQ0UsK0JBQUE7RUFDQSw0QkFBQTtBQ0ZGO0FES0E7RUFDRSxnQ0FBQTtFQUNBLDZCQUFBO0FDRkY7QURLQTtFQUNFLHNCQUFBO0FDRkY7QURLQTtFQUNFLGlCQUFBO0FDRkY7QURJRTtFQUhGO0lBSUksa0JBQUE7RUNERjtBQUNGO0FESUE7RUFDRSxjRFJrQjtBRU9wQjtBRElBO0VBQ0UsdUJBQUE7QUNERjtBRElBO0VBQ0UsNEJBQUE7QUNERjtBRElBO0VBQ0UsNkJBQUE7QUNERjtBRElBO0VBQ0Usa0JBQUE7QUNERjtBREtFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNGSjtBRE1BO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDSEY7QURLRTtFQUxGO0lBTUksVUFBQTtFQ0ZGO0FBQ0Y7QURJRTtFQUNHLG1CQUFBO0FDRkw7QURHSTtFQUNFLG9DQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkRWc0I7RUNXdEIsWUFBQTtBQ0ROO0FES0U7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkQzQjJCO0VDNEIzQixtQkFBQTtBQ0hKO0FES0k7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0hOO0FES007RUFDRSx1QkFBQTtBQ0hSO0FET0k7RUFwQkY7SUFxQkksWUFBQTtFQ0pKO0FBQ0Y7QURPRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtBQ0xKO0FET0k7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNMTjtBRFFJO0VBQ0UsWUFBQTtBQ05OO0FEVUU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsNkJEN0R3QjtFQzhEeEIsNEJEOUR3QjtFQytEeEIsZ0NEL0R3QjtFQ2dFeEIsK0JEaEV3QjtBRXdENUI7QURZRTtFQUNFLFlBQUE7QUNWSjtBRGFFO0VBQ0csZ0JBQUE7RUFDQSxtQkFBQTtBQ1hMO0FEY0U7RUFDRSxjRHZGNEI7RUN3RjVCLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FDWko7QURlRTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNiSjtBRGdCRTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7QUNkSjtBRGdCSTtFQUNFLGtCQUFBO0VBQ0EsY0Q5RzBCO0FFZ0doQztBRGlCSTtFQUNJLG1CQUFBO0FDZlI7QURpQlE7RUFDSSxtQkRySG9CO0VDc0hwQixXRGhJWTtFQ2lJWiwwQkFBQTtFQUNBLG1CQUFBO0FDZlo7QURvQkU7RUFDRSxtQkFBQTtBQ2xCSjtBRG9CSTtFQUNFLGtCQUFBO0VBQ0EsbUJEaEl5QjtFQ2lJekIscUJEbkkwQjtBRWlIaEM7QURzQk87RUFESDtJQUVNLDBCQUFBO0lBQ0EseUJBQUE7RUNuQlI7QUFDRjtBRHVCSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJEakp3QjtFQ2tKeEIsY0RqSndCO0VDa0p4Qix5QkFBQTtBQ3JCUjtBRHdCSTtFQUNJLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0QxSndCO0FFb0loQztBRDJCSTtFQUNFLHlCRC9KMEI7RUNnSzFCLFdENUptQjtBRW1JekI7QUQyQkk7RUFDRSxjRHBLMEI7RUNxSzFCLGlCQUFBO0FDekJOO0FENkJFO0VBQ0UsaUJBQUE7QUMzQko7QUQwQ0E7RUFDRSxtQkFBQTtBQ3ZDRjtBRHlDRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUN2Q0o7QUR5Q0U7RUFDRyxlQUFBO0VBQ0Esb0JBQUE7QUN2Q0w7QUR5Q0s7RUFKSDtJQUtJLHVCQUFBO0VDdENKO0FBQ0Y7QUQwQ0E7RUFDRSxjRDVNOEI7RUM2TTlCLHlCRDNNNkI7RUM0TTdCLHFCRDlNOEI7RUMrTTlCLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtBQ3ZDRjtBRHlDRTtFQUdFLGNEeE40QjtFQ3lONUIseUJEdk4yQjtFQ3dOM0IscUJEMU40QjtBRWlMaEM7QUQyQ0U7RUFDRSwwQkFBQTtBQ3pDSjtBRDZDQTtFQUNFLGNEak84QjtFQ2tPOUIseUJEbk84QjtFQ29POUIscUJEbk84QjtFQ29POUIsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUMxQ0Y7QUQ0Q0U7RUFHRSxjRDlPNEI7RUMrTzVCLHlCRGhQNEI7RUNpUDVCLHFCRGhQNEI7QUVvTWhDO0FEOENFO0VBQ0UsMEJBQUE7QUM1Q0o7QURpREE7RUFDRSxXRHRTa0I7RUN1U2xCLHlCRDlRbUI7RUMrUW5CLHFCRC9RbUI7RUNnUm5CLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQzlDRjtBRGdERTtFQUdFLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtBQ2hESjtBRG9EQTtFQUVFLGVBQUE7QUNsREY7QUQwREE7RUFDRSxzQkFBQTtBQ3hERjtBRDJEQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQ3hERjtBRDBERTtFQUNFLDZDQUFBO0FDeERKO0FENkRFO0VBQ0UsNEJEN1J3QjtFQzhSeEIsNkJEOVJ3QjtFQytSeEIsK0JEL1J3QjtFQ2dTeEIsZ0NEaFN3QjtFQ2lTeEIseUJEelMyQjtBRStPL0I7QUQrREU7RUFERjtJQUVJLGlCQUFBO0lBQ0EsY0FBQTtFQzNERjtBQUNGO0FEOERBO0VBQ0UsOEJBQUE7QUMzREY7QUQ4REE7RUFDRSwyQkFBQTtBQzNERjtBRCtERTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFdENVVrQjtFQzZVbEIsbUJEclV3QjtFQ3NVeEIsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDNUROO0FEb0VBO0VBQ0UsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0RsVjhCO0FFaVJoQztBRG1FRTtFQU5GO0lBT0ksdUJBQUE7RUNoRUY7QUFDRjtBRG1FQTtFQUNFLDZCQUFBO0FDaEVGO0FEc0VNO0VBREY7SUFFSSxVQUFBO0VDbEVOO0FBQ0Y7QURxRUU7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJEOVZ3QjtBRTJSNUI7QUR1RUE7RUFDRSxzQ0FBQTtBQ3BFRjtBRHVFQTtFQUNFLG9DQUFBO0FDcEVGO0FEdUVBO0VBQ0UscUNBQUE7QUNwRUY7QUR3RUU7RUFERjtJQUVNLDBCQUFBO0VDcEVKO0FBQ0Y7QUR1RUEsaUNBQUE7QUFxRUE7RUFDRSw2QkFBQTtFQUNBLFlBQUE7QUN4SUY7QUQySUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Z0JBbEVjO0VBNkNaLDRIQXNCaUI7QUNwSXJCO0FEdUlBO0VBekNJLG9DQTBDdUI7RUFsQ3ZCLHVDQW1DMEI7QUM1SDlCO0FEdUVJO0VBeURGO0lBQ0UsbW5EQWpGVztFQ3ZCYjtBQUNGO0FENkNJO0VBK0RGO0lBakNFLDRCQWtDbUI7SUFqQ25CLGlDQWlDbUI7SUFoQ25CLG9DQWdDbUI7SUEvQm5CLCtCQStCbUI7SUE5Qm5CLGdDQThCbUI7SUFDbkIsVUFBQTtFQzdERjtBQUNGO0FETEk7RUFzRUY7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUMwQkY7RUR4QkE7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUMwQkY7RUR4QkE7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUMwQkY7RUR4QkE7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUMwQkY7RUR4QkE7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUMwQkY7QUFDRjtBQzlqQkE7RUFDRSxZQUFBO0FEZ2tCRjtBQzVqQkU7RUFERjtJQUVJLGFBQUE7SUFDQSxtQkFBQTtFRGdrQkY7QUFDRjtBQzlqQkU7RUFDRSxVQUFBO0FEZ2tCSjtBQzdqQkU7RUFWRjtJQVdJLHNCQUFBO0VEZ2tCRjtBQUNGO0FDM2pCSTtFQURGO0lBRUksZ0JBQUE7RUQrakJKO0FBQ0Y7QUMzakJRO0VBQ0UsZ0NBQUE7QUQ2akJWO0FDempCTTtFQUNFLGtCQUFBO0FEMmpCUjtBQ3hqQlE7RUFDRSxtQkFBQTtBRDBqQlY7QUN0akJNO0VBQ0Usa0JBQUE7QUR3akJSO0FDcmpCUTtFQUNFLGtCQUFBO0FEdWpCVjtBQ25qQk07RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsUUFBQTtBRHFqQlI7QUNsakJNO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBRG9qQlI7QUNoakJRO0VBQ0UsZ0JBQUE7QURrakJWO0FDL2lCUTtFQUNFLG9DQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FEaWpCVjtBQzdpQk07RUFDRSxtQkFBQTtBRCtpQlI7QUMxaUJFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FENGlCSjtBQ3ppQkU7RUFDRSxtQkFBQTtBRDJpQkoiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9tb2RhbHMvY29uZmlybS1vcmRlci1kZXRhaWxzL2NvbmZpcm0tb3JkZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRoZWFkZXItdGhlbWUtYmFja2dyb3VuZDojZmJmYmZiO1xyXG4kaGVhZGVyLXRoZW1lLWNvbG9yOiNkODQzMTU7XHJcbiRidXR0b24tdGhlbWUtYmFja2dyb3VuZDojZjA3YzI5O1xyXG4kYnV0dG9uLXRoZW1lLWNvbG9yOiNmZmY7XHJcbiRzZWFyY2hCdG4tdGhlbWUtYmFja2dyb3VuZDojMjhhNzQ1O1xyXG4kc2VhcmNoQnRuLXRoZW1lLWNvbG9yOiNmZmY7XHJcbiRxdWVzdGlvbnMtdGhlbWUtY29sb3I6YmxhY2s7XHJcbiRzaG93SGlkZVRvZ2dsZUljb24tY29sb3I6I2YwN2MyOTtcclxuJHNob3dIaWRlLWJ0bi1iYWNrZ3JvdW5kOndoaXRlO1xyXG4kc2hvd0hpZGUtYnRuLWNvbG9yOmdyZXk7XHJcbiRiYWNrZ3JvdW5kLWltZzonYmFja2dyb3VuZC1pbWcucG5nJztcclxuJGltZy1wYXRoOicuL2Fzc2V0cy9pbWFnZXMvJztcclxuJGdvbGRlbnRoZW1lLWJhY2tncm91bmQtaW1nOiAnZ29sZGVudGhlbWUtYmFja2dyb3VuZC1pbWcucG5nJzsgXHJcbiRib2R5LWJhY2tncm91bmQ6ICNmZmY7XHJcbiRwYWdlLWNvbnRhaW5lci1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuJHByb2R1Y3QtbmFtZS1jb2xvcjojMzMzO1xyXG4kcHJvZHVjdC1kZXNjcmlwdGlvbi1jb2xvcjojN2U2ZTZlO1xyXG4kY29udGFpbmVyLWJvcmRlci1jb2xvcjogI2RjZGNkYztcclxuJGJ0bi1saWdodGRlZmF1bHQtYm9yZGVyOiAjZGNkY2RjO1xyXG4kZGVsZXRlLWljb24tY29sb3I6ICNjZTQ1NDU7XHJcbiRidG4tZGVmYXVsdDojZjhmOWZhOyBcclxuJGNvbmZpcm0tc3RhdHVzLWJhY2tncm91bmQ6IGFsaWNlQmx1ZTtcclxuJGNoZWNrLWljb24tY29sb3I6IGdyZWVuO1xyXG4kcGVuZGluZ2Nsb2NrLWljb24tY29sb3I6ICM1OGI2ZDU7XHJcbiRwZW5kaW5nLXN0YXR1cy1iYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG4kcHJvZHVjdC1ob3Zlci1ib3JkZXI6IGJsYWNrO1xyXG4kZ29sZGVudGhlbWUtcHJvZHVjdC1ob3ZlcjogI2VlY2Q1ZjtcclxuJGJ0bi1vdXRsaW5lLWNvbG9yOiAjNGZiZmE4O1xyXG4kYnRuLW91dGxpbmUtY29sb3IxOiAjMDA0RTY0O1xyXG4kYnRuLW91dGxpbmUtY29sb3IxLWFjdGl2ZTogIzAwM0Q0RjtcclxuJGNvbnRhY3QtdXMtZm9vdGVyOiAjZWRmMGY1O1xyXG4kY29weXJpZ2h0LWZvb3RlcjogIzMxM2UyNDtcclxuJGdvbGRlbnRoZW1lLWNvcHlyaWdodC1mb290ZXI6ICMzMTNlMjQ7XHJcbiRjb250YWN0LXVzLWZvb3RlcmNvbG9yOiAjMjEyNTI5O1xyXG4kY29udGFjdHVzLWxpbmtpY29uLWNvbG9yOiAjMDA1YzUwO1xyXG4kY29udGFjdC11cy1ib3JkZXI6IGdhaW5zYm9ybztcclxuJGJveC1zaGFkb3ctY29sb3I6IGdhaW5zYm9ybztcclxuJGJ0bi1vdXRsaW5lLXRleHRjb2xvcjogI2ZmZjtcclxuJGJ0bi1vdXRsaW5lc2Vjb25kYXJ5LWJvcmRlcmhvdmVyOiAjMDA2NDAwO1xyXG4kYnRuLW91dGxpbmUtYmFja2dyb3VuZGhvdmVyOiAjM2Q4ZDdjO1xyXG4kYnRuLXNlYXJjaC1iYWNrZ3JvdW5kOiAjMzc3ZDZlOyBcclxuJGhlYWRlci1ib3gtc2hhZG93Y29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiRidG4tb3V0bGluZS1yZW1vdmVidG46IGluZGlhbnJlZDtcclxuJHBob25lbnVtYmVyLWxpbmstY29sb3I6IGdyZWVuO1xyXG4kY2FydC1zdGlja3ktYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxuJG91dE9mU3RvY2stYmFja2dyb3VuZC1jb2xvcjogI2E5MGIwYjtcclxuJGNhcnQtaWNvbi1jb2xvcjogI2E5MGIwYjtcclxuJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kOiAjMzEzZTI0O1xyXG4kZ29sZGVudGhlbWUtaGVhZGVydGV4dC1jb2xvcjogICNhZDk3NGY7XHJcbiRnb2xkZW50aGVtZS1wYW5lbC1iYWNrZ3JvdW5kOiAjZTNkZmNlO1xyXG4kZ29sZGVudGhlbWUtcHJvZHVjdGRlc2NyaXB0aW9uLWNvbG9yOiAjMjMxZjIwO1xyXG4kZ29sZGVudGhlbWUtcHJvZHVjdGRlc2NyaXB0aW9uLWNvbG9yOiMzMzM7XHJcbiRnb2xkZW50aGVtZS1iYWRnZS10ZXh0OiAjZmZmO1xyXG4kZ29sZGVudGhlbWUtZm9vdGVyLWNvbG9yOiAjYjViMTk2O1xyXG4kZ29sZGVudGhlbWUtY29uZmlybW1vZGFsLWJvcmRlcmNvbG9yOiAjYzRiYWJhO1xyXG4kZ29sZGVudGhlbWUtY2Fyb3VzZWx0ZXh0LWNvbG9yOiAjYmViODljO1xyXG4vKiBjb25zdCB2YWx1ZXMgKi9cclxuJGdvbGRlbnRoZW1lLWJvcmRlci1yYWRpdXM6IDIwcHg7IiwiQGltcG9ydCBcIi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbiRpbWctcGF0aDogJ35zcmMvYXNzZXRzL2ltYWdlcy8nO1xyXG5cclxuJXF1YW50aXR5YnRuLWxlZnQtYm9yZGVycmFkaXVzIHtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbiVxdWFudGl0eWJ0bi1yaWdodC1ib3JkZXJyYWRpdXMge1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uYnRuLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5lZGl0LWljb24ge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZGVsZXRlLWljb24ge1xyXG4gIGNvbG9yOiAkZGVsZXRlLWljb24tY29sb3I7XHJcbn1cclxuXHJcbi5uby1wYWRkaW5nIHtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5vLXBhZGRpbmctbGVmdCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5vLXBhZGRpbmctcmlnaHQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZW1wdHktZGF0YSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGVmYXVsdC1pbWctY29udGFpbmVyIHtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJ0LWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDY0JTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcblxyXG4gIC5wcm9kdWN0LW9yZGVyZWQtZGF0ZWNvbnRhaW5lciB7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIC5vcmRlcmVkLWRhdGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVydGV4dC1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogJGdvbGRlbnRoZW1lLWJhZGdlLXRleHQgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGdvbGRlbnRoZW1lLWJvcmRlci1yYWRpdXM7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnByb2R1Y3QtaXRlbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAycHggJGJveC1zaGFkb3ctY29sb3I7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZ29sZGVudGhlbWUtcGFuZWwtYmFja2dyb3VuZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblxyXG4gICAgLnVzZXItZGV0YWlscyB7XHJcbiAgICAgIGNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggJGdvbGRlbnRoZW1lLWhlYWRlcnRleHQtY29sb3I7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gICAgICAucGhvbmUtbnVtYmVyIHtcclxuICAgICAgICBjb2xvcjogJHBob25lbnVtYmVyLWxpbmstY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHsgXHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wcm9kdWN0LWltZy1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgLnByb2R1Y3QtaW1hZ2VzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2R1Y3QtaW1nIHtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnByb2R1Y3QtaW1nIHtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICRjb250YWluZXItYm9yZGVyLWNvbG9yO1xyXG4gICAgbWFyZ2luOiBhdXRvIGF1dG8gMTVweCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJGdvbGRlbnRoZW1lLWJvcmRlci1yYWRpdXM7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkZ29sZGVudGhlbWUtYm9yZGVyLXJhZGl1cztcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkZ29sZGVudGhlbWUtYm9yZGVyLXJhZGl1cztcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRnb2xkZW50aGVtZS1ib3JkZXItcmFkaXVzO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAuYWRkLXRvLWNhcnQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgLmNhcnQtaXRlbS1hY3Rpb25idG5zIHtcclxuICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1uYW1lIHtcclxuICAgIGNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVydGV4dC1jb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcblxyXG4gIC5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcclxuICAgIGNvbG9yOiAkcHJvZHVjdC1kZXNjcmlwdGlvbi1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICAuZHJ1Zy1xdWFudGl0eS1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG5cclxuICAgIC5kcnVnLXF1YW50aXR5LXRpdGxlIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICBjb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmRydWctcXVhbnRpdHl2YWx1ZS1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmRydWctcXVhbnRpdHktdmFsdWUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYnRuLW91dGxpbmUtdGV4dGNvbG9yO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA2cHggMTJweCA2cHggMTJweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5xdWFudGl0eS1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBcclxuICAgIC5xdHktaW5wdXQge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRnb2xkZW50aGVtZS1wYW5lbC1iYWNrZ3JvdW5kO1xyXG4gICAgICBib3JkZXItY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICAgIH1cclxuXHJcbiAgICAucXVhbnRpdHktZmllbGRzLWNvbnRhaW5lciB7XHJcbiAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjk5M3B4KSBhbmQgKG1heC13aWR0aDogMTUwMHB4KSB7XHJcbiAgICAgICAgICBmbGV4LWJhc2lzOiAzMiUgIWltcG9ydGFudDtcclxuICAgICAgICAgIG1heC13aWR0aDogMzIlICFpbXBvcnRhbnQ7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gIFxyXG4gICAgLmlucHV0LWdyb3VwLXRleHQge1xyXG4gICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgICAgICAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXJ0ZXh0LWNvbG9yO1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICAgIH1cclxuICBcclxuICAgIC5xdWFudGl0eS10aXRsZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgLnF1YW50aXR5LXJlYWRvbmx5LWNvbnRhaW5lciB7XHJcbiAgICAucXVhbnRpdHktdmFsdWUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVydGV4dC1jb2xvcjtcclxuICAgICAgY29sb3I6ICRnb2xkZW50aGVtZS1iYWRnZS10ZXh0O1xyXG4gICAgfVxyXG4gICAgLnF1YW50aXR5LXRleHQge1xyXG4gICAgICBjb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5idG4tb3V0bGluZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cC1wcmVwZW5kIHtcclxuICAuaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgICAgIEBleHRlbmQgJXF1YW50aXR5YnRuLWxlZnQtYm9yZGVycmFkaXVzO1xyXG4gIH1cclxufVxyXG4uaW5wdXQtZ3JvdXAtYXBwZW5kIHtcclxuICAgIC5pbnB1dC1ncm91cC10ZXh0IHtcclxuICAgICAgICBAZXh0ZW5kICVxdWFudGl0eWJ0bi1yaWdodC1ib3JkZXJyYWRpdXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9kdWN0LXByaWNlIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAuY3VycmVudC1jdXJyZW5jeS1zeW1ib2wge1xyXG4gICAgdG9wOiAtNC4yNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAucHJpY2UtdmFsdWUge1xyXG4gICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuXHJcbiAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZSB7XHJcbiAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ29sZGVudGhlbWUtcGFuZWwtYmFja2dyb3VuZDtcclxuICBib3JkZXItY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogM3B4IDEwcHggIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICY6YWN0aXZlLFxyXG4gICY6aG92ZXIsXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBjb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdvbGRlbnRoZW1lLXBhbmVsLWJhY2tncm91bmQ7XHJcbiAgICBib3JkZXItY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICB9XHJcbiAgJjphY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtY3VzdG9tc2Vjb25kYXJ5IHtcclxuICBjb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlcnRleHQtY29sb3I7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kO1xyXG4gIGJvcmRlci1jb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlcnRleHQtY29sb3I7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDNweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCAkYm94LXNoYWRvdy1jb2xvcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgXHJcbiAgJjphY3RpdmUsXHJcbiAgJjpob3ZlcixcclxuICAmOmZvY3VzIHtcclxuICAgIGNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVydGV4dC1jb2xvcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICAgIGJvcmRlci1jb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlcnRleHQtY29sb3I7XHJcbiAgfVxyXG4gICY6YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5idG4tY29sb3ItMSB7XHJcbiAgY29sb3I6ICRidXR0b24tdGhlbWUtY29sb3I7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJ0bi1vdXRsaW5lLWNvbG9yMTtcclxuICBib3JkZXItY29sb3I6ICRidG4tb3V0bGluZS1jb2xvcjE7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG5cclxuICAmOmhvdmVyLFxyXG4gICY6YWN0aXZlLFxyXG4gICY6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogJGJ0bi1vdXRsaW5lLWNvbG9yMS1hY3RpdmUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAkYnV0dG9uLXRoZW1lLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICRidG4tb3V0bGluZS1jb2xvcjEtYWN0aXZlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtcmVtb3ZlYnRuIHtcclxuICBAZXh0ZW5kIC5idG4tb3V0bGluZS1jdXN0b21zZWNvbmRhcnk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAmOmFjdGl2ZSxcclxuICAmOmhvdmVyLFxyXG4gICY6Zm9jdXMge1xyXG4gIH1cclxufVxyXG5cclxuLmZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcblxyXG4gIC5jbG9zZSB7XHJcbiAgICBtYXJnaW46IC0wLjVyZW0gLTAuMnJlbSAtMXJlbSBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAge1xyXG4gIC5tb2RhbC1jb250ZW50IHtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRnb2xkZW50aGVtZS1ib3JkZXItcmFkaXVzO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRnb2xkZW50aGVtZS1ib3JkZXItcmFkaXVzO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGdvbGRlbnRoZW1lLWJvcmRlci1yYWRpdXM7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGdvbGRlbnRoZW1lLWJvcmRlci1yYWRpdXM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ29sZGVudGhlbWUtcGFuZWwtYmFja2dyb3VuZDtcclxuIH1cclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIG1heC1oZWlnaHQ6IDU4MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG5idXR0b25bZGlzYWJsZWRdIHtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50b3RhbC10ZXh0IHtcclxuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vdXQtb2Ytc3RvY2sge1xyXG4gIC5vdXQtb2Ytc3RvY2stdGV4dCB7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgY29sb3I6ICRidG4tb3V0bGluZS10ZXh0Y29sb3I7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRvdXRPZlN0b2NrLWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgIGJvcmRlcjogc29saWQgMXB4ICRib3gtc2hhZG93LWNvbG9yO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICBwYWRkaW5nOiA2LjVweCAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLW1vZGFsIHtcclxuICBAZXh0ZW5kIC5idG4tb3V0bGluZTtcclxufVxyXG5cclxuLnBhZ2UtaGVhZGluZyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIH1cclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCB7XHJcbiAgLmFsZXJ0LWRpc21pc3NpYmxlIHtcclxuICAgIC5jbG9zZSB7XHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5hbGVydC1pbmZvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXJ0ZXh0LWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkZ29sZGVudGhlbWUtYm9yZGVyLXJhZGl1cztcclxuIH1cclxufVxyXG5cclxuLmt1cGlwYWt3YSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCRpbWctcGF0aCArICdrdXBpcGFrd2EucG5nJyk7XHJcbn1cclxuXHJcbi5wb3R0YWxpIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJGltZy1wYXRoICsgJ3BvdHRhbGkucG5nJyk7XHJcbn1cclxuXHJcbi5raGFsdml5YSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCRpbWctcGF0aCArICdraGFsdml5YS5wbmcnKTtcclxufVxyXG5cclxuLmRpc3BsYXktaW5saW5lIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDsgXHJcbiAgfVxyXG59XHJcblxyXG4vKi0tLS1maXJlY3JhY2tlcnMgYW5pbWF0aW9uIC0tLSovXHJcbiRwYXJ0aWNsZXM6IDUwO1xyXG4kd2lkdGg6IDUwMDtcclxuJGhlaWdodDogNTAwO1xyXG5cclxuLy8gQ3JlYXRlIHRoZSBleHBsb3Npb24uLi5cclxuJGJveC1zaGFkb3c6ICgpO1xyXG4kYm94LXNoYWRvdzI6ICgpO1xyXG5AZm9yICRpIGZyb20gMCB0aHJvdWdoICRwYXJ0aWNsZXMge1xyXG4gICRib3gtc2hhZG93OiAkYm94LXNoYWRvdyxcclxuICAgICAgICAgICAgICAgcmFuZG9tKCR3aWR0aCktJHdpZHRoIC8gMiArIHB4XHJcbiAgICAgICAgICAgICAgIHJhbmRvbSgkaGVpZ2h0KS0kaGVpZ2h0IC8gMS4yICsgcHhcclxuICAgICAgICAgICAgICAgaHNsKHJhbmRvbSgzNjApLCAxMDAsIDUwKTtcclxuICAkYm94LXNoYWRvdzI6ICRib3gtc2hhZG93MiwgMCAwICNmZmZcclxufVxyXG5AbWl4aW4ga2V5ZnJhbWVzICgkYW5pbWF0aW9uTmFtZSkge1xyXG4gICAgQC13ZWJraXQta2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxuXHJcbiAgICBALW1vei1rZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIEAtby1rZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIEAtbXMta2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxuXHJcbiAgICBAa2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGFuaW1hdGlvbi1kZWxheSAoJHNldHRpbmdzKSB7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogJHNldHRpbmdzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6ICRzZXR0aW5ncztcclxuICAgIC1vLWFuaW1hdGlvbi1kZWxheTogJHNldHRpbmdzO1xyXG4gICAgLW1zLWFuaW1hdGlvbi1kZWxheTogJHNldHRpbmdzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAkc2V0dGluZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiBhbmltYXRpb24tZHVyYXRpb24gKCRzZXR0aW5ncykge1xyXG4gICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246ICRzZXR0aW5ncztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAkc2V0dGluZ3M7XHJcbiAgICAtby1hbmltYXRpb24tZHVyYXRpb246ICRzZXR0aW5ncztcclxuICAgIC1tcy1hbmltYXRpb24tZHVyYXRpb246ICRzZXR0aW5ncztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogJHNldHRpbmdzO1xyXG59XHJcblxyXG5AbWl4aW4gYW5pbWF0aW9uICgkc2V0dGluZ3MpIHtcclxuICAgIC1tb3otYW5pbWF0aW9uOiAkc2V0dGluZ3M7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogJHNldHRpbmdzO1xyXG4gICAgLW8tYW5pbWF0aW9uOiAkc2V0dGluZ3M7XHJcbiAgICAtbXMtYW5pbWF0aW9uOiAkc2V0dGluZ3M7XHJcbiAgICBhbmltYXRpb246ICRzZXR0aW5ncztcclxufVxyXG5cclxuQG1peGluIHRyYW5zZm9ybSAoJHNldHRpbmdzKSB7XHJcbiAgICB0cmFuc2Zvcm06ICRzZXR0aW5ncztcclxuICAgIC1tb3otdHJhbnNmb3JtOiAkc2V0dGluZ3M7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogJHNldHRpbmdzO1xyXG4gICAgLW8tdHJhbnNmb3JtOiAkc2V0dGluZ3M7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiAkc2V0dGluZ3M7XHJcbn1cclxuXHJcbi5weXJvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbi5weXJvID4gLmJlZm9yZSwgLnB5cm8gPiAuYWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogNXB4O1xyXG4gIGhlaWdodDogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3gtc2hhZG93OiAkYm94LXNoYWRvdzI7XHJcbiAgQGluY2x1ZGUgYW5pbWF0aW9uKCgxcyBiYW5nIGVhc2Utb3V0IGluZmluaXRlIGJhY2t3YXJkcywgMXMgZ3Jhdml0eSBlYXNlLWluIGluZmluaXRlIGJhY2t3YXJkcywgNXMgcG9zaXRpb24gbGluZWFyIGluZmluaXRlIGJhY2t3YXJkcykpO1xyXG59XHJcbiAgICBcclxuLnB5cm8gPiAuYWZ0ZXIge1xyXG4gIEBpbmNsdWRlIGFuaW1hdGlvbi1kZWxheSgoMS4yNXMsIDEuMjVzLCAxLjI1cykpO1xyXG4gIEBpbmNsdWRlIGFuaW1hdGlvbi1kdXJhdGlvbigoMS4yNXMsIDEuMjVzLCA2LjI1cykpO1xyXG59XHJcbiAgICAgICAgXHJcbkBpbmNsdWRlIGtleWZyYW1lcyhiYW5nKSB7XHJcbiAgdG8ge1xyXG4gICAgYm94LXNoYWRvdzokYm94LXNoYWRvdztcclxuICB9XHJcbn1cclxuICAgIFxyXG5AaW5jbHVkZSBrZXlmcmFtZXMoZ3Jhdml0eSkgIHtcclxuICB0byB7XHJcbiAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWSgyMDBweCkpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuICAgIFxyXG5AaW5jbHVkZSBrZXlmcmFtZXMocG9zaXRpb24pIHtcclxuICAwJSwgMTkuOSUge1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICB9XHJcbiAgMjAlLCAzOS45JSB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gIH1cclxuICA0MCUsIDU5LjklIHsgIFxyXG4gICAgbWFyZ2luLXRvcDogMjAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDcwJVxyXG4gIH1cclxuICA2MCUsIDc5LjklIHsgIFxyXG4gICAgbWFyZ2luLXRvcDogMzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICB9XHJcbiAgODAlLCA5OS45JSB7ICBcclxuICAgIG1hcmdpbi10b3A6IDMwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XHJcbiAgfVxyXG59XHJcblxyXG4iLCIvKiBjb25zdCB2YWx1ZXMgKi9cbi5pbnB1dC1ncm91cC1wcmVwZW5kIC5pbnB1dC1ncm91cC10ZXh0IHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbn1cblxuLmlucHV0LWdyb3VwLWFwcGVuZCAuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbn1cblxuLmJ0bi1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLmVkaXQtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZWRpdC1pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIH1cbn1cblxuLmRlbGV0ZS1pY29uIHtcbiAgY29sb3I6ICNjZTQ1NDU7XG59XG5cbi5uby1wYWRkaW5nIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5uby1wYWRkaW5nLWxlZnQge1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubm8tcGFkZGluZy1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uZW1wdHktZGF0YSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRlZmF1bHQtaW1nLWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5jYXJ0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiA2NCU7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMTBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNhcnQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG59XG4uY2FydC1jb250YWluZXIgLnByb2R1Y3Qtb3JkZXJlZC1kYXRlY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAucHJvZHVjdC1vcmRlcmVkLWRhdGVjb250YWluZXIgLm9yZGVyZWQtZGF0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZDk3NGYgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogNXB4O1xufVxuLmNhcnQtY29udGFpbmVyIC5wcm9kdWN0LWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMnB4IGdhaW5zYm9ybztcbiAgYmFja2dyb3VuZDogI2UzZGZjZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAucHJvZHVjdC1pdGVtIC51c2VyLWRldGFpbHMge1xuICBjb2xvcjogIzMxM2UyNCAhaW1wb3J0YW50O1xuICBib3JkZXI6IHNvbGlkIDFweCAjYWQ5NzRmO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNhcnQtY29udGFpbmVyIC5wcm9kdWN0LWl0ZW0gLnVzZXItZGV0YWlscyAucGhvbmUtbnVtYmVyIHtcbiAgY29sb3I6IGdyZWVuICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJ0LWNvbnRhaW5lciAucHJvZHVjdC1pdGVtIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbi5jYXJ0LWNvbnRhaW5lciAucHJvZHVjdC1pbWctY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAucHJvZHVjdC1pbWctY29udGFpbmVyIC5wcm9kdWN0LWltYWdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLmNhcnQtY29udGFpbmVyIC5wcm9kdWN0LWltZy1jb250YWluZXIgLnByb2R1Y3QtaW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmNhcnQtY29udGFpbmVyIC5wcm9kdWN0LWltZyB7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IHNvbGlkIDFweCAjZGNkY2RjO1xuICBtYXJnaW46IGF1dG8gYXV0byAxNXB4IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG59XG4uY2FydC1jb250YWluZXIgLmFkZC10by1jYXJ0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmNhcnQtY29udGFpbmVyIC5jYXJ0LWl0ZW0tYWN0aW9uYnRucyB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uY2FydC1jb250YWluZXIgLnByb2R1Y3QtbmFtZSB7XG4gIGNvbG9yOiAjYWQ5NzRmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLmNhcnQtY29udGFpbmVyIC5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6ICM3ZTZlNmUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwO1xufVxuLmNhcnQtY29udGFpbmVyIC5kcnVnLXF1YW50aXR5LWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuLmNhcnQtY29udGFpbmVyIC5kcnVnLXF1YW50aXR5LWNvbnRhaW5lciAuZHJ1Zy1xdWFudGl0eS10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY29sb3I6ICMzMTNlMjQ7XG59XG4uY2FydC1jb250YWluZXIgLmRydWctcXVhbnRpdHktY29udGFpbmVyIC5kcnVnLXF1YW50aXR5dmFsdWUtY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAuZHJ1Zy1xdWFudGl0eS1jb250YWluZXIgLmRydWctcXVhbnRpdHl2YWx1ZS1jb250YWluZXIgLmRydWctcXVhbnRpdHktdmFsdWUge1xuICBiYWNrZ3JvdW5kOiAjMzEzZTI0O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNnB4IDEycHggNnB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4uY2FydC1jb250YWluZXIgLnF1YW50aXR5LWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uY2FydC1jb250YWluZXIgLnF1YW50aXR5LWNvbnRhaW5lciAucXR5LWlucHV0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZTNkZmNlO1xuICBib3JkZXItY29sb3I6ICMzMTNlMjQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTNweCkgYW5kIChtYXgtd2lkdGg6IDE1MDBweCkge1xuICAuY2FydC1jb250YWluZXIgLnF1YW50aXR5LWNvbnRhaW5lciAucXVhbnRpdHktZmllbGRzLWNvbnRhaW5lciB7XG4gICAgZmxleC1iYXNpczogMzIlICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAzMiUgIWltcG9ydGFudDtcbiAgfVxufVxuLmNhcnQtY29udGFpbmVyIC5xdWFudGl0eS1jb250YWluZXIgLmlucHV0LWdyb3VwLXRleHQge1xuICB3aWR0aDogMzVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjMzEzZTI0O1xuICBjb2xvcjogI2FkOTc0ZjtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzMxM2UyNDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAucXVhbnRpdHktY29udGFpbmVyIC5xdWFudGl0eS10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjMzEzZTI0O1xufVxuLmNhcnQtY29udGFpbmVyIC5xdWFudGl0eS1yZWFkb25seS1jb250YWluZXIgLnF1YW50aXR5LXZhbHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FkOTc0ZjtcbiAgY29sb3I6ICNmZmY7XG59XG4uY2FydC1jb250YWluZXIgLnF1YW50aXR5LXJlYWRvbmx5LWNvbnRhaW5lciAucXVhbnRpdHktdGV4dCB7XG4gIGNvbG9yOiAjMzEzZTI0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAuYnRuLW91dGxpbmUsIC5jYXJ0LWNvbnRhaW5lciAuYnRuLW91dGxpbmUtbW9kYWwge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnByb2R1Y3QtcHJpY2Uge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnByb2R1Y3QtcHJpY2UgLmN1cnJlbnQtY3VycmVuY3ktc3ltYm9sIHtcbiAgdG9wOiAtNC4yNXB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9kdWN0LXByaWNlIC5wcmljZS12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wcm9kdWN0LXByaWNlIC5wcmljZS12YWx1ZSB7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIH1cbn1cblxuLmJ0bi1vdXRsaW5lLCAuYnRuLW91dGxpbmUtbW9kYWwge1xuICBjb2xvcjogIzMxM2UyNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZGZjZTtcbiAgYm9yZGVyLWNvbG9yOiAjMzEzZTI0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogM3B4IDEwcHggIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJ0bi1vdXRsaW5lOmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLW1vZGFsOmFjdGl2ZSwgLmJ0bi1vdXRsaW5lOmhvdmVyLCAuYnRuLW91dGxpbmUtbW9kYWw6aG92ZXIsIC5idG4tb3V0bGluZTpmb2N1cywgLmJ0bi1vdXRsaW5lLW1vZGFsOmZvY3VzIHtcbiAgY29sb3I6ICMzMTNlMjQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2RmY2U7XG4gIGJvcmRlci1jb2xvcjogIzMxM2UyNDtcbn1cbi5idG4tb3V0bGluZTphY3RpdmUsIC5idG4tb3V0bGluZS1tb2RhbDphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcbn1cblxuLmJ0bi1vdXRsaW5lLWN1c3RvbXNlY29uZGFyeSwgLmJ0bi1vdXRsaW5lLXJlbW92ZWJ0biB7XG4gIGNvbG9yOiAjYWQ5NzRmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzZTI0O1xuICBib3JkZXItY29sb3I6ICNhZDk3NGY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAzcHggMTBweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAycHggMnB4IGdhaW5zYm9ybztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJ0bi1vdXRsaW5lLWN1c3RvbXNlY29uZGFyeTphY3RpdmUsIC5idG4tb3V0bGluZS1yZW1vdmVidG46YWN0aXZlLCAuYnRuLW91dGxpbmUtY3VzdG9tc2Vjb25kYXJ5OmhvdmVyLCAuYnRuLW91dGxpbmUtcmVtb3ZlYnRuOmhvdmVyLCAuYnRuLW91dGxpbmUtY3VzdG9tc2Vjb25kYXJ5OmZvY3VzLCAuYnRuLW91dGxpbmUtcmVtb3ZlYnRuOmZvY3VzIHtcbiAgY29sb3I6ICNhZDk3NGY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTNlMjQ7XG4gIGJvcmRlci1jb2xvcjogI2FkOTc0Zjtcbn1cbi5idG4tb3V0bGluZS1jdXN0b21zZWNvbmRhcnk6YWN0aXZlLCAuYnRuLW91dGxpbmUtcmVtb3ZlYnRuOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xufVxuXG4uYnRuLWNvbG9yLTEge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNEU2NDtcbiAgYm9yZGVyLWNvbG9yOiAjMDA0RTY0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5idG4tY29sb3ItMTpob3ZlciwgLmJ0bi1jb2xvci0xOmFjdGl2ZSwgLmJ0bi1jb2xvci0xOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogIzAwM0Q0RiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICMwMDNENEYgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1vdXRsaW5lLXJlbW92ZWJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgei1pbmRleDogMTAwMDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5tb2RhbC1oZWFkZXIgLmNsb3NlIHtcbiAgbWFyZ2luOiAtMC41cmVtIC0wLjJyZW0gLTFyZW0gYXV0byAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1vZGFsLWNvbnRlbnQge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2RmY2U7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1vZGFsLWJvZHkge1xuICAgIG1heC1oZWlnaHQ6IDU4MHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG59XG5cbmJ1dHRvbltkaXNhYmxlZF0ge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XG59XG5cbi50b3RhbC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xufVxuXG4ub3V0LW9mLXN0b2NrIC5vdXQtb2Ytc3RvY2stdGV4dCB7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICNhOTBiMGI7XG4gIGJvcmRlcjogc29saWQgMXB4IGdhaW5zYm9ybztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogNi41cHggMTBweDtcbn1cblxuLnBhZ2UtaGVhZGluZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzMxM2UyNDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnBhZ2UtaGVhZGluZyB7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIH1cbn1cblxuLmhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIDo6bmctZGVlcCAuYWxlcnQtZGlzbWlzc2libGUgLmNsb3NlIHtcbiAgICB6LWluZGV4OiAwO1xuICB9XG59XG46Om5nLWRlZXAgLmFsZXJ0LWluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzZTI0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjYWQ5NzRmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5rdXBpcGFrd2Ege1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJ+c3JjL2Fzc2V0cy9pbWFnZXMva3VwaXBha3dhLnBuZ1wiKTtcbn1cblxuLnBvdHRhbGkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJ+c3JjL2Fzc2V0cy9pbWFnZXMvcG90dGFsaS5wbmdcIik7XG59XG5cbi5raGFsdml5YSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIn5zcmMvYXNzZXRzL2ltYWdlcy9raGFsdml5YS5wbmdcIik7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gIC5kaXNwbGF5LWlubGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLyotLS0tZmlyZWNyYWNrZXJzIGFuaW1hdGlvbiAtLS0qL1xuLnB5cm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5O1xufVxuXG4ucHlybyA+IC5iZWZvcmUsIC5weXJvID4gLmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmO1xuICAtbW96LWFuaW1hdGlvbjogMXMgYmFuZyBlYXNlLW91dCBpbmZpbml0ZSBiYWNrd2FyZHMsIDFzIGdyYXZpdHkgZWFzZS1pbiBpbmZpbml0ZSBiYWNrd2FyZHMsIDVzIHBvc2l0aW9uIGxpbmVhciBpbmZpbml0ZSBiYWNrd2FyZHM7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAxcyBiYW5nIGVhc2Utb3V0IGluZmluaXRlIGJhY2t3YXJkcywgMXMgZ3Jhdml0eSBlYXNlLWluIGluZmluaXRlIGJhY2t3YXJkcywgNXMgcG9zaXRpb24gbGluZWFyIGluZmluaXRlIGJhY2t3YXJkcztcbiAgLW8tYW5pbWF0aW9uOiAxcyBiYW5nIGVhc2Utb3V0IGluZmluaXRlIGJhY2t3YXJkcywgMXMgZ3Jhdml0eSBlYXNlLWluIGluZmluaXRlIGJhY2t3YXJkcywgNXMgcG9zaXRpb24gbGluZWFyIGluZmluaXRlIGJhY2t3YXJkcztcbiAgLW1zLWFuaW1hdGlvbjogMXMgYmFuZyBlYXNlLW91dCBpbmZpbml0ZSBiYWNrd2FyZHMsIDFzIGdyYXZpdHkgZWFzZS1pbiBpbmZpbml0ZSBiYWNrd2FyZHMsIDVzIHBvc2l0aW9uIGxpbmVhciBpbmZpbml0ZSBiYWNrd2FyZHM7XG4gIGFuaW1hdGlvbjogMXMgYmFuZyBlYXNlLW91dCBpbmZpbml0ZSBiYWNrd2FyZHMsIDFzIGdyYXZpdHkgZWFzZS1pbiBpbmZpbml0ZSBiYWNrd2FyZHMsIDVzIHBvc2l0aW9uIGxpbmVhciBpbmZpbml0ZSBiYWNrd2FyZHM7XG59XG5cbi5weXJvID4gLmFmdGVyIHtcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDEuMjVzLCAxLjI1cywgMS4yNXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxLjI1cywgMS4yNXMsIDEuMjVzO1xuICAtby1hbmltYXRpb24tZGVsYXk6IDEuMjVzLCAxLjI1cywgMS4yNXM7XG4gIC1tcy1hbmltYXRpb24tZGVsYXk6IDEuMjVzLCAxLjI1cywgMS4yNXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMS4yNXMsIDEuMjVzLCAxLjI1cztcbiAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDEuMjVzLCAxLjI1cywgNi4yNXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjI1cywgMS4yNXMsIDYuMjVzO1xuICAtby1hbmltYXRpb24tZHVyYXRpb246IDEuMjVzLCAxLjI1cywgNi4yNXM7XG4gIC1tcy1hbmltYXRpb24tZHVyYXRpb246IDEuMjVzLCAxLjI1cywgNi4yNXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS4yNXMsIDEuMjVzLCA2LjI1cztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGJhbmcge1xuICB0byB7XG4gICAgYm94LXNoYWRvdzogLTY1cHggLTMyNC42NjY2NjY2NjY3cHggIzg0ZmYwMCwgNThweCAzNi4zMzMzMzMzMzMzcHggIzgwZmYwMCwgNjNweCAtMjQ5LjY2NjY2NjY2NjdweCAjMDAyMmZmLCA0NXB4IC0yMy42NjY2NjY2NjY3cHggIzAwOTFmZiwgLTE0N3B4IC0zNi42NjY2NjY2NjY3cHggI2QwZmYwMCwgNDJweCA2MC4zMzMzMzMzMzMzcHggI2ZmMDAzYywgODdweCAtMzYuNjY2NjY2NjY2N3B4ICMwMGZmMDQsIDFweCA2NC4zMzMzMzMzMzMzcHggI2M0MDBmZiwgLTg4cHggLTI2Mi42NjY2NjY2NjY3cHggIzg0ZmYwMCwgLTI2cHggLTU2LjY2NjY2NjY2NjdweCAjMDAzY2ZmLCAxNDNweCAtMTQxLjY2NjY2NjY2NjdweCAjMDA3N2ZmLCAyN3B4IC0yNDQuNjY2NjY2NjY2N3B4ICNmZjAwODQsIDE0N3B4IC0xMTcuNjY2NjY2NjY2N3B4ICMwOTAwZmYsIC05NXB4IC0yNDcuNjY2NjY2NjY2N3B4ICNmZjAwZGQsIC0yMzlweCA3Ny4zMzMzMzMzMzMzcHggI2ZmZWUwMCwgNXB4IC0xNTkuNjY2NjY2NjY2N3B4ICNmZjU1MDAsIC0xOTlweCAtMzg2LjY2NjY2NjY2NjdweCAjZmYwMDlkLCA0N3B4IC0xMTguNjY2NjY2NjY2N3B4ICMwMGFhZmYsIC0xMzVweCAtMTI0LjY2NjY2NjY2NjdweCAjZmJmZjAwLCA1NHB4IC02Ni42NjY2NjY2NjY3cHggIzZhZmYwMCwgOHB4IC0xNTIuNjY2NjY2NjY2N3B4ICMzM2ZmMDAsIDEyMXB4IC03NS42NjY2NjY2NjY3cHggIzczZmYwMCwgLTE4MnB4IC0zMTAuNjY2NjY2NjY2N3B4ICMwMGZmMzcsIDI0NHB4IC0zNjAuNjY2NjY2NjY2N3B4ICNmZjAwODAsIDE4N3B4IC0xNjAuNjY2NjY2NjY2N3B4ICNjNGZmMDAsIC04NnB4IC0yMTQuNjY2NjY2NjY2N3B4ICMwMGZmYmIsIDE5NXB4IC05NC42NjY2NjY2NjY3cHggI2ZmMDBjYywgMjRweCAtMjEuNjY2NjY2NjY2N3B4ICNiM2ZmMDAsIDEwMHB4IC0xMTQuNjY2NjY2NjY2N3B4ICMwMGZmM2MsIDEwcHggLTExOC42NjY2NjY2NjY3cHggI2QwZmYwMCwgLTE0MHB4IDE4LjMzMzMzMzMzMzNweCAjZmYwMDg0LCAtMTY4cHggLTQ3LjY2NjY2NjY2NjdweCAjZmYwMGM0LCAxODBweCA1OS4zMzMzMzMzMzMzcHggI2ZmMDBlYSwgLTIxM3B4IDkuMzMzMzMzMzMzM3B4ICMwMGZmZTEsIC0xMnB4IC0xNDIuNjY2NjY2NjY2N3B4ICNkMGZmMDAsIDIyMnB4IC0xMjcuNjY2NjY2NjY2N3B4ICNmZjAwNTEsIDY3cHggMzMuMzMzMzMzMzMzM3B4ICMyYjAwZmYsIDk2cHggLTM4OC42NjY2NjY2NjY3cHggIzAwODBmZiwgMTczcHggLTM4Mi42NjY2NjY2NjY3cHggIzdiZmYwMCwgMjNweCAtMzE5LjY2NjY2NjY2NjdweCAjMDBlMWZmLCAtMzBweCAtMTI4LjY2NjY2NjY2NjdweCAjYWVmZjAwLCAtMjM3cHggLTMzMy42NjY2NjY2NjY3cHggI2ZmYjMwMCwgMTc4cHggNy4zMzMzMzMzMzMzcHggIzAwZmYxZSwgMzFweCAtMjU0LjY2NjY2NjY2NjdweCAjYTIwMGZmLCAtNnB4IC01NC42NjY2NjY2NjY3cHggIzA0MDBmZiwgMTExcHggLTM5OS42NjY2NjY2NjY3cHggIzE1ZmYwMCwgLTExNHB4IC0yNzAuNjY2NjY2NjY2N3B4ICMwMGZmNzMsIC0xNDlweCAtMjU0LjY2NjY2NjY2NjdweCAjMDBmZmVlLCAxODRweCAtMjgzLjY2NjY2NjY2NjdweCAjZmYzNzAwLCAtNzBweCA1Ny4zMzMzMzMzMzMzcHggI2ZmMDBkOSwgLTE5NXB4IC01NC42NjY2NjY2NjY3cHggIzAwNjZmZjtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGJhbmcge1xuICB0byB7XG4gICAgYm94LXNoYWRvdzogLTY1cHggLTMyNC42NjY2NjY2NjY3cHggIzg0ZmYwMCwgNThweCAzNi4zMzMzMzMzMzMzcHggIzgwZmYwMCwgNjNweCAtMjQ5LjY2NjY2NjY2NjdweCAjMDAyMmZmLCA0NXB4IC0yMy42NjY2NjY2NjY3cHggIzAwOTFmZiwgLTE0N3B4IC0zNi42NjY2NjY2NjY3cHggI2QwZmYwMCwgNDJweCA2MC4zMzMzMzMzMzMzcHggI2ZmMDAzYywgODdweCAtMzYuNjY2NjY2NjY2N3B4ICMwMGZmMDQsIDFweCA2NC4zMzMzMzMzMzMzcHggI2M0MDBmZiwgLTg4cHggLTI2Mi42NjY2NjY2NjY3cHggIzg0ZmYwMCwgLTI2cHggLTU2LjY2NjY2NjY2NjdweCAjMDAzY2ZmLCAxNDNweCAtMTQxLjY2NjY2NjY2NjdweCAjMDA3N2ZmLCAyN3B4IC0yNDQuNjY2NjY2NjY2N3B4ICNmZjAwODQsIDE0N3B4IC0xMTcuNjY2NjY2NjY2N3B4ICMwOTAwZmYsIC05NXB4IC0yNDcuNjY2NjY2NjY2N3B4ICNmZjAwZGQsIC0yMzlweCA3Ny4zMzMzMzMzMzMzcHggI2ZmZWUwMCwgNXB4IC0xNTkuNjY2NjY2NjY2N3B4ICNmZjU1MDAsIC0xOTlweCAtMzg2LjY2NjY2NjY2NjdweCAjZmYwMDlkLCA0N3B4IC0xMTguNjY2NjY2NjY2N3B4ICMwMGFhZmYsIC0xMzVweCAtMTI0LjY2NjY2NjY2NjdweCAjZmJmZjAwLCA1NHB4IC02Ni42NjY2NjY2NjY3cHggIzZhZmYwMCwgOHB4IC0xNTIuNjY2NjY2NjY2N3B4ICMzM2ZmMDAsIDEyMXB4IC03NS42NjY2NjY2NjY3cHggIzczZmYwMCwgLTE4MnB4IC0zMTAuNjY2NjY2NjY2N3B4ICMwMGZmMzcsIDI0NHB4IC0zNjAuNjY2NjY2NjY2N3B4ICNmZjAwODAsIDE4N3B4IC0xNjAuNjY2NjY2NjY2N3B4ICNjNGZmMDAsIC04NnB4IC0yMTQuNjY2NjY2NjY2N3B4ICMwMGZmYmIsIDE5NXB4IC05NC42NjY2NjY2NjY3cHggI2ZmMDBjYywgMjRweCAtMjEuNjY2NjY2NjY2N3B4ICNiM2ZmMDAsIDEwMHB4IC0xMTQuNjY2NjY2NjY2N3B4ICMwMGZmM2MsIDEwcHggLTExOC42NjY2NjY2NjY3cHggI2QwZmYwMCwgLTE0MHB4IDE4LjMzMzMzMzMzMzNweCAjZmYwMDg0LCAtMTY4cHggLTQ3LjY2NjY2NjY2NjdweCAjZmYwMGM0LCAxODBweCA1OS4zMzMzMzMzMzMzcHggI2ZmMDBlYSwgLTIxM3B4IDkuMzMzMzMzMzMzM3B4ICMwMGZmZTEsIC0xMnB4IC0xNDIuNjY2NjY2NjY2N3B4ICNkMGZmMDAsIDIyMnB4IC0xMjcuNjY2NjY2NjY2N3B4ICNmZjAwNTEsIDY3cHggMzMuMzMzMzMzMzMzM3B4ICMyYjAwZmYsIDk2cHggLTM4OC42NjY2NjY2NjY3cHggIzAwODBmZiwgMTczcHggLTM4Mi42NjY2NjY2NjY3cHggIzdiZmYwMCwgMjNweCAtMzE5LjY2NjY2NjY2NjdweCAjMDBlMWZmLCAtMzBweCAtMTI4LjY2NjY2NjY2NjdweCAjYWVmZjAwLCAtMjM3cHggLTMzMy42NjY2NjY2NjY3cHggI2ZmYjMwMCwgMTc4cHggNy4zMzMzMzMzMzMzcHggIzAwZmYxZSwgMzFweCAtMjU0LjY2NjY2NjY2NjdweCAjYTIwMGZmLCAtNnB4IC01NC42NjY2NjY2NjY3cHggIzA0MDBmZiwgMTExcHggLTM5OS42NjY2NjY2NjY3cHggIzE1ZmYwMCwgLTExNHB4IC0yNzAuNjY2NjY2NjY2N3B4ICMwMGZmNzMsIC0xNDlweCAtMjU0LjY2NjY2NjY2NjdweCAjMDBmZmVlLCAxODRweCAtMjgzLjY2NjY2NjY2NjdweCAjZmYzNzAwLCAtNzBweCA1Ny4zMzMzMzMzMzMzcHggI2ZmMDBkOSwgLTE5NXB4IC01NC42NjY2NjY2NjY3cHggIzAwNjZmZjtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBiYW5nIHtcbiAgdG8ge1xuICAgIGJveC1zaGFkb3c6IC02NXB4IC0zMjQuNjY2NjY2NjY2N3B4ICM4NGZmMDAsIDU4cHggMzYuMzMzMzMzMzMzM3B4ICM4MGZmMDAsIDYzcHggLTI0OS42NjY2NjY2NjY3cHggIzAwMjJmZiwgNDVweCAtMjMuNjY2NjY2NjY2N3B4ICMwMDkxZmYsIC0xNDdweCAtMzYuNjY2NjY2NjY2N3B4ICNkMGZmMDAsIDQycHggNjAuMzMzMzMzMzMzM3B4ICNmZjAwM2MsIDg3cHggLTM2LjY2NjY2NjY2NjdweCAjMDBmZjA0LCAxcHggNjQuMzMzMzMzMzMzM3B4ICNjNDAwZmYsIC04OHB4IC0yNjIuNjY2NjY2NjY2N3B4ICM4NGZmMDAsIC0yNnB4IC01Ni42NjY2NjY2NjY3cHggIzAwM2NmZiwgMTQzcHggLTE0MS42NjY2NjY2NjY3cHggIzAwNzdmZiwgMjdweCAtMjQ0LjY2NjY2NjY2NjdweCAjZmYwMDg0LCAxNDdweCAtMTE3LjY2NjY2NjY2NjdweCAjMDkwMGZmLCAtOTVweCAtMjQ3LjY2NjY2NjY2NjdweCAjZmYwMGRkLCAtMjM5cHggNzcuMzMzMzMzMzMzM3B4ICNmZmVlMDAsIDVweCAtMTU5LjY2NjY2NjY2NjdweCAjZmY1NTAwLCAtMTk5cHggLTM4Ni42NjY2NjY2NjY3cHggI2ZmMDA5ZCwgNDdweCAtMTE4LjY2NjY2NjY2NjdweCAjMDBhYWZmLCAtMTM1cHggLTEyNC42NjY2NjY2NjY3cHggI2ZiZmYwMCwgNTRweCAtNjYuNjY2NjY2NjY2N3B4ICM2YWZmMDAsIDhweCAtMTUyLjY2NjY2NjY2NjdweCAjMzNmZjAwLCAxMjFweCAtNzUuNjY2NjY2NjY2N3B4ICM3M2ZmMDAsIC0xODJweCAtMzEwLjY2NjY2NjY2NjdweCAjMDBmZjM3LCAyNDRweCAtMzYwLjY2NjY2NjY2NjdweCAjZmYwMDgwLCAxODdweCAtMTYwLjY2NjY2NjY2NjdweCAjYzRmZjAwLCAtODZweCAtMjE0LjY2NjY2NjY2NjdweCAjMDBmZmJiLCAxOTVweCAtOTQuNjY2NjY2NjY2N3B4ICNmZjAwY2MsIDI0cHggLTIxLjY2NjY2NjY2NjdweCAjYjNmZjAwLCAxMDBweCAtMTE0LjY2NjY2NjY2NjdweCAjMDBmZjNjLCAxMHB4IC0xMTguNjY2NjY2NjY2N3B4ICNkMGZmMDAsIC0xNDBweCAxOC4zMzMzMzMzMzMzcHggI2ZmMDA4NCwgLTE2OHB4IC00Ny42NjY2NjY2NjY3cHggI2ZmMDBjNCwgMTgwcHggNTkuMzMzMzMzMzMzM3B4ICNmZjAwZWEsIC0yMTNweCA5LjMzMzMzMzMzMzNweCAjMDBmZmUxLCAtMTJweCAtMTQyLjY2NjY2NjY2NjdweCAjZDBmZjAwLCAyMjJweCAtMTI3LjY2NjY2NjY2NjdweCAjZmYwMDUxLCA2N3B4IDMzLjMzMzMzMzMzMzNweCAjMmIwMGZmLCA5NnB4IC0zODguNjY2NjY2NjY2N3B4ICMwMDgwZmYsIDE3M3B4IC0zODIuNjY2NjY2NjY2N3B4ICM3YmZmMDAsIDIzcHggLTMxOS42NjY2NjY2NjY3cHggIzAwZTFmZiwgLTMwcHggLTEyOC42NjY2NjY2NjY3cHggI2FlZmYwMCwgLTIzN3B4IC0zMzMuNjY2NjY2NjY2N3B4ICNmZmIzMDAsIDE3OHB4IDcuMzMzMzMzMzMzM3B4ICMwMGZmMWUsIDMxcHggLTI1NC42NjY2NjY2NjY3cHggI2EyMDBmZiwgLTZweCAtNTQuNjY2NjY2NjY2N3B4ICMwNDAwZmYsIDExMXB4IC0zOTkuNjY2NjY2NjY2N3B4ICMxNWZmMDAsIC0xMTRweCAtMjcwLjY2NjY2NjY2NjdweCAjMDBmZjczLCAtMTQ5cHggLTI1NC42NjY2NjY2NjY3cHggIzAwZmZlZSwgMTg0cHggLTI4My42NjY2NjY2NjY3cHggI2ZmMzcwMCwgLTcwcHggNTcuMzMzMzMzMzMzM3B4ICNmZjAwZDksIC0xOTVweCAtNTQuNjY2NjY2NjY2N3B4ICMwMDY2ZmY7XG4gIH1cbn1cbkAtbXMta2V5ZnJhbWVzIGJhbmcge1xuICB0byB7XG4gICAgYm94LXNoYWRvdzogLTY1cHggLTMyNC42NjY2NjY2NjY3cHggIzg0ZmYwMCwgNThweCAzNi4zMzMzMzMzMzMzcHggIzgwZmYwMCwgNjNweCAtMjQ5LjY2NjY2NjY2NjdweCAjMDAyMmZmLCA0NXB4IC0yMy42NjY2NjY2NjY3cHggIzAwOTFmZiwgLTE0N3B4IC0zNi42NjY2NjY2NjY3cHggI2QwZmYwMCwgNDJweCA2MC4zMzMzMzMzMzMzcHggI2ZmMDAzYywgODdweCAtMzYuNjY2NjY2NjY2N3B4ICMwMGZmMDQsIDFweCA2NC4zMzMzMzMzMzMzcHggI2M0MDBmZiwgLTg4cHggLTI2Mi42NjY2NjY2NjY3cHggIzg0ZmYwMCwgLTI2cHggLTU2LjY2NjY2NjY2NjdweCAjMDAzY2ZmLCAxNDNweCAtMTQxLjY2NjY2NjY2NjdweCAjMDA3N2ZmLCAyN3B4IC0yNDQuNjY2NjY2NjY2N3B4ICNmZjAwODQsIDE0N3B4IC0xMTcuNjY2NjY2NjY2N3B4ICMwOTAwZmYsIC05NXB4IC0yNDcuNjY2NjY2NjY2N3B4ICNmZjAwZGQsIC0yMzlweCA3Ny4zMzMzMzMzMzMzcHggI2ZmZWUwMCwgNXB4IC0xNTkuNjY2NjY2NjY2N3B4ICNmZjU1MDAsIC0xOTlweCAtMzg2LjY2NjY2NjY2NjdweCAjZmYwMDlkLCA0N3B4IC0xMTguNjY2NjY2NjY2N3B4ICMwMGFhZmYsIC0xMzVweCAtMTI0LjY2NjY2NjY2NjdweCAjZmJmZjAwLCA1NHB4IC02Ni42NjY2NjY2NjY3cHggIzZhZmYwMCwgOHB4IC0xNTIuNjY2NjY2NjY2N3B4ICMzM2ZmMDAsIDEyMXB4IC03NS42NjY2NjY2NjY3cHggIzczZmYwMCwgLTE4MnB4IC0zMTAuNjY2NjY2NjY2N3B4ICMwMGZmMzcsIDI0NHB4IC0zNjAuNjY2NjY2NjY2N3B4ICNmZjAwODAsIDE4N3B4IC0xNjAuNjY2NjY2NjY2N3B4ICNjNGZmMDAsIC04NnB4IC0yMTQuNjY2NjY2NjY2N3B4ICMwMGZmYmIsIDE5NXB4IC05NC42NjY2NjY2NjY3cHggI2ZmMDBjYywgMjRweCAtMjEuNjY2NjY2NjY2N3B4ICNiM2ZmMDAsIDEwMHB4IC0xMTQuNjY2NjY2NjY2N3B4ICMwMGZmM2MsIDEwcHggLTExOC42NjY2NjY2NjY3cHggI2QwZmYwMCwgLTE0MHB4IDE4LjMzMzMzMzMzMzNweCAjZmYwMDg0LCAtMTY4cHggLTQ3LjY2NjY2NjY2NjdweCAjZmYwMGM0LCAxODBweCA1OS4zMzMzMzMzMzMzcHggI2ZmMDBlYSwgLTIxM3B4IDkuMzMzMzMzMzMzM3B4ICMwMGZmZTEsIC0xMnB4IC0xNDIuNjY2NjY2NjY2N3B4ICNkMGZmMDAsIDIyMnB4IC0xMjcuNjY2NjY2NjY2N3B4ICNmZjAwNTEsIDY3cHggMzMuMzMzMzMzMzMzM3B4ICMyYjAwZmYsIDk2cHggLTM4OC42NjY2NjY2NjY3cHggIzAwODBmZiwgMTczcHggLTM4Mi42NjY2NjY2NjY3cHggIzdiZmYwMCwgMjNweCAtMzE5LjY2NjY2NjY2NjdweCAjMDBlMWZmLCAtMzBweCAtMTI4LjY2NjY2NjY2NjdweCAjYWVmZjAwLCAtMjM3cHggLTMzMy42NjY2NjY2NjY3cHggI2ZmYjMwMCwgMTc4cHggNy4zMzMzMzMzMzMzcHggIzAwZmYxZSwgMzFweCAtMjU0LjY2NjY2NjY2NjdweCAjYTIwMGZmLCAtNnB4IC01NC42NjY2NjY2NjY3cHggIzA0MDBmZiwgMTExcHggLTM5OS42NjY2NjY2NjY3cHggIzE1ZmYwMCwgLTExNHB4IC0yNzAuNjY2NjY2NjY2N3B4ICMwMGZmNzMsIC0xNDlweCAtMjU0LjY2NjY2NjY2NjdweCAjMDBmZmVlLCAxODRweCAtMjgzLjY2NjY2NjY2NjdweCAjZmYzNzAwLCAtNzBweCA1Ny4zMzMzMzMzMzMzcHggI2ZmMDBkOSwgLTE5NXB4IC01NC42NjY2NjY2NjY3cHggIzAwNjZmZjtcbiAgfVxufVxuQGtleWZyYW1lcyBiYW5nIHtcbiAgdG8ge1xuICAgIGJveC1zaGFkb3c6IC02NXB4IC0zMjQuNjY2NjY2NjY2N3B4ICM4NGZmMDAsIDU4cHggMzYuMzMzMzMzMzMzM3B4ICM4MGZmMDAsIDYzcHggLTI0OS42NjY2NjY2NjY3cHggIzAwMjJmZiwgNDVweCAtMjMuNjY2NjY2NjY2N3B4ICMwMDkxZmYsIC0xNDdweCAtMzYuNjY2NjY2NjY2N3B4ICNkMGZmMDAsIDQycHggNjAuMzMzMzMzMzMzM3B4ICNmZjAwM2MsIDg3cHggLTM2LjY2NjY2NjY2NjdweCAjMDBmZjA0LCAxcHggNjQuMzMzMzMzMzMzM3B4ICNjNDAwZmYsIC04OHB4IC0yNjIuNjY2NjY2NjY2N3B4ICM4NGZmMDAsIC0yNnB4IC01Ni42NjY2NjY2NjY3cHggIzAwM2NmZiwgMTQzcHggLTE0MS42NjY2NjY2NjY3cHggIzAwNzdmZiwgMjdweCAtMjQ0LjY2NjY2NjY2NjdweCAjZmYwMDg0LCAxNDdweCAtMTE3LjY2NjY2NjY2NjdweCAjMDkwMGZmLCAtOTVweCAtMjQ3LjY2NjY2NjY2NjdweCAjZmYwMGRkLCAtMjM5cHggNzcuMzMzMzMzMzMzM3B4ICNmZmVlMDAsIDVweCAtMTU5LjY2NjY2NjY2NjdweCAjZmY1NTAwLCAtMTk5cHggLTM4Ni42NjY2NjY2NjY3cHggI2ZmMDA5ZCwgNDdweCAtMTE4LjY2NjY2NjY2NjdweCAjMDBhYWZmLCAtMTM1cHggLTEyNC42NjY2NjY2NjY3cHggI2ZiZmYwMCwgNTRweCAtNjYuNjY2NjY2NjY2N3B4ICM2YWZmMDAsIDhweCAtMTUyLjY2NjY2NjY2NjdweCAjMzNmZjAwLCAxMjFweCAtNzUuNjY2NjY2NjY2N3B4ICM3M2ZmMDAsIC0xODJweCAtMzEwLjY2NjY2NjY2NjdweCAjMDBmZjM3LCAyNDRweCAtMzYwLjY2NjY2NjY2NjdweCAjZmYwMDgwLCAxODdweCAtMTYwLjY2NjY2NjY2NjdweCAjYzRmZjAwLCAtODZweCAtMjE0LjY2NjY2NjY2NjdweCAjMDBmZmJiLCAxOTVweCAtOTQuNjY2NjY2NjY2N3B4ICNmZjAwY2MsIDI0cHggLTIxLjY2NjY2NjY2NjdweCAjYjNmZjAwLCAxMDBweCAtMTE0LjY2NjY2NjY2NjdweCAjMDBmZjNjLCAxMHB4IC0xMTguNjY2NjY2NjY2N3B4ICNkMGZmMDAsIC0xNDBweCAxOC4zMzMzMzMzMzMzcHggI2ZmMDA4NCwgLTE2OHB4IC00Ny42NjY2NjY2NjY3cHggI2ZmMDBjNCwgMTgwcHggNTkuMzMzMzMzMzMzM3B4ICNmZjAwZWEsIC0yMTNweCA5LjMzMzMzMzMzMzNweCAjMDBmZmUxLCAtMTJweCAtMTQyLjY2NjY2NjY2NjdweCAjZDBmZjAwLCAyMjJweCAtMTI3LjY2NjY2NjY2NjdweCAjZmYwMDUxLCA2N3B4IDMzLjMzMzMzMzMzMzNweCAjMmIwMGZmLCA5NnB4IC0zODguNjY2NjY2NjY2N3B4ICMwMDgwZmYsIDE3M3B4IC0zODIuNjY2NjY2NjY2N3B4ICM3YmZmMDAsIDIzcHggLTMxOS42NjY2NjY2NjY3cHggIzAwZTFmZiwgLTMwcHggLTEyOC42NjY2NjY2NjY3cHggI2FlZmYwMCwgLTIzN3B4IC0zMzMuNjY2NjY2NjY2N3B4ICNmZmIzMDAsIDE3OHB4IDcuMzMzMzMzMzMzM3B4ICMwMGZmMWUsIDMxcHggLTI1NC42NjY2NjY2NjY3cHggI2EyMDBmZiwgLTZweCAtNTQuNjY2NjY2NjY2N3B4ICMwNDAwZmYsIDExMXB4IC0zOTkuNjY2NjY2NjY2N3B4ICMxNWZmMDAsIC0xMTRweCAtMjcwLjY2NjY2NjY2NjdweCAjMDBmZjczLCAtMTQ5cHggLTI1NC42NjY2NjY2NjY3cHggIzAwZmZlZSwgMTg0cHggLTI4My42NjY2NjY2NjY3cHggI2ZmMzcwMCwgLTcwcHggNTcuMzMzMzMzMzMzM3B4ICNmZjAwZDksIC0xOTVweCAtNTQuNjY2NjY2NjY2N3B4ICMwMDY2ZmY7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBncmF2aXR5IHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBncmF2aXR5IHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgZ3Jhdml0eSB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ALW1zLWtleWZyYW1lcyBncmF2aXR5IHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZ3Jhdml0eSB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgcG9zaXRpb24ge1xuICAwJSwgMTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xuICB9XG4gIDIwJSwgMzkuOSUge1xuICAgIG1hcmdpbi10b3A6IDQwJTtcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xuICB9XG4gIDQwJSwgNTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICBtYXJnaW4tbGVmdDogNzAlO1xuICB9XG4gIDYwJSwgNzkuOSUge1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xuICB9XG4gIDgwJSwgOTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICBtYXJnaW4tbGVmdDogODAlO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgcG9zaXRpb24ge1xuICAwJSwgMTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xuICB9XG4gIDIwJSwgMzkuOSUge1xuICAgIG1hcmdpbi10b3A6IDQwJTtcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xuICB9XG4gIDQwJSwgNTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICBtYXJnaW4tbGVmdDogNzAlO1xuICB9XG4gIDYwJSwgNzkuOSUge1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xuICB9XG4gIDgwJSwgOTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICBtYXJnaW4tbGVmdDogODAlO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIHBvc2l0aW9uIHtcbiAgMCUsIDE5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgfVxuICAyMCUsIDM5LjklIHtcbiAgICBtYXJnaW4tdG9wOiA0MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgfVxuICA0MCUsIDU5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDcwJTtcbiAgfVxuICA2MCUsIDc5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgfVxuICA4MCUsIDk5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcbiAgfVxufVxuQC1tcy1rZXlmcmFtZXMgcG9zaXRpb24ge1xuICAwJSwgMTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xuICB9XG4gIDIwJSwgMzkuOSUge1xuICAgIG1hcmdpbi10b3A6IDQwJTtcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xuICB9XG4gIDQwJSwgNTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICBtYXJnaW4tbGVmdDogNzAlO1xuICB9XG4gIDYwJSwgNzkuOSUge1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xuICB9XG4gIDgwJSwgOTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICBtYXJnaW4tbGVmdDogODAlO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHBvc2l0aW9uIHtcbiAgMCUsIDE5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgfVxuICAyMCUsIDM5LjklIHtcbiAgICBtYXJnaW4tdG9wOiA0MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgfVxuICA0MCUsIDU5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDcwJTtcbiAgfVxuICA2MCUsIDc5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgfVxuICA4MCUsIDk5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcbiAgfVxufVxuOjpuZy1kZWVwIC5vcmRlci1jb25maXJtYXRpb24gLmNvbmZpcm0tb3JkZXItbW9kYWwgLnVzZXItZGV0YWlscywgOjpuZy1kZWVwIC5vcmRlci1jb25maXJtYXRpb24gLmNvbmZpcm0tb3JkZXItbW9kYWwgLnByb2R1Y3QtZGV0YWlscyB7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgLmZ1bGxOYW1lLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG59XG4uZnVsbE5hbWUtY29udGFpbmVyIC5maXJzdE5hbWVGaWVsZCB7XG4gIHBhZGRpbmc6IDA7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZnVsbE5hbWUtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gIDo6bmctZGVlcCAub3JkZXItY29uZmlybWF0aW9uIHtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICB9XG59XG46Om5nLWRlZXAgLm9yZGVyLWNvbmZpcm1hdGlvbiAuY29uZmlybS1vcmRlci1tb2RhbCAuZmllbGRzZXQtY29udGFpbmVyLmJvcmRlciB7XG4gIGJvcmRlci1jb2xvcjogI2M0YmFiYSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5vcmRlci1jb25maXJtYXRpb24gLmNvbmZpcm0tb3JkZXItbW9kYWwgLnByb2R1Y3QtZGV0YWlscyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjo6bmctZGVlcCAub3JkZXItY29uZmlybWF0aW9uIC5jb25maXJtLW9yZGVyLW1vZGFsIC5wcm9kdWN0LWRldGFpbHMgLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuOjpuZy1kZWVwIC5vcmRlci1jb25maXJtYXRpb24gLmNvbmZpcm0tb3JkZXItbW9kYWwgLnVzZXItZGV0YWlscyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjo6bmctZGVlcCAub3JkZXItY29uZmlybWF0aW9uIC5jb25maXJtLW9yZGVyLW1vZGFsIC51c2VyLWRldGFpbHMgLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG46Om5nLWRlZXAgLm9yZGVyLWNvbmZpcm1hdGlvbiAuY29uZmlybS1vcmRlci1tb2RhbCAuZmEtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogLTI2cHg7XG4gIHJpZ2h0OiAwO1xufVxuOjpuZy1kZWVwIC5vcmRlci1jb25maXJtYXRpb24gLmNvbmZpcm0tb3JkZXItbW9kYWwgLmNoZWNrLWljb24ge1xuICBjb2xvcjogZ3JlZW47XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG46Om5nLWRlZXAgLm9yZGVyLWNvbmZpcm1hdGlvbiAuY29uZmlybS1vcmRlci1tb2RhbCAub3JkZXItZGV0YWlscyAub3JkZXItdG90YWwtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG46Om5nLWRlZXAgLm9yZGVyLWNvbmZpcm1hdGlvbiAuY29uZmlybS1vcmRlci1tb2RhbCAub3JkZXItZGV0YWlscyAucHJvZHVjdC1maW5hbC1wcmljZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZDk3NGYgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG46Om5nLWRlZXAgLm9yZGVyLWNvbmZpcm1hdGlvbiAuY29uZmlybS1vcmRlci1tb2RhbCAubm90ZS1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuOjpuZy1kZWVwIC5sZWdlbmQtdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG46Om5nLWRlZXAgLmZpZWxkc2V0LWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59IiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29tbW9uLnNjc3NcIjtcclxuXHJcbiVzZWN0aW9uLXN0eWxlcyB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uZnVsbE5hbWUtY29udGFpbmVyIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgfVxyXG5cclxuICAuZmlyc3ROYW1lRmllbGQge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICAub3JkZXItY29uZmlybWF0aW9uIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XHJcbiAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbmZpcm0tb3JkZXItbW9kYWwge1xyXG4gICAgICAuZmllbGRzZXQtY29udGFpbmVyIHtcclxuICAgICAgICAmLmJvcmRlciB7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRnb2xkZW50aGVtZS1jb25maXJtbW9kYWwtYm9yZGVyY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wcm9kdWN0LWRldGFpbHMge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBAZXh0ZW5kICVzZWN0aW9uLXN0eWxlcztcclxuXHJcbiAgICAgICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC51c2VyLWRldGFpbHMge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBAZXh0ZW5kICVzZWN0aW9uLXN0eWxlcztcclxuXHJcbiAgICAgICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmZhLWljb24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMjZweDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNoZWNrLWljb24ge1xyXG4gICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5vcmRlci1kZXRhaWxzIHtcclxuICAgICAgICAub3JkZXItdG90YWwtdGV4dCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByb2R1Y3QtZmluYWwtcHJpY2Uge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlcnRleHQtY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICAgIGNvbG9yOiAkZ29sZGVudGhlbWUtYmFkZ2UtdGV4dCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLm5vdGUtY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubGVnZW5kLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5cclxuICAuZmllbGRzZXQtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmOrderDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-confirm-order-details',
          templateUrl: './confirm-order-details.component.html',
          styleUrls: ['./confirm-order-details.component.scss']
        }]
      }], function () {
        return [{
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]
        }, {
          type: src_app_services_common_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
        }];
      }, {
        product: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        productList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~cart-cart-module~products-products-module-es5.js.map