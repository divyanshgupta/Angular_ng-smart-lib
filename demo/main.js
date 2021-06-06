(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/CPo":
/*!******************************************************!*\
  !*** ../ng-smart-lib/src/lib/ng-smart-lib.module.ts ***!
  \******************************************************/
/*! exports provided: NgSmartLibModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSmartLibModule", function() { return NgSmartLibModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/alert/alert.component */ "yYe5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/timer/timer.component */ "cyKs");
/* harmony import */ var _components_category_selector_category_selector_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/category-selector/category-selector.component */ "JH/r");
/* harmony import */ var _components_category_selector_category_set_category_set_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/category-selector/category-set/category-set.component */ "jlG9");








class NgSmartLibModule {
}
NgSmartLibModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgSmartLibModule });
NgSmartLibModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgSmartLibModule_Factory(t) { return new (t || NgSmartLibModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgSmartLibModule, { declarations: [_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__["NgAlertComponent"], _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_3__["NgTimerComponent"], _components_category_selector_category_selector_component__WEBPACK_IMPORTED_MODULE_4__["NgCategorySelectorComponent"], _components_category_selector_category_set_category_set_component__WEBPACK_IMPORTED_MODULE_5__["NgCategorySetComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]], exports: [_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__["NgAlertComponent"], _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_3__["NgTimerComponent"], _components_category_selector_category_selector_component__WEBPACK_IMPORTED_MODULE_4__["NgCategorySelectorComponent"], _components_category_selector_category_set_category_set_component__WEBPACK_IMPORTED_MODULE_5__["NgCategorySetComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSmartLibModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__["NgAlertComponent"], _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_3__["NgTimerComponent"], _components_category_selector_category_selector_component__WEBPACK_IMPORTED_MODULE_4__["NgCategorySelectorComponent"], _components_category_selector_category_set_category_set_component__WEBPACK_IMPORTED_MODULE_5__["NgCategorySetComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                exports: [_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__["NgAlertComponent"], _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_3__["NgTimerComponent"], _components_category_selector_category_selector_component__WEBPACK_IMPORTED_MODULE_4__["NgCategorySelectorComponent"], _components_category_selector_category_set_category_set_component__WEBPACK_IMPORTED_MODULE_5__["NgCategorySetComponent"]],
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_components_category_selector_category_selector_component__WEBPACK_IMPORTED_MODULE_4__["NgCategorySelectorComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgPluralCase"], _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__["NgAlertComponent"], _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_3__["NgTimerComponent"], _components_category_selector_category_selector_component__WEBPACK_IMPORTED_MODULE_4__["NgCategorySelectorComponent"], _components_category_selector_category_set_category_set_component__WEBPACK_IMPORTED_MODULE_5__["NgCategorySetComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["KeyValuePipe"]]);


/***/ }),

/***/ "/WW7":
/*!*********************************************************!*\
  !*** ./src/app/components/timer/main/main.component.ts ***!
  \*********************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _timer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../timer.component */ "PVgB");



class MainComponent {
    constructor() { }
    ngOnInit() { }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 1, vars: 0, template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-timer");
    } }, directives: [_timer_component__WEBPACK_IMPORTED_MODULE_1__["TimerComponent"]], styles: ["app-timer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\ndiv[_ngcontent-%COMP%] {\n  width: 200px;\n  font-size: 26px;\n  background-color: #585856;\n  padding: 10px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  margin: 10px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: 1px solid lightgrey;\n  padding: 5px 20px;\n  margin: 5px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: 0 !important;\n}\n\n.paused[_ngcontent-%COMP%], .disabled[_ngcontent-%COMP%] {\n  background-color: lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLXNtYXJ0LWxpYi1zaG93Y2FzZS9zcmMvYXBwL2NvbXBvbmVudHMvdGltZXIvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLDZFQUE2RTtFQUM3RSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCw2RUFBNkU7QUFDL0U7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUsMkJBQTJCO0FBQzdCIiwiZmlsZSI6InByb2plY3RzL25nLXNtYXJ0LWxpYi1zaG93Y2FzZS9zcmMvYXBwL2NvbXBvbmVudHMvdGltZXIvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtdGltZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5kaXYge1xuICB3aWR0aDogMjAwcHg7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4NTg1NjtcbiAgcGFkZGluZzogMTBweDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuICBwYWRkaW5nOiA1cHggMjBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG5idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5wYXVzZWQsXG4uZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/Angular_ng-smart-lib/Angular_ng-smart-lib/projects/ng-smart-lib-showcase/src/main.ts */"zUnb");


/***/ }),

/***/ "0hKo":
/*!*********************************************************!*\
  !*** ./src/app/components/alert/main/main.component.ts ***!
  \*********************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../alert.component */ "QC9C");



class MainComponent {
    constructor() { }
    ngOnInit() { }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 1, vars: 0, template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-alert");
    } }, directives: [_alert_component__WEBPACK_IMPORTED_MODULE_1__["AlertComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1zbWFydC1saWItc2hvd2Nhc2Uvc3JjL2FwcC9jb21wb25lbnRzL2FsZXJ0L21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "8ViA":
/*!**************************************************************************!*\
  !*** ./src/app/components/category-selector/category-selector.module.ts ***!
  \**************************************************************************/
/*! exports provided: CategorySelectorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorySelectorModule", function() { return CategorySelectorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _category_selector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category-selector.component */ "Troj");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "TpNn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var projects_ng_smart_lib_src_public_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! projects/ng-smart-lib/src/public-api */ "IXCA");









class CategorySelectorModule {
}
CategorySelectorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CategorySelectorModule });
CategorySelectorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CategorySelectorModule_Factory(t) { return new (t || CategorySelectorModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            projects_ng_smart_lib_src_public_api__WEBPACK_IMPORTED_MODULE_6__["NgSmartLibModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{ path: 'category-selector', component: _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"] }]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CategorySelectorModule, { declarations: [_category_selector_component__WEBPACK_IMPORTED_MODULE_3__["CategorySelectorComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        projects_ng_smart_lib_src_public_api__WEBPACK_IMPORTED_MODULE_6__["NgSmartLibModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]], exports: [_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategorySelectorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    projects_ng_smart_lib_src_public_api__WEBPACK_IMPORTED_MODULE_6__["NgSmartLibModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{ path: 'category-selector', component: _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"] }]),
                ],
                declarations: [_category_selector_component__WEBPACK_IMPORTED_MODULE_3__["CategorySelectorComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]],
                exports: [_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "IXCA":
/*!*****************************************!*\
  !*** ../ng-smart-lib/src/public-api.ts ***!
  \*****************************************/
/*! exports provided: NgAlertComponent, NgTimerComponent, NgAlertService, NgCategorySelectorComponent, NgSmartLibModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/components/alert/alert.component */ "yYe5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgAlertComponent", function() { return _lib_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__["NgAlertComponent"]; });

/* harmony import */ var _lib_components_timer_timer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/components/timer/timer.component */ "cyKs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgTimerComponent", function() { return _lib_components_timer_timer_component__WEBPACK_IMPORTED_MODULE_1__["NgTimerComponent"]; });

/* harmony import */ var _lib_components_alert_ng_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/components/alert/ng-alert-service */ "vK3H");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgAlertService", function() { return _lib_components_alert_ng_alert_service__WEBPACK_IMPORTED_MODULE_2__["NgAlertService"]; });

