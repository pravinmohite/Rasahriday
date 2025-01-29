(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-panel-admin-panel-module"],{

/***/ "./src/app/admin-panel/admin-panel-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin-panel/admin-panel-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AdminPanelRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelRoutingModule", function() { return AdminPanelRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _interview_questions_panel_interview_questions_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interview-questions-panel/interview-questions-panel.component */ "./src/app/admin-panel/interview-questions-panel/interview-questions-panel.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/admin-panel/login/login.component.ts");







const routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: 'updateInterviewQuestions',
        component: _interview_questions_panel_interview_questions_panel_component__WEBPACK_IMPORTED_MODULE_3__["InterviewQuestionsPanelComponent"]
    }
];
class AdminPanelRoutingModule {
}
AdminPanelRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminPanelRoutingModule });
AdminPanelRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminPanelRoutingModule_Factory(t) { return new (t || AdminPanelRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminPanelRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminPanelRoutingModule, [{
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

/***/ "./src/app/admin-panel/admin-panel.module.ts":
/*!***************************************************!*\
  !*** ./src/app/admin-panel/admin-panel.module.ts ***!
  \***************************************************/
/*! exports provided: AdminPanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelModule", function() { return AdminPanelModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _admin_panel_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-panel-routing.module */ "./src/app/admin-panel/admin-panel-routing.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _interview_questions_interview_questions_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interview-questions/interview-questions.module */ "./src/app/interview-questions/interview-questions.module.ts");
/* harmony import */ var _interview_questions_panel_interview_questions_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interview-questions-panel/interview-questions-panel.component */ "./src/app/admin-panel/interview-questions-panel/interview-questions-panel.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/admin-panel/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









class AdminPanelModule {
}
AdminPanelModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminPanelModule });
AdminPanelModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminPanelModule_Factory(t) { return new (t || AdminPanelModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _admin_panel_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminPanelRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
            _interview_questions_interview_questions_module__WEBPACK_IMPORTED_MODULE_4__["InterviewQuestionsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminPanelModule, { declarations: [_interview_questions_panel_interview_questions_panel_component__WEBPACK_IMPORTED_MODULE_5__["InterviewQuestionsPanelComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _admin_panel_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminPanelRoutingModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
        _interview_questions_interview_questions_module__WEBPACK_IMPORTED_MODULE_4__["InterviewQuestionsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminPanelModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _interview_questions_panel_interview_questions_panel_component__WEBPACK_IMPORTED_MODULE_5__["InterviewQuestionsPanelComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _admin_panel_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminPanelRoutingModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
                    _interview_questions_interview_questions_module__WEBPACK_IMPORTED_MODULE_4__["InterviewQuestionsModule"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/admin-panel/interview-questions-panel/interview-questions-panel.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/admin-panel/interview-questions-panel/interview-questions-panel.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: InterviewQuestionsPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterviewQuestionsPanelComponent", function() { return InterviewQuestionsPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_question_answer_service_question_answer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/question-answer-service/question-answer.service */ "./src/app/services/question-answer-service/question-answer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_loader_service_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/loader-service/loader.service */ "./src/app/services/loader-service/loader.service.ts");
/* harmony import */ var _interview_questions_angular_interview_questions_question_answer_panel_question_answer_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../interview-questions/angular-interview-questions/question-answer-panel/question-answer-panel.component */ "./src/app/interview-questions/angular-interview-questions/question-answer-panel/question-answer-panel.component.ts");






class InterviewQuestionsPanelComponent {
    constructor(questionAnswerService, router, loaderService) {
        this.questionAnswerService = questionAnswerService;
        this.router = router;
        this.loaderService = loaderService;
    }
    ngOnInit() {
        if (localStorage.getItem('loggedIn') == "true") {
            this.questionAnswerService.currentData.subscribe((data) => {
                this.questionAnswerList = data;
                this.loaderService.display(false);
            });
            this.questionAnswerService.getQuestionAnswerList();
        }
        else {
            this.router.navigateByUrl('/admin-panel');
        }
    }
}
InterviewQuestionsPanelComponent.ɵfac = function InterviewQuestionsPanelComponent_Factory(t) { return new (t || InterviewQuestionsPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_question_answer_service_question_answer_service__WEBPACK_IMPORTED_MODULE_1__["QuestionAnswerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_loader_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"])); };
InterviewQuestionsPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InterviewQuestionsPanelComponent, selectors: [["app-interview-questions-panel"]], decls: 1, vars: 2, consts: [[3, "questionAnswerList", "adminMode"]], template: function InterviewQuestionsPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-question-answer-panel", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("questionAnswerList", ctx.questionAnswerList)("adminMode", true);
    } }, directives: [_interview_questions_angular_interview_questions_question_answer_panel_question_answer_panel_component__WEBPACK_IMPORTED_MODULE_4__["QuestionAnswerPanelComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXBhbmVsL2ludGVydmlldy1xdWVzdGlvbnMtcGFuZWwvaW50ZXJ2aWV3LXF1ZXN0aW9ucy1wYW5lbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InterviewQuestionsPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-interview-questions-panel',
                templateUrl: './interview-questions-panel.component.html',
                styleUrls: ['./interview-questions-panel.component.scss']
            }]
    }], function () { return [{ type: _services_question_answer_service_question_answer_service__WEBPACK_IMPORTED_MODULE_1__["QuestionAnswerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_loader_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin-panel/login/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin-panel/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var src_app_services_product_service_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product-service/product.service */ "./src/app/services/product-service/product.service.ts");
/* harmony import */ var src_app_services_common_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common-service/common.service */ "./src/app/services/common-service/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_address_address_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/address/address.service */ "./src/app/services/address/address.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









function LoginComponent_legend_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "legend", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_legend_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "legend", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Register:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Practitioner?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_5_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.login.isPractitioner = $event; })("change", function LoginComponent_div_5_Template_input_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.updatePractitionerStatus($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.login.isPractitioner);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function LoginComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Registration Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_6_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.login.regNumber = $event; })("keypress", function LoginComponent_div_6_Template_input_keypress_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.keyPressEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.login.regNumber)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, _r17.invalid && (_r17.touched || _r0.submitted)))("required", ctx_r4.login.isPractitioner);
} }
function LoginComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Confirm Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_17_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.login.confirmPassword = $event; })("keypress", function LoginComponent_div_17_Template_input_keypress_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.keyPressEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.login.confirmPassword);
} }
function LoginComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_18_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.login.firstName = $event; })("keypress", function LoginComponent_div_18_Template_input_keypress_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.keyPressEventForCharacter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_18_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.login.middleName = $event; })("keypress", function LoginComponent_div_18_Template_input_keypress_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.keyPressEventForCharacter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_18_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.login.lastName = $event; })("keypress", function LoginComponent_div_18_Template_input_keypress_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.keyPressEventForCharacter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.login.firstName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, _r24.invalid && (_r24.touched || _r0.submitted)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.login.middleName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.login.lastName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, _r25.invalid && (_r25.touched || _r0.submitted)));
} }
function LoginComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_19_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.login.phoneNumber = $event; })("keypress", function LoginComponent_div_19_Template_input_keypress_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.keyPressEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.login.phoneNumber);
} }
function LoginComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_20_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.login.address = $event; })("keypress", function LoginComponent_div_20_Template_input_keypress_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.keyPressEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r8.login.address);
} }
function LoginComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_21_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.login.city = $event; })("keypress", function LoginComponent_div_21_Template_input_keypress_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.keyPressEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r9.login.city);
} }
function LoginComponent_div_22_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", state_r43 == null ? null : state_r43.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](state_r43 == null ? null : state_r43.label);
} }
function LoginComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_22_Template_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.login.state = $event; })("onchange", function LoginComponent_div_22_Template_select_onchange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.keyPressEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_div_22_option_5_Template, 2, 2, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10.login.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.states);
} }
function LoginComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pincode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_23_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.login.pincode = $event; })("keypress", function LoginComponent_div_23_Template_input_keypress_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.keyPressEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.login.pincode);
} }
function LoginComponent_button_28_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.setSignUpMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_button_29_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.setLoginMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { registrationBox: a0 }; };
class LoginComponent {
    constructor(productService, commonService, router, addressService, cdr) {
        this.productService = productService;
        this.commonService = commonService;
        this.router = router;
        this.addressService = addressService;
        this.cdr = cdr;
        this.isSignUpMode = false;
        this.faArrowRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArrowRight"];
        this.login = { username: "", password: "", regNumber: "", firstName: "", lastName: "", isPractitioner: false };
        this.states = [];
        this.states = this.addressService.getStateList();
    }
    ngOnInit() {
        if (localStorage.getItem('loggedIn') == "true") {
            this.router.navigateByUrl('/home');
        }
    }
    loginToApplication(form) {
        if (this.isSignUpMode && this.login.isPractitioner && !this.login.regNumber) {
            return;
        }
        if (this.isSignUpMode) {
            this.signUpUser();
        }
        else {
            this.validateLoginDetails();
        }
    }
    signUpUser() {
        this.productService.signUpUser(this.login).subscribe(data => {
            this.validateLoginDetails();
        });
    }
    updatePractitionerStatus(event) {
        const checkbox = event.target;
        this.login.isPractitioner = checkbox.checked;
    }
    setPrivilegesOfUser(data) {
        if (data['isAdmin']) {
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('isAdmin', 'true');
            this.setLoggedInUserDetails(data);
            this.router.navigateByUrl('/home');
        }
        else if (data) {
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('isAdmin', 'false');
            this.setLoggedInUserDetails(data);
            this.router.navigateByUrl('/home');
        }
        else {
            localStorage.removeItem('loggedIn');
            localStorage.removeItem('isAdmin');
            this.removeUserDetails();
            alert('invalid user, please enter correct username or password');
        }
    }
    removeUserDetails() {
        this.commonService.removeUserDetails();
    }
    setLoggedInUserDetails(userDetails) {
        const formattedUserDetails = {
            userName: userDetails.username,
            firstName: userDetails.firstName,
            middleName: userDetails.middleName,
            lastName: userDetails.lastName,
            address: userDetails.address,
            city: userDetails.city,
            state: userDetails.state,
            pincode: userDetails.pincode,
            isPractitioner: userDetails.isPractitioner,
            regNumber: userDetails.regNumber,
            phoneNumber: userDetails.phoneNumber,
            isAdmin: userDetails.isAdmin,
            _id: userDetails._id
        };
        this.commonService.setUserDetails(formattedUserDetails);
    }
    validateLoginDetails() {
        this.productService.validateLoginDetails(this.login).subscribe(data => {
            if (data && data['invalidUser']) {
                alert('incorrect credentials');
            }
            else {
                this.setPrivilegesOfUser(data);
            }
        });
    }
    keyPressEvent(event) {
        if (event.keyCode == 13) {
            this.validateLoginDetails();
        }
    }
    keyPressEventForCharacter(event) {
        const charCode = event.charCode || event.keyCode;
        const char = String.fromCharCode(charCode);
        if (!/^[a-zA-Z]*$/.test(char) && charCode !== 8) {
            event.preventDefault();
        }
    }
    setSignUpMode() {
        this.isSignUpMode = true;
    }
    setLoginMode() {
        this.isSignUpMode = false;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_product_service_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_common_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_address_address_service__WEBPACK_IMPORTED_MODULE_5__["AddressService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 31, vars: 18, consts: [[1, "login-panel-container", 3, "ngClass"], ["novalidate", ""], ["userForm", "ngForm"], ["class", "login-register", 4, "ngIf"], ["class", "form-group row field-container", 4, "ngIf"], [1, "form-group", "row", "field-container"], ["for", "username", 1, "col-3", "col-form-label"], [1, "col-9"], ["id", "username", "name", "username", "placeholder", "Enter your username", "type", "text", "required", "required", 1, "form-control", 3, "ngModel", "ngModelChange", "keypress"], ["for", "password", 1, "col-3", "col-form-label"], ["id", "password", "name", "password", "placeholder", "Enter your password", "type", "password", "required", "required", 1, "form-control", 3, "ngModel", "ngModelChange", "keypress"], [1, "form-group", "row"], [1, "offset-3", "col-9", "action-btns"], ["name", "submit", "type", "submit", 1, "btn", "btn-outline-customsecondary", "submit-btn", 3, "click"], ["class", "btn btn-outline login-btn", 3, "click", 4, "ngIf"], [1, "fa-light", "fa-arrow-right"], [1, "login-register"], ["name", "isPractitioner", "type", "checkbox", 1, "form-control", "justify-content-start", "practicener-checkbox", 3, "ngModel", "ngModelChange", "change"], ["for", "username", 1, "col-3", "col-form-label", "required"], ["id", "regNumber", "name", "regNumber", "placeholder", "Enter your Registration Number", "type", "text", 1, "form-control", 3, "ngModel", "ngClass", "required", "ngModelChange", "keypress"], ["regNumber", "ngModel"], ["id", "confirmPassword", "name", "confirmPassword", "placeholder", "Enter your password", "type", "password", "required", "required", 1, "form-control", 3, "ngModel", "ngModelChange", "keypress"], [1, "col-3", "col-form-label", "required"], [1, "col-9", "full-name-box"], [1, "col-md-4", "col-12", "firstNameField"], ["id", "firstName", "name", "firstName", "placeholder", "Enter your first name", "type", "text", "required", "", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange", "keypress"], ["firstNameInput", "ngModel"], [1, "col-md-4", "col-12", "firstNameField", "middleName"], ["id", "middleName", "name", "middleName", "placeholder", "Enter your middle name", "type", "text", "required", "required", 1, "form-control", 3, "ngModel", "ngModelChange", "keypress"], ["id", "lastName", "name", "lastName", "placeholder", "Enter your last name", "type", "text", "required", "required", "required", "", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange", "keypress"], ["lastNameInput", "ngModel"], ["id", "phoneNumber", "name", "phoneNumber", "placeholder", "Enter your Phone Number", "type", "text", "required", "required", 1, "form-control", 3, "ngModel", "ngModelChange", "keypress"], ["id", "address", "name", "address", "placeholder", "Enter your address", "type", "text", "required", "required", 1, "form-control", 3, "ngModel", "ngModelChange", "keypress"], ["id", "city", "name", "city", "placeholder", "Enter your City", "type", "text", "required", "required", 1, "form-control", 3, "ngModel", "ngModelChange", "keypress"], ["aria-placeholder", "Select State", "required", "required", 1, "form-control", 3, "ngModel", "ngModelChange", "onchange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["id", "pincode", "name", "pincode", "placeholder", "Enter your Pincode", "type", "text", "required", "required", 1, "form-control", 3, "ngModel", "ngModelChange", "keypress"], [1, "btn", "btn-outline", "login-btn", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_legend_3_Template, 2, 0, "legend", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_legend_4_Template, 2, 0, "legend", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_div_5_Template, 5, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LoginComponent_div_6_Template, 6, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) { return ctx.login.username = $event; })("keypress", function LoginComponent_Template_input_keypress_11_listener($event) { return ctx.keyPressEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_16_listener($event) { return ctx.login.password = $event; })("keypress", function LoginComponent_Template_input_keypress_16_listener($event) { return ctx.keyPressEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginComponent_div_17_Template, 5, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginComponent_div_18_Template, 12, 9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginComponent_div_19_Template, 5, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LoginComponent_div_20_Template, 5, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LoginComponent_div_21_Template, 5, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, LoginComponent_div_22_Template, 6, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, LoginComponent_div_23_Template, 5, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.loginToApplication(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, LoginComponent_button_28_Template, 2, 0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, LoginComponent_button_29_Template, 2, 0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 15);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c1, ctx.isSignUpMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSignUpMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSignUpMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSignUpMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSignUpMode && ctx.login.isPractitioner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.login.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.login.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSignUpMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSignUpMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSignUpMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSignUpMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSignUpMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSignUpMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSignUpMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSignUpMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSignUpMode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"]], styles: [".input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 15px;\n  border-top-left-radius: 15px;\n}\n.input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  border-bottom-right-radius: 15px;\n  border-top-right-radius: 15px;\n}\n.btn-full-width[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n.edit-icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n@media only screen and (max-width: 768px) {\n  .edit-icon[_ngcontent-%COMP%] {\n    margin-right: 15px;\n  }\n}\n.delete-icon[_ngcontent-%COMP%] {\n  color: #ce4545;\n}\n.no-padding[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n.no-padding-left[_ngcontent-%COMP%] {\n  padding-left: 0px !important;\n}\n.no-padding-right[_ngcontent-%COMP%] {\n  padding-right: 0px !important;\n}\n.empty-data[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.default-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n}\n.cart-container[_ngcontent-%COMP%] {\n  width: 64%;\n  margin: auto;\n  padding: 10px;\n}\n@media only screen and (max-width: 768px) {\n  .cart-container[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n.cart-container[_ngcontent-%COMP%]   .product-ordered-datecontainer[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.cart-container[_ngcontent-%COMP%]   .product-ordered-datecontainer[_ngcontent-%COMP%]   .ordered-date[_ngcontent-%COMP%] {\n  background-color: #ad974f !important;\n  color: #fff !important;\n  border-radius: 20px;\n  padding: 5px;\n}\n.cart-container[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  padding-top: 15px;\n  box-shadow: 0px 0px 2px 2px gainsboro;\n  background: #e3dfce;\n  border-radius: 20px;\n}\n.cart-container[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%] {\n  color: #313e24 !important;\n  border: solid 1px #ad974f;\n  border-radius: 15px;\n  padding: 5px;\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n.cart-container[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .phone-number[_ngcontent-%COMP%] {\n  color: green !important;\n}\n@media only screen and (max-width: 768px) {\n  .cart-container[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n.cart-container[_ngcontent-%COMP%]   .product-img-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  display: flex;\n}\n.cart-container[_ngcontent-%COMP%]   .product-img-container[_ngcontent-%COMP%]   .product-images[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  max-width: 100%;\n}\n.cart-container[_ngcontent-%COMP%]   .product-img-container[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.cart-container[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%] {\n  height: 250px;\n  width: 100%;\n  border: solid 1px #dcdcdc;\n  margin: auto auto 15px auto;\n  display: block;\n  border-top-right-radius: 20px;\n  border-top-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n}\n.cart-container[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%] {\n  float: right;\n}\n.cart-container[_ngcontent-%COMP%]   .cart-item-actionbtns[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.cart-container[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  color: #ad974f;\n  font-size: 18px;\n  font-weight: 800;\n  text-transform: capitalize;\n}\n.cart-container[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%] {\n  color: #7e6e6e !important;\n  display: inline-block;\n  width: calc(100% - 30px);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 0;\n}\n.cart-container[_ngcontent-%COMP%]   .drug-quantity-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-family: sans-serif;\n}\n.cart-container[_ngcontent-%COMP%]   .drug-quantity-container[_ngcontent-%COMP%]   .drug-quantity-title[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  color: #313e24;\n}\n.cart-container[_ngcontent-%COMP%]   .drug-quantity-container[_ngcontent-%COMP%]   .drug-quantityvalue-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.cart-container[_ngcontent-%COMP%]   .drug-quantity-container[_ngcontent-%COMP%]   .drug-quantityvalue-container[_ngcontent-%COMP%]   .drug-quantity-value[_ngcontent-%COMP%] {\n  background: #313e24;\n  color: #fff;\n  padding: 6px 12px 6px 12px;\n  border-radius: 20px;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%]   .qty-input[_ngcontent-%COMP%] {\n  text-align: center;\n  background: #e3dfce;\n  border-color: #313e24;\n}\n@media screen and (min-width: 993px) and (max-width: 1500px) {\n  .cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%]   .quantity-fields-container[_ngcontent-%COMP%] {\n    flex-basis: 32% !important;\n    max-width: 32% !important;\n  }\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  width: 35px;\n  cursor: pointer;\n  background: #313e24;\n  color: #ad974f;\n  border: solid 1px #313e24;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-container[_ngcontent-%COMP%]   .quantity-title[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 16px;\n  margin-bottom: 10px;\n  color: #313e24;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-readonly-container[_ngcontent-%COMP%]   .quantity-value[_ngcontent-%COMP%] {\n  background-color: #ad974f;\n  color: #fff;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-readonly-container[_ngcontent-%COMP%]   .quantity-text[_ngcontent-%COMP%] {\n  color: #313e24;\n  font-weight: bold;\n}\n.cart-container[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%], .cart-container[_ngcontent-%COMP%]   .btn-outline-modal[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.product-price[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.product-price[_ngcontent-%COMP%]   .current-currency-symbol[_ngcontent-%COMP%] {\n  top: -4.25px;\n  font-size: 11px;\n  position: relative;\n}\n.product-price[_ngcontent-%COMP%]   .price-value[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-family: cursive;\n}\n@media only screen and (max-width: 768px) {\n  .product-price[_ngcontent-%COMP%]   .price-value[_ngcontent-%COMP%] {\n    font-family: sans-serif;\n  }\n}\n.btn-outline[_ngcontent-%COMP%], .btn-outline-modal[_ngcontent-%COMP%] {\n  color: #313e24;\n  background-color: #e3dfce;\n  border-color: #313e24;\n  font-weight: bold;\n  letter-spacing: 0.05em;\n  border-radius: 20px;\n  padding: 3px 10px !important;\n  cursor: pointer;\n}\n.btn-outline[_ngcontent-%COMP%]:active, .btn-outline-modal[_ngcontent-%COMP%]:active, .btn-outline[_ngcontent-%COMP%]:hover, .btn-outline-modal[_ngcontent-%COMP%]:hover, .btn-outline[_ngcontent-%COMP%]:focus, .btn-outline-modal[_ngcontent-%COMP%]:focus {\n  color: #313e24;\n  background-color: #e3dfce;\n  border-color: #313e24;\n}\n.btn-outline[_ngcontent-%COMP%]:active, .btn-outline-modal[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n}\n.btn-outline-customsecondary[_ngcontent-%COMP%], .btn-outline-removebtn[_ngcontent-%COMP%] {\n  color: #ad974f;\n  background-color: #313e24;\n  border-color: #ad974f;\n  font-weight: bold;\n  letter-spacing: 0.05em;\n  border-radius: 20px;\n  padding: 3px 10px !important;\n  box-shadow: 2px 2px gainsboro;\n  cursor: pointer;\n}\n.btn-outline-customsecondary[_ngcontent-%COMP%]:active, .btn-outline-removebtn[_ngcontent-%COMP%]:active, .btn-outline-customsecondary[_ngcontent-%COMP%]:hover, .btn-outline-removebtn[_ngcontent-%COMP%]:hover, .btn-outline-customsecondary[_ngcontent-%COMP%]:focus, .btn-outline-removebtn[_ngcontent-%COMP%]:focus {\n  color: #ad974f;\n  background-color: #313e24;\n  border-color: #ad974f;\n}\n.btn-outline-customsecondary[_ngcontent-%COMP%]:active, .btn-outline-removebtn[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n}\n.btn-color-1[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #004E64;\n  border-color: #004E64;\n  font-weight: bold;\n  letter-spacing: 0.05em;\n  border-radius: 0;\n}\n.btn-color-1[_ngcontent-%COMP%]:hover, .btn-color-1[_ngcontent-%COMP%]:active, .btn-color-1[_ngcontent-%COMP%]:focus {\n  background: #003D4F !important;\n  color: #fff !important;\n  border-color: #003D4F !important;\n}\n.btn-outline-removebtn[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 15px;\n  font-weight: 600;\n  z-index: 1000;\n  white-space: pre-wrap;\n  border: none !important;\n}\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  margin: -0.5rem -0.2rem -1rem auto !important;\n}\n  .modal-content {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  background-color: #e3dfce;\n}\n@media only screen and (max-width: 768px) {\n  .modal-body[_ngcontent-%COMP%] {\n    max-height: 580px;\n    overflow: auto;\n  }\n}\nbutton[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed !important;\n}\n.total-text[_ngcontent-%COMP%] {\n  font-weight: 600 !important;\n}\n.out-of-stock[_ngcontent-%COMP%]   .out-of-stock-text[_ngcontent-%COMP%] {\n  margin: auto;\n  text-transform: uppercase;\n  color: #fff;\n  background: #a90b0b;\n  border: solid 1px gainsboro;\n  border-radius: 20px;\n  padding: 6.5px 10px;\n}\n.page-heading[_ngcontent-%COMP%] {\n  text-align: center !important;\n  font-family: cursive;\n  margin-bottom: 15px !important;\n  color: #313e24;\n}\n@media only screen and (max-width: 768px) {\n  .page-heading[_ngcontent-%COMP%] {\n    font-family: sans-serif;\n  }\n}\n.hidden[_ngcontent-%COMP%] {\n  visibility: hidden !important;\n}\n@media only screen and (max-width: 768px) {\n    .alert-dismissible .close {\n    z-index: 0;\n  }\n}\n  .alert-info {\n  background-color: #313e24 !important;\n  color: #ad974f !important;\n  border-radius: 20px;\n}\n.kupipakwa[_ngcontent-%COMP%] {\n  background-image: url('kupipakwa.png');\n}\n.pottali[_ngcontent-%COMP%] {\n  background-image: url('pottali.png');\n}\n.khalviya[_ngcontent-%COMP%] {\n  background-image: url('khalviya.png');\n}\n@media screen and (min-width: 769px) {\n  .display-inline[_ngcontent-%COMP%] {\n    display: inline !important;\n  }\n}\n\n.pyro[_ngcontent-%COMP%] {\n  position: relative !important;\n  z-index: 999;\n}\n.pyro[_ngcontent-%COMP%]    > .before[_ngcontent-%COMP%], .pyro[_ngcontent-%COMP%]    > .after[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  box-shadow: 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff;\n  animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;\n}\n.pyro[_ngcontent-%COMP%]    > .after[_ngcontent-%COMP%] {\n  animation-delay: 1.25s, 1.25s, 1.25s;\n  animation-duration: 1.25s, 1.25s, 6.25s;\n}\n@keyframes bang {\n  to {\n    box-shadow: -189px -361.6666666667px #5100ff, -24px -406.6666666667px #ff0095, -204px -331.6666666667px #ff1e00, 212px 25.3333333333px #008cff, 128px 30.3333333333px #ff00fb, 4px 39.3333333333px #ff001a, -167px -257.6666666667px #00ffd5, 157px -217.6666666667px #33ff00, 142px -363.6666666667px #91ff00, 120px -314.6666666667px #ff001a, -175px -289.6666666667px #0084ff, -80px -386.6666666667px #a2ff00, -8px -367.6666666667px #ff00b3, 67px -273.6666666667px #4dff00, 36px -109.6666666667px #00ffea, 91px -328.6666666667px #aeff00, -1px -120.6666666667px #ff3300, 8px -169.6666666667px #26ff00, 240px -48.6666666667px lime, -245px -343.6666666667px #00fff7, 75px -64.6666666667px #00ffb3, 128px -201.6666666667px #0d00ff, 167px -247.6666666667px #2fff00, -77px -84.6666666667px #0011ff, -50px -85.6666666667px #9dff00, 75px -364.6666666667px #00ff5e, 194px -30.6666666667px #8400ff, -207px -103.6666666667px #ff7300, -150px 35.3333333333px #ffc400, -216px 33.3333333333px #a200ff, -33px -2.6666666667px #00aeff, -46px 17.3333333333px #55ff00, 169px 0.3333333333px #37ff00, 119px 67.3333333333px #cc00ff, 231px 62.3333333333px #00e1ff, -39px 1.3333333333px #80ff00, 3px 25.3333333333px fuchsia, -17px -238.6666666667px #00fbff, 6px -82.6666666667px #00ff33, 112px -379.6666666667px #000dff, 116px -180.6666666667px #0077ff, 155px 75.3333333333px #ff0044, 46px -222.6666666667px #9900ff, -189px -204.6666666667px #ff0d00, -83px -69.6666666667px #00ffe6, -12px -157.6666666667px #6fff00, 232px -20.6666666667px #ff0400, 137px -132.6666666667px #ff0015, 197px -39.6666666667px #ff002f, 193px -51.6666666667px #4dff00, -16px -274.6666666667px #000dff;\n  }\n}\n@keyframes gravity {\n  to {\n    transform: translateY(200px);\n    -moz-transform: translateY(200px);\n    -webkit-transform: translateY(200px);\n    -o-transform: translateY(200px);\n    -ms-transform: translateY(200px);\n    opacity: 0;\n  }\n}\n@keyframes position {\n  0%, 19.9% {\n    margin-top: 10%;\n    margin-left: 40%;\n  }\n  20%, 39.9% {\n    margin-top: 40%;\n    margin-left: 30%;\n  }\n  40%, 59.9% {\n    margin-top: 20%;\n    margin-left: 70%;\n  }\n  60%, 79.9% {\n    margin-top: 30%;\n    margin-left: 20%;\n  }\n  80%, 99.9% {\n    margin-top: 30%;\n    margin-left: 80%;\n  }\n}\n.switch-mode[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  cursor: pointer;\n}\n.btn-outline-modal[_ngcontent-%COMP%] {\n  padding: 5px 8px !important;\n}\n.arrowright-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.login-panel-container[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n.login-panel-container[_ngcontent-%COMP%]   .login-register[_ngcontent-%COMP%] {\n  background-color: #313e24;\n  color: #ad974f;\n  font-weight: bold;\n  padding: 10px 20px;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n.login-panel-container[_ngcontent-%COMP%]   .field-container[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n}\n.login-panel-container[_ngcontent-%COMP%]   .action-btns[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.login-panel-container[_ngcontent-%COMP%]   .action-btns[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 10px !important;\n}\n.login-panel-container[_ngcontent-%COMP%]   .action-btns[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  padding-top: 4px !important;\n  padding-bottom: 4px !important;\n}\n.login-panel-container[_ngcontent-%COMP%]   .practicener-checkbox[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 30px;\n}\n.registrationBox[_ngcontent-%COMP%] {\n  width: 60%;\n}\n.registrationBox[_ngcontent-%COMP%]   .full-name-box[_ngcontent-%COMP%] {\n  padding: 0;\n}\n@media only screen and (max-width: 768px) {\n  .registrationBox[_ngcontent-%COMP%]   .full-name-box[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.registrationBox[_ngcontent-%COMP%]   .full-name-box[_ngcontent-%COMP%]   .firstNameField[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.registrationBox[_ngcontent-%COMP%]   .full-name-box[_ngcontent-%COMP%]   .middleName[_ngcontent-%COMP%] {\n  margin: 5px 0px 5px 0px;\n}\n.required[_ngcontent-%COMP%]:after {\n  content: \" *\";\n  color: red;\n}\n.is-invalid[_ngcontent-%COMP%] {\n  border-color: red;\n  box-shadow: 0 0 5px red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tcGFuZWwvbG9naW4vRTpcXFVJIHByb2plY3RcXFJhc2FocmlkYXlcXENsaWVudF9FZGl0YWJsZVF1ZXN0aW9uc0Fuc3dlcnMvc3JjXFxhc3NldHNcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9hZG1pbi1wYW5lbC9sb2dpbi9FOlxcVUkgcHJvamVjdFxcUmFzYWhyaWRheVxcQ2xpZW50X0VkaXRhYmxlUXVlc3Rpb25zQW5zd2Vycy9zcmNcXGFzc2V0c1xcc2Nzc1xcY29tbW9uLnNjc3MiLCJzcmMvYXBwL2FkbWluLXBhbmVsL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi1wYW5lbC9sb2dpbi9FOlxcVUkgcHJvamVjdFxcUmFzYWhyaWRheVxcQ2xpZW50X0VkaXRhYmxlUXVlc3Rpb25zQW5zd2Vycy9zcmNcXGFwcFxcYWRtaW4tcGFuZWxcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3REEsaUJBQUE7QUNwREE7RUFDRSwrQkFBQTtFQUNBLDRCQUFBO0FDRkY7QURLQTtFQUNFLGdDQUFBO0VBQ0EsNkJBQUE7QUNGRjtBREtBO0VBQ0Usc0JBQUE7QUNGRjtBREtBO0VBQ0UsaUJBQUE7QUNGRjtBRElFO0VBSEY7SUFJSSxrQkFBQTtFQ0RGO0FBQ0Y7QURJQTtFQUNFLGNEUmtCO0FFT3BCO0FESUE7RUFDRSx1QkFBQTtBQ0RGO0FESUE7RUFDRSw0QkFBQTtBQ0RGO0FESUE7RUFDRSw2QkFBQTtBQ0RGO0FESUE7RUFDRSxrQkFBQTtBQ0RGO0FES0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0ZKO0FETUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNIRjtBREtFO0VBTEY7SUFNSSxVQUFBO0VDRkY7QUFDRjtBRElFO0VBQ0csbUJBQUE7QUNGTDtBREdJO0VBQ0Usb0NBQUE7RUFDQSxzQkFBQTtFQUNBLG1CRFZzQjtFQ1d0QixZQUFBO0FDRE47QURLRTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CRDNCMkI7RUM0QjNCLG1CQUFBO0FDSEo7QURLSTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDSE47QURLTTtFQUNFLHVCQUFBO0FDSFI7QURPSTtFQXBCRjtJQXFCSSxZQUFBO0VDSko7QUFDRjtBRE9FO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FDTEo7QURPSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0xOO0FEUUk7RUFDRSxZQUFBO0FDTk47QURVRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSw2QkQ3RHdCO0VDOER4Qiw0QkQ5RHdCO0VDK0R4QixnQ0QvRHdCO0VDZ0V4QiwrQkRoRXdCO0FFd0Q1QjtBRFlFO0VBQ0UsWUFBQTtBQ1ZKO0FEYUU7RUFDRyxnQkFBQTtFQUNBLG1CQUFBO0FDWEw7QURjRTtFQUNFLGNEdkY0QjtFQ3dGNUIsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUNaSjtBRGVFO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ2JKO0FEZ0JFO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtBQ2RKO0FEZ0JJO0VBQ0Usa0JBQUE7RUFDQSxjRDlHMEI7QUVnR2hDO0FEaUJJO0VBQ0ksbUJBQUE7QUNmUjtBRGlCUTtFQUNJLG1CRHJIb0I7RUNzSHBCLFdEaElZO0VDaUlaLDBCQUFBO0VBQ0EsbUJBQUE7QUNmWjtBRG9CRTtFQUNFLG1CQUFBO0FDbEJKO0FEb0JJO0VBQ0Usa0JBQUE7RUFDQSxtQkRoSXlCO0VDaUl6QixxQkRuSTBCO0FFaUhoQztBRHNCTztFQURIO0lBRU0sMEJBQUE7SUFDQSx5QkFBQTtFQ25CUjtBQUNGO0FEdUJJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkRqSndCO0VDa0p4QixjRGpKd0I7RUNrSnhCLHlCQUFBO0FDckJSO0FEd0JJO0VBQ0ksdUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjRDFKd0I7QUVvSWhDO0FEMkJJO0VBQ0UseUJEL0owQjtFQ2dLMUIsV0Q1Sm1CO0FFbUl6QjtBRDJCSTtFQUNFLGNEcEswQjtFQ3FLMUIsaUJBQUE7QUN6Qk47QUQ2QkU7RUFDRSxpQkFBQTtBQzNCSjtBRDBDQTtFQUNFLG1CQUFBO0FDdkNGO0FEeUNFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ3ZDSjtBRHlDRTtFQUNHLGVBQUE7RUFDQSxvQkFBQTtBQ3ZDTDtBRHlDSztFQUpIO0lBS0ksdUJBQUE7RUN0Q0o7QUFDRjtBRDBDQTtFQUNFLGNENU04QjtFQzZNOUIseUJEM002QjtFQzRNN0IscUJEOU04QjtFQytNOUIsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FDdkNGO0FEeUNFO0VBR0UsY0R4TjRCO0VDeU41Qix5QkR2TjJCO0VDd04zQixxQkQxTjRCO0FFaUxoQztBRDJDRTtFQUNFLDBCQUFBO0FDekNKO0FENkNBO0VBQ0UsY0RqTzhCO0VDa085Qix5QkRuTzhCO0VDb085QixxQkRuTzhCO0VDb085QixpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQzFDRjtBRDRDRTtFQUdFLGNEOU80QjtFQytPNUIseUJEaFA0QjtFQ2lQNUIscUJEaFA0QjtBRW9NaEM7QUQ4Q0U7RUFDRSwwQkFBQTtBQzVDSjtBRGlEQTtFQUNFLFdEdFNrQjtFQ3VTbEIseUJEOVFtQjtFQytRbkIscUJEL1FtQjtFQ2dSbkIsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDOUNGO0FEZ0RFO0VBR0UsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0FDaERKO0FEb0RBO0VBRUUsZUFBQTtBQ2xERjtBRDBEQTtFQUNFLHNCQUFBO0FDeERGO0FEMkRBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FDeERGO0FEMERFO0VBQ0UsNkNBQUE7QUN4REo7QUQ2REU7RUFDRSw0QkQ3UndCO0VDOFJ4Qiw2QkQ5UndCO0VDK1J4QiwrQkQvUndCO0VDZ1N4QixnQ0RoU3dCO0VDaVN4Qix5QkR6UzJCO0FFK08vQjtBRCtERTtFQURGO0lBRUksaUJBQUE7SUFDQSxjQUFBO0VDM0RGO0FBQ0Y7QUQ4REE7RUFDRSw4QkFBQTtBQzNERjtBRDhEQTtFQUNFLDJCQUFBO0FDM0RGO0FEK0RFO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0Q1VWtCO0VDNlVsQixtQkRyVXdCO0VDc1V4QiwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUM1RE47QURvRUE7RUFDRSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7RUFDQSxjRGxWOEI7QUVpUmhDO0FEbUVFO0VBTkY7SUFPSSx1QkFBQTtFQ2hFRjtBQUNGO0FEbUVBO0VBQ0UsNkJBQUE7QUNoRUY7QURzRU07RUFERjtJQUVJLFVBQUE7RUNsRU47QUFDRjtBRHFFRTtFQUNFLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkQ5VndCO0FFMlI1QjtBRHVFQTtFQUNFLHNDQUFBO0FDcEVGO0FEdUVBO0VBQ0Usb0NBQUE7QUNwRUY7QUR1RUE7RUFDRSxxQ0FBQTtBQ3BFRjtBRHdFRTtFQURGO0lBRU0sMEJBQUE7RUNwRUo7QUFDRjtBRHVFQSxpQ0FBQTtBQXFFQTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtBQ3hJRjtBRDJJQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHdnQkFsRWM7RUE2Q1osNEhBc0JpQjtBQ3BJckI7QUR1SUE7RUF6Q0ksb0NBMEN1QjtFQWxDdkIsdUNBbUMwQjtBQzVIOUI7QUR1RUk7RUF5REY7SUFDRSw2bURBakZXO0VDdkJiO0FBQ0Y7QUQ2Q0k7RUErREY7SUFqQ0UsNEJBa0NtQjtJQWpDbkIsaUNBaUNtQjtJQWhDbkIsb0NBZ0NtQjtJQS9CbkIsK0JBK0JtQjtJQTlCbkIsZ0NBOEJtQjtJQUNuQixVQUFBO0VDN0RGO0FBQ0Y7QURMSTtFQXNFRjtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQzBCRjtFRHhCQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQzBCRjtFRHhCQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQzBCRjtFRHhCQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQzBCRjtFRHhCQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQzBCRjtBQUNGO0FDNWpCQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBRDhqQko7QUMzakJBO0VBQ0ksMkJBQUE7QUQ4akJKO0FDM2pCQTtFQUNJLGVBQUE7QUQ4akJKO0FDM2pCQTtFQUNJLCtCSHVDd0I7RUd0Q3hCLGdDSHNDd0I7RUdyQ3hCLDRCSHFDd0I7RUdwQ3hCLDZCSG9Dd0I7QUUwaEI1QjtBQzdqQkk7RUFDSSx5Qkh3QndCO0VHdkJ4QixjSHdCd0I7RUd2QnhCLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Qkg4Qm9CO0VHN0JwQiw2Qkg2Qm9CO0FFa2lCNUI7QUM1akJJO0VBQ0ksaUJBQUE7QUQ4akJSO0FDMWpCUTtFQUNJLGlCQUFBO0FENGpCWjtBQ3pqQlE7RUFDSSw4QkF2Q3FCO0FEa21CakM7QUN4akJRO0VBQ0ksMkJBQUE7RUFDQSw4QkFBQTtBRDBqQlo7QUN0akJJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUR3akJSO0FDcGpCQTtFQUNJLFVBQUE7QUR1akJKO0FDcmpCSTtFQUNFLFVBQUE7QUR1akJOO0FDcmpCTTtFQUhGO0lBSUksY0FBQTtFRHdqQk47QUFDRjtBQ3RqQk07RUFDRSxxQkFBQTtBRHdqQlI7QUN0akJNO0VBQ0UsdUJBQUE7QUR3akJSO0FDcGpCRTtFQUNFLGFBQUE7RUFDQSxVQUFBO0FEdWpCSjtBQ3JqQkU7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0FEd2pCSiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXBhbmVsL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGhlYWRlci10aGVtZS1iYWNrZ3JvdW5kOiNmYmZiZmI7XHJcbiRoZWFkZXItdGhlbWUtY29sb3I6I2Q4NDMxNTtcclxuJGJ1dHRvbi10aGVtZS1iYWNrZ3JvdW5kOiNmMDdjMjk7XHJcbiRidXR0b24tdGhlbWUtY29sb3I6I2ZmZjtcclxuJHNlYXJjaEJ0bi10aGVtZS1iYWNrZ3JvdW5kOiMyOGE3NDU7XHJcbiRzZWFyY2hCdG4tdGhlbWUtY29sb3I6I2ZmZjtcclxuJHF1ZXN0aW9ucy10aGVtZS1jb2xvcjpibGFjaztcclxuJHNob3dIaWRlVG9nZ2xlSWNvbi1jb2xvcjojZjA3YzI5O1xyXG4kc2hvd0hpZGUtYnRuLWJhY2tncm91bmQ6d2hpdGU7XHJcbiRzaG93SGlkZS1idG4tY29sb3I6Z3JleTtcclxuJGJhY2tncm91bmQtaW1nOidiYWNrZ3JvdW5kLWltZy5wbmcnO1xyXG4kaW1nLXBhdGg6Jy4vYXNzZXRzL2ltYWdlcy8nO1xyXG4kZ29sZGVudGhlbWUtYmFja2dyb3VuZC1pbWc6ICdnb2xkZW50aGVtZS1iYWNrZ3JvdW5kLWltZy5wbmcnOyBcclxuJGJvZHktYmFja2dyb3VuZDogI2ZmZjtcclxuJHBhZ2UtY29udGFpbmVyLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4kcHJvZHVjdC1uYW1lLWNvbG9yOiMzMzM7XHJcbiRwcm9kdWN0LWRlc2NyaXB0aW9uLWNvbG9yOiM3ZTZlNmU7XHJcbiRjb250YWluZXItYm9yZGVyLWNvbG9yOiAjZGNkY2RjO1xyXG4kYnRuLWxpZ2h0ZGVmYXVsdC1ib3JkZXI6ICNkY2RjZGM7XHJcbiRkZWxldGUtaWNvbi1jb2xvcjogI2NlNDU0NTtcclxuJGJ0bi1kZWZhdWx0OiNmOGY5ZmE7IFxyXG4kY29uZmlybS1zdGF0dXMtYmFja2dyb3VuZDogYWxpY2VCbHVlO1xyXG4kY2hlY2staWNvbi1jb2xvcjogZ3JlZW47XHJcbiRwZW5kaW5nY2xvY2staWNvbi1jb2xvcjogIzU4YjZkNTtcclxuJHBlbmRpbmctc3RhdHVzLWJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbiRwcm9kdWN0LWhvdmVyLWJvcmRlcjogYmxhY2s7XHJcbiRnb2xkZW50aGVtZS1wcm9kdWN0LWhvdmVyOiAjZWVjZDVmO1xyXG4kYnRuLW91dGxpbmUtY29sb3I6ICM0ZmJmYTg7XHJcbiRidG4tb3V0bGluZS1jb2xvcjE6ICMwMDRFNjQ7XHJcbiRidG4tb3V0bGluZS1jb2xvcjEtYWN0aXZlOiAjMDAzRDRGO1xyXG4kY29udGFjdC11cy1mb290ZXI6ICNlZGYwZjU7XHJcbiRjb3B5cmlnaHQtZm9vdGVyOiAjMzEzZTI0O1xyXG4kZ29sZGVudGhlbWUtY29weXJpZ2h0LWZvb3RlcjogIzMxM2UyNDtcclxuJGNvbnRhY3QtdXMtZm9vdGVyY29sb3I6ICMyMTI1Mjk7XHJcbiRjb250YWN0dXMtbGlua2ljb24tY29sb3I6ICMwMDVjNTA7XHJcbiRjb250YWN0LXVzLWJvcmRlcjogZ2FpbnNib3JvO1xyXG4kYm94LXNoYWRvdy1jb2xvcjogZ2FpbnNib3JvO1xyXG4kYnRuLW91dGxpbmUtdGV4dGNvbG9yOiAjZmZmO1xyXG4kYnRuLW91dGxpbmVzZWNvbmRhcnktYm9yZGVyaG92ZXI6ICMwMDY0MDA7XHJcbiRidG4tb3V0bGluZS1iYWNrZ3JvdW5kaG92ZXI6ICMzZDhkN2M7XHJcbiRidG4tc2VhcmNoLWJhY2tncm91bmQ6ICMzNzdkNmU7IFxyXG4kaGVhZGVyLWJveC1zaGFkb3djb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuJGJ0bi1vdXRsaW5lLXJlbW92ZWJ0bjogaW5kaWFucmVkO1xyXG4kcGhvbmVudW1iZXItbGluay1jb2xvcjogZ3JlZW47XHJcbiRjYXJ0LXN0aWNreS1iYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG4kb3V0T2ZTdG9jay1iYWNrZ3JvdW5kLWNvbG9yOiAjYTkwYjBiO1xyXG4kY2FydC1pY29uLWNvbG9yOiAjYTkwYjBiO1xyXG4kZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ6ICMzMTNlMjQ7XHJcbiRnb2xkZW50aGVtZS1oZWFkZXJ0ZXh0LWNvbG9yOiAgI2FkOTc0ZjtcclxuJGdvbGRlbnRoZW1lLXBhbmVsLWJhY2tncm91bmQ6ICNlM2RmY2U7XHJcbiRnb2xkZW50aGVtZS1wcm9kdWN0ZGVzY3JpcHRpb24tY29sb3I6ICMyMzFmMjA7XHJcbiRnb2xkZW50aGVtZS1wcm9kdWN0ZGVzY3JpcHRpb24tY29sb3I6IzMzMztcclxuJGdvbGRlbnRoZW1lLWJhZGdlLXRleHQ6ICNmZmY7XHJcbiRnb2xkZW50aGVtZS1mb290ZXItY29sb3I6ICNiNWIxOTY7XHJcbiRnb2xkZW50aGVtZS1jb25maXJtbW9kYWwtYm9yZGVyY29sb3I6ICNjNGJhYmE7XHJcbiRnb2xkZW50aGVtZS1jYXJvdXNlbHRleHQtY29sb3I6ICNiZWI4OWM7XHJcbi8qIGNvbnN0IHZhbHVlcyAqL1xyXG4kZ29sZGVudGhlbWUtYm9yZGVyLXJhZGl1czogMjBweDsiLCJAaW1wb3J0IFwiLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuJGltZy1wYXRoOiAnfnNyYy9hc3NldHMvaW1hZ2VzLyc7XHJcblxyXG4lcXVhbnRpdHlidG4tbGVmdC1ib3JkZXJyYWRpdXMge1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcclxufVxyXG5cclxuJXF1YW50aXR5YnRuLXJpZ2h0LWJvcmRlcnJhZGl1cyB7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5idG4tZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmVkaXQtaWNvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbi5kZWxldGUtaWNvbiB7XHJcbiAgY29sb3I6ICRkZWxldGUtaWNvbi1jb2xvcjtcclxufVxyXG5cclxuLm5vLXBhZGRpbmcge1xyXG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubm8tcGFkZGluZy1sZWZ0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubm8tcGFkZGluZy1yaWdodCB7XHJcbiAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5lbXB0eS1kYXRhIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kZWZhdWx0LWltZy1jb250YWluZXIge1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNhcnQtY29udGFpbmVyIHtcclxuICB3aWR0aDogNjQlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxuXHJcbiAgLnByb2R1Y3Qtb3JkZXJlZC1kYXRlY29udGFpbmVyIHtcclxuICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgLm9yZGVyZWQtZGF0ZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXJ0ZXh0LWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiAkZ29sZGVudGhlbWUtYmFkZ2UtdGV4dCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAkZ29sZGVudGhlbWUtYm9yZGVyLXJhZGl1cztcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucHJvZHVjdC1pdGVtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IDJweCAkYm94LXNoYWRvdy1jb2xvcjtcclxuICAgIGJhY2tncm91bmQ6ICRnb2xkZW50aGVtZS1wYW5lbC1iYWNrZ3JvdW5kO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHJcbiAgICAudXNlci1kZXRhaWxzIHtcclxuICAgICAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXI6IHNvbGlkIDFweCAkZ29sZGVudGhlbWUtaGVhZGVydGV4dC1jb2xvcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgICAgIC5waG9uZS1udW1iZXIge1xyXG4gICAgICAgIGNvbG9yOiAkcGhvbmVudW1iZXItbGluay1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkgeyBcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnByb2R1Y3QtaW1nLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAucHJvZHVjdC1pbWFnZXMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZHVjdC1pbWcge1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1pbWcge1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggJGNvbnRhaW5lci1ib3JkZXItY29sb3I7XHJcbiAgICBtYXJnaW46IGF1dG8gYXV0byAxNXB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkZ29sZGVudGhlbWUtYm9yZGVyLXJhZGl1cztcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRnb2xkZW50aGVtZS1ib3JkZXItcmFkaXVzO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRnb2xkZW50aGVtZS1ib3JkZXItcmFkaXVzO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGdvbGRlbnRoZW1lLWJvcmRlci1yYWRpdXM7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC5hZGQtdG8tY2FydCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG5cclxuICAuY2FydC1pdGVtLWFjdGlvbmJ0bnMge1xyXG4gICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcblxyXG4gIC5wcm9kdWN0LW5hbWUge1xyXG4gICAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXJ0ZXh0LWNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIH1cclxuXHJcbiAgLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xyXG4gICAgY29sb3I6ICRwcm9kdWN0LWRlc2NyaXB0aW9uLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gIC5kcnVnLXF1YW50aXR5LWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcblxyXG4gICAgLmRydWctcXVhbnRpdHktdGl0bGUge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgIGNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZHJ1Zy1xdWFudGl0eXZhbHVlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBcclxuICAgICAgICAuZHJ1Zy1xdWFudGl0eS12YWx1ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICAgICAgICAgICAgY29sb3I6ICRidG4tb3V0bGluZS10ZXh0Y29sb3I7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxMnB4IDZweCAxMnB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnF1YW50aXR5LWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIFxyXG4gICAgLnF0eS1pbnB1dCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZDogJGdvbGRlbnRoZW1lLXBhbmVsLWJhY2tncm91bmQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kO1xyXG4gICAgfVxyXG5cclxuICAgIC5xdWFudGl0eS1maWVsZHMtY29udGFpbmVyIHtcclxuICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTkzcHgpIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpIHtcclxuICAgICAgICAgIGZsZXgtYmFzaXM6IDMyJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAzMiUgIWltcG9ydGFudDtcclxuICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgXHJcbiAgICAuaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICAgICAgICBjb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlcnRleHQtY29sb3I7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnF1YW50aXR5LXRpdGxlIHtcclxuICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBjb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICAucXVhbnRpdHktcmVhZG9ubHktY29udGFpbmVyIHtcclxuICAgIC5xdWFudGl0eS12YWx1ZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXJ0ZXh0LWNvbG9yO1xyXG4gICAgICBjb2xvcjogJGdvbGRlbnRoZW1lLWJhZGdlLXRleHQ7XHJcbiAgICB9XHJcbiAgICAucXVhbnRpdHktdGV4dCB7XHJcbiAgICAgIGNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJ0bi1vdXRsaW5lIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmlucHV0LWdyb3VwLXByZXBlbmQge1xyXG4gIC5pbnB1dC1ncm91cC10ZXh0IHtcclxuICAgICAgQGV4dGVuZCAlcXVhbnRpdHlidG4tbGVmdC1ib3JkZXJyYWRpdXM7XHJcbiAgfVxyXG59XHJcbi5pbnB1dC1ncm91cC1hcHBlbmQge1xyXG4gICAgLmlucHV0LWdyb3VwLXRleHQge1xyXG4gICAgICAgIEBleHRlbmQgJXF1YW50aXR5YnRuLXJpZ2h0LWJvcmRlcnJhZGl1cztcclxuICAgIH1cclxufVxyXG5cclxuLnByb2R1Y3QtcHJpY2Uge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gIC5jdXJyZW50LWN1cnJlbmN5LXN5bWJvbCB7XHJcbiAgICB0b3A6IC00LjI1cHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5wcmljZS12YWx1ZSB7XHJcbiAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG5cclxuICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lIHtcclxuICBjb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRnb2xkZW50aGVtZS1wYW5lbC1iYWNrZ3JvdW5kO1xyXG4gIGJvcmRlci1jb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiAzcHggMTBweCAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgJjphY3RpdmUsXHJcbiAgJjpob3ZlcixcclxuICAmOmZvY3VzIHtcclxuICAgIGNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ29sZGVudGhlbWUtcGFuZWwtYmFja2dyb3VuZDtcclxuICAgIGJvcmRlci1jb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kO1xyXG4gIH1cclxuICAmOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1jdXN0b21zZWNvbmRhcnkge1xyXG4gIGNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVydGV4dC1jb2xvcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVydGV4dC1jb2xvcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogM3B4IDEwcHggIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiAycHggMnB4ICRib3gtc2hhZG93LWNvbG9yO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBcclxuICAmOmFjdGl2ZSxcclxuICAmOmhvdmVyLFxyXG4gICY6Zm9jdXMge1xyXG4gICAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXJ0ZXh0LWNvbG9yO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVydGV4dC1jb2xvcjtcclxuICB9XHJcbiAgJjphY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmJ0bi1jb2xvci0xIHtcclxuICBjb2xvcjogJGJ1dHRvbi10aGVtZS1jb2xvcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnRuLW91dGxpbmUtY29sb3IxO1xyXG4gIGJvcmRlci1jb2xvcjogJGJ0bi1vdXRsaW5lLWNvbG9yMTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcblxyXG4gICY6aG92ZXIsXHJcbiAgJjphY3RpdmUsXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYnRuLW91dGxpbmUtY29sb3IxLWFjdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICRidXR0b24tdGhlbWUtY29sb3IgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogJGJ0bi1vdXRsaW5lLWNvbG9yMS1hY3RpdmUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1yZW1vdmVidG4ge1xyXG4gIEBleHRlbmQgLmJ0bi1vdXRsaW5lLWN1c3RvbXNlY29uZGFyeTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICY6YWN0aXZlLFxyXG4gICY6aG92ZXIsXHJcbiAgJjpmb2N1cyB7XHJcbiAgfVxyXG59XHJcblxyXG4uZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuXHJcbiAgLmNsb3NlIHtcclxuICAgIG1hcmdpbjogLTAuNXJlbSAtMC4ycmVtIC0xcmVtIGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCB7XHJcbiAgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJGdvbGRlbnRoZW1lLWJvcmRlci1yYWRpdXM7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJGdvbGRlbnRoZW1lLWJvcmRlci1yYWRpdXM7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkZ29sZGVudGhlbWUtYm9yZGVyLXJhZGl1cztcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkZ29sZGVudGhlbWUtYm9yZGVyLXJhZGl1cztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRnb2xkZW50aGVtZS1wYW5lbC1iYWNrZ3JvdW5kO1xyXG4gfVxyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgbWF4LWhlaWdodDogNTgwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbmJ1dHRvbltkaXNhYmxlZF0ge1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRvdGFsLXRleHQge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm91dC1vZi1zdG9jayB7XHJcbiAgLm91dC1vZi1zdG9jay10ZXh0IHtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBjb2xvcjogJGJ0bi1vdXRsaW5lLXRleHRjb2xvcjtcclxuICAgICAgYmFja2dyb3VuZDogJG91dE9mU3RvY2stYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggJGJveC1zaGFkb3ctY29sb3I7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDYuNXB4IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtbW9kYWwge1xyXG4gIEBleHRlbmQgLmJ0bi1vdXRsaW5lO1xyXG59XHJcblxyXG4ucGFnZS1oZWFkaW5nIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXItYmFja2dyb3VuZDtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgfVxyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICAuYWxlcnQtZGlzbWlzc2libGUge1xyXG4gICAgLmNsb3NlIHtcclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmFsZXJ0LWluZm8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlci1iYWNrZ3JvdW5kICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogJGdvbGRlbnRoZW1lLWhlYWRlcnRleHQtY29sb3IgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6ICRnb2xkZW50aGVtZS1ib3JkZXItcmFkaXVzO1xyXG4gfVxyXG59XHJcblxyXG4ua3VwaXBha3dhIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJGltZy1wYXRoICsgJ2t1cGlwYWt3YS5wbmcnKTtcclxufVxyXG5cclxuLnBvdHRhbGkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkaW1nLXBhdGggKyAncG90dGFsaS5wbmcnKTtcclxufVxyXG5cclxuLmtoYWx2aXlhIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJGltZy1wYXRoICsgJ2toYWx2aXlhLnBuZycpO1xyXG59XHJcblxyXG4uZGlzcGxheS1pbmxpbmUge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50OyBcclxuICB9XHJcbn1cclxuXHJcbi8qLS0tLWZpcmVjcmFja2VycyBhbmltYXRpb24gLS0tKi9cclxuJHBhcnRpY2xlczogNTA7XHJcbiR3aWR0aDogNTAwO1xyXG4kaGVpZ2h0OiA1MDA7XHJcblxyXG4vLyBDcmVhdGUgdGhlIGV4cGxvc2lvbi4uLlxyXG4kYm94LXNoYWRvdzogKCk7XHJcbiRib3gtc2hhZG93MjogKCk7XHJcbkBmb3IgJGkgZnJvbSAwIHRocm91Z2ggJHBhcnRpY2xlcyB7XHJcbiAgJGJveC1zaGFkb3c6ICRib3gtc2hhZG93LFxyXG4gICAgICAgICAgICAgICByYW5kb20oJHdpZHRoKS0kd2lkdGggLyAyICsgcHhcclxuICAgICAgICAgICAgICAgcmFuZG9tKCRoZWlnaHQpLSRoZWlnaHQgLyAxLjIgKyBweFxyXG4gICAgICAgICAgICAgICBoc2wocmFuZG9tKDM2MCksIDEwMCwgNTApO1xyXG4gICRib3gtc2hhZG93MjogJGJveC1zaGFkb3cyLCAwIDAgI2ZmZlxyXG59XHJcbkBtaXhpbiBrZXlmcmFtZXMgKCRhbmltYXRpb25OYW1lKSB7XHJcbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIEAtbW96LWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgQC1vLWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgQC1tcy1rZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIEBrZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gYW5pbWF0aW9uLWRlbGF5ICgkc2V0dGluZ3MpIHtcclxuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAkc2V0dGluZ3M7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogJHNldHRpbmdzO1xyXG4gICAgLW8tYW5pbWF0aW9uLWRlbGF5OiAkc2V0dGluZ3M7XHJcbiAgICAtbXMtYW5pbWF0aW9uLWRlbGF5OiAkc2V0dGluZ3M7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6ICRzZXR0aW5ncztcclxufVxyXG5cclxuQG1peGluIGFuaW1hdGlvbi1kdXJhdGlvbiAoJHNldHRpbmdzKSB7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogJHNldHRpbmdzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246ICRzZXR0aW5ncztcclxuICAgIC1vLWFuaW1hdGlvbi1kdXJhdGlvbjogJHNldHRpbmdzO1xyXG4gICAgLW1zLWFuaW1hdGlvbi1kdXJhdGlvbjogJHNldHRpbmdzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAkc2V0dGluZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiBhbmltYXRpb24gKCRzZXR0aW5ncykge1xyXG4gICAgLW1vei1hbmltYXRpb246ICRzZXR0aW5ncztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiAkc2V0dGluZ3M7XHJcbiAgICAtby1hbmltYXRpb246ICRzZXR0aW5ncztcclxuICAgIC1tcy1hbmltYXRpb246ICRzZXR0aW5ncztcclxuICAgIGFuaW1hdGlvbjogJHNldHRpbmdzO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNmb3JtICgkc2V0dGluZ3MpIHtcclxuICAgIHRyYW5zZm9ybTogJHNldHRpbmdzO1xyXG4gICAgLW1vei10cmFuc2Zvcm06ICRzZXR0aW5ncztcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiAkc2V0dGluZ3M7XHJcbiAgICAtby10cmFuc2Zvcm06ICRzZXR0aW5ncztcclxuICAgIC1tcy10cmFuc2Zvcm06ICRzZXR0aW5ncztcclxufVxyXG5cclxuLnB5cm8ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gIHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxuLnB5cm8gPiAuYmVmb3JlLCAucHlybyA+IC5hZnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA1cHg7XHJcbiAgaGVpZ2h0OiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJveC1zaGFkb3c6ICRib3gtc2hhZG93MjtcclxuICBAaW5jbHVkZSBhbmltYXRpb24oKDFzIGJhbmcgZWFzZS1vdXQgaW5maW5pdGUgYmFja3dhcmRzLCAxcyBncmF2aXR5IGVhc2UtaW4gaW5maW5pdGUgYmFja3dhcmRzLCA1cyBwb3NpdGlvbiBsaW5lYXIgaW5maW5pdGUgYmFja3dhcmRzKSk7XHJcbn1cclxuICAgIFxyXG4ucHlybyA+IC5hZnRlciB7XHJcbiAgQGluY2x1ZGUgYW5pbWF0aW9uLWRlbGF5KCgxLjI1cywgMS4yNXMsIDEuMjVzKSk7XHJcbiAgQGluY2x1ZGUgYW5pbWF0aW9uLWR1cmF0aW9uKCgxLjI1cywgMS4yNXMsIDYuMjVzKSk7XHJcbn1cclxuICAgICAgICBcclxuQGluY2x1ZGUga2V5ZnJhbWVzKGJhbmcpIHtcclxuICB0byB7XHJcbiAgICBib3gtc2hhZG93OiRib3gtc2hhZG93O1xyXG4gIH1cclxufVxyXG4gICAgXHJcbkBpbmNsdWRlIGtleWZyYW1lcyhncmF2aXR5KSAge1xyXG4gIHRvIHtcclxuICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGVZKDIwMHB4KSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG4gICAgXHJcbkBpbmNsdWRlIGtleWZyYW1lcyhwb3NpdGlvbikge1xyXG4gIDAlLCAxOS45JSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gIH1cclxuICAyMCUsIDM5LjklIHtcclxuICAgIG1hcmdpbi10b3A6IDQwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgfVxyXG4gIDQwJSwgNTkuOSUgeyAgXHJcbiAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNzAlXHJcbiAgfVxyXG4gIDYwJSwgNzkuOSUgeyAgXHJcbiAgICBtYXJnaW4tdG9wOiAzMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gIH1cclxuICA4MCUsIDk5LjklIHsgIFxyXG4gICAgbWFyZ2luLXRvcDogMzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcclxuICB9XHJcbn1cclxuXHJcbiIsIi8qIGNvbnN0IHZhbHVlcyAqL1xuLmlucHV0LWdyb3VwLXByZXBlbmQgLmlucHV0LWdyb3VwLXRleHQge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xufVxuXG4uaW5wdXQtZ3JvdXAtYXBwZW5kIC5pbnB1dC1ncm91cC10ZXh0IHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xufVxuXG4uYnRuLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uZWRpdC1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5lZGl0LWljb24ge1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgfVxufVxuXG4uZGVsZXRlLWljb24ge1xuICBjb2xvcjogI2NlNDU0NTtcbn1cblxuLm5vLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLm5vLXBhZGRpbmctbGVmdCB7XG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5uby1wYWRkaW5nLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5lbXB0eS1kYXRhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGVmYXVsdC1pbWctY29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmNhcnQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDY0JTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY2FydC1jb250YWluZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbn1cbi5jYXJ0LWNvbnRhaW5lciAucHJvZHVjdC1vcmRlcmVkLWRhdGVjb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmNhcnQtY29udGFpbmVyIC5wcm9kdWN0LW9yZGVyZWQtZGF0ZWNvbnRhaW5lciAub3JkZXJlZC1kYXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FkOTc0ZiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG4uY2FydC1jb250YWluZXIgLnByb2R1Y3QtaXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAycHggZ2FpbnNib3JvO1xuICBiYWNrZ3JvdW5kOiAjZTNkZmNlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLmNhcnQtY29udGFpbmVyIC5wcm9kdWN0LWl0ZW0gLnVzZXItZGV0YWlscyB7XG4gIGNvbG9yOiAjMzEzZTI0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogc29saWQgMXB4ICNhZDk3NGY7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY2FydC1jb250YWluZXIgLnByb2R1Y3QtaXRlbSAudXNlci1kZXRhaWxzIC5waG9uZS1udW1iZXIge1xuICBjb2xvcjogZ3JlZW4gIWltcG9ydGFudDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNhcnQtY29udGFpbmVyIC5wcm9kdWN0LWl0ZW0ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufVxuLmNhcnQtY29udGFpbmVyIC5wcm9kdWN0LWltZy1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNhcnQtY29udGFpbmVyIC5wcm9kdWN0LWltZy1jb250YWluZXIgLnByb2R1Y3QtaW1hZ2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4uY2FydC1jb250YWluZXIgLnByb2R1Y3QtaW1nLWNvbnRhaW5lciAucHJvZHVjdC1pbWcge1xuICBtYXJnaW46IGF1dG87XG59XG4uY2FydC1jb250YWluZXIgLnByb2R1Y3QtaW1nIHtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogc29saWQgMXB4ICNkY2RjZGM7XG4gIG1hcmdpbjogYXV0byBhdXRvIDE1cHggYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAuYWRkLXRvLWNhcnQge1xuICBmbG9hdDogcmlnaHQ7XG59XG4uY2FydC1jb250YWluZXIgLmNhcnQtaXRlbS1hY3Rpb25idG5zIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAucHJvZHVjdC1uYW1lIHtcbiAgY29sb3I6ICNhZDk3NGY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4uY2FydC1jb250YWluZXIgLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xuICBjb2xvcjogIzdlNmU2ZSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDA7XG59XG4uY2FydC1jb250YWluZXIgLmRydWctcXVhbnRpdHktY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG4uY2FydC1jb250YWluZXIgLmRydWctcXVhbnRpdHktY29udGFpbmVyIC5kcnVnLXF1YW50aXR5LXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBjb2xvcjogIzMxM2UyNDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAuZHJ1Zy1xdWFudGl0eS1jb250YWluZXIgLmRydWctcXVhbnRpdHl2YWx1ZS1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmNhcnQtY29udGFpbmVyIC5kcnVnLXF1YW50aXR5LWNvbnRhaW5lciAuZHJ1Zy1xdWFudGl0eXZhbHVlLWNvbnRhaW5lciAuZHJ1Zy1xdWFudGl0eS12YWx1ZSB7XG4gIGJhY2tncm91bmQ6ICMzMTNlMjQ7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA2cHggMTJweCA2cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAucXVhbnRpdHktY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5jYXJ0LWNvbnRhaW5lciAucXVhbnRpdHktY29udGFpbmVyIC5xdHktaW5wdXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNlM2RmY2U7XG4gIGJvcmRlci1jb2xvcjogIzMxM2UyNDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5M3B4KSBhbmQgKG1heC13aWR0aDogMTUwMHB4KSB7XG4gIC5jYXJ0LWNvbnRhaW5lciAucXVhbnRpdHktY29udGFpbmVyIC5xdWFudGl0eS1maWVsZHMtY29udGFpbmVyIHtcbiAgICBmbGV4LWJhc2lzOiAzMiUgIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDMyJSAhaW1wb3J0YW50O1xuICB9XG59XG4uY2FydC1jb250YWluZXIgLnF1YW50aXR5LWNvbnRhaW5lciAuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gIHdpZHRoOiAzNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICMzMTNlMjQ7XG4gIGNvbG9yOiAjYWQ5NzRmO1xuICBib3JkZXI6IHNvbGlkIDFweCAjMzEzZTI0O1xufVxuLmNhcnQtY29udGFpbmVyIC5xdWFudGl0eS1jb250YWluZXIgLnF1YW50aXR5LXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6ICMzMTNlMjQ7XG59XG4uY2FydC1jb250YWluZXIgLnF1YW50aXR5LXJlYWRvbmx5LWNvbnRhaW5lciAucXVhbnRpdHktdmFsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWQ5NzRmO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jYXJ0LWNvbnRhaW5lciAucXVhbnRpdHktcmVhZG9ubHktY29udGFpbmVyIC5xdWFudGl0eS10ZXh0IHtcbiAgY29sb3I6ICMzMTNlMjQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNhcnQtY29udGFpbmVyIC5idG4tb3V0bGluZSwgLmNhcnQtY29udGFpbmVyIC5idG4tb3V0bGluZS1tb2RhbCB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ucHJvZHVjdC1wcmljZSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ucHJvZHVjdC1wcmljZSAuY3VycmVudC1jdXJyZW5jeS1zeW1ib2wge1xuICB0b3A6IC00LjI1cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb2R1Y3QtcHJpY2UgLnByaWNlLXZhbHVlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnByb2R1Y3QtcHJpY2UgLnByaWNlLXZhbHVlIHtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgfVxufVxuXG4uYnRuLW91dGxpbmUsIC5idG4tb3V0bGluZS1tb2RhbCB7XG4gIGNvbG9yOiAjMzEzZTI0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkZmNlO1xuICBib3JkZXItY29sb3I6ICMzMTNlMjQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAzcHggMTBweCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYnRuLW91dGxpbmU6YWN0aXZlLCAuYnRuLW91dGxpbmUtbW9kYWw6YWN0aXZlLCAuYnRuLW91dGxpbmU6aG92ZXIsIC5idG4tb3V0bGluZS1tb2RhbDpob3ZlciwgLmJ0bi1vdXRsaW5lOmZvY3VzLCAuYnRuLW91dGxpbmUtbW9kYWw6Zm9jdXMge1xuICBjb2xvcjogIzMxM2UyNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZGZjZTtcbiAgYm9yZGVyLWNvbG9yOiAjMzEzZTI0O1xufVxuLmJ0bi1vdXRsaW5lOmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLW1vZGFsOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xufVxuXG4uYnRuLW91dGxpbmUtY3VzdG9tc2Vjb25kYXJ5LCAuYnRuLW91dGxpbmUtcmVtb3ZlYnRuIHtcbiAgY29sb3I6ICNhZDk3NGY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTNlMjQ7XG4gIGJvcmRlci1jb2xvcjogI2FkOTc0ZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDNweCAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDJweCAycHggZ2FpbnNib3JvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYnRuLW91dGxpbmUtY3VzdG9tc2Vjb25kYXJ5OmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLXJlbW92ZWJ0bjphY3RpdmUsIC5idG4tb3V0bGluZS1jdXN0b21zZWNvbmRhcnk6aG92ZXIsIC5idG4tb3V0bGluZS1yZW1vdmVidG46aG92ZXIsIC5idG4tb3V0bGluZS1jdXN0b21zZWNvbmRhcnk6Zm9jdXMsIC5idG4tb3V0bGluZS1yZW1vdmVidG46Zm9jdXMge1xuICBjb2xvcjogI2FkOTc0ZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxM2UyNDtcbiAgYm9yZGVyLWNvbG9yOiAjYWQ5NzRmO1xufVxuLmJ0bi1vdXRsaW5lLWN1c3RvbXNlY29uZGFyeTphY3RpdmUsIC5idG4tb3V0bGluZS1yZW1vdmVidG46YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG59XG5cbi5idG4tY29sb3ItMSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0RTY0O1xuICBib3JkZXItY29sb3I6ICMwMDRFNjQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmJ0bi1jb2xvci0xOmhvdmVyLCAuYnRuLWNvbG9yLTE6YWN0aXZlLCAuYnRuLWNvbG9yLTE6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjMDAzRDRGICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzAwM0Q0RiAhaW1wb3J0YW50O1xufVxuXG4uYnRuLW91dGxpbmUtcmVtb3ZlYnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB6LWluZGV4OiAxMDAwO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xuICBtYXJnaW46IC0wLjVyZW0gLTAuMnJlbSAtMXJlbSBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubW9kYWwtY29udGVudCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZGZjZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubW9kYWwtYm9keSB7XG4gICAgbWF4LWhlaWdodDogNTgwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cbn1cblxuYnV0dG9uW2Rpc2FibGVkXSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcbn1cblxuLnRvdGFsLXRleHQge1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG59XG5cbi5vdXQtb2Ytc3RvY2sgLm91dC1vZi1zdG9jay10ZXh0IHtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogI2E5MGIwYjtcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ2FpbnNib3JvO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiA2LjVweCAxMHB4O1xufVxuXG4ucGFnZS1oZWFkaW5nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMzEzZTI0O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucGFnZS1oZWFkaW5nIHtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgfVxufVxuXG4uaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgOjpuZy1kZWVwIC5hbGVydC1kaXNtaXNzaWJsZSAuY2xvc2Uge1xuICAgIHotaW5kZXg6IDA7XG4gIH1cbn1cbjo6bmctZGVlcCAuYWxlcnQtaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTNlMjQgIWltcG9ydGFudDtcbiAgY29sb3I6ICNhZDk3NGYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmt1cGlwYWt3YSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIn5zcmMvYXNzZXRzL2ltYWdlcy9rdXBpcGFrd2EucG5nXCIpO1xufVxuXG4ucG90dGFsaSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIn5zcmMvYXNzZXRzL2ltYWdlcy9wb3R0YWxpLnBuZ1wiKTtcbn1cblxuLmtoYWx2aXlhIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwifnNyYy9hc3NldHMvaW1hZ2VzL2toYWx2aXlhLnBuZ1wiKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgLmRpc3BsYXktaW5saW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vKi0tLS1maXJlY3JhY2tlcnMgYW5pbWF0aW9uIC0tLSovXG4ucHlybyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk7XG59XG5cbi5weXJvID4gLmJlZm9yZSwgLnB5cm8gPiAuYWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmY7XG4gIC1tb3otYW5pbWF0aW9uOiAxcyBiYW5nIGVhc2Utb3V0IGluZmluaXRlIGJhY2t3YXJkcywgMXMgZ3Jhdml0eSBlYXNlLWluIGluZmluaXRlIGJhY2t3YXJkcywgNXMgcG9zaXRpb24gbGluZWFyIGluZmluaXRlIGJhY2t3YXJkcztcbiAgLXdlYmtpdC1hbmltYXRpb246IDFzIGJhbmcgZWFzZS1vdXQgaW5maW5pdGUgYmFja3dhcmRzLCAxcyBncmF2aXR5IGVhc2UtaW4gaW5maW5pdGUgYmFja3dhcmRzLCA1cyBwb3NpdGlvbiBsaW5lYXIgaW5maW5pdGUgYmFja3dhcmRzO1xuICAtby1hbmltYXRpb246IDFzIGJhbmcgZWFzZS1vdXQgaW5maW5pdGUgYmFja3dhcmRzLCAxcyBncmF2aXR5IGVhc2UtaW4gaW5maW5pdGUgYmFja3dhcmRzLCA1cyBwb3NpdGlvbiBsaW5lYXIgaW5maW5pdGUgYmFja3dhcmRzO1xuICAtbXMtYW5pbWF0aW9uOiAxcyBiYW5nIGVhc2Utb3V0IGluZmluaXRlIGJhY2t3YXJkcywgMXMgZ3Jhdml0eSBlYXNlLWluIGluZmluaXRlIGJhY2t3YXJkcywgNXMgcG9zaXRpb24gbGluZWFyIGluZmluaXRlIGJhY2t3YXJkcztcbiAgYW5pbWF0aW9uOiAxcyBiYW5nIGVhc2Utb3V0IGluZmluaXRlIGJhY2t3YXJkcywgMXMgZ3Jhdml0eSBlYXNlLWluIGluZmluaXRlIGJhY2t3YXJkcywgNXMgcG9zaXRpb24gbGluZWFyIGluZmluaXRlIGJhY2t3YXJkcztcbn1cblxuLnB5cm8gPiAuYWZ0ZXIge1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMS4yNXMsIDEuMjVzLCAxLjI1cztcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEuMjVzLCAxLjI1cywgMS4yNXM7XG4gIC1vLWFuaW1hdGlvbi1kZWxheTogMS4yNXMsIDEuMjVzLCAxLjI1cztcbiAgLW1zLWFuaW1hdGlvbi1kZWxheTogMS4yNXMsIDEuMjVzLCAxLjI1cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjI1cywgMS4yNXMsIDEuMjVzO1xuICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogMS4yNXMsIDEuMjVzLCA2LjI1cztcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuMjVzLCAxLjI1cywgNi4yNXM7XG4gIC1vLWFuaW1hdGlvbi1kdXJhdGlvbjogMS4yNXMsIDEuMjVzLCA2LjI1cztcbiAgLW1zLWFuaW1hdGlvbi1kdXJhdGlvbjogMS4yNXMsIDEuMjVzLCA2LjI1cztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjI1cywgMS4yNXMsIDYuMjVzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmFuZyB7XG4gIHRvIHtcbiAgICBib3gtc2hhZG93OiAtMTg5cHggLTM2MS42NjY2NjY2NjY3cHggIzUxMDBmZiwgLTI0cHggLTQwNi42NjY2NjY2NjY3cHggI2ZmMDA5NSwgLTIwNHB4IC0zMzEuNjY2NjY2NjY2N3B4ICNmZjFlMDAsIDIxMnB4IDI1LjMzMzMzMzMzMzNweCAjMDA4Y2ZmLCAxMjhweCAzMC4zMzMzMzMzMzMzcHggI2ZmMDBmYiwgNHB4IDM5LjMzMzMzMzMzMzNweCAjZmYwMDFhLCAtMTY3cHggLTI1Ny42NjY2NjY2NjY3cHggIzAwZmZkNSwgMTU3cHggLTIxNy42NjY2NjY2NjY3cHggIzMzZmYwMCwgMTQycHggLTM2My42NjY2NjY2NjY3cHggIzkxZmYwMCwgMTIwcHggLTMxNC42NjY2NjY2NjY3cHggI2ZmMDAxYSwgLTE3NXB4IC0yODkuNjY2NjY2NjY2N3B4ICMwMDg0ZmYsIC04MHB4IC0zODYuNjY2NjY2NjY2N3B4ICNhMmZmMDAsIC04cHggLTM2Ny42NjY2NjY2NjY3cHggI2ZmMDBiMywgNjdweCAtMjczLjY2NjY2NjY2NjdweCAjNGRmZjAwLCAzNnB4IC0xMDkuNjY2NjY2NjY2N3B4ICMwMGZmZWEsIDkxcHggLTMyOC42NjY2NjY2NjY3cHggI2FlZmYwMCwgLTFweCAtMTIwLjY2NjY2NjY2NjdweCAjZmYzMzAwLCA4cHggLTE2OS42NjY2NjY2NjY3cHggIzI2ZmYwMCwgMjQwcHggLTQ4LjY2NjY2NjY2NjdweCBsaW1lLCAtMjQ1cHggLTM0My42NjY2NjY2NjY3cHggIzAwZmZmNywgNzVweCAtNjQuNjY2NjY2NjY2N3B4ICMwMGZmYjMsIDEyOHB4IC0yMDEuNjY2NjY2NjY2N3B4ICMwZDAwZmYsIDE2N3B4IC0yNDcuNjY2NjY2NjY2N3B4ICMyZmZmMDAsIC03N3B4IC04NC42NjY2NjY2NjY3cHggIzAwMTFmZiwgLTUwcHggLTg1LjY2NjY2NjY2NjdweCAjOWRmZjAwLCA3NXB4IC0zNjQuNjY2NjY2NjY2N3B4ICMwMGZmNWUsIDE5NHB4IC0zMC42NjY2NjY2NjY3cHggIzg0MDBmZiwgLTIwN3B4IC0xMDMuNjY2NjY2NjY2N3B4ICNmZjczMDAsIC0xNTBweCAzNS4zMzMzMzMzMzMzcHggI2ZmYzQwMCwgLTIxNnB4IDMzLjMzMzMzMzMzMzNweCAjYTIwMGZmLCAtMzNweCAtMi42NjY2NjY2NjY3cHggIzAwYWVmZiwgLTQ2cHggMTcuMzMzMzMzMzMzM3B4ICM1NWZmMDAsIDE2OXB4IDAuMzMzMzMzMzMzM3B4ICMzN2ZmMDAsIDExOXB4IDY3LjMzMzMzMzMzMzNweCAjY2MwMGZmLCAyMzFweCA2Mi4zMzMzMzMzMzMzcHggIzAwZTFmZiwgLTM5cHggMS4zMzMzMzMzMzMzcHggIzgwZmYwMCwgM3B4IDI1LjMzMzMzMzMzMzNweCBmdWNoc2lhLCAtMTdweCAtMjM4LjY2NjY2NjY2NjdweCAjMDBmYmZmLCA2cHggLTgyLjY2NjY2NjY2NjdweCAjMDBmZjMzLCAxMTJweCAtMzc5LjY2NjY2NjY2NjdweCAjMDAwZGZmLCAxMTZweCAtMTgwLjY2NjY2NjY2NjdweCAjMDA3N2ZmLCAxNTVweCA3NS4zMzMzMzMzMzMzcHggI2ZmMDA0NCwgNDZweCAtMjIyLjY2NjY2NjY2NjdweCAjOTkwMGZmLCAtMTg5cHggLTIwNC42NjY2NjY2NjY3cHggI2ZmMGQwMCwgLTgzcHggLTY5LjY2NjY2NjY2NjdweCAjMDBmZmU2LCAtMTJweCAtMTU3LjY2NjY2NjY2NjdweCAjNmZmZjAwLCAyMzJweCAtMjAuNjY2NjY2NjY2N3B4ICNmZjA0MDAsIDEzN3B4IC0xMzIuNjY2NjY2NjY2N3B4ICNmZjAwMTUsIDE5N3B4IC0zOS42NjY2NjY2NjY3cHggI2ZmMDAyZiwgMTkzcHggLTUxLjY2NjY2NjY2NjdweCAjNGRmZjAwLCAtMTZweCAtMjc0LjY2NjY2NjY2NjdweCAjMDAwZGZmO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgYmFuZyB7XG4gIHRvIHtcbiAgICBib3gtc2hhZG93OiAtMTg5cHggLTM2MS42NjY2NjY2NjY3cHggIzUxMDBmZiwgLTI0cHggLTQwNi42NjY2NjY2NjY3cHggI2ZmMDA5NSwgLTIwNHB4IC0zMzEuNjY2NjY2NjY2N3B4ICNmZjFlMDAsIDIxMnB4IDI1LjMzMzMzMzMzMzNweCAjMDA4Y2ZmLCAxMjhweCAzMC4zMzMzMzMzMzMzcHggI2ZmMDBmYiwgNHB4IDM5LjMzMzMzMzMzMzNweCAjZmYwMDFhLCAtMTY3cHggLTI1Ny42NjY2NjY2NjY3cHggIzAwZmZkNSwgMTU3cHggLTIxNy42NjY2NjY2NjY3cHggIzMzZmYwMCwgMTQycHggLTM2My42NjY2NjY2NjY3cHggIzkxZmYwMCwgMTIwcHggLTMxNC42NjY2NjY2NjY3cHggI2ZmMDAxYSwgLTE3NXB4IC0yODkuNjY2NjY2NjY2N3B4ICMwMDg0ZmYsIC04MHB4IC0zODYuNjY2NjY2NjY2N3B4ICNhMmZmMDAsIC04cHggLTM2Ny42NjY2NjY2NjY3cHggI2ZmMDBiMywgNjdweCAtMjczLjY2NjY2NjY2NjdweCAjNGRmZjAwLCAzNnB4IC0xMDkuNjY2NjY2NjY2N3B4ICMwMGZmZWEsIDkxcHggLTMyOC42NjY2NjY2NjY3cHggI2FlZmYwMCwgLTFweCAtMTIwLjY2NjY2NjY2NjdweCAjZmYzMzAwLCA4cHggLTE2OS42NjY2NjY2NjY3cHggIzI2ZmYwMCwgMjQwcHggLTQ4LjY2NjY2NjY2NjdweCBsaW1lLCAtMjQ1cHggLTM0My42NjY2NjY2NjY3cHggIzAwZmZmNywgNzVweCAtNjQuNjY2NjY2NjY2N3B4ICMwMGZmYjMsIDEyOHB4IC0yMDEuNjY2NjY2NjY2N3B4ICMwZDAwZmYsIDE2N3B4IC0yNDcuNjY2NjY2NjY2N3B4ICMyZmZmMDAsIC03N3B4IC04NC42NjY2NjY2NjY3cHggIzAwMTFmZiwgLTUwcHggLTg1LjY2NjY2NjY2NjdweCAjOWRmZjAwLCA3NXB4IC0zNjQuNjY2NjY2NjY2N3B4ICMwMGZmNWUsIDE5NHB4IC0zMC42NjY2NjY2NjY3cHggIzg0MDBmZiwgLTIwN3B4IC0xMDMuNjY2NjY2NjY2N3B4ICNmZjczMDAsIC0xNTBweCAzNS4zMzMzMzMzMzMzcHggI2ZmYzQwMCwgLTIxNnB4IDMzLjMzMzMzMzMzMzNweCAjYTIwMGZmLCAtMzNweCAtMi42NjY2NjY2NjY3cHggIzAwYWVmZiwgLTQ2cHggMTcuMzMzMzMzMzMzM3B4ICM1NWZmMDAsIDE2OXB4IDAuMzMzMzMzMzMzM3B4ICMzN2ZmMDAsIDExOXB4IDY3LjMzMzMzMzMzMzNweCAjY2MwMGZmLCAyMzFweCA2Mi4zMzMzMzMzMzMzcHggIzAwZTFmZiwgLTM5cHggMS4zMzMzMzMzMzMzcHggIzgwZmYwMCwgM3B4IDI1LjMzMzMzMzMzMzNweCBmdWNoc2lhLCAtMTdweCAtMjM4LjY2NjY2NjY2NjdweCAjMDBmYmZmLCA2cHggLTgyLjY2NjY2NjY2NjdweCAjMDBmZjMzLCAxMTJweCAtMzc5LjY2NjY2NjY2NjdweCAjMDAwZGZmLCAxMTZweCAtMTgwLjY2NjY2NjY2NjdweCAjMDA3N2ZmLCAxNTVweCA3NS4zMzMzMzMzMzMzcHggI2ZmMDA0NCwgNDZweCAtMjIyLjY2NjY2NjY2NjdweCAjOTkwMGZmLCAtMTg5cHggLTIwNC42NjY2NjY2NjY3cHggI2ZmMGQwMCwgLTgzcHggLTY5LjY2NjY2NjY2NjdweCAjMDBmZmU2LCAtMTJweCAtMTU3LjY2NjY2NjY2NjdweCAjNmZmZjAwLCAyMzJweCAtMjAuNjY2NjY2NjY2N3B4ICNmZjA0MDAsIDEzN3B4IC0xMzIuNjY2NjY2NjY2N3B4ICNmZjAwMTUsIDE5N3B4IC0zOS42NjY2NjY2NjY3cHggI2ZmMDAyZiwgMTkzcHggLTUxLjY2NjY2NjY2NjdweCAjNGRmZjAwLCAtMTZweCAtMjc0LjY2NjY2NjY2NjdweCAjMDAwZGZmO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIGJhbmcge1xuICB0byB7XG4gICAgYm94LXNoYWRvdzogLTE4OXB4IC0zNjEuNjY2NjY2NjY2N3B4ICM1MTAwZmYsIC0yNHB4IC00MDYuNjY2NjY2NjY2N3B4ICNmZjAwOTUsIC0yMDRweCAtMzMxLjY2NjY2NjY2NjdweCAjZmYxZTAwLCAyMTJweCAyNS4zMzMzMzMzMzMzcHggIzAwOGNmZiwgMTI4cHggMzAuMzMzMzMzMzMzM3B4ICNmZjAwZmIsIDRweCAzOS4zMzMzMzMzMzMzcHggI2ZmMDAxYSwgLTE2N3B4IC0yNTcuNjY2NjY2NjY2N3B4ICMwMGZmZDUsIDE1N3B4IC0yMTcuNjY2NjY2NjY2N3B4ICMzM2ZmMDAsIDE0MnB4IC0zNjMuNjY2NjY2NjY2N3B4ICM5MWZmMDAsIDEyMHB4IC0zMTQuNjY2NjY2NjY2N3B4ICNmZjAwMWEsIC0xNzVweCAtMjg5LjY2NjY2NjY2NjdweCAjMDA4NGZmLCAtODBweCAtMzg2LjY2NjY2NjY2NjdweCAjYTJmZjAwLCAtOHB4IC0zNjcuNjY2NjY2NjY2N3B4ICNmZjAwYjMsIDY3cHggLTI3My42NjY2NjY2NjY3cHggIzRkZmYwMCwgMzZweCAtMTA5LjY2NjY2NjY2NjdweCAjMDBmZmVhLCA5MXB4IC0zMjguNjY2NjY2NjY2N3B4ICNhZWZmMDAsIC0xcHggLTEyMC42NjY2NjY2NjY3cHggI2ZmMzMwMCwgOHB4IC0xNjkuNjY2NjY2NjY2N3B4ICMyNmZmMDAsIDI0MHB4IC00OC42NjY2NjY2NjY3cHggbGltZSwgLTI0NXB4IC0zNDMuNjY2NjY2NjY2N3B4ICMwMGZmZjcsIDc1cHggLTY0LjY2NjY2NjY2NjdweCAjMDBmZmIzLCAxMjhweCAtMjAxLjY2NjY2NjY2NjdweCAjMGQwMGZmLCAxNjdweCAtMjQ3LjY2NjY2NjY2NjdweCAjMmZmZjAwLCAtNzdweCAtODQuNjY2NjY2NjY2N3B4ICMwMDExZmYsIC01MHB4IC04NS42NjY2NjY2NjY3cHggIzlkZmYwMCwgNzVweCAtMzY0LjY2NjY2NjY2NjdweCAjMDBmZjVlLCAxOTRweCAtMzAuNjY2NjY2NjY2N3B4ICM4NDAwZmYsIC0yMDdweCAtMTAzLjY2NjY2NjY2NjdweCAjZmY3MzAwLCAtMTUwcHggMzUuMzMzMzMzMzMzM3B4ICNmZmM0MDAsIC0yMTZweCAzMy4zMzMzMzMzMzMzcHggI2EyMDBmZiwgLTMzcHggLTIuNjY2NjY2NjY2N3B4ICMwMGFlZmYsIC00NnB4IDE3LjMzMzMzMzMzMzNweCAjNTVmZjAwLCAxNjlweCAwLjMzMzMzMzMzMzNweCAjMzdmZjAwLCAxMTlweCA2Ny4zMzMzMzMzMzMzcHggI2NjMDBmZiwgMjMxcHggNjIuMzMzMzMzMzMzM3B4ICMwMGUxZmYsIC0zOXB4IDEuMzMzMzMzMzMzM3B4ICM4MGZmMDAsIDNweCAyNS4zMzMzMzMzMzMzcHggZnVjaHNpYSwgLTE3cHggLTIzOC42NjY2NjY2NjY3cHggIzAwZmJmZiwgNnB4IC04Mi42NjY2NjY2NjY3cHggIzAwZmYzMywgMTEycHggLTM3OS42NjY2NjY2NjY3cHggIzAwMGRmZiwgMTE2cHggLTE4MC42NjY2NjY2NjY3cHggIzAwNzdmZiwgMTU1cHggNzUuMzMzMzMzMzMzM3B4ICNmZjAwNDQsIDQ2cHggLTIyMi42NjY2NjY2NjY3cHggIzk5MDBmZiwgLTE4OXB4IC0yMDQuNjY2NjY2NjY2N3B4ICNmZjBkMDAsIC04M3B4IC02OS42NjY2NjY2NjY3cHggIzAwZmZlNiwgLTEycHggLTE1Ny42NjY2NjY2NjY3cHggIzZmZmYwMCwgMjMycHggLTIwLjY2NjY2NjY2NjdweCAjZmYwNDAwLCAxMzdweCAtMTMyLjY2NjY2NjY2NjdweCAjZmYwMDE1LCAxOTdweCAtMzkuNjY2NjY2NjY2N3B4ICNmZjAwMmYsIDE5M3B4IC01MS42NjY2NjY2NjY3cHggIzRkZmYwMCwgLTE2cHggLTI3NC42NjY2NjY2NjY3cHggIzAwMGRmZjtcbiAgfVxufVxuQC1tcy1rZXlmcmFtZXMgYmFuZyB7XG4gIHRvIHtcbiAgICBib3gtc2hhZG93OiAtMTg5cHggLTM2MS42NjY2NjY2NjY3cHggIzUxMDBmZiwgLTI0cHggLTQwNi42NjY2NjY2NjY3cHggI2ZmMDA5NSwgLTIwNHB4IC0zMzEuNjY2NjY2NjY2N3B4ICNmZjFlMDAsIDIxMnB4IDI1LjMzMzMzMzMzMzNweCAjMDA4Y2ZmLCAxMjhweCAzMC4zMzMzMzMzMzMzcHggI2ZmMDBmYiwgNHB4IDM5LjMzMzMzMzMzMzNweCAjZmYwMDFhLCAtMTY3cHggLTI1Ny42NjY2NjY2NjY3cHggIzAwZmZkNSwgMTU3cHggLTIxNy42NjY2NjY2NjY3cHggIzMzZmYwMCwgMTQycHggLTM2My42NjY2NjY2NjY3cHggIzkxZmYwMCwgMTIwcHggLTMxNC42NjY2NjY2NjY3cHggI2ZmMDAxYSwgLTE3NXB4IC0yODkuNjY2NjY2NjY2N3B4ICMwMDg0ZmYsIC04MHB4IC0zODYuNjY2NjY2NjY2N3B4ICNhMmZmMDAsIC04cHggLTM2Ny42NjY2NjY2NjY3cHggI2ZmMDBiMywgNjdweCAtMjczLjY2NjY2NjY2NjdweCAjNGRmZjAwLCAzNnB4IC0xMDkuNjY2NjY2NjY2N3B4ICMwMGZmZWEsIDkxcHggLTMyOC42NjY2NjY2NjY3cHggI2FlZmYwMCwgLTFweCAtMTIwLjY2NjY2NjY2NjdweCAjZmYzMzAwLCA4cHggLTE2OS42NjY2NjY2NjY3cHggIzI2ZmYwMCwgMjQwcHggLTQ4LjY2NjY2NjY2NjdweCBsaW1lLCAtMjQ1cHggLTM0My42NjY2NjY2NjY3cHggIzAwZmZmNywgNzVweCAtNjQuNjY2NjY2NjY2N3B4ICMwMGZmYjMsIDEyOHB4IC0yMDEuNjY2NjY2NjY2N3B4ICMwZDAwZmYsIDE2N3B4IC0yNDcuNjY2NjY2NjY2N3B4ICMyZmZmMDAsIC03N3B4IC04NC42NjY2NjY2NjY3cHggIzAwMTFmZiwgLTUwcHggLTg1LjY2NjY2NjY2NjdweCAjOWRmZjAwLCA3NXB4IC0zNjQuNjY2NjY2NjY2N3B4ICMwMGZmNWUsIDE5NHB4IC0zMC42NjY2NjY2NjY3cHggIzg0MDBmZiwgLTIwN3B4IC0xMDMuNjY2NjY2NjY2N3B4ICNmZjczMDAsIC0xNTBweCAzNS4zMzMzMzMzMzMzcHggI2ZmYzQwMCwgLTIxNnB4IDMzLjMzMzMzMzMzMzNweCAjYTIwMGZmLCAtMzNweCAtMi42NjY2NjY2NjY3cHggIzAwYWVmZiwgLTQ2cHggMTcuMzMzMzMzMzMzM3B4ICM1NWZmMDAsIDE2OXB4IDAuMzMzMzMzMzMzM3B4ICMzN2ZmMDAsIDExOXB4IDY3LjMzMzMzMzMzMzNweCAjY2MwMGZmLCAyMzFweCA2Mi4zMzMzMzMzMzMzcHggIzAwZTFmZiwgLTM5cHggMS4zMzMzMzMzMzMzcHggIzgwZmYwMCwgM3B4IDI1LjMzMzMzMzMzMzNweCBmdWNoc2lhLCAtMTdweCAtMjM4LjY2NjY2NjY2NjdweCAjMDBmYmZmLCA2cHggLTgyLjY2NjY2NjY2NjdweCAjMDBmZjMzLCAxMTJweCAtMzc5LjY2NjY2NjY2NjdweCAjMDAwZGZmLCAxMTZweCAtMTgwLjY2NjY2NjY2NjdweCAjMDA3N2ZmLCAxNTVweCA3NS4zMzMzMzMzMzMzcHggI2ZmMDA0NCwgNDZweCAtMjIyLjY2NjY2NjY2NjdweCAjOTkwMGZmLCAtMTg5cHggLTIwNC42NjY2NjY2NjY3cHggI2ZmMGQwMCwgLTgzcHggLTY5LjY2NjY2NjY2NjdweCAjMDBmZmU2LCAtMTJweCAtMTU3LjY2NjY2NjY2NjdweCAjNmZmZjAwLCAyMzJweCAtMjAuNjY2NjY2NjY2N3B4ICNmZjA0MDAsIDEzN3B4IC0xMzIuNjY2NjY2NjY2N3B4ICNmZjAwMTUsIDE5N3B4IC0zOS42NjY2NjY2NjY3cHggI2ZmMDAyZiwgMTkzcHggLTUxLjY2NjY2NjY2NjdweCAjNGRmZjAwLCAtMTZweCAtMjc0LjY2NjY2NjY2NjdweCAjMDAwZGZmO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJhbmcge1xuICB0byB7XG4gICAgYm94LXNoYWRvdzogLTE4OXB4IC0zNjEuNjY2NjY2NjY2N3B4ICM1MTAwZmYsIC0yNHB4IC00MDYuNjY2NjY2NjY2N3B4ICNmZjAwOTUsIC0yMDRweCAtMzMxLjY2NjY2NjY2NjdweCAjZmYxZTAwLCAyMTJweCAyNS4zMzMzMzMzMzMzcHggIzAwOGNmZiwgMTI4cHggMzAuMzMzMzMzMzMzM3B4ICNmZjAwZmIsIDRweCAzOS4zMzMzMzMzMzMzcHggI2ZmMDAxYSwgLTE2N3B4IC0yNTcuNjY2NjY2NjY2N3B4ICMwMGZmZDUsIDE1N3B4IC0yMTcuNjY2NjY2NjY2N3B4ICMzM2ZmMDAsIDE0MnB4IC0zNjMuNjY2NjY2NjY2N3B4ICM5MWZmMDAsIDEyMHB4IC0zMTQuNjY2NjY2NjY2N3B4ICNmZjAwMWEsIC0xNzVweCAtMjg5LjY2NjY2NjY2NjdweCAjMDA4NGZmLCAtODBweCAtMzg2LjY2NjY2NjY2NjdweCAjYTJmZjAwLCAtOHB4IC0zNjcuNjY2NjY2NjY2N3B4ICNmZjAwYjMsIDY3cHggLTI3My42NjY2NjY2NjY3cHggIzRkZmYwMCwgMzZweCAtMTA5LjY2NjY2NjY2NjdweCAjMDBmZmVhLCA5MXB4IC0zMjguNjY2NjY2NjY2N3B4ICNhZWZmMDAsIC0xcHggLTEyMC42NjY2NjY2NjY3cHggI2ZmMzMwMCwgOHB4IC0xNjkuNjY2NjY2NjY2N3B4ICMyNmZmMDAsIDI0MHB4IC00OC42NjY2NjY2NjY3cHggbGltZSwgLTI0NXB4IC0zNDMuNjY2NjY2NjY2N3B4ICMwMGZmZjcsIDc1cHggLTY0LjY2NjY2NjY2NjdweCAjMDBmZmIzLCAxMjhweCAtMjAxLjY2NjY2NjY2NjdweCAjMGQwMGZmLCAxNjdweCAtMjQ3LjY2NjY2NjY2NjdweCAjMmZmZjAwLCAtNzdweCAtODQuNjY2NjY2NjY2N3B4ICMwMDExZmYsIC01MHB4IC04NS42NjY2NjY2NjY3cHggIzlkZmYwMCwgNzVweCAtMzY0LjY2NjY2NjY2NjdweCAjMDBmZjVlLCAxOTRweCAtMzAuNjY2NjY2NjY2N3B4ICM4NDAwZmYsIC0yMDdweCAtMTAzLjY2NjY2NjY2NjdweCAjZmY3MzAwLCAtMTUwcHggMzUuMzMzMzMzMzMzM3B4ICNmZmM0MDAsIC0yMTZweCAzMy4zMzMzMzMzMzMzcHggI2EyMDBmZiwgLTMzcHggLTIuNjY2NjY2NjY2N3B4ICMwMGFlZmYsIC00NnB4IDE3LjMzMzMzMzMzMzNweCAjNTVmZjAwLCAxNjlweCAwLjMzMzMzMzMzMzNweCAjMzdmZjAwLCAxMTlweCA2Ny4zMzMzMzMzMzMzcHggI2NjMDBmZiwgMjMxcHggNjIuMzMzMzMzMzMzM3B4ICMwMGUxZmYsIC0zOXB4IDEuMzMzMzMzMzMzM3B4ICM4MGZmMDAsIDNweCAyNS4zMzMzMzMzMzMzcHggZnVjaHNpYSwgLTE3cHggLTIzOC42NjY2NjY2NjY3cHggIzAwZmJmZiwgNnB4IC04Mi42NjY2NjY2NjY3cHggIzAwZmYzMywgMTEycHggLTM3OS42NjY2NjY2NjY3cHggIzAwMGRmZiwgMTE2cHggLTE4MC42NjY2NjY2NjY3cHggIzAwNzdmZiwgMTU1cHggNzUuMzMzMzMzMzMzM3B4ICNmZjAwNDQsIDQ2cHggLTIyMi42NjY2NjY2NjY3cHggIzk5MDBmZiwgLTE4OXB4IC0yMDQuNjY2NjY2NjY2N3B4ICNmZjBkMDAsIC04M3B4IC02OS42NjY2NjY2NjY3cHggIzAwZmZlNiwgLTEycHggLTE1Ny42NjY2NjY2NjY3cHggIzZmZmYwMCwgMjMycHggLTIwLjY2NjY2NjY2NjdweCAjZmYwNDAwLCAxMzdweCAtMTMyLjY2NjY2NjY2NjdweCAjZmYwMDE1LCAxOTdweCAtMzkuNjY2NjY2NjY2N3B4ICNmZjAwMmYsIDE5M3B4IC01MS42NjY2NjY2NjY3cHggIzRkZmYwMCwgLTE2cHggLTI3NC42NjY2NjY2NjY3cHggIzAwMGRmZjtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGdyYXZpdHkge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGdyYXZpdHkge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBncmF2aXR5IHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkAtbXMta2V5ZnJhbWVzIGdyYXZpdHkge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBncmF2aXR5IHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBwb3NpdGlvbiB7XG4gIDAlLCAxOS45JSB7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XG4gIH1cbiAgMjAlLCAzOS45JSB7XG4gICAgbWFyZ2luLXRvcDogNDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIH1cbiAgNDAlLCA1OS45JSB7XG4gICAgbWFyZ2luLXRvcDogMjAlO1xuICAgIG1hcmdpbi1sZWZ0OiA3MCU7XG4gIH1cbiAgNjAlLCA3OS45JSB7XG4gICAgbWFyZ2luLXRvcDogMzAlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gIH1cbiAgODAlLCA5OS45JSB7XG4gICAgbWFyZ2luLXRvcDogMzAlO1xuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBwb3NpdGlvbiB7XG4gIDAlLCAxOS45JSB7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XG4gIH1cbiAgMjAlLCAzOS45JSB7XG4gICAgbWFyZ2luLXRvcDogNDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIH1cbiAgNDAlLCA1OS45JSB7XG4gICAgbWFyZ2luLXRvcDogMjAlO1xuICAgIG1hcmdpbi1sZWZ0OiA3MCU7XG4gIH1cbiAgNjAlLCA3OS45JSB7XG4gICAgbWFyZ2luLXRvcDogMzAlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gIH1cbiAgODAlLCA5OS45JSB7XG4gICAgbWFyZ2luLXRvcDogMzAlO1xuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgcG9zaXRpb24ge1xuICAwJSwgMTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xuICB9XG4gIDIwJSwgMzkuOSUge1xuICAgIG1hcmdpbi10b3A6IDQwJTtcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xuICB9XG4gIDQwJSwgNTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICBtYXJnaW4tbGVmdDogNzAlO1xuICB9XG4gIDYwJSwgNzkuOSUge1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xuICB9XG4gIDgwJSwgOTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICBtYXJnaW4tbGVmdDogODAlO1xuICB9XG59XG5ALW1zLWtleWZyYW1lcyBwb3NpdGlvbiB7XG4gIDAlLCAxOS45JSB7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XG4gIH1cbiAgMjAlLCAzOS45JSB7XG4gICAgbWFyZ2luLXRvcDogNDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIH1cbiAgNDAlLCA1OS45JSB7XG4gICAgbWFyZ2luLXRvcDogMjAlO1xuICAgIG1hcmdpbi1sZWZ0OiA3MCU7XG4gIH1cbiAgNjAlLCA3OS45JSB7XG4gICAgbWFyZ2luLXRvcDogMzAlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gIH1cbiAgODAlLCA5OS45JSB7XG4gICAgbWFyZ2luLXRvcDogMzAlO1xuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcG9zaXRpb24ge1xuICAwJSwgMTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xuICB9XG4gIDIwJSwgMzkuOSUge1xuICAgIG1hcmdpbi10b3A6IDQwJTtcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xuICB9XG4gIDQwJSwgNTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICBtYXJnaW4tbGVmdDogNzAlO1xuICB9XG4gIDYwJSwgNzkuOSUge1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xuICB9XG4gIDgwJSwgOTkuOSUge1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICBtYXJnaW4tbGVmdDogODAlO1xuICB9XG59XG4uc3dpdGNoLW1vZGUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuLW91dGxpbmUtbW9kYWwge1xuICBwYWRkaW5nOiA1cHggOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hcnJvd3JpZ2h0LWljb24ge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5sb2dpbi1wYW5lbC1jb250YWluZXIge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG59XG4ubG9naW4tcGFuZWwtY29udGFpbmVyIC5sb2dpbi1yZWdpc3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTNlMjQ7XG4gIGNvbG9yOiAjYWQ5NzRmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbn1cbi5sb2dpbi1wYW5lbC1jb250YWluZXIgLmZpZWxkLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xufVxuLmxvZ2luLXBhbmVsLWNvbnRhaW5lciAuYWN0aW9uLWJ0bnMgLmxvZ2luLWJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmxvZ2luLXBhbmVsLWNvbnRhaW5lciAuYWN0aW9uLWJ0bnMgLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbn1cbi5sb2dpbi1wYW5lbC1jb250YWluZXIgLmFjdGlvbi1idG5zIC5zdWJtaXQtYnRuIHtcbiAgcGFkZGluZy10b3A6IDRweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogNHB4ICFpbXBvcnRhbnQ7XG59XG4ubG9naW4tcGFuZWwtY29udGFpbmVyIC5wcmFjdGljZW5lci1jaGVja2JveCB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5yZWdpc3RyYXRpb25Cb3gge1xuICB3aWR0aDogNjAlO1xufVxuLnJlZ2lzdHJhdGlvbkJveCAuZnVsbC1uYW1lLWJveCB7XG4gIHBhZGRpbmc6IDA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5yZWdpc3RyYXRpb25Cb3ggLmZ1bGwtbmFtZS1ib3gge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4ucmVnaXN0cmF0aW9uQm94IC5mdWxsLW5hbWUtYm94IC5maXJzdE5hbWVGaWVsZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5yZWdpc3RyYXRpb25Cb3ggLmZ1bGwtbmFtZS1ib3ggLm1pZGRsZU5hbWUge1xuICBtYXJnaW46IDVweCAwcHggNXB4IDBweDtcbn1cblxuLnJlcXVpcmVkOmFmdGVyIHtcbiAgY29udGVudDogXCIgKlwiO1xuICBjb2xvcjogcmVkO1xufVxuXG4uaXMtaW52YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogcmVkO1xuICBib3gtc2hhZG93OiAwIDAgNXB4IHJlZDtcbn0iLCJAaW1wb3J0IFwiLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9jb21tb24uc2Nzc1wiO1xyXG5cclxuJGdvbGRlbnRoZW1lbGxvZ2luLWJvcmRlcnJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG5cclxuLnN3aXRjaC1tb2RlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtbW9kYWwge1xyXG4gICAgcGFkZGluZzogNXB4IDhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYXJyb3dyaWdodC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmxvZ2luLXBhbmVsLWNvbnRhaW5lciB7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkZ29sZGVudGhlbWUtYm9yZGVyLXJhZGl1cztcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkZ29sZGVudGhlbWUtYm9yZGVyLXJhZGl1cztcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRnb2xkZW50aGVtZS1ib3JkZXItcmFkaXVzO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRnb2xkZW50aGVtZS1ib3JkZXItcmFkaXVzO1xyXG4gICAgLmxvZ2luLXJlZ2lzdGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ29sZGVudGhlbWUtaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgICAgICAgY29sb3I6ICRnb2xkZW50aGVtZS1oZWFkZXJ0ZXh0LWNvbG9yO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkZ29sZGVudGhlbWUtYm9yZGVyLXJhZGl1cztcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJGdvbGRlbnRoZW1lLWJvcmRlci1yYWRpdXM7XHJcbiAgICB9XHJcblxyXG4gICAgLmZpZWxkLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGlvbi1idG5zIHtcclxuICAgICAgICAubG9naW4tYnRuIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnRuIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJGdvbGRlbnRoZW1lbGxvZ2luLWJvcmRlcnJhZGl1cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdWJtaXQtYnRuIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wcmFjdGljZW5lci1jaGVja2JveCB7XHJcbiAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG5cclxufVxyXG4ucmVnaXN0cmF0aW9uQm94IHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgXHJcbiAgICAuZnVsbC1uYW1lLWJveCB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuZmlyc3ROYW1lRmllbGQge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgfVxyXG4gICAgICAubWlkZGxlTmFtZSB7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMHB4IDVweCAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnJlcXVpcmVkOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6XCIgKlwiO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbiAgLmlzLWludmFsaWQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJlZDtcclxuICB9XHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: src_app_services_product_service_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: src_app_services_common_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_services_address_address_service__WEBPACK_IMPORTED_MODULE_5__["AddressService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/interview-questions/angular-interview-questions/add-edit-interview-questions/add-edit-interview-questions.component.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/interview-questions/angular-interview-questions/add-edit-interview-questions/add-edit-interview-questions.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: AddEditInterviewQuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditInterviewQuestionsComponent", function() { return AddEditInterviewQuestionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_question_answer_service_question_answer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/question-answer-service/question-answer.service */ "./src/app/services/question-answer-service/question-answer.service.ts");
/* harmony import */ var _services_loader_service_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/loader-service/loader.service */ "./src/app/services/loader-service/loader.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function AddEditInterviewQuestionsComponent_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r1.questionType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.questionType);
} }
class AddEditInterviewQuestionsComponent {
    constructor(questionAnswerService, loaderService) {
        this.questionAnswerService = questionAnswerService;
        this.loaderService = loaderService;
        this.interviewQuestion = { question: '', answer: '', rank: '' };
        this.editMode = true;
        this.popupEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        if (Object.keys(this.editedItem).length === 0 && this.editedItem.constructor === Object)
            this.editMode = false;
        this.interviewQuestion = JSON.parse(JSON.stringify(this.editedItem));
        this.getQuestionTypes();
    }
    getQuestionTypes() {
        this.loaderService.display(true);
        this.questionAnswerService.getQuestionTypes().subscribe(response => {
            this.questionTypes = response;
            this.loaderService.display(false);
        });
    }
    closeAddEditPopup() {
        this.popupEvent.emit('closeQuestionAnswerPopup');
    }
    saveInterviewQuestionAnswer() {
        if (this.editMode) {
            this.questionAnswerService.updateQuestionAnswer(this.interviewQuestion);
        }
        else {
            this.questionAnswerService.addQuestionAnswer(this.interviewQuestion);
        }
        this.closeAddEditPopup();
    }
}
AddEditInterviewQuestionsComponent.ɵfac = function AddEditInterviewQuestionsComponent_Factory(t) { return new (t || AddEditInterviewQuestionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_question_answer_service_question_answer_service__WEBPACK_IMPORTED_MODULE_1__["QuestionAnswerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_loader_service_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"])); };
AddEditInterviewQuestionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddEditInterviewQuestionsComponent, selectors: [["app-add-edit-interview-questions"]], inputs: { editedItem: "editedItem" }, outputs: { popupEvent: "popupEvent" }, decls: 34, vars: 5, consts: [[1, "modal"], [1, "modal-content"], [1, "form-group", "row"], ["for", "question", 1, "col-3", "col-form-label"], [1, "col-9"], ["id", "question", "name", "question", "placeholder", "Enter Question", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "answer", 1, "col-3", "col-form-label"], ["id", "answer", "placeholder", "Enter Answer", "name", "answer", "cols", "40", "rows", "5", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "type", 1, "col-3", "col-form-label"], ["id", "type", "name", "type", 1, "custom-select", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "text", 1, "col-3", "col-form-label"], ["id", "text", "name", "text", "placeholder", "Enter Rank", "type", "number", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "offset-3", "col-md-3", "col-4"], ["name", "submit", "type", "submit", 1, "btn", "btn-primary", "btn-full-width", 3, "click"], [1, "col-md-3", "col-4"], ["name", "submit", "type", "submit", 1, "btn", "btn-danger", "btn-full-width", 3, "click"], [3, "value"]], template: function AddEditInterviewQuestionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add question and answer:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEditInterviewQuestionsComponent_Template_textarea_ngModelChange_10_listener($event) { return ctx.interviewQuestion.question = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Answer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEditInterviewQuestionsComponent_Template_textarea_ngModelChange_15_listener($event) { return ctx.interviewQuestion.answer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEditInterviewQuestionsComponent_Template_select_ngModelChange_20_listener($event) { return ctx.interviewQuestion.questionType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AddEditInterviewQuestionsComponent_option_21_Template, 2, 2, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Rank");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEditInterviewQuestionsComponent_Template_input_ngModelChange_26_listener($event) { return ctx.interviewQuestion.rank = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEditInterviewQuestionsComponent_Template_button_click_29_listener() { return ctx.saveInterviewQuestionAnswer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEditInterviewQuestionsComponent_Template_button_click_32_listener() { return ctx.closeAddEditPopup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.interviewQuestion.question);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.interviewQuestion.answer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.interviewQuestion.questionType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.questionTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.interviewQuestion.rank);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludGVydmlldy1xdWVzdGlvbnMvYW5ndWxhci1pbnRlcnZpZXctcXVlc3Rpb25zL2FkZC1lZGl0LWludGVydmlldy1xdWVzdGlvbnMvYWRkLWVkaXQtaW50ZXJ2aWV3LXF1ZXN0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddEditInterviewQuestionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-edit-interview-questions',
                templateUrl: './add-edit-interview-questions.component.html',
                styleUrls: ['./add-edit-interview-questions.component.scss']
            }]
    }], function () { return [{ type: _services_question_answer_service_question_answer_service__WEBPACK_IMPORTED_MODULE_1__["QuestionAnswerService"] }, { type: _services_loader_service_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] }]; }, { editedItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], popupEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/interview-questions/angular-interview-questions/add-edit-question-types/add-edit-question-types.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/interview-questions/angular-interview-questions/add-edit-question-types/add-edit-question-types.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: AddEditQuestionTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditQuestionTypesComponent", function() { return AddEditQuestionTypesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services_question_answer_service_question_answer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/question-answer-service/question-answer.service */ "./src/app/services/question-answer-service/question-answer.service.ts");
