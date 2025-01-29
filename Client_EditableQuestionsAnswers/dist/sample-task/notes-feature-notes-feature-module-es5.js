function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notes-feature-notes-feature-module"], {
  /***/
  "./src/app/notes-feature/edit-notes-component/edit-notes-component.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/notes-feature/edit-notes-component/edit-notes-component.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: EditNotesComponentComponent */

  /***/
  function srcAppNotesFeatureEditNotesComponentEditNotesComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditNotesComponentComponent", function () {
      return EditNotesComponentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var EditNotesComponentComponent = /*#__PURE__*/function () {
      function EditNotesComponentComponent() {
        _classCallCheck(this, EditNotesComponentComponent);

        this.itemToBeEdited = {
          note: ""
        };
        this.onSaveEditedItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(EditNotesComponentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.editedItemDetails) this.itemToBeEdited = Object.assign({}, this.editedItemDetails.list[this.editedItemDetails.index]);
        }
      }, {
        key: "saveEditedItem",
        value: function saveEditedItem() {
          this.editedItemDetails.list[this.editedItemDetails.index] = this.itemToBeEdited;
          this.onSaveEditedItem.emit();
        }
      }]);

      return EditNotesComponentComponent;
    }();

    EditNotesComponentComponent.ɵfac = function EditNotesComponentComponent_Factory(t) {
      return new (t || EditNotesComponentComponent)();
    };

    EditNotesComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditNotesComponentComponent,
      selectors: [["app-edit-notes-component"]],
      inputs: {
        editedItemDetails: "editedItemDetails"
      },
      outputs: {
        onSaveEditedItem: "onSaveEditedItem"
      },
      decls: 6,
      vars: 1,
      consts: [[1, "modal"], [1, "modal-content"], [1, "edit-notes", 3, "ngModel", "ngModelChange"], [1, "save-btn-container"], [1, "save-btn", 3, "click"]],
      template: function EditNotesComponentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "textarea", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditNotesComponentComponent_Template_textarea_ngModelChange_2_listener($event) {
            return ctx.itemToBeEdited.note = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditNotesComponentComponent_Template_button_click_4_listener() {
            return ctx.saveEditedItem();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.itemToBeEdited.note);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGVzLWZlYXR1cmUvZWRpdC1ub3Rlcy1jb21wb25lbnQvZWRpdC1ub3Rlcy1jb21wb25lbnQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditNotesComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-notes-component',
          templateUrl: './edit-notes-component.component.html',
          styleUrls: ['./edit-notes-component.component.scss']
        }]
      }], function () {
        return [];
      }, {
        editedItemDetails: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onSaveEditedItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/notes-feature/notes-component/notes-component.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/notes-feature/notes-component/notes-component.component.ts ***!
    \****************************************************************************/

  /*! exports provided: NotesComponentComponent */

  /***/
  function srcAppNotesFeatureNotesComponentNotesComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotesComponentComponent", function () {
      return NotesComponentComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _edit_notes_component_edit_notes_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../edit-notes-component/edit-notes-component.component */
    "./src/app/notes-feature/edit-notes-component/edit-notes-component.component.ts");

    function NotesComponentComponent_div_1_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotesComponentComponent_div_1_div_6_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var j_r7 = ctx.index;

          var noteTypeItems_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.voteItem(noteTypeItems_r2.notesList, j_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotesComponentComponent_div_1_div_6_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var j_r7 = ctx.index;

          var noteTypeItems_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.removeItem(noteTypeItems_r2.notesList, j_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "x");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotesComponentComponent_div_1_div_6_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var j_r7 = ctx.index;

          var noteTypeItems_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.editItem(noteTypeItems_r2.notesList, j_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var noteType_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](noteType_r6.note);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Vote ", noteType_r6.vote, "");
      }
    }

    function NotesComponentComponent_div_1_textarea_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "textarea", 13, 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NotesComponentComponent_div_1_textarea_7_Template_textarea_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r16.currentNote.note = $event;
        })("keydown", function NotesComponentComponent_div_1_textarea_7_Template_textarea_keydown_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var noteTypeItems_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.saveContent(noteTypeItems_r2.notesList, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.currentNote.note);
      }
    }

    function NotesComponentComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotesComponentComponent_div_1_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var i_r3 = ctx.index;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.addItem(i_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NotesComponentComponent_div_1_div_6_Template, 10, 2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NotesComponentComponent_div_1_textarea_7_Template, 2, 1, "textarea", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var noteTypeItems_r2 = ctx.$implicit;
        var i_r3 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](noteTypeItems_r2.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", noteTypeItems_r2.notesList);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.newNote && i_r3 == ctx_r0.currentNote.index);
      }
    }

    function NotesComponentComponent_app_edit_notes_component_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-edit-notes-component", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSaveEditedItem", function NotesComponentComponent_app_edit_notes_component_2_Template_app_edit_notes_component_onSaveEditedItem_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.saveEditedItem($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editedItemDetails", ctx_r1.currentItemToBeEdited);
      }
    }

    var NotesComponentComponent = /*#__PURE__*/function () {
      function NotesComponentComponent() {
        _classCallCheck(this, NotesComponentComponent);

        this.currentNote = {
          note: ""
        };
        this.showModal = false;
        this.newNote = false;
      }

      _createClass(NotesComponentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "saveContent",
        value: function saveContent(list, event) {
          if (event.key == "Enter") {
            list.push({
              id: Math.random(),
              note: this.currentNote.note
            });
            this.newNote = false;
            this.currentNote.note = "";
          }
        }
      }, {
        key: "editItem",
        value: function editItem(list, index) {
          this.showModal = true;
          this.currentItemToBeEdited = {
            list: list,
            index: index
          };
        }
      }, {
        key: "addItem",
        value: function addItem(index) {
          this.newNote = true;
          this.currentNote.index = index;
        }
      }, {
        key: "removeItem",
        value: function removeItem(list, index) {
          list.splice(index, 1);
        }
      }, {
        key: "voteItem",
        value: function voteItem(list, index) {
          list[index].vote++;
        }
      }, {
        key: "saveEditedItem",
        value: function saveEditedItem(editedItemDetails) {
          this.showModal = false;
        }
      }]);

      return NotesComponentComponent;
    }();

    NotesComponentComponent.ɵfac = function NotesComponentComponent_Factory(t) {
      return new (t || NotesComponentComponent)();
    };

    NotesComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotesComponentComponent,
      selectors: [["app-notes-component"]],
      inputs: {
        noteTypes: "noteTypes"
      },
      decls: 3,
      vars: 2,
      consts: [[1, "note-type-container"], ["class", "what-wentwell-container items", 4, "ngFor", "ngForOf"], [3, "editedItemDetails", "onSaveEditedItem", 4, "ngIf"], [1, "what-wentwell-container", "items"], [1, "hand-cursor", 3, "click"], [1, "list-container"], ["class", "notes-container", "class", "notes-container", 4, "ngFor", "ngForOf"], ["class", "notes-container", 3, "ngModel", "ngModelChange", "keydown", 4, "ngIf"], [1, "notes-container"], [1, "action-btns"], [1, "vote-btn", 3, "click"], [1, "delete-btn", 3, "click"], [1, "edit-btn", 3, "click"], [1, "notes-container", 3, "ngModel", "ngModelChange", "keydown"], ["whatWentWellElem", ""], [3, "editedItemDetails", "onSaveEditedItem"]],
      template: function NotesComponentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotesComponentComponent_div_1_Template, 8, 3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NotesComponentComponent_app_edit_notes_component_2_Template, 1, 1, "app-edit-notes-component", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.noteTypes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showModal);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _edit_notes_component_edit_notes_component_component__WEBPACK_IMPORTED_MODULE_3__["EditNotesComponentComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGVzLWZlYXR1cmUvbm90ZXMtY29tcG9uZW50L25vdGVzLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotesComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-notes-component',
          templateUrl: './notes-component.component.html',
          styleUrls: ['./notes-component.component.scss']
        }]
      }], function () {
        return [];
      }, {
        noteTypes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/notes-feature/notes-feature-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/notes-feature/notes-feature-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: NotesFeatureRoutingModule */

  /***/
  function srcAppNotesFeatureNotesFeatureRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotesFeatureRoutingModule", function () {
      return NotesFeatureRoutingModule;
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


    var _notes_root_notes_root_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notes-root/notes-root.component */
    "./src/app/notes-feature/notes-root/notes-root.component.ts");

    var routes = [{
      path: '',
      component: _notes_root_notes_root_component__WEBPACK_IMPORTED_MODULE_3__["NotesRootComponent"]
    }];

    var NotesFeatureRoutingModule = /*#__PURE__*/_createClass(function NotesFeatureRoutingModule() {
      _classCallCheck(this, NotesFeatureRoutingModule);
    });

    NotesFeatureRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NotesFeatureRoutingModule
    });
    NotesFeatureRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NotesFeatureRoutingModule_Factory(t) {
        return new (t || NotesFeatureRoutingModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotesFeatureRoutingModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotesFeatureRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/notes-feature/notes-feature.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/notes-feature/notes-feature.module.ts ***!
    \*******************************************************/

  /*! exports provided: NotesFeatureModule */

  /***/
  function srcAppNotesFeatureNotesFeatureModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotesFeatureModule", function () {
      return NotesFeatureModule;
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


    var _notes_root_notes_root_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./notes-root/notes-root.component */
    "./src/app/notes-feature/notes-root/notes-root.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _edit_notes_component_edit_notes_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./edit-notes-component/edit-notes-component.component */
    "./src/app/notes-feature/edit-notes-component/edit-notes-component.component.ts");
    /* harmony import */


    var _notes_component_notes_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./notes-component/notes-component.component */
    "./src/app/notes-feature/notes-component/notes-component.component.ts");
    /* harmony import */


    var _sort_by_title_sort_by_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sort-by-title/sort-by-title.component */
    "./src/app/notes-feature/sort-by-title/sort-by-title.component.ts");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _notes_feature_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./notes-feature-routing.module */
    "./src/app/notes-feature/notes-feature-routing.module.ts");

    var NotesFeatureModule = /*#__PURE__*/_createClass(function NotesFeatureModule() {
      _classCallCheck(this, NotesFeatureModule);
    });

    NotesFeatureModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NotesFeatureModule
    });
    NotesFeatureModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NotesFeatureModule_Factory(t) {
        return new (t || NotesFeatureModule)();
      },
      providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _notes_feature_routing_module__WEBPACK_IMPORTED_MODULE_8__["NotesFeatureRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotesFeatureModule, {
        declarations: [_notes_root_notes_root_component__WEBPACK_IMPORTED_MODULE_2__["NotesRootComponent"], _edit_notes_component_edit_notes_component_component__WEBPACK_IMPORTED_MODULE_4__["EditNotesComponentComponent"], _notes_component_notes_component_component__WEBPACK_IMPORTED_MODULE_5__["NotesComponentComponent"], _sort_by_title_sort_by_title_component__WEBPACK_IMPORTED_MODULE_6__["SortByTitleComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _notes_feature_routing_module__WEBPACK_IMPORTED_MODULE_8__["NotesFeatureRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotesFeatureModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _notes_feature_routing_module__WEBPACK_IMPORTED_MODULE_8__["NotesFeatureRoutingModule"]],
          declarations: [_notes_root_notes_root_component__WEBPACK_IMPORTED_MODULE_2__["NotesRootComponent"], _edit_notes_component_edit_notes_component_component__WEBPACK_IMPORTED_MODULE_4__["EditNotesComponentComponent"], _notes_component_notes_component_component__WEBPACK_IMPORTED_MODULE_5__["NotesComponentComponent"], _sort_by_title_sort_by_title_component__WEBPACK_IMPORTED_MODULE_6__["SortByTitleComponent"]],
          providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/notes-feature/notes-root/notes-root.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/notes-feature/notes-root/notes-root.component.ts ***!
    \******************************************************************/

  /*! exports provided: NotesRootComponent */

  /***/
  function srcAppNotesFeatureNotesRootNotesRootComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotesRootComponent", function () {
      return NotesRootComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _sort_by_title_sort_by_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../sort-by-title/sort-by-title.component */
    "./src/app/notes-feature/sort-by-title/sort-by-title.component.ts");
    /* harmony import */


    var _notes_component_notes_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../notes-component/notes-component.component */
    "./src/app/notes-feature/notes-component/notes-component.component.ts");

    var _c0 = ["whatWentWellElem"];
    var _c1 = ["whatCanBeImprovedElem"];
    var _c2 = ["startDoingElem"];
    var _c3 = ["actionItemsElem"];

    var NotesRootComponent = /*#__PURE__*/function () {
      function NotesRootComponent(dataService) {
        _classCallCheck(this, NotesRootComponent);

        this.dataService = dataService;
        this.title = 'sample-task';
        this.editedItem = {};
        this.showModal = false;
      }

      _createClass(NotesRootComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.dataService.currentData.subscribe(function (data) {
            _this.noteTypes = data;
          });
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          /*
            if(this.whatWentWellElem) {
              this.whatWentWellElem.changes.subscribe(()=>
              {
                if(this.whatWentWellElem.first)
                  this.whatWentWellElem.first.nativeElement.focus();
              })
            }
            if(this.whatCanBeImprovedElem) {
              this.whatCanBeImprovedElem.changes.subscribe(()=>
              {
                if(this.whatCanBeImprovedElem.first)
                  this.whatCanBeImprovedElem.first.nativeElement.focus();
              })
            }
            if(this.startDoingElem) {
              this.startDoingElem.changes.subscribe(()=>
              {
                if(this.startDoingElem.first)
                  this.startDoingElem.first.nativeElement.focus();
              })
            }
            if(this.actionItemsElem) {
              this.actionItemsElem.changes.subscribe(()=>
              {
                if(this.actionItemsElem.first)
                 this.actionItemsElem.first.nativeElement.focus();
              })
            }  */
        }
      }]);

      return NotesRootComponent;
    }();

    NotesRootComponent.ɵfac = function NotesRootComponent_Factory(t) {
      return new (t || NotesRootComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]));
    };

    NotesRootComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotesRootComponent,
      selectors: [["app-notes-root"]],
      viewQuery: function NotesRootComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.whatWentWellElem = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.whatCanBeImprovedElem = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.startDoingElem = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.actionItemsElem = _t);
        }
      },
      decls: 5,
      vars: 1,
      consts: [[1, "heading"], [1, "main-container"], [3, "noteTypes"]],
      template: function NotesRootComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Retrospective");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-sort-by-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-notes-component", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("noteTypes", ctx.noteTypes);
        }
      },
      directives: [_sort_by_title_sort_by_title_component__WEBPACK_IMPORTED_MODULE_2__["SortByTitleComponent"], _notes_component_notes_component_component__WEBPACK_IMPORTED_MODULE_3__["NotesComponentComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGVzLWZlYXR1cmUvbm90ZXMtcm9vdC9ub3Rlcy1yb290LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotesRootComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-notes-root',
          templateUrl: './notes-root.component.html',
          styleUrls: ['./notes-root.component.scss']
        }]
      }], function () {
        return [{
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }];
      }, {
        whatWentWellElem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: ['whatWentWellElem']
        }],
        whatCanBeImprovedElem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: ['whatCanBeImprovedElem']
        }],
        startDoingElem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: ['startDoingElem']
        }],
        actionItemsElem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: ['actionItemsElem']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/notes-feature/sort-by-title/sort-by-title.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/notes-feature/sort-by-title/sort-by-title.component.ts ***!
    \************************************************************************/

  /*! exports provided: SortByTitleComponent */

  /***/
  function srcAppNotesFeatureSortByTitleSortByTitleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortByTitleComponent", function () {
      return SortByTitleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var SortByTitleComponent = /*#__PURE__*/function () {
      function SortByTitleComponent(dataService) {
        _classCallCheck(this, SortByTitleComponent);

        this.dataService = dataService;
        this.sortByTitle = "default";
      }

      _createClass(SortByTitleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "sortByParams",
        value: function sortByParams() {
          this.dataService.sortData(this.sortByTitle);
        }
      }]);

      return SortByTitleComponent;
    }();

    SortByTitleComponent.ɵfac = function SortByTitleComponent_Factory(t) {
      return new (t || SortByTitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]));
    };

    SortByTitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SortByTitleComponent,
      selectors: [["app-sort-by-title"]],
      decls: 5,
      vars: 1,
      consts: [[1, "hand-cursor", 3, "ngModel", "ngModelChange", "change"], ["value", "default"], ["value", "title"]],
      template: function SortByTitleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SortByTitleComponent_Template_select_ngModelChange_0_listener($event) {
            return ctx.sortByTitle = $event;
          })("change", function SortByTitleComponent_Template_select_change_0_listener() {
            return ctx.sortByParams();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sortByTitle);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGVzLWZlYXR1cmUvc29ydC1ieS10aXRsZS9zb3J0LWJ5LXRpdGxlLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SortByTitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sort-by-title',
          templateUrl: './sort-by-title.component.html',
          styleUrls: ['./sort-by-title.component.scss']
        }]
      }], function () {
        return [{
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=notes-feature-notes-feature-module-es5.js.map