/* harmony import */ var _lib_components_category_selector_category_selector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/components/category-selector/category-selector.component */ "JH/r");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgCategorySelectorComponent", function() { return _lib_components_category_selector_category_selector_component__WEBPACK_IMPORTED_MODULE_3__["NgCategorySelectorComponent"]; });

/* harmony import */ var _lib_ng_smart_lib_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/ng-smart-lib.module */ "/CPo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgSmartLibModule", function() { return _lib_ng_smart_lib_module__WEBPACK_IMPORTED_MODULE_4__["NgSmartLibModule"]; });

/*
 * Public API Surface of ng-smart-lib
 */







/***/ }),

/***/ "JH/r":
/*!*******************************************************************************************!*\
  !*** ../ng-smart-lib/src/lib/components/category-selector/category-selector.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: NgCategorySelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgCategorySelectorComponent", function() { return NgCategorySelectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "+kfY");




const CATEGORY_CONTROL_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => NgCategorySelectorComponent),
    multi: true,
};
class NgCategorySelectorComponent {
    constructor() {
        this.preselection = [];
        this.preselectionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.selection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    set select(value) {
        this.preselectionSubject.next(value);
    }
    ngOnInit() {
        this.preselectionSubject.subscribe((value) => {
            if (value) {
                console.log(`Preselection Subject Changed to ${JSON.stringify(value)}`);
                this.preselection = this.getSelectionHierarchy(this.data, value);
                console.log(`Preselection value set to ${this.preselection}`);
            }
            else if (value == null) {
                this.preselection = null;
            }
        });
    }
    writeValue(value) {
        this.preselectionSubject.next(value || null);
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    getSelectionHierarchy(tree, searchedCategory) {
        let result;
        for (const node of tree) {
            if (node.hasOwnProperty('children')) {
                result = this.getSelectionHierarchy(node.children, searchedCategory);
                if (result && result.length)
                    return [node.id, ...result];
            }
            if (node.id === searchedCategory.id)
                return [node.id];
        }
        return result;
    }
    onCategorySelection(event) {
        this.selection.emit(event);
        if (this.onModelChange) {
            this.onModelChange(event);
            this.onTouch(event);
        }
    }
}
NgCategorySelectorComponent.ɵfac = function NgCategorySelectorComponent_Factory(t) { return new (t || NgCategorySelectorComponent)(); };
NgCategorySelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgCategorySelectorComponent, selectors: [["lib-category-selector"]], inputs: { data: "data", select: "select" }, outputs: { selection: "selection" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([CATEGORY_CONTROL_ACCESSOR])], decls: 1, vars: 2, consts: [[3, "data", "selected", "selection"]], template: function NgCategorySelectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "lib-category-set", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selection", function NgCategorySelectorComponent_Template_lib_category_set_selection_0_listener($event) { return ctx.onCategorySelection($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.data)("selected", ctx.preselection);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1zbWFydC1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NhdGVnb3J5LXNlbGVjdG9yL2NhdGVnb3J5LXNlbGVjdG9yLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgCategorySelectorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lib-category-selector',
                providers: [CATEGORY_CONTROL_ACCESSOR],
                templateUrl: './category-selector.component.html',
                styleUrls: ['./category-selector.component.css'],
            }]
    }], null, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "Jl1l":
/*!**************************************************!*\
  !*** ./src/app/components/timer/timer.module.ts ***!
  \**************************************************/