/* harmony import */ var _services_loader_service_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/loader-service/loader.service */ "./src/app/services/loader-service/loader.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");








function AddEditQuestionTypesComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fa-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEditQuestionTypesComponent_div_10_Template_fa_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.editQuestionType(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "fa-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEditQuestionTypesComponent_div_10_Template_fa_icon_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.deleteQuestionType(item_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faTrash);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.questionType);
} }
class AddEditQuestionTypesComponent {
    constructor(questionAnswerService, loaderService) {
        this.questionAnswerService = questionAnswerService;
        this.loaderService = loaderService;
        this.popupEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.interviewQuestion = { questionType: "" };
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrash"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEdit"];
        this.editMode = false;
    }
    ngOnInit() {
        this.getQuestionTypes();
    }
    getQuestionTypes() {
        this.loaderService.display(true);
        this.questionAnswerService.getQuestionTypes().subscribe(data => {
            this.questionTypes = data;
            this.loaderService.display(false);
        });
    }
    closeAddEditPopup() {
        this.popupEvent.emit('closeQuestionTypesPopup');
    }
    saveQuestionType() {
        this.loaderService.display(true);
        if (this.editMode) {
            this.questionAnswerService.updateQuestionType(this.interviewQuestion).subscribe(data => {
                this.getQuestionTypes();
                this.interviewQuestion = { questionType: '' };
                this.editMode = false;
                this.loaderService.display(false);
            });
        }
        else {
            this.questionAnswerService.addQuestionType(this.interviewQuestion).subscribe(data => {
                this.getQuestionTypes();
                this.interviewQuestion = { questionType: '' };
                this.loaderService.display(false);
            });
        }
    }
    deleteQuestionType(id) {
        let result = this.questionAnswerService.confirmAction();
        if (result) {
            this.loaderService.display(true);
            this.questionAnswerService.deleteQuestionType(id).subscribe(data => {
                this.getQuestionTypes();
                this.loaderService.display(false);
            });
        }
    }
    editQuestionType(item) {
        this.interviewQuestion = JSON.parse(JSON.stringify(item));
        this.editMode = true;
    }
}
AddEditQuestionTypesComponent.ɵfac = function AddEditQuestionTypesComponent_Factory(t) { return new (t || AddEditQuestionTypesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_question_answer_service_question_answer_service__WEBPACK_IMPORTED_MODULE_2__["QuestionAnswerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_loader_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"])); };
AddEditQuestionTypesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddEditQuestionTypesComponent, selectors: [["app-add-edit-question-types"]], outputs: { popupEvent: "popupEvent" }, decls: 23, vars: 3, consts: [[1, "modal"], [1, "modal-content", "modal-question-types"], [1, "form-group", "row"], ["for", "question", 1, "col-4", "col-form-label"], [1, "col-8"], [4, "ngFor", "ngForOf"], ["id", "question", "name", "question", "placeholder", "Enter Question", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "offset-4", "col-md-3", "col-4"], ["name", "submit", "type", "submit", 1, "btn", "btn-primary", "btn-full-width", 3, "click"], [1, "col-md-3", "col-4"], ["name", "submit", "type", "submit", 1, "btn", "btn-danger", "btn-full-width", 3, "click"], [1, "hand-cursor", "edit-icon", 3, "icon", "click"], [1, "hand-cursor", "delete-icon", 3, "icon", "click"], [1, "question-type-item"]], template: function AddEditQuestionTypesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add/Edit Question Types:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Question Types");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AddEditQuestionTypesComponent_div_10_Template, 5, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add/Edit Question Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEditQuestionTypesComponent_Template_textarea_ngModelChange_15_listener($event) { return ctx.interviewQuestion.questionType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEditQuestionTypesComponent_Template_button_click_18_listener() { return ctx.saveQuestionType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEditQuestionTypesComponent_Template_button_click_21_listener() { return ctx.closeAddEditPopup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.questionTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.interviewQuestion.questionType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.editMode == true ? "Update" : "Submit");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludGVydmlldy1xdWVzdGlvbnMvYW5ndWxhci1pbnRlcnZpZXctcXVlc3Rpb25zL2FkZC1lZGl0LXF1ZXN0aW9uLXR5cGVzL2FkZC1lZGl0LXF1ZXN0aW9uLXR5cGVzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddEditQuestionTypesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-edit-question-types',
                templateUrl: './add-edit-question-types.component.html',
                styleUrls: ['./add-edit-question-types.component.scss']
            }]
    }], function () { return [{ type: _services_question_answer_service_question_answer_service__WEBPACK_IMPORTED_MODULE_2__["QuestionAnswerService"] }, { type: _services_loader_service_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] }]; }, { popupEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/interview-questions/angular-interview-questions/angular-interview-questions.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/interview-questions/angular-interview-questions/angular-interview-questions.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: AngularInterviewQuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularInterviewQuestionsComponent", function() { return AngularInterviewQuestionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_question_answer_service_question_answer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/question-answer-service/question-answer.service */ "./src/app/services/question-answer-service/question-answer.service.ts");
/* harmony import */ var _services_loader_service_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/loader-service/loader.service */ "./src/app/services/loader-service/loader.service.ts");
/* harmony import */ var _question_answer_panel_question_answer_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./question-answer-panel/question-answer-panel.component */ "./src/app/interview-questions/angular-interview-questions/question-answer-panel/question-answer-panel.component.ts");





