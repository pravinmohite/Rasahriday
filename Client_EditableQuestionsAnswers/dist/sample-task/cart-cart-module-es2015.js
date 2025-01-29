(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"],{

/***/ "./src/app/cart/cart-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/cart/cart-routing.module.ts ***!
  \*********************************************/
/*! exports provided: CartRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartRoutingModule", function() { return CartRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart.component */ "./src/app/cart/cart.component.ts");






const routes = [
    {
        path: '',
        component: _cart_component__WEBPACK_IMPORTED_MODULE_3__["CartComponent"]
    }
];
class CartRoutingModule {
}
CartRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CartRoutingModule });
CartRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CartRoutingModule_Factory(t) { return new (t || CartRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CartRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _products_modals_confirm_order_details_confirm_order_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../products/modals/confirm-order-details/confirm-order-details.component */ "./src/app/products/modals/confirm-order-details/confirm-order-details.component.ts");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _services_common_service_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common-service/common.service */ "./src/app/services/common-service/common.service.ts");
/* harmony import */ var _services_order_service_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/order-service/order.service */ "./src/app/services/order-service/order.service.ts");
/* harmony import */ var _services_product_service_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/product-service/product.service */ "./src/app/services/product-service/product.service.ts");
/* harmony import */ var _services_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/cart-service/cart.service */ "./src/app/services/cart-service/cart.service.ts");
/* harmony import */ var _services_loader_service_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/loader-service/loader.service */ "./src/app/services/loader-service/loader.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
















function CartComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.selectDeselectAllItems(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_3_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.confirmOrder(null, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Place order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_3_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.deleteSelectedCartItems(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "fa-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.currentSelectionText, " all");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.currentCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.selectedProducts.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faTrash);
} }
function CartComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.selectDeselectAllItems(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.currentSelectionText, " all");
} }
function CartComponent_div_6_div_5_slide_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CartComponent_div_6_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CartComponent_div_6_div_5_slide_2_Template, 2, 1, "slide", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cartItem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", cartItem_r11.productImagesToBeShown);
} }
function CartComponent_div_6_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_div_6_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Drug quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cartItem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cartItem_r11.drugQuantity);
} }
function CartComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CartComponent_div_6_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const cartItem_r11 = ctx.$implicit; return cartItem_r11.isSelected = $event; })("change", function CartComponent_div_6_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const cartItem_r11 = ctx.$implicit; const i_r12 = ctx.index; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.toggleCheckboxSelection(cartItem_r11, i_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CartComponent_div_6_div_5_Template, 3, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CartComponent_div_6_div_6_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CartComponent_div_6_div_15_Template, 6, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_6_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const cartItem_r11 = ctx.$implicit; const i_r12 = ctx.index; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.decrementQuantity(cartItem_r11, i_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CartComponent_div_6_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const cartItem_r11 = ctx.$implicit; return cartItem_r11.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_6_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const cartItem_r11 = ctx.$implicit; const i_r12 = ctx.index; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.incrementQuantity(cartItem_r11, i_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_6_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const cartItem_r11 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.confirmOrder(cartItem_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Place order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_6_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const cartItem_r11 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.deleteCartItem(cartItem_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "fa-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cartItem_r11 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", cartItem_r11.isSelected ? "cart-item-selected" : "cart-item-notselected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", cartItem_r11.isSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cartItem_r11.productImagesToBeShown);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !cartItem_r11.productImagesToBeShown);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cartItem_r11.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.currentCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cartItem_r11.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cartItem_r11.drugQuantity && cartItem_r11.drugQuantity !== "null");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", cartItem_r11.quantity == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", cartItem_r11.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", cartItem_r11.quantity >= cartItem_r11.stock);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", cartItem_r11.quantity >= cartItem_r11.stock ? ctx_r3.sellerStocksEmptyText : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r3.faTrash);
} }
function CartComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cart list is empty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CartComponent {
    constructor(modalService, commonService, orderService, productService, cartService, loaderService, notifierService) {
        this.modalService = modalService;
        this.commonService = commonService;
        this.orderService = orderService;
        this.productService = productService;
        this.cartService = cartService;
        this.loaderService = loaderService;
        this.notifierService = notifierService;
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTrash"];
        this.showMultiSelectedActionbtns = false;
        this.selectText = 'select';
        this.deselectText = 'deselect';
        this.currentSelectionText = this.selectText;
        this.selectAllActive = false;
        this.selectedProducts = {
            selectedItems: [],
            userName: '',
            userAddress: '',
            userPhoneNumber: '',
            price: 0,
            deliveryCharges: 0
        };
        this.isFireCrackerShown = false;
        this.userDetails = this.commonService.userDetails;
        this.sellerStocksEmptyText = this.commonService.sellerStocksEmptyText;
        this.orderConfirmationClass = this.commonService.orderConfirmationClass;
    }
    ngOnInit() {
        this.setCurrentCurrency();
        this.getCartItemsByPrivileges();
        this.handleCartSearchSubscriptions();
    }
    setCurrentCurrency() {
        this.currentCurrency = this.commonService.currentCurrency;
    }
    handleCartSearchSubscriptions() {
        this.cartService.cartDataSearch.subscribe(data => {
            this.cartList = this.commonService.filterDataBySearchString(this.unfilteredCartItems, data);
        });
    }
    getCartItemsByPrivileges() {
        if (this.userDetails.isAdmin) {
            this.getCartItemsAll();
        }
        else {
            this.getCartItemsByUser();
        }
        this.selectedProducts.selectedItems = [];
    }
    getCartItemsByUser() {
        this.loaderService.display(true);
        this.cartService.getCartListByUser(this.userDetails['_id']).subscribe(data => {
            this.setCartData(data);
            this.loaderService.display(false);
        });
    }
    setCartData(data) {
        this.cartList = data;
        this.setUnfilteredData(data);
        this.getProductImageToBeShown();
        this.setHeaderCartItemBadge(data.length);
    }
    setHeaderCartItemBadge(cartItemsLength) {
        this.cartService.cartItemChange.next(cartItemsLength);
    }
    setUnfilteredData(data) {
        this.unfilteredCartItems = data;
    }
    getCartItemsAll() {
        this.loaderService.display(true);
        this.cartService.getCartListAll().subscribe(data => {
            this.setCartData(data);
            this.loaderService.display(false);
        });
    }
    getProductImageToBeShown() {
        for (const cartItem of this.cartList) {
            cartItem.productImagesToBeShown = this.productService.getAllProductImagesToBeShown(cartItem.productImages);
        }
    }
    confirmOrder(cartItem, isMultipleItems) {
        this.openOrderConfirmationModal(cartItem, isMultipleItems);
    }
    // deleteCartItem(cartItem) {
    //   this.cartService.deleteCartItem(cartItem._id).subscribe(response=>{
    //      this.getCartItemsByPrivileges();
    //   })
    // }
    setUserDetails() {
        if (this.selectedProducts.selectedItems.length > 0)
            this.selectedProducts.userName = this.selectedProducts.selectedItems[0].userName;
        this.selectedProducts.userAddress = this.selectedProducts.selectedItems[0].userAddress;
        this.selectedProducts.userPhoneNumber = this.selectedProducts.selectedItems[0].userPhoneNumber;
    }
    openOrderConfirmationModal(cartItem, isMultipleItems) {
        let modalObj;
        if (isMultipleItems) {
            this.setUserDetails();
            modalObj = {
                initialState: {
                    productList: this.selectedProducts
                },
                class: this.orderConfirmationClass
            };
        }
        else {
            modalObj = {
                initialState: {
                    product: cartItem
                },
                class: this.orderConfirmationClass
            };
        }
        const config = this.commonService.getModalConfig(this.orderConfirmationClass);
        this.modalRef = this.modalService.show(_products_modals_confirm_order_details_confirm_order_details_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmOrderDetailsComponent"], modalObj);
        this.modalRef.content.event.subscribe(data => {
            this.placeOrder(data);
        });
    }
    placeOrder(data) {
        if (this.selectedProducts.selectedItems.length > 0) {
            this.placeMultipleOrder(data);
        }
        else {
            this.placeSingleOrder(data);
        }
    }
    placeSingleOrder(cartItem) {
        this.orderService.addToOrderList(cartItem).subscribe(response => {
            this.notifierService.notify('success', 'order placed successfully!');
            this.showFireCrackers();
            const placedOrder = true;
            this.deleteCartItem(cartItem, placedOrder);
        });
    }
    placeMultipleOrder(data) {
        this.setUpdatedDetails(data);
        this.orderService.addMultipleOrderToOrderList(this.selectedProducts).subscribe(response => {
            this.notifierService.notify('success', 'order placed successfully!');
            this.showFireCrackers();
            this.getCartItemsByPrivileges();
        });
    }
    showFireCrackers() {
        this.isFireCrackerShown = true;
        setTimeout(() => {
            this.isFireCrackerShown = false;
        }, this.commonService.fireCrackersTimeout);
    }
    setUpdatedDetails(data) {
        this.selectedProducts.userAddress = data.userAddress;
        this.selectedProducts.userPhoneNumber = data.userPhoneNumber;
    }
    decrementQuantity(cartItem, index) {
        this.commonService.decrementQuantity(cartItem);
        if (cartItem.isSelected) {
            this.selectedProducts.price -= cartItem.price;
        }
    }
    incrementQuantity(cartItem, index) {
        this.commonService.incrementQuantity(cartItem);
        if (cartItem.isSelected) {
            this.selectedProducts.price += cartItem.price;
        }
    }
    deleteCartItem(cartItem, placedOrder) {
        let result = placedOrder || this.commonService.confirmAction();
        if (result) {
            this.loaderService.display(true);
            this.cartService.deleteCartItem(cartItem._id).subscribe(response => {
                this.loaderService.display(false);
                if (!placedOrder) {
                    this.notifierService.notify('success', 'cart Item deleted successfully!');
                }
                this.getCartItemsByPrivileges();
            });
        }
    }
    deleteSelectedCartItems() {
        let result = this.commonService.confirmAction();
        if (result) {
            this.loaderService.display(true);
            this.cartService.deleteMultipleCartItems(this.selectedProducts.selectedItems).subscribe(response => {
                this.loaderService.display(false);
                this.notifierService.notify('success', 'cart Items deleted successfully!');
                this.getCartItemsByPrivileges();
            });
        }
    }
    toggleCheckboxSelection(cartItem, index) {
        if (cartItem.isSelected) {
            this.selectedProducts.selectedItems.push(cartItem);
            this.increamentAddedItemPrice(cartItem);
        }
        else {
            this.removeItemsFromSelectedProducts(cartItem);
            this.decreamentRemovedItemPrice(cartItem);
        }
        this.setSelectedDeselectedAllText();
        this.updateMultipleSelectedActionbtnVisibility();
    }
    removeItemsFromSelectedProducts(cartItem) {
        const selectedItems = this.selectedProducts.selectedItems;
        for (let i = 0; i < selectedItems.length; i++) {
            if (selectedItems[i]._id == cartItem._id) {
                selectedItems.splice(i, 1);
            }
        }
    }
    setSelectedDeselectedAllText() {
        if (this.selectedProducts.selectedItems.length == this.cartList.length) {
            this.selectAllActive = true;
            this.currentSelectionText = this.deselectText;
        }
        else {
            this.selectAllActive = false;
            this.currentSelectionText = this.selectText;
        }
    }
    increamentAddedItemPrice(cartItem) {
        this.selectedProducts.price += cartItem.price * cartItem.quantity;
    }
    decreamentRemovedItemPrice(cartItem) {
        this.selectedProducts.price -= cartItem.price * cartItem.quantity;
    }
    updateMultipleSelectedActionbtnVisibility() {
        if (this.selectedProducts.selectedItems.length > 0) {
            this.showMultiSelectedActionbtns = true;
        }
        else {
            this.showMultiSelectedActionbtns = false;
        }
    }
    selectDeselectAllItems() {
        if (!this.selectAllActive) {
            this.selectAllItems();
        }
        else {
            this.deselectAllItems();
        }
    }
    selectAllItems() {
        this.selectedProducts.price = 0;
        this.selectAllActive = true;
        this.currentSelectionText = this.deselectText;
        this.showMultiSelectedActionbtns = true;
        this.selectedProducts.selectedItems = this.commonService.deepCloneArray(this.cartList);
        this.cartList.map(data => {
            data.isSelected = true;
            this.selectedProducts.price += data.price * data.quantity;
        });
    }
    deselectAllItems() {
        this.selectAllActive = false;
        this.currentSelectionText = this.selectText;
        this.showMultiSelectedActionbtns = false;
        this.selectedProducts.selectedItems = [];
        this.cartList.map(data => {
            data.isSelected = false;
            this.selectedProducts.price -= data.price * data.quantity;
        });
    }
    confirmMultipleOrder() {
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_order_service_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_loader_service_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_10__["NotifierService"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__["CarouselConfig"], useValue: { showIndicators: false } }
        ])], decls: 8, vars: 5, consts: [["class", "pyro", 4, "ngIf"], [1, "page-heading"], ["class", "mutiple-selection-actionbtns", 4, "ngIf"], [1, "cart-container"], ["class", "row select-deselect-btncontainer", 4, "ngIf"], ["class", "row product-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "empty-data", 4, "ngIf"], [1, "pyro"], [1, "before"], [1, "after"], [1, "mutiple-selection-actionbtns"], [1, "cart-item-actionbtns"], [1, "row"], [1, "col-6", "col-md-2", "select-deselect-btncontainer"], [1, "btn", "btn-default", "btn-outline", "btn-light-default", "btn-full-width", 3, "click"], [1, "product-price", "col-5", "col-md-1"], [1, "current-currency-symbol"], [1, "price-value"], [1, "col-12", "col-md-8", "multiselect-btns-container"], [1, "btn", "btn-outline", "place-order-btn", 3, "click"], [1, "btn", "btn-outline-removebtn", "place-order-btn", "remove-btn", 3, "click"], [1, "hand-cursor", "delete-icon-cartorder", 3, "icon"], [1, "row", "select-deselect-btncontainer"], [1, "btn", "btn-default", "btn-outline", "btn-light-default", 3, "click"], [1, "row", "product-item", 3, "ngClass"], [1, "col-md-5", "col-xs-12"], [1, "col-md-1", "cart-checkbox-container"], ["type", "checkbox", 1, "cart-item-checkbox", 3, "ngModel", "ngModelChange", "change"], ["class", "col-md-11 carousel-container", 4, "ngIf"], ["class", "col-md-11 product-img-container default-img-container", 4, "ngIf"], [1, "col-md-7", "col-xs-12"], [1, "product-name"], [1, "product-price"], ["class", "row drug-quantity-container", 4, "ngIf"], [1, "row", "quantity-container"], [1, "col-12", "quantity-title"], [1, "quantity-fields-container", "input-group", "col-md-3", "col-xs-10"], [1, "input-group-prepend"], [1, "input-group-text", 3, "disabled", "click"], ["type", "text", "value", "1", "id", "input1", "placeholder", "Qty", 1, "col-2", "col-md-5", "qty-input", "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], [1, "col-md-11", "carousel-container"], [4, "ngFor", "ngForOf"], [1, "product-img", 2, "display", "block", "width", "100%", 3, "src"], [1, "col-md-11", "product-img-container", "default-img-container"], ["src", "assets/images/herbal-med.jpg", 1, "product-img"], [1, "row", "drug-quantity-container"], [1, "col-12", "drug-quantity-title"], [1, "col-12", "drug-quantityvalue-container"], [1, "drug-quantity-value"], [1, "empty-data"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CartComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Shopping cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CartComponent_div_3_Template, 17, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CartComponent_div_5_Template, 3, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CartComponent_div_6_Template, 33, 13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CartComponent_div_7_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFireCrackerShown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMultiSelectedActionbtns && ctx.selectedProducts.selectedItems.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showMultiSelectedActionbtns && ctx.cartList && ctx.cartList.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cartList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartList && ctx.cartList.length == 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__["SlideComponent"]], styles: [".input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 15px;\n  border-top-left-radius: 15px;\n}\n.input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  border-bottom-right-radius: 15px;\n  border-top-right-radius: 15px;\n}\n.btn-full-width[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n.edit-icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n@media only screen and (max-width: 768px) {\n  .edit-icon[_ngcontent-%COMP%] {\n    margin-right: 15px;\n  }\n}\n.delete-icon[_ngcontent-%COMP%] {\n  color: #ce4545;\n}\n.no-padding[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n.no-padding-left[_ngcontent-%COMP%] {\n  padding-left: 0px !important;\n}\n.no-padding-right[_ngcontent-%COMP%] {\n  padding-right: 0px !important;\n}\n.empty-data[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.default-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n}\n.cart-container[_ngcontent-%COMP%] {\n  width: 64%;\n  margin: auto;\n  padding: 10px;\n}\n@media only screen and (max-width: 768px) {\n  .cart-container[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n.cart-container[_ngcontent-%COMP%]   .product-ordered-datecontainer[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.cart-container[_ngcontent-%COMP%]   .product-ordered-datecontainer[_ngcontent-%COMP%]   .ordered-date[_ngcontent-%COMP%] {\n  background-color: #ad974f !important;\n  color: #fff !important;\n  border-radius: 20px;\n  padding: 5px;\n}\n.cart-container[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  padding-top: 15px;\n  box-shadow: 0px 0px 2px 2px gainsboro;\n  background: #e3dfce;\n  border-radius: 20px;\n}\n.cart-container[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%] {\n  color: #313e24 !important;\n  border: solid 1px #ad974f;\n  border-radius: 15px;\n  padding: 5px;\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n.cart-container[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .phone-number[_ngcontent-%COMP%] {\n  color: green !important;\n}\n@media only screen and (max-width: 768px) {\n  .cart-container[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n.cart-container[_ngcontent-%COMP%]   .product-img-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  display: flex;\n}\n.cart-container[_ngcontent-%COMP%]   .product-img-container[_ngcontent-%COMP%]   .product-images[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  max-width: 100%;\n}\n.cart-container[_ngcontent-%COMP%]   .product-img-container[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.cart-container[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%] {\n  height: 250px;\n  width: 100%;\n  border: solid 1px #dcdcdc;\n  margin: auto auto 15px auto;\n  display: block;\n  border-top-right-radius: 20px;\n  border-top-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n}\n.cart-container[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%] {\n  float: right;\n}\n.cart-container[_ngcontent-%COMP%]   .cart-item-actionbtns[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.cart-container[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  color: #ad974f;\n  font-size: 18px;\n  font-weight: 800;\n  text-transform: capitalize;\n}\n.cart-container[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%] {\n  color: #7e6e6e !important;\n  display: inline-block;\n  width: calc(100% - 30px);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 0;\n}\n.cart-container[_ngcontent-%COMP%]   .drug-quantity-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-family: sans-serif;\n}\n.cart-container[_ngcontent-%COMP%]   .drug-quantity-container[_ngcontent-%COMP%]   .drug-quantity-title[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  color: #313e24;\n}\n.cart-container[_ngcontent-%COMP%]   .drug-quantity-container[_ngcontent-%COMP%]   .drug-quantityvalue-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.cart-container[_ngcontent-%COMP%]   .drug-quantity-container[_ngcontent-%COMP%]   .drug-quantityvalue-container[_ngcontent-%COMP%]   .drug-quantity-value[_ngcontent-%COMP%] {\n  background: #313e24;\n  color: #fff;\n  padding: 6px 12px 6px 12px;\n  border-radius: 20px;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%]   .qty-input[_ngcontent-%COMP%] {\n  text-align: center;\n  background: #e3dfce;\n  border-color: #313e24;\n}\n@media screen and (min-width: 993px) and (max-width: 1500px) {\n  .cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%]   .quantity-fields-container[_ngcontent-%COMP%] {\n    flex-basis: 32% !important;\n    max-width: 32% !important;\n  }\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  width: 35px;\n  cursor: pointer;\n  background: #313e24;\n  color: #ad974f;\n  border: solid 1px #313e24;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%]   .quantity-title[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 16px;\n  margin-bottom: 10px;\n  color: #313e24;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-readonly-container[_ngcontent-%COMP%]   .quantity-value[_ngcontent-%COMP%] {\n  background-color: #ad974f;\n  color: #fff;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-readonly-container[_ngcontent-%COMP%]   .quantity-text[_ngcontent-%COMP%] {\n  color: #313e24;\n  font-weight: bold;\n}\n.cart-container[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%], .cart-container[_ngcontent-%COMP%]   .btn-outline-modal[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.product-price[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.product-price[_ngcontent-%COMP%]   .current-currency-symbol[_ngcontent-%COMP%] {\n  top: -4.25px;\n  font-size: 11px;\n  position: relative;\n}\n.product-price[_ngcontent-%COMP%]   .price-value[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-family: cursive;\n}\n@media only screen and (max-width: 768px) {\n  .product-price[_ngcontent-%COMP%]   .price-value[_ngcontent-%COMP%] {\n    font-family: sans-serif;\n  }\n}\n.btn-outline[_ngcontent-%COMP%], .btn-outline-modal[_ngcontent-%COMP%] {\n  color: #313e24;\n  background-color: #e3dfce;\n  border-color: #313e24;\n  font-weight: bold;\n  letter-spacing: 0.05em;\n  border-radius: 20px;\n  padding: 3px 10px !important;\n  cursor: pointer;\n}\n.btn-outline[_ngcontent-%COMP%]:active, .btn-outline-modal[_ngcontent-%COMP%]:active, .btn-outline[_ngcontent-%COMP%]:hover, .btn-outline-modal[_ngcontent-%COMP%]:hover, .btn-outline[_ngcontent-%COMP%]:focus, .btn-outline-modal[_ngcontent-%COMP%]:focus {\n  color: #313e24;\n  background-color: #e3dfce;\n  border-color: #313e24;\n}\n.btn-outline[_ngcontent-%COMP%]:active, .btn-outline-modal[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n}\n.btn-outline-customsecondary[_ngcontent-%COMP%], .btn-outline-removebtn[_ngcontent-%COMP%] {\n  color: #ad974f;\n  background-color: #313e24;\n  border-color: #ad974f;\n  font-weight: bold;\n  letter-spacing: 0.05em;\n  border-radius: 20px;\n  padding: 3px 10px !important;\n  box-shadow: 2px 2px gainsboro;\n  cursor: pointer;\n}\n.btn-outline-customsecondary[_ngcontent-%COMP%]:active, .btn-outline-removebtn[_ngcontent-%COMP%]:active, .btn-outline-customsecondary[_ngcontent-%COMP%]:hover, .btn-outline-removebtn[_ngcontent-%COMP%]:hover, .btn-outline-customsecondary[_ngcontent-%COMP%]:focus, .btn-outline-removebtn[_ngcontent-%COMP%]:focus {\n  color: #ad974f;\n  background-color: #313e24;\n  border-color: #ad974f;\n}\n.btn-outline-customsecondary[_ngcontent-%COMP%]:active, .btn-outline-removebtn[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n}\n.btn-color-1[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #004E64;\n  border-color: #004E64;\n  font-weight: bold;\n  letter-spacing: 0.05em;\n  border-radius: 0;\n}\n.btn-color-1[_ngcontent-%COMP%]:hover, .btn-color-1[_ngcontent-%COMP%]:active, .btn-color-1[_ngcontent-%COMP%]:focus {\n  background: #003D4F !important;\n  color: #fff !important;\n  border-color: #003D4F !important;\n}\n.btn-outline-removebtn[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 15px;\n  font-weight: 600;\n  z-index: 1000;\n  white-space: pre-wrap;\n  border: none !important;\n}\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  margin: -0.5rem -0.2rem -1rem auto !important;\n}\n  .modal-content {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  background-color: #e3dfce;\n}\n@media only screen and (max-width: 768px) {\n  .modal-body[_ngcontent-%COMP%] {\n    max-height: 580px;\n    overflow: auto;\n  }\n}\nbutton[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed !important;\n}\n.total-text[_ngcontent-%COMP%] {\n  font-weight: 600 !important;\n}\n.out-of-stock[_ngcontent-%COMP%]   .out-of-stock-text[_ngcontent-%COMP%] {\n  margin: auto;\n  text-transform: uppercase;\n  color: #fff;\n  background: #a90b0b;\n  border: solid 1px gainsboro;\n  border-radius: 20px;\n  padding: 6.5px 10px;\n}\n.page-heading[_ngcontent-%COMP%] {\n  text-align: center !important;\n  font-family: cursive;\n  margin-bottom: 15px !important;\n  color: #313e24;\n}\n@media only screen and (max-width: 768px) {\n  .page-heading[_ngcontent-%COMP%] {\n    font-family: sans-serif;\n  }\n}\n.hidden[_ngcontent-%COMP%] {\n  visibility: hidden !important;\n}\n@media only screen and (max-width: 768px) {\n    .alert-dismissible .close {\n    z-index: 0;\n  }\n}\n  .alert-info {\n  background-color: #313e24 !important;\n  color: #ad974f !important;\n  border-radius: 20px;\n}\n.kupipakwa[_ngcontent-%COMP%] {\n  background-image: url('kupipakwa.png');\n}\n.pottali[_ngcontent-%COMP%] {\n  background-image: url('pottali.png');\n}\n.khalviya[_ngcontent-%COMP%] {\n  background-image: url('khalviya.png');\n}\n@media screen and (min-width: 769px) {\n  .display-inline[_ngcontent-%COMP%] {\n    display: inline !important;\n  }\n}\n\n.pyro[_ngcontent-%COMP%] {\n  position: relative !important;\n  z-index: 999;\n}\n.pyro[_ngcontent-%COMP%]    > .before[_ngcontent-%COMP%], .pyro[_ngcontent-%COMP%]    > .after[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  box-shadow: 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff;\n  animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;\n}\n.pyro[_ngcontent-%COMP%]    > .after[_ngcontent-%COMP%] {\n  animation-delay: 1.25s, 1.25s, 1.25s;\n  animation-duration: 1.25s, 1.25s, 6.25s;\n}\n@keyframes bang {\n  to {\n    box-shadow: 47px -221.6666666667px #ff00d5, -40px -135.6666666667px #ff9900, -130px -247.6666666667px #ff0051, 109px -66.6666666667px #1100ff, 230px -207.6666666667px #ff001e, -74px -302.6666666667px #ff3700, -235px -216.6666666667px #00c8ff, -13px -162.6666666667px #00ff7b, 85px -381.6666666667px red, 131px -141.6666666667px #9100ff, 48px -203.6666666667px #00ff66, 157px -246.6666666667px #66ff00, -49px -373.6666666667px #ff0073, 90px -170.6666666667px #ff00f2, 9px -389.6666666667px #00b3ff, 102px -54.6666666667px #00f7ff, 111px -375.6666666667px #ff00bf, -114px -199.6666666667px #3300ff, 39px 72.3333333333px #00ffb3, -181px -186.6666666667px #ffcc00, -190px -108.6666666667px #1eff00, -54px -326.6666666667px #b700ff, 97px -402.6666666667px #9900ff, -170px -260.6666666667px #ff004d, -209px -66.6666666667px #00ffee, -59px -344.6666666667px #00ff26, -122px -54.6666666667px #00ff37, 132px -39.6666666667px #eeff00, -31px -64.6666666667px #00d5ff, -28px -211.6666666667px #8400ff, -165px -150.6666666667px #b300ff, -129px -268.6666666667px #00ffdd, 21px -118.6666666667px #7300ff, 36px -370.6666666667px #a600ff, 77px -300.6666666667px #4800ff, -70px 36.3333333333px #ff005e, 148px -318.6666666667px #b300ff, -224px -126.6666666667px #009dff, 130px 9.3333333333px #77ff00, 12px -215.6666666667px #00e1ff, -231px -264.6666666667px #ddff00, 91px -114.6666666667px #00ff95, -83px -16.6666666667px #d5ff00, -18px -228.6666666667px #0044ff, -151px -367.6666666667px #ff3c00, 25px 4.3333333333px #ff00c4, -88px -145.6666666667px #0015ff, -40px -166.6666666667px #ff0051, 106px -112.6666666667px #00ff40, 133px -358.6666666667px #f700ff, -206px -102.6666666667px #9d00ff;\n  }\n}\n@keyframes gravity {\n  to {\n    transform: translateY(200px);\n    -moz-transform: translateY(200px);\n    -webkit-transform: translateY(200px);\n    -o-transform: translateY(200px);\n    -ms-transform: translateY(200px);\n    opacity: 0;\n  }\n}\n@keyframes position {\n  0%, 19.9% {\n    margin-top: 10%;\n    margin-left: 40%;\n  }\n  20%, 39.9% {\n    margin-top: 40%;\n    margin-left: 30%;\n  }\n  40%, 59.9% {\n    margin-top: 20%;\n    margin-left: 70%;\n  }\n  60%, 79.9% {\n    margin-top: 30%;\n    margin-left: 20%;\n  }\n  80%, 99.9% {\n    margin-top: 30%;\n    margin-left: 80%;\n  }\n}\n.cart-checkbox-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n@media screen and (max-width: 768px) {\n  .cart-checkbox-container[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n  }\n}\n.cart-checkbox-container[_ngcontent-%COMP%]   .cart-item-checkbox[_ngcontent-%COMP%] {\n  font-family: system-ui, sans-serif;\n  font-size: 21rem;\n  font-weight: bold;\n  line-height: 1.1;\n  display: grid;\n  grid-template-columns: 1em auto;\n  gap: 0.5em;\n  width: 20px;\n  height: 20px;\n}\n.cart-item-selected[_ngcontent-%COMP%] {\n  background-color: gainsboro;\n}\n.mutiple-selection-actionbtns[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n  position: sticky;\n  top: 55px;\n  padding: 10px;\n  font-size: 20px;\n  width: 65%;\n  z-index: 999;\n  margin: auto;\n  border: solid 1px gainsboro;\n  transition: width 2s, opacity 0.5s linear;\n  background-color: #e3dfce;\n  border-radius: 20px;\n}\n@media screen and (max-width: 768px) {\n  .mutiple-selection-actionbtns[_ngcontent-%COMP%] {\n    width: 93% !important;\n    top: 0px;\n  }\n}\n.mutiple-selection-actionbtns[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%], .mutiple-selection-actionbtns[_ngcontent-%COMP%]   .btn-outline-modal[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n}\n@media screen and (max-width: 768px) {\n  .mutiple-selection-actionbtns[_ngcontent-%COMP%]   .multiselect-btns-container[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .mutiple-selection-actionbtns[_ngcontent-%COMP%]   .select-deselect-btncontainer[_ngcontent-%COMP%] {\n    padding-right: 0px;\n  }\n}\n.select-deselect-btncontainer[_ngcontent-%COMP%] {\n  margin-bottom: 15px !important;\n}\n@media screen and (max-width: 768px) {\n  .place-order-btn[_ngcontent-%COMP%] {\n    width: 50% !important;\n  }\n}\n@media screen and (max-width: 768px) {\n  .remove-btn[_ngcontent-%COMP%] {\n    width: 41% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9FOlxcVUkgcHJvamVjdFxcUmFzYWhyaWRheVxcQ2xpZW50X0VkaXRhYmxlUXVlc3Rpb25zQW5zd2Vycy9zcmNcXGFzc2V0c1xcc2Nzc1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NhcnQvRTpcXFVJIHByb2plY3RcXFJhc2FocmlkYXlcXENsaWVudF9FZGl0YWJsZVF1ZXN0aW9uc0Fuc3dlcnMvc3JjXFxhc3NldHNcXHNjc3NcXGNvbW1vbi5zY3NzIiwic3JjL2FwcC9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhcnQvRTpcXFVJIHByb2plY3RcXFJhc2FocmlkYXlcXENsaWVudF9FZGl0YWJsZVF1ZXN0aW9uc0Fuc3dlcnMvc3JjXFxhcHBcXGNhcnRcXGNhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0RBLGlCQUFBO0FDcERBO0VBQ0UsK0JBQUE7RUFDQSw0QkFBQTtBQ0ZGO0FES0E7RUFDRSxnQ0FBQTtFQUNBLDZCQUFBO0FDRkY7QURLQTtFQUNFLHNCQUFBO0FDRkY7QURLQTtFQUNFLGlCQUFBO0FDRkY7QURJRTtFQUhGO0lBSUksa0JBQUE7RUNERjtBQUNGO0FESUE7RUFDRSxjRFJrQjtBRU9wQjtBRElBO0VBQ0UsdUJBQUE7QUNERjtBRElBO0VBQ0UsNEJBQUE7QUNERjtBRElBO0VBQ0UsNkJBQUE7QUNERjtBRElBO0VBQ0Usa0JBQUE7QUNERjtBREtFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNGSjtBRE1BO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDSEY7QURLRTtFQUxGO0lBTUksVUFBQTtFQ0ZGO0FBQ0Y7QURJRTtFQUNHLG1CQUFBO0FDRkw7QURHSTtFQUNFLG9DQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkRWc0I7RUNXdEIsWUFBQTtBQ0ROO0FES0U7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkQzQjJCO0VDNEIzQixtQkFBQTtBQ0hKO0FES0k7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0hOO0FES007RUFDRSx1QkFBQTtBQ0hSO0FET0k7RUFwQkY7SUFxQkksWUFBQTtFQ0pKO0FBQ0Y7QURPRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtBQ0xKO0FET0k7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNMTjtBRFFJO0VBQ0UsWUFBQTtBQ05OO0FEVUU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsNkJEN0R3QjtFQzhEeEIsNEJEOUR3QjtFQytEeEIsZ0NEL0R3QjtFQ2dFeEIsK0JEaEV3QjtBRXdENUI7QURZRTtFQUNFLFlBQUE7QUNWSjtBRGFFO0VBQ0csZ0JBQUE7RUFDQSxtQkFBQTtBQ1hMO0FEY0U7RUFDRSxjRHZGNEI7RUN3RjVCLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FDWko7QURlRTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNiSjtBRGdCRTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7QUNkSjtBRGdCSTtFQUNFLGtCQUFBO0VBQ0EsY0Q5RzBCO0FFZ0doQztBRGlCSTtFQUNJLG1CQUFBO0FDZlI7QURpQlE7RUFDSSxtQkRySG9CO0VDc0hwQixXRGhJWTtFQ2lJWiwwQkFBQTtFQUNBLG1CQUFBO0FDZlo7QURvQkU7RUFDRSxtQkFBQTtBQ2xCSjtBRG9CSTtFQUNFLGtCQUFBO0VBQ0EsbUJEaEl5QjtFQ2lJekIscUJEbkkwQjtBRWlIaEM7QURzQk87RUFESDtJQUVNLDBCQUFBO0lBQ0EseUJBQUE7RUNuQlI7QUFDRjtBRHVCSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJEakp3QjtFQ2tKeEIsY0RqSndCO0VDa0p4Qix5QkFBQTtBQ3JCUjtBRHdCSTtFQUNJLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0QxSndCO0FFb0loQztBRDJCSTtFQUNFLHlCRC9KMEI7RUNnSzFCLFdENUptQjtBRW1JekI7QUQyQkk7RUFDRSxjRHBLMEI7RUNxSzFCLGlCQUFBO0FDekJOO0FENkJFO0VBQ0UsaUJBQUE7QUMzQko7QUQwQ0E7RUFDRSxtQkFBQTtBQ3ZDRjtBRHlDRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUN2Q0o7QUR5Q0U7RUFDRyxlQUFBO0VBQ0Esb0JBQUE7QUN2Q0w7QUR5Q0s7RUFKSDtJQUtJLHVCQUFBO0VDdENKO0FBQ0Y7QUQwQ0E7RUFDRSxjRDVNOEI7RUM2TTlCLHlCRDNNNkI7RUM0TTdCLHFCRDlNOEI7RUMrTTlCLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtBQ3ZDRjtBRHlDRTtFQUdFLGNEeE40QjtFQ3lONUIseUJEdk4yQjtFQ3dOM0IscUJEMU40QjtBRWlMaEM7QUQyQ0U7RUFDRSwwQkFBQTtBQ3pDSjtBRDZDQTtFQUNFLGNEak84QjtFQ2tPOUIseUJEbk84QjtFQ29POUIscUJEbk84QjtFQ29POUIsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUMxQ0Y7QUQ0Q0U7RUFHRSxjRDlPNEI7RUMrTzVCLHlCRGhQNEI7RUNpUDVCLHFCRGhQNEI7QUVvTWhDO0FEOENFO0VBQ0UsMEJBQUE7QUM1Q0o7QURpREE7RUFDRSxXRHRTa0I7RUN1U2xCLHlCRDlRbUI7RUMrUW5CLHFCRC9RbUI7RUNnUm5CLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQzlDRjtBRGdERTtFQUdFLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtBQ2hESjtBRG9EQTtFQUVFLGVBQUE7QUNsREY7QUQwREE7RUFDRSxzQkFBQTtBQ3hERjtBRDJEQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQ3hERjtBRDBERTtFQUNFLDZDQUFBO0FDeERKO0FENkRFO0VBQ0UsNEJEN1J3QjtFQzhSeEIsNkJEOVJ3QjtFQytSeEIsK0JEL1J3QjtFQ2dTeEIsZ0NEaFN3QjtFQ2lTeEIseUJEelMyQjtBRStPL0I7QUQrREU7RUFERjtJQUVJLGlCQUFBO0lBQ0EsY0FBQTtFQzNERjtBQUNGO0FEOERBO0VBQ0UsOEJBQUE7QUMzREY7QUQ4REE7RUFDRSwyQkFBQTtBQzNERjtBRCtERTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFdENVVrQjtFQzZVbEIsbUJEclV3QjtFQ3NVeEIsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDNUROO0FEb0VBO0VBQ0UsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0RsVjhCO0FFaVJoQztBRG1FRTtFQU5GO0lBT0ksdUJBQUE7RUNoRUY7QUFDRjtBRG1FQTtFQUNFLDZCQUFBO0FDaEVGO0FEc0VNO0VBREY7SUFFSSxVQUFBO0VDbEVOO0FBQ0Y7QURxRUU7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJEOVZ3QjtBRTJSNUI7QUR1RUE7RUFDRSxzQ0FBQTtBQ3BFRjtBRHVFQTtFQUNFLG9DQUFBO0FDcEVGO0FEdUVBO0VBQ0UscUNBQUE7QUNwRUY7QUR3RUU7RUFERjtJQUVNLDBCQUFBO0VDcEVKO0FBQ0Y7QUR1RUEsaUNBQUE7QUFxRUE7RUFDRSw2QkFBQTtFQUNBLFlBQUE7QUN4SUY7QUQySUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Z0JBbEVjO0VBNkNaLDRIQXNCaUI7QUNwSXJCO0FEdUlBO0VBekNJLG9DQTBDdUI7RUFsQ3ZCLHVDQW1DMEI7QUM1SDlCO0FEdUVJO0VBeURGO0lBQ0Usd29EQWpGVztFQ3ZCYjtBQUNGO0FENkNJO0VBK0RGO0lBakNFLDRCQWtDbUI7SUFqQ25CLGlDQWlDbUI7SUFoQ25CLG9DQWdDbUI7SUEvQm5CLCtCQStCbUI7SUE5Qm5CLGdDQThCbUI7SUFDbkIsVUFBQTtFQzdERjtBQUNGO0FETEk7RUFzRUY7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUMwQkY7RUR4QkE7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUMwQkY7RUR4QkE7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUMwQkY7RUR4QkE7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUMwQkY7RUR4QkE7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUMwQkY7QUFDRjtBQzlqQkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QURna0JKO0FDOWpCSTtFQUpKO0lBS1EsbUJBQUE7RURpa0JOO0FBQ0Y7QUMvakJJO0VBQ0ksa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QURpa0JSO0FDN2pCQTtFQUNJLDJCSFllO0FFb2pCbkI7QUM3akJBO0VBQ0ksNEJIZ0JxQjtFR2ZyQixnQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EseUNBQUE7RUFDQSx5QkhXMkI7RUdWM0IsbUJIa0J3QjtBRThpQjVCO0FDOWpCSTtFQWRKO0lBZVEscUJBQUE7SUFDQSxRQUFBO0VEaWtCTjtBQUNGO0FDL2pCSTtFQUNJLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtBRGlrQlI7QUM3akJRO0VBREo7SUFFUSxtQkFBQTtFRGdrQlY7QUFDRjtBQzVqQlE7RUFESjtJQUVRLGtCQUFBO0VEK2pCVjtBQUNGO0FDM2pCQTtFQUNJLDhCQUFBO0FEOGpCSjtBQzFqQkk7RUFESjtJQUVRLHFCQUFBO0VEOGpCTjtBQUNGO0FDMWpCSTtFQURGO0lBRU0scUJBQUE7RUQ4akJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkaGVhZGVyLXRoZW1lLWJhY2tncm91bmQ6I2ZiZmJmYjtcclxuJGhlYWRlci10aGVtZS1jb2xvcjojZDg0MzE1O1xyXG4kYnV0dG9uLXRoZW1lLWJhY2tncm91bmQ6I2YwN2MyOTtcclxuJGJ1dHRvbi10aGVtZS1jb2xvcjojZmZmO1xyXG4kc2VhcmNoQnRuLXRoZW1lLWJhY2tncm91bmQ6IzI4YTc0NTtcclxuJHNlYXJjaEJ0bi10aGVtZS1jb2xvcjojZmZmO1xyXG4kcXVlc3Rpb25zLXRoZW1lLWNvbG9yOmJsYWNrO1xyXG4kc2hvd0hpZGVUb2dnbGVJY29uLWNvbG9yOiNmMDdjMjk7XHJcbiRzaG93SGlkZS1idG4tYmFja2dyb3VuZDp3aGl0ZTtcclxuJHNob3dIaWRlLWJ0bi1jb2xvcjpncmV5O1xyXG4kYmFja2dyb3VuZC1pbWc6J2JhY2tncm91bmQtaW1nLnBuZyc7XHJcbiRpbWctcGF0aDonLi9hc3NldHMvaW1hZ2VzLyc7XHJcbiRnb2xkZW50aGVtZS1iYWNrZ3JvdW5kLWltZzogJ2dvbGRlbnRoZW1lLWJhY2tncm91bmQtaW1nLnBuZyc7IFxyXG4kYm9keS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4kcGFnZS1jb250YWluZXItYmFja2dyb3VuZDogd2hpdGU7XHJcbiRwcm9kdWN0LW5hbWUtY29sb3I6IzMzMztcclxuJHByb2R1Y3QtZGVzY3JpcHRpb24tY29sb3I6IzdlNmU2ZTtcclxuJGNvbnRhaW5lci1ib3JkZXItY29sb3I6ICNkY2RjZGM7XHJcbiRidG4tbGlnaHRkZWZhdWx0LWJvcmRlcjogI2RjZGNkYztcclxuJGRlbGV0ZS1pY29uLWNvbG9yOiAjY2U0NTQ1O1xyXG4kYnRuLWRlZmF1bHQ6I2Y4ZjlmYTsgXHJcbiRjb25maXJtLXN0YXR1cy1iYWNrZ3JvdW5kOiBhbGljZUJsdWU7XHJcbiRjaGVjay1pY29uLWNvbG9yOiBncmVlbjtcclxuJHBlbmRpbmdjbG9jay1pY29uLWNvbG9yOiAjNThiNmQ1O1xyXG4kcGVuZGluZy1zdGF0dXMtYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxuJHByb2R1Y3QtaG92ZXItYm9yZGVyOiBibGFjaztcclxuJGdvbGRlbnRoZW1lLXByb2R1Y3QtaG92ZXI6ICNlZWNkNWY7XHJcbiRidG4tb3V0bGluZS1jb2xvcjogIzRmYmZhODtcclxuJGJ0bi1vdXRsaW5lLWNvbG9yMTogIzAwNEU2NDtcclxuJGJ0bi1vdXRsaW5lLWNvbG9yMS1hY3RpdmU6ICMwMDNENEY7XHJcbiRjb250YWN0LXVzLWZvb3RlcjogI2VkZjBmNTtcclxuJGNvcHlyaWdodC1mb290ZXI6ICMzMTNlMjQ7XHJcbiRnb2xkZW50aGVtZS1jb3B5cmlnaHQtZm9vdGVyOiAjMzEzZTI0O1xyXG4kY29udGFjdC11cy1mb290ZXJjb2xvcjogIzIxMjUyOTtcclxuJGNvbnRhY3R1cy1saW5raWNvbi1jb2xvcjogIzAwNWM1MDtcclxuJGNvbnRhY3QtdXMtYm9yZGVyOiBnYWluc2Jvcm87XHJcbiRib3gtc2hhZG93LWNvbG9yOiBnYWluc2Jvcm87XHJcbiRidG4tb3V0bGluZS10ZXh0Y29sb3I6ICNmZmY7XHJcbiRidG4tb3V0bGluZXNlY29uZGFyeS1ib3JkZXJob3ZlcjogIzAwNjQwMDtcclxuJGJ0bi1vdXRsaW5lLWJhY2tncm91bmRob3ZlcjogIzNkOGQ3YztcclxuJGJ0bi1zZWFyY2gtYmFja2dyb3VuZDogIzM3N2Q2ZTsgXHJcbiRoZWFkZXItYm94LXNoYWRvd2NvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4kYnRuLW91dGxpbmUtcmVtb3ZlYnRuOiBpbmRpYW5yZWQ7XHJcbiRwaG9uZW51bWJlci1saW5rLWNvbG9yOiBncmVlbjtcclxuJGNhcnQtc3RpY2t5LWJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbiRvdXRPZlN0b2NrLWJhY2tncm91bmQtY29sb3I6ICNhOTBiMGI7XHJcbiRjYXJ0LWljb24tY29sb3I6ICNhOTBiMGI7XHJcbiRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDogIzMxM2UyNDtcclxuJGdvbGRlbnRoZW1lLWhlYWRlcnRleHQtY29sb3I6ICAjYWQ5NzRmO1xyXG4kZ29sZGVudGhlbWUtcGFuZWwtYmFja2dyb3VuZDogI2UzZGZjZTtcclxuJGdvbGRlbnRoZW1lLXByb2R1Y3RkZXNjcmlwdGlvbi1jb2xvcjogIzIzMWYyMDtcclxuJGdvbGRlbnRoZW1lLXByb2R1Y3RkZXNjcmlwdGlvbi1jb2xvcjojMzMzO1xyXG4kZ29sZGVudGhlbWUtYmFkZ2UtdGV4dDogI2ZmZjtcclxuJGdvbGRlbnRoZW1lLWZvb3Rlci1jb2xvcjogI2I1YjE5NjtcclxuJGdvbGRlbnRoZW1lLWNvbmZpcm1tb2RhbC1ib3JkZXJjb2xvcjogI2M0YmFiYTtcclxuJGdvbGRlbnRoZW1lLWNhcm91c2VsdGV4dC1jb2xvcjogI2JlYjg5YztcclxuLyogY29uc3QgdmFsdWVzICovXHJcbiRnb2xkZW50aGVtZS1ib3JkZXItcmFkaXVzOiAyMHB4OyIsIkBpbXBvcnQgXCIuL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4kaW1nLXBhdGg6ICd+c3JjL2Fzc2V0cy9pbWFnZXMvJztcclxuXHJcbiVxdWFudGl0eWJ0bi1sZWZ0LWJvcmRlcnJhZGl1cyB7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4lcXVhbnRpdHlidG4tcmlnaHQtYm9yZGVycmFkaXVzIHtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcclxufVxyXG5cclxuLmJ0bi1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZWRpdC1pY29uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmRlbGV0ZS1pY29uIHtcclxuICBjb2xvcjogJGRlbGV0ZS1pY29uLWNvbG9yO1xyXG59XHJcblxyXG4ubm8tcGFkZGluZyB7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uby1wYWRkaW5nLWxlZnQge1xyXG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uby1wYWRkaW5nLXJpZ2h0IHtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmVtcHR5LWRhdGEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRlZmF1bHQtaW1nLWNvbnRhaW5lciB7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FydC1jb250YWluZXIge1xyXG4gIHdpZHRoOiA2NCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1vcmRlcmVkLWRhdGVjb250YWluZXIge1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAub3JkZXJlZC1kYXRlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlcnRleHQtY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6ICRnb2xkZW50aGVtZS1iYWRnZS10ZXh0ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRnb2xkZW50aGVtZS1ib3JkZXItcmFkaXVzO1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9kdWN0LWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMnB4ICRib3gtc2hhZG93LWNvbG9yO1xyXG4gICAgYmFja2dyb3VuZDogJGdvbGRlbnRoZW1lLXBhbmVsLWJhY2tncm91bmQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cclxuICAgIC51c2VyLWRldGFpbHMge1xyXG4gICAgICBjb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlcjogc29saWQgMXB4ICRnb2xkZW50aGVtZS1oZWFkZXJ0ZXh0LWNvbG9yO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAgICAgLnBob25lLW51bWJlciB7XHJcbiAgICAgICAgY29sb3I6ICRwaG9uZW51bWJlci1saW5rLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7IFxyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1pbWctY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIC5wcm9kdWN0LWltYWdlcyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9kdWN0LWltZyB7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wcm9kdWN0LWltZyB7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAkY29udGFpbmVyLWJvcmRlci1jb2xvcjtcclxuICAgIG1hcmdpbjogYXV0byBhdXRvIDE1cHggYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRnb2xkZW50aGVtZS1ib3JkZXItcmFkaXVzO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJGdvbGRlbnRoZW1lLWJvcmRlci1yYWRpdXM7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGdvbGRlbnRoZW1lLWJvcmRlci1yYWRpdXM7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkZ29sZGVudGhlbWUtYm9yZGVyLXJhZGl1cztcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLmFkZC10by1jYXJ0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcblxyXG4gIC5jYXJ0LWl0ZW0tYWN0aW9uYnRucyB7XHJcbiAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLnByb2R1Y3QtbmFtZSB7XHJcbiAgICBjb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlcnRleHQtY29sb3I7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1kZXNjcmlwdGlvbiB7XHJcbiAgICBjb2xvcjogJHByb2R1Y3QtZGVzY3JpcHRpb24tY29sb3IgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgLmRydWctcXVhbnRpdHktY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuXHJcbiAgICAuZHJ1Zy1xdWFudGl0eS10aXRsZSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICAgIH1cclxuICBcclxuICAgIC5kcnVnLXF1YW50aXR5dmFsdWUtY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5kcnVnLXF1YW50aXR5LXZhbHVlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kO1xyXG4gICAgICAgICAgICBjb2xvcjogJGJ0bi1vdXRsaW5lLXRleHRjb2xvcjtcclxuICAgICAgICAgICAgcGFkZGluZzogNnB4IDEycHggNnB4IDEycHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucXVhbnRpdHktY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgXHJcbiAgICAucXR5LWlucHV0IHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkZ29sZGVudGhlbWUtcGFuZWwtYmFja2dyb3VuZDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnF1YW50aXR5LWZpZWxkcy1jb250YWluZXIge1xyXG4gICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTNweCkgYW5kIChtYXgtd2lkdGg6IDE1MDBweCkge1xyXG4gICAgICAgICAgZmxleC1iYXNpczogMzIlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDMyJSAhaW1wb3J0YW50O1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG5cclxuICBcclxuICAgIC5pbnB1dC1ncm91cC10ZXh0IHtcclxuICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kO1xyXG4gICAgICAgIGNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVydGV4dC1jb2xvcjtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucXVhbnRpdHktdGl0bGUge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIC5xdWFudGl0eS1yZWFkb25seS1jb250YWluZXIge1xyXG4gICAgLnF1YW50aXR5LXZhbHVlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlcnRleHQtY29sb3I7XHJcbiAgICAgIGNvbG9yOiAkZ29sZGVudGhlbWUtYmFkZ2UtdGV4dDtcclxuICAgIH1cclxuICAgIC5xdWFudGl0eS10ZXh0IHtcclxuICAgICAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYnRuLW91dGxpbmUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtcHJlcGVuZCB7XHJcbiAgLmlucHV0LWdyb3VwLXRleHQge1xyXG4gICAgICBAZXh0ZW5kICVxdWFudGl0eWJ0bi1sZWZ0LWJvcmRlcnJhZGl1cztcclxuICB9XHJcbn1cclxuLmlucHV0LWdyb3VwLWFwcGVuZCB7XHJcbiAgICAuaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgICAgICAgQGV4dGVuZCAlcXVhbnRpdHlidG4tcmlnaHQtYm9yZGVycmFkaXVzO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucHJvZHVjdC1wcmljZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgLmN1cnJlbnQtY3VycmVuY3ktc3ltYm9sIHtcclxuICAgIHRvcDogLTQuMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLnByaWNlLXZhbHVlIHtcclxuICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcblxyXG4gICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLW91dGxpbmUge1xyXG4gIGNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdvbGRlbnRoZW1lLXBhbmVsLWJhY2tncm91bmQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDNweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAmOmFjdGl2ZSxcclxuICAmOmhvdmVyLFxyXG4gICY6Zm9jdXMge1xyXG4gICAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRnb2xkZW50aGVtZS1wYW5lbC1iYWNrZ3JvdW5kO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgfVxyXG4gICY6YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLWN1c3RvbXNlY29uZGFyeSB7XHJcbiAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXJ0ZXh0LWNvbG9yO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICBib3JkZXItY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXJ0ZXh0LWNvbG9yO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiAzcHggMTBweCAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggJGJveC1zaGFkb3ctY29sb3I7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIFxyXG4gICY6YWN0aXZlLFxyXG4gICY6aG92ZXIsXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBjb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlcnRleHQtY29sb3I7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgICBib3JkZXItY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXJ0ZXh0LWNvbG9yO1xyXG4gIH1cclxuICAmOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcclxuICB9XHJcblxyXG59XHJcblxyXG4uYnRuLWNvbG9yLTEge1xyXG4gIGNvbG9yOiAkYnV0dG9uLXRoZW1lLWNvbG9yO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRidG4tb3V0bGluZS1jb2xvcjE7XHJcbiAgYm9yZGVyLWNvbG9yOiAkYnRuLW91dGxpbmUtY29sb3IxO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuXHJcbiAgJjpob3ZlcixcclxuICAmOmFjdGl2ZSxcclxuICAmOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6ICRidG4tb3V0bGluZS1jb2xvcjEtYWN0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogJGJ1dHRvbi10aGVtZS1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkYnRuLW91dGxpbmUtY29sb3IxLWFjdGl2ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXJlbW92ZWJ0biB7XHJcbiAgQGV4dGVuZCAuYnRuLW91dGxpbmUtY3VzdG9tc2Vjb25kYXJ5O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgJjphY3RpdmUsXHJcbiAgJjpob3ZlcixcclxuICAmOmZvY3VzIHtcclxuICB9XHJcbn1cclxuXHJcbi5mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG5cclxuICAuY2xvc2Uge1xyXG4gICAgbWFyZ2luOiAtMC41cmVtIC0wLjJyZW0gLTFyZW0gYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICAubW9kYWwtY29udGVudCB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkZ29sZGVudGhlbWUtYm9yZGVyLXJhZGl1cztcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkZ29sZGVudGhlbWUtYm9yZGVyLXJhZGl1cztcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRnb2xkZW50aGVtZS1ib3JkZXItcmFkaXVzO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRnb2xkZW50aGVtZS1ib3JkZXItcmFkaXVzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdvbGRlbnRoZW1lLXBhbmVsLWJhY2tncm91bmQ7XHJcbiB9XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXgtaGVpZ2h0OiA1ODBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuYnV0dG9uW2Rpc2FibGVkXSB7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udG90YWwtdGV4dCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ub3V0LW9mLXN0b2NrIHtcclxuICAub3V0LW9mLXN0b2NrLXRleHQge1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGNvbG9yOiAkYnRuLW91dGxpbmUtdGV4dGNvbG9yO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkb3V0T2ZTdG9jay1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICBib3JkZXI6IHNvbGlkIDFweCAkYm94LXNoYWRvdy1jb2xvcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgcGFkZGluZzogNi41cHggMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1tb2RhbCB7XHJcbiAgQGV4dGVuZCAuYnRuLW91dGxpbmU7XHJcbn1cclxuXHJcbi5wYWdlLWhlYWRpbmcge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcclxuICBjb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICB9XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAge1xyXG4gIC5hbGVydC1kaXNtaXNzaWJsZSB7XHJcbiAgICAuY2xvc2Uge1xyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuYWxlcnQtaW5mbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVydGV4dC1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGdvbGRlbnRoZW1lLWJvcmRlci1yYWRpdXM7XHJcbiB9XHJcbn1cclxuXHJcbi5rdXBpcGFrd2Ege1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkaW1nLXBhdGggKyAna3VwaXBha3dhLnBuZycpO1xyXG59XHJcblxyXG4ucG90dGFsaSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCRpbWctcGF0aCArICdwb3R0YWxpLnBuZycpO1xyXG59XHJcblxyXG4ua2hhbHZpeWEge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkaW1nLXBhdGggKyAna2hhbHZpeWEucG5nJyk7XHJcbn1cclxuXHJcbi5kaXNwbGF5LWlubGluZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7IFxyXG4gIH1cclxufVxyXG5cclxuLyotLS0tZmlyZWNyYWNrZXJzIGFuaW1hdGlvbiAtLS0qL1xyXG4kcGFydGljbGVzOiA1MDtcclxuJHdpZHRoOiA1MDA7XHJcbiRoZWlnaHQ6IDUwMDtcclxuXHJcbi8vIENyZWF0ZSB0aGUgZXhwbG9zaW9uLi4uXHJcbiRib3gtc2hhZG93OiAoKTtcclxuJGJveC1zaGFkb3cyOiAoKTtcclxuQGZvciAkaSBmcm9tIDAgdGhyb3VnaCAkcGFydGljbGVzIHtcclxuICAkYm94LXNoYWRvdzogJGJveC1zaGFkb3csXHJcbiAgICAgICAgICAgICAgIHJhbmRvbSgkd2lkdGgpLSR3aWR0aCAvIDIgKyBweFxyXG4gICAgICAgICAgICAgICByYW5kb20oJGhlaWdodCktJGhlaWdodCAvIDEuMiArIHB4XHJcbiAgICAgICAgICAgICAgIGhzbChyYW5kb20oMzYwKSwgMTAwLCA1MCk7XHJcbiAgJGJveC1zaGFkb3cyOiAkYm94LXNoYWRvdzIsIDAgMCAjZmZmXHJcbn1cclxuQG1peGluIGtleWZyYW1lcyAoJGFuaW1hdGlvbk5hbWUpIHtcclxuICAgIEAtd2Via2l0LWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgQC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxuXHJcbiAgICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxuXHJcbiAgICBALW1zLWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgQGtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBhbmltYXRpb24tZGVsYXkgKCRzZXR0aW5ncykge1xyXG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6ICRzZXR0aW5ncztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAkc2V0dGluZ3M7XHJcbiAgICAtby1hbmltYXRpb24tZGVsYXk6ICRzZXR0aW5ncztcclxuICAgIC1tcy1hbmltYXRpb24tZGVsYXk6ICRzZXR0aW5ncztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogJHNldHRpbmdzO1xyXG59XHJcblxyXG5AbWl4aW4gYW5pbWF0aW9uLWR1cmF0aW9uICgkc2V0dGluZ3MpIHtcclxuICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAkc2V0dGluZ3M7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogJHNldHRpbmdzO1xyXG4gICAgLW8tYW5pbWF0aW9uLWR1cmF0aW9uOiAkc2V0dGluZ3M7XHJcbiAgICAtbXMtYW5pbWF0aW9uLWR1cmF0aW9uOiAkc2V0dGluZ3M7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246ICRzZXR0aW5ncztcclxufVxyXG5cclxuQG1peGluIGFuaW1hdGlvbiAoJHNldHRpbmdzKSB7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogJHNldHRpbmdzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246ICRzZXR0aW5ncztcclxuICAgIC1vLWFuaW1hdGlvbjogJHNldHRpbmdzO1xyXG4gICAgLW1zLWFuaW1hdGlvbjogJHNldHRpbmdzO1xyXG4gICAgYW5pbWF0aW9uOiAkc2V0dGluZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2Zvcm0gKCRzZXR0aW5ncykge1xyXG4gICAgdHJhbnNmb3JtOiAkc2V0dGluZ3M7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogJHNldHRpbmdzO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICRzZXR0aW5ncztcclxuICAgIC1vLXRyYW5zZm9ybTogJHNldHRpbmdzO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogJHNldHRpbmdzO1xyXG59XHJcblxyXG4ucHlybyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4ucHlybyA+IC5iZWZvcmUsIC5weXJvID4gLmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDVweDtcclxuICBoZWlnaHQ6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm94LXNoYWRvdzogJGJveC1zaGFkb3cyO1xyXG4gIEBpbmNsdWRlIGFuaW1hdGlvbigoMXMgYmFuZyBlYXNlLW91dCBpbmZpbml0ZSBiYWNrd2FyZHMsIDFzIGdyYXZpdHkgZWFzZS1pbiBpbmZpbml0ZSBiYWNrd2FyZHMsIDVzIHBvc2l0aW9uIGxpbmVhciBpbmZpbml0ZSBiYWNrd2FyZHMpKTtcclxufVxyXG4gICAgXHJcbi5weXJvID4gLmFmdGVyIHtcclxuICBAaW5jbHVkZSBhbmltYXRpb24tZGVsYXkoKDEuMjVzLCAxLjI1cywgMS4yNXMpKTtcclxuICBAaW5jbHVkZSBhbmltYXRpb24tZHVyYXRpb24oKDEuMjVzLCAxLjI1cywgNi4yNXMpKTtcclxufVxyXG4gICAgICAgIFxyXG5AaW5jbHVkZSBrZXlmcmFtZXMoYmFuZykge1xyXG4gIHRvIHtcclxuICAgIGJveC1zaGFkb3c6JGJveC1zaGFkb3c7XHJcbiAgfVxyXG59XHJcbiAgICBcclxuQGluY2x1ZGUga2V5ZnJhbWVzKGdyYXZpdHkpICB7XHJcbiAgdG8ge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZVkoMjAwcHgpKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcbiAgICBcclxuQGluY2x1ZGUga2V5ZnJhbWVzKHBvc2l0aW9uKSB7XHJcbiAgMCUsIDE5LjklIHtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbiAgfVxyXG4gIDIwJSwgMzkuOSUge1xyXG4gICAgbWFyZ2luLXRvcDogNDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICB9XHJcbiAgNDAlLCA1OS45JSB7ICBcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA3MCVcclxuICB9XHJcbiAgNjAlLCA3OS45JSB7ICBcclxuICAgIG1hcmdpbi10b3A6IDMwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgfVxyXG4gIDgwJSwgOTkuOSUgeyAgXHJcbiAgICBtYXJnaW4tdG9wOiAzMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogODAlO1xyXG4gIH1cclxufVxyXG5cclxuIiwiLyogY29uc3QgdmFsdWVzICovXG4uaW5wdXQtZ3JvdXAtcHJlcGVuZCAuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG59XG5cbi5pbnB1dC1ncm91cC1hcHBlbmQgLmlucHV0LWdyb3VwLXRleHQge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG59XG5cbi5idG4tZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5lZGl0LWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmVkaXQtaWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICB9XG59XG5cbi5kZWxldGUtaWNvbiB7XG4gIGNvbG9yOiAjY2U0NTQ1O1xufVxuXG4ubm8tcGFkZGluZyB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubm8tcGFkZGluZy1sZWZ0IHtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLm5vLXBhZGRpbmctcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLmVtcHR5LWRhdGEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kZWZhdWx0LWltZy1jb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uY2FydC1jb250YWluZXIge1xuICB3aWR0aDogNjQlO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJ0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxufVxuLmNhcnQtY29udGFpbmVyIC5wcm9kdWN0LW9yZGVyZWQtZGF0ZWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uY2FydC1jb250YWluZXIgLnByb2R1Y3Qtb3JkZXJlZC1kYXRlY29udGFpbmVyIC5vcmRlcmVkLWRhdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWQ5NzRmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAucHJvZHVjdC1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IDJweCBnYWluc2Jvcm87XG4gIGJhY2tncm91bmQ6ICNlM2RmY2U7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4uY2FydC1jb250YWluZXIgLnByb2R1Y3QtaXRlbSAudXNlci1kZXRhaWxzIHtcbiAgY29sb3I6ICMzMTNlMjQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2FkOTc0ZjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAucHJvZHVjdC1pdGVtIC51c2VyLWRldGFpbHMgLnBob25lLW51bWJlciB7XG4gIGNvbG9yOiBncmVlbiAhaW1wb3J0YW50O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY2FydC1jb250YWluZXIgLnByb2R1Y3QtaXRlbSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG4uY2FydC1jb250YWluZXIgLnByb2R1Y3QtaW1nLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY2FydC1jb250YWluZXIgLnByb2R1Y3QtaW1nLWNvbnRhaW5lciAucHJvZHVjdC1pbWFnZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi5jYXJ0LWNvbnRhaW5lciAucHJvZHVjdC1pbWctY29udGFpbmVyIC5wcm9kdWN0LWltZyB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5jYXJ0LWNvbnRhaW5lciAucHJvZHVjdC1pbWcge1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2RjZGNkYztcbiAgbWFyZ2luOiBhdXRvIGF1dG8gMTVweCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xufVxuLmNhcnQtY29udGFpbmVyIC5hZGQtdG8tY2FydCB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAuY2FydC1pdGVtLWFjdGlvbmJ0bnMge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmNhcnQtY29udGFpbmVyIC5wcm9kdWN0LW5hbWUge1xuICBjb2xvcjogI2FkOTc0ZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5jYXJ0LWNvbnRhaW5lciAucHJvZHVjdC1kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiAjN2U2ZTZlICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAuZHJ1Zy1xdWFudGl0eS1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cbi5jYXJ0LWNvbnRhaW5lciAuZHJ1Zy1xdWFudGl0eS1jb250YWluZXIgLmRydWctcXVhbnRpdHktdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGNvbG9yOiAjMzEzZTI0O1xufVxuLmNhcnQtY29udGFpbmVyIC5kcnVnLXF1YW50aXR5LWNvbnRhaW5lciAuZHJ1Zy1xdWFudGl0eXZhbHVlLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uY2FydC1jb250YWluZXIgLmRydWctcXVhbnRpdHktY29udGFpbmVyIC5kcnVnLXF1YW50aXR5dmFsdWUtY29udGFpbmVyIC5kcnVnLXF1YW50aXR5LXZhbHVlIHtcbiAgYmFja2dyb3VuZDogIzMxM2UyNDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDZweCAxMnB4IDZweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLmNhcnQtY29udGFpbmVyIC5xdWFudGl0eS1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmNhcnQtY29udGFpbmVyIC5xdWFudGl0eS1jb250YWluZXIgLnF0eS1pbnB1dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2UzZGZjZTtcbiAgYm9yZGVyLWNvbG9yOiAjMzEzZTI0O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkzcHgpIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpIHtcbiAgLmNhcnQtY29udGFpbmVyIC5xdWFudGl0eS1jb250YWluZXIgLnF1YW50aXR5LWZpZWxkcy1jb250YWluZXIge1xuICAgIGZsZXgtYmFzaXM6IDMyJSAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMzIlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5jYXJ0LWNvbnRhaW5lciAucXVhbnRpdHktY29udGFpbmVyIC5pbnB1dC1ncm91cC10ZXh0IHtcbiAgd2lkdGg6IDM1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogIzMxM2UyNDtcbiAgY29sb3I6ICNhZDk3NGY7XG4gIGJvcmRlcjogc29saWQgMXB4ICMzMTNlMjQ7XG59XG4uY2FydC1jb250YWluZXIgLnF1YW50aXR5LWNvbnRhaW5lciAucXVhbnRpdHktdGl0bGUge1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogIzMxM2UyNDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAucXVhbnRpdHktcmVhZG9ubHktY29udGFpbmVyIC5xdWFudGl0eS12YWx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZDk3NGY7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNhcnQtY29udGFpbmVyIC5xdWFudGl0eS1yZWFkb25seS1jb250YWluZXIgLnF1YW50aXR5LXRleHQge1xuICBjb2xvcjogIzMxM2UyNDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY2FydC1jb250YWluZXIgLmJ0bi1vdXRsaW5lLCAuY2FydC1jb250YWluZXIgLmJ0bi1vdXRsaW5lLW1vZGFsIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5wcm9kdWN0LXByaWNlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5wcm9kdWN0LXByaWNlIC5jdXJyZW50LWN1cnJlbmN5LXN5bWJvbCB7XG4gIHRvcDogLTQuMjVweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvZHVjdC1wcmljZSAucHJpY2UtdmFsdWUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucHJvZHVjdC1wcmljZSAucHJpY2UtdmFsdWUge1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICB9XG59XG5cbi5idG4tb3V0bGluZSwgLmJ0bi1vdXRsaW5lLW1vZGFsIHtcbiAgY29sb3I6ICMzMTNlMjQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2RmY2U7XG4gIGJvcmRlci1jb2xvcjogIzMxM2UyNDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDNweCAxMHB4ICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idG4tb3V0bGluZTphY3RpdmUsIC5idG4tb3V0bGluZS1tb2RhbDphY3RpdmUsIC5idG4tb3V0bGluZTpob3ZlciwgLmJ0bi1vdXRsaW5lLW1vZGFsOmhvdmVyLCAuYnRuLW91dGxpbmU6Zm9jdXMsIC5idG4tb3V0bGluZS1tb2RhbDpmb2N1cyB7XG4gIGNvbG9yOiAjMzEzZTI0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkZmNlO1xuICBib3JkZXItY29sb3I6ICMzMTNlMjQ7XG59XG4uYnRuLW91dGxpbmU6YWN0aXZlLCAuYnRuLW91dGxpbmUtbW9kYWw6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG59XG5cbi5idG4tb3V0bGluZS1jdXN0b21zZWNvbmRhcnksIC5idG4tb3V0bGluZS1yZW1vdmVidG4ge1xuICBjb2xvcjogI2FkOTc0ZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxM2UyNDtcbiAgYm9yZGVyLWNvbG9yOiAjYWQ5NzRmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogM3B4IDEwcHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCBnYWluc2Jvcm87XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idG4tb3V0bGluZS1jdXN0b21zZWNvbmRhcnk6YWN0aXZlLCAuYnRuLW91dGxpbmUtcmVtb3ZlYnRuOmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLWN1c3RvbXNlY29uZGFyeTpob3ZlciwgLmJ0bi1vdXRsaW5lLXJlbW92ZWJ0bjpob3ZlciwgLmJ0bi1vdXRsaW5lLWN1c3RvbXNlY29uZGFyeTpmb2N1cywgLmJ0bi1vdXRsaW5lLXJlbW92ZWJ0bjpmb2N1cyB7XG4gIGNvbG9yOiAjYWQ5NzRmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzZTI0O1xuICBib3JkZXItY29sb3I6ICNhZDk3NGY7XG59XG4uYnRuLW91dGxpbmUtY3VzdG9tc2Vjb25kYXJ5OmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLXJlbW92ZWJ0bjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcbn1cblxuLmJ0bi1jb2xvci0xIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDRFNjQ7XG4gIGJvcmRlci1jb2xvcjogIzAwNEU2NDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uYnRuLWNvbG9yLTE6aG92ZXIsIC5idG4tY29sb3ItMTphY3RpdmUsIC5idG4tY29sb3ItMTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICMwMDNENEYgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjMDAzRDRGICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tb3V0bGluZS1yZW1vdmVidG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG4ubW9kYWwtaGVhZGVyIC5jbG9zZSB7XG4gIG1hcmdpbjogLTAuNXJlbSAtMC4ycmVtIC0xcmVtIGF1dG8gIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tb2RhbC1jb250ZW50IHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkZmNlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tb2RhbC1ib2R5IHtcbiAgICBtYXgtaGVpZ2h0OiA1ODBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxufVxuXG5idXR0b25bZGlzYWJsZWRdIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O1xufVxuXG4udG90YWwtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbn1cblxuLm91dC1vZi1zdG9jayAub3V0LW9mLXN0b2NrLXRleHQge1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjYTkwYjBiO1xuICBib3JkZXI6IHNvbGlkIDFweCBnYWluc2Jvcm87XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDYuNXB4IDEwcHg7XG59XG5cbi5wYWdlLWhlYWRpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICMzMTNlMjQ7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wYWdlLWhlYWRpbmcge1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICB9XG59XG5cbi5oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICA6Om5nLWRlZXAgLmFsZXJ0LWRpc21pc3NpYmxlIC5jbG9zZSB7XG4gICAgei1pbmRleDogMDtcbiAgfVxufVxuOjpuZy1kZWVwIC5hbGVydC1pbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxM2UyNCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2FkOTc0ZiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4ua3VwaXBha3dhIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwifnNyYy9hc3NldHMvaW1hZ2VzL2t1cGlwYWt3YS5wbmdcIik7XG59XG5cbi5wb3R0YWxpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwifnNyYy9hc3NldHMvaW1hZ2VzL3BvdHRhbGkucG5nXCIpO1xufVxuXG4ua2hhbHZpeWEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJ+c3JjL2Fzc2V0cy9pbWFnZXMva2hhbHZpeWEucG5nXCIpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICAuZGlzcGxheS1pbmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8qLS0tLWZpcmVjcmFja2VycyBhbmltYXRpb24gLS0tKi9cbi5weXJvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLnB5cm8gPiAuYmVmb3JlLCAucHlybyA+IC5hZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZjtcbiAgLW1vei1hbmltYXRpb246IDFzIGJhbmcgZWFzZS1vdXQgaW5maW5pdGUgYmFja3dhcmRzLCAxcyBncmF2aXR5IGVhc2UtaW4gaW5maW5pdGUgYmFja3dhcmRzLCA1cyBwb3NpdGlvbiBsaW5lYXIgaW5maW5pdGUgYmFja3dhcmRzO1xuICAtd2Via2l0LWFuaW1hdGlvbjogMXMgYmFuZyBlYXNlLW91dCBpbmZpbml0ZSBiYWNrd2FyZHMsIDFzIGdyYXZpdHkgZWFzZS1pbiBpbmZpbml0ZSBiYWNrd2FyZHMsIDVzIHBvc2l0aW9uIGxpbmVhciBpbmZpbml0ZSBiYWNrd2FyZHM7XG4gIC1vLWFuaW1hdGlvbjogMXMgYmFuZyBlYXNlLW91dCBpbmZpbml0ZSBiYWNrd2FyZHMsIDFzIGdyYXZpdHkgZWFzZS1pbiBpbmZpbml0ZSBiYWNrd2FyZHMsIDVzIHBvc2l0aW9uIGxpbmVhciBpbmZpbml0ZSBiYWNrd2FyZHM7XG4gIC1tcy1hbmltYXRpb246IDFzIGJhbmcgZWFzZS1vdXQgaW5maW5pdGUgYmFja3dhcmRzLCAxcyBncmF2aXR5IGVhc2UtaW4gaW5maW5pdGUgYmFja3dhcmRzLCA1cyBwb3NpdGlvbiBsaW5lYXIgaW5maW5pdGUgYmFja3dhcmRzO1xuICBhbmltYXRpb246IDFzIGJhbmcgZWFzZS1vdXQgaW5maW5pdGUgYmFja3dhcmRzLCAxcyBncmF2aXR5IGVhc2UtaW4gaW5maW5pdGUgYmFja3dhcmRzLCA1cyBwb3NpdGlvbiBsaW5lYXIgaW5maW5pdGUgYmFja3dhcmRzO1xufVxuXG4ucHlybyA+IC5hZnRlciB7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAxLjI1cywgMS4yNXMsIDEuMjVzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMS4yNXMsIDEuMjVzLCAxLjI1cztcbiAgLW8tYW5pbWF0aW9uLWRlbGF5OiAxLjI1cywgMS4yNXMsIDEuMjVzO1xuICAtbXMtYW5pbWF0aW9uLWRlbGF5OiAxLjI1cywgMS4yNXMsIDEuMjVzO1xuICBhbmltYXRpb24tZGVsYXk6IDEuMjVzLCAxLjI1cywgMS4yNXM7XG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjI1cywgMS4yNXMsIDYuMjVzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS4yNXMsIDEuMjVzLCA2LjI1cztcbiAgLW8tYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjI1cywgMS4yNXMsIDYuMjVzO1xuICAtbXMtYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjI1cywgMS4yNXMsIDYuMjVzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDEuMjVzLCAxLjI1cywgNi4yNXM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBiYW5nIHtcbiAgdG8ge1xuICAgIGJveC1zaGFkb3c6IDQ3cHggLTIyMS42NjY2NjY2NjY3cHggI2ZmMDBkNSwgLTQwcHggLTEzNS42NjY2NjY2NjY3cHggI2ZmOTkwMCwgLTEzMHB4IC0yNDcuNjY2NjY2NjY2N3B4ICNmZjAwNTEsIDEwOXB4IC02Ni42NjY2NjY2NjY3cHggIzExMDBmZiwgMjMwcHggLTIwNy42NjY2NjY2NjY3cHggI2ZmMDAxZSwgLTc0cHggLTMwMi42NjY2NjY2NjY3cHggI2ZmMzcwMCwgLTIzNXB4IC0yMTYuNjY2NjY2NjY2N3B4ICMwMGM4ZmYsIC0xM3B4IC0xNjIuNjY2NjY2NjY2N3B4ICMwMGZmN2IsIDg1cHggLTM4MS42NjY2NjY2NjY3cHggcmVkLCAxMzFweCAtMTQxLjY2NjY2NjY2NjdweCAjOTEwMGZmLCA0OHB4IC0yMDMuNjY2NjY2NjY2N3B4ICMwMGZmNjYsIDE1N3B4IC0yNDYuNjY2NjY2NjY2N3B4ICM2NmZmMDAsIC00OXB4IC0zNzMuNjY2NjY2NjY2N3B4ICNmZjAwNzMsIDkwcHggLTE3MC42NjY2NjY2NjY3cHggI2ZmMDBmMiwgOXB4IC0zODkuNjY2NjY2NjY2N3B4ICMwMGIzZmYsIDEwMnB4IC01NC42NjY2NjY2NjY3cHggIzAwZjdmZiwgMTExcHggLTM3NS42NjY2NjY2NjY3cHggI2ZmMDBiZiwgLTExNHB4IC0xOTkuNjY2NjY2NjY2N3B4ICMzMzAwZmYsIDM5cHggNzIuMzMzMzMzMzMzM3B4ICMwMGZmYjMsIC0xODFweCAtMTg2LjY2NjY2NjY2NjdweCAjZmZjYzAwLCAtMTkwcHggLTEwOC42NjY2NjY2NjY3cHggIzFlZmYwMCwgLTU0cHggLTMyNi42NjY2NjY2NjY3cHggI2I3MDBmZiwgOTdweCAtNDAyLjY2NjY2NjY2NjdweCAjOTkwMGZmLCAtMTcwcHggLTI2MC42NjY2NjY2NjY3cHggI2ZmMDA0ZCwgLTIwOXB4IC02Ni42NjY2NjY2NjY3cHggIzAwZmZlZSwgLTU5cHggLTM0NC42NjY2NjY2NjY3cHggIzAwZmYyNiwgLTEyMnB4IC01NC42NjY2NjY2NjY3cHggIzAwZmYzNywgMTMycHggLTM5LjY2NjY2NjY2NjdweCAjZWVmZjAwLCAtMzFweCAtNjQuNjY2NjY2NjY2N3B4ICMwMGQ1ZmYsIC0yOHB4IC0yMTEuNjY2NjY2NjY2N3B4ICM4NDAwZmYsIC0xNjVweCAtMTUwLjY2NjY2NjY2NjdweCAjYjMwMGZmLCAtMTI5cHggLTI2OC42NjY2NjY2NjY3cHggIzAwZmZkZCwgMjFweCAtMTE4LjY2NjY2NjY2NjdweCAjNzMwMGZmLCAzNnB4IC0zNzAuNjY2NjY2NjY2N3B4ICNhNjAwZmYsIDc3cHggLTMwMC42NjY2NjY2NjY3cHggIzQ4MDBmZiwgLTcwcHggMzYuMzMzMzMzMzMzM3B4ICNmZjAwNWUsIDE0OHB4IC0zMTguNjY2NjY2NjY2N3B4ICNiMzAwZmYsIC0yMjRweCAtMTI2LjY2NjY2NjY2NjdweCAjMDA5ZGZmLCAxMzBweCA5LjMzMzMzMzMzMzNweCAjNzdmZjAwLCAxMnB4IC0yMTUuNjY2NjY2NjY2N3B4ICMwMGUxZmYsIC0yMzFweCAtMjY0LjY2NjY2NjY2NjdweCAjZGRmZjAwLCA5MXB4IC0xMTQuNjY2NjY2NjY2N3B4ICMwMGZmOTUsIC04M3B4IC0xNi42NjY2NjY2NjY3cHggI2Q1ZmYwMCwgLTE4cHggLTIyOC42NjY2NjY2NjY3cHggIzAwNDRmZiwgLTE1MXB4IC0zNjcuNjY2NjY2NjY2N3B4ICNmZjNjMDAsIDI1cHggNC4zMzMzMzMzMzMzcHggI2ZmMDBjNCwgLTg4cHggLTE0NS42NjY2NjY2NjY3cHggIzAwMTVmZiwgLTQwcHggLTE2Ni42NjY2NjY2NjY3cHggI2ZmMDA1MSwgMTA2cHggLTExMi42NjY2NjY2NjY3cHggIzAwZmY0MCwgMTMzcHggLTM1OC42NjY2NjY2NjY3cHggI2Y3MDBmZiwgLTIwNnB4IC0xMDIuNjY2NjY2NjY2N3B4ICM5ZDAwZmY7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBiYW5nIHtcbiAgdG8ge1xuICAgIGJveC1zaGFkb3c6IDQ3cHggLTIyMS42NjY2NjY2NjY3cHggI2ZmMDBkNSwgLTQwcHggLTEzNS42NjY2NjY2NjY3cHggI2ZmOTkwMCwgLTEzMHB4IC0yNDcuNjY2NjY2NjY2N3B4ICNmZjAwNTEsIDEwOXB4IC02Ni42NjY2NjY2NjY3cHggIzExMDBmZiwgMjMwcHggLTIwNy42NjY2NjY2NjY3cHggI2ZmMDAxZSwgLTc0cHggLTMwMi42NjY2NjY2NjY3cHggI2ZmMzcwMCwgLTIzNXB4IC0yMTYuNjY2NjY2NjY2N3B4ICMwMGM4ZmYsIC0xM3B4IC0xNjIuNjY2NjY2NjY2N3B4ICMwMGZmN2IsIDg1cHggLTM4MS42NjY2NjY2NjY3cHggcmVkLCAxMzFweCAtMTQxLjY2NjY2NjY2NjdweCAjOTEwMGZmLCA0OHB4IC0yMDMuNjY2NjY2NjY2N3B4ICMwMGZmNjYsIDE1N3B4IC0yNDYuNjY2NjY2NjY2N3B4ICM2NmZmMDAsIC00OXB4IC0zNzMuNjY2NjY2NjY2N3B4ICNmZjAwNzMsIDkwcHggLTE3MC42NjY2NjY2NjY3cHggI2ZmMDBmMiwgOXB4IC0zODkuNjY2NjY2NjY2N3B4ICMwMGIzZmYsIDEwMnB4IC01NC42NjY2NjY2NjY3cHggIzAwZjdmZiwgMTExcHggLTM3NS42NjY2NjY2NjY3cHggI2ZmMDBiZiwgLTExNHB4IC0xOTkuNjY2NjY2NjY2N3B4ICMzMzAwZmYsIDM5cHggNzIuMzMzMzMzMzMzM3B4ICMwMGZmYjMsIC0xODFweCAtMTg2LjY2NjY2NjY2NjdweCAjZmZjYzAwLCAtMTkwcHggLTEwOC42NjY2NjY2NjY3cHggIzFlZmYwMCwgLTU0cHggLTMyNi42NjY2NjY2NjY3cHggI2I3MDBmZiwgOTdweCAtNDAyLjY2NjY2NjY2NjdweCAjOTkwMGZmLCAtMTcwcHggLTI2MC42NjY2NjY2NjY3cHggI2ZmMDA0ZCwgLTIwOXB4IC02Ni42NjY2NjY2NjY3cHggIzAwZmZlZSwgLTU5cHggLTM0NC42NjY2NjY2NjY3cHggIzAwZmYyNiwgLTEyMnB4IC01NC42NjY2NjY2NjY3cHggIzAwZmYzNywgMTMycHggLTM5LjY2NjY2NjY2NjdweCAjZWVmZjAwLCAtMzFweCAtNjQuNjY2NjY2NjY2N3B4ICMwMGQ1ZmYsIC0yOHB4IC0yMTEuNjY2NjY2NjY2N3B4ICM4NDAwZmYsIC0xNjVweCAtMTUwLjY2NjY2NjY2NjdweCAjYjMwMGZmLCAtMTI5cHggLTI2OC42NjY2NjY2NjY3cHggIzAwZmZkZCwgMjFweCAtMTE4LjY2NjY2NjY2NjdweCAjNzMwMGZmLCAzNnB4IC0zNzAuNjY2NjY2NjY2N3B4ICNhNjAwZmYsIDc3cHggLTMwMC42NjY2NjY2NjY3cHggIzQ4MDBmZiwgLTcwcHggMzYuMzMzMzMzMzMzM3B4ICNmZjAwNWUsIDE0OHB4IC0zMTguNjY2NjY2NjY2N3B4ICNiMzAwZmYsIC0yMjRweCAtMTI2LjY2NjY2NjY2NjdweCAjMDA5ZGZmLCAxMzBweCA5LjMzMzMzMzMzMzNweCAjNzdmZjAwLCAxMnB4IC0yMTUuNjY2NjY2NjY2N3B4ICMwMGUxZmYsIC0yMzFweCAtMjY0LjY2NjY2NjY2NjdweCAjZGRmZjAwLCA5MXB4IC0xMTQuNjY2NjY2NjY2N3B4ICMwMGZmOTUsIC04M3B4IC0xNi42NjY2NjY2NjY3cHggI2Q1ZmYwMCwgLTE4cHggLTIyOC42NjY2NjY2NjY3cHggIzAwNDRmZiwgLTE1MXB4IC0zNjcuNjY2NjY2NjY2N3B4ICNmZjNjMDAsIDI1cHggNC4zMzMzMzMzMzMzcHggI2ZmMDBjNCwgLTg4cHggLTE0NS42NjY2NjY2NjY3cHggIzAwMTVmZiwgLTQwcHggLTE2Ni42NjY2NjY2NjY3cHggI2ZmMDA1MSwgMTA2cHggLTExMi42NjY2NjY2NjY3cHggIzAwZmY0MCwgMTMzcHggLTM1OC42NjY2NjY2NjY3cHggI2Y3MDBmZiwgLTIwNnB4IC0xMDIuNjY2NjY2NjY2N3B4ICM5ZDAwZmY7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgYmFuZyB7XG4gIHRvIHtcbiAgICBib3gtc2hhZG93OiA0N3B4IC0yMjEuNjY2NjY2NjY2N3B4ICNmZjAwZDUsIC00MHB4IC0xMzUuNjY2NjY2NjY2N3B4ICNmZjk5MDAsIC0xMzBweCAtMjQ3LjY2NjY2NjY2NjdweCAjZmYwMDUxLCAxMDlweCAtNjYuNjY2NjY2NjY2N3B4ICMxMTAwZmYsIDIzMHB4IC0yMDcuNjY2NjY2NjY2N3B4ICNmZjAwMWUsIC03NHB4IC0zMDIuNjY2NjY2NjY2N3B4ICNmZjM3MDAsIC0yMzVweCAtMjE2LjY2NjY2NjY2NjdweCAjMDBjOGZmLCAtMTNweCAtMTYyLjY2NjY2NjY2NjdweCAjMDBmZjdiLCA4NXB4IC0zODEuNjY2NjY2NjY2N3B4IHJlZCwgMTMxcHggLTE0MS42NjY2NjY2NjY3cHggIzkxMDBmZiwgNDhweCAtMjAzLjY2NjY2NjY2NjdweCAjMDBmZjY2LCAxNTdweCAtMjQ2LjY2NjY2NjY2NjdweCAjNjZmZjAwLCAtNDlweCAtMzczLjY2NjY2NjY2NjdweCAjZmYwMDczLCA5MHB4IC0xNzAuNjY2NjY2NjY2N3B4ICNmZjAwZjIsIDlweCAtMzg5LjY2NjY2NjY2NjdweCAjMDBiM2ZmLCAxMDJweCAtNTQuNjY2NjY2NjY2N3B4ICMwMGY3ZmYsIDExMXB4IC0zNzUuNjY2NjY2NjY2N3B4ICNmZjAwYmYsIC0xMTRweCAtMTk5LjY2NjY2NjY2NjdweCAjMzMwMGZmLCAzOXB4IDcyLjMzMzMzMzMzMzNweCAjMDBmZmIzLCAtMTgxcHggLTE4Ni42NjY2NjY2NjY3cHggI2ZmY2MwMCwgLTE5MHB4IC0xMDguNjY2NjY2NjY2N3B4ICMxZWZmMDAsIC01NHB4IC0zMjYuNjY2NjY2NjY2N3B4ICNiNzAwZmYsIDk3cHggLTQwMi42NjY2NjY2NjY3cHggIzk5MDBmZiwgLTE3MHB4IC0yNjAuNjY2NjY2NjY2N3B4ICNmZjAwNGQsIC0yMDlweCAtNjYuNjY2NjY2NjY2N3B4ICMwMGZmZWUsIC01OXB4IC0zNDQuNjY2NjY2NjY2N3B4ICMwMGZmMjYsIC0xMjJweCAtNTQuNjY2NjY2NjY2N3B4ICMwMGZmMzcsIDEzMnB4IC0zOS42NjY2NjY2NjY3cHggI2VlZmYwMCwgLTMxcHggLTY0LjY2NjY2NjY2NjdweCAjMDBkNWZmLCAtMjhweCAtMjExLjY2NjY2NjY2NjdweCAjODQwMGZmLCAtMTY1cHggLTE1MC42NjY2NjY2NjY3cHggI2IzMDBmZiwgLTEyOXB4IC0yNjguNjY2NjY2NjY2N3B4ICMwMGZmZGQsIDIxcHggLTExOC42NjY2NjY2NjY3cHggIzczMDBmZiwgMzZweCAtMzcwLjY2NjY2NjY2NjdweCAjYTYwMGZmLCA3N3B4IC0zMDAuNjY2NjY2NjY2N3B4ICM0ODAwZmYsIC03MHB4IDM2LjMzMzMzMzMzMzNweCAjZmYwMDVlLCAxNDhweCAtMzE4LjY2NjY2NjY2NjdweCAjYjMwMGZmLCAtMjI0cHggLTEyNi42NjY2NjY2NjY3cHggIzAwOWRmZiwgMTMwcHggOS4zMzMzMzMzMzMzcHggIzc3ZmYwMCwgMTJweCAtMjE1LjY2NjY2NjY2NjdweCAjMDBlMWZmLCAtMjMxcHggLTI2NC42NjY2NjY2NjY3cHggI2RkZmYwMCwgOTFweCAtMTE0LjY2NjY2NjY2NjdweCAjMDBmZjk1LCAtODNweCAtMTYuNjY2NjY2NjY2N3B4ICNkNWZmMDAsIC0xOHB4IC0yMjguNjY2NjY2NjY2N3B4ICMwMDQ0ZmYsIC0xNTFweCAtMzY3LjY2NjY2NjY2NjdweCAjZmYzYzAwLCAyNXB4IDQuMzMzMzMzMzMzM3B4ICNmZjAwYzQsIC04OHB4IC0xNDUuNjY2NjY2NjY2N3B4ICMwMDE1ZmYsIC00MHB4IC0xNjYuNjY2NjY2NjY2N3B4ICNmZjAwNTEsIDEwNnB4IC0xMTIuNjY2NjY2NjY2N3B4ICMwMGZmNDAsIDEzM3B4IC0zNTguNjY2NjY2NjY2N3B4ICNmNzAwZmYsIC0yMDZweCAtMTAyLjY2NjY2NjY2NjdweCAjOWQwMGZmO1xuICB9XG59XG5ALW1zLWtleWZyYW1lcyBiYW5nIHtcbiAgdG8ge1xuICAgIGJveC1zaGFkb3c6IDQ3cHggLTIyMS42NjY2NjY2NjY3cHggI2ZmMDBkNSwgLTQwcHggLTEzNS42NjY2NjY2NjY3cHggI2ZmOTkwMCwgLTEzMHB4IC0yNDcuNjY2NjY2NjY2N3B4ICNmZjAwNTEsIDEwOXB4IC02Ni42NjY2NjY2NjY3cHggIzExMDBmZiwgMjMwcHggLTIwNy42NjY2NjY2NjY3cHggI2ZmMDAxZSwgLTc0cHggLTMwMi42NjY2NjY2NjY3cHggI2ZmMzcwMCwgLTIzNXB4IC0yMTYuNjY2NjY2NjY2N3B4ICMwMGM4ZmYsIC0xM3B4IC0xNjIuNjY2NjY2NjY2N3B4ICMwMGZmN2IsIDg1cHggLTM4MS42NjY2NjY2NjY3cHggcmVkLCAxMzFweCAtMTQxLjY2NjY2NjY2NjdweCAjOTEwMGZmLCA0OHB4IC0yMDMuNjY2NjY2NjY2N3B4ICMwMGZmNjYsIDE1N3B4IC0yNDYuNjY2NjY2NjY2N3B4ICM2NmZmMDAsIC00OXB4IC0zNzMuNjY2NjY2NjY2N3B4ICNmZjAwNzMsIDkwcHggLTE3MC42NjY2NjY2NjY3cHggI2ZmMDBmMiwgOXB4IC0zODkuNjY2NjY2NjY2N3B4ICMwMGIzZmYsIDEwMnB4IC01NC42NjY2NjY2NjY3cHggIzAwZjdmZiwgMTExcHggLTM3NS42NjY2NjY2NjY3cHggI2ZmMDBiZiwgLTExNHB4IC0xOTkuNjY2NjY2NjY2N3B4ICMzMzAwZmYsIDM5cHggNzIuMzMzMzMzMzMzM3B4ICMwMGZmYjMsIC0xODFweCAtMTg2LjY2NjY2NjY2NjdweCAjZmZjYzAwLCAtMTkwcHggLTEwOC42NjY2NjY2NjY3cHggIzFlZmYwMCwgLTU0cHggLTMyNi42NjY2NjY2NjY3cHggI2I3MDBmZiwgOTdweCAtNDAyLjY2NjY2NjY2NjdweCAjOTkwMGZmLCAtMTcwcHggLTI2MC42NjY2NjY2NjY3cHggI2ZmMDA0ZCwgLTIwOXB4IC02Ni42NjY2NjY2NjY3cHggIzAwZmZlZSwgLTU5cHggLTM0NC42NjY2NjY2NjY3cHggIzAwZmYyNiwgLTEyMnB4IC01NC42NjY2NjY2NjY3cHggIzAwZmYzNywgMTMycHggLTM5LjY2NjY2NjY2NjdweCAjZWVmZjAwLCAtMzFweCAtNjQuNjY2NjY2NjY2N3B4ICMwMGQ1ZmYsIC0yOHB4IC0yMTEuNjY2NjY2NjY2N3B4ICM4NDAwZmYsIC0xNjVweCAtMTUwLjY2NjY2NjY2NjdweCAjYjMwMGZmLCAtMTI5cHggLTI2OC42NjY2NjY2NjY3cHggIzAwZmZkZCwgMjFweCAtMTE4LjY2NjY2NjY2NjdweCAjNzMwMGZmLCAzNnB4IC0zNzAuNjY2NjY2NjY2N3B4ICNhNjAwZmYsIDc3cHggLTMwMC42NjY2NjY2NjY3cHggIzQ4MDBmZiwgLTcwcHggMzYuMzMzMzMzMzMzM3B4ICNmZjAwNWUsIDE0OHB4IC0zMTguNjY2NjY2NjY2N3B4ICNiMzAwZmYsIC0yMjRweCAtMTI2LjY2NjY2NjY2NjdweCAjMDA5ZGZmLCAxMzBweCA5LjMzMzMzMzMzMzNweCAjNzdmZjAwLCAxMnB4IC0yMTUuNjY2NjY2NjY2N3B4ICMwMGUxZmYsIC0yMzFweCAtMjY0LjY2NjY2NjY2NjdweCAjZGRmZjAwLCA5MXB4IC0xMTQuNjY2NjY2NjY2N3B4ICMwMGZmOTUsIC04M3B4IC0xNi42NjY2NjY2NjY3cHggI2Q1ZmYwMCwgLTE4cHggLTIyOC42NjY2NjY2NjY3cHggIzAwNDRmZiwgLTE1MXB4IC0zNjcuNjY2NjY2NjY2N3B4ICNmZjNjMDAsIDI1cHggNC4zMzMzMzMzMzMzcHggI2ZmMDBjNCwgLTg4cHggLTE0NS42NjY2NjY2NjY3cHggIzAwMTVmZiwgLTQwcHggLTE2Ni42NjY2NjY2NjY3cHggI2ZmMDA1MSwgMTA2cHggLTExMi42NjY2NjY2NjY3cHggIzAwZmY0MCwgMTMzcHggLTM1OC42NjY2NjY2NjY3cHggI2Y3MDBmZiwgLTIwNnB4IC0xMDIuNjY2NjY2NjY2N3B4ICM5ZDAwZmY7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYmFuZyB7XG4gIHRvIHtcbiAgICBib3gtc2hhZG93OiA0N3B4IC0yMjEuNjY2NjY2NjY2N3B4ICNmZjAwZDUsIC00MHB4IC0xMzUuNjY2NjY2NjY2N3B4ICNmZjk5MDAsIC0xMzBweCAtMjQ3LjY2NjY2NjY2NjdweCAjZmYwMDUxLCAxMDlweCAtNjYuNjY2NjY2NjY2N3B4ICMxMTAwZmYsIDIzMHB4IC0yMDcuNjY2NjY2NjY2N3B4ICNmZjAwMWUsIC03NHB4IC0zMDIuNjY2NjY2NjY2N3B4ICNmZjM3MDAsIC0yMzVweCAtMjE2LjY2NjY2NjY2NjdweCAjMDBjOGZmLCAtMTNweCAtMTYyLjY2NjY2NjY2NjdweCAjMDBmZjdiLCA4NXB4IC0zODEuNjY2NjY2NjY2N3B4IHJlZCwgMTMxcHggLTE0MS42NjY2NjY2NjY3cHggIzkxMDBmZiwgNDhweCAtMjAzLjY2NjY2NjY2NjdweCAjMDBmZjY2LCAxNTdweCAtMjQ2LjY2NjY2NjY2NjdweCAjNjZmZjAwLCAtNDlweCAtMzczLjY2NjY2NjY2NjdweCAjZmYwMDczLCA5MHB4IC0xNzAuNjY2NjY2NjY2N3B4ICNmZjAwZjIsIDlweCAtMzg5LjY2NjY2NjY2NjdweCAjMDBiM2ZmLCAxMDJweCAtNTQuNjY2NjY2NjY2N3B4ICMwMGY3ZmYsIDExMXB4IC0zNzUuNjY2NjY2NjY2N3B4ICNmZjAwYmYsIC0xMTRweCAtMTk5LjY2NjY2NjY2NjdweCAjMzMwMGZmLCAzOXB4IDcyLjMzMzMzMzMzMzNweCAjMDBmZmIzLCAtMTgxcHggLTE4Ni42NjY2NjY2NjY3cHggI2ZmY2MwMCwgLTE5MHB4IC0xMDguNjY2NjY2NjY2N3B4ICMxZWZmMDAsIC01NHB4IC0zMjYuNjY2NjY2NjY2N3B4ICNiNzAwZmYsIDk3cHggLTQwMi42NjY2NjY2NjY3cHggIzk5MDBmZiwgLTE3MHB4IC0yNjAuNjY2NjY2NjY2N3B4ICNmZjAwNGQsIC0yMDlweCAtNjYuNjY2NjY2NjY2N3B4ICMwMGZmZWUsIC01OXB4IC0zNDQuNjY2NjY2NjY2N3B4ICMwMGZmMjYsIC0xMjJweCAtNTQuNjY2NjY2NjY2N3B4ICMwMGZmMzcsIDEzMnB4IC0zOS42NjY2NjY2NjY3cHggI2VlZmYwMCwgLTMxcHggLTY0LjY2NjY2NjY2NjdweCAjMDBkNWZmLCAtMjhweCAtMjExLjY2NjY2NjY2NjdweCAjODQwMGZmLCAtMTY1cHggLTE1MC42NjY2NjY2NjY3cHggI2IzMDBmZiwgLTEyOXB4IC0yNjguNjY2NjY2NjY2N3B4ICMwMGZmZGQsIDIxcHggLTExOC42NjY2NjY2NjY3cHggIzczMDBmZiwgMzZweCAtMzcwLjY2NjY2NjY2NjdweCAjYTYwMGZmLCA3N3B4IC0zMDAuNjY2NjY2NjY2N3B4ICM0ODAwZmYsIC03MHB4IDM2LjMzMzMzMzMzMzNweCAjZmYwMDVlLCAxNDhweCAtMzE4LjY2NjY2NjY2NjdweCAjYjMwMGZmLCAtMjI0cHggLTEyNi42NjY2NjY2NjY3cHggIzAwOWRmZiwgMTMwcHggOS4zMzMzMzMzMzMzcHggIzc3ZmYwMCwgMTJweCAtMjE1LjY2NjY2NjY2NjdweCAjMDBlMWZmLCAtMjMxcHggLTI2NC42NjY2NjY2NjY3cHggI2RkZmYwMCwgOTFweCAtMTE0LjY2NjY2NjY2NjdweCAjMDBmZjk1LCAtODNweCAtMTYuNjY2NjY2NjY2N3B4ICNkNWZmMDAsIC0xOHB4IC0yMjguNjY2NjY2NjY2N3B4ICMwMDQ0ZmYsIC0xNTFweCAtMzY3LjY2NjY2NjY2NjdweCAjZmYzYzAwLCAyNXB4IDQuMzMzMzMzMzMzM3B4ICNmZjAwYzQsIC04OHB4IC0xNDUuNjY2NjY2NjY2N3B4ICMwMDE1ZmYsIC00MHB4IC0xNjYuNjY2NjY2NjY2N3B4ICNmZjAwNTEsIDEwNnB4IC0xMTIuNjY2NjY2NjY2N3B4ICMwMGZmNDAsIDEzM3B4IC0zNTguNjY2NjY2NjY2N3B4ICNmNzAwZmYsIC0yMDZweCAtMTAyLjY2NjY2NjY2NjdweCAjOWQwMGZmO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZ3Jhdml0eSB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgZ3Jhdml0eSB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIGdyYXZpdHkge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQC1tcy1rZXlmcmFtZXMgZ3Jhdml0eSB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGdyYXZpdHkge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHBvc2l0aW9uIHtcbiAgMCUsIDE5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgfVxuICAyMCUsIDM5LjklIHtcbiAgICBtYXJnaW4tdG9wOiA0MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgfVxuICA0MCUsIDU5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDcwJTtcbiAgfVxuICA2MCUsIDc5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgfVxuICA4MCUsIDk5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIHBvc2l0aW9uIHtcbiAgMCUsIDE5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgfVxuICAyMCUsIDM5LjklIHtcbiAgICBtYXJnaW4tdG9wOiA0MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgfVxuICA0MCUsIDU5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDcwJTtcbiAgfVxuICA2MCUsIDc5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgfVxuICA4MCUsIDk5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBwb3NpdGlvbiB7XG4gIDAlLCAxOS45JSB7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XG4gIH1cbiAgMjAlLCAzOS45JSB7XG4gICAgbWFyZ2luLXRvcDogNDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIH1cbiAgNDAlLCA1OS45JSB7XG4gICAgbWFyZ2luLXRvcDogMjAlO1xuICAgIG1hcmdpbi1sZWZ0OiA3MCU7XG4gIH1cbiAgNjAlLCA3OS45JSB7XG4gICAgbWFyZ2luLXRvcDogMzAlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gIH1cbiAgODAlLCA5OS45JSB7XG4gICAgbWFyZ2luLXRvcDogMzAlO1xuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XG4gIH1cbn1cbkAtbXMta2V5ZnJhbWVzIHBvc2l0aW9uIHtcbiAgMCUsIDE5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgfVxuICAyMCUsIDM5LjklIHtcbiAgICBtYXJnaW4tdG9wOiA0MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgfVxuICA0MCUsIDU5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDcwJTtcbiAgfVxuICA2MCUsIDc5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgfVxuICA4MCUsIDk5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcbiAgfVxufVxuQGtleWZyYW1lcyBwb3NpdGlvbiB7XG4gIDAlLCAxOS45JSB7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XG4gIH1cbiAgMjAlLCAzOS45JSB7XG4gICAgbWFyZ2luLXRvcDogNDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIH1cbiAgNDAlLCA1OS45JSB7XG4gICAgbWFyZ2luLXRvcDogMjAlO1xuICAgIG1hcmdpbi1sZWZ0OiA3MCU7XG4gIH1cbiAgNjAlLCA3OS45JSB7XG4gICAgbWFyZ2luLXRvcDogMzAlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gIH1cbiAgODAlLCA5OS45JSB7XG4gICAgbWFyZ2luLXRvcDogMzAlO1xuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XG4gIH1cbn1cbi5jYXJ0LWNoZWNrYm94LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY2FydC1jaGVja2JveC1jb250YWluZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cbn1cbi5jYXJ0LWNoZWNrYm94LWNvbnRhaW5lciAuY2FydC1pdGVtLWNoZWNrYm94IHtcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWVtIGF1dG87XG4gIGdhcDogMC41ZW07XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5jYXJ0LWl0ZW0tc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XG59XG5cbi5tdXRpcGxlLXNlbGVjdGlvbi1hY3Rpb25idG5zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiA1NXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHdpZHRoOiA2NSU7XG4gIHotaW5kZXg6IDk5OTtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXI6IHNvbGlkIDFweCBnYWluc2Jvcm87XG4gIHRyYW5zaXRpb246IHdpZHRoIDJzLCBvcGFjaXR5IDAuNXMgbGluZWFyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkZmNlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm11dGlwbGUtc2VsZWN0aW9uLWFjdGlvbmJ0bnMge1xuICAgIHdpZHRoOiA5MyUgIWltcG9ydGFudDtcbiAgICB0b3A6IDBweDtcbiAgfVxufVxuLm11dGlwbGUtc2VsZWN0aW9uLWFjdGlvbmJ0bnMgLmJ0bi1vdXRsaW5lLCAubXV0aXBsZS1zZWxlY3Rpb24tYWN0aW9uYnRucyAuYnRuLW91dGxpbmUtbW9kYWwge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tdXRpcGxlLXNlbGVjdGlvbi1hY3Rpb25idG5zIC5tdWx0aXNlbGVjdC1idG5zLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm11dGlwbGUtc2VsZWN0aW9uLWFjdGlvbmJ0bnMgLnNlbGVjdC1kZXNlbGVjdC1idG5jb250YWluZXIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgfVxufVxuXG4uc2VsZWN0LWRlc2VsZWN0LWJ0bmNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnBsYWNlLW9yZGVyLWJ0biB7XG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5yZW1vdmUtYnRuIHtcbiAgICB3aWR0aDogNDElICFpbXBvcnRhbnQ7XG4gIH1cbn0iLCJAaW1wb3J0IFwiLi8uLi8uLi9hc3NldHMvc2Nzcy9jb21tb24uc2Nzc1wiO1xyXG5cclxuLmNhcnQtY2hlY2tib3gtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FydC1pdGVtLWNoZWNrYm94IHtcclxuICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjFyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWVtIGF1dG87XHJcbiAgICAgICAgZ2FwOiAwLjVlbTtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXJ0LWl0ZW0tc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJveC1zaGFkb3ctY29sb3I7XHJcbn1cclxuXHJcbi5tdXRpcGxlLXNlbGVjdGlvbi1hY3Rpb25idG5zIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjYXJ0LXN0aWNreS1iYWNrZ3JvdW5kO1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogNTVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggJGJveC1zaGFkb3ctY29sb3I7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAycywgb3BhY2l0eSAwLjVzIGxpbmVhcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRnb2xkZW50aGVtZS1wYW5lbC1iYWNrZ3JvdW5kO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGdvbGRlbnRoZW1lLWJvcmRlci1yYWRpdXM7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICB3aWR0aDogOTMlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1vdXRsaW5lIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm11bHRpc2VsZWN0LWJ0bnMtY29udGFpbmVyIHtcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VsZWN0LWRlc2VsZWN0LWJ0bmNvbnRhaW5lciB7XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnNlbGVjdC1kZXNlbGVjdC1idG5jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGxhY2Utb3JkZXItYnRuIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucmVtb3ZlLWJ0biB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIHdpZHRoOiA0MSUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart',
                templateUrl: './cart.component.html',
                styleUrls: ['./cart.component.scss'],
                providers: [
                    { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__["CarouselConfig"], useValue: { showIndicators: false } }
                ]
            }]
    }], function () { return [{ type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] }, { type: _services_common_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }, { type: _services_order_service_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"] }, { type: _services_product_service_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"] }, { type: _services_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"] }, { type: _services_loader_service_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"] }, { type: angular_notifier__WEBPACK_IMPORTED_MODULE_10__["NotifierService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/cart/cart.module.ts":
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/*! exports provided: CartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModule", function() { return CartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart-routing.module */ "./src/app/cart/cart-routing.module.ts");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");









class CartModule {
}
CartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CartModule });
CartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CartModule_Factory(t) { return new (t || CartModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _cart_routing_module__WEBPACK_IMPORTED_MODULE_3__["CartRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
            ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CartModule, { declarations: [_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _cart_routing_module__WEBPACK_IMPORTED_MODULE_3__["CartRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _cart_routing_module__WEBPACK_IMPORTED_MODULE_3__["CartRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
                    ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"].forRoot()
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=cart-cart-module-es2015.js.map