/*! exports provided: TimerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerModule", function() { return TimerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _timer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timer.component */ "PVgB");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "/WW7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var projects_ng_smart_lib_src_public_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! projects/ng-smart-lib/src/public-api */ "IXCA");









class TimerModule {
}
TimerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TimerModule });
TimerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TimerModule_Factory(t) { return new (t || TimerModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            projects_ng_smart_lib_src_public_api__WEBPACK_IMPORTED_MODULE_6__["NgSmartLibModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{ path: 'timer', component: _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"] }]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TimerModule, { declarations: [_timer_component__WEBPACK_IMPORTED_MODULE_3__["TimerComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        projects_ng_smart_lib_src_public_api__WEBPACK_IMPORTED_MODULE_6__["NgSmartLibModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]], exports: [_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    projects_ng_smart_lib_src_public_api__WEBPACK_IMPORTED_MODULE_6__["NgSmartLibModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{ path: 'timer', component: _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"] }]),
                ],
                declarations: [_timer_component__WEBPACK_IMPORTED_MODULE_3__["TimerComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]],
                exports: [_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "PVgB":
/*!*****************************************************!*\
  !*** ./src/app/components/timer/timer.component.ts ***!
  \*****************************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return TimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _ng_smart_lib_src_lib_components_timer_timer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../ng-smart-lib/src/lib/components/timer/timer.component */ "cyKs");



function TimerComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerComponent_ng_template_1_Template_button_click_4_listener() { const paused_r2 = ctx.isPaused; const start_r3 = ctx.start; const pause_r4 = ctx.pause; return paused_r2 ? start_r3() : pause_r4(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r1 = ctx.value;
    const paused_r2 = ctx.isPaused;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.emojies[value_r1 % ctx_r0.emojies.length]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", paused_r2 ? "START" : "PAUSE", " ");
} }
class TimerComponent {
    constructor() {
        this.emojies = ['🌚', '🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌙'];
    }
    ngOnInit() {
        // throw new Error('Method not implemented.');
    }
}
TimerComponent.ɵfac = function TimerComponent_Factory(t) { return new (t || TimerComponent)(); };
TimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimerComponent, selectors: [["app-timer"]], decls: 2, vars: 2, consts: [[3, "interval", "init"], [3, "click"]], template: function TimerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "lib-ng-timer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TimerComponent_ng_template_1_Template, 6, 3, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 500)("init", 0);
    } }, directives: [_ng_smart_lib_src_lib_components_timer_timer_component__WEBPACK_IMPORTED_MODULE_1__["NgTimerComponent"]], styles: ["div[_ngcontent-%COMP%] {\n  width: 200px;\n  font-size: 18px;\n  background-color: #f1f1f1;\n  padding: 10px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: 1px solid lightgrey;\n  padding: 5px 20px;\n  margin: 5px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: 0 !important;\n}\n\n.paused[_ngcontent-%COMP%], .disabled[_ngcontent-%COMP%] {\n  background-color: lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLXNtYXJ0LWxpYi1zaG93Y2FzZS9zcmMvYXBwL2NvbXBvbmVudHMvdGltZXIvdGltZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYiw2RUFBNkU7QUFDL0U7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsNkVBQTZFO0FBQy9FOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLDJCQUEyQjtBQUM3QiIsImZpbGUiOiJwcm9qZWN0cy9uZy1zbWFydC1saWItc2hvd2Nhc2Uvc3JjL2FwcC9jb21wb25lbnRzL3RpbWVyL3RpbWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuICB3aWR0aDogMjAwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbnAge1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIG1hcmdpbjogNXB4O1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xufVxuXG4ucGF1c2VkLFxuLmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-timer',
                templateUrl: './timer.component.html',
                styleUrls: ['./timer.component.css'],
            }]
    }], null, null); })();