class AngularInterviewQuestionsComponent {
    constructor(questionAnswerService, loaderService) {
        this.questionAnswerService = questionAnswerService;
        this.loaderService = loaderService;
    }
    ngOnInit() {
        this.questionAnswerService.currentData.subscribe((data) => {
            this.questionAnswerList = data;
            this.loaderService.display(false);
        });
        this.questionAnswerService.getQuestionAnswerList();
    }
}
AngularInterviewQuestionsComponent.ɵfac = function AngularInterviewQuestionsComponent_Factory(t) { return new (t || AngularInterviewQuestionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_question_answer_service_question_answer_service__WEBPACK_IMPORTED_MODULE_1__["QuestionAnswerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_loader_service_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"])); };
AngularInterviewQuestionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AngularInterviewQuestionsComponent, selectors: [["app-angular-interview-questions"]], decls: 1, vars: 2, consts: [[3, "questionAnswerList", "adminMode"]], template: function AngularInterviewQuestionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-question-answer-panel", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("questionAnswerList", ctx.questionAnswerList)("adminMode", false);
    } }, directives: [_question_answer_panel_question_answer_panel_component__WEBPACK_IMPORTED_MODULE_3__["QuestionAnswerPanelComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludGVydmlldy1xdWVzdGlvbnMvYW5ndWxhci1pbnRlcnZpZXctcXVlc3Rpb25zL2FuZ3VsYXItaW50ZXJ2aWV3LXF1ZXN0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularInterviewQuestionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-angular-interview-questions',
                templateUrl: './angular-interview-questions.component.html',
                styleUrls: ['./angular-interview-questions.component.scss']
            }]
    }], function () { return [{ type: _services_question_answer_service_question_answer_service__WEBPACK_IMPORTED_MODULE_1__["QuestionAnswerService"] }, { type: _services_loader_service_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/interview-questions/angular-interview-questions/question-answer-panel/affiliate-ads/affiliate-ads.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/interview-questions/angular-interview-questions/question-answer-panel/affiliate-ads/affiliate-ads.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: AffiliateAdsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AffiliateAdsComponent", function() { return AffiliateAdsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function AffiliateAdsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "iframe", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AffiliateAdsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "iframe", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AffiliateAdsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "iframe", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AffiliateAdsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "iframe", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AffiliateAdsComponent {
    constructor() { }
    ngOnInit() {
    }
}
AffiliateAdsComponent.ɵfac = function AffiliateAdsComponent_Factory(t) { return new (t || AffiliateAdsComponent)(); };
AffiliateAdsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AffiliateAdsComponent, selectors: [["app-affiliate-ads"]], inputs: { index: "index", totalItems: "totalItems" }, decls: 4, vars: 4, consts: [[4, "ngIf"], ["marginwidth", "0", "marginheight", "0", "scrolling", "no", "frameborder", "0", "src", "//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=frontend02-21&marketplace=amazon&region=IN&placement=B08WBB369L&asins=B08WBB369L&linkId=a7c9c891fe90b0a6b5373540451325df&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff", 2, "width", "120px", "height", "240px"], ["marginwidth", "0", "marginheight", "0", "scrolling", "no", "frameborder", "0", "src", "//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=frontend02-21&marketplace=amazon&region=IN&placement=B079FB4XK9&asins=B079FB4XK9&linkId=572bd3d3e78b30bc19025f1fc333ea4d&show_border=true&link_opens_in_new_window=true", 2, "width", "120px", "height", "240px"], ["marginwidth", "0", "marginheight", "0", "scrolling", "no", "frameborder", "0", "src", "//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=frontend02-21&marketplace=amazon&region=IN&placement=B08XBGZ4R6&asins=B08XBGZ4R6&linkId=a054196073f3e8ff6631c1764858f703&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff", 2, "width", "120px", "height", "240px"], ["marginwidth", "0", "marginheight", "0", "scrolling", "no", "frameborder", "0", "src", "//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=frontend02-21&marketplace=amazon&region=IN&placement=B092ZJVB6Z&asins=B092ZJVB6Z&linkId=434396edfdf81a24b170c81dd075c9ca&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff", 2, "width", "120px", "height", "240px"], ["marginwidth", "0", "marginheight", "0", "scrolling", "no", "frameborder", "0", "src", "//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=frontend02-21&marketplace=amazon&region=IN&placement=B08NK3YL8B&asins=B08NK3YL8B&linkId=92757a96eb1ee075e384f1d3fd690256&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff", 2, "width", "120px", "height", "240px"], ["marginwidth", "0", "marginheight", "0", "scrolling", "no", "frameborder", "0", "src", "//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=frontend02-21&marketplace=amazon&region=IN&placement=B08FJ8YSB8&asins=B08FJ8YSB8&linkId=98b48d35bf3bfd4f4aa78fd324c41c71&show_border=true&link_opens_in_new_window=true", 2, "width", "120px", "height", "240px"], ["marginwidth", "0", "marginheight", "0", "scrolling", "no", "frameborder", "0", "src", "//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=frontend02-21&marketplace=amazon&region=IN&placement=B071Z8M4KX&asins=B071Z8M4KX&linkId=bfcf87ed285ecddbf769819762713bf3&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff", 2, "width", "120px", "height", "240px"], ["marginwidth", "0", "marginheight", "0", "scrolling", "no", "frameborder", "0", "src", "//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=frontend02-21&marketplace=amazon&region=IN&placement=B072X7K4K4&asins=B072X7K4K4&linkId=19af7322756a5d9b77fb2926acaf8767&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff", 2, "width", "120px", "height", "240px"]], template: function AffiliateAdsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AffiliateAdsComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AffiliateAdsComponent_div_1_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AffiliateAdsComponent_div_2_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AffiliateAdsComponent_div_3_Template, 3, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.index == 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.index == 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.index == 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.index + 1 == ctx.totalItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludGVydmlldy1xdWVzdGlvbnMvYW5ndWxhci1pbnRlcnZpZXctcXVlc3Rpb25zL3F1ZXN0aW9uLWFuc3dlci1wYW5lbC9hZmZpbGlhdGUtYWRzL2FmZmlsaWF0ZS1hZHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AffiliateAdsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-affiliate-ads',
                templateUrl: './affiliate-ads.component.html',
                styleUrls: ['./affiliate-ads.component.scss']
            }]
    }], function () { return []; }, { index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], totalItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/interview-questions/angular-interview-questions/question-answer-panel/question-answer-panel.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/interview-questions/angular-interview-questions/question-answer-panel/question-answer-panel.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: QuestionAnswerPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionAnswerPanelComponent", function() { return QuestionAnswerPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services_question_answer_service_question_answer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/question-answer-service/question-answer.service */ "./src/app/services/question-answer-service/question-answer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _affiliate_ads_affiliate_ads_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./affiliate-ads/affiliate-ads.component */ "./src/app/interview-questions/angular-interview-questions/question-answer-panel/affiliate-ads/affiliate-ads.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _add_edit_interview_questions_add_edit_interview_questions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../add-edit-interview-questions/add-edit-interview-questions.component */ "./src/app/interview-questions/angular-interview-questions/add-edit-interview-questions/add-edit-interview-questions.component.ts");
