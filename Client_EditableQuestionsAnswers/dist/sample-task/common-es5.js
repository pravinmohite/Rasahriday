function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/pipes/safe-resource-url.pipe.ts":
  /*!*************************************************!*\
    !*** ./src/app/pipes/safe-resource-url.pipe.ts ***!
    \*************************************************/

  /*! exports provided: SafeResourceUrlPipe */

  /***/
  function srcAppPipesSafeResourceUrlPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SafeResourceUrlPipe", function () {
      return SafeResourceUrlPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var SafeResourceUrlPipe = /*#__PURE__*/function () {
      function SafeResourceUrlPipe(sanitizer) {
        _classCallCheck(this, SafeResourceUrlPipe);

        this.sanitizer = sanitizer;
      }

      _createClass(SafeResourceUrlPipe, [{
        key: "transform",
        value: function transform(url) {
          return this.sanitizer.bypassSecurityTrustResourceUrl(url);
        }
      }]);

      return SafeResourceUrlPipe;
    }();

    SafeResourceUrlPipe.ɵfac = function SafeResourceUrlPipe_Factory(t) {
      return new (t || SafeResourceUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
    };

    SafeResourceUrlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "safeResourceUrl",
      type: SafeResourceUrlPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeResourceUrlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'safeResourceUrl'
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared-module/shared.module.ts":
  /*!************************************************!*\
    !*** ./src/app/shared-module/shared.module.ts ***!
    \************************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedModuleSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
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


    var _pipes_safe_resource_url_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../pipes/safe-resource-url.pipe */
    "./src/app/pipes/safe-resource-url.pipe.ts");

    var SharedModule = /*#__PURE__*/_createClass(function SharedModule() {
      _classCallCheck(this, SharedModule);
    });

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_pipes_safe_resource_url_pipe__WEBPACK_IMPORTED_MODULE_2__["SafeResourceUrlPipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_pipes_safe_resource_url_pipe__WEBPACK_IMPORTED_MODULE_2__["SafeResourceUrlPipe"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_pipes_safe_resource_url_pipe__WEBPACK_IMPORTED_MODULE_2__["SafeResourceUrlPipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_pipes_safe_resource_url_pipe__WEBPACK_IMPORTED_MODULE_2__["SafeResourceUrlPipe"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map