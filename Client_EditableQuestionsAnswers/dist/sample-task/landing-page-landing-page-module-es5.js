function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-page-landing-page-module"], {
  /***/
  "./src/app/landing-page/landing-page-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/landing-page/landing-page-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: LandingPageRoutingModule */

  /***/
  function srcAppLandingPageLandingPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingPageRoutingModule", function () {
      return LandingPageRoutingModule;
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


    var _landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./landing-page.component */
    "./src/app/landing-page/landing-page.component.ts");

    var routes = [{
      path: '',
      component: _landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"]
    }];

    var LandingPageRoutingModule = /*#__PURE__*/_createClass(function LandingPageRoutingModule() {
      _classCallCheck(this, LandingPageRoutingModule);
    });

    LandingPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LandingPageRoutingModule
    });
    LandingPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LandingPageRoutingModule_Factory(t) {
        return new (t || LandingPageRoutingModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LandingPageRoutingModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageRoutingModule, [{
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
  "./src/app/landing-page/landing-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/landing-page/landing-page.component.ts ***!
    \********************************************************/

  /*! exports provided: LandingPageComponent */

  /***/
  function srcAppLandingPageLandingPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function () {
      return LandingPageComponent;
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


    var _services_common_service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/common-service/common.service */
    "./src/app/services/common-service/common.service.ts");
    /* harmony import */


    var _services_landing_page_service_landing_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/landing-page-service/landing-page.service */
    "./src/app/services/landing-page-service/landing-page.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_loader_service_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/loader-service/loader.service */
    "./src/app/services/loader-service/loader.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["videoPlayer"];

    function LandingPageComponent_div_0_slide_3_img_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 13);
      }

      if (rf & 2) {
        var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function LandingPageComponent_div_0_slide_3_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 15, 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function LandingPageComponent_div_0_slide_3_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingPageComponent_div_0_slide_3_div_3_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r11.showAllProducts();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Show All Products");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LandingPageComponent_div_0_slide_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "slide", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LandingPageComponent_div_0_slide_3_img_1_Template, 1, 1, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LandingPageComponent_div_0_slide_3_div_2_Template, 4, 1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LandingPageComponent_div_0_slide_3_div_3_Template, 3, 0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;
        var i_r4 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r4 != 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r4 == 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.indexOf(3) == 0 - 1);
      }
    }

    function LandingPageComponent_div_0_slide_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "slide", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingPageComponent_div_0_slide_9_Template_slide_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r15.showCategories();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", slide_r13.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r13.data.categoryName);
      }
    }

    function LandingPageComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "carousel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LandingPageComponent_div_0_slide_3_Template, 4, 3, "slide", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Our Categories");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "carousel", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("slideRangeChange", function LandingPageComponent_div_0_Template_carousel_slideRangeChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.onSlideRangeChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LandingPageComponent_div_0_slide_9_Template, 5, 2, "slide", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.randomProductsArr);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isAnimated", true)("showIndicators", ctx_r0.showIndicator)("itemsPerSlide", ctx_r0.itemsPerSlide)("singleSlideOffset", ctx_r0.singleSlideOffset)("noWrap", !ctx_r0.noWrap)("interval", 5000)("startFromIndex", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.productPerCategorySlides);
      }
    }

    var LandingPageComponent = /*#__PURE__*/function () {
      function LandingPageComponent(commonService, landingPageService, router, loaderService) {
        _classCallCheck(this, LandingPageComponent);

        this.commonService = commonService;
        this.landingPageService = landingPageService;
        this.router = router;
        this.loaderService = loaderService;
        this.randomProductsArr = [];
        this.path = './../../assets/images/landingpage_img_';
        this.categoryPath = './../../assets/images/category_';
        this.imgFormat = '.png';
        this.mp4Format = '.mp4';
        this.itemsPerSlide = 3;
        this.singleSlideOffset = true;
        this.noWrap = true;
        this.slidesChangeMessage = '';
        this.productPerCategorySlides = [];
        this.showIndicator = true;
      }

      _createClass(LandingPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.getLandingPageDetails();
          this.getStaticLandingPageImages();
          this.getAllCategories();
          this.play();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.play();
        }
      }, {
        key: "onSlideRangeChange",
        value: function onSlideRangeChange(indexes) {
          this.slidesChangeMessage = "Slides have been switched: ".concat(indexes);
        }
      }, {
        key: "addFadeAnimation",
        value: function addFadeAnimation() {
          this.commonService.addFadeObserver();
        }
      }, {
        key: "getStaticLandingPageImages",
        value: function getStaticLandingPageImages() {
          for (var i = 1; i <= 4; i++) {
            if (i == 2) {
              this.randomProductsArr.push(this.path + i + this.mp4Format);
            } else {
              this.randomProductsArr.push(this.path + i + this.imgFormat);
            }
          }
        }
      }, {
        key: "getLandingPageDetails",
        value: function getLandingPageDetails() {
          var _this = this;

          this.loaderService.display(true);
          this.landingPageService.getLandingPageDetails().subscribe(function (response) {
            _this.loaderService.display(false);

            _this.landingPageDetails = response;

            _this.getRandomProductsToShow();
          });
        }
      }, {
        key: "getRandomProductsToShow",
        value: function getRandomProductsToShow() {
          for (var i = 0; i < 3; i++) {
            var index = Math.floor(Math.random() * this.landingPageDetails.length);

            while (this.landingPageDetails[index].productImages == null || this.landingPageDetails[index].productImages == "") {
              index = Math.floor(Math.random() * this.landingPageDetails.length);
            }

            var currentProductImage = this.commonService.getProductImageToBeShown(this.landingPageDetails[index].productImages);
            this.randomProductsArr.push(currentProductImage);
          }
        }
      }, {
        key: "showAllProducts",
        value: function showAllProducts() {
          this.router.navigate(["/products"]);
        }
      }, {
        key: "showCategories",
        value: function showCategories() {
          this.router.navigate(["/products"]);
        }
      }, {
        key: "setProductPerCategoryInSlides",
        value: function setProductPerCategoryInSlides(response) {
          var _iterator = _createForOfIteratorHelper(response.entries()),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _step$value = _slicedToArray(_step.value, 2),
                  index = _step$value[0],
                  item = _step$value[1];

              var imgObj = {
                image: this.categoryPath + item.categoryName.toLowerCase() + this.imgFormat,
                data: item
              };
              this.productPerCategorySlides.push(imgObj);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          this.addFadeAnimation();
        }
      }, {
        key: "getAllCategories",
        value: function getAllCategories() {
          var _this2 = this;

          this.loaderService.display(true);
          this.landingPageService.getAllCategories().subscribe(function (response) {
            _this2.loaderService.display(false);

            _this2.setProductPerCategoryInSlides(response);
          });
        }
      }, {
        key: "play",
        value: function play() {
          if (this.videoPlayer && this.videoPlayer) {
            var media = this.videoPlayer.nativeElement;
            media.muted = true;
            media.play();
          }
        }
      }]);

      return LandingPageComponent;
    }();

    LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) {
      return new (t || LandingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_landing_page_service_landing_page_service__WEBPACK_IMPORTED_MODULE_3__["LandingPageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_loader_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]));
    };

    LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LandingPageComponent,
      selectors: [["app-landing-page"]],
      viewQuery: function LandingPageComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.videoPlayer = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselConfig"],
        useValue: {
          interval: 10000,
          noPause: true,
          showIndicators: true
        }
      }])],
      decls: 1,
      vars: 1,
      consts: [["class", "landing-page carousel-container", 4, "ngIf"], [1, "landing-page", "carousel-container"], [1, "new-arrival-slides"], ["class", "new-arrival-slide", 4, "ngFor", "ngForOf"], [1, "col-12"], [1, "categories-header"], [1, "product-percategory-slides", "fade", "fadeOut"], [3, "isAnimated", "showIndicators", "itemsPerSlide", "singleSlideOffset", "noWrap", "interval", "startFromIndex", "slideRangeChange"], [3, "click", 4, "ngFor", "ngForOf"], [1, "new-arrival-slide"], ["alt", "first slide", "class", "carousel-img", 3, "src", 4, "ngIf"], ["class", "video-container", 4, "ngIf"], ["class", "carousel-caption d-absolute banner-text", 4, "ngIf"], ["alt", "first slide", 1, "carousel-img", 3, "src"], [1, "video-container"], ["playsinline", "playsinline", "muted", "true", "oncanplay", "this.play()", "autoplay", "true", "loop", "loop", 1, "video-item"], ["videoPlayer", ""], ["type", "video/mp4", 3, "src"], [1, "carousel-caption", "d-absolute", "banner-text"], [1, "btn", "btn-primary", "btn-color-1", 3, "click"], [3, "click"], ["alt", "image slide", 1, "img-responsive", "center-block", 2, "display", "block", "width", "100%", 3, "src"], [1, "carousel-caption"], [1, "carousel-text"]],
      template: function LandingPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LandingPageComponent_div_0_Template, 10, 9, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.randomProductsArr);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__["SlideComponent"]],
      styles: [".input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 15px;\n  border-top-left-radius: 15px;\n}\n.input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  border-bottom-right-radius: 15px;\n  border-top-right-radius: 15px;\n}\n.btn-full-width[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n.edit-icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n@media only screen and (max-width: 768px) {\n  .edit-icon[_ngcontent-%COMP%] {\n    margin-right: 15px;\n  }\n}\n.delete-icon[_ngcontent-%COMP%] {\n  color: #ce4545;\n}\n.no-padding[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n.no-padding-left[_ngcontent-%COMP%] {\n  padding-left: 0px !important;\n}\n.no-padding-right[_ngcontent-%COMP%] {\n  padding-right: 0px !important;\n}\n.empty-data[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.default-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n}\n.cart-container[_ngcontent-%COMP%] {\n  width: 64%;\n  margin: auto;\n  padding: 10px;\n}\n@media only screen and (max-width: 768px) {\n  .cart-container[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n.cart-container[_ngcontent-%COMP%]   .product-ordered-datecontainer[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.cart-container[_ngcontent-%COMP%]   .product-ordered-datecontainer[_ngcontent-%COMP%]   .ordered-date[_ngcontent-%COMP%] {\n  background-color: #ad974f !important;\n  color: #fff !important;\n  border-radius: 20px;\n  padding: 5px;\n}\n.cart-container[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  padding-top: 15px;\n  box-shadow: 0px 0px 2px 2px gainsboro;\n  background: #e3dfce;\n  border-radius: 20px;\n}\n.cart-container[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%] {\n  color: #313e24 !important;\n  border: solid 1px #ad974f;\n  border-radius: 15px;\n  padding: 5px;\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n.cart-container[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .phone-number[_ngcontent-%COMP%] {\n  color: green !important;\n}\n@media only screen and (max-width: 768px) {\n  .cart-container[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n.cart-container[_ngcontent-%COMP%]   .product-img-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  display: flex;\n}\n.cart-container[_ngcontent-%COMP%]   .product-img-container[_ngcontent-%COMP%]   .product-images[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  max-width: 100%;\n}\n.cart-container[_ngcontent-%COMP%]   .product-img-container[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.cart-container[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%] {\n  height: 250px;\n  width: 100%;\n  border: solid 1px #dcdcdc;\n  margin: auto auto 15px auto;\n  display: block;\n  border-top-right-radius: 20px;\n  border-top-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n}\n.cart-container[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%] {\n  float: right;\n}\n.cart-container[_ngcontent-%COMP%]   .cart-item-actionbtns[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.cart-container[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  color: #ad974f;\n  font-size: 18px;\n  font-weight: 800;\n  text-transform: capitalize;\n}\n.cart-container[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%] {\n  color: #7e6e6e !important;\n  display: inline-block;\n  width: calc(100% - 30px);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 0;\n}\n.cart-container[_ngcontent-%COMP%]   .drug-quantity-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-family: sans-serif;\n}\n.cart-container[_ngcontent-%COMP%]   .drug-quantity-container[_ngcontent-%COMP%]   .drug-quantity-title[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  color: #313e24;\n}\n.cart-container[_ngcontent-%COMP%]   .drug-quantity-container[_ngcontent-%COMP%]   .drug-quantityvalue-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.cart-container[_ngcontent-%COMP%]   .drug-quantity-container[_ngcontent-%COMP%]   .drug-quantityvalue-container[_ngcontent-%COMP%]   .drug-quantity-value[_ngcontent-%COMP%] {\n  background: #313e24;\n  color: #fff;\n  padding: 6px 12px 6px 12px;\n  border-radius: 20px;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%]   .qty-input[_ngcontent-%COMP%] {\n  text-align: center;\n  background: #e3dfce;\n  border-color: #313e24;\n}\n@media screen and (min-width: 993px) and (max-width: 1500px) {\n  .cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%]   .quantity-fields-container[_ngcontent-%COMP%] {\n    flex-basis: 32% !important;\n    max-width: 32% !important;\n  }\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  width: 35px;\n  cursor: pointer;\n  background: #313e24;\n  color: #ad974f;\n  border: solid 1px #313e24;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%]   .quantity-title[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 16px;\n  margin-bottom: 10px;\n  color: #313e24;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-readonly-container[_ngcontent-%COMP%]   .quantity-value[_ngcontent-%COMP%] {\n  background-color: #ad974f;\n  color: #fff;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-readonly-container[_ngcontent-%COMP%]   .quantity-text[_ngcontent-%COMP%] {\n  color: #313e24;\n  font-weight: bold;\n}\n.cart-container[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%], .cart-container[_ngcontent-%COMP%]   .btn-outline-modal[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.product-price[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.product-price[_ngcontent-%COMP%]   .current-currency-symbol[_ngcontent-%COMP%] {\n  top: -4.25px;\n  font-size: 11px;\n  position: relative;\n}\n.product-price[_ngcontent-%COMP%]   .price-value[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-family: cursive;\n}\n@media only screen and (max-width: 768px) {\n  .product-price[_ngcontent-%COMP%]   .price-value[_ngcontent-%COMP%] {\n    font-family: sans-serif;\n  }\n}\n.btn-outline[_ngcontent-%COMP%], .btn-outline-modal[_ngcontent-%COMP%] {\n  color: #313e24;\n  background-color: #e3dfce;\n  border-color: #313e24;\n  font-weight: bold;\n  letter-spacing: 0.05em;\n  border-radius: 20px;\n  padding: 3px 10px !important;\n  cursor: pointer;\n}\n.btn-outline[_ngcontent-%COMP%]:active, .btn-outline-modal[_ngcontent-%COMP%]:active, .btn-outline[_ngcontent-%COMP%]:hover, .btn-outline-modal[_ngcontent-%COMP%]:hover, .btn-outline[_ngcontent-%COMP%]:focus, .btn-outline-modal[_ngcontent-%COMP%]:focus {\n  color: #313e24;\n  background-color: #e3dfce;\n  border-color: #313e24;\n}\n.btn-outline[_ngcontent-%COMP%]:active, .btn-outline-modal[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n}\n.btn-outline-customsecondary[_ngcontent-%COMP%], .btn-outline-removebtn[_ngcontent-%COMP%] {\n  color: #ad974f;\n  background-color: #313e24;\n  border-color: #ad974f;\n  font-weight: bold;\n  letter-spacing: 0.05em;\n  border-radius: 20px;\n  padding: 3px 10px !important;\n  box-shadow: 2px 2px gainsboro;\n  cursor: pointer;\n}\n.btn-outline-customsecondary[_ngcontent-%COMP%]:active, .btn-outline-removebtn[_ngcontent-%COMP%]:active, .btn-outline-customsecondary[_ngcontent-%COMP%]:hover, .btn-outline-removebtn[_ngcontent-%COMP%]:hover, .btn-outline-customsecondary[_ngcontent-%COMP%]:focus, .btn-outline-removebtn[_ngcontent-%COMP%]:focus {\n  color: #ad974f;\n  background-color: #313e24;\n  border-color: #ad974f;\n}\n.btn-outline-customsecondary[_ngcontent-%COMP%]:active, .btn-outline-removebtn[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n}\n.btn-color-1[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #004E64;\n  border-color: #004E64;\n  font-weight: bold;\n  letter-spacing: 0.05em;\n  border-radius: 0;\n}\n.btn-color-1[_ngcontent-%COMP%]:hover, .btn-color-1[_ngcontent-%COMP%]:active, .btn-color-1[_ngcontent-%COMP%]:focus {\n  background: #003D4F !important;\n  color: #fff !important;\n  border-color: #003D4F !important;\n}\n.btn-outline-removebtn[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 15px;\n  font-weight: 600;\n  z-index: 1000;\n  white-space: pre-wrap;\n  border: none !important;\n}\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  margin: -0.5rem -0.2rem -1rem auto !important;\n}\n  .modal-content {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  background-color: #e3dfce;\n}\n@media only screen and (max-width: 768px) {\n  .modal-body[_ngcontent-%COMP%] {\n    max-height: 580px;\n    overflow: auto;\n  }\n}\nbutton[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed !important;\n}\n.total-text[_ngcontent-%COMP%] {\n  font-weight: 600 !important;\n}\n.out-of-stock[_ngcontent-%COMP%]   .out-of-stock-text[_ngcontent-%COMP%] {\n  margin: auto;\n  text-transform: uppercase;\n  color: #fff;\n  background: #a90b0b;\n  border: solid 1px gainsboro;\n  border-radius: 20px;\n  padding: 6.5px 10px;\n}\n.page-heading[_ngcontent-%COMP%] {\n  text-align: center !important;\n  font-family: cursive;\n  margin-bottom: 15px !important;\n  color: #313e24;\n}\n@media only screen and (max-width: 768px) {\n  .page-heading[_ngcontent-%COMP%] {\n    font-family: sans-serif;\n  }\n}\n.hidden[_ngcontent-%COMP%] {\n  visibility: hidden !important;\n}\n@media only screen and (max-width: 768px) {\n    .alert-dismissible .close {\n    z-index: 0;\n  }\n}\n  .alert-info {\n  background-color: #313e24 !important;\n  color: #ad974f !important;\n  border-radius: 20px;\n}\n.kupipakwa[_ngcontent-%COMP%] {\n  background-image: url('kupipakwa.png');\n}\n.pottali[_ngcontent-%COMP%] {\n  background-image: url('pottali.png');\n}\n.khalviya[_ngcontent-%COMP%] {\n  background-image: url('khalviya.png');\n}\n@media screen and (min-width: 769px) {\n  .display-inline[_ngcontent-%COMP%] {\n    display: inline !important;\n  }\n}\n\n.pyro[_ngcontent-%COMP%] {\n  position: relative !important;\n  z-index: 999;\n}\n.pyro[_ngcontent-%COMP%]    > .before[_ngcontent-%COMP%], .pyro[_ngcontent-%COMP%]    > .after[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  box-shadow: 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff;\n  animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;\n}\n.pyro[_ngcontent-%COMP%]    > .after[_ngcontent-%COMP%] {\n  animation-delay: 1.25s, 1.25s, 1.25s;\n  animation-duration: 1.25s, 1.25s, 6.25s;\n}\n@keyframes bang {\n  to {\n    box-shadow: 37px -223.6666666667px #ff9100, 156px 68.3333333333px blue, -145px -328.6666666667px #ff3c00, 47px -92.6666666667px #00bbff, -86px 75.3333333333px #00ff6a, -227px -339.6666666667px #9500ff, 248px -281.6666666667px #ff00dd, 87px -359.6666666667px #ffa600, -128px -14.6666666667px #00ffd9, 36px 38.3333333333px #0084ff, 149px -203.6666666667px #ff1500, 148px 0.3333333333px #ff0066, -226px -411.6666666667px #00aaff, -58px -409.6666666667px #e1ff00, 142px -160.6666666667px #d900ff, -179px -76.6666666667px #ff5500, 200px -92.6666666667px #ff8800, -157px 0.3333333333px #00ffa2, -129px -389.6666666667px #00ff8c, -215px 9.3333333333px #00ff95, -209px -190.6666666667px #ff7300, 77px 13.3333333333px #d5ff00, -171px -95.6666666667px #b3ff00, -234px -190.6666666667px #aa00ff, -243px -394.6666666667px #ff008c, -243px -64.6666666667px #e100ff, -204px -324.6666666667px #00d0ff, -51px -267.6666666667px #4d00ff, 32px -9.6666666667px #b300ff, 220px -351.6666666667px #e100ff, 179px -101.6666666667px #37ff00, -191px -154.6666666667px #00ff2b, -239px 6.3333333333px #48ff00, -225px 34.3333333333px #00f7ff, -66px 37.3333333333px #48ff00, 249px -371.6666666667px #ddff00, 110px 71.3333333333px #ffd900, -158px -165.6666666667px #00b7ff, 229px 15.3333333333px #5500ff, -63px -6.6666666667px #00ff3c, -53px -140.6666666667px #0022ff, -163px -370.6666666667px #15ff00, -18px -224.6666666667px #d9ff00, -79px -302.6666666667px #44ff00, -238px -18.6666666667px #ffea00, -67px -235.6666666667px #008cff, 232px -367.6666666667px #bbff00, 83px -29.6666666667px #ff1a00, 129px -392.6666666667px #ff7b00, -98px -286.6666666667px #0022ff, -214px -59.6666666667px #ff0037;\n  }\n}\n@keyframes gravity {\n  to {\n    transform: translateY(200px);\n    -moz-transform: translateY(200px);\n    -webkit-transform: translateY(200px);\n    -o-transform: translateY(200px);\n    -ms-transform: translateY(200px);\n    opacity: 0;\n  }\n}\n@keyframes position {\n  0%, 19.9% {\n    margin-top: 10%;\n    margin-left: 40%;\n  }\n  20%, 39.9% {\n    margin-top: 40%;\n    margin-left: 30%;\n  }\n  40%, 59.9% {\n    margin-top: 20%;\n    margin-left: 70%;\n  }\n  60%, 79.9% {\n    margin-top: 30%;\n    margin-left: 20%;\n  }\n  80%, 99.9% {\n    margin-top: 30%;\n    margin-left: 80%;\n  }\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@media screen and (max-width: 768px) {\n    .landing-page {\n    position: relative;\n    z-index: 0;\n  }\n}\n  .landing-page .categories-header {\n  text-align: center;\n  font-size: 35px;\n  margin: 50px 0px 0px 0px;\n  color: #313e24;\n  font-weight: bold;\n  text-decoration: underline;\n  -webkit-text-decoration-color: #ad974f;\n          text-decoration-color: #ad974f;\n}\n  .landing-page .new-arrival-slide {\n  animation: fadeIn 3s;\n}\n  .landing-page .new-arrival-slide .video-item {\n  width: 100%;\n  height: 95vh;\n  background: black;\n}\n@media screen and (max-width: 768px) {\n    .landing-page .new-arrival-slide .video-item {\n    height: 35vh;\n  }\n}\n@media screen and (max-width: 768px) {\n    .landing-page .new-arrival-slide .carousel-caption .btn {\n    font-size: 12px;\n  }\n}\n@media screen and (max-width: 768px) {\n    .landing-page .new-arrival-slide .carousel-caption {\n    left: -30px;\n  }\n}\n  .landing-page .carousel-img {\n  height: 90vh;\n  display: block;\n  width: 100%;\n}\n@media screen and (max-width: 768px) {\n    .landing-page .carousel-img {\n    height: 35vh;\n  }\n}\n  .landing-page .carousel-caption {\n  position: absolute;\n  width: 100%;\n  top: 405px !important;\n  color: #fff;\n  max-width: 335px;\n  margin-top: 6px;\n}\n@media screen and (max-width: 768px) {\n    .landing-page .carousel-caption {\n    top: 170px !important;\n    left: 0px;\n  }\n}\n@media screen and (min-width: 377px) and (max-width: 400px) {\n    .landing-page .carousel-caption {\n    top: 195px !important;\n    left: 0px;\n  }\n}\n@media screen and (min-width: 401px) and (max-width: 420px) {\n    .landing-page .carousel-caption {\n    top: 190px !important;\n    left: 0px;\n  }\n}\n@media screen and (max-width: 376px) {\n    .landing-page .carousel-caption {\n    top: 158px !important;\n    left: 0px;\n  }\n}\n@media screen and (max-width: 365px) {\n    .landing-page .carousel-caption {\n    top: 163px !important;\n    left: 0px;\n  }\n}\n  .landing-page .carousel-caption .header-text {\n  font-family: cursive;\n}\n  .landing-page .carousel-caption .header-text-details {\n  font-family: cursive;\n}\n  .landing-page .product-percategory-slides {\n  margin-top: 30px !important;\n  margin: auto;\n}\n@media screen and (min-width: 769px) {\n    .landing-page .product-percategory-slides {\n    width: 90%;\n  }\n}\n@media screen and (min-width: 1708px) and (max-width: 1950px) {\n    .landing-page .product-percategory-slides {\n    width: 80%;\n  }\n}\n  .landing-page .product-percategory-slides .carousel-indicators {\n  visibility: hidden;\n}\n  .landing-page .product-percategory-slides .carousel-item {\n  margin-right: inherit !important;\n  padding: 20px 30px 30px 30px;\n}\n@media screen and (max-width: 768px) {\n    .landing-page .product-percategory-slides .carousel-item {\n    padding: 5px;\n    height: 130px !important;\n  }\n}\n  .landing-page .product-percategory-slides .carousel-item .carousel-caption {\n  position: absolute;\n  width: 100%;\n  max-width: 240px;\n  top: 166px !important;\n  width: 71%;\n  height: 55px;\n  margin-left: 70px;\n}\n@media screen and (min-width: 1500px) {\n    .landing-page .product-percategory-slides .carousel-item .carousel-caption {\n    margin-left: 45px;\n  }\n}\n@media screen and (min-width: 993px) and (max-width: 1500px) {\n    .landing-page .product-percategory-slides .carousel-item .carousel-caption {\n    margin-left: 36px;\n  }\n}\n@media screen and (max-width: 768px) {\n    .landing-page .product-percategory-slides .carousel-item .carousel-caption {\n    top: 50px !important;\n    margin-left: 18px;\n  }\n}\n  .landing-page .product-percategory-slides .carousel-item .carousel-caption .carousel-text {\n  padding: 5px;\n  background: #313e24 !important;\n  color: #beb89c;\n  font-size: 0.8em;\n  text-transform: uppercase;\n  font-weight: bold;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n@media screen and (min-width: 769px) {\n    .landing-page .product-percategory-slides .carousel-item .carousel-caption .carousel-text {\n    font-size: 2.2em;\n    text-transform: uppercase;\n    font-weight: bold;\n  }\n}\n  .landing-page .product-percategory-slides .carousel-item img {\n  width: 100% !important;\n  margin: auto;\n}\n@media screen and (min-width: 1200px) {\n    .landing-page .product-percategory-slides .carousel-item img {\n    width: 330px !important;\n  }\n}\n@media screen and (max-width: 768px) {\n    .landing-page .product-percategory-slides .carousel-item img {\n    height: 120px !important;\n  }\n}\n  .carousel-control-next {\n  z-index: 999 !important;\n}\n.fade[_ngcontent-%COMP%] {\n  transition: opacity 0.7s ease-in, transform 0.7s ease-out;\n}\n.fadeOut[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(5vh);\n}\n@media screen and (max-width: 768px) {\n  .fadeOut[_ngcontent-%COMP%] {\n    transform: translateY(1vh);\n  }\n}\n.fadeIn[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL0U6XFxVSSBwcm9qZWN0XFxSYXNhaHJpZGF5XFxDbGllbnRfRWRpdGFibGVRdWVzdGlvbnNBbnN3ZXJzL3NyY1xcYXNzZXRzXFxzY3NzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvbGFuZGluZy1wYWdlL0U6XFxVSSBwcm9qZWN0XFxSYXNhaHJpZGF5XFxDbGllbnRfRWRpdGFibGVRdWVzdGlvbnNBbnN3ZXJzL3NyY1xcYXNzZXRzXFxzY3NzXFxjb21tb24uc2NzcyIsInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGFuZGluZy1wYWdlL0U6XFxVSSBwcm9qZWN0XFxSYXNhaHJpZGF5XFxDbGllbnRfRWRpdGFibGVRdWVzdGlvbnNBbnN3ZXJzL3NyY1xcYXBwXFxsYW5kaW5nLXBhZ2VcXGxhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3REEsaUJBQUE7QUNwREE7RUFDRSwrQkFBQTtFQUNBLDRCQUFBO0FDRkY7QURLQTtFQUNFLGdDQUFBO0VBQ0EsNkJBQUE7QUNGRjtBREtBO0VBQ0Usc0JBQUE7QUNGRjtBREtBO0VBQ0UsaUJBQUE7QUNGRjtBRElFO0VBSEY7SUFJSSxrQkFBQTtFQ0RGO0FBQ0Y7QURJQTtFQUNFLGNEUmtCO0FFT3BCO0FESUE7RUFDRSx1QkFBQTtBQ0RGO0FESUE7RUFDRSw0QkFBQTtBQ0RGO0FESUE7RUFDRSw2QkFBQTtBQ0RGO0FESUE7RUFDRSxrQkFBQTtBQ0RGO0FES0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0ZKO0FETUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNIRjtBREtFO0VBTEY7SUFNSSxVQUFBO0VDRkY7QUFDRjtBRElFO0VBQ0csbUJBQUE7QUNGTDtBREdJO0VBQ0Usb0NBQUE7RUFDQSxzQkFBQTtFQUNBLG1CRFZzQjtFQ1d0QixZQUFBO0FDRE47QURLRTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CRDNCMkI7RUM0QjNCLG1CQUFBO0FDSEo7QURLSTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDSE47QURLTTtFQUNFLHVCQUFBO0FDSFI7QURPSTtFQXBCRjtJQXFCSSxZQUFBO0VDSko7QUFDRjtBRE9FO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FDTEo7QURPSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0xOO0FEUUk7RUFDRSxZQUFBO0FDTk47QURVRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSw2QkQ3RHdCO0VDOER4Qiw0QkQ5RHdCO0VDK0R4QixnQ0QvRHdCO0VDZ0V4QiwrQkRoRXdCO0FFd0Q1QjtBRFlFO0VBQ0UsWUFBQTtBQ1ZKO0FEYUU7RUFDRyxnQkFBQTtFQUNBLG1CQUFBO0FDWEw7QURjRTtFQUNFLGNEdkY0QjtFQ3dGNUIsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUNaSjtBRGVFO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ2JKO0FEZ0JFO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtBQ2RKO0FEZ0JJO0VBQ0Usa0JBQUE7RUFDQSxjRDlHMEI7QUVnR2hDO0FEaUJJO0VBQ0ksbUJBQUE7QUNmUjtBRGlCUTtFQUNJLG1CRHJIb0I7RUNzSHBCLFdEaElZO0VDaUlaLDBCQUFBO0VBQ0EsbUJBQUE7QUNmWjtBRG9CRTtFQUNFLG1CQUFBO0FDbEJKO0FEb0JJO0VBQ0Usa0JBQUE7RUFDQSxtQkRoSXlCO0VDaUl6QixxQkRuSTBCO0FFaUhoQztBRHNCTztFQURIO0lBRU0sMEJBQUE7SUFDQSx5QkFBQTtFQ25CUjtBQUNGO0FEdUJJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkRqSndCO0VDa0p4QixjRGpKd0I7RUNrSnhCLHlCQUFBO0FDckJSO0FEd0JJO0VBQ0ksdUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjRDFKd0I7QUVvSWhDO0FEMkJJO0VBQ0UseUJEL0owQjtFQ2dLMUIsV0Q1Sm1CO0FFbUl6QjtBRDJCSTtFQUNFLGNEcEswQjtFQ3FLMUIsaUJBQUE7QUN6Qk47QUQ2QkU7RUFDRSxpQkFBQTtBQzNCSjtBRDBDQTtFQUNFLG1CQUFBO0FDdkNGO0FEeUNFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ3ZDSjtBRHlDRTtFQUNHLGVBQUE7RUFDQSxvQkFBQTtBQ3ZDTDtBRHlDSztFQUpIO0lBS0ksdUJBQUE7RUN0Q0o7QUFDRjtBRDBDQTtFQUNFLGNENU04QjtFQzZNOUIseUJEM002QjtFQzRNN0IscUJEOU04QjtFQytNOUIsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FDdkNGO0FEeUNFO0VBR0UsY0R4TjRCO0VDeU41Qix5QkR2TjJCO0VDd04zQixxQkQxTjRCO0FFaUxoQztBRDJDRTtFQUNFLDBCQUFBO0FDekNKO0FENkNBO0VBQ0UsY0RqTzhCO0VDa085Qix5QkRuTzhCO0VDb085QixxQkRuTzhCO0VDb085QixpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQzFDRjtBRDRDRTtFQUdFLGNEOU80QjtFQytPNUIseUJEaFA0QjtFQ2lQNUIscUJEaFA0QjtBRW9NaEM7QUQ4Q0U7RUFDRSwwQkFBQTtBQzVDSjtBRGlEQTtFQUNFLFdEdFNrQjtFQ3VTbEIseUJEOVFtQjtFQytRbkIscUJEL1FtQjtFQ2dSbkIsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDOUNGO0FEZ0RFO0VBR0UsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0FDaERKO0FEb0RBO0VBRUUsZUFBQTtBQ2xERjtBRDBEQTtFQUNFLHNCQUFBO0FDeERGO0FEMkRBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FDeERGO0FEMERFO0VBQ0UsNkNBQUE7QUN4REo7QUQ2REU7RUFDRSw0QkQ3UndCO0VDOFJ4Qiw2QkQ5UndCO0VDK1J4QiwrQkQvUndCO0VDZ1N4QixnQ0RoU3dCO0VDaVN4Qix5QkR6UzJCO0FFK08vQjtBRCtERTtFQURGO0lBRUksaUJBQUE7SUFDQSxjQUFBO0VDM0RGO0FBQ0Y7QUQ4REE7RUFDRSw4QkFBQTtBQzNERjtBRDhEQTtFQUNFLDJCQUFBO0FDM0RGO0FEK0RFO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0Q1VWtCO0VDNlVsQixtQkRyVXdCO0VDc1V4QiwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUM1RE47QURvRUE7RUFDRSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7RUFDQSxjRGxWOEI7QUVpUmhDO0FEbUVFO0VBTkY7SUFPSSx1QkFBQTtFQ2hFRjtBQUNGO0FEbUVBO0VBQ0UsNkJBQUE7QUNoRUY7QURzRU07RUFERjtJQUVJLFVBQUE7RUNsRU47QUFDRjtBRHFFRTtFQUNFLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkQ5VndCO0FFMlI1QjtBRHVFQTtFQUNFLHNDQUFBO0FDcEVGO0FEdUVBO0VBQ0Usb0NBQUE7QUNwRUY7QUR1RUE7RUFDRSxxQ0FBQTtBQ3BFRjtBRHdFRTtFQURGO0lBRU0sMEJBQUE7RUNwRUo7QUFDRjtBRHVFQSxpQ0FBQTtBQXFFQTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtBQ3hJRjtBRDJJQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHdnQkFsRWM7RUE2Q1osNEhBc0JpQjtBQ3BJckI7QUR1SUE7RUF6Q0ksb0NBMEN1QjtFQWxDdkIsdUNBbUMwQjtBQzVIOUI7QUR1RUk7RUF5REY7SUFDRSwrbkRBakZXO0VDdkJiO0FBQ0Y7QUQ2Q0k7RUErREY7SUFqQ0UsNEJBa0NtQjtJQWpDbkIsaUNBaUNtQjtJQWhDbkIsb0NBZ0NtQjtJQS9CbkIsK0JBK0JtQjtJQTlCbkIsZ0NBOEJtQjtJQUNuQixVQUFBO0VDN0RGO0FBQ0Y7QURMSTtFQXNFRjtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQzBCRjtFRHhCQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQzBCRjtFRHhCQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQzBCRjtFRHhCQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQzBCRjtFRHhCQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQzBCRjtBQUNGO0FDOWpCQTtFQUNJO0lBQ0ksVUFBQTtFRGdrQk47RUM3akJFO0lBQ0ksVUFBQTtFRCtqQk47QUFDRjtBQzFqQlE7RUFESjtJQUVPLGtCQUFBO0lBQ0EsVUFBQTtFRDZqQlQ7QUFDRjtBQzNqQlE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGNId0JvQjtFR3ZCcEIsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLHNDSHNCb0I7VUd0QnBCLDhCSHNCb0I7QUV1aUJoQztBQzNqQlE7RUFDSSxvQkFBQTtBRDZqQlo7QUM1akJZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBRDhqQmhCO0FDM2pCZ0I7RUFOSjtJQU9RLFlBQUE7RUQ4akJsQjtBQUNGO0FDempCb0I7RUFESjtJQUVRLGVBQUE7RUQ0akJ0QjtBQUNGO0FDMWpCZ0I7RUFOSjtJQU9RLFdBQUE7RUQ2akJsQjtBQUNGO0FDempCUTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBRDJqQlo7QUN6akJZO0VBTEo7SUFNTyxZQUFBO0VENGpCYjtBQUNGO0FDempCUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0hoRVE7RUdpRVIsZ0JBQUE7RUFDQSxlQUFBO0FEMmpCWjtBQ3pqQlk7RUFSSjtJQVNRLHFCQUFBO0lBQ0EsU0FBQTtFRDRqQmQ7QUFDRjtBQzFqQlk7RUFiSjtJQWNRLHFCQUFBO0lBQ0EsU0FBQTtFRDZqQmQ7QUFDRjtBQzNqQlk7RUFsQko7SUFtQlEscUJBQUE7SUFDQSxTQUFBO0VEOGpCZDtBQUNGO0FDNWpCWTtFQXZCSjtJQXdCUSxxQkFBQTtJQUNBLFNBQUE7RUQrakJkO0FBQ0Y7QUM3akJZO0VBNUJKO0lBNkJRLHFCQUFBO0lBQ0EsU0FBQTtFRGdrQmQ7QUFDRjtBQzlqQlk7RUFDSSxvQkFBQTtBRGdrQmhCO0FDN2pCWTtFQUNJLG9CQUFBO0FEK2pCaEI7QUMzakJRO0VBQ0ksMkJBQUE7RUFDQSxZQUFBO0FENmpCWjtBQzNqQlk7RUFKSjtJQUtRLFVBQUE7RUQ4akJkO0FBQ0Y7QUM1akJZO0VBUko7SUFTUSxVQUFBO0VEK2pCZDtBQUNGO0FDN2pCWTtFQUNJLGtCQUFBO0FEK2pCaEI7QUM1akJZO0VBQ0ksZ0NBQUE7RUFDQSw0QkFBQTtBRDhqQmhCO0FDNWpCZ0I7RUFKSjtJQUtRLFlBQUE7SUFDQSx3QkFBQTtFRCtqQmxCO0FBQ0Y7QUM3akJnQjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FEK2pCcEI7QUM3akJvQjtFQVRKO0lBVVEsaUJBQUE7RURna0J0QjtBQUNGO0FDOWpCb0I7RUFiSjtJQWNRLGlCQUFBO0VEaWtCdEI7QUFDRjtBQy9qQm9CO0VBakJKO0lBa0JRLG9CQUFBO0lBQ0EsaUJBQUE7RURra0J0QjtBQUNGO0FDaGtCb0I7RUFDSSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxjSHBHUztFR3FHVCxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QURra0J4QjtBQ2hrQndCO0VBWEo7SUFZUSxnQkFBQTtJQUNBLHlCQUFBO0lBQ0EsaUJBQUE7RURta0IxQjtBQUNGO0FDL2pCZ0I7RUFDSSxzQkFBQTtFQUNBLFlBQUE7QURpa0JwQjtBQy9qQm9CO0VBSko7SUFNVSx1QkFBQTtFRGlrQnhCO0FBQ0Y7QUMvakJvQjtFQVRKO0lBVVEsd0JBQUE7RURra0J0QjtBQUNGO0FDMWpCSTtFQUNJLHVCQUFBO0FENmpCUjtBQ3pqQkE7RUFDSSx5REFBQTtBRDRqQko7QUN6akJBO0VBQ0ksVUFBQTtFQUNBLDBCQUFBO0FENGpCSjtBQzNqQkk7RUFISjtJQUlRLDBCQUFBO0VEOGpCTjtBQUNGO0FDM2pCQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FEOGpCSiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkaGVhZGVyLXRoZW1lLWJhY2tncm91bmQ6I2ZiZmJmYjtcclxuJGhlYWRlci10aGVtZS1jb2xvcjojZDg0MzE1O1xyXG4kYnV0dG9uLXRoZW1lLWJhY2tncm91bmQ6I2YwN2MyOTtcclxuJGJ1dHRvbi10aGVtZS1jb2xvcjojZmZmO1xyXG4kc2VhcmNoQnRuLXRoZW1lLWJhY2tncm91bmQ6IzI4YTc0NTtcclxuJHNlYXJjaEJ0bi10aGVtZS1jb2xvcjojZmZmO1xyXG4kcXVlc3Rpb25zLXRoZW1lLWNvbG9yOmJsYWNrO1xyXG4kc2hvd0hpZGVUb2dnbGVJY29uLWNvbG9yOiNmMDdjMjk7XHJcbiRzaG93SGlkZS1idG4tYmFja2dyb3VuZDp3aGl0ZTtcclxuJHNob3dIaWRlLWJ0bi1jb2xvcjpncmV5O1xyXG4kYmFja2dyb3VuZC1pbWc6J2JhY2tncm91bmQtaW1nLnBuZyc7XHJcbiRpbWctcGF0aDonLi9hc3NldHMvaW1hZ2VzLyc7XHJcbiRnb2xkZW50aGVtZS1iYWNrZ3JvdW5kLWltZzogJ2dvbGRlbnRoZW1lLWJhY2tncm91bmQtaW1nLnBuZyc7IFxyXG4kYm9keS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4kcGFnZS1jb250YWluZXItYmFja2dyb3VuZDogd2hpdGU7XHJcbiRwcm9kdWN0LW5hbWUtY29sb3I6IzMzMztcclxuJHByb2R1Y3QtZGVzY3JpcHRpb24tY29sb3I6IzdlNmU2ZTtcclxuJGNvbnRhaW5lci1ib3JkZXItY29sb3I6ICNkY2RjZGM7XHJcbiRidG4tbGlnaHRkZWZhdWx0LWJvcmRlcjogI2RjZGNkYztcclxuJGRlbGV0ZS1pY29uLWNvbG9yOiAjY2U0NTQ1O1xyXG4kYnRuLWRlZmF1bHQ6I2Y4ZjlmYTsgXHJcbiRjb25maXJtLXN0YXR1cy1iYWNrZ3JvdW5kOiBhbGljZUJsdWU7XHJcbiRjaGVjay1pY29uLWNvbG9yOiBncmVlbjtcclxuJHBlbmRpbmdjbG9jay1pY29uLWNvbG9yOiAjNThiNmQ1O1xyXG4kcGVuZGluZy1zdGF0dXMtYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxuJHByb2R1Y3QtaG92ZXItYm9yZGVyOiBibGFjaztcclxuJGdvbGRlbnRoZW1lLXByb2R1Y3QtaG92ZXI6ICNlZWNkNWY7XHJcbiRidG4tb3V0bGluZS1jb2xvcjogIzRmYmZhODtcclxuJGJ0bi1vdXRsaW5lLWNvbG9yMTogIzAwNEU2NDtcclxuJGJ0bi1vdXRsaW5lLWNvbG9yMS1hY3RpdmU6ICMwMDNENEY7XHJcbiRjb250YWN0LXVzLWZvb3RlcjogI2VkZjBmNTtcclxuJGNvcHlyaWdodC1mb290ZXI6ICMzMTNlMjQ7XHJcbiRnb2xkZW50aGVtZS1jb3B5cmlnaHQtZm9vdGVyOiAjMzEzZTI0O1xyXG4kY29udGFjdC11cy1mb290ZXJjb2xvcjogIzIxMjUyOTtcclxuJGNvbnRhY3R1cy1saW5raWNvbi1jb2xvcjogIzAwNWM1MDtcclxuJGNvbnRhY3QtdXMtYm9yZGVyOiBnYWluc2Jvcm87XHJcbiRib3gtc2hhZG93LWNvbG9yOiBnYWluc2Jvcm87XHJcbiRidG4tb3V0bGluZS10ZXh0Y29sb3I6ICNmZmY7XHJcbiRidG4tb3V0bGluZXNlY29uZGFyeS1ib3JkZXJob3ZlcjogIzAwNjQwMDtcclxuJGJ0bi1vdXRsaW5lLWJhY2tncm91bmRob3ZlcjogIzNkOGQ3YztcclxuJGJ0bi1zZWFyY2gtYmFja2dyb3VuZDogIzM3N2Q2ZTsgXHJcbiRoZWFkZXItYm94LXNoYWRvd2NvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4kYnRuLW91dGxpbmUtcmVtb3ZlYnRuOiBpbmRpYW5yZWQ7XHJcbiRwaG9uZW51bWJlci1saW5rLWNvbG9yOiBncmVlbjtcclxuJGNhcnQtc3RpY2t5LWJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbiRvdXRPZlN0b2NrLWJhY2tncm91bmQtY29sb3I6ICNhOTBiMGI7XHJcbiRjYXJ0LWljb24tY29sb3I6ICNhOTBiMGI7XHJcbiRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDogIzMxM2UyNDtcclxuJGdvbGRlbnRoZW1lLWhlYWRlcnRleHQtY29sb3I6ICAjYWQ5NzRmO1xyXG4kZ29sZGVudGhlbWUtcGFuZWwtYmFja2dyb3VuZDogI2UzZGZjZTtcclxuJGdvbGRlbnRoZW1lLXByb2R1Y3RkZXNjcmlwdGlvbi1jb2xvcjogIzIzMWYyMDtcclxuJGdvbGRlbnRoZW1lLXByb2R1Y3RkZXNjcmlwdGlvbi1jb2xvcjojMzMzO1xyXG4kZ29sZGVudGhlbWUtYmFkZ2UtdGV4dDogI2ZmZjtcclxuJGdvbGRlbnRoZW1lLWZvb3Rlci1jb2xvcjogI2I1YjE5NjtcclxuJGdvbGRlbnRoZW1lLWNvbmZpcm1tb2RhbC1ib3JkZXJjb2xvcjogI2M0YmFiYTtcclxuJGdvbGRlbnRoZW1lLWNhcm91c2VsdGV4dC1jb2xvcjogI2JlYjg5YztcclxuLyogY29uc3QgdmFsdWVzICovXHJcbiRnb2xkZW50aGVtZS1ib3JkZXItcmFkaXVzOiAyMHB4OyIsIkBpbXBvcnQgXCIuL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4kaW1nLXBhdGg6ICd+c3JjL2Fzc2V0cy9pbWFnZXMvJztcclxuXHJcbiVxdWFudGl0eWJ0bi1sZWZ0LWJvcmRlcnJhZGl1cyB7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4lcXVhbnRpdHlidG4tcmlnaHQtYm9yZGVycmFkaXVzIHtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcclxufVxyXG5cclxuLmJ0bi1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZWRpdC1pY29uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmRlbGV0ZS1pY29uIHtcclxuICBjb2xvcjogJGRlbGV0ZS1pY29uLWNvbG9yO1xyXG59XHJcblxyXG4ubm8tcGFkZGluZyB7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uby1wYWRkaW5nLWxlZnQge1xyXG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uby1wYWRkaW5nLXJpZ2h0IHtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmVtcHR5LWRhdGEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRlZmF1bHQtaW1nLWNvbnRhaW5lciB7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FydC1jb250YWluZXIge1xyXG4gIHdpZHRoOiA2NCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1vcmRlcmVkLWRhdGVjb250YWluZXIge1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAub3JkZXJlZC1kYXRlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlcnRleHQtY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6ICRnb2xkZW50aGVtZS1iYWRnZS10ZXh0ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRnb2xkZW50aGVtZS1ib3JkZXItcmFkaXVzO1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9kdWN0LWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMnB4ICRib3gtc2hhZG93LWNvbG9yO1xyXG4gICAgYmFja2dyb3VuZDogJGdvbGRlbnRoZW1lLXBhbmVsLWJhY2tncm91bmQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cclxuICAgIC51c2VyLWRldGFpbHMge1xyXG4gICAgICBjb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlcjogc29saWQgMXB4ICRnb2xkZW50aGVtZS1oZWFkZXJ0ZXh0LWNvbG9yO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAgICAgLnBob25lLW51bWJlciB7XHJcbiAgICAgICAgY29sb3I6ICRwaG9uZW51bWJlci1saW5rLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7IFxyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1pbWctY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIC5wcm9kdWN0LWltYWdlcyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9kdWN0LWltZyB7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wcm9kdWN0LWltZyB7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAkY29udGFpbmVyLWJvcmRlci1jb2xvcjtcclxuICAgIG1hcmdpbjogYXV0byBhdXRvIDE1cHggYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRnb2xkZW50aGVtZS1ib3JkZXItcmFkaXVzO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJGdvbGRlbnRoZW1lLWJvcmRlci1yYWRpdXM7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGdvbGRlbnRoZW1lLWJvcmRlci1yYWRpdXM7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkZ29sZGVudGhlbWUtYm9yZGVyLXJhZGl1cztcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLmFkZC10by1jYXJ0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcblxyXG4gIC5jYXJ0LWl0ZW0tYWN0aW9uYnRucyB7XHJcbiAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLnByb2R1Y3QtbmFtZSB7XHJcbiAgICBjb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlcnRleHQtY29sb3I7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1kZXNjcmlwdGlvbiB7XHJcbiAgICBjb2xvcjogJHByb2R1Y3QtZGVzY3JpcHRpb24tY29sb3IgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgLmRydWctcXVhbnRpdHktY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuXHJcbiAgICAuZHJ1Zy1xdWFudGl0eS10aXRsZSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICAgIH1cclxuICBcclxuICAgIC5kcnVnLXF1YW50aXR5dmFsdWUtY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5kcnVnLXF1YW50aXR5LXZhbHVlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kO1xyXG4gICAgICAgICAgICBjb2xvcjogJGJ0bi1vdXRsaW5lLXRleHRjb2xvcjtcclxuICAgICAgICAgICAgcGFkZGluZzogNnB4IDEycHggNnB4IDEycHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucXVhbnRpdHktY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgXHJcbiAgICAucXR5LWlucHV0IHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkZ29sZGVudGhlbWUtcGFuZWwtYmFja2dyb3VuZDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnF1YW50aXR5LWZpZWxkcy1jb250YWluZXIge1xyXG4gICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTNweCkgYW5kIChtYXgtd2lkdGg6IDE1MDBweCkge1xyXG4gICAgICAgICAgZmxleC1iYXNpczogMzIlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDMyJSAhaW1wb3J0YW50O1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG5cclxuICBcclxuICAgIC5pbnB1dC1ncm91cC10ZXh0IHtcclxuICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kO1xyXG4gICAgICAgIGNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVydGV4dC1jb2xvcjtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucXVhbnRpdHktdGl0bGUge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIC5xdWFudGl0eS1yZWFkb25seS1jb250YWluZXIge1xyXG4gICAgLnF1YW50aXR5LXZhbHVlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlcnRleHQtY29sb3I7XHJcbiAgICAgIGNvbG9yOiAkZ29sZGVudGhlbWUtYmFkZ2UtdGV4dDtcclxuICAgIH1cclxuICAgIC5xdWFudGl0eS10ZXh0IHtcclxuICAgICAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYnRuLW91dGxpbmUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtcHJlcGVuZCB7XHJcbiAgLmlucHV0LWdyb3VwLXRleHQge1xyXG4gICAgICBAZXh0ZW5kICVxdWFudGl0eWJ0bi1sZWZ0LWJvcmRlcnJhZGl1cztcclxuICB9XHJcbn1cclxuLmlucHV0LWdyb3VwLWFwcGVuZCB7XHJcbiAgICAuaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgICAgICAgQGV4dGVuZCAlcXVhbnRpdHlidG4tcmlnaHQtYm9yZGVycmFkaXVzO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucHJvZHVjdC1wcmljZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgLmN1cnJlbnQtY3VycmVuY3ktc3ltYm9sIHtcclxuICAgIHRvcDogLTQuMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLnByaWNlLXZhbHVlIHtcclxuICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcblxyXG4gICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLW91dGxpbmUge1xyXG4gIGNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdvbGRlbnRoZW1lLXBhbmVsLWJhY2tncm91bmQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDNweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAmOmFjdGl2ZSxcclxuICAmOmhvdmVyLFxyXG4gICY6Zm9jdXMge1xyXG4gICAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRnb2xkZW50aGVtZS1wYW5lbC1iYWNrZ3JvdW5kO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgfVxyXG4gICY6YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLWN1c3RvbXNlY29uZGFyeSB7XHJcbiAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXJ0ZXh0LWNvbG9yO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICBib3JkZXItY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXJ0ZXh0LWNvbG9yO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiAzcHggMTBweCAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggJGJveC1zaGFkb3ctY29sb3I7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIFxyXG4gICY6YWN0aXZlLFxyXG4gICY6aG92ZXIsXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBjb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlcnRleHQtY29sb3I7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgICBib3JkZXItY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXJ0ZXh0LWNvbG9yO1xyXG4gIH1cclxuICAmOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcclxuICB9XHJcblxyXG59XHJcblxyXG4uYnRuLWNvbG9yLTEge1xyXG4gIGNvbG9yOiAkYnV0dG9uLXRoZW1lLWNvbG9yO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRidG4tb3V0bGluZS1jb2xvcjE7XHJcbiAgYm9yZGVyLWNvbG9yOiAkYnRuLW91dGxpbmUtY29sb3IxO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuXHJcbiAgJjpob3ZlcixcclxuICAmOmFjdGl2ZSxcclxuICAmOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6ICRidG4tb3V0bGluZS1jb2xvcjEtYWN0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogJGJ1dHRvbi10aGVtZS1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkYnRuLW91dGxpbmUtY29sb3IxLWFjdGl2ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXJlbW92ZWJ0biB7XHJcbiAgQGV4dGVuZCAuYnRuLW91dGxpbmUtY3VzdG9tc2Vjb25kYXJ5O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgJjphY3RpdmUsXHJcbiAgJjpob3ZlcixcclxuICAmOmZvY3VzIHtcclxuICB9XHJcbn1cclxuXHJcbi5mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG5cclxuICAuY2xvc2Uge1xyXG4gICAgbWFyZ2luOiAtMC41cmVtIC0wLjJyZW0gLTFyZW0gYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICAubW9kYWwtY29udGVudCB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkZ29sZGVudGhlbWUtYm9yZGVyLXJhZGl1cztcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkZ29sZGVudGhlbWUtYm9yZGVyLXJhZGl1cztcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRnb2xkZW50aGVtZS1ib3JkZXItcmFkaXVzO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRnb2xkZW50aGVtZS1ib3JkZXItcmFkaXVzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdvbGRlbnRoZW1lLXBhbmVsLWJhY2tncm91bmQ7XHJcbiB9XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXgtaGVpZ2h0OiA1ODBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuYnV0dG9uW2Rpc2FibGVkXSB7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udG90YWwtdGV4dCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ub3V0LW9mLXN0b2NrIHtcclxuICAub3V0LW9mLXN0b2NrLXRleHQge1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGNvbG9yOiAkYnRuLW91dGxpbmUtdGV4dGNvbG9yO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkb3V0T2ZTdG9jay1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICBib3JkZXI6IHNvbGlkIDFweCAkYm94LXNoYWRvdy1jb2xvcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgcGFkZGluZzogNi41cHggMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1tb2RhbCB7XHJcbiAgQGV4dGVuZCAuYnRuLW91dGxpbmU7XHJcbn1cclxuXHJcbi5wYWdlLWhlYWRpbmcge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcclxuICBjb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICB9XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAge1xyXG4gIC5hbGVydC1kaXNtaXNzaWJsZSB7XHJcbiAgICAuY2xvc2Uge1xyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuYWxlcnQtaW5mbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVydGV4dC1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGdvbGRlbnRoZW1lLWJvcmRlci1yYWRpdXM7XHJcbiB9XHJcbn1cclxuXHJcbi5rdXBpcGFrd2Ege1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkaW1nLXBhdGggKyAna3VwaXBha3dhLnBuZycpO1xyXG59XHJcblxyXG4ucG90dGFsaSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCRpbWctcGF0aCArICdwb3R0YWxpLnBuZycpO1xyXG59XHJcblxyXG4ua2hhbHZpeWEge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkaW1nLXBhdGggKyAna2hhbHZpeWEucG5nJyk7XHJcbn1cclxuXHJcbi5kaXNwbGF5LWlubGluZSB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7IFxyXG4gIH1cclxufVxyXG5cclxuLyotLS0tZmlyZWNyYWNrZXJzIGFuaW1hdGlvbiAtLS0qL1xyXG4kcGFydGljbGVzOiA1MDtcclxuJHdpZHRoOiA1MDA7XHJcbiRoZWlnaHQ6IDUwMDtcclxuXHJcbi8vIENyZWF0ZSB0aGUgZXhwbG9zaW9uLi4uXHJcbiRib3gtc2hhZG93OiAoKTtcclxuJGJveC1zaGFkb3cyOiAoKTtcclxuQGZvciAkaSBmcm9tIDAgdGhyb3VnaCAkcGFydGljbGVzIHtcclxuICAkYm94LXNoYWRvdzogJGJveC1zaGFkb3csXHJcbiAgICAgICAgICAgICAgIHJhbmRvbSgkd2lkdGgpLSR3aWR0aCAvIDIgKyBweFxyXG4gICAgICAgICAgICAgICByYW5kb20oJGhlaWdodCktJGhlaWdodCAvIDEuMiArIHB4XHJcbiAgICAgICAgICAgICAgIGhzbChyYW5kb20oMzYwKSwgMTAwLCA1MCk7XHJcbiAgJGJveC1zaGFkb3cyOiAkYm94LXNoYWRvdzIsIDAgMCAjZmZmXHJcbn1cclxuQG1peGluIGtleWZyYW1lcyAoJGFuaW1hdGlvbk5hbWUpIHtcclxuICAgIEAtd2Via2l0LWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgQC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxuXHJcbiAgICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxuXHJcbiAgICBALW1zLWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgQGtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBhbmltYXRpb24tZGVsYXkgKCRzZXR0aW5ncykge1xyXG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6ICRzZXR0aW5ncztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAkc2V0dGluZ3M7XHJcbiAgICAtby1hbmltYXRpb24tZGVsYXk6ICRzZXR0aW5ncztcclxuICAgIC1tcy1hbmltYXRpb24tZGVsYXk6ICRzZXR0aW5ncztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogJHNldHRpbmdzO1xyXG59XHJcblxyXG5AbWl4aW4gYW5pbWF0aW9uLWR1cmF0aW9uICgkc2V0dGluZ3MpIHtcclxuICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAkc2V0dGluZ3M7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogJHNldHRpbmdzO1xyXG4gICAgLW8tYW5pbWF0aW9uLWR1cmF0aW9uOiAkc2V0dGluZ3M7XHJcbiAgICAtbXMtYW5pbWF0aW9uLWR1cmF0aW9uOiAkc2V0dGluZ3M7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246ICRzZXR0aW5ncztcclxufVxyXG5cclxuQG1peGluIGFuaW1hdGlvbiAoJHNldHRpbmdzKSB7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogJHNldHRpbmdzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246ICRzZXR0aW5ncztcclxuICAgIC1vLWFuaW1hdGlvbjogJHNldHRpbmdzO1xyXG4gICAgLW1zLWFuaW1hdGlvbjogJHNldHRpbmdzO1xyXG4gICAgYW5pbWF0aW9uOiAkc2V0dGluZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2Zvcm0gKCRzZXR0aW5ncykge1xyXG4gICAgdHJhbnNmb3JtOiAkc2V0dGluZ3M7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogJHNldHRpbmdzO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICRzZXR0aW5ncztcclxuICAgIC1vLXRyYW5zZm9ybTogJHNldHRpbmdzO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogJHNldHRpbmdzO1xyXG59XHJcblxyXG4ucHlybyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4ucHlybyA+IC5iZWZvcmUsIC5weXJvID4gLmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDVweDtcclxuICBoZWlnaHQ6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm94LXNoYWRvdzogJGJveC1zaGFkb3cyO1xyXG4gIEBpbmNsdWRlIGFuaW1hdGlvbigoMXMgYmFuZyBlYXNlLW91dCBpbmZpbml0ZSBiYWNrd2FyZHMsIDFzIGdyYXZpdHkgZWFzZS1pbiBpbmZpbml0ZSBiYWNrd2FyZHMsIDVzIHBvc2l0aW9uIGxpbmVhciBpbmZpbml0ZSBiYWNrd2FyZHMpKTtcclxufVxyXG4gICAgXHJcbi5weXJvID4gLmFmdGVyIHtcclxuICBAaW5jbHVkZSBhbmltYXRpb24tZGVsYXkoKDEuMjVzLCAxLjI1cywgMS4yNXMpKTtcclxuICBAaW5jbHVkZSBhbmltYXRpb24tZHVyYXRpb24oKDEuMjVzLCAxLjI1cywgNi4yNXMpKTtcclxufVxyXG4gICAgICAgIFxyXG5AaW5jbHVkZSBrZXlmcmFtZXMoYmFuZykge1xyXG4gIHRvIHtcclxuICAgIGJveC1zaGFkb3c6JGJveC1zaGFkb3c7XHJcbiAgfVxyXG59XHJcbiAgICBcclxuQGluY2x1ZGUga2V5ZnJhbWVzKGdyYXZpdHkpICB7XHJcbiAgdG8ge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZVkoMjAwcHgpKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcbiAgICBcclxuQGluY2x1ZGUga2V5ZnJhbWVzKHBvc2l0aW9uKSB7XHJcbiAgMCUsIDE5LjklIHtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbiAgfVxyXG4gIDIwJSwgMzkuOSUge1xyXG4gICAgbWFyZ2luLXRvcDogNDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICB9XHJcbiAgNDAlLCA1OS45JSB7ICBcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA3MCVcclxuICB9XHJcbiAgNjAlLCA3OS45JSB7ICBcclxuICAgIG1hcmdpbi10b3A6IDMwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgfVxyXG4gIDgwJSwgOTkuOSUgeyAgXHJcbiAgICBtYXJnaW4tdG9wOiAzMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogODAlO1xyXG4gIH1cclxufVxyXG5cclxuIiwiLyogY29uc3QgdmFsdWVzICovXG4uaW5wdXQtZ3JvdXAtcHJlcGVuZCAuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG59XG5cbi5pbnB1dC1ncm91cC1hcHBlbmQgLmlucHV0LWdyb3VwLXRleHQge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG59XG5cbi5idG4tZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5lZGl0LWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmVkaXQtaWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICB9XG59XG5cbi5kZWxldGUtaWNvbiB7XG4gIGNvbG9yOiAjY2U0NTQ1O1xufVxuXG4ubm8tcGFkZGluZyB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubm8tcGFkZGluZy1sZWZ0IHtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLm5vLXBhZGRpbmctcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLmVtcHR5LWRhdGEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kZWZhdWx0LWltZy1jb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uY2FydC1jb250YWluZXIge1xuICB3aWR0aDogNjQlO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJ0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxufVxuLmNhcnQtY29udGFpbmVyIC5wcm9kdWN0LW9yZGVyZWQtZGF0ZWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uY2FydC1jb250YWluZXIgLnByb2R1Y3Qtb3JkZXJlZC1kYXRlY29udGFpbmVyIC5vcmRlcmVkLWRhdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWQ5NzRmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAucHJvZHVjdC1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IDJweCBnYWluc2Jvcm87XG4gIGJhY2tncm91bmQ6ICNlM2RmY2U7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4uY2FydC1jb250YWluZXIgLnByb2R1Y3QtaXRlbSAudXNlci1kZXRhaWxzIHtcbiAgY29sb3I6ICMzMTNlMjQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2FkOTc0ZjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAucHJvZHVjdC1pdGVtIC51c2VyLWRldGFpbHMgLnBob25lLW51bWJlciB7XG4gIGNvbG9yOiBncmVlbiAhaW1wb3J0YW50O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY2FydC1jb250YWluZXIgLnByb2R1Y3QtaXRlbSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG4uY2FydC1jb250YWluZXIgLnByb2R1Y3QtaW1nLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY2FydC1jb250YWluZXIgLnByb2R1Y3QtaW1nLWNvbnRhaW5lciAucHJvZHVjdC1pbWFnZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi5jYXJ0LWNvbnRhaW5lciAucHJvZHVjdC1pbWctY29udGFpbmVyIC5wcm9kdWN0LWltZyB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5jYXJ0LWNvbnRhaW5lciAucHJvZHVjdC1pbWcge1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2RjZGNkYztcbiAgbWFyZ2luOiBhdXRvIGF1dG8gMTVweCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xufVxuLmNhcnQtY29udGFpbmVyIC5hZGQtdG8tY2FydCB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAuY2FydC1pdGVtLWFjdGlvbmJ0bnMge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmNhcnQtY29udGFpbmVyIC5wcm9kdWN0LW5hbWUge1xuICBjb2xvcjogI2FkOTc0ZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5jYXJ0LWNvbnRhaW5lciAucHJvZHVjdC1kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiAjN2U2ZTZlICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAuZHJ1Zy1xdWFudGl0eS1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cbi5jYXJ0LWNvbnRhaW5lciAuZHJ1Zy1xdWFudGl0eS1jb250YWluZXIgLmRydWctcXVhbnRpdHktdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGNvbG9yOiAjMzEzZTI0O1xufVxuLmNhcnQtY29udGFpbmVyIC5kcnVnLXF1YW50aXR5LWNvbnRhaW5lciAuZHJ1Zy1xdWFudGl0eXZhbHVlLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uY2FydC1jb250YWluZXIgLmRydWctcXVhbnRpdHktY29udGFpbmVyIC5kcnVnLXF1YW50aXR5dmFsdWUtY29udGFpbmVyIC5kcnVnLXF1YW50aXR5LXZhbHVlIHtcbiAgYmFja2dyb3VuZDogIzMxM2UyNDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDZweCAxMnB4IDZweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLmNhcnQtY29udGFpbmVyIC5xdWFudGl0eS1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmNhcnQtY29udGFpbmVyIC5xdWFudGl0eS1jb250YWluZXIgLnF0eS1pbnB1dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2UzZGZjZTtcbiAgYm9yZGVyLWNvbG9yOiAjMzEzZTI0O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkzcHgpIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpIHtcbiAgLmNhcnQtY29udGFpbmVyIC5xdWFudGl0eS1jb250YWluZXIgLnF1YW50aXR5LWZpZWxkcy1jb250YWluZXIge1xuICAgIGZsZXgtYmFzaXM6IDMyJSAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMzIlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5jYXJ0LWNvbnRhaW5lciAucXVhbnRpdHktY29udGFpbmVyIC5pbnB1dC1ncm91cC10ZXh0IHtcbiAgd2lkdGg6IDM1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogIzMxM2UyNDtcbiAgY29sb3I6ICNhZDk3NGY7XG4gIGJvcmRlcjogc29saWQgMXB4ICMzMTNlMjQ7XG59XG4uY2FydC1jb250YWluZXIgLnF1YW50aXR5LWNvbnRhaW5lciAucXVhbnRpdHktdGl0bGUge1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogIzMxM2UyNDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAucXVhbnRpdHktcmVhZG9ubHktY29udGFpbmVyIC5xdWFudGl0eS12YWx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZDk3NGY7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNhcnQtY29udGFpbmVyIC5xdWFudGl0eS1yZWFkb25seS1jb250YWluZXIgLnF1YW50aXR5LXRleHQge1xuICBjb2xvcjogIzMxM2UyNDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY2FydC1jb250YWluZXIgLmJ0bi1vdXRsaW5lLCAuY2FydC1jb250YWluZXIgLmJ0bi1vdXRsaW5lLW1vZGFsIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5wcm9kdWN0LXByaWNlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5wcm9kdWN0LXByaWNlIC5jdXJyZW50LWN1cnJlbmN5LXN5bWJvbCB7XG4gIHRvcDogLTQuMjVweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvZHVjdC1wcmljZSAucHJpY2UtdmFsdWUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucHJvZHVjdC1wcmljZSAucHJpY2UtdmFsdWUge1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICB9XG59XG5cbi5idG4tb3V0bGluZSwgLmJ0bi1vdXRsaW5lLW1vZGFsIHtcbiAgY29sb3I6ICMzMTNlMjQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2RmY2U7XG4gIGJvcmRlci1jb2xvcjogIzMxM2UyNDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDNweCAxMHB4ICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idG4tb3V0bGluZTphY3RpdmUsIC5idG4tb3V0bGluZS1tb2RhbDphY3RpdmUsIC5idG4tb3V0bGluZTpob3ZlciwgLmJ0bi1vdXRsaW5lLW1vZGFsOmhvdmVyLCAuYnRuLW91dGxpbmU6Zm9jdXMsIC5idG4tb3V0bGluZS1tb2RhbDpmb2N1cyB7XG4gIGNvbG9yOiAjMzEzZTI0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkZmNlO1xuICBib3JkZXItY29sb3I6ICMzMTNlMjQ7XG59XG4uYnRuLW91dGxpbmU6YWN0aXZlLCAuYnRuLW91dGxpbmUtbW9kYWw6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG59XG5cbi5idG4tb3V0bGluZS1jdXN0b21zZWNvbmRhcnksIC5idG4tb3V0bGluZS1yZW1vdmVidG4ge1xuICBjb2xvcjogI2FkOTc0ZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxM2UyNDtcbiAgYm9yZGVyLWNvbG9yOiAjYWQ5NzRmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogM3B4IDEwcHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCBnYWluc2Jvcm87XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idG4tb3V0bGluZS1jdXN0b21zZWNvbmRhcnk6YWN0aXZlLCAuYnRuLW91dGxpbmUtcmVtb3ZlYnRuOmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLWN1c3RvbXNlY29uZGFyeTpob3ZlciwgLmJ0bi1vdXRsaW5lLXJlbW92ZWJ0bjpob3ZlciwgLmJ0bi1vdXRsaW5lLWN1c3RvbXNlY29uZGFyeTpmb2N1cywgLmJ0bi1vdXRsaW5lLXJlbW92ZWJ0bjpmb2N1cyB7XG4gIGNvbG9yOiAjYWQ5NzRmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzZTI0O1xuICBib3JkZXItY29sb3I6ICNhZDk3NGY7XG59XG4uYnRuLW91dGxpbmUtY3VzdG9tc2Vjb25kYXJ5OmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLXJlbW92ZWJ0bjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcbn1cblxuLmJ0bi1jb2xvci0xIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDRFNjQ7XG4gIGJvcmRlci1jb2xvcjogIzAwNEU2NDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uYnRuLWNvbG9yLTE6aG92ZXIsIC5idG4tY29sb3ItMTphY3RpdmUsIC5idG4tY29sb3ItMTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICMwMDNENEYgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjMDAzRDRGICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tb3V0bGluZS1yZW1vdmVidG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG4ubW9kYWwtaGVhZGVyIC5jbG9zZSB7XG4gIG1hcmdpbjogLTAuNXJlbSAtMC4ycmVtIC0xcmVtIGF1dG8gIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tb2RhbC1jb250ZW50IHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkZmNlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tb2RhbC1ib2R5IHtcbiAgICBtYXgtaGVpZ2h0OiA1ODBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxufVxuXG5idXR0b25bZGlzYWJsZWRdIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O1xufVxuXG4udG90YWwtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbn1cblxuLm91dC1vZi1zdG9jayAub3V0LW9mLXN0b2NrLXRleHQge1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjYTkwYjBiO1xuICBib3JkZXI6IHNvbGlkIDFweCBnYWluc2Jvcm87XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDYuNXB4IDEwcHg7XG59XG5cbi5wYWdlLWhlYWRpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICMzMTNlMjQ7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wYWdlLWhlYWRpbmcge1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICB9XG59XG5cbi5oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICA6Om5nLWRlZXAgLmFsZXJ0LWRpc21pc3NpYmxlIC5jbG9zZSB7XG4gICAgei1pbmRleDogMDtcbiAgfVxufVxuOjpuZy1kZWVwIC5hbGVydC1pbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxM2UyNCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2FkOTc0ZiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4ua3VwaXBha3dhIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwifnNyYy9hc3NldHMvaW1hZ2VzL2t1cGlwYWt3YS5wbmdcIik7XG59XG5cbi5wb3R0YWxpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwifnNyYy9hc3NldHMvaW1hZ2VzL3BvdHRhbGkucG5nXCIpO1xufVxuXG4ua2hhbHZpeWEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJ+c3JjL2Fzc2V0cy9pbWFnZXMva2hhbHZpeWEucG5nXCIpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICAuZGlzcGxheS1pbmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8qLS0tLWZpcmVjcmFja2VycyBhbmltYXRpb24gLS0tKi9cbi5weXJvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLnB5cm8gPiAuYmVmb3JlLCAucHlybyA+IC5hZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZjtcbiAgLW1vei1hbmltYXRpb246IDFzIGJhbmcgZWFzZS1vdXQgaW5maW5pdGUgYmFja3dhcmRzLCAxcyBncmF2aXR5IGVhc2UtaW4gaW5maW5pdGUgYmFja3dhcmRzLCA1cyBwb3NpdGlvbiBsaW5lYXIgaW5maW5pdGUgYmFja3dhcmRzO1xuICAtd2Via2l0LWFuaW1hdGlvbjogMXMgYmFuZyBlYXNlLW91dCBpbmZpbml0ZSBiYWNrd2FyZHMsIDFzIGdyYXZpdHkgZWFzZS1pbiBpbmZpbml0ZSBiYWNrd2FyZHMsIDVzIHBvc2l0aW9uIGxpbmVhciBpbmZpbml0ZSBiYWNrd2FyZHM7XG4gIC1vLWFuaW1hdGlvbjogMXMgYmFuZyBlYXNlLW91dCBpbmZpbml0ZSBiYWNrd2FyZHMsIDFzIGdyYXZpdHkgZWFzZS1pbiBpbmZpbml0ZSBiYWNrd2FyZHMsIDVzIHBvc2l0aW9uIGxpbmVhciBpbmZpbml0ZSBiYWNrd2FyZHM7XG4gIC1tcy1hbmltYXRpb246IDFzIGJhbmcgZWFzZS1vdXQgaW5maW5pdGUgYmFja3dhcmRzLCAxcyBncmF2aXR5IGVhc2UtaW4gaW5maW5pdGUgYmFja3dhcmRzLCA1cyBwb3NpdGlvbiBsaW5lYXIgaW5maW5pdGUgYmFja3dhcmRzO1xuICBhbmltYXRpb246IDFzIGJhbmcgZWFzZS1vdXQgaW5maW5pdGUgYmFja3dhcmRzLCAxcyBncmF2aXR5IGVhc2UtaW4gaW5maW5pdGUgYmFja3dhcmRzLCA1cyBwb3NpdGlvbiBsaW5lYXIgaW5maW5pdGUgYmFja3dhcmRzO1xufVxuXG4ucHlybyA+IC5hZnRlciB7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAxLjI1cywgMS4yNXMsIDEuMjVzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMS4yNXMsIDEuMjVzLCAxLjI1cztcbiAgLW8tYW5pbWF0aW9uLWRlbGF5OiAxLjI1cywgMS4yNXMsIDEuMjVzO1xuICAtbXMtYW5pbWF0aW9uLWRlbGF5OiAxLjI1cywgMS4yNXMsIDEuMjVzO1xuICBhbmltYXRpb24tZGVsYXk6IDEuMjVzLCAxLjI1cywgMS4yNXM7XG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjI1cywgMS4yNXMsIDYuMjVzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS4yNXMsIDEuMjVzLCA2LjI1cztcbiAgLW8tYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjI1cywgMS4yNXMsIDYuMjVzO1xuICAtbXMtYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjI1cywgMS4yNXMsIDYuMjVzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDEuMjVzLCAxLjI1cywgNi4yNXM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBiYW5nIHtcbiAgdG8ge1xuICAgIGJveC1zaGFkb3c6IDM3cHggLTIyMy42NjY2NjY2NjY3cHggI2ZmOTEwMCwgMTU2cHggNjguMzMzMzMzMzMzM3B4IGJsdWUsIC0xNDVweCAtMzI4LjY2NjY2NjY2NjdweCAjZmYzYzAwLCA0N3B4IC05Mi42NjY2NjY2NjY3cHggIzAwYmJmZiwgLTg2cHggNzUuMzMzMzMzMzMzM3B4ICMwMGZmNmEsIC0yMjdweCAtMzM5LjY2NjY2NjY2NjdweCAjOTUwMGZmLCAyNDhweCAtMjgxLjY2NjY2NjY2NjdweCAjZmYwMGRkLCA4N3B4IC0zNTkuNjY2NjY2NjY2N3B4ICNmZmE2MDAsIC0xMjhweCAtMTQuNjY2NjY2NjY2N3B4ICMwMGZmZDksIDM2cHggMzguMzMzMzMzMzMzM3B4ICMwMDg0ZmYsIDE0OXB4IC0yMDMuNjY2NjY2NjY2N3B4ICNmZjE1MDAsIDE0OHB4IDAuMzMzMzMzMzMzM3B4ICNmZjAwNjYsIC0yMjZweCAtNDExLjY2NjY2NjY2NjdweCAjMDBhYWZmLCAtNThweCAtNDA5LjY2NjY2NjY2NjdweCAjZTFmZjAwLCAxNDJweCAtMTYwLjY2NjY2NjY2NjdweCAjZDkwMGZmLCAtMTc5cHggLTc2LjY2NjY2NjY2NjdweCAjZmY1NTAwLCAyMDBweCAtOTIuNjY2NjY2NjY2N3B4ICNmZjg4MDAsIC0xNTdweCAwLjMzMzMzMzMzMzNweCAjMDBmZmEyLCAtMTI5cHggLTM4OS42NjY2NjY2NjY3cHggIzAwZmY4YywgLTIxNXB4IDkuMzMzMzMzMzMzM3B4ICMwMGZmOTUsIC0yMDlweCAtMTkwLjY2NjY2NjY2NjdweCAjZmY3MzAwLCA3N3B4IDEzLjMzMzMzMzMzMzNweCAjZDVmZjAwLCAtMTcxcHggLTk1LjY2NjY2NjY2NjdweCAjYjNmZjAwLCAtMjM0cHggLTE5MC42NjY2NjY2NjY3cHggI2FhMDBmZiwgLTI0M3B4IC0zOTQuNjY2NjY2NjY2N3B4ICNmZjAwOGMsIC0yNDNweCAtNjQuNjY2NjY2NjY2N3B4ICNlMTAwZmYsIC0yMDRweCAtMzI0LjY2NjY2NjY2NjdweCAjMDBkMGZmLCAtNTFweCAtMjY3LjY2NjY2NjY2NjdweCAjNGQwMGZmLCAzMnB4IC05LjY2NjY2NjY2NjdweCAjYjMwMGZmLCAyMjBweCAtMzUxLjY2NjY2NjY2NjdweCAjZTEwMGZmLCAxNzlweCAtMTAxLjY2NjY2NjY2NjdweCAjMzdmZjAwLCAtMTkxcHggLTE1NC42NjY2NjY2NjY3cHggIzAwZmYyYiwgLTIzOXB4IDYuMzMzMzMzMzMzM3B4ICM0OGZmMDAsIC0yMjVweCAzNC4zMzMzMzMzMzMzcHggIzAwZjdmZiwgLTY2cHggMzcuMzMzMzMzMzMzM3B4ICM0OGZmMDAsIDI0OXB4IC0zNzEuNjY2NjY2NjY2N3B4ICNkZGZmMDAsIDExMHB4IDcxLjMzMzMzMzMzMzNweCAjZmZkOTAwLCAtMTU4cHggLTE2NS42NjY2NjY2NjY3cHggIzAwYjdmZiwgMjI5cHggMTUuMzMzMzMzMzMzM3B4ICM1NTAwZmYsIC02M3B4IC02LjY2NjY2NjY2NjdweCAjMDBmZjNjLCAtNTNweCAtMTQwLjY2NjY2NjY2NjdweCAjMDAyMmZmLCAtMTYzcHggLTM3MC42NjY2NjY2NjY3cHggIzE1ZmYwMCwgLTE4cHggLTIyNC42NjY2NjY2NjY3cHggI2Q5ZmYwMCwgLTc5cHggLTMwMi42NjY2NjY2NjY3cHggIzQ0ZmYwMCwgLTIzOHB4IC0xOC42NjY2NjY2NjY3cHggI2ZmZWEwMCwgLTY3cHggLTIzNS42NjY2NjY2NjY3cHggIzAwOGNmZiwgMjMycHggLTM2Ny42NjY2NjY2NjY3cHggI2JiZmYwMCwgODNweCAtMjkuNjY2NjY2NjY2N3B4ICNmZjFhMDAsIDEyOXB4IC0zOTIuNjY2NjY2NjY2N3B4ICNmZjdiMDAsIC05OHB4IC0yODYuNjY2NjY2NjY2N3B4ICMwMDIyZmYsIC0yMTRweCAtNTkuNjY2NjY2NjY2N3B4ICNmZjAwMzc7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBiYW5nIHtcbiAgdG8ge1xuICAgIGJveC1zaGFkb3c6IDM3cHggLTIyMy42NjY2NjY2NjY3cHggI2ZmOTEwMCwgMTU2cHggNjguMzMzMzMzMzMzM3B4IGJsdWUsIC0xNDVweCAtMzI4LjY2NjY2NjY2NjdweCAjZmYzYzAwLCA0N3B4IC05Mi42NjY2NjY2NjY3cHggIzAwYmJmZiwgLTg2cHggNzUuMzMzMzMzMzMzM3B4ICMwMGZmNmEsIC0yMjdweCAtMzM5LjY2NjY2NjY2NjdweCAjOTUwMGZmLCAyNDhweCAtMjgxLjY2NjY2NjY2NjdweCAjZmYwMGRkLCA4N3B4IC0zNTkuNjY2NjY2NjY2N3B4ICNmZmE2MDAsIC0xMjhweCAtMTQuNjY2NjY2NjY2N3B4ICMwMGZmZDksIDM2cHggMzguMzMzMzMzMzMzM3B4ICMwMDg0ZmYsIDE0OXB4IC0yMDMuNjY2NjY2NjY2N3B4ICNmZjE1MDAsIDE0OHB4IDAuMzMzMzMzMzMzM3B4ICNmZjAwNjYsIC0yMjZweCAtNDExLjY2NjY2NjY2NjdweCAjMDBhYWZmLCAtNThweCAtNDA5LjY2NjY2NjY2NjdweCAjZTFmZjAwLCAxNDJweCAtMTYwLjY2NjY2NjY2NjdweCAjZDkwMGZmLCAtMTc5cHggLTc2LjY2NjY2NjY2NjdweCAjZmY1NTAwLCAyMDBweCAtOTIuNjY2NjY2NjY2N3B4ICNmZjg4MDAsIC0xNTdweCAwLjMzMzMzMzMzMzNweCAjMDBmZmEyLCAtMTI5cHggLTM4OS42NjY2NjY2NjY3cHggIzAwZmY4YywgLTIxNXB4IDkuMzMzMzMzMzMzM3B4ICMwMGZmOTUsIC0yMDlweCAtMTkwLjY2NjY2NjY2NjdweCAjZmY3MzAwLCA3N3B4IDEzLjMzMzMzMzMzMzNweCAjZDVmZjAwLCAtMTcxcHggLTk1LjY2NjY2NjY2NjdweCAjYjNmZjAwLCAtMjM0cHggLTE5MC42NjY2NjY2NjY3cHggI2FhMDBmZiwgLTI0M3B4IC0zOTQuNjY2NjY2NjY2N3B4ICNmZjAwOGMsIC0yNDNweCAtNjQuNjY2NjY2NjY2N3B4ICNlMTAwZmYsIC0yMDRweCAtMzI0LjY2NjY2NjY2NjdweCAjMDBkMGZmLCAtNTFweCAtMjY3LjY2NjY2NjY2NjdweCAjNGQwMGZmLCAzMnB4IC05LjY2NjY2NjY2NjdweCAjYjMwMGZmLCAyMjBweCAtMzUxLjY2NjY2NjY2NjdweCAjZTEwMGZmLCAxNzlweCAtMTAxLjY2NjY2NjY2NjdweCAjMzdmZjAwLCAtMTkxcHggLTE1NC42NjY2NjY2NjY3cHggIzAwZmYyYiwgLTIzOXB4IDYuMzMzMzMzMzMzM3B4ICM0OGZmMDAsIC0yMjVweCAzNC4zMzMzMzMzMzMzcHggIzAwZjdmZiwgLTY2cHggMzcuMzMzMzMzMzMzM3B4ICM0OGZmMDAsIDI0OXB4IC0zNzEuNjY2NjY2NjY2N3B4ICNkZGZmMDAsIDExMHB4IDcxLjMzMzMzMzMzMzNweCAjZmZkOTAwLCAtMTU4cHggLTE2NS42NjY2NjY2NjY3cHggIzAwYjdmZiwgMjI5cHggMTUuMzMzMzMzMzMzM3B4ICM1NTAwZmYsIC02M3B4IC02LjY2NjY2NjY2NjdweCAjMDBmZjNjLCAtNTNweCAtMTQwLjY2NjY2NjY2NjdweCAjMDAyMmZmLCAtMTYzcHggLTM3MC42NjY2NjY2NjY3cHggIzE1ZmYwMCwgLTE4cHggLTIyNC42NjY2NjY2NjY3cHggI2Q5ZmYwMCwgLTc5cHggLTMwMi42NjY2NjY2NjY3cHggIzQ0ZmYwMCwgLTIzOHB4IC0xOC42NjY2NjY2NjY3cHggI2ZmZWEwMCwgLTY3cHggLTIzNS42NjY2NjY2NjY3cHggIzAwOGNmZiwgMjMycHggLTM2Ny42NjY2NjY2NjY3cHggI2JiZmYwMCwgODNweCAtMjkuNjY2NjY2NjY2N3B4ICNmZjFhMDAsIDEyOXB4IC0zOTIuNjY2NjY2NjY2N3B4ICNmZjdiMDAsIC05OHB4IC0yODYuNjY2NjY2NjY2N3B4ICMwMDIyZmYsIC0yMTRweCAtNTkuNjY2NjY2NjY2N3B4ICNmZjAwMzc7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgYmFuZyB7XG4gIHRvIHtcbiAgICBib3gtc2hhZG93OiAzN3B4IC0yMjMuNjY2NjY2NjY2N3B4ICNmZjkxMDAsIDE1NnB4IDY4LjMzMzMzMzMzMzNweCBibHVlLCAtMTQ1cHggLTMyOC42NjY2NjY2NjY3cHggI2ZmM2MwMCwgNDdweCAtOTIuNjY2NjY2NjY2N3B4ICMwMGJiZmYsIC04NnB4IDc1LjMzMzMzMzMzMzNweCAjMDBmZjZhLCAtMjI3cHggLTMzOS42NjY2NjY2NjY3cHggIzk1MDBmZiwgMjQ4cHggLTI4MS42NjY2NjY2NjY3cHggI2ZmMDBkZCwgODdweCAtMzU5LjY2NjY2NjY2NjdweCAjZmZhNjAwLCAtMTI4cHggLTE0LjY2NjY2NjY2NjdweCAjMDBmZmQ5LCAzNnB4IDM4LjMzMzMzMzMzMzNweCAjMDA4NGZmLCAxNDlweCAtMjAzLjY2NjY2NjY2NjdweCAjZmYxNTAwLCAxNDhweCAwLjMzMzMzMzMzMzNweCAjZmYwMDY2LCAtMjI2cHggLTQxMS42NjY2NjY2NjY3cHggIzAwYWFmZiwgLTU4cHggLTQwOS42NjY2NjY2NjY3cHggI2UxZmYwMCwgMTQycHggLTE2MC42NjY2NjY2NjY3cHggI2Q5MDBmZiwgLTE3OXB4IC03Ni42NjY2NjY2NjY3cHggI2ZmNTUwMCwgMjAwcHggLTkyLjY2NjY2NjY2NjdweCAjZmY4ODAwLCAtMTU3cHggMC4zMzMzMzMzMzMzcHggIzAwZmZhMiwgLTEyOXB4IC0zODkuNjY2NjY2NjY2N3B4ICMwMGZmOGMsIC0yMTVweCA5LjMzMzMzMzMzMzNweCAjMDBmZjk1LCAtMjA5cHggLTE5MC42NjY2NjY2NjY3cHggI2ZmNzMwMCwgNzdweCAxMy4zMzMzMzMzMzMzcHggI2Q1ZmYwMCwgLTE3MXB4IC05NS42NjY2NjY2NjY3cHggI2IzZmYwMCwgLTIzNHB4IC0xOTAuNjY2NjY2NjY2N3B4ICNhYTAwZmYsIC0yNDNweCAtMzk0LjY2NjY2NjY2NjdweCAjZmYwMDhjLCAtMjQzcHggLTY0LjY2NjY2NjY2NjdweCAjZTEwMGZmLCAtMjA0cHggLTMyNC42NjY2NjY2NjY3cHggIzAwZDBmZiwgLTUxcHggLTI2Ny42NjY2NjY2NjY3cHggIzRkMDBmZiwgMzJweCAtOS42NjY2NjY2NjY3cHggI2IzMDBmZiwgMjIwcHggLTM1MS42NjY2NjY2NjY3cHggI2UxMDBmZiwgMTc5cHggLTEwMS42NjY2NjY2NjY3cHggIzM3ZmYwMCwgLTE5MXB4IC0xNTQuNjY2NjY2NjY2N3B4ICMwMGZmMmIsIC0yMzlweCA2LjMzMzMzMzMzMzNweCAjNDhmZjAwLCAtMjI1cHggMzQuMzMzMzMzMzMzM3B4ICMwMGY3ZmYsIC02NnB4IDM3LjMzMzMzMzMzMzNweCAjNDhmZjAwLCAyNDlweCAtMzcxLjY2NjY2NjY2NjdweCAjZGRmZjAwLCAxMTBweCA3MS4zMzMzMzMzMzMzcHggI2ZmZDkwMCwgLTE1OHB4IC0xNjUuNjY2NjY2NjY2N3B4ICMwMGI3ZmYsIDIyOXB4IDE1LjMzMzMzMzMzMzNweCAjNTUwMGZmLCAtNjNweCAtNi42NjY2NjY2NjY3cHggIzAwZmYzYywgLTUzcHggLTE0MC42NjY2NjY2NjY3cHggIzAwMjJmZiwgLTE2M3B4IC0zNzAuNjY2NjY2NjY2N3B4ICMxNWZmMDAsIC0xOHB4IC0yMjQuNjY2NjY2NjY2N3B4ICNkOWZmMDAsIC03OXB4IC0zMDIuNjY2NjY2NjY2N3B4ICM0NGZmMDAsIC0yMzhweCAtMTguNjY2NjY2NjY2N3B4ICNmZmVhMDAsIC02N3B4IC0yMzUuNjY2NjY2NjY2N3B4ICMwMDhjZmYsIDIzMnB4IC0zNjcuNjY2NjY2NjY2N3B4ICNiYmZmMDAsIDgzcHggLTI5LjY2NjY2NjY2NjdweCAjZmYxYTAwLCAxMjlweCAtMzkyLjY2NjY2NjY2NjdweCAjZmY3YjAwLCAtOThweCAtMjg2LjY2NjY2NjY2NjdweCAjMDAyMmZmLCAtMjE0cHggLTU5LjY2NjY2NjY2NjdweCAjZmYwMDM3O1xuICB9XG59XG5ALW1zLWtleWZyYW1lcyBiYW5nIHtcbiAgdG8ge1xuICAgIGJveC1zaGFkb3c6IDM3cHggLTIyMy42NjY2NjY2NjY3cHggI2ZmOTEwMCwgMTU2cHggNjguMzMzMzMzMzMzM3B4IGJsdWUsIC0xNDVweCAtMzI4LjY2NjY2NjY2NjdweCAjZmYzYzAwLCA0N3B4IC05Mi42NjY2NjY2NjY3cHggIzAwYmJmZiwgLTg2cHggNzUuMzMzMzMzMzMzM3B4ICMwMGZmNmEsIC0yMjdweCAtMzM5LjY2NjY2NjY2NjdweCAjOTUwMGZmLCAyNDhweCAtMjgxLjY2NjY2NjY2NjdweCAjZmYwMGRkLCA4N3B4IC0zNTkuNjY2NjY2NjY2N3B4ICNmZmE2MDAsIC0xMjhweCAtMTQuNjY2NjY2NjY2N3B4ICMwMGZmZDksIDM2cHggMzguMzMzMzMzMzMzM3B4ICMwMDg0ZmYsIDE0OXB4IC0yMDMuNjY2NjY2NjY2N3B4ICNmZjE1MDAsIDE0OHB4IDAuMzMzMzMzMzMzM3B4ICNmZjAwNjYsIC0yMjZweCAtNDExLjY2NjY2NjY2NjdweCAjMDBhYWZmLCAtNThweCAtNDA5LjY2NjY2NjY2NjdweCAjZTFmZjAwLCAxNDJweCAtMTYwLjY2NjY2NjY2NjdweCAjZDkwMGZmLCAtMTc5cHggLTc2LjY2NjY2NjY2NjdweCAjZmY1NTAwLCAyMDBweCAtOTIuNjY2NjY2NjY2N3B4ICNmZjg4MDAsIC0xNTdweCAwLjMzMzMzMzMzMzNweCAjMDBmZmEyLCAtMTI5cHggLTM4OS42NjY2NjY2NjY3cHggIzAwZmY4YywgLTIxNXB4IDkuMzMzMzMzMzMzM3B4ICMwMGZmOTUsIC0yMDlweCAtMTkwLjY2NjY2NjY2NjdweCAjZmY3MzAwLCA3N3B4IDEzLjMzMzMzMzMzMzNweCAjZDVmZjAwLCAtMTcxcHggLTk1LjY2NjY2NjY2NjdweCAjYjNmZjAwLCAtMjM0cHggLTE5MC42NjY2NjY2NjY3cHggI2FhMDBmZiwgLTI0M3B4IC0zOTQuNjY2NjY2NjY2N3B4ICNmZjAwOGMsIC0yNDNweCAtNjQuNjY2NjY2NjY2N3B4ICNlMTAwZmYsIC0yMDRweCAtMzI0LjY2NjY2NjY2NjdweCAjMDBkMGZmLCAtNTFweCAtMjY3LjY2NjY2NjY2NjdweCAjNGQwMGZmLCAzMnB4IC05LjY2NjY2NjY2NjdweCAjYjMwMGZmLCAyMjBweCAtMzUxLjY2NjY2NjY2NjdweCAjZTEwMGZmLCAxNzlweCAtMTAxLjY2NjY2NjY2NjdweCAjMzdmZjAwLCAtMTkxcHggLTE1NC42NjY2NjY2NjY3cHggIzAwZmYyYiwgLTIzOXB4IDYuMzMzMzMzMzMzM3B4ICM0OGZmMDAsIC0yMjVweCAzNC4zMzMzMzMzMzMzcHggIzAwZjdmZiwgLTY2cHggMzcuMzMzMzMzMzMzM3B4ICM0OGZmMDAsIDI0OXB4IC0zNzEuNjY2NjY2NjY2N3B4ICNkZGZmMDAsIDExMHB4IDcxLjMzMzMzMzMzMzNweCAjZmZkOTAwLCAtMTU4cHggLTE2NS42NjY2NjY2NjY3cHggIzAwYjdmZiwgMjI5cHggMTUuMzMzMzMzMzMzM3B4ICM1NTAwZmYsIC02M3B4IC02LjY2NjY2NjY2NjdweCAjMDBmZjNjLCAtNTNweCAtMTQwLjY2NjY2NjY2NjdweCAjMDAyMmZmLCAtMTYzcHggLTM3MC42NjY2NjY2NjY3cHggIzE1ZmYwMCwgLTE4cHggLTIyNC42NjY2NjY2NjY3cHggI2Q5ZmYwMCwgLTc5cHggLTMwMi42NjY2NjY2NjY3cHggIzQ0ZmYwMCwgLTIzOHB4IC0xOC42NjY2NjY2NjY3cHggI2ZmZWEwMCwgLTY3cHggLTIzNS42NjY2NjY2NjY3cHggIzAwOGNmZiwgMjMycHggLTM2Ny42NjY2NjY2NjY3cHggI2JiZmYwMCwgODNweCAtMjkuNjY2NjY2NjY2N3B4ICNmZjFhMDAsIDEyOXB4IC0zOTIuNjY2NjY2NjY2N3B4ICNmZjdiMDAsIC05OHB4IC0yODYuNjY2NjY2NjY2N3B4ICMwMDIyZmYsIC0yMTRweCAtNTkuNjY2NjY2NjY2N3B4ICNmZjAwMzc7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYmFuZyB7XG4gIHRvIHtcbiAgICBib3gtc2hhZG93OiAzN3B4IC0yMjMuNjY2NjY2NjY2N3B4ICNmZjkxMDAsIDE1NnB4IDY4LjMzMzMzMzMzMzNweCBibHVlLCAtMTQ1cHggLTMyOC42NjY2NjY2NjY3cHggI2ZmM2MwMCwgNDdweCAtOTIuNjY2NjY2NjY2N3B4ICMwMGJiZmYsIC04NnB4IDc1LjMzMzMzMzMzMzNweCAjMDBmZjZhLCAtMjI3cHggLTMzOS42NjY2NjY2NjY3cHggIzk1MDBmZiwgMjQ4cHggLTI4MS42NjY2NjY2NjY3cHggI2ZmMDBkZCwgODdweCAtMzU5LjY2NjY2NjY2NjdweCAjZmZhNjAwLCAtMTI4cHggLTE0LjY2NjY2NjY2NjdweCAjMDBmZmQ5LCAzNnB4IDM4LjMzMzMzMzMzMzNweCAjMDA4NGZmLCAxNDlweCAtMjAzLjY2NjY2NjY2NjdweCAjZmYxNTAwLCAxNDhweCAwLjMzMzMzMzMzMzNweCAjZmYwMDY2LCAtMjI2cHggLTQxMS42NjY2NjY2NjY3cHggIzAwYWFmZiwgLTU4cHggLTQwOS42NjY2NjY2NjY3cHggI2UxZmYwMCwgMTQycHggLTE2MC42NjY2NjY2NjY3cHggI2Q5MDBmZiwgLTE3OXB4IC03Ni42NjY2NjY2NjY3cHggI2ZmNTUwMCwgMjAwcHggLTkyLjY2NjY2NjY2NjdweCAjZmY4ODAwLCAtMTU3cHggMC4zMzMzMzMzMzMzcHggIzAwZmZhMiwgLTEyOXB4IC0zODkuNjY2NjY2NjY2N3B4ICMwMGZmOGMsIC0yMTVweCA5LjMzMzMzMzMzMzNweCAjMDBmZjk1LCAtMjA5cHggLTE5MC42NjY2NjY2NjY3cHggI2ZmNzMwMCwgNzdweCAxMy4zMzMzMzMzMzMzcHggI2Q1ZmYwMCwgLTE3MXB4IC05NS42NjY2NjY2NjY3cHggI2IzZmYwMCwgLTIzNHB4IC0xOTAuNjY2NjY2NjY2N3B4ICNhYTAwZmYsIC0yNDNweCAtMzk0LjY2NjY2NjY2NjdweCAjZmYwMDhjLCAtMjQzcHggLTY0LjY2NjY2NjY2NjdweCAjZTEwMGZmLCAtMjA0cHggLTMyNC42NjY2NjY2NjY3cHggIzAwZDBmZiwgLTUxcHggLTI2Ny42NjY2NjY2NjY3cHggIzRkMDBmZiwgMzJweCAtOS42NjY2NjY2NjY3cHggI2IzMDBmZiwgMjIwcHggLTM1MS42NjY2NjY2NjY3cHggI2UxMDBmZiwgMTc5cHggLTEwMS42NjY2NjY2NjY3cHggIzM3ZmYwMCwgLTE5MXB4IC0xNTQuNjY2NjY2NjY2N3B4ICMwMGZmMmIsIC0yMzlweCA2LjMzMzMzMzMzMzNweCAjNDhmZjAwLCAtMjI1cHggMzQuMzMzMzMzMzMzM3B4ICMwMGY3ZmYsIC02NnB4IDM3LjMzMzMzMzMzMzNweCAjNDhmZjAwLCAyNDlweCAtMzcxLjY2NjY2NjY2NjdweCAjZGRmZjAwLCAxMTBweCA3MS4zMzMzMzMzMzMzcHggI2ZmZDkwMCwgLTE1OHB4IC0xNjUuNjY2NjY2NjY2N3B4ICMwMGI3ZmYsIDIyOXB4IDE1LjMzMzMzMzMzMzNweCAjNTUwMGZmLCAtNjNweCAtNi42NjY2NjY2NjY3cHggIzAwZmYzYywgLTUzcHggLTE0MC42NjY2NjY2NjY3cHggIzAwMjJmZiwgLTE2M3B4IC0zNzAuNjY2NjY2NjY2N3B4ICMxNWZmMDAsIC0xOHB4IC0yMjQuNjY2NjY2NjY2N3B4ICNkOWZmMDAsIC03OXB4IC0zMDIuNjY2NjY2NjY2N3B4ICM0NGZmMDAsIC0yMzhweCAtMTguNjY2NjY2NjY2N3B4ICNmZmVhMDAsIC02N3B4IC0yMzUuNjY2NjY2NjY2N3B4ICMwMDhjZmYsIDIzMnB4IC0zNjcuNjY2NjY2NjY2N3B4ICNiYmZmMDAsIDgzcHggLTI5LjY2NjY2NjY2NjdweCAjZmYxYTAwLCAxMjlweCAtMzkyLjY2NjY2NjY2NjdweCAjZmY3YjAwLCAtOThweCAtMjg2LjY2NjY2NjY2NjdweCAjMDAyMmZmLCAtMjE0cHggLTU5LjY2NjY2NjY2NjdweCAjZmYwMDM3O1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZ3Jhdml0eSB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgZ3Jhdml0eSB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIGdyYXZpdHkge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQC1tcy1rZXlmcmFtZXMgZ3Jhdml0eSB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGdyYXZpdHkge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHBvc2l0aW9uIHtcbiAgMCUsIDE5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgfVxuICAyMCUsIDM5LjklIHtcbiAgICBtYXJnaW4tdG9wOiA0MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgfVxuICA0MCUsIDU5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDcwJTtcbiAgfVxuICA2MCUsIDc5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgfVxuICA4MCUsIDk5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIHBvc2l0aW9uIHtcbiAgMCUsIDE5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgfVxuICAyMCUsIDM5LjklIHtcbiAgICBtYXJnaW4tdG9wOiA0MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgfVxuICA0MCUsIDU5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDcwJTtcbiAgfVxuICA2MCUsIDc5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgfVxuICA4MCUsIDk5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBwb3NpdGlvbiB7XG4gIDAlLCAxOS45JSB7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XG4gIH1cbiAgMjAlLCAzOS45JSB7XG4gICAgbWFyZ2luLXRvcDogNDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIH1cbiAgNDAlLCA1OS45JSB7XG4gICAgbWFyZ2luLXRvcDogMjAlO1xuICAgIG1hcmdpbi1sZWZ0OiA3MCU7XG4gIH1cbiAgNjAlLCA3OS45JSB7XG4gICAgbWFyZ2luLXRvcDogMzAlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gIH1cbiAgODAlLCA5OS45JSB7XG4gICAgbWFyZ2luLXRvcDogMzAlO1xuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XG4gIH1cbn1cbkAtbXMta2V5ZnJhbWVzIHBvc2l0aW9uIHtcbiAgMCUsIDE5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgfVxuICAyMCUsIDM5LjklIHtcbiAgICBtYXJnaW4tdG9wOiA0MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgfVxuICA0MCUsIDU5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDcwJTtcbiAgfVxuICA2MCUsIDc5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgfVxuICA4MCUsIDk5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcbiAgfVxufVxuQGtleWZyYW1lcyBwb3NpdGlvbiB7XG4gIDAlLCAxOS45JSB7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XG4gIH1cbiAgMjAlLCAzOS45JSB7XG4gICAgbWFyZ2luLXRvcDogNDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIH1cbiAgNDAlLCA1OS45JSB7XG4gICAgbWFyZ2luLXRvcDogMjAlO1xuICAgIG1hcmdpbi1sZWZ0OiA3MCU7XG4gIH1cbiAgNjAlLCA3OS45JSB7XG4gICAgbWFyZ2luLXRvcDogMzAlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gIH1cbiAgODAlLCA5OS45JSB7XG4gICAgbWFyZ2luLXRvcDogMzAlO1xuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgOjpuZy1kZWVwIC5sYW5kaW5nLXBhZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAwO1xuICB9XG59XG46Om5nLWRlZXAgLmxhbmRpbmctcGFnZSAuY2F0ZWdvcmllcy1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgbWFyZ2luOiA1MHB4IDBweCAwcHggMHB4O1xuICBjb2xvcjogIzMxM2UyNDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICNhZDk3NGY7XG59XG46Om5nLWRlZXAgLmxhbmRpbmctcGFnZSAubmV3LWFycml2YWwtc2xpZGUge1xuICBhbmltYXRpb246IGZhZGVJbiAzcztcbn1cbjo6bmctZGVlcCAubGFuZGluZy1wYWdlIC5uZXctYXJyaXZhbC1zbGlkZSAudmlkZW8taXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDk1dmg7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgOjpuZy1kZWVwIC5sYW5kaW5nLXBhZ2UgLm5ldy1hcnJpdmFsLXNsaWRlIC52aWRlby1pdGVtIHtcbiAgICBoZWlnaHQ6IDM1dmg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIDo6bmctZGVlcCAubGFuZGluZy1wYWdlIC5uZXctYXJyaXZhbC1zbGlkZSAuY2Fyb3VzZWwtY2FwdGlvbiAuYnRuIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIDo6bmctZGVlcCAubGFuZGluZy1wYWdlIC5uZXctYXJyaXZhbC1zbGlkZSAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gICAgbGVmdDogLTMwcHg7XG4gIH1cbn1cbjo6bmctZGVlcCAubGFuZGluZy1wYWdlIC5jYXJvdXNlbC1pbWcge1xuICBoZWlnaHQ6IDkwdmg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIDo6bmctZGVlcCAubGFuZGluZy1wYWdlIC5jYXJvdXNlbC1pbWcge1xuICAgIGhlaWdodDogMzV2aDtcbiAgfVxufVxuOjpuZy1kZWVwIC5sYW5kaW5nLXBhZ2UgLmNhcm91c2VsLWNhcHRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDQwNXB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXgtd2lkdGg6IDMzNXB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICA6Om5nLWRlZXAgLmxhbmRpbmctcGFnZSAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gICAgdG9wOiAxNzBweCAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzc3cHgpIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICA6Om5nLWRlZXAgLmxhbmRpbmctcGFnZSAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gICAgdG9wOiAxOTVweCAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAxcHgpIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICA6Om5nLWRlZXAgLmxhbmRpbmctcGFnZSAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gICAgdG9wOiAxOTBweCAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc2cHgpIHtcbiAgOjpuZy1kZWVwIC5sYW5kaW5nLXBhZ2UgLmNhcm91c2VsLWNhcHRpb24ge1xuICAgIHRvcDogMTU4cHggIWltcG9ydGFudDtcbiAgICBsZWZ0OiAwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2NXB4KSB7XG4gIDo6bmctZGVlcCAubGFuZGluZy1wYWdlIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgICB0b3A6IDE2M3B4ICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogMHB4O1xuICB9XG59XG46Om5nLWRlZXAgLmxhbmRpbmctcGFnZSAuY2Fyb3VzZWwtY2FwdGlvbiAuaGVhZGVyLXRleHQge1xuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbn1cbjo6bmctZGVlcCAubGFuZGluZy1wYWdlIC5jYXJvdXNlbC1jYXB0aW9uIC5oZWFkZXItdGV4dC1kZXRhaWxzIHtcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG59XG46Om5nLWRlZXAgLmxhbmRpbmctcGFnZSAucHJvZHVjdC1wZXJjYXRlZ29yeS1zbGlkZXMge1xuICBtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogYXV0bztcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gIDo6bmctZGVlcCAubGFuZGluZy1wYWdlIC5wcm9kdWN0LXBlcmNhdGVnb3J5LXNsaWRlcyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTcwOHB4KSBhbmQgKG1heC13aWR0aDogMTk1MHB4KSB7XG4gIDo6bmctZGVlcCAubGFuZGluZy1wYWdlIC5wcm9kdWN0LXBlcmNhdGVnb3J5LXNsaWRlcyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuOjpuZy1kZWVwIC5sYW5kaW5nLXBhZ2UgLnByb2R1Y3QtcGVyY2F0ZWdvcnktc2xpZGVzIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuOjpuZy1kZWVwIC5sYW5kaW5nLXBhZ2UgLnByb2R1Y3QtcGVyY2F0ZWdvcnktc2xpZGVzIC5jYXJvdXNlbC1pdGVtIHtcbiAgbWFyZ2luLXJpZ2h0OiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDIwcHggMzBweCAzMHB4IDMwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICA6Om5nLWRlZXAgLmxhbmRpbmctcGFnZSAucHJvZHVjdC1wZXJjYXRlZ29yeS1zbGlkZXMgLmNhcm91c2VsLWl0ZW0ge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBoZWlnaHQ6IDEzMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbjo6bmctZGVlcCAubGFuZGluZy1wYWdlIC5wcm9kdWN0LXBlcmNhdGVnb3J5LXNsaWRlcyAuY2Fyb3VzZWwtaXRlbSAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMjQwcHg7XG4gIHRvcDogMTY2cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDcxJTtcbiAgaGVpZ2h0OiA1NXB4O1xuICBtYXJnaW4tbGVmdDogNzBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1MDBweCkge1xuICA6Om5nLWRlZXAgLmxhbmRpbmctcGFnZSAucHJvZHVjdC1wZXJjYXRlZ29yeS1zbGlkZXMgLmNhcm91c2VsLWl0ZW0gLmNhcm91c2VsLWNhcHRpb24ge1xuICAgIG1hcmdpbi1sZWZ0OiA0NXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTNweCkgYW5kIChtYXgtd2lkdGg6IDE1MDBweCkge1xuICA6Om5nLWRlZXAgLmxhbmRpbmctcGFnZSAucHJvZHVjdC1wZXJjYXRlZ29yeS1zbGlkZXMgLmNhcm91c2VsLWl0ZW0gLmNhcm91c2VsLWNhcHRpb24ge1xuICAgIG1hcmdpbi1sZWZ0OiAzNnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICA6Om5nLWRlZXAgLmxhbmRpbmctcGFnZSAucHJvZHVjdC1wZXJjYXRlZ29yeS1zbGlkZXMgLmNhcm91c2VsLWl0ZW0gLmNhcm91c2VsLWNhcHRpb24ge1xuICAgIHRvcDogNTBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xuICB9XG59XG46Om5nLWRlZXAgLmxhbmRpbmctcGFnZSAucHJvZHVjdC1wZXJjYXRlZ29yeS1zbGlkZXMgLmNhcm91c2VsLWl0ZW0gLmNhcm91c2VsLWNhcHRpb24gLmNhcm91c2VsLXRleHQge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQ6ICMzMTNlMjQgIWltcG9ydGFudDtcbiAgY29sb3I6ICNiZWI4OWM7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gIDo6bmctZGVlcCAubGFuZGluZy1wYWdlIC5wcm9kdWN0LXBlcmNhdGVnb3J5LXNsaWRlcyAuY2Fyb3VzZWwtaXRlbSAuY2Fyb3VzZWwtY2FwdGlvbiAuY2Fyb3VzZWwtdGV4dCB7XG4gICAgZm9udC1zaXplOiAyLjJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG46Om5nLWRlZXAgLmxhbmRpbmctcGFnZSAucHJvZHVjdC1wZXJjYXRlZ29yeS1zbGlkZXMgLmNhcm91c2VsLWl0ZW0gaW1nIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIDo6bmctZGVlcCAubGFuZGluZy1wYWdlIC5wcm9kdWN0LXBlcmNhdGVnb3J5LXNsaWRlcyAuY2Fyb3VzZWwtaXRlbSBpbWcge1xuICAgIHdpZHRoOiAzMzBweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICA6Om5nLWRlZXAgLmxhbmRpbmctcGFnZSAucHJvZHVjdC1wZXJjYXRlZ29yeS1zbGlkZXMgLmNhcm91c2VsLWl0ZW0gaW1nIHtcbiAgICBoZWlnaHQ6IDEyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICB6LWluZGV4OiA5OTkgIWltcG9ydGFudDtcbn1cblxuLmZhZGUge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuN3MgZWFzZS1pbiwgdHJhbnNmb3JtIDAuN3MgZWFzZS1vdXQ7XG59XG5cbi5mYWRlT3V0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDV2aCk7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZmFkZU91dCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDF2aCk7XG4gIH1cbn1cblxuLmZhZGVJbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn0iLCJAaW1wb3J0ICcuLy4uLy4uLy4vL2Fzc2V0cy9zY3NzL2NvbW1vbi5zY3NzJztcclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCB7XHJcbiAgICAubGFuZGluZy1wYWdlIHtcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhdGVnb3JpZXMtaGVhZGVyIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNTBweCAwcHggMHB4IDBweDtcclxuICAgICAgICAgICAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXJ0ZXh0LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmV3LWFycml2YWwtc2xpZGUge1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGZhZGVJbiAzcztcclxuICAgICAgICAgICAgLnZpZGVvLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDk1dmg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXZoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAuYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMzBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcm91c2VsLWltZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogOTB2aDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXZoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRvcDogNDA1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY29sb3I6ICRidXR0b24tdGhlbWUtY29sb3I7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMzM1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDE3MHB4IWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzc3cHgpIGFuZChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDE5NXB4IWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAxcHgpIGFuZChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDE5MHB4IWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc2cHgpIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMTU4cHghaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjVweCkge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxNjNweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5oZWFkZXItdGV4dCB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmhlYWRlci10ZXh0LWRldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm9kdWN0LXBlcmNhdGVnb3J5LXNsaWRlcyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTcwOHB4KSBhbmQgKG1heC13aWR0aDogMTk1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jYXJvdXNlbC1pdGVtIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAzMHB4IDMwcHggMzBweDtcclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTMwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxNjZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MSU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTAwcHgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTkzcHgpIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzZweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcm91c2VsLXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZCAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRnb2xkZW50aGVtZS1jYXJvdXNlbHRleHQtY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4yZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aDogNDAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzMwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICAgIC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xyXG4gICAgICAgIHotaW5kZXg6IDk5OSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZmFkZSB7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuN3MgZWFzZS1pbiwgdHJhbnNmb3JtIDAuN3MgZWFzZS1vdXQ7XHJcbn1cclxuICBcclxuLmZhZGVPdXQgeyBcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXZoKTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXZoKTtcclxuICAgIH1cclxufVxyXG5cclxuLmZhZGVJbiB7IFxyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-landing-page',
          templateUrl: './landing-page.component.html',
          styleUrls: ['./landing-page.component.scss'],
          providers: [{
            provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselConfig"],
            useValue: {
              interval: 10000,
              noPause: true,
              showIndicators: true
            }
          }]
        }]
      }], function () {
        return [{
          type: _services_common_service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
        }, {
          type: _services_landing_page_service_landing_page_service__WEBPACK_IMPORTED_MODULE_3__["LandingPageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_loader_service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]
        }];
      }, {
        videoPlayer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['videoPlayer']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/landing-page/landing-page.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/landing-page/landing-page.module.ts ***!
    \*****************************************************/

  /*! exports provided: LandingPageModule */

  /***/
  function srcAppLandingPageLandingPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingPageModule", function () {
      return LandingPageModule;
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


    var _landing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./landing-page.component */
    "./src/app/landing-page/landing-page.component.ts");
    /* harmony import */


    var _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./landing-page-routing.module */
    "./src/app/landing-page/landing-page-routing.module.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap/carousel */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LandingPageModule = /*#__PURE__*/_createClass(function LandingPageModule() {
      _classCallCheck(this, LandingPageModule);
    });

    LandingPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LandingPageModule
    });
    LandingPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LandingPageModule_Factory(t) {
        return new (t || LandingPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["LandingPageRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LandingPageModule, {
        declarations: [_landing_page_component__WEBPACK_IMPORTED_MODULE_2__["LandingPageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["LandingPageRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_landing_page_component__WEBPACK_IMPORTED_MODULE_2__["LandingPageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["LandingPageRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/landing-page-service/landing-page.service.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/services/landing-page-service/landing-page.service.ts ***!
    \***********************************************************************/

  /*! exports provided: LandingPageService */

  /***/
  function srcAppServicesLandingPageServiceLandingPageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingPageService", function () {
      return LandingPageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _loader_service_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../loader-service/loader.service */
    "./src/app/services/loader-service/loader.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _common_service_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../common-service/common.service */
    "./src/app/services/common-service/common.service.ts");

    var LandingPageService = /*#__PURE__*/function () {
      function LandingPageService(http, loaderService, route, commonService, router) {
        _classCallCheck(this, LandingPageService);

        this.http = http;
        this.loaderService = loaderService;
        this.route = route;
        this.commonService = commonService;
        this.router = router;
        this.data = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.currentData = this.data.asObservable();
        this.confirmationText = "Are you sure you want to delete";
        this.$urlSearchVal = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.orderDataSearch = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.landingPageDetailsUrl = this.commonService.finalLandingPageDetailsUrl;
        this.productPerCategoryUrl = this.commonService.finalProductPerCategoryUrl;
        this.categoryUrl = this.commonService.finalCategoryUrl;
      }
      /*-------------for orders----------*/


      _createClass(LandingPageService, [{
        key: "getLandingPageDetails",
        value: function getLandingPageDetails() {
          return this.http.get(this.landingPageDetailsUrl);
        }
      }, {
        key: "getProductPerCategory",
        value: function getProductPerCategory() {
          return this.http.get(this.productPerCategoryUrl);
        }
      }, {
        key: "getAllCategories",
        value: function getAllCategories() {
          return this.http.get(this.categoryUrl);
        }
      }]);

      return LandingPageService;
    }();

    LandingPageService.ɵfac = function LandingPageService_Factory(t) {
      return new (t || LandingPageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_loader_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    LandingPageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LandingPageService,
      factory: LandingPageService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _loader_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _common_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=landing-page-landing-page-module-es5.js.map