/* harmony import */ var _add_edit_question_types_add_edit_question_types_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../add-edit-question-types/add-edit-question-types.component */ "./src/app/interview-questions/angular-interview-questions/add-edit-question-types/add-edit-question-types.component.ts");










function QuestionAnswerPanelComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionAnswerPanelComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.openAddQuestionAnswerPopup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "+ Add Q/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionAnswerPanelComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionAnswerPanelComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.openAddQuestionTypePopup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "+ Add/Edit Q/A type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionAnswerPanelComponent_div_10_fa_icon_9_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fa-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionAnswerPanelComponent_div_10_fa_icon_9_Template_fa_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const questionAnswerItem_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.editQuestionAnswer(questionAnswerItem_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r11.faEdit);
} }
function QuestionAnswerPanelComponent_div_10_fa_icon_10_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fa-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionAnswerPanelComponent_div_10_fa_icon_10_Template_fa_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const questionAnswerItem_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.deleteQuestionAnswer(questionAnswerItem_r9._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r12.faTrash);
} }
const _c0 = function (a0) { return { "open": a0 }; };
function QuestionAnswerPanelComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, QuestionAnswerPanelComponent_div_10_fa_icon_9_Template, 1, 1, "fa-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, QuestionAnswerPanelComponent_div_10_fa_icon_10_Template, 1, 1, "fa-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionAnswerPanelComponent_div_10_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const questionAnswerItem_r9 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.toggleShowHideAnswer(questionAnswerItem_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-affiliate-ads", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const questionAnswerItem_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r10 + 1, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", questionAnswerItem_r9.question, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.adminMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.adminMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](questionAnswerItem_r9.buttonText ? questionAnswerItem_r9.buttonText : "Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, questionAnswerItem_r9.showAnswer == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", questionAnswerItem_r9.answer, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", i_r10)("totalItems", ctx_r2.questionAnswerList.length);
} }
function QuestionAnswerPanelComponent_app_add_edit_interview_questions_11_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-add-edit-interview-questions", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("popupEvent", function QuestionAnswerPanelComponent_app_add_edit_interview_questions_11_Template_app_add_edit_interview_questions_popupEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.closeModal($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editedItem", ctx_r3.editedItem);
} }
function QuestionAnswerPanelComponent_app_add_edit_question_types_12_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-add-edit-question-types", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("popupEvent", function QuestionAnswerPanelComponent_app_add_edit_question_types_12_Template_app_add_edit_question_types_popupEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.closeModal($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "admin-panel": a0 }; };
class QuestionAnswerPanelComponent {
    constructor(questionAnswerService, route, router) {
        this.questionAnswerService = questionAnswerService;
        this.route = route;
        this.router = router;
        this.showQuestionAnswerModal = false;
        this.showQuestionTypeModal = false;
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrash"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEdit"];
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.searchKey = params.get('searchKey');
            this.questionAnswerService.setUrlSearchVal(this.searchKey);
        });
    }
    toggleShowHideAnswer(questionAnswerItem) {
        if (!questionAnswerItem.showAnswer) {
            questionAnswerItem.showAnswer = true;
            questionAnswerItem.buttonText = "Hide";
        }
        else {
            questionAnswerItem.showAnswer = false;
            questionAnswerItem.buttonText = "Show";
        }
    }
    openAddQuestionAnswerPopup() {
        this.showQuestionAnswerModal = true;
        this.editedItem = {};
    }
    openAddQuestionTypePopup() {
        this.showQuestionTypeModal = true;
    }
    closeModal(event) {
        if (event == "closeQuestionAnswerPopup") {
            this.showQuestionAnswerModal = false;
        }
        else {
            this.showQuestionTypeModal = false;
        }
    }
    deleteQuestionAnswer(id) {
        let result = this.questionAnswerService.confirmAction();
        if (result) {
            this.questionAnswerService.deleteQuestionAnswer(id);
        }
    }
    editQuestionAnswer(data) {
        this.editedItem = data;
        this.showQuestionAnswerModal = true;
    }
}
QuestionAnswerPanelComponent.ɵfac = function QuestionAnswerPanelComponent_Factory(t) { return new (t || QuestionAnswerPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_question_answer_service_question_answer_service__WEBPACK_IMPORTED_MODULE_2__["QuestionAnswerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
QuestionAnswerPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuestionAnswerPanelComponent, selectors: [["app-question-answer-panel"]], inputs: { questionAnswerList: "questionAnswerList", adminMode: "adminMode" }, decls: 13, vars: 8, consts: [[1, "panel-container", 3, "ngClass"], [1, "page-heading"], [1, "display-none"], [1, "row"], [1, "col-12"], ["class", "col-md-3 col-5 btn add-questions-btn hand-cursor", 3, "click", 4, "ngIf"], ["class", "col-md-3 col-6 btn add-questions-btn hand-cursor", 3, "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "editedItem", "popupEvent", 4, "ngIf"], [3, "popupEvent", 4, "ngIf"], [1, "col-md-3", "col-5", "btn", "add-questions-btn", "hand-cursor", 3, "click"], [1, "col-md-3", "col-6", "btn", "add-questions-btn", "hand-cursor", 3, "click"], [1, "panel-item"], ["role", "img", "aria-label", "frontend interview questions", 1, "panel-header"], [1, "col-xl-10", "col-md-9"], [1, "question-text", 3, "innerHtml"], [1, "col-xl-2", "col-md-3", "action-btns"], ["class", "hand-cursor edit-icon", 3, "icon", "click", 4, "ngIf"], ["class", "hand-cursor delete-icon", 3, "icon", "click", 4, "ngIf"], [1, "showHideAnswer", "hand-cursor", "btn-show-hide", 3, "click"], [1, "panel-body", 3, "ngClass"], [1, "panel-body-content", 3, "innerHtml"], [1, "affiliate-ads-container"], [3, "index", "totalItems"], [1, "hand-cursor", "edit-icon", 3, "icon", "click"], [1, "hand-cursor", "delete-icon", 3, "icon", "click"], [3, "editedItem", "popupEvent"], [3, "popupEvent"]], template: function QuestionAnswerPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Front end interview questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "UI interview questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, QuestionAnswerPanelComponent_button_8_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, QuestionAnswerPanelComponent_button_9_Template, 2, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, QuestionAnswerPanelComponent_div_10_Template, 17, 11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, QuestionAnswerPanelComponent_app_add_edit_interview_questions_11_Template, 1, 1, "app-add-edit-interview-questions", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, QuestionAnswerPanelComponent_app_add_edit_question_types_12_Template, 1, 0, "app-add-edit-question-types", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.adminMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.adminMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.adminMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.questionAnswerList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showQuestionAnswerModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showQuestionTypeModal);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _affiliate_ads_affiliate_ads_component__WEBPACK_IMPORTED_MODULE_5__["AffiliateAdsComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"], _add_edit_interview_questions_add_edit_interview_questions_component__WEBPACK_IMPORTED_MODULE_7__["AddEditInterviewQuestionsComponent"], _add_edit_question_types_add_edit_question_types_component__WEBPACK_IMPORTED_MODULE_8__["AddEditQuestionTypesComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludGVydmlldy1xdWVzdGlvbnMvYW5ndWxhci1pbnRlcnZpZXctcXVlc3Rpb25zL3F1ZXN0aW9uLWFuc3dlci1wYW5lbC9xdWVzdGlvbi1hbnN3ZXItcGFuZWwuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionAnswerPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-question-answer-panel',
                templateUrl: './question-answer-panel.component.html',
                styleUrls: ['./question-answer-panel.component.scss']
            }]
    }], function () { return [{ type: _services_question_answer_service_question_answer_service__WEBPACK_IMPORTED_MODULE_2__["QuestionAnswerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { questionAnswerList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], adminMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/interview-questions/interview-questions-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/interview-questions/interview-questions-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: InterviewQuestionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterviewQuestionsRoutingModule", function() { return InterviewQuestionsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_interview_questions_angular_interview_questions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./angular-interview-questions/angular-interview-questions.component */ "./src/app/interview-questions/angular-interview-questions/angular-interview-questions.component.ts");






const routes = [
    {
        path: '',
        component: _angular_interview_questions_angular_interview_questions_component__WEBPACK_IMPORTED_MODULE_3__["AngularInterviewQuestionsComponent"]
    }
];
class InterviewQuestionsRoutingModule {
}
InterviewQuestionsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InterviewQuestionsRoutingModule });
InterviewQuestionsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InterviewQuestionsRoutingModule_Factory(t) { return new (t || InterviewQuestionsRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InterviewQuestionsRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InterviewQuestionsRoutingModule, [{
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

/***/ "./src/app/interview-questions/interview-questions.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/interview-questions/interview-questions.module.ts ***!
  \*******************************************************************/
/*! exports provided: InterviewQuestionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterviewQuestionsModule", function() { return InterviewQuestionsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _interview_questions_angular_interview_questions_angular_interview_questions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interview-questions/angular-interview-questions/angular-interview-questions.component */ "./src/app/interview-questions/angular-interview-questions/angular-interview-questions.component.ts");
/* harmony import */ var _interview_questions_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interview-questions-routing.module */ "./src/app/interview-questions/interview-questions-routing.module.ts");
/* harmony import */ var _interview_questions_angular_interview_questions_question_answer_panel_question_answer_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interview-questions/angular-interview-questions/question-answer-panel/question-answer-panel.component */ "./src/app/interview-questions/angular-interview-questions/question-answer-panel/question-answer-panel.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_interview_questions_add_edit_interview_questions_add_edit_interview_questions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./angular-interview-questions/add-edit-interview-questions/add-edit-interview-questions.component */ "./src/app/interview-questions/angular-interview-questions/add-edit-interview-questions/add-edit-interview-questions.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_interview_questions_add_edit_question_types_add_edit_question_types_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./angular-interview-questions/add-edit-question-types/add-edit-question-types.component */ "./src/app/interview-questions/angular-interview-questions/add-edit-question-types/add-edit-question-types.component.ts");
/* harmony import */ var _angular_interview_questions_question_answer_panel_affiliate_ads_affiliate_ads_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./angular-interview-questions/question-answer-panel/affiliate-ads/affiliate-ads.component */ "./src/app/interview-questions/angular-interview-questions/question-answer-panel/affiliate-ads/affiliate-ads.component.ts");











class InterviewQuestionsModule {
}
InterviewQuestionsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InterviewQuestionsModule });
InterviewQuestionsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InterviewQuestionsModule_Factory(t) { return new (t || InterviewQuestionsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _interview_questions_routing_module__WEBPACK_IMPORTED_MODULE_3__["InterviewQuestionsRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InterviewQuestionsModule, { declarations: [_interview_questions_angular_interview_questions_angular_interview_questions_component__WEBPACK_IMPORTED_MODULE_2__["AngularInterviewQuestionsComponent"],
        _interview_questions_angular_interview_questions_question_answer_panel_question_answer_panel_component__WEBPACK_IMPORTED_MODULE_4__["QuestionAnswerPanelComponent"],
        _angular_interview_questions_add_edit_interview_questions_add_edit_interview_questions_component__WEBPACK_IMPORTED_MODULE_6__["AddEditInterviewQuestionsComponent"],
        _angular_interview_questions_add_edit_question_types_add_edit_question_types_component__WEBPACK_IMPORTED_MODULE_8__["AddEditQuestionTypesComponent"],
        _angular_interview_questions_question_answer_panel_affiliate_ads_affiliate_ads_component__WEBPACK_IMPORTED_MODULE_9__["AffiliateAdsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _interview_questions_routing_module__WEBPACK_IMPORTED_MODULE_3__["InterviewQuestionsRoutingModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]], exports: [_interview_questions_angular_interview_questions_angular_interview_questions_component__WEBPACK_IMPORTED_MODULE_2__["AngularInterviewQuestionsComponent"],
        _interview_questions_angular_interview_questions_question_answer_panel_question_answer_panel_component__WEBPACK_IMPORTED_MODULE_4__["QuestionAnswerPanelComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InterviewQuestionsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _interview_questions_angular_interview_questions_angular_interview_questions_component__WEBPACK_IMPORTED_MODULE_2__["AngularInterviewQuestionsComponent"],
                    _interview_questions_angular_interview_questions_question_answer_panel_question_answer_panel_component__WEBPACK_IMPORTED_MODULE_4__["QuestionAnswerPanelComponent"],
                    _angular_interview_questions_add_edit_interview_questions_add_edit_interview_questions_component__WEBPACK_IMPORTED_MODULE_6__["AddEditInterviewQuestionsComponent"],
                    _angular_interview_questions_add_edit_question_types_add_edit_question_types_component__WEBPACK_IMPORTED_MODULE_8__["AddEditQuestionTypesComponent"],
                    _angular_interview_questions_question_answer_panel_affiliate_ads_affiliate_ads_component__WEBPACK_IMPORTED_MODULE_9__["AffiliateAdsComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _interview_questions_routing_module__WEBPACK_IMPORTED_MODULE_3__["InterviewQuestionsRoutingModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
                ],
                exports: [
                    _interview_questions_angular_interview_questions_angular_interview_questions_component__WEBPACK_IMPORTED_MODULE_2__["AngularInterviewQuestionsComponent"],
                    _interview_questions_angular_interview_questions_question_answer_panel_question_answer_panel_component__WEBPACK_IMPORTED_MODULE_4__["QuestionAnswerPanelComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/address/address.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/address/address.service.ts ***!
  \*****************************************************/
/*! exports provided: AddressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressService", function() { return AddressService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AddressService {
    constructor() {
        this.stateList = [
            { "value": "AN", "label": "Andaman and Nicobar Islands" },
            { "value": "AP", "label": "Andhra Pradesh" },
            { "value": "AR", "label": "Arunachal Pradesh" },
            { "value": "AS", "label": "Assam" },
            { "value": "BR", "label": "Bihar" },
            { "value": "CG", "label": "Chandigarh" },
            { "value": "CH", "label": "Chhattisgarh" },
            { "value": "DH", "label": "Dadra and Nagar Haveli" },
            { "value": "DD", "label": "Daman and Diu" },
            { "value": "DL", "label": "Delhi" },
            { "value": "GA", "label": "Goa" },
            { "value": "GJ", "label": "Gujarat" },
            { "value": "HR", "label": "Haryana" },
            { "value": "HP", "label": "Himachal Pradesh" },
            { "value": "JK", "label": "Jammu and Kashmir" },
            { "value": "JH", "label": "Jharkhand" },
            { "value": "KA", "label": "Karnataka" },
            { "value": "KL", "label": "Kerala" },
            { "value": "LD", "label": "Lakshadweep" },
            { "value": "MP", "label": "Madhya Pradesh" },
            { "value": "MH", "label": "Maharashtra" },
            { "value": "MN", "label": "Manipur" },
            { "value": "ML", "label": "Meghalaya" },
            { "value": "MZ", "label": "Mizoram" },
            { "value": "NL", "label": "Nagaland" },
            { "value": "OR", "label": "Odisha" },
            { "value": "PY", "label": "Puducherry" },
            { "value": "PB", "label": "Punjab" },
            { "value": "RJ", "label": "Rajasthan" },
            { "value": "SK", "label": "Sikkim" },
            { "value": "TN", "label": "Tamil Nadu" },
            { "value": "TS", "label": "Telangana" },
            { "value": "TR", "label": "Tripura" },
            { "value": "UK", "label": "Uttarakhand" },
            { "value": "UP", "label": "Uttar Pradesh" },
            { "value": "WB", "label": "West Bengal" },
        ];
    }
    getStateList() {
        return this.stateList;
    }
}
AddressService.ɵfac = function AddressService_Factory(t) { return new (t || AddressService)(); };
AddressService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AddressService, factory: AddressService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddressService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=admin-panel-admin-panel-module-es2015.js.map