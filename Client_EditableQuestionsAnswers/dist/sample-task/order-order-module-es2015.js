(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-order-module"],{

/***/ "./node_modules/ngx-bootstrap/__ivy_ngcc__/alert/fesm2015/ngx-bootstrap-alert.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/alert/fesm2015/ngx-bootstrap-alert.js ***!
  \***************************************************************************************/
/*! exports provided: AlertComponent, AlertConfig, AlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertConfig", function() { return AlertConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return AlertModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/utils/fesm2015/ngx-bootstrap-utils.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



function AlertComponent_ng_template_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertComponent_ng_template_0_ng_template_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r2.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AlertComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AlertComponent_ng_template_0_ng_template_1_Template, 5, 0, "ng-template", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("alert alert-" + ctx_r0.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.classes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.dismissible);
} }
const _c0 = ["*"];
class AlertConfig {
    constructor() {
        /**
         * default alert type
         */
        this.type = 'warning';
        /**
         * is alerts are dismissible by default
         */
        this.dismissible = false;
        /**
         * default time before alert will dismiss
         */
        this.dismissOnTimeout = undefined;
    }
}
AlertConfig.ɵfac = function AlertConfig_Factory(t) { return new (t || AlertConfig)(); };
/** @nocollapse */ AlertConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function AlertConfig_Factory() { return new AlertConfig(); }, token: AlertConfig, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AlertComponent {
    /**
     * @param {?} _config
     * @param {?} changeDetection
     */
    constructor(_config, changeDetection) {
        this.changeDetection = changeDetection;
        /**
         * Alert type.
         * Provides one of four bootstrap supported contextual classes:
         * `success`, `info`, `warning` and `danger`
         */
        this.type = 'warning';
        /**
         * If set, displays an inline "Close" button
         */
        this.dismissible = false;
        /**
         * Is alert visible
         */
        this.isOpen = true;
        /**
         * This event fires immediately after close instance method is called,
         * $event is an instance of Alert component.
         */
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event fires when alert closed, $event is an instance of Alert component
         */
        this.onClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.classes = '';
        this.dismissibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        Object.assign(this, _config);
        this.dismissibleChange.subscribe((/**
         * @param {?} dismissible
         * @return {?}
         */
        (dismissible) => {
            this.classes = this.dismissible ? 'alert-dismissible' : '';
            this.changeDetection.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.dismissOnTimeout) {
            // if dismissOnTimeout used as attr without binding, it will be a string
            setTimeout((/**
             * @return {?}
             */
            () => this.close()), parseInt((/** @type {?} */ (this.dismissOnTimeout)), 10));
        }
    }
    // todo: animation ` If the .fade and .in classes are present on the element,
    // the alert will fade out before it is removed`
    /**
     * Closes an alert by removing it from the DOM.
     * @return {?}
     */
    close() {
        if (!this.isOpen) {
            return;
        }
        this.onClose.emit(this);
        this.isOpen = false;
        this.changeDetection.markForCheck();
        this.onClosed.emit(this);
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](AlertConfig), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["alert"], ["bs-alert"]], inputs: { type: "type", dismissible: "dismissible", isOpen: "isOpen", dismissOnTimeout: "dismissOnTimeout" }, outputs: { onClose: "onClose", onClosed: "onClosed" }, ngContentSelectors: _c0, decls: 1, vars: 1, consts: [[3, "ngIf"], ["role", "alert", 3, "ngClass"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "sr-only"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AlertComponent_ng_template_0_Template, 3, 4, "ng-template", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
AlertComponent.ctorParameters = () => [
    { type: AlertConfig },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
AlertComponent.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    dismissible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    dismissOnTimeout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    onClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    onClosed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__["OnChange"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AlertComponent.prototype, "dismissible", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AlertConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'alert,bs-alert',
                template: "<ng-template [ngIf]=\"isOpen\">\n  <div [class]=\"'alert alert-' + type\" role=\"alert\" [ngClass]=\"classes\">\n    <ng-template [ngIf]=\"dismissible\">\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n        <span class=\"sr-only\">Close</span>\n      </button>\n    </ng-template>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: AlertConfig }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], dismissible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onClosed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], dismissOnTimeout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AlertModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: AlertModule, providers: [] };
    }
}
AlertModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AlertModule });
AlertModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AlertModule_Factory(t) { return new (t || AlertModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AlertModule, { declarations: function () { return [AlertComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]; }, exports: function () { return [AlertComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AlertModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                declarations: [AlertComponent],
                exports: [AlertComponent],
                entryComponents: [AlertComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-bootstrap-alert.js.map

/***/ }),

/***/ "./src/app/order/order-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/order/order-routing.module.ts ***!
  \***********************************************/
/*! exports provided: OrderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderRoutingModule", function() { return OrderRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order.component */ "./src/app/order/order.component.ts");






const routes = [
    {
        path: '',
        component: _order_component__WEBPACK_IMPORTED_MODULE_3__["OrderComponent"]
    }
];
class OrderRoutingModule {
}
OrderRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OrderRoutingModule });
OrderRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OrderRoutingModule_Factory(t) { return new (t || OrderRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrderRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderRoutingModule, [{
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

/***/ "./src/app/order/order.component.ts":
/*!******************************************!*\
  !*** ./src/app/order/order.component.ts ***!
  \******************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
/* harmony import */ var _services_common_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common-service/common.service */ "./src/app/services/common-service/common.service.ts");
/* harmony import */ var _services_product_service_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/product-service/product.service */ "./src/app/services/product-service/product.service.ts");
/* harmony import */ var _services_order_service_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/order-service/order.service */ "./src/app/services/order-service/order.service.ts");
/* harmony import */ var _services_loader_service_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/loader-service/loader.service */ "./src/app/services/loader-service/loader.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/alert/fesm2015/ngx-bootstrap-alert.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");














function OrderComponent_alert_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "alert", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClosed", function OrderComponent_alert_2_Template_alert_onClosed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onClosed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Once confirmed! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Your Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " will be delivered within 2 week from the order placed date.\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", true);
} }
function OrderComponent_div_4_div_2_slide_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function OrderComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OrderComponent_div_4_div_2_slide_2_Template, 2, 1, "slide", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const orderedItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", orderedItem_r5.productImagesToBeShown);
} }
function OrderComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderComponent_div_4_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Pending confirmation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r16.faClock);
} }
function OrderComponent_div_4_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrderComponent_div_4_div_24_div_1_Template, 3, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const orderedItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !orderedItem_r5.orderAccepted);
} }
function OrderComponent_div_4_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Order Accepted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r9.faCheckSquare);
} }
function OrderComponent_div_4_div_26_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "full name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const orderedItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", orderedItem_r5.firstName, " ", orderedItem_r5.middleName, " ", orderedItem_r5.lastName, "");
} }
function OrderComponent_div_4_div_26_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Practitioner: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderComponent_div_4_div_26_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Registration Number: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const orderedItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](orderedItem_r5.regNumber);
} }
function OrderComponent_div_4_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "user name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OrderComponent_div_4_div_26_div_6_Template, 5, 3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "user contact: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "user address: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, OrderComponent_div_4_div_26_div_17_Template, 5, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, OrderComponent_div_4_div_26_div_18_Template, 5, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const orderedItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](orderedItem_r5.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", orderedItem_r5 == null ? null : orderedItem_r5.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "tel:+91-", orderedItem_r5.userPhoneNumber, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+91-", orderedItem_r5.userPhoneNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](orderedItem_r5.userAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", orderedItem_r5 == null ? null : orderedItem_r5.isPractitioner);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", orderedItem_r5 == null ? null : orderedItem_r5.isPractitioner);
} }
function OrderComponent_div_4_div_27_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_div_4_div_27_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const orderedItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.acceptOrder(orderedItem_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Accept order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderComponent_div_4_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrderComponent_div_4_div_27_button_1_Template, 2, 0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_div_4_div_27_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const orderedItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.deleteOrder(orderedItem_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "fa-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const orderedItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !orderedItem_r5.orderAccepted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r11.faTrash);
} }
function OrderComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OrderComponent_div_4_div_2_Template, 3, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OrderComponent_div_4_div_3_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Order placed on: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Total: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Quantity : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, OrderComponent_div_4_div_24_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, OrderComponent_div_4_div_25_Template, 3, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, OrderComponent_div_4_div_26_Template, 19, 7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, OrderComponent_div_4_div_27_Template, 5, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const orderedItem_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", orderedItem_r5.productImagesToBeShown);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !orderedItem_r5.productImagesToBeShown);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](orderedItem_r5.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getFormattedOrderDate(orderedItem_r5.orderedDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.currentCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](orderedItem_r5.quantity * orderedItem_r5.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](orderedItem_r5.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.userDetails.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", orderedItem_r5.orderAccepted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.userDetails.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.userDetails.isAdmin);
} }
function OrderComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Order list is empty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class OrderComponent {
    constructor(commonService, productService, orderService, loaderService, notifierService) {
        this.commonService = commonService;
        this.productService = productService;
        this.orderService = orderService;
        this.loaderService = loaderService;
        this.notifierService = notifierService;
        this.faCheckSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCheckSquare"];
        this.faClock = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faClock"];
        this.faUserClock = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUserClock"];
        this.dateNotAvailableText = 'NA';
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrash"];
        this.userDetails = this.commonService.userDetails;
        this.checkIfOrderDeliveryNotificationToBeshown();
    }
    ngOnInit() {
        this.setCurrentCurrency();
        this.getOrdersByUserPrivileges();
        this.handleOrderSearchSubsriptions();
    }
    checkIfOrderDeliveryNotificationToBeshown() {
        let flag = localStorage.getItem('showOrderDeliveryNotification');
        if (flag) {
            this.showOrderDeliveryNotification = false;
        }
        else {
            this.showOrderDeliveryNotification = true;
        }
    }
    getFormattedOrderDate(date) {
        if (date) {
            return new Date(parseInt(date)).toDateString();
        }
        else {
            return this.dateNotAvailableText;
        }
    }
    setCurrentCurrency() {
        this.currentCurrency = this.commonService.currentCurrency;
    }
    handleOrderSearchSubsriptions() {
        this.orderService.orderDataSearch.subscribe(data => {
            this.orderList = this.commonService.filterDataBySearchString(this.unfilteredOrderedItems, data);
        });
    }
    getOrdersByUserPrivileges() {
        if (this.userDetails.isAdmin) {
            this.getOrderedItemsAll();
        }
        else {
            this.getOrderedItemsByUser();
        }
    }
    getOrderedItemsByUser() {
        this.loaderService.display(true);
        this.orderService.getOrderListByUser(this.userDetails['_id']).subscribe(data => {
            this.setOrderedItems(data);
            this.loaderService.display(false);
        });
    }
    getOrderedItemsAll() {
        this.loaderService.display(true);
        this.orderService.getOrderListAll().subscribe(data => {
            this.setOrderedItems(data);
            this.loaderService.display(false);
        });
    }
    setOrderedItems(data) {
        this.orderList = data;
        this.unfilteredOrderedItems = data;
        this.getProductImageToBeShown();
    }
    getProductImageToBeShown() {
        for (const orderedItem of this.orderList) {
            orderedItem.productImagesToBeShown = this.productService.getAllProductImagesToBeShown(orderedItem.productImages);
        }
    }
    acceptOrder(orderedItem) {
        orderedItem.orderAccepted = true;
        this.orderService.updateOrderList(orderedItem).subscribe(response => {
            this.getOrdersByUserPrivileges();
        });
    }
    deleteOrder(orderedItem) {
        let result = this.commonService.confirmAction();
        if (result) {
            this.loaderService.display(true);
            this.orderService.deleteOrderItem(orderedItem._id).subscribe(response => {
                this.loaderService.display(false);
                this.notifierService.notify('success', 'order deleted successfully!');
                this.getOrdersByUserPrivileges();
            });
        }
    }
    onClosed() {
        this.showOrderDeliveryNotification = false;
        localStorage.setItem('showOrderDeliveryNotification', this.showOrderDeliveryNotification.toString());
    }
}
OrderComponent.ɵfac = function OrderComponent_Factory(t) { return new (t || OrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_order_service_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_loader_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_7__["NotifierService"])); };
OrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderComponent, selectors: [["app-order"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__["CarouselConfig"], useValue: { showIndicators: false } }
        ])], decls: 6, vars: 3, consts: [[1, "page-heading"], ["class", "order-page-info", "type", "info", 3, "dismissible", "onClosed", 4, "ngIf"], [1, "cart-container"], ["class", "row product-item", 4, "ngFor", "ngForOf"], ["class", "empty-data", 4, "ngIf"], ["type", "info", 1, "order-page-info", 3, "dismissible", "onClosed"], [1, "row", "product-item"], [1, "col-md-5", "col-12"], ["class", "carousel-container", 4, "ngIf"], ["class", "product-img-container default-img-container", 4, "ngIf"], [1, "col-md-7", "col-12"], [1, "product-name"], [1, "product-ordered-datecontainer"], [1, "ordered-date-title"], [1, "ordered-date"], [1, "product-price"], [1, "total-text"], [1, "current-currency-symbol"], [1, "price-value"], [1, "quantity-readonly-container"], [1, "quantity-text"], [1, "quantity-value"], ["class", "order-progress-container", 4, "ngIf"], ["class", "order-accepted", 4, "ngIf"], ["class", "col-md-8 col-xs-12 user-details", 4, "ngIf"], ["class", "cart-item-actionbtns", 4, "ngIf"], [1, "carousel-container"], [4, "ngFor", "ngForOf"], [1, "product-img", 2, "display", "block", "width", "100%", 3, "src"], [1, "product-img-container", "default-img-container"], ["src", "assets/images/herbal-med.jpg", 1, "product-img"], [1, "order-progress-container"], ["class", "order-progress", 4, "ngIf"], [1, "order-progress"], [1, "hand-cursor", "fa-icon", "clock-icon", 3, "icon"], [1, "order-accepted"], [1, "hand-cursor", "fa-icon", "check-icon", 3, "icon"], [1, "col-md-8", "col-xs-12", "user-details"], [1, "user-name"], ["class", "user-name", 4, "ngIf"], [1, "user-contact"], [1, "phone-number", 3, "href"], [1, "user-address"], ["class", "user-address", 4, "ngIf"], [1, "cart-item-actionbtns"], ["class", "btn btn-outline place-order-btn", 3, "click", 4, "ngIf"], [1, "btn", "btn-outline-removebtn", "place-order-btn", "remove-btn", 3, "click"], [1, "hand-cursor", "delete-icon-cartorder", 3, "icon"], [1, "btn", "btn-outline", "place-order-btn", 3, "click"], [1, "empty-data"]], template: function OrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OrderComponent_alert_2_Template, 5, 1, "alert", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OrderComponent_div_4_Template, 28, 11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OrderComponent_div_5_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showOrderDeliveryNotification);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orderList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderList && ctx.orderList.length == 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_9__["AlertComponent"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__["SlideComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FaIconComponent"]], styles: [".input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 15px;\n  border-top-left-radius: 15px;\n}\n.input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  border-bottom-right-radius: 15px;\n  border-top-right-radius: 15px;\n}\n.btn-full-width[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n.edit-icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n@media only screen and (max-width: 768px) {\n  .edit-icon[_ngcontent-%COMP%] {\n    margin-right: 15px;\n  }\n}\n.delete-icon[_ngcontent-%COMP%] {\n  color: #ce4545;\n}\n.no-padding[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n.no-padding-left[_ngcontent-%COMP%] {\n  padding-left: 0px !important;\n}\n.no-padding-right[_ngcontent-%COMP%] {\n  padding-right: 0px !important;\n}\n.empty-data[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.default-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n}\n.cart-container[_ngcontent-%COMP%] {\n  width: 64%;\n  margin: auto;\n  padding: 10px;\n}\n@media only screen and (max-width: 768px) {\n  .cart-container[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n.cart-container[_ngcontent-%COMP%]   .product-ordered-datecontainer[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.cart-container[_ngcontent-%COMP%]   .product-ordered-datecontainer[_ngcontent-%COMP%]   .ordered-date[_ngcontent-%COMP%] {\n  background-color: #ad974f !important;\n  color: #fff !important;\n  border-radius: 20px;\n  padding: 5px;\n}\n.cart-container[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  padding-top: 15px;\n  box-shadow: 0px 0px 2px 2px gainsboro;\n  background: #e3dfce;\n  border-radius: 20px;\n}\n.cart-container[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%] {\n  color: #313e24 !important;\n  border: solid 1px #ad974f;\n  border-radius: 15px;\n  padding: 5px;\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n.cart-container[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .phone-number[_ngcontent-%COMP%] {\n  color: green !important;\n}\n@media only screen and (max-width: 768px) {\n  .cart-container[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n.cart-container[_ngcontent-%COMP%]   .product-img-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  display: flex;\n}\n.cart-container[_ngcontent-%COMP%]   .product-img-container[_ngcontent-%COMP%]   .product-images[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  max-width: 100%;\n}\n.cart-container[_ngcontent-%COMP%]   .product-img-container[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.cart-container[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%] {\n  height: 250px;\n  width: 100%;\n  border: solid 1px #dcdcdc;\n  margin: auto auto 15px auto;\n  display: block;\n  border-top-right-radius: 20px;\n  border-top-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n}\n.cart-container[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%] {\n  float: right;\n}\n.cart-container[_ngcontent-%COMP%]   .cart-item-actionbtns[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.cart-container[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  color: #ad974f;\n  font-size: 18px;\n  font-weight: 800;\n  text-transform: capitalize;\n}\n.cart-container[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%] {\n  color: #7e6e6e !important;\n  display: inline-block;\n  width: calc(100% - 30px);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 0;\n}\n.cart-container[_ngcontent-%COMP%]   .drug-quantity-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-family: sans-serif;\n}\n.cart-container[_ngcontent-%COMP%]   .drug-quantity-container[_ngcontent-%COMP%]   .drug-quantity-title[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  color: #313e24;\n}\n.cart-container[_ngcontent-%COMP%]   .drug-quantity-container[_ngcontent-%COMP%]   .drug-quantityvalue-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.cart-container[_ngcontent-%COMP%]   .drug-quantity-container[_ngcontent-%COMP%]   .drug-quantityvalue-container[_ngcontent-%COMP%]   .drug-quantity-value[_ngcontent-%COMP%] {\n  background: #313e24;\n  color: #fff;\n  padding: 6px 12px 6px 12px;\n  border-radius: 20px;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%]   .qty-input[_ngcontent-%COMP%] {\n  text-align: center;\n  background: #e3dfce;\n  border-color: #313e24;\n}\n@media screen and (min-width: 993px) and (max-width: 1500px) {\n  .cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%]   .quantity-fields-container[_ngcontent-%COMP%] {\n    flex-basis: 32% !important;\n    max-width: 32% !important;\n  }\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  width: 35px;\n  cursor: pointer;\n  background: #313e24;\n  color: #ad974f;\n  border: solid 1px #313e24;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%]   .quantity-title[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 16px;\n  margin-bottom: 10px;\n  color: #313e24;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-readonly-container[_ngcontent-%COMP%]   .quantity-value[_ngcontent-%COMP%] {\n  background-color: #ad974f;\n  color: #fff;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-readonly-container[_ngcontent-%COMP%]   .quantity-text[_ngcontent-%COMP%] {\n  color: #313e24;\n  font-weight: bold;\n}\n.cart-container[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%], .cart-container[_ngcontent-%COMP%]   .btn-outline-modal[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.product-price[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.product-price[_ngcontent-%COMP%]   .current-currency-symbol[_ngcontent-%COMP%] {\n  top: -4.25px;\n  font-size: 11px;\n  position: relative;\n}\n.product-price[_ngcontent-%COMP%]   .price-value[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-family: cursive;\n}\n@media only screen and (max-width: 768px) {\n  .product-price[_ngcontent-%COMP%]   .price-value[_ngcontent-%COMP%] {\n    font-family: sans-serif;\n  }\n}\n.btn-outline[_ngcontent-%COMP%], .btn-outline-modal[_ngcontent-%COMP%] {\n  color: #313e24;\n  background-color: #e3dfce;\n  border-color: #313e24;\n  font-weight: bold;\n  letter-spacing: 0.05em;\n  border-radius: 20px;\n  padding: 3px 10px !important;\n  cursor: pointer;\n}\n.btn-outline[_ngcontent-%COMP%]:active, .btn-outline-modal[_ngcontent-%COMP%]:active, .btn-outline[_ngcontent-%COMP%]:hover, .btn-outline-modal[_ngcontent-%COMP%]:hover, .btn-outline[_ngcontent-%COMP%]:focus, .btn-outline-modal[_ngcontent-%COMP%]:focus {\n  color: #313e24;\n  background-color: #e3dfce;\n  border-color: #313e24;\n}\n.btn-outline[_ngcontent-%COMP%]:active, .btn-outline-modal[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n}\n.btn-outline-customsecondary[_ngcontent-%COMP%], .btn-outline-removebtn[_ngcontent-%COMP%] {\n  color: #ad974f;\n  background-color: #313e24;\n  border-color: #ad974f;\n  font-weight: bold;\n  letter-spacing: 0.05em;\n  border-radius: 20px;\n  padding: 3px 10px !important;\n  box-shadow: 2px 2px gainsboro;\n  cursor: pointer;\n}\n.btn-outline-customsecondary[_ngcontent-%COMP%]:active, .btn-outline-removebtn[_ngcontent-%COMP%]:active, .btn-outline-customsecondary[_ngcontent-%COMP%]:hover, .btn-outline-removebtn[_ngcontent-%COMP%]:hover, .btn-outline-customsecondary[_ngcontent-%COMP%]:focus, .btn-outline-removebtn[_ngcontent-%COMP%]:focus {\n  color: #ad974f;\n  background-color: #313e24;\n  border-color: #ad974f;\n}\n.btn-outline-customsecondary[_ngcontent-%COMP%]:active, .btn-outline-removebtn[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n}\n.btn-color-1[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #004E64;\n  border-color: #004E64;\n  font-weight: bold;\n  letter-spacing: 0.05em;\n  border-radius: 0;\n}\n.btn-color-1[_ngcontent-%COMP%]:hover, .btn-color-1[_ngcontent-%COMP%]:active, .btn-color-1[_ngcontent-%COMP%]:focus {\n  background: #003D4F !important;\n  color: #fff !important;\n  border-color: #003D4F !important;\n}\n.btn-outline-removebtn[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 15px;\n  font-weight: 600;\n  z-index: 1000;\n  white-space: pre-wrap;\n  border: none !important;\n}\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  margin: -0.5rem -0.2rem -1rem auto !important;\n}\n  .modal-content {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  background-color: #e3dfce;\n}\n@media only screen and (max-width: 768px) {\n  .modal-body[_ngcontent-%COMP%] {\n    max-height: 580px;\n    overflow: auto;\n  }\n}\nbutton[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed !important;\n}\n.total-text[_ngcontent-%COMP%] {\n  font-weight: 600 !important;\n}\n.out-of-stock[_ngcontent-%COMP%]   .out-of-stock-text[_ngcontent-%COMP%] {\n  margin: auto;\n  text-transform: uppercase;\n  color: #fff;\n  background: #a90b0b;\n  border: solid 1px gainsboro;\n  border-radius: 20px;\n  padding: 6.5px 10px;\n}\n.page-heading[_ngcontent-%COMP%] {\n  text-align: center !important;\n  font-family: cursive;\n  margin-bottom: 15px !important;\n  color: #313e24;\n}\n@media only screen and (max-width: 768px) {\n  .page-heading[_ngcontent-%COMP%] {\n    font-family: sans-serif;\n  }\n}\n.hidden[_ngcontent-%COMP%] {\n  visibility: hidden !important;\n}\n@media only screen and (max-width: 768px) {\n    .alert-dismissible .close {\n    z-index: 0;\n  }\n}\n  .alert-info {\n  background-color: #313e24 !important;\n  color: #ad974f !important;\n  border-radius: 20px;\n}\n.kupipakwa[_ngcontent-%COMP%] {\n  background-image: url('kupipakwa.png');\n}\n.pottali[_ngcontent-%COMP%] {\n  background-image: url('pottali.png');\n}\n.khalviya[_ngcontent-%COMP%] {\n  background-image: url('khalviya.png');\n}\n@media screen and (min-width: 769px) {\n  .display-inline[_ngcontent-%COMP%] {\n    display: inline !important;\n  }\n}\n\n.pyro[_ngcontent-%COMP%] {\n  position: relative !important;\n  z-index: 999;\n}\n.pyro[_ngcontent-%COMP%]    > .before[_ngcontent-%COMP%], .pyro[_ngcontent-%COMP%]    > .after[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  box-shadow: 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff;\n  animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;\n}\n.pyro[_ngcontent-%COMP%]    > .after[_ngcontent-%COMP%] {\n  animation-delay: 1.25s, 1.25s, 1.25s;\n  animation-duration: 1.25s, 1.25s, 6.25s;\n}\n@keyframes bang {\n  to {\n    box-shadow: -43px -180.6666666667px #ff0066, 137px -31.6666666667px #00bbff, 47px -341.6666666667px #ff00dd, -31px -158.6666666667px #a600ff, 6px -96.6666666667px #fbff00, 155px 23.3333333333px #00e6ff, 125px -233.6666666667px #3700ff, -17px -185.6666666667px #aa00ff, 219px 41.3333333333px #ff0066, 54px -315.6666666667px #00ff91, 21px -134.6666666667px #9100ff, -180px -261.6666666667px #e600ff, -178px -331.6666666667px #33ff00, -199px -29.6666666667px #00ffb3, -223px -415.6666666667px #ff9100, 94px -398.6666666667px #e100ff, -20px -88.6666666667px #cc00ff, 182px 79.3333333333px #0055ff, -28px -104.6666666667px #00eeff, -68px -196.6666666667px #ff9100, 121px -24.6666666667px #00ff9d, 100px -28.6666666667px #6600ff, 194px -353.6666666667px #00ff51, -192px -118.6666666667px #bbff00, 192px -37.6666666667px #0062ff, -32px -131.6666666667px #ff00d9, 216px -53.6666666667px #0011ff, -108px -304.6666666667px #001eff, 141px -369.6666666667px #9d00ff, 99px -86.6666666667px #ff2600, 220px 18.3333333333px #00f7ff, -39px -255.6666666667px #80ff00, 83px -259.6666666667px #ffaa00, 245px 17.3333333333px #00ff2f, -85px -149.6666666667px #ff0088, -84px 22.3333333333px #00ff8c, -160px -193.6666666667px #91ff00, -13px -7.6666666667px #00aaff, -152px -188.6666666667px #a600ff, -95px -50.6666666667px #91ff00, 111px 13.3333333333px #ff0062, 163px -294.6666666667px #ff0088, -68px -355.6666666667px #a200ff, 28px -68.6666666667px #91ff00, 24px 45.3333333333px #ff009d, 147px -395.6666666667px #ffea00, -129px -312.6666666667px #00ccff, 126px -136.6666666667px #d5ff00, 56px -362.6666666667px #00ffbf, -2px 73.3333333333px #ffc800, -170px -272.6666666667px #7700ff;\n  }\n}\n@keyframes gravity {\n  to {\n    transform: translateY(200px);\n    -moz-transform: translateY(200px);\n    -webkit-transform: translateY(200px);\n    -o-transform: translateY(200px);\n    -ms-transform: translateY(200px);\n    opacity: 0;\n  }\n}\n@keyframes position {\n  0%, 19.9% {\n    margin-top: 10%;\n    margin-left: 40%;\n  }\n  20%, 39.9% {\n    margin-top: 40%;\n    margin-left: 30%;\n  }\n  40%, 59.9% {\n    margin-top: 20%;\n    margin-left: 70%;\n  }\n  60%, 79.9% {\n    margin-top: 30%;\n    margin-left: 20%;\n  }\n  80%, 99.9% {\n    margin-top: 30%;\n    margin-left: 80%;\n  }\n}\n.order-accepted[_ngcontent-%COMP%] {\n  background-color: #313e24;\n  border-radius: 20px;\n  color: #ad974f;\n  padding: 5px;\n  display: inline-block;\n  margin-bottom: 10px;\n}\n.order-accepted[_ngcontent-%COMP%]   .check-icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.order-progress-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.order-progress-container[_ngcontent-%COMP%]   .order-progress[_ngcontent-%COMP%] {\n  background-color: #ad974f;\n  color: #fff;\n  border-radius: 20px;\n  padding: 5px;\n  display: inline;\n}\n.order-progress-container[_ngcontent-%COMP%]   .order-progress[_ngcontent-%COMP%]   .clock-icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.quantity-readonly-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.quantity-readonly-container[_ngcontent-%COMP%]   .quantity-value[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n  border: solid 1px gainsboro;\n  border-radius: 20px;\n  padding: 2px 10px;\n}\n.order-page-info[_ngcontent-%COMP%] {\n  width: 64%;\n  display: block;\n  margin: auto;\n  text-align: center;\n}\n@media screen and (max-width: 768px) {\n  .order-page-info[_ngcontent-%COMP%] {\n    width: 94% !important;\n  }\n}\n.product-ordered-datecontainer[_ngcontent-%COMP%]   .ordered-date-title[_ngcontent-%COMP%] {\n  color: #313e24;\n  font-weight: bold;\n}\n@media screen and (max-width: 768px) {\n  .product-ordered-datecontainer[_ngcontent-%COMP%]   .ordered-date-title[_ngcontent-%COMP%] {\n    margin-bottom: 5px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .place-order-btn[_ngcontent-%COMP%] {\n    width: 100% !important;\n    margin-bottom: 10px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .remove-btn[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXIvRTpcXFVJIHByb2plY3RcXFJhc2FocmlkYXlcXENsaWVudF9FZGl0YWJsZVF1ZXN0aW9uc0Fuc3dlcnMvc3JjXFxhc3NldHNcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9vcmRlci9FOlxcVUkgcHJvamVjdFxcUmFzYWhyaWRheVxcQ2xpZW50X0VkaXRhYmxlUXVlc3Rpb25zQW5zd2Vycy9zcmNcXGFzc2V0c1xcc2Nzc1xcY29tbW9uLnNjc3MiLCJzcmMvYXBwL29yZGVyL29yZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9vcmRlci9FOlxcVUkgcHJvamVjdFxcUmFzYWhyaWRheVxcQ2xpZW50X0VkaXRhYmxlUXVlc3Rpb25zQW5zd2Vycy9zcmNcXGFwcFxcb3JkZXJcXG9yZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEQSxpQkFBQTtBQ3BEQTtFQUNFLCtCQUFBO0VBQ0EsNEJBQUE7QUNGRjtBREtBO0VBQ0UsZ0NBQUE7RUFDQSw2QkFBQTtBQ0ZGO0FES0E7RUFDRSxzQkFBQTtBQ0ZGO0FES0E7RUFDRSxpQkFBQTtBQ0ZGO0FESUU7RUFIRjtJQUlJLGtCQUFBO0VDREY7QUFDRjtBRElBO0VBQ0UsY0RSa0I7QUVPcEI7QURJQTtFQUNFLHVCQUFBO0FDREY7QURJQTtFQUNFLDRCQUFBO0FDREY7QURJQTtFQUNFLDZCQUFBO0FDREY7QURJQTtFQUNFLGtCQUFBO0FDREY7QURLRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDRko7QURNQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0hGO0FES0U7RUFMRjtJQU1JLFVBQUE7RUNGRjtBQUNGO0FESUU7RUFDRyxtQkFBQTtBQ0ZMO0FER0k7RUFDRSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJEVnNCO0VDV3RCLFlBQUE7QUNETjtBREtFO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJEM0IyQjtFQzRCM0IsbUJBQUE7QUNISjtBREtJO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNITjtBREtNO0VBQ0UsdUJBQUE7QUNIUjtBRE9JO0VBcEJGO0lBcUJJLFlBQUE7RUNKSjtBQUNGO0FET0U7RUFDRSxtQkFBQTtFQUNBLGFBQUE7QUNMSjtBRE9JO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDTE47QURRSTtFQUNFLFlBQUE7QUNOTjtBRFVFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCRDdEd0I7RUM4RHhCLDRCRDlEd0I7RUMrRHhCLGdDRC9Ed0I7RUNnRXhCLCtCRGhFd0I7QUV3RDVCO0FEWUU7RUFDRSxZQUFBO0FDVko7QURhRTtFQUNHLGdCQUFBO0VBQ0EsbUJBQUE7QUNYTDtBRGNFO0VBQ0UsY0R2RjRCO0VDd0Y1QixlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ1pKO0FEZUU7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDYko7QURnQkU7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0FDZEo7QURnQkk7RUFDRSxrQkFBQTtFQUNBLGNEOUcwQjtBRWdHaEM7QURpQkk7RUFDSSxtQkFBQTtBQ2ZSO0FEaUJRO0VBQ0ksbUJEckhvQjtFQ3NIcEIsV0RoSVk7RUNpSVosMEJBQUE7RUFDQSxtQkFBQTtBQ2ZaO0FEb0JFO0VBQ0UsbUJBQUE7QUNsQko7QURvQkk7RUFDRSxrQkFBQTtFQUNBLG1CRGhJeUI7RUNpSXpCLHFCRG5JMEI7QUVpSGhDO0FEc0JPO0VBREg7SUFFTSwwQkFBQTtJQUNBLHlCQUFBO0VDbkJSO0FBQ0Y7QUR1Qkk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CRGpKd0I7RUNrSnhCLGNEakp3QjtFQ2tKeEIseUJBQUE7QUNyQlI7QUR3Qkk7RUFDSSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNEMUp3QjtBRW9JaEM7QUQyQkk7RUFDRSx5QkQvSjBCO0VDZ0sxQixXRDVKbUI7QUVtSXpCO0FEMkJJO0VBQ0UsY0RwSzBCO0VDcUsxQixpQkFBQTtBQ3pCTjtBRDZCRTtFQUNFLGlCQUFBO0FDM0JKO0FEMENBO0VBQ0UsbUJBQUE7QUN2Q0Y7QUR5Q0U7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDdkNKO0FEeUNFO0VBQ0csZUFBQTtFQUNBLG9CQUFBO0FDdkNMO0FEeUNLO0VBSkg7SUFLSSx1QkFBQTtFQ3RDSjtBQUNGO0FEMENBO0VBQ0UsY0Q1TThCO0VDNk05Qix5QkQzTTZCO0VDNE03QixxQkQ5TThCO0VDK005QixpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7QUN2Q0Y7QUR5Q0U7RUFHRSxjRHhONEI7RUN5TjVCLHlCRHZOMkI7RUN3TjNCLHFCRDFONEI7QUVpTGhDO0FEMkNFO0VBQ0UsMEJBQUE7QUN6Q0o7QUQ2Q0E7RUFDRSxjRGpPOEI7RUNrTzlCLHlCRG5POEI7RUNvTzlCLHFCRG5POEI7RUNvTzlCLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FDMUNGO0FENENFO0VBR0UsY0Q5TzRCO0VDK081Qix5QkRoUDRCO0VDaVA1QixxQkRoUDRCO0FFb01oQztBRDhDRTtFQUNFLDBCQUFBO0FDNUNKO0FEaURBO0VBQ0UsV0R0U2tCO0VDdVNsQix5QkQ5UW1CO0VDK1FuQixxQkQvUW1CO0VDZ1JuQixpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUM5Q0Y7QURnREU7RUFHRSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QUNoREo7QURvREE7RUFFRSxlQUFBO0FDbERGO0FEMERBO0VBQ0Usc0JBQUE7QUN4REY7QUQyREE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUN4REY7QUQwREU7RUFDRSw2Q0FBQTtBQ3hESjtBRDZERTtFQUNFLDRCRDdSd0I7RUM4UnhCLDZCRDlSd0I7RUMrUnhCLCtCRC9Sd0I7RUNnU3hCLGdDRGhTd0I7RUNpU3hCLHlCRHpTMkI7QUUrTy9CO0FEK0RFO0VBREY7SUFFSSxpQkFBQTtJQUNBLGNBQUE7RUMzREY7QUFDRjtBRDhEQTtFQUNFLDhCQUFBO0FDM0RGO0FEOERBO0VBQ0UsMkJBQUE7QUMzREY7QUQrREU7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXRDVVa0I7RUM2VWxCLG1CRHJVd0I7RUNzVXhCLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQzVETjtBRG9FQTtFQUNFLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSw4QkFBQTtFQUNBLGNEbFY4QjtBRWlSaEM7QURtRUU7RUFORjtJQU9JLHVCQUFBO0VDaEVGO0FBQ0Y7QURtRUE7RUFDRSw2QkFBQTtBQ2hFRjtBRHNFTTtFQURGO0lBRUksVUFBQTtFQ2xFTjtBQUNGO0FEcUVFO0VBQ0Usb0NBQUE7RUFDQSx5QkFBQTtFQUNBLG1CRDlWd0I7QUUyUjVCO0FEdUVBO0VBQ0Usc0NBQUE7QUNwRUY7QUR1RUE7RUFDRSxvQ0FBQTtBQ3BFRjtBRHVFQTtFQUNFLHFDQUFBO0FDcEVGO0FEd0VFO0VBREY7SUFFTSwwQkFBQTtFQ3BFSjtBQUNGO0FEdUVBLGlDQUFBO0FBcUVBO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0FDeElGO0FEMklBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esd2dCQWxFYztFQTZDWiw0SEFzQmlCO0FDcElyQjtBRHVJQTtFQXpDSSxvQ0EwQ3VCO0VBbEN2Qix1Q0FtQzBCO0FDNUg5QjtBRHVFSTtFQXlERjtJQUNFLDRuREFqRlc7RUN2QmI7QUFDRjtBRDZDSTtFQStERjtJQWpDRSw0QkFrQ21CO0lBakNuQixpQ0FpQ21CO0lBaENuQixvQ0FnQ21CO0lBL0JuQiwrQkErQm1CO0lBOUJuQixnQ0E4Qm1CO0lBQ25CLFVBQUE7RUM3REY7QUFDRjtBRExJO0VBc0VGO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0VDMEJGO0VEeEJBO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0VDMEJGO0VEeEJBO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0VDMEJGO0VEeEJBO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0VDMEJGO0VEeEJBO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0VDMEJGO0FBQ0Y7QUM5akJBO0VBQ0kseUJINEM0QjtFRzNDNUIsbUJIcUR3QjtFR3BEeEIsY0gyQzRCO0VHMUM1QixZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBRGdrQko7QUM5akJJO0VBQ0ksV0h5Q2lCO0FFdWhCekI7QUM1akJBO0VBQ0ksbUJBQUE7QUQrakJKO0FDN2pCSTtFQUNJLHlCSDZCd0I7RUc1QnhCLFdIZ0NpQjtFRy9CakIsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBRCtqQlI7QUM3akJRO0VBQ0ksV0gwQmE7QUVxaUJ6QjtBQzFqQkE7RUFDSSxtQkFBQTtBRDZqQko7QUM1akJJO0VBQ0ksNEJIVm9CO0VHV3BCLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRDhqQlI7QUMxakJBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUQ2akJKO0FDM2pCSTtFQU5KO0lBT1EscUJBQUE7RUQ4akJOO0FBQ0Y7QUMxakJJO0VBQ0ksY0hQd0I7RUdReEIsaUJBQUE7QUQ2akJSO0FDNWpCUTtFQUhKO0lBSVEsa0JBQUE7RUQrakJWO0FBQ0Y7QUMxakJJO0VBREo7SUFFUSxzQkFBQTtJQUNBLG1CQUFBO0VEOGpCTjtBQUNGO0FDMWpCSTtFQURGO0lBRU0sc0JBQUE7RUQ4akJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9vcmRlci9vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRoZWFkZXItdGhlbWUtYmFja2dyb3VuZDojZmJmYmZiO1xyXG4kaGVhZGVyLXRoZW1lLWNvbG9yOiNkODQzMTU7XHJcbiRidXR0b24tdGhlbWUtYmFja2dyb3VuZDojZjA3YzI5O1xyXG4kYnV0dG9uLXRoZW1lLWNvbG9yOiNmZmY7XHJcbiRzZWFyY2hCdG4tdGhlbWUtYmFja2dyb3VuZDojMjhhNzQ1O1xyXG4kc2VhcmNoQnRuLXRoZW1lLWNvbG9yOiNmZmY7XHJcbiRxdWVzdGlvbnMtdGhlbWUtY29sb3I6YmxhY2s7XHJcbiRzaG93SGlkZVRvZ2dsZUljb24tY29sb3I6I2YwN2MyOTtcclxuJHNob3dIaWRlLWJ0bi1iYWNrZ3JvdW5kOndoaXRlO1xyXG4kc2hvd0hpZGUtYnRuLWNvbG9yOmdyZXk7XHJcbiRiYWNrZ3JvdW5kLWltZzonYmFja2dyb3VuZC1pbWcucG5nJztcclxuJGltZy1wYXRoOicuL2Fzc2V0cy9pbWFnZXMvJztcclxuJGdvbGRlbnRoZW1lLWJhY2tncm91bmQtaW1nOiAnZ29sZGVudGhlbWUtYmFja2dyb3VuZC1pbWcucG5nJzsgXHJcbiRib2R5LWJhY2tncm91bmQ6ICNmZmY7XHJcbiRwYWdlLWNvbnRhaW5lci1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuJHByb2R1Y3QtbmFtZS1jb2xvcjojMzMzO1xyXG4kcHJvZHVjdC1kZXNjcmlwdGlvbi1jb2xvcjojN2U2ZTZlO1xyXG4kY29udGFpbmVyLWJvcmRlci1jb2xvcjogI2RjZGNkYztcclxuJGJ0bi1saWdodGRlZmF1bHQtYm9yZGVyOiAjZGNkY2RjO1xyXG4kZGVsZXRlLWljb24tY29sb3I6ICNjZTQ1NDU7XHJcbiRidG4tZGVmYXVsdDojZjhmOWZhOyBcclxuJGNvbmZpcm0tc3RhdHVzLWJhY2tncm91bmQ6IGFsaWNlQmx1ZTtcclxuJGNoZWNrLWljb24tY29sb3I6IGdyZWVuO1xyXG4kcGVuZGluZ2Nsb2NrLWljb24tY29sb3I6ICM1OGI2ZDU7XHJcbiRwZW5kaW5nLXN0YXR1cy1iYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG4kcHJvZHVjdC1ob3Zlci1ib3JkZXI6IGJsYWNrO1xyXG4kZ29sZGVudGhlbWUtcHJvZHVjdC1ob3ZlcjogI2VlY2Q1ZjtcclxuJGJ0bi1vdXRsaW5lLWNvbG9yOiAjNGZiZmE4O1xyXG4kYnRuLW91dGxpbmUtY29sb3IxOiAjMDA0RTY0O1xyXG4kYnRuLW91dGxpbmUtY29sb3IxLWFjdGl2ZTogIzAwM0Q0RjtcclxuJGNvbnRhY3QtdXMtZm9vdGVyOiAjZWRmMGY1O1xyXG4kY29weXJpZ2h0LWZvb3RlcjogIzMxM2UyNDtcclxuJGdvbGRlbnRoZW1lLWNvcHlyaWdodC1mb290ZXI6ICMzMTNlMjQ7XHJcbiRjb250YWN0LXVzLWZvb3RlcmNvbG9yOiAjMjEyNTI5O1xyXG4kY29udGFjdHVzLWxpbmtpY29uLWNvbG9yOiAjMDA1YzUwO1xyXG4kY29udGFjdC11cy1ib3JkZXI6IGdhaW5zYm9ybztcclxuJGJveC1zaGFkb3ctY29sb3I6IGdhaW5zYm9ybztcclxuJGJ0bi1vdXRsaW5lLXRleHRjb2xvcjogI2ZmZjtcclxuJGJ0bi1vdXRsaW5lc2Vjb25kYXJ5LWJvcmRlcmhvdmVyOiAjMDA2NDAwO1xyXG4kYnRuLW91dGxpbmUtYmFja2dyb3VuZGhvdmVyOiAjM2Q4ZDdjO1xyXG4kYnRuLXNlYXJjaC1iYWNrZ3JvdW5kOiAjMzc3ZDZlOyBcclxuJGhlYWRlci1ib3gtc2hhZG93Y29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiRidG4tb3V0bGluZS1yZW1vdmVidG46IGluZGlhbnJlZDtcclxuJHBob25lbnVtYmVyLWxpbmstY29sb3I6IGdyZWVuO1xyXG4kY2FydC1zdGlja3ktYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxuJG91dE9mU3RvY2stYmFja2dyb3VuZC1jb2xvcjogI2E5MGIwYjtcclxuJGNhcnQtaWNvbi1jb2xvcjogI2E5MGIwYjtcclxuJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kOiAjMzEzZTI0O1xyXG4kZ29sZGVudGhlbWUtaGVhZGVydGV4dC1jb2xvcjogICNhZDk3NGY7XHJcbiRnb2xkZW50aGVtZS1wYW5lbC1iYWNrZ3JvdW5kOiAjZTNkZmNlO1xyXG4kZ29sZGVudGhlbWUtcHJvZHVjdGRlc2NyaXB0aW9uLWNvbG9yOiAjMjMxZjIwO1xyXG4kZ29sZGVudGhlbWUtcHJvZHVjdGRlc2NyaXB0aW9uLWNvbG9yOiMzMzM7XHJcbiRnb2xkZW50aGVtZS1iYWRnZS10ZXh0OiAjZmZmO1xyXG4kZ29sZGVudGhlbWUtZm9vdGVyLWNvbG9yOiAjYjViMTk2O1xyXG4kZ29sZGVudGhlbWUtY29uZmlybW1vZGFsLWJvcmRlcmNvbG9yOiAjYzRiYWJhO1xyXG4kZ29sZGVudGhlbWUtY2Fyb3VzZWx0ZXh0LWNvbG9yOiAjYmViODljO1xyXG4vKiBjb25zdCB2YWx1ZXMgKi9cclxuJGdvbGRlbnRoZW1lLWJvcmRlci1yYWRpdXM6IDIwcHg7IiwiQGltcG9ydCBcIi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbiRpbWctcGF0aDogJ35zcmMvYXNzZXRzL2ltYWdlcy8nO1xyXG5cclxuJXF1YW50aXR5YnRuLWxlZnQtYm9yZGVycmFkaXVzIHtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbiVxdWFudGl0eWJ0bi1yaWdodC1ib3JkZXJyYWRpdXMge1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uYnRuLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5lZGl0LWljb24ge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZGVsZXRlLWljb24ge1xyXG4gIGNvbG9yOiAkZGVsZXRlLWljb24tY29sb3I7XHJcbn1cclxuXHJcbi5uby1wYWRkaW5nIHtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5vLXBhZGRpbmctbGVmdCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5vLXBhZGRpbmctcmlnaHQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZW1wdHktZGF0YSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGVmYXVsdC1pbWctY29udGFpbmVyIHtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJ0LWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDY0JTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcblxyXG4gIC5wcm9kdWN0LW9yZGVyZWQtZGF0ZWNvbnRhaW5lciB7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIC5vcmRlcmVkLWRhdGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVydGV4dC1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogJGdvbGRlbnRoZW1lLWJhZGdlLXRleHQgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGdvbGRlbnRoZW1lLWJvcmRlci1yYWRpdXM7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnByb2R1Y3QtaXRlbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAycHggJGJveC1zaGFkb3ctY29sb3I7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZ29sZGVudGhlbWUtcGFuZWwtYmFja2dyb3VuZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblxyXG4gICAgLnVzZXItZGV0YWlscyB7XHJcbiAgICAgIGNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggJGdvbGRlbnRoZW1lLWhlYWRlcnRleHQtY29sb3I7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gICAgICAucGhvbmUtbnVtYmVyIHtcclxuICAgICAgICBjb2xvcjogJHBob25lbnVtYmVyLWxpbmstY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHsgXHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wcm9kdWN0LWltZy1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgLnByb2R1Y3QtaW1hZ2VzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2R1Y3QtaW1nIHtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnByb2R1Y3QtaW1nIHtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICRjb250YWluZXItYm9yZGVyLWNvbG9yO1xyXG4gICAgbWFyZ2luOiBhdXRvIGF1dG8gMTVweCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJGdvbGRlbnRoZW1lLWJvcmRlci1yYWRpdXM7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkZ29sZGVudGhlbWUtYm9yZGVyLXJhZGl1cztcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkZ29sZGVudGhlbWUtYm9yZGVyLXJhZGl1cztcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRnb2xkZW50aGVtZS1ib3JkZXItcmFkaXVzO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAuYWRkLXRvLWNhcnQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgLmNhcnQtaXRlbS1hY3Rpb25idG5zIHtcclxuICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1uYW1lIHtcclxuICAgIGNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVydGV4dC1jb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcblxyXG4gIC5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcclxuICAgIGNvbG9yOiAkcHJvZHVjdC1kZXNjcmlwdGlvbi1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICAuZHJ1Zy1xdWFudGl0eS1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG5cclxuICAgIC5kcnVnLXF1YW50aXR5LXRpdGxlIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICBjb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmRydWctcXVhbnRpdHl2YWx1ZS1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmRydWctcXVhbnRpdHktdmFsdWUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYnRuLW91dGxpbmUtdGV4dGNvbG9yO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA2cHggMTJweCA2cHggMTJweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5xdWFudGl0eS1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBcclxuICAgIC5xdHktaW5wdXQge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRnb2xkZW50aGVtZS1wYW5lbC1iYWNrZ3JvdW5kO1xyXG4gICAgICBib3JkZXItY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICAgIH1cclxuXHJcbiAgICAucXVhbnRpdHktZmllbGRzLWNvbnRhaW5lciB7XHJcbiAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjk5M3B4KSBhbmQgKG1heC13aWR0aDogMTUwMHB4KSB7XHJcbiAgICAgICAgICBmbGV4LWJhc2lzOiAzMiUgIWltcG9ydGFudDtcclxuICAgICAgICAgIG1heC13aWR0aDogMzIlICFpbXBvcnRhbnQ7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gIFxyXG4gICAgLmlucHV0LWdyb3VwLXRleHQge1xyXG4gICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgICAgICAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXJ0ZXh0LWNvbG9yO1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICAgIH1cclxuICBcclxuICAgIC5xdWFudGl0eS10aXRsZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgLnF1YW50aXR5LXJlYWRvbmx5LWNvbnRhaW5lciB7XHJcbiAgICAucXVhbnRpdHktdmFsdWUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVydGV4dC1jb2xvcjtcclxuICAgICAgY29sb3I6ICRnb2xkZW50aGVtZS1iYWRnZS10ZXh0O1xyXG4gICAgfVxyXG4gICAgLnF1YW50aXR5LXRleHQge1xyXG4gICAgICBjb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5idG4tb3V0bGluZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cC1wcmVwZW5kIHtcclxuICAuaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgICAgIEBleHRlbmQgJXF1YW50aXR5YnRuLWxlZnQtYm9yZGVycmFkaXVzO1xyXG4gIH1cclxufVxyXG4uaW5wdXQtZ3JvdXAtYXBwZW5kIHtcclxuICAgIC5pbnB1dC1ncm91cC10ZXh0IHtcclxuICAgICAgICBAZXh0ZW5kICVxdWFudGl0eWJ0bi1yaWdodC1ib3JkZXJyYWRpdXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9kdWN0LXByaWNlIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAuY3VycmVudC1jdXJyZW5jeS1zeW1ib2wge1xyXG4gICAgdG9wOiAtNC4yNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAucHJpY2UtdmFsdWUge1xyXG4gICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuXHJcbiAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZSB7XHJcbiAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ29sZGVudGhlbWUtcGFuZWwtYmFja2dyb3VuZDtcclxuICBib3JkZXItY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogM3B4IDEwcHggIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICY6YWN0aXZlLFxyXG4gICY6aG92ZXIsXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBjb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdvbGRlbnRoZW1lLXBhbmVsLWJhY2tncm91bmQ7XHJcbiAgICBib3JkZXItY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICB9XHJcbiAgJjphY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtY3VzdG9tc2Vjb25kYXJ5IHtcclxuICBjb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlcnRleHQtY29sb3I7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kO1xyXG4gIGJvcmRlci1jb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlcnRleHQtY29sb3I7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDNweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCAkYm94LXNoYWRvdy1jb2xvcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgXHJcbiAgJjphY3RpdmUsXHJcbiAgJjpob3ZlcixcclxuICAmOmZvY3VzIHtcclxuICAgIGNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVydGV4dC1jb2xvcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICAgIGJvcmRlci1jb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlcnRleHQtY29sb3I7XHJcbiAgfVxyXG4gICY6YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5idG4tY29sb3ItMSB7XHJcbiAgY29sb3I6ICRidXR0b24tdGhlbWUtY29sb3I7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJ0bi1vdXRsaW5lLWNvbG9yMTtcclxuICBib3JkZXItY29sb3I6ICRidG4tb3V0bGluZS1jb2xvcjE7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG5cclxuICAmOmhvdmVyLFxyXG4gICY6YWN0aXZlLFxyXG4gICY6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogJGJ0bi1vdXRsaW5lLWNvbG9yMS1hY3RpdmUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAkYnV0dG9uLXRoZW1lLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICRidG4tb3V0bGluZS1jb2xvcjEtYWN0aXZlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtcmVtb3ZlYnRuIHtcclxuICBAZXh0ZW5kIC5idG4tb3V0bGluZS1jdXN0b21zZWNvbmRhcnk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAmOmFjdGl2ZSxcclxuICAmOmhvdmVyLFxyXG4gICY6Zm9jdXMge1xyXG4gIH1cclxufVxyXG5cclxuLmZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcblxyXG4gIC5jbG9zZSB7XHJcbiAgICBtYXJnaW46IC0wLjVyZW0gLTAuMnJlbSAtMXJlbSBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAge1xyXG4gIC5tb2RhbC1jb250ZW50IHtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRnb2xkZW50aGVtZS1ib3JkZXItcmFkaXVzO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRnb2xkZW50aGVtZS1ib3JkZXItcmFkaXVzO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGdvbGRlbnRoZW1lLWJvcmRlci1yYWRpdXM7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGdvbGRlbnRoZW1lLWJvcmRlci1yYWRpdXM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ29sZGVudGhlbWUtcGFuZWwtYmFja2dyb3VuZDtcclxuIH1cclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIG1heC1oZWlnaHQ6IDU4MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG5idXR0b25bZGlzYWJsZWRdIHtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50b3RhbC10ZXh0IHtcclxuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vdXQtb2Ytc3RvY2sge1xyXG4gIC5vdXQtb2Ytc3RvY2stdGV4dCB7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgY29sb3I6ICRidG4tb3V0bGluZS10ZXh0Y29sb3I7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRvdXRPZlN0b2NrLWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgIGJvcmRlcjogc29saWQgMXB4ICRib3gtc2hhZG93LWNvbG9yO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICBwYWRkaW5nOiA2LjVweCAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLW1vZGFsIHtcclxuICBAZXh0ZW5kIC5idG4tb3V0bGluZTtcclxufVxyXG5cclxuLnBhZ2UtaGVhZGluZyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIH1cclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCB7XHJcbiAgLmFsZXJ0LWRpc21pc3NpYmxlIHtcclxuICAgIC5jbG9zZSB7XHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5hbGVydC1pbmZvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXJ0ZXh0LWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkZ29sZGVudGhlbWUtYm9yZGVyLXJhZGl1cztcclxuIH1cclxufVxyXG5cclxuLmt1cGlwYWt3YSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCRpbWctcGF0aCArICdrdXBpcGFrd2EucG5nJyk7XHJcbn1cclxuXHJcbi5wb3R0YWxpIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJGltZy1wYXRoICsgJ3BvdHRhbGkucG5nJyk7XHJcbn1cclxuXHJcbi5raGFsdml5YSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCRpbWctcGF0aCArICdraGFsdml5YS5wbmcnKTtcclxufVxyXG5cclxuLmRpc3BsYXktaW5saW5lIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDsgXHJcbiAgfVxyXG59XHJcblxyXG4vKi0tLS1maXJlY3JhY2tlcnMgYW5pbWF0aW9uIC0tLSovXHJcbiRwYXJ0aWNsZXM6IDUwO1xyXG4kd2lkdGg6IDUwMDtcclxuJGhlaWdodDogNTAwO1xyXG5cclxuLy8gQ3JlYXRlIHRoZSBleHBsb3Npb24uLi5cclxuJGJveC1zaGFkb3c6ICgpO1xyXG4kYm94LXNoYWRvdzI6ICgpO1xyXG5AZm9yICRpIGZyb20gMCB0aHJvdWdoICRwYXJ0aWNsZXMge1xyXG4gICRib3gtc2hhZG93OiAkYm94LXNoYWRvdyxcclxuICAgICAgICAgICAgICAgcmFuZG9tKCR3aWR0aCktJHdpZHRoIC8gMiArIHB4XHJcbiAgICAgICAgICAgICAgIHJhbmRvbSgkaGVpZ2h0KS0kaGVpZ2h0IC8gMS4yICsgcHhcclxuICAgICAgICAgICAgICAgaHNsKHJhbmRvbSgzNjApLCAxMDAsIDUwKTtcclxuICAkYm94LXNoYWRvdzI6ICRib3gtc2hhZG93MiwgMCAwICNmZmZcclxufVxyXG5AbWl4aW4ga2V5ZnJhbWVzICgkYW5pbWF0aW9uTmFtZSkge1xyXG4gICAgQC13ZWJraXQta2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxuXHJcbiAgICBALW1vei1rZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIEAtby1rZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIEAtbXMta2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxuXHJcbiAgICBAa2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGFuaW1hdGlvbi1kZWxheSAoJHNldHRpbmdzKSB7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogJHNldHRpbmdzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6ICRzZXR0aW5ncztcclxuICAgIC1vLWFuaW1hdGlvbi1kZWxheTogJHNldHRpbmdzO1xyXG4gICAgLW1zLWFuaW1hdGlvbi1kZWxheTogJHNldHRpbmdzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAkc2V0dGluZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiBhbmltYXRpb24tZHVyYXRpb24gKCRzZXR0aW5ncykge1xyXG4gICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246ICRzZXR0aW5ncztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAkc2V0dGluZ3M7XHJcbiAgICAtby1hbmltYXRpb24tZHVyYXRpb246ICRzZXR0aW5ncztcclxuICAgIC1tcy1hbmltYXRpb24tZHVyYXRpb246ICRzZXR0aW5ncztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogJHNldHRpbmdzO1xyXG59XHJcblxyXG5AbWl4aW4gYW5pbWF0aW9uICgkc2V0dGluZ3MpIHtcclxuICAgIC1tb3otYW5pbWF0aW9uOiAkc2V0dGluZ3M7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogJHNldHRpbmdzO1xyXG4gICAgLW8tYW5pbWF0aW9uOiAkc2V0dGluZ3M7XHJcbiAgICAtbXMtYW5pbWF0aW9uOiAkc2V0dGluZ3M7XHJcbiAgICBhbmltYXRpb246ICRzZXR0aW5ncztcclxufVxyXG5cclxuQG1peGluIHRyYW5zZm9ybSAoJHNldHRpbmdzKSB7XHJcbiAgICB0cmFuc2Zvcm06ICRzZXR0aW5ncztcclxuICAgIC1tb3otdHJhbnNmb3JtOiAkc2V0dGluZ3M7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogJHNldHRpbmdzO1xyXG4gICAgLW8tdHJhbnNmb3JtOiAkc2V0dGluZ3M7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiAkc2V0dGluZ3M7XHJcbn1cclxuXHJcbi5weXJvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbi5weXJvID4gLmJlZm9yZSwgLnB5cm8gPiAuYWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogNXB4O1xyXG4gIGhlaWdodDogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3gtc2hhZG93OiAkYm94LXNoYWRvdzI7XHJcbiAgQGluY2x1ZGUgYW5pbWF0aW9uKCgxcyBiYW5nIGVhc2Utb3V0IGluZmluaXRlIGJhY2t3YXJkcywgMXMgZ3Jhdml0eSBlYXNlLWluIGluZmluaXRlIGJhY2t3YXJkcywgNXMgcG9zaXRpb24gbGluZWFyIGluZmluaXRlIGJhY2t3YXJkcykpO1xyXG59XHJcbiAgICBcclxuLnB5cm8gPiAuYWZ0ZXIge1xyXG4gIEBpbmNsdWRlIGFuaW1hdGlvbi1kZWxheSgoMS4yNXMsIDEuMjVzLCAxLjI1cykpO1xyXG4gIEBpbmNsdWRlIGFuaW1hdGlvbi1kdXJhdGlvbigoMS4yNXMsIDEuMjVzLCA2LjI1cykpO1xyXG59XHJcbiAgICAgICAgXHJcbkBpbmNsdWRlIGtleWZyYW1lcyhiYW5nKSB7XHJcbiAgdG8ge1xyXG4gICAgYm94LXNoYWRvdzokYm94LXNoYWRvdztcclxuICB9XHJcbn1cclxuICAgIFxyXG5AaW5jbHVkZSBrZXlmcmFtZXMoZ3Jhdml0eSkgIHtcclxuICB0byB7XHJcbiAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWSgyMDBweCkpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuICAgIFxyXG5AaW5jbHVkZSBrZXlmcmFtZXMocG9zaXRpb24pIHtcclxuICAwJSwgMTkuOSUge1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICB9XHJcbiAgMjAlLCAzOS45JSB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gIH1cclxuICA0MCUsIDU5LjklIHsgIFxyXG4gICAgbWFyZ2luLXRvcDogMjAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDcwJVxyXG4gIH1cclxuICA2MCUsIDc5LjklIHsgIFxyXG4gICAgbWFyZ2luLXRvcDogMzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICB9XHJcbiAgODAlLCA5OS45JSB7ICBcclxuICAgIG1hcmdpbi10b3A6IDMwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XHJcbiAgfVxyXG59XHJcblxyXG4iLCIvKiBjb25zdCB2YWx1ZXMgKi9cbi5pbnB1dC1ncm91cC1wcmVwZW5kIC5pbnB1dC1ncm91cC10ZXh0IHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbn1cblxuLmlucHV0LWdyb3VwLWFwcGVuZCAuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbn1cblxuLmJ0bi1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLmVkaXQtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZWRpdC1pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIH1cbn1cblxuLmRlbGV0ZS1pY29uIHtcbiAgY29sb3I6ICNjZTQ1NDU7XG59XG5cbi5uby1wYWRkaW5nIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5uby1wYWRkaW5nLWxlZnQge1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubm8tcGFkZGluZy1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uZW1wdHktZGF0YSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRlZmF1bHQtaW1nLWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5jYXJ0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiA2NCU7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMTBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNhcnQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG59XG4uY2FydC1jb250YWluZXIgLnByb2R1Y3Qtb3JkZXJlZC1kYXRlY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAucHJvZHVjdC1vcmRlcmVkLWRhdGVjb250YWluZXIgLm9yZGVyZWQtZGF0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZDk3NGYgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogNXB4O1xufVxuLmNhcnQtY29udGFpbmVyIC5wcm9kdWN0LWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMnB4IGdhaW5zYm9ybztcbiAgYmFja2dyb3VuZDogI2UzZGZjZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAucHJvZHVjdC1pdGVtIC51c2VyLWRldGFpbHMge1xuICBjb2xvcjogIzMxM2UyNCAhaW1wb3J0YW50O1xuICBib3JkZXI6IHNvbGlkIDFweCAjYWQ5NzRmO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNhcnQtY29udGFpbmVyIC5wcm9kdWN0LWl0ZW0gLnVzZXItZGV0YWlscyAucGhvbmUtbnVtYmVyIHtcbiAgY29sb3I6IGdyZWVuICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJ0LWNvbnRhaW5lciAucHJvZHVjdC1pdGVtIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbi5jYXJ0LWNvbnRhaW5lciAucHJvZHVjdC1pbWctY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAucHJvZHVjdC1pbWctY29udGFpbmVyIC5wcm9kdWN0LWltYWdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLmNhcnQtY29udGFpbmVyIC5wcm9kdWN0LWltZy1jb250YWluZXIgLnByb2R1Y3QtaW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmNhcnQtY29udGFpbmVyIC5wcm9kdWN0LWltZyB7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IHNvbGlkIDFweCAjZGNkY2RjO1xuICBtYXJnaW46IGF1dG8gYXV0byAxNXB4IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG59XG4uY2FydC1jb250YWluZXIgLmFkZC10by1jYXJ0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmNhcnQtY29udGFpbmVyIC5jYXJ0LWl0ZW0tYWN0aW9uYnRucyB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uY2FydC1jb250YWluZXIgLnByb2R1Y3QtbmFtZSB7XG4gIGNvbG9yOiAjYWQ5NzRmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLmNhcnQtY29udGFpbmVyIC5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6ICM3ZTZlNmUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwO1xufVxuLmNhcnQtY29udGFpbmVyIC5kcnVnLXF1YW50aXR5LWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuLmNhcnQtY29udGFpbmVyIC5kcnVnLXF1YW50aXR5LWNvbnRhaW5lciAuZHJ1Zy1xdWFudGl0eS10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY29sb3I6ICMzMTNlMjQ7XG59XG4uY2FydC1jb250YWluZXIgLmRydWctcXVhbnRpdHktY29udGFpbmVyIC5kcnVnLXF1YW50aXR5dmFsdWUtY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAuZHJ1Zy1xdWFudGl0eS1jb250YWluZXIgLmRydWctcXVhbnRpdHl2YWx1ZS1jb250YWluZXIgLmRydWctcXVhbnRpdHktdmFsdWUge1xuICBiYWNrZ3JvdW5kOiAjMzEzZTI0O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNnB4IDEycHggNnB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4uY2FydC1jb250YWluZXIgLnF1YW50aXR5LWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uY2FydC1jb250YWluZXIgLnF1YW50aXR5LWNvbnRhaW5lciAucXR5LWlucHV0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZTNkZmNlO1xuICBib3JkZXItY29sb3I6ICMzMTNlMjQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTNweCkgYW5kIChtYXgtd2lkdGg6IDE1MDBweCkge1xuICAuY2FydC1jb250YWluZXIgLnF1YW50aXR5LWNvbnRhaW5lciAucXVhbnRpdHktZmllbGRzLWNvbnRhaW5lciB7XG4gICAgZmxleC1iYXNpczogMzIlICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAzMiUgIWltcG9ydGFudDtcbiAgfVxufVxuLmNhcnQtY29udGFpbmVyIC5xdWFudGl0eS1jb250YWluZXIgLmlucHV0LWdyb3VwLXRleHQge1xuICB3aWR0aDogMzVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjMzEzZTI0O1xuICBjb2xvcjogI2FkOTc0ZjtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzMxM2UyNDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAucXVhbnRpdHktY29udGFpbmVyIC5xdWFudGl0eS10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjMzEzZTI0O1xufVxuLmNhcnQtY29udGFpbmVyIC5xdWFudGl0eS1yZWFkb25seS1jb250YWluZXIgLnF1YW50aXR5LXZhbHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FkOTc0ZjtcbiAgY29sb3I6ICNmZmY7XG59XG4uY2FydC1jb250YWluZXIgLnF1YW50aXR5LXJlYWRvbmx5LWNvbnRhaW5lciAucXVhbnRpdHktdGV4dCB7XG4gIGNvbG9yOiAjMzEzZTI0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAuYnRuLW91dGxpbmUsIC5jYXJ0LWNvbnRhaW5lciAuYnRuLW91dGxpbmUtbW9kYWwge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnByb2R1Y3QtcHJpY2Uge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnByb2R1Y3QtcHJpY2UgLmN1cnJlbnQtY3VycmVuY3ktc3ltYm9sIHtcbiAgdG9wOiAtNC4yNXB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9kdWN0LXByaWNlIC5wcmljZS12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wcm9kdWN0LXByaWNlIC5wcmljZS12YWx1ZSB7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIH1cbn1cblxuLmJ0bi1vdXRsaW5lLCAuYnRuLW91dGxpbmUtbW9kYWwge1xuICBjb2xvcjogIzMxM2UyNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZGZjZTtcbiAgYm9yZGVyLWNvbG9yOiAjMzEzZTI0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogM3B4IDEwcHggIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJ0bi1vdXRsaW5lOmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLW1vZGFsOmFjdGl2ZSwgLmJ0bi1vdXRsaW5lOmhvdmVyLCAuYnRuLW91dGxpbmUtbW9kYWw6aG92ZXIsIC5idG4tb3V0bGluZTpmb2N1cywgLmJ0bi1vdXRsaW5lLW1vZGFsOmZvY3VzIHtcbiAgY29sb3I6ICMzMTNlMjQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2RmY2U7XG4gIGJvcmRlci1jb2xvcjogIzMxM2UyNDtcbn1cbi5idG4tb3V0bGluZTphY3RpdmUsIC5idG4tb3V0bGluZS1tb2RhbDphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcbn1cblxuLmJ0bi1vdXRsaW5lLWN1c3RvbXNlY29uZGFyeSwgLmJ0bi1vdXRsaW5lLXJlbW92ZWJ0biB7XG4gIGNvbG9yOiAjYWQ5NzRmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzZTI0O1xuICBib3JkZXItY29sb3I6ICNhZDk3NGY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAzcHggMTBweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAycHggMnB4IGdhaW5zYm9ybztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJ0bi1vdXRsaW5lLWN1c3RvbXNlY29uZGFyeTphY3RpdmUsIC5idG4tb3V0bGluZS1yZW1vdmVidG46YWN0aXZlLCAuYnRuLW91dGxpbmUtY3VzdG9tc2Vjb25kYXJ5OmhvdmVyLCAuYnRuLW91dGxpbmUtcmVtb3ZlYnRuOmhvdmVyLCAuYnRuLW91dGxpbmUtY3VzdG9tc2Vjb25kYXJ5OmZvY3VzLCAuYnRuLW91dGxpbmUtcmVtb3ZlYnRuOmZvY3VzIHtcbiAgY29sb3I6ICNhZDk3NGY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTNlMjQ7XG4gIGJvcmRlci1jb2xvcjogI2FkOTc0Zjtcbn1cbi5idG4tb3V0bGluZS1jdXN0b21zZWNvbmRhcnk6YWN0aXZlLCAuYnRuLW91dGxpbmUtcmVtb3ZlYnRuOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xufVxuXG4uYnRuLWNvbG9yLTEge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNEU2NDtcbiAgYm9yZGVyLWNvbG9yOiAjMDA0RTY0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5idG4tY29sb3ItMTpob3ZlciwgLmJ0bi1jb2xvci0xOmFjdGl2ZSwgLmJ0bi1jb2xvci0xOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogIzAwM0Q0RiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICMwMDNENEYgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1vdXRsaW5lLXJlbW92ZWJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgei1pbmRleDogMTAwMDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5tb2RhbC1oZWFkZXIgLmNsb3NlIHtcbiAgbWFyZ2luOiAtMC41cmVtIC0wLjJyZW0gLTFyZW0gYXV0byAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1vZGFsLWNvbnRlbnQge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2RmY2U7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1vZGFsLWJvZHkge1xuICAgIG1heC1oZWlnaHQ6IDU4MHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG59XG5cbmJ1dHRvbltkaXNhYmxlZF0ge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XG59XG5cbi50b3RhbC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xufVxuXG4ub3V0LW9mLXN0b2NrIC5vdXQtb2Ytc3RvY2stdGV4dCB7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICNhOTBiMGI7XG4gIGJvcmRlcjogc29saWQgMXB4IGdhaW5zYm9ybztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogNi41cHggMTBweDtcbn1cblxuLnBhZ2UtaGVhZGluZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzMxM2UyNDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnBhZ2UtaGVhZGluZyB7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIH1cbn1cblxuLmhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIDo6bmctZGVlcCAuYWxlcnQtZGlzbWlzc2libGUgLmNsb3NlIHtcbiAgICB6LWluZGV4OiAwO1xuICB9XG59XG46Om5nLWRlZXAgLmFsZXJ0LWluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzZTI0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjYWQ5NzRmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5rdXBpcGFrd2Ege1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJ+c3JjL2Fzc2V0cy9pbWFnZXMva3VwaXBha3dhLnBuZ1wiKTtcbn1cblxuLnBvdHRhbGkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJ+c3JjL2Fzc2V0cy9pbWFnZXMvcG90dGFsaS5wbmdcIik7XG59XG5cbi5raGFsdml5YSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIn5zcmMvYXNzZXRzL2ltYWdlcy9raGFsdml5YS5wbmdcIik7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gIC5kaXNwbGF5LWlubGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLyotLS0tZmlyZWNyYWNrZXJzIGFuaW1hdGlvbiAtLS0qL1xuLnB5cm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5O1xufVxuXG4ucHlybyA+IC5iZWZvcmUsIC5weXJvID4gLmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmO1xuICAtbW96LWFuaW1hdGlvbjogMXMgYmFuZyBlYXNlLW91dCBpbmZpbml0ZSBiYWNrd2FyZHMsIDFzIGdyYXZpdHkgZWFzZS1pbiBpbmZpbml0ZSBiYWNrd2FyZHMsIDVzIHBvc2l0aW9uIGxpbmVhciBpbmZpbml0ZSBiYWNrd2FyZHM7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAxcyBiYW5nIGVhc2Utb3V0IGluZmluaXRlIGJhY2t3YXJkcywgMXMgZ3Jhdml0eSBlYXNlLWluIGluZmluaXRlIGJhY2t3YXJkcywgNXMgcG9zaXRpb24gbGluZWFyIGluZmluaXRlIGJhY2t3YXJkcztcbiAgLW8tYW5pbWF0aW9uOiAxcyBiYW5nIGVhc2Utb3V0IGluZmluaXRlIGJhY2t3YXJkcywgMXMgZ3Jhdml0eSBlYXNlLWluIGluZmluaXRlIGJhY2t3YXJkcywgNXMgcG9zaXRpb24gbGluZWFyIGluZmluaXRlIGJhY2t3YXJkcztcbiAgLW1zLWFuaW1hdGlvbjogMXMgYmFuZyBlYXNlLW91dCBpbmZpbml0ZSBiYWNrd2FyZHMsIDFzIGdyYXZpdHkgZWFzZS1pbiBpbmZpbml0ZSBiYWNrd2FyZHMsIDVzIHBvc2l0aW9uIGxpbmVhciBpbmZpbml0ZSBiYWNrd2FyZHM7XG4gIGFuaW1hdGlvbjogMXMgYmFuZyBlYXNlLW91dCBpbmZpbml0ZSBiYWNrd2FyZHMsIDFzIGdyYXZpdHkgZWFzZS1pbiBpbmZpbml0ZSBiYWNrd2FyZHMsIDVzIHBvc2l0aW9uIGxpbmVhciBpbmZpbml0ZSBiYWNrd2FyZHM7XG59XG5cbi5weXJvID4gLmFmdGVyIHtcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDEuMjVzLCAxLjI1cywgMS4yNXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxLjI1cywgMS4yNXMsIDEuMjVzO1xuICAtby1hbmltYXRpb24tZGVsYXk6IDEuMjVzLCAxLjI1cywgMS4yNXM7XG4gIC1tcy1hbmltYXRpb24tZGVsYXk6IDEuMjVzLCAxLjI1cywgMS4yNXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMS4yNXMsIDEuMjVzLCAxLjI1cztcbiAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDEuMjVzLCAxLjI1cywgNi4yNXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjI1cywgMS4yNXMsIDYuMjVzO1xuICAtby1hbmltYXRpb24tZHVyYXRpb246IDEuMjVzLCAxLjI1cywgNi4yNXM7XG4gIC1tcy1hbmltYXRpb24tZHVyYXRpb246IDEuMjVzLCAxLjI1cywgNi4yNXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS4yNXMsIDEuMjVzLCA2LjI1cztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGJhbmcge1xuICB0byB7XG4gICAgYm94LXNoYWRvdzogLTQzcHggLTE4MC42NjY2NjY2NjY3cHggI2ZmMDA2NiwgMTM3cHggLTMxLjY2NjY2NjY2NjdweCAjMDBiYmZmLCA0N3B4IC0zNDEuNjY2NjY2NjY2N3B4ICNmZjAwZGQsIC0zMXB4IC0xNTguNjY2NjY2NjY2N3B4ICNhNjAwZmYsIDZweCAtOTYuNjY2NjY2NjY2N3B4ICNmYmZmMDAsIDE1NXB4IDIzLjMzMzMzMzMzMzNweCAjMDBlNmZmLCAxMjVweCAtMjMzLjY2NjY2NjY2NjdweCAjMzcwMGZmLCAtMTdweCAtMTg1LjY2NjY2NjY2NjdweCAjYWEwMGZmLCAyMTlweCA0MS4zMzMzMzMzMzMzcHggI2ZmMDA2NiwgNTRweCAtMzE1LjY2NjY2NjY2NjdweCAjMDBmZjkxLCAyMXB4IC0xMzQuNjY2NjY2NjY2N3B4ICM5MTAwZmYsIC0xODBweCAtMjYxLjY2NjY2NjY2NjdweCAjZTYwMGZmLCAtMTc4cHggLTMzMS42NjY2NjY2NjY3cHggIzMzZmYwMCwgLTE5OXB4IC0yOS42NjY2NjY2NjY3cHggIzAwZmZiMywgLTIyM3B4IC00MTUuNjY2NjY2NjY2N3B4ICNmZjkxMDAsIDk0cHggLTM5OC42NjY2NjY2NjY3cHggI2UxMDBmZiwgLTIwcHggLTg4LjY2NjY2NjY2NjdweCAjY2MwMGZmLCAxODJweCA3OS4zMzMzMzMzMzMzcHggIzAwNTVmZiwgLTI4cHggLTEwNC42NjY2NjY2NjY3cHggIzAwZWVmZiwgLTY4cHggLTE5Ni42NjY2NjY2NjY3cHggI2ZmOTEwMCwgMTIxcHggLTI0LjY2NjY2NjY2NjdweCAjMDBmZjlkLCAxMDBweCAtMjguNjY2NjY2NjY2N3B4ICM2NjAwZmYsIDE5NHB4IC0zNTMuNjY2NjY2NjY2N3B4ICMwMGZmNTEsIC0xOTJweCAtMTE4LjY2NjY2NjY2NjdweCAjYmJmZjAwLCAxOTJweCAtMzcuNjY2NjY2NjY2N3B4ICMwMDYyZmYsIC0zMnB4IC0xMzEuNjY2NjY2NjY2N3B4ICNmZjAwZDksIDIxNnB4IC01My42NjY2NjY2NjY3cHggIzAwMTFmZiwgLTEwOHB4IC0zMDQuNjY2NjY2NjY2N3B4ICMwMDFlZmYsIDE0MXB4IC0zNjkuNjY2NjY2NjY2N3B4ICM5ZDAwZmYsIDk5cHggLTg2LjY2NjY2NjY2NjdweCAjZmYyNjAwLCAyMjBweCAxOC4zMzMzMzMzMzMzcHggIzAwZjdmZiwgLTM5cHggLTI1NS42NjY2NjY2NjY3cHggIzgwZmYwMCwgODNweCAtMjU5LjY2NjY2NjY2NjdweCAjZmZhYTAwLCAyNDVweCAxNy4zMzMzMzMzMzMzcHggIzAwZmYyZiwgLTg1cHggLTE0OS42NjY2NjY2NjY3cHggI2ZmMDA4OCwgLTg0cHggMjIuMzMzMzMzMzMzM3B4ICMwMGZmOGMsIC0xNjBweCAtMTkzLjY2NjY2NjY2NjdweCAjOTFmZjAwLCAtMTNweCAtNy42NjY2NjY2NjY3cHggIzAwYWFmZiwgLTE1MnB4IC0xODguNjY2NjY2NjY2N3B4ICNhNjAwZmYsIC05NXB4IC01MC42NjY2NjY2NjY3cHggIzkxZmYwMCwgMTExcHggMTMuMzMzMzMzMzMzM3B4ICNmZjAwNjIsIDE2M3B4IC0yOTQuNjY2NjY2NjY2N3B4ICNmZjAwODgsIC02OHB4IC0zNTUuNjY2NjY2NjY2N3B4ICNhMjAwZmYsIDI4cHggLTY4LjY2NjY2NjY2NjdweCAjOTFmZjAwLCAyNHB4IDQ1LjMzMzMzMzMzMzNweCAjZmYwMDlkLCAxNDdweCAtMzk1LjY2NjY2NjY2NjdweCAjZmZlYTAwLCAtMTI5cHggLTMxMi42NjY2NjY2NjY3cHggIzAwY2NmZiwgMTI2cHggLTEzNi42NjY2NjY2NjY3cHggI2Q1ZmYwMCwgNTZweCAtMzYyLjY2NjY2NjY2NjdweCAjMDBmZmJmLCAtMnB4IDczLjMzMzMzMzMzMzNweCAjZmZjODAwLCAtMTcwcHggLTI3Mi42NjY2NjY2NjY3cHggIzc3MDBmZjtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGJhbmcge1xuICB0byB7XG4gICAgYm94LXNoYWRvdzogLTQzcHggLTE4MC42NjY2NjY2NjY3cHggI2ZmMDA2NiwgMTM3cHggLTMxLjY2NjY2NjY2NjdweCAjMDBiYmZmLCA0N3B4IC0zNDEuNjY2NjY2NjY2N3B4ICNmZjAwZGQsIC0zMXB4IC0xNTguNjY2NjY2NjY2N3B4ICNhNjAwZmYsIDZweCAtOTYuNjY2NjY2NjY2N3B4ICNmYmZmMDAsIDE1NXB4IDIzLjMzMzMzMzMzMzNweCAjMDBlNmZmLCAxMjVweCAtMjMzLjY2NjY2NjY2NjdweCAjMzcwMGZmLCAtMTdweCAtMTg1LjY2NjY2NjY2NjdweCAjYWEwMGZmLCAyMTlweCA0MS4zMzMzMzMzMzMzcHggI2ZmMDA2NiwgNTRweCAtMzE1LjY2NjY2NjY2NjdweCAjMDBmZjkxLCAyMXB4IC0xMzQuNjY2NjY2NjY2N3B4ICM5MTAwZmYsIC0xODBweCAtMjYxLjY2NjY2NjY2NjdweCAjZTYwMGZmLCAtMTc4cHggLTMzMS42NjY2NjY2NjY3cHggIzMzZmYwMCwgLTE5OXB4IC0yOS42NjY2NjY2NjY3cHggIzAwZmZiMywgLTIyM3B4IC00MTUuNjY2NjY2NjY2N3B4ICNmZjkxMDAsIDk0cHggLTM5OC42NjY2NjY2NjY3cHggI2UxMDBmZiwgLTIwcHggLTg4LjY2NjY2NjY2NjdweCAjY2MwMGZmLCAxODJweCA3OS4zMzMzMzMzMzMzcHggIzAwNTVmZiwgLTI4cHggLTEwNC42NjY2NjY2NjY3cHggIzAwZWVmZiwgLTY4cHggLTE5Ni42NjY2NjY2NjY3cHggI2ZmOTEwMCwgMTIxcHggLTI0LjY2NjY2NjY2NjdweCAjMDBmZjlkLCAxMDBweCAtMjguNjY2NjY2NjY2N3B4ICM2NjAwZmYsIDE5NHB4IC0zNTMuNjY2NjY2NjY2N3B4ICMwMGZmNTEsIC0xOTJweCAtMTE4LjY2NjY2NjY2NjdweCAjYmJmZjAwLCAxOTJweCAtMzcuNjY2NjY2NjY2N3B4ICMwMDYyZmYsIC0zMnB4IC0xMzEuNjY2NjY2NjY2N3B4ICNmZjAwZDksIDIxNnB4IC01My42NjY2NjY2NjY3cHggIzAwMTFmZiwgLTEwOHB4IC0zMDQuNjY2NjY2NjY2N3B4ICMwMDFlZmYsIDE0MXB4IC0zNjkuNjY2NjY2NjY2N3B4ICM5ZDAwZmYsIDk5cHggLTg2LjY2NjY2NjY2NjdweCAjZmYyNjAwLCAyMjBweCAxOC4zMzMzMzMzMzMzcHggIzAwZjdmZiwgLTM5cHggLTI1NS42NjY2NjY2NjY3cHggIzgwZmYwMCwgODNweCAtMjU5LjY2NjY2NjY2NjdweCAjZmZhYTAwLCAyNDVweCAxNy4zMzMzMzMzMzMzcHggIzAwZmYyZiwgLTg1cHggLTE0OS42NjY2NjY2NjY3cHggI2ZmMDA4OCwgLTg0cHggMjIuMzMzMzMzMzMzM3B4ICMwMGZmOGMsIC0xNjBweCAtMTkzLjY2NjY2NjY2NjdweCAjOTFmZjAwLCAtMTNweCAtNy42NjY2NjY2NjY3cHggIzAwYWFmZiwgLTE1MnB4IC0xODguNjY2NjY2NjY2N3B4ICNhNjAwZmYsIC05NXB4IC01MC42NjY2NjY2NjY3cHggIzkxZmYwMCwgMTExcHggMTMuMzMzMzMzMzMzM3B4ICNmZjAwNjIsIDE2M3B4IC0yOTQuNjY2NjY2NjY2N3B4ICNmZjAwODgsIC02OHB4IC0zNTUuNjY2NjY2NjY2N3B4ICNhMjAwZmYsIDI4cHggLTY4LjY2NjY2NjY2NjdweCAjOTFmZjAwLCAyNHB4IDQ1LjMzMzMzMzMzMzNweCAjZmYwMDlkLCAxNDdweCAtMzk1LjY2NjY2NjY2NjdweCAjZmZlYTAwLCAtMTI5cHggLTMxMi42NjY2NjY2NjY3cHggIzAwY2NmZiwgMTI2cHggLTEzNi42NjY2NjY2NjY3cHggI2Q1ZmYwMCwgNTZweCAtMzYyLjY2NjY2NjY2NjdweCAjMDBmZmJmLCAtMnB4IDczLjMzMzMzMzMzMzNweCAjZmZjODAwLCAtMTcwcHggLTI3Mi42NjY2NjY2NjY3cHggIzc3MDBmZjtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBiYW5nIHtcbiAgdG8ge1xuICAgIGJveC1zaGFkb3c6IC00M3B4IC0xODAuNjY2NjY2NjY2N3B4ICNmZjAwNjYsIDEzN3B4IC0zMS42NjY2NjY2NjY3cHggIzAwYmJmZiwgNDdweCAtMzQxLjY2NjY2NjY2NjdweCAjZmYwMGRkLCAtMzFweCAtMTU4LjY2NjY2NjY2NjdweCAjYTYwMGZmLCA2cHggLTk2LjY2NjY2NjY2NjdweCAjZmJmZjAwLCAxNTVweCAyMy4zMzMzMzMzMzMzcHggIzAwZTZmZiwgMTI1cHggLTIzMy42NjY2NjY2NjY3cHggIzM3MDBmZiwgLTE3cHggLTE4NS42NjY2NjY2NjY3cHggI2FhMDBmZiwgMjE5cHggNDEuMzMzMzMzMzMzM3B4ICNmZjAwNjYsIDU0cHggLTMxNS42NjY2NjY2NjY3cHggIzAwZmY5MSwgMjFweCAtMTM0LjY2NjY2NjY2NjdweCAjOTEwMGZmLCAtMTgwcHggLTI2MS42NjY2NjY2NjY3cHggI2U2MDBmZiwgLTE3OHB4IC0zMzEuNjY2NjY2NjY2N3B4ICMzM2ZmMDAsIC0xOTlweCAtMjkuNjY2NjY2NjY2N3B4ICMwMGZmYjMsIC0yMjNweCAtNDE1LjY2NjY2NjY2NjdweCAjZmY5MTAwLCA5NHB4IC0zOTguNjY2NjY2NjY2N3B4ICNlMTAwZmYsIC0yMHB4IC04OC42NjY2NjY2NjY3cHggI2NjMDBmZiwgMTgycHggNzkuMzMzMzMzMzMzM3B4ICMwMDU1ZmYsIC0yOHB4IC0xMDQuNjY2NjY2NjY2N3B4ICMwMGVlZmYsIC02OHB4IC0xOTYuNjY2NjY2NjY2N3B4ICNmZjkxMDAsIDEyMXB4IC0yNC42NjY2NjY2NjY3cHggIzAwZmY5ZCwgMTAwcHggLTI4LjY2NjY2NjY2NjdweCAjNjYwMGZmLCAxOTRweCAtMzUzLjY2NjY2NjY2NjdweCAjMDBmZjUxLCAtMTkycHggLTExOC42NjY2NjY2NjY3cHggI2JiZmYwMCwgMTkycHggLTM3LjY2NjY2NjY2NjdweCAjMDA2MmZmLCAtMzJweCAtMTMxLjY2NjY2NjY2NjdweCAjZmYwMGQ5LCAyMTZweCAtNTMuNjY2NjY2NjY2N3B4ICMwMDExZmYsIC0xMDhweCAtMzA0LjY2NjY2NjY2NjdweCAjMDAxZWZmLCAxNDFweCAtMzY5LjY2NjY2NjY2NjdweCAjOWQwMGZmLCA5OXB4IC04Ni42NjY2NjY2NjY3cHggI2ZmMjYwMCwgMjIwcHggMTguMzMzMzMzMzMzM3B4ICMwMGY3ZmYsIC0zOXB4IC0yNTUuNjY2NjY2NjY2N3B4ICM4MGZmMDAsIDgzcHggLTI1OS42NjY2NjY2NjY3cHggI2ZmYWEwMCwgMjQ1cHggMTcuMzMzMzMzMzMzM3B4ICMwMGZmMmYsIC04NXB4IC0xNDkuNjY2NjY2NjY2N3B4ICNmZjAwODgsIC04NHB4IDIyLjMzMzMzMzMzMzNweCAjMDBmZjhjLCAtMTYwcHggLTE5My42NjY2NjY2NjY3cHggIzkxZmYwMCwgLTEzcHggLTcuNjY2NjY2NjY2N3B4ICMwMGFhZmYsIC0xNTJweCAtMTg4LjY2NjY2NjY2NjdweCAjYTYwMGZmLCAtOTVweCAtNTAuNjY2NjY2NjY2N3B4ICM5MWZmMDAsIDExMXB4IDEzLjMzMzMzMzMzMzNweCAjZmYwMDYyLCAxNjNweCAtMjk0LjY2NjY2NjY2NjdweCAjZmYwMDg4LCAtNjhweCAtMzU1LjY2NjY2NjY2NjdweCAjYTIwMGZmLCAyOHB4IC02OC42NjY2NjY2NjY3cHggIzkxZmYwMCwgMjRweCA0NS4zMzMzMzMzMzMzcHggI2ZmMDA5ZCwgMTQ3cHggLTM5NS42NjY2NjY2NjY3cHggI2ZmZWEwMCwgLTEyOXB4IC0zMTIuNjY2NjY2NjY2N3B4ICMwMGNjZmYsIDEyNnB4IC0xMzYuNjY2NjY2NjY2N3B4ICNkNWZmMDAsIDU2cHggLTM2Mi42NjY2NjY2NjY3cHggIzAwZmZiZiwgLTJweCA3My4zMzMzMzMzMzMzcHggI2ZmYzgwMCwgLTE3MHB4IC0yNzIuNjY2NjY2NjY2N3B4ICM3NzAwZmY7XG4gIH1cbn1cbkAtbXMta2V5ZnJhbWVzIGJhbmcge1xuICB0byB7XG4gICAgYm94LXNoYWRvdzogLTQzcHggLTE4MC42NjY2NjY2NjY3cHggI2ZmMDA2NiwgMTM3cHggLTMxLjY2NjY2NjY2NjdweCAjMDBiYmZmLCA0N3B4IC0zNDEuNjY2NjY2NjY2N3B4ICNmZjAwZGQsIC0zMXB4IC0xNTguNjY2NjY2NjY2N3B4ICNhNjAwZmYsIDZweCAtOTYuNjY2NjY2NjY2N3B4ICNmYmZmMDAsIDE1NXB4IDIzLjMzMzMzMzMzMzNweCAjMDBlNmZmLCAxMjVweCAtMjMzLjY2NjY2NjY2NjdweCAjMzcwMGZmLCAtMTdweCAtMTg1LjY2NjY2NjY2NjdweCAjYWEwMGZmLCAyMTlweCA0MS4zMzMzMzMzMzMzcHggI2ZmMDA2NiwgNTRweCAtMzE1LjY2NjY2NjY2NjdweCAjMDBmZjkxLCAyMXB4IC0xMzQuNjY2NjY2NjY2N3B4ICM5MTAwZmYsIC0xODBweCAtMjYxLjY2NjY2NjY2NjdweCAjZTYwMGZmLCAtMTc4cHggLTMzMS42NjY2NjY2NjY3cHggIzMzZmYwMCwgLTE5OXB4IC0yOS42NjY2NjY2NjY3cHggIzAwZmZiMywgLTIyM3B4IC00MTUuNjY2NjY2NjY2N3B4ICNmZjkxMDAsIDk0cHggLTM5OC42NjY2NjY2NjY3cHggI2UxMDBmZiwgLTIwcHggLTg4LjY2NjY2NjY2NjdweCAjY2MwMGZmLCAxODJweCA3OS4zMzMzMzMzMzMzcHggIzAwNTVmZiwgLTI4cHggLTEwNC42NjY2NjY2NjY3cHggIzAwZWVmZiwgLTY4cHggLTE5Ni42NjY2NjY2NjY3cHggI2ZmOTEwMCwgMTIxcHggLTI0LjY2NjY2NjY2NjdweCAjMDBmZjlkLCAxMDBweCAtMjguNjY2NjY2NjY2N3B4ICM2NjAwZmYsIDE5NHB4IC0zNTMuNjY2NjY2NjY2N3B4ICMwMGZmNTEsIC0xOTJweCAtMTE4LjY2NjY2NjY2NjdweCAjYmJmZjAwLCAxOTJweCAtMzcuNjY2NjY2NjY2N3B4ICMwMDYyZmYsIC0zMnB4IC0xMzEuNjY2NjY2NjY2N3B4ICNmZjAwZDksIDIxNnB4IC01My42NjY2NjY2NjY3cHggIzAwMTFmZiwgLTEwOHB4IC0zMDQuNjY2NjY2NjY2N3B4ICMwMDFlZmYsIDE0MXB4IC0zNjkuNjY2NjY2NjY2N3B4ICM5ZDAwZmYsIDk5cHggLTg2LjY2NjY2NjY2NjdweCAjZmYyNjAwLCAyMjBweCAxOC4zMzMzMzMzMzMzcHggIzAwZjdmZiwgLTM5cHggLTI1NS42NjY2NjY2NjY3cHggIzgwZmYwMCwgODNweCAtMjU5LjY2NjY2NjY2NjdweCAjZmZhYTAwLCAyNDVweCAxNy4zMzMzMzMzMzMzcHggIzAwZmYyZiwgLTg1cHggLTE0OS42NjY2NjY2NjY3cHggI2ZmMDA4OCwgLTg0cHggMjIuMzMzMzMzMzMzM3B4ICMwMGZmOGMsIC0xNjBweCAtMTkzLjY2NjY2NjY2NjdweCAjOTFmZjAwLCAtMTNweCAtNy42NjY2NjY2NjY3cHggIzAwYWFmZiwgLTE1MnB4IC0xODguNjY2NjY2NjY2N3B4ICNhNjAwZmYsIC05NXB4IC01MC42NjY2NjY2NjY3cHggIzkxZmYwMCwgMTExcHggMTMuMzMzMzMzMzMzM3B4ICNmZjAwNjIsIDE2M3B4IC0yOTQuNjY2NjY2NjY2N3B4ICNmZjAwODgsIC02OHB4IC0zNTUuNjY2NjY2NjY2N3B4ICNhMjAwZmYsIDI4cHggLTY4LjY2NjY2NjY2NjdweCAjOTFmZjAwLCAyNHB4IDQ1LjMzMzMzMzMzMzNweCAjZmYwMDlkLCAxNDdweCAtMzk1LjY2NjY2NjY2NjdweCAjZmZlYTAwLCAtMTI5cHggLTMxMi42NjY2NjY2NjY3cHggIzAwY2NmZiwgMTI2cHggLTEzNi42NjY2NjY2NjY3cHggI2Q1ZmYwMCwgNTZweCAtMzYyLjY2NjY2NjY2NjdweCAjMDBmZmJmLCAtMnB4IDczLjMzMzMzMzMzMzNweCAjZmZjODAwLCAtMTcwcHggLTI3Mi42NjY2NjY2NjY3cHggIzc3MDBmZjtcbiAgfVxufVxuQGtleWZyYW1lcyBiYW5nIHtcbiAgdG8ge1xuICAgIGJveC1zaGFkb3c6IC00M3B4IC0xODAuNjY2NjY2NjY2N3B4ICNmZjAwNjYsIDEzN3B4IC0zMS42NjY2NjY2NjY3cHggIzAwYmJmZiwgNDdweCAtMzQxLjY2NjY2NjY2NjdweCAjZmYwMGRkLCAtMzFweCAtMTU4LjY2NjY2NjY2NjdweCAjYTYwMGZmLCA2cHggLTk2LjY2NjY2NjY2NjdweCAjZmJmZjAwLCAxNTVweCAyMy4zMzMzMzMzMzMzcHggIzAwZTZmZiwgMTI1cHggLTIzMy42NjY2NjY2NjY3cHggIzM3MDBmZiwgLTE3cHggLTE4NS42NjY2NjY2NjY3cHggI2FhMDBmZiwgMjE5cHggNDEuMzMzMzMzMzMzM3B4ICNmZjAwNjYsIDU0cHggLTMxNS42NjY2NjY2NjY3cHggIzAwZmY5MSwgMjFweCAtMTM0LjY2NjY2NjY2NjdweCAjOTEwMGZmLCAtMTgwcHggLTI2MS42NjY2NjY2NjY3cHggI2U2MDBmZiwgLTE3OHB4IC0zMzEuNjY2NjY2NjY2N3B4ICMzM2ZmMDAsIC0xOTlweCAtMjkuNjY2NjY2NjY2N3B4ICMwMGZmYjMsIC0yMjNweCAtNDE1LjY2NjY2NjY2NjdweCAjZmY5MTAwLCA5NHB4IC0zOTguNjY2NjY2NjY2N3B4ICNlMTAwZmYsIC0yMHB4IC04OC42NjY2NjY2NjY3cHggI2NjMDBmZiwgMTgycHggNzkuMzMzMzMzMzMzM3B4ICMwMDU1ZmYsIC0yOHB4IC0xMDQuNjY2NjY2NjY2N3B4ICMwMGVlZmYsIC02OHB4IC0xOTYuNjY2NjY2NjY2N3B4ICNmZjkxMDAsIDEyMXB4IC0yNC42NjY2NjY2NjY3cHggIzAwZmY5ZCwgMTAwcHggLTI4LjY2NjY2NjY2NjdweCAjNjYwMGZmLCAxOTRweCAtMzUzLjY2NjY2NjY2NjdweCAjMDBmZjUxLCAtMTkycHggLTExOC42NjY2NjY2NjY3cHggI2JiZmYwMCwgMTkycHggLTM3LjY2NjY2NjY2NjdweCAjMDA2MmZmLCAtMzJweCAtMTMxLjY2NjY2NjY2NjdweCAjZmYwMGQ5LCAyMTZweCAtNTMuNjY2NjY2NjY2N3B4ICMwMDExZmYsIC0xMDhweCAtMzA0LjY2NjY2NjY2NjdweCAjMDAxZWZmLCAxNDFweCAtMzY5LjY2NjY2NjY2NjdweCAjOWQwMGZmLCA5OXB4IC04Ni42NjY2NjY2NjY3cHggI2ZmMjYwMCwgMjIwcHggMTguMzMzMzMzMzMzM3B4ICMwMGY3ZmYsIC0zOXB4IC0yNTUuNjY2NjY2NjY2N3B4ICM4MGZmMDAsIDgzcHggLTI1OS42NjY2NjY2NjY3cHggI2ZmYWEwMCwgMjQ1cHggMTcuMzMzMzMzMzMzM3B4ICMwMGZmMmYsIC04NXB4IC0xNDkuNjY2NjY2NjY2N3B4ICNmZjAwODgsIC04NHB4IDIyLjMzMzMzMzMzMzNweCAjMDBmZjhjLCAtMTYwcHggLTE5My42NjY2NjY2NjY3cHggIzkxZmYwMCwgLTEzcHggLTcuNjY2NjY2NjY2N3B4ICMwMGFhZmYsIC0xNTJweCAtMTg4LjY2NjY2NjY2NjdweCAjYTYwMGZmLCAtOTVweCAtNTAuNjY2NjY2NjY2N3B4ICM5MWZmMDAsIDExMXB4IDEzLjMzMzMzMzMzMzNweCAjZmYwMDYyLCAxNjNweCAtMjk0LjY2NjY2NjY2NjdweCAjZmYwMDg4LCAtNjhweCAtMzU1LjY2NjY2NjY2NjdweCAjYTIwMGZmLCAyOHB4IC02OC42NjY2NjY2NjY3cHggIzkxZmYwMCwgMjRweCA0NS4zMzMzMzMzMzMzcHggI2ZmMDA5ZCwgMTQ3cHggLTM5NS42NjY2NjY2NjY3cHggI2ZmZWEwMCwgLTEyOXB4IC0zMTIuNjY2NjY2NjY2N3B4ICMwMGNjZmYsIDEyNnB4IC0xMzYuNjY2NjY2NjY2N3B4ICNkNWZmMDAsIDU2cHggLTM2Mi42NjY2NjY2NjY3cHggIzAwZmZiZiwgLTJweCA3My4zMzMzMzMzMzMzcHggI2ZmYzgwMCwgLTE3MHB4IC0yNzIuNjY2NjY2NjY2N3B4ICM3NzAwZmY7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBncmF2aXR5IHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBncmF2aXR5IHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgZ3Jhdml0eSB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ALW1zLWtleWZyYW1lcyBncmF2aXR5IHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZ3Jhdml0eSB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgcG9zaXRpb24ge1xuICAwJSwgMTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xuICB9XG4gIDIwJSwgMzkuOSUge1xuICAgIG1hcmdpbi10b3A6IDQwJTtcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xuICB9XG4gIDQwJSwgNTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICBtYXJnaW4tbGVmdDogNzAlO1xuICB9XG4gIDYwJSwgNzkuOSUge1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xuICB9XG4gIDgwJSwgOTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICBtYXJnaW4tbGVmdDogODAlO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgcG9zaXRpb24ge1xuICAwJSwgMTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xuICB9XG4gIDIwJSwgMzkuOSUge1xuICAgIG1hcmdpbi10b3A6IDQwJTtcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xuICB9XG4gIDQwJSwgNTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICBtYXJnaW4tbGVmdDogNzAlO1xuICB9XG4gIDYwJSwgNzkuOSUge1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xuICB9XG4gIDgwJSwgOTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICBtYXJnaW4tbGVmdDogODAlO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIHBvc2l0aW9uIHtcbiAgMCUsIDE5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgfVxuICAyMCUsIDM5LjklIHtcbiAgICBtYXJnaW4tdG9wOiA0MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgfVxuICA0MCUsIDU5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDcwJTtcbiAgfVxuICA2MCUsIDc5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgfVxuICA4MCUsIDk5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcbiAgfVxufVxuQC1tcy1rZXlmcmFtZXMgcG9zaXRpb24ge1xuICAwJSwgMTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xuICB9XG4gIDIwJSwgMzkuOSUge1xuICAgIG1hcmdpbi10b3A6IDQwJTtcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xuICB9XG4gIDQwJSwgNTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICBtYXJnaW4tbGVmdDogNzAlO1xuICB9XG4gIDYwJSwgNzkuOSUge1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xuICB9XG4gIDgwJSwgOTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICBtYXJnaW4tbGVmdDogODAlO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHBvc2l0aW9uIHtcbiAgMCUsIDE5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgfVxuICAyMCUsIDM5LjklIHtcbiAgICBtYXJnaW4tdG9wOiA0MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgfVxuICA0MCUsIDU5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDcwJTtcbiAgfVxuICA2MCUsIDc5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgfVxuICA4MCUsIDk5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcbiAgfVxufVxuLm9yZGVyLWFjY2VwdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxM2UyNDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgY29sb3I6ICNhZDk3NGY7XG4gIHBhZGRpbmc6IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm9yZGVyLWFjY2VwdGVkIC5jaGVjay1pY29uIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5vcmRlci1wcm9ncmVzcy1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm9yZGVyLXByb2dyZXNzLWNvbnRhaW5lciAub3JkZXItcHJvZ3Jlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWQ5NzRmO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4ub3JkZXItcHJvZ3Jlc3MtY29udGFpbmVyIC5vcmRlci1wcm9ncmVzcyAuY2xvY2staWNvbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ucXVhbnRpdHktcmVhZG9ubHktY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5xdWFudGl0eS1yZWFkb25seS1jb250YWluZXIgLnF1YW50aXR5LXZhbHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ2FpbnNib3JvO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAycHggMTBweDtcbn1cblxuLm9yZGVyLXBhZ2UtaW5mbyB7XG4gIHdpZHRoOiA2NCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5vcmRlci1wYWdlLWluZm8ge1xuICAgIHdpZHRoOiA5NCUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4ucHJvZHVjdC1vcmRlcmVkLWRhdGVjb250YWluZXIgLm9yZGVyZWQtZGF0ZS10aXRsZSB7XG4gIGNvbG9yOiAjMzEzZTI0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wcm9kdWN0LW9yZGVyZWQtZGF0ZWNvbnRhaW5lciAub3JkZXJlZC1kYXRlLXRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnBsYWNlLW9yZGVyLWJ0biB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5yZW1vdmUtYnRuIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59IiwiQGltcG9ydCBcIi4vLi4vLi4vYXNzZXRzL3Njc3MvY29tbW9uLnNjc3NcIjtcclxuXHJcbi5vcmRlci1hY2NlcHRlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkZ29sZGVudGhlbWUtYm9yZGVyLXJhZGl1cztcclxuICAgIGNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVydGV4dC1jb2xvcjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgLmNoZWNrLWljb24ge1xyXG4gICAgICAgIGNvbG9yOiAkZ29sZGVudGhlbWUtYmFkZ2UtdGV4dDtcclxuICAgIH1cclxufVxyXG5cclxuLm9yZGVyLXByb2dyZXNzLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgIC5vcmRlci1wcm9ncmVzcyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlcnRleHQtY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICRnb2xkZW50aGVtZS1iYWRnZS10ZXh0O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIFxyXG4gICAgICAgIC5jbG9jay1pY29uIHtcclxuICAgICAgICAgICAgY29sb3I6ICRnb2xkZW50aGVtZS1iYWRnZS10ZXh0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnF1YW50aXR5LXJlYWRvbmx5LWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgLnF1YW50aXR5LXZhbHVlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGVuZGluZy1zdGF0dXMtYmFja2dyb3VuZDtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAkYm94LXNoYWRvdy1jb2xvcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDJweCAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ub3JkZXItcGFnZS1pbmZvIHtcclxuICAgIHdpZHRoOiA2NCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIHdpZHRoOiA5NCUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLnByb2R1Y3Qtb3JkZXJlZC1kYXRlY29udGFpbmVyIHtcclxuICAgIC5vcmRlcmVkLWRhdGUtdGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnBsYWNlLW9yZGVyLWJ0biB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnJlbW92ZS1idG4ge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-order',
                templateUrl: './order.component.html',
                styleUrls: ['./order.component.scss'],
                providers: [
                    { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__["CarouselConfig"], useValue: { showIndicators: false } }
                ]
            }]
    }], function () { return [{ type: _services_common_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }, { type: _services_product_service_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }, { type: _services_order_service_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"] }, { type: _services_loader_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }, { type: angular_notifier__WEBPACK_IMPORTED_MODULE_7__["NotifierService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/order/order.module.ts":
/*!***************************************!*\
  !*** ./src/app/order/order.module.ts ***!
  \***************************************/
/*! exports provided: OrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModule", function() { return OrderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _order_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _order_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-routing.module */ "./src/app/order/order-routing.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/alert/fesm2015/ngx-bootstrap-alert.js");










class OrderModule {
}
OrderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OrderModule });
OrderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OrderModule_Factory(t) { return new (t || OrderModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _order_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrderRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
            ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"].forRoot(),
            ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__["AlertModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrderModule, { declarations: [_order_component__WEBPACK_IMPORTED_MODULE_2__["OrderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _order_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrderRoutingModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__["AlertModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_order_component__WEBPACK_IMPORTED_MODULE_2__["OrderComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _order_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrderRoutingModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
                    ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"].forRoot(),
                    ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__["AlertModule"].forRoot()
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=order-order-module-es2015.js.map