/***/ }),

/***/ "QC9C":
/*!*****************************************************!*\
  !*** ./src/app/components/alert/alert.component.ts ***!
  \*****************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var projects_ng_smart_lib_src_lib_components_alert_ng_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/ng-smart-lib/src/lib/components/alert/ng-alert-service */ "vK3H");
/* harmony import */ var _ng_smart_lib_src_lib_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../ng-smart-lib/src/lib/components/alert/alert.component */ "yYe5");




class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
    }
    createSuccessMessage() {
        console.log('testing');
        this.alertService.createSuccessAlert('Sample success message');
    }
    createDangerMessage() {
        this.alertService.createDangerAlert('Sample danger message');
    }
    createWarningMessage() {
        this.alertService.createWarningAlert('Sample warning message');
    }
    createInfoMessage() {
        this.alertService.createInfoAlert('Sample info message');
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](projects_ng_smart_lib_src_lib_components_alert_ng_alert_service__WEBPACK_IMPORTED_MODULE_1__["NgAlertService"])); };
AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["app-alert"]], decls: 9, vars: 0, consts: [[1, "success", 3, "click"], [1, "danger", 3, "click"], [1, "warning", 3, "click"], [1, "info", 3, "click"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "lib-ng-alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_Template_button_click_1_listener() { return ctx.createSuccessMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create success alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_Template_button_click_3_listener() { return ctx.createDangerMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Create danger alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_Template_button_click_5_listener() { return ctx.createWarningMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Create warning alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_Template_button_click_7_listener() { return ctx.createInfoMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Create info alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_smart_lib_src_lib_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__["NgAlertComponent"]], styles: ["div[_ngcontent-%COMP%] {\n  width: 200px;\n  font-size: 18px;\n  background-color: #f1f1f1;\n  padding: 10px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: 1px solid lightgrey;\n  padding: 5px 20px;\n  margin: 5px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: 0 !important;\n}\n\n.paused[_ngcontent-%COMP%], .disabled[_ngcontent-%COMP%] {\n  background-color: lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLXNtYXJ0LWxpYi1zaG93Y2FzZS9zcmMvYXBwL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYiw2RUFBNkU7QUFDL0U7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsNkVBQTZFO0FBQy9FOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLDJCQUEyQjtBQUM3QiIsImZpbGUiOiJwcm9qZWN0cy9uZy1zbWFydC1saWItc2hvd2Nhc2Uvc3JjL2FwcC9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuICB3aWR0aDogMjAwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbnAge1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIG1hcmdpbjogNXB4O1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xufVxuXG4ucGF1c2VkLFxuLmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-alert',
                templateUrl: './alert.component.html',
                styleUrls: ['./alert.component.css'],
            }]
    }], function () { return [{ type: projects_ng_smart_lib_src_lib_components_alert_ng_alert_service__WEBPACK_IMPORTED_MODULE_1__["NgAlertService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
// import { Component } from '@angular/core';
// import { NgAlertService } from '../../../ng-smart-lib/src/lib/components/alert/ng-alert-service';



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 0, consts: [[1, "header"], ["href", "", "routerLink", "timer"], ["href", "", "routerLink", "alert"], ["href", "", "routerLink", "category-selector"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Timer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Category Selector");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1zbWFydC1saWItc2hvd2Nhc2Uvc3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                template: ` <div class="header">
      <ul>
        <li><a href="" routerLink="timer">Timer</a></li>
        <li><a href="" routerLink="alert">Alert</a></li>
        <li><a href="" routerLink="category-selector">Category Selector</a></li>
      </ul>
    </div>
    <router-outlet></router-outlet>`,
                styleUrls: ['./app.component.css'],
            }]
    }], null, null); })();


/***/ }),

/***/ "TpNn":
/*!*********************************************************************!*\
  !*** ./src/app/components/category-selector/main/main.component.ts ***!
  \*********************************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _category_selector_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../category-selector.component */ "Troj");



class MainComponent {
    constructor() { }
    ngOnInit() { }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 1, vars: 0, template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-category-selector");
    } }, directives: [_category_selector_component__WEBPACK_IMPORTED_MODULE_1__["CategorySelectorComponent"]], styles: ["app-timer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\ndiv[_ngcontent-%COMP%] {\n  width: 200px;\n  font-size: 26px;\n  background-color: #585856;\n  padding: 10px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  margin: 10px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: 1px solid lightgrey;\n  padding: 5px 20px;\n  margin: 5px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: 0 !important;\n}\n\n.paused[_ngcontent-%COMP%], .disabled[_ngcontent-%COMP%] {\n  background-color: lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLXNtYXJ0LWxpYi1zaG93Y2FzZS9zcmMvYXBwL2NvbXBvbmVudHMvY2F0ZWdvcnktc2VsZWN0b3IvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLDZFQUE2RTtFQUM3RSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCw2RUFBNkU7QUFDL0U7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUsMkJBQTJCO0FBQzdCIiwiZmlsZSI6InByb2plY3RzL25nLXNtYXJ0LWxpYi1zaG93Y2FzZS9zcmMvYXBwL2NvbXBvbmVudHMvY2F0ZWdvcnktc2VsZWN0b3IvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtdGltZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5kaXYge1xuICB3aWR0aDogMjAwcHg7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4NTg1NjtcbiAgcGFkZGluZzogMTBweDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuICBwYWRkaW5nOiA1cHggMjBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG5idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5wYXVzZWQsXG4uZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Troj":
/*!*****************************************************************************!*\
  !*** ./src/app/components/category-selector/category-selector.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CategorySelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorySelectorComponent", function() { return CategorySelectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _ng_smart_lib_src_lib_components_category_selector_category_selector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../ng-smart-lib/src/lib/components/category-selector/category-selector.component */ "JH/r");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "2kYt");






class CategorySelectorComponent {
    constructor(fb) {
        this.fb = fb;
        this.categoryData = [
            {
                id: 1,
                name: 'Fruits',
                children: [
                    {
                        id: 3,
                        name: 'Tropical',
                        children: [
                            {
                                id: 9,
                                name: 'Subtropical',
                                children: [],
                            },
                        ],
                    },
                    { id: 4, name: 'Melons', children: [] },
                    { id: 5, name: 'Berries', children: [] },
                    { id: 6, name: 'Citrus', children: [] },
                ],
            },
            {
                id: 2,
                name: 'Vegetables',
                children: [
                    { id: 7, name: 'Leaves', children: [] },
                    { id: 8, name: 'Root', children: [] },
                ],
            },
        ];
        // Example 2
        this.list = [
            this.categoryData[0].children[0].children[0],
            this.categoryData[0],
            this.categoryData[1],
            this.categoryData[1].children[1],
        ];
        // Example 3
        this.exampleForm = this.fb.group({
            categoryControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.list[0]),
        });
    }
    ngOnInit() { }
    onCategorySelect(category) {
        this.selectedCat = category;
        if (category) {
            this.output = `Selected category name:  <strong>${category.name}</strong>  (id: ${category.id})`;
        }
        else {
            this.output = 'Choose a category!';
        }
    }
}
CategorySelectorComponent.ɵfac = function CategorySelectorComponent_Factory(t) { return new (t || CategorySelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
CategorySelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategorySelectorComponent, selectors: [["app-category-selector"]], decls: 36, vars: 9, consts: [[3, "data", "selection"], [1, "output", 3, "innerHtml"], [3, "data", "select"], [3, "click"], [1, "reset", 3, "click"], [3, "formGroup"], ["formControlName", "categoryControl", 3, "data"]], template: function CategorySelectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Example 1: Simple category selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\nChoose a category:\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "lib-category-selector", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selection", function CategorySelectorComponent_Template_lib_category_selector_selection_5_listener($event) { return ctx.onCategorySelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Example 2: Setting preselected category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "lib-category-selector", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Select options: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategorySelectorComponent_Template_button_click_14_listener() { return ctx.selection = ctx.list[0]; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Fruits/Tropical/Subtropical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategorySelectorComponent_Template_button_click_16_listener() { return ctx.selection = ctx.list[1]; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Fruits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategorySelectorComponent_Template_button_click_18_listener() { return ctx.selection = ctx.list[2]; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Vegetables");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategorySelectorComponent_Template_button_click_20_listener() { return ctx.selection = ctx.list[3]; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Vegetables/Roots");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategorySelectorComponent_Template_button_click_22_listener() { return ctx.selection = null; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Reset selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Example 3: Using it as a form control");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "lib-category-selector", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Example form raw content:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.categoryData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.output, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.categoryData)("select", ctx.selection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.exampleForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.categoryData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 7, ctx.exampleForm.getRawValue()), "\n");
    } }, directives: [_ng_smart_lib_src_lib_components_category_selector_category_selector_component__WEBPACK_IMPORTED_MODULE_2__["NgCategorySelectorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1zbWFydC1saWItc2hvd2Nhc2Uvc3JjL2FwcC9jb21wb25lbnRzL2NhdGVnb3J5LXNlbGVjdG9yL2NhdGVnb3J5LXNlbGVjdG9yLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategorySelectorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-category-selector',
                templateUrl: './category-selector.component.html',
                styleUrls: ['./category-selector.component.css'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ng_smart_lib_src_lib_ng_smart_lib_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ng-smart-lib/src/lib/ng-smart-lib.module */ "/CPo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _components_timer_timer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/timer/timer.module */ "Jl1l");
/* harmony import */ var _components_alert_alert_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/alert/alert.module */ "eKL1");
/* harmony import */ var _components_category_selector_category_selector_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/category-selector/category-selector.module */ "8ViA");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([]),
            _ng_smart_lib_src_lib_ng_smart_lib_module__WEBPACK_IMPORTED_MODULE_3__["NgSmartLibModule"],
            _components_timer_timer_module__WEBPACK_IMPORTED_MODULE_5__["TimerModule"],
            _components_category_selector_category_selector_module__WEBPACK_IMPORTED_MODULE_7__["CategorySelectorModule"],
            _components_alert_alert_module__WEBPACK_IMPORTED_MODULE_6__["AlertModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _ng_smart_lib_src_lib_ng_smart_lib_module__WEBPACK_IMPORTED_MODULE_3__["NgSmartLibModule"],
        _components_timer_timer_module__WEBPACK_IMPORTED_MODULE_5__["TimerModule"],
        _components_category_selector_category_selector_module__WEBPACK_IMPORTED_MODULE_7__["CategorySelectorModule"],
        _components_alert_alert_module__WEBPACK_IMPORTED_MODULE_6__["AlertModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([]),
                    _ng_smart_lib_src_lib_ng_smart_lib_module__WEBPACK_IMPORTED_MODULE_3__["NgSmartLibModule"],
                    _components_timer_timer_module__WEBPACK_IMPORTED_MODULE_5__["TimerModule"],
                    _components_category_selector_category_selector_module__WEBPACK_IMPORTED_MODULE_7__["CategorySelectorModule"],
                    _components_alert_alert_module__WEBPACK_IMPORTED_MODULE_6__["AlertModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "cyKs":
/*!*******************************************************************!*\
  !*** ../ng-smart-lib/src/lib/components/timer/timer.component.ts ***!
  \*******************************************************************/
/*! exports provided: NgTimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgTimerComponent", function() { return NgTimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");




function NgTimerComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c0 = function (a0, a1, a2, a3) { return { value: a0, isPaused: a1, start: a2, pause: a3 }; };
function NgTimerComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgTimerComponent_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](2, _c0, ctx_r0.value, ctx_r0.isPaused, ctx_r0.start, ctx_r0.pause));
} }
const _c1 = function (a0) { return { paused: a0 }; };
const _c2 = function (a0) { return { disabled: a0 }; };
function NgTimerComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u23F0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgTimerComponent_ng_template_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.isPaused ? ctx_r4.start() : ctx_r4.pause(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgTimerComponent_ng_template_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.stop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "STOP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, !ctx_r2.isPaused));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.isPaused ? "START" : "PAUSE", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, !ctx_r2.isStoppable))("disabled", !ctx_r2.isStoppable);
} }
class NgTimerComponent {
    constructor() {
        this.init = 0;
        this.interval = 1000;
        this.isPaused = true;
        this.start = () => {
            this.isPaused = false;
            this.startTimer();
        };
        this.pause = () => {
            this.isPaused = true;
            this.stopTimer();
        };
        this.stop = () => {
            this.isPaused = true;
            this.value = this.init;
            this.stopTimer();
        };
    }
    ngOnInit() {
        this.value = this.init;
        this.start();
    }
    get isStoppable() {
        return this.init !== this.value;
    }
    startTimer() {
        this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(this.interval).subscribe((_) => {
            this.value++;
        });
    }
    stopTimer() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
NgTimerComponent.ɵfac = function NgTimerComponent_Factory(t) { return new (t || NgTimerComponent)(); };
NgTimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgTimerComponent, selectors: [["lib-ng-timer"]], contentQueries: function NgTimerComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
    } }, inputs: { init: "init", interval: "interval" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["defaultTemplate", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass", "click"], [3, "ngClass", "disabled", "click"]], template: function NgTimerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgTimerComponent_ng_container_0_Template, 2, 7, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgTimerComponent_ng_template_1_Template, 9, 9, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.template)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1zbWFydC1saWIvc3JjL2xpYi9jb21wb25lbnRzL3RpbWVyL3RpbWVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgTimerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lib-ng-timer',
                templateUrl: './timer.component.html',
                styleUrls: ['./timer.component.css'],
            }]
    }], null, { init: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], interval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]]
        }] }); })();


/***/ }),

/***/ "eKL1":
/*!**************************************************!*\
  !*** ./src/app/components/alert/alert.module.ts ***!
  \**************************************************/
/*! exports provided: AlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return AlertModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.component */ "QC9C");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "0hKo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var projects_ng_smart_lib_src_public_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! projects/ng-smart-lib/src/public-api */ "IXCA");









class AlertModule {
}
AlertModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AlertModule });
AlertModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AlertModule_Factory(t) { return new (t || AlertModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            projects_ng_smart_lib_src_public_api__WEBPACK_IMPORTED_MODULE_6__["NgSmartLibModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{ path: 'alert', component: _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"] }]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AlertModule, { declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        projects_ng_smart_lib_src_public_api__WEBPACK_IMPORTED_MODULE_6__["NgSmartLibModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]], exports: [_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    projects_ng_smart_lib_src_public_api__WEBPACK_IMPORTED_MODULE_6__["NgSmartLibModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{ path: 'alert', component: _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"] }]),
                ],
                declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]],
                exports: [_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "jlG9":
/*!***************************************************************************************************!*\
  !*** ../ng-smart-lib/src/lib/components/category-selector/category-set/category-set.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: NgCategorySetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgCategorySetComponent", function() { return NgCategorySetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");




const _c0 = ["vc"];
function NgCategorySetComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgCategorySetComponent_button_0_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.clickChip($event, item_r3, undefined); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", item_r3.id === (ctx_r0.selectedCategory == null ? null : ctx_r0.selectedCategory.id))("invisible", ctx_r0.selectedCategory && ctx_r0.selectedCategory != item_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.name, "\n");
} }
function NgCategorySetComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NgCategorySetComponent {
    constructor(resolver) {
        this.resolver = resolver;
        this.preselectionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.selection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    set selected(value) {
        this.preselectionSubject.next(value);
    }
    ngOnInit() {
        this.preselectionSubject.subscribe((newValue) => {
            if (newValue === null) {
                this.selectedCategory = null;
                this.removeChild();
            }
            if (this.data && newValue) {
                newValue.forEach((nodeID) => {
                    this.data.forEach((node) => {
                        if (node.id === nodeID) {
                            this.clickChip(null, node, newValue);
                        }
                    });
                });
            }
        });
    }
    clickChip(_, category, preselection) {
        this.removeChild();
        if (preselection || preselection === null) {
            this.selectedCategory = category;
        }
        else {
            this.selectedCategory = this.selectedCategory && this.selectedCategory.id === category.id ? null : category;
            this.selection.emit(this.selectedCategory);
        }
        this.insertChild(preselection);
    }
    removeChild() {
        this.vc.clear();
    }
    trackByFn(item) {
        return item.id;
    }
    insertChild(preselection) {
        if (this.selectedCategory && this.selectedCategory.children.length) {
            const compFactory = this.resolver.resolveComponentFactory(NgCategorySetComponent);
            const component = this.vc.createComponent(compFactory);
            component.instance.data = this.selectedCategory.children;
            component.instance.selected = preselection;
            component.instance.selection.subscribe((event) => this.emitSelection(event));
        }
    }
    emitSelection(category) {
        if (category) {
            this.selection.emit(category);
        }
        else {
            this.selection.emit(this.selectedCategory);
        }
    }
}
NgCategorySetComponent.ɵfac = function NgCategorySetComponent_Factory(t) { return new (t || NgCategorySetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"])); };
NgCategorySetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgCategorySetComponent, selectors: [["lib-category-set"]], viewQuery: function NgCategorySetComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.vc = _t.first);
    } }, inputs: { data: "data", selected: "selected" }, outputs: { selection: "selection" }, decls: 4, vars: 3, consts: [[3, "selected", "invisible", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "divider", 4, "ngIf"], ["vc", ""], [3, "click"], [1, "divider"]], template: function NgCategorySetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgCategorySetComponent_button_0_Template, 2, 5, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgCategorySetComponent_span_1_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, null, 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data)("ngForTrackBy", ctx.trackByFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedCategory && (ctx.selectedCategory == null ? null : ctx.selectedCategory.children.length));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n}\n[_nghost-%COMP%]   .invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]   .selected[_ngcontent-%COMP%] {\n  background: orange;\n}\n.divider[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLXNtYXJ0LWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY2F0ZWdvcnktc2VsZWN0b3IvY2F0ZWdvcnktc2V0L2NhdGVnb3J5LXNldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7QUFDaEIiLCJmaWxlIjoicHJvamVjdHMvbmctc21hcnQtbGliL3NyYy9saWIvY29tcG9uZW50cy9jYXRlZ29yeS1zZWxlY3Rvci9jYXRlZ29yeS1zZXQvY2F0ZWdvcnktc2V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbjpob3N0IC5pbnZpc2libGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3QgLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogb3JhbmdlO1xufVxuLmRpdmlkZXIge1xuICBtYXJnaW46IDAgNXB4O1xuICBmb250LXNpemU6IDFlbTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgCategorySetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lib-category-set',
                templateUrl: './category-set.component.html',
                styleUrls: ['./category-set.component.css'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], vc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['vc', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]
        }], selection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "vK3H":
/*!********************************************************************!*\
  !*** ../ng-smart-lib/src/lib/components/alert/ng-alert-service.ts ***!
  \********************************************************************/
/*! exports provided: NgAlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgAlertService", function() { return NgAlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");



class NgAlertService {
    constructor() {
        this.alertMessage$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    createSuccessAlert(message) {
        this.alertMessage$.next(this.createAlertMessage('Success', message, 'green'));
    }
    createDangerAlert(message) {
        this.alertMessage$.next(this.createAlertMessage('Danger', message, 'red'));
    }
    createWarningAlert(message) {
        this.alertMessage$.next(this.createAlertMessage('Warning', message, 'darkorange'));
    }
    createInfoAlert(message) {
        this.alertMessage$.next(this.createAlertMessage('Info', message, 'dodgerblue'));
    }
    createAlertMessage(prefix, message, color) {
        return { prefix, message, color };
    }
}
NgAlertService.ɵfac = function NgAlertService_Factory(t) { return new (t || NgAlertService)(); };
NgAlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgAlertService, factory: NgAlertService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgAlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "yYe5":
/*!*******************************************************************!*\
  !*** ../ng-smart-lib/src/lib/components/alert/alert.component.ts ***!
  \*******************************************************************/
/*! exports provided: NgAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgAlertComponent", function() { return NgAlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _ng_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ng-alert-service */ "vK3H");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "2kYt");





const _c0 = function (a0) { return { background: a0 }; };
function NgAlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgAlertComponent_div_0_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.closeAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alertMessage_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, alertMessage_r1.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", alertMessage_r1.prefix, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", alertMessage_r1.message, " ");
} }
class NgAlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
        this.close$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.alertMessage$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.alertService.alertMessage$, this.close$);
    }
    closeAlert() {
        this.close$.next();
    }
}
NgAlertComponent.ɵfac = function NgAlertComponent_Factory(t) { return new (t || NgAlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_alert_service__WEBPACK_IMPORTED_MODULE_2__["NgAlertService"])); };
NgAlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgAlertComponent, selectors: [["lib-ng-alert"]], decls: 2, vars: 3, consts: [["class", "alert", 3, "ngStyle", 4, "ngIf"], [1, "alert", 3, "ngStyle"], [1, "closebtn", 3, "click"]], template: function NgAlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgAlertComponent_div_0_Template, 6, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.alertMessage$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".alert[_ngcontent-%COMP%] {\n  padding: 20px;\n  color: white;\n}\n\n.closebtn[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  color: white;\n  font-weight: bold;\n  float: right;\n  font-size: 22px;\n  line-height: 20px;\n  cursor: pointer;\n  transition: 0.3s;\n}\n\n.closebtn[_ngcontent-%COMP%]:hover {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLXNtYXJ0LWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InByb2plY3RzL25nLXNtYXJ0LWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNsb3NlYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uY2xvc2VidG46aG92ZXIge1xuICBjb2xvcjogYmxhY2s7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgAlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lib-ng-alert',
                template: `
    <div class="alert" *ngIf="alertMessage$ | async as alertMessage" [ngStyle]="{ background: alertMessage.color }">
      <span class="closebtn" (click)="closeAlert()">&times;</span>
      <strong>{{ alertMessage.prefix }}!</strong> {{ alertMessage.message }}
    </div>
  `,
                styleUrls: ['./alert.component.css'],
            }]
    }], function () { return [{ type: _ng_alert_service__WEBPACK_IMPORTED_MODULE_2__["NgAlertService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map