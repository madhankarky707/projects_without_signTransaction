(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule, routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _purchase_purchase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../purchase/purchase.component */ "./src/app/purchase/purchase.component.ts");
/* harmony import */ var _list_of_services_list_of_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../list-of-services/list-of-services.component */ "./src/app/list-of-services/list-of-services.component.ts");
/* harmony import */ var _create_service_create_service_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../create_service/create_service.component */ "./src/app/create_service/create_service.component.ts");
/* harmony import */ var _check_admin_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../check-admin.guard */ "./src/app/check-admin.guard.ts");
/* harmony import */ var _metamask_error_metamask_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../metamask-error/metamask-error.component */ "./src/app/metamask-error/metamask-error.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routes = [
    {
        path: 'admin',
        component: _create_service_create_service_component__WEBPACK_IMPORTED_MODULE_4__["create_serviceComponent"],
        canActivate: [_check_admin_guard__WEBPACK_IMPORTED_MODULE_5__["CheckAdminGuard"]]
    },
    {
        path: 'purchase',
        component: _purchase_purchase_component__WEBPACK_IMPORTED_MODULE_2__["PurchaseComponent"]
    },
    {
        path: 'service',
        component: _list_of_services_list_of_services_component__WEBPACK_IMPORTED_MODULE_3__["ListOfServicesComponent"]
    },
    {
        path: 'metamask',
        component: _metamask_error_metamask_error_component__WEBPACK_IMPORTED_MODULE_6__["MetamaskErrorComponent"]
    },
    {
        path: '',
        redirectTo: '/service',
        pathMatch: 'full'
    }
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!-- <div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n</div>\r\n<h2>Here are some links to help you start: </h2>\r\n<ul>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\r\n  </li>\r\n</ul> -->\r\n\r\n<app-header></app-header>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _purchase_purchase_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./purchase/purchase.component */ "./src/app/purchase/purchase.component.ts");
/* harmony import */ var _create_service_create_service_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create_service/create_service.component */ "./src/app/create_service/create_service.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _list_of_services_list_of_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list-of-services/list-of-services.component */ "./src/app/list-of-services/list-of-services.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _metamask_error_metamask_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./metamask-error/metamask-error.component */ "./src/app/metamask-error/metamask-error.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _purchase_purchase_component__WEBPACK_IMPORTED_MODULE_6__["PurchaseComponent"],
                _create_service_create_service_component__WEBPACK_IMPORTED_MODULE_7__["create_serviceComponent"],
                _list_of_services_list_of_services_component__WEBPACK_IMPORTED_MODULE_9__["ListOfServicesComponent"],
                _metamask_error_metamask_error_component__WEBPACK_IMPORTED_MODULE_11__["MetamaskErrorComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routes"]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/check-admin.guard.ts":
/*!**************************************!*\
  !*** ./src/app/check-admin.guard.ts ***!
  \**************************************/
/*! exports provided: CheckAdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckAdminGuard", function() { return CheckAdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/contract.service */ "./src/app/services/contract.service.ts");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CheckAdminGuard = /** @class */ (function () {
    function CheckAdminGuard(cs, route) {
        this.cs = cs;
        this.route = route;
    }
    CheckAdminGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.cs.check_admin(this.account).then(function (admin) {
            if (admin) {
                return true;
            }
            else {
                _this.route.navigate(["service"]);
            }
        });
    };
    CheckAdminGuard.prototype.ngOnInit = function () {
        var _this = this;
        var meta = this;
        meta.cs.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_3__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            // meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            window.location.reload(true);
                        }
                    }
                }
                else {
                    // meta.router.navigate(['metamask']);
                }
            }, 200);
        });
    };
    CheckAdminGuard.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
    };
    CheckAdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_contract_service__WEBPACK_IMPORTED_MODULE_2__["ContractService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CheckAdminGuard);
    return CheckAdminGuard;
}());



/***/ }),

/***/ "./src/app/create_service/create_service.component.css":
/*!*************************************************************!*\
  !*** ./src/app/create_service/create_service.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/create_service/create_service.component.html":
/*!**************************************************************!*\
  !*** ./src/app/create_service/create_service.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\"> -->\r\n   <div>\r\n   <div class=\"col-sm-3\">\r\n\r\n    \r\n   <div id=\"input\">    \r\n    <h2 style=\"color:orange\">Create New Service<p class=\"glyphicon glyphicon-shopping-cart\"></p></h2> \r\n\r\n    <div class=\"form-group\">\r\n       <input class=\"form-control\"  #name id=\"n\" formControlName=\"name\"  [(ngModel)]=\"servicename\" type=\"text\" placeholder=\"Enter the Service Name\">\r\n    </div>\r\n   <div class=\"form-group\">\r\n       <input class=\"form-control\"  #price id=\"p\" formControlName=\"address\" [(ngModel)]=\"serviceprice\" type=\"text\" placeholder=\"Enter the  value in (Native) tokens \"> \r\n    </div>\r\n    <button type=\"submit\" #b1 class=\"btn btn-primary\" (click)=\"create(name.value,price.value)\">Create</button>\r\n    </div>\r\n   \r\n    \r\n \r\n    \r\n\r\n   \r\n  \r\n      \r\n  <div class=\"col-sm-12\">\r\n    \r\n   </div>\r\n\r\n   <div class=\"col-sm-12\"> \r\n      \r\n      </div> \r\n   </div>\r\n\r\n   <div class=\"col-sm-6\">     \r\n \r\n    <div class=\"col-sm-10\">\r\n      <h2 style=\"text-align:center\">Contract Balance in Ether<img src=\"assets\\if_ETH_1175230.png\" style=\"height:35px\"></h2> \r\n      <div>\r\n       <h3 style=\"text-align:center;color:red\">{{token_balance}}</h3>\r\n      </div><br>\r\n  \r\n     \r\n   </div>\r\n         \r\n \r\n   </div>\r\n   <div class=\"col-sm-3\">\r\n      <h2 style=\"color:dodgerblue\">Withdraw Your Amount <p class=\"\tglyphicon glyphicon-hand-down\"></p></h2> \r\n      <div>\r\n        <div>\r\n            <input type=\"text\" class=\"form-control\" #amount id=\"with_amt\" [(ngModel)]=\"withdrawamt\" [value]=\"withdrawamt\" formControlName=\"withdrawamt\" placeholder=\"Enter amount in ether\">\r\n          </div><br>\r\n      \r\n         <button  class=\"btn btn-info\" id='b1' (click)=\"withdraw(amount.value)\">Withdraw</button>\r\n       </div>\r\n       <div><br>\r\n        <p id='p1' style=\"color:red\"></p>\r\n        <p id='p2' style=\"color:green\"></p>\r\n       </div>\r\n   </div>\r\n   <ngx-spinner></ngx-spinner>\r\n  \r\n </div>  \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n <!-- <form [formGroup]=\"angForm\" novalidate>\r\n\r\n <div class=\"form-group\">\r\n    <input class=\"form-control\" formControlName=\"name\" type=\"text\" placeholder=\"Enter the Service Name\" #name>\r\n </div>\r\n<div class=\"form-group\">\r\n    <input class=\"form-control\" formControlName=\"address\" type=\"text\" placeholder=\"Enter the  value in (IND) tokens \" #price> \r\n </div>\r\n <button type=\"submit\"\r\n   [disabled]=\"angForm.pristine || angForm.invalid\" #b2 class=\"btn btn-primary\" (click)=\"create(name.value,price.value)\">Register\r\n </button>\r\n </form> -->\r\n\r\n \r\n "

/***/ }),

/***/ "./src/app/create_service/create_service.component.ts":
/*!************************************************************!*\
  !*** ./src/app/create_service/create_service.component.ts ***!
  \************************************************************/
/*! exports provided: create_serviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_serviceComponent", function() { return create_serviceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/contract.service */ "./src/app/services/contract.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var create_serviceComponent = /** @class */ (function () {
    function create_serviceComponent(cs, route, spin) {
        this.cs = cs;
        this.route = route;
        this.spin = spin;
        this.token_balance = null;
        this.servicename = ' ';
        this.serviceprice = ' ';
        this.withdrawamt = null;
    }
    create_serviceComponent.prototype.create = function (name, price) {
        var _this = this;
        if (name == "") {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Please Enter Service Name");
            return;
        }
        else if (price == "") {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Please Enter Native Token Value");
            return;
        }
        else {
            this.spin.show();
            this.cs.add_service(this.account, name, price).then(function (res) {
                if (res == 0) {
                    _this.spin.hide();
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("You Rejected this transaction..!");
                    document.getElementById('n').value = '';
                    document.getElementById('p').value = '';
                }
                else if (res == 2) {
                    _this.spin.hide();
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Tranaction failed..!");
                    document.getElementById('n').value = '';
                    document.getElementById('p').value = '';
                }
                else if (res == 1) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Service created Successfully");
                    _this.spin.hide();
                    document.getElementById('n').value = '';
                    document.getElementById('p').value = '';
                }
            });
        }
    };
    create_serviceComponent.prototype.withdraw = function (amount) {
        var _this = this;
        if (amount == "") {
            document.getElementById("p2").innerHTML = "";
            document.getElementById("p1").innerHTML = "Please enter amount to Withdraw";
        }
        else {
            document.getElementById("p2").innerHTML = "Request in Progress";
            document.getElementById("p1").innerHTML = "";
            //this.spin.show();
            this.cs.withdraw(this.account, amount).then(function (res) {
                _this.spin.show();
                if (res == 1) {
                    document.getElementById('with_amt').value = '';
                    _this.spin.hide();
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Amount Withdrew Successfully...!");
                }
                else if (res == 0) {
                    document.getElementById('with_amt').value = '';
                    _this.spin.hide();
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("You Rejected this transaction..!");
                }
                else if (res == 1) {
                    document.getElementById('with_amt').value = '';
                    _this.spin.hide();
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Service created Successfully");
                }
                //document.getElementById("p2").innerHTML = " ";
                //this.spin.hide();
            });
            amount = '';
        }
    };
    create_serviceComponent.prototype.ngOnInit = function () {
        var _this = this;
        var meta = this;
        meta.cs.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                // swal("intrval")
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_4__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.route.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            window.location.reload(true);
                        }
                    }
                }
                else {
                    meta.route.navigate(['metamask']);
                }
            }, 50);
        });
        meta.id2 = setInterval(function () {
            meta.cs.token_contract_balance().then(function (result) { return meta.token_balance = result; });
        }, 200);
    };
    create_serviceComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
        if (this.id2) {
            clearInterval(this.id2);
        }
    };
    create_serviceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create_service',
            template: __webpack_require__(/*! ./create_service.component.html */ "./src/app/create_service/create_service.component.html"),
            styles: [__webpack_require__(/*! ./create_service.component.css */ "./src/app/create_service/create_service.component.css")]
        }),
        __metadata("design:paramtypes", [_services_contract_service__WEBPACK_IMPORTED_MODULE_1__["ContractService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], create_serviceComponent);
    return create_serviceComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\r\n</head>\r\n<style>\r\n</style>\r\n<body>\r\n\r\n<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\"><b>Native</b></a>\r\n    </div>\r\n    <ul class=\"nav navbar-nav\">\r\n      <li><a routerLink=\"/purchase\" id>PURCHASE TOKENS</a></li>\r\n      <li><a routerLink=\"/service\" id>BUY SERVICES</a></li>\r\n      <li><a routerLink=\"/admin\" id>ADD NEW SERVICES</a></li>\r\n\r\n    </ul>\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n      <li><a><input type=\"label\" class=\"form-control \" value=\"Token:{{tokens}}\"readonly></a></li>\r\n      <li><a><input type=\"label\" class=\"form-control \"  value=\"Eth:{{ether_balance}}\" readonly></a></li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/contract.service */ "./src/app/services/contract.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(cs, route) {
        this.cs = cs;
        this.route = route;
        this.fetch_balances();
    }
    HeaderComponent.prototype.fetch_balance = function () {
        var _web3 = this._web3;
        this._web3.eth.getBalance(this.account, function (err, result) {
            this.ether_balance = (_web3.fromWei(result));
        });
    };
    HeaderComponent.prototype.fetch_balances = function () {
        var _this = this;
        this.cs.getAccount().then(function (acc) {
            _this.cs.balanceOf(acc).then(function (tkns) {
                if (tkns > 0 && tkns < 0.1) {
                    //this.tokens = tkns;
                    _this.tokens = "<" + 0.1;
                }
                else {
                    _this.tokens = tkns;
                }
            });
            _this.cs.getUserBalance(acc).then(function (amt) { _this.ether_balance = amt; });
        });
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var meta = this;
        meta.cs.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_3__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        meta.fetch_balance();
                        meta.fetch_balances();
                        if (meta._web3.eth.accounts[0] === undefined) {
                            window.location.reload();
                            meta.route.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            window.location.reload(true);
                        }
                    }
                }
                else {
                    meta.route.navigate(['metamask']);
                }
            }, 50);
            //  this.cs.balanceOf(meta.account).then(tkns =>this.tokens =tkns)
            _this.cs.getUserBalance(meta.account).then(function (amt) { _this.ether_balance = amt; });
        });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
        if (this.id2) {
            clearInterval(this.id1);
        }
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_contract_service__WEBPACK_IMPORTED_MODULE_1__["ContractService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/list-of-services/list-of-services.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/list-of-services/list-of-services.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/list-of-services/list-of-services.component.html":
/*!******************************************************************!*\
  !*** ./src/app/list-of-services/list-of-services.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \r\n<script defer src=\"/static/fontawesome/fontawesome-all.js\"></script>\r\n<div class=\"container\">\r\n  <div class=\"col-sm-2\"></div>\r\n  <div class=\"col-sm-12\" >     \r\n      <div class=\"col-sm-12\">\r\n    <h4 style=\"text-align: center\"><i style=\"color:blue\">Basket 1:For Native Tokens Holders </i></h4>\r\n    <h4 style=\"text-align: center\"><i style=\"color:green\">Basket 2:For who Needs To Become a Native Tokens Holder</i></h4>\r\n\r\n          <h2  style=\"color: tomato\" style=\"text-align: center;color: tomato\" >Purchase Services<p class=\"glyphicon glyphicon-shopping-cart\"></p></h2>\r\n          <div style=\"height:300px;overflow:auto;\">\r\n\r\n          <table class=\"table\"  >\r\n              <thead>\r\n                <tr>\r\n                  <th>Service Id</th>\r\n                  <th>Service Name</th>\r\n                  <th>Service Price(in Native tokens)</th>\r\n                  <th style=\"text-align: center\">Payment Type</th>\r\n\r\n                   </tr>\r\n              </thead>\r\n              <tbody id=\"user_bet_list\">\r\n                 <tr *ngFor=\"let service of services\">\r\n                     <td>{{ service.id }}</td>\r\n                     <td>{{ service.name }}</td>\r\n                     <td>{{ service.price }}</td>\r\n                     <td><button  class=\"btn btn-primary\"  (click)=\"Basket_1(service.id)\">Basket 1</button>&nbsp;\r\n                     <button  class=\"btn btn-success\"  (click)=\"Basket_2(service.id)\">Basket 2</button></td>                    \r\n                  </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n\r\n      \r\n      </div>\r\n    <br>\r\n      \r\n\r\n      <div class=\"col-sm-12\" style=\"height:300px;\"> \r\n          <h2 style=\"text-align: center;color:brown\">Your Services Are Listed Down Here</h2>\r\n          <div style=\"height:350px;overflow:auto;\">\r\n          <table class=\"table\">\r\n              <thead>\r\n                <tr style=\"background:white\">\r\n                  <th>Service Id</th>\r\n                  <th>Service Name</th>\r\n                  <th>Service Price(in Native tokens)</th>\r\n                  <th style=\"text-align:center\">Purchased Time</th>\r\n\r\n                   </tr>\r\n              </thead>\r\n              <tbody id=\"user_bet_list\">\r\n                 <tr *ngFor=\"let data of details\">\r\n                     <td>{{ data.id}}</td>\r\n                     <td>{{ data.name }}</td>\r\n                     <td>{{ data.price }}</td>\r\n                     <td>{{ data.time }}</td>\r\n                  </tr>\r\n              </tbody>\r\n            </table>\r\n            </div>\r\n         </div> \r\n\r\n  </div>\r\n  <ngx-spinner></ngx-spinner>\r\n \r\n</div>  "

/***/ }),

/***/ "./src/app/list-of-services/list-of-services.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/list-of-services/list-of-services.component.ts ***!
  \****************************************************************/
/*! exports provided: ListOfServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOfServicesComponent", function() { return ListOfServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/contract.service */ "./src/app/services/contract.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListOfServicesComponent = /** @class */ (function () {
    function ListOfServicesComponent(cs, route, spin) {
        this.cs = cs;
        this.route = route;
        this.spin = spin;
        this.services = [];
        this.details = [];
        this.list_services();
        // this.user_services(); 
        //this.service_id='';
    }
    ListOfServicesComponent.prototype.Basket_1 = function (id) {
        var _this = this;
        this.cs.getAccount().then(function (acc) {
            _this.cs.balanceOf(acc).then(function (tkns) {
                var obj = {};
                _this.cs.service_details(_this.account, id).then(function (data) {
                    obj['id'] = id;
                    obj['name'] = data[0];
                    obj['price'] = data[1] / 1000000000000000000;
                    if (tkns >= data[1] / 1000000000000000000) {
                        //swal("swal")
                        _this.spin.show();
                        _this.cs.buy_service(_this.account, id).then(function (res) {
                            //this.spin.show();
                            if (res == 1) {
                                _this.user_services();
                                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("You bought a Service...!");
                                _this.spin.hide();
                            }
                            else if (res == 0) {
                                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("You Rejected this Transaction...!");
                                _this.spin.hide();
                            }
                            else if (res == 2) {
                                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Transaction failed...!");
                                _this.spin.hide();
                            }
                        });
                    }
                    else {
                        sweetalert__WEBPACK_IMPORTED_MODULE_5___default()(" You are having insufficient Native token balance ");
                    }
                });
            });
        });
    };
    ListOfServicesComponent.prototype.Basket_2 = function (id) {
        this.route.navigate(['purchase']);
    };
    ListOfServicesComponent.prototype.list_services = function () {
        var _this = this;
        this.cs.service_id().then(function (ids) {
            ids.forEach(function (i) {
                var obj = {};
                _this.cs.service_details(_this.account, i).then(function (detail) {
                    obj['id'] = i;
                    obj['name'] = detail[0];
                    obj['price'] = detail[1] / 1000000000000000000;
                    _this.services.push(obj);
                });
            });
        });
    };
    ListOfServicesComponent.prototype.user_services = function () {
        var _this = this;
        this.details.length = 0;
        this.cs.service_id().then(function (ids) {
            ids.forEach(function (i) {
                _this.cs.user_services(_this.account, i).then(function (result) {
                    var data = {};
                    if (result[0] != 0) {
                        _this.cs.service_details(_this.account, i).then(function (details) {
                            data['id'] = i;
                            data['name'] = details[0];
                            data['price'] = details[1] / 1000000000000000000;
                            var tm = new Date(result[1].toNumber() * 1000);
                            var time = tm.toString();
                            data['time'] = time;
                            _this.details.push(data);
                        });
                    }
                });
            });
        });
    };
    ListOfServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user_services();
        //this.list_services();
        var meta = this;
        meta.cs.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_4__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.route.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            window.location.reload(true);
                        }
                    }
                }
                else {
                    meta.route.navigate(['metamask']);
                }
            }, 200);
        });
    };
    ListOfServicesComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
    };
    ListOfServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-of-services',
            template: __webpack_require__(/*! ./list-of-services.component.html */ "./src/app/list-of-services/list-of-services.component.html"),
            styles: [__webpack_require__(/*! ./list-of-services.component.css */ "./src/app/list-of-services/list-of-services.component.css")]
        }),
        __metadata("design:paramtypes", [_services_contract_service__WEBPACK_IMPORTED_MODULE_1__["ContractService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], ListOfServicesComponent);
    return ListOfServicesComponent;
}());



/***/ }),

/***/ "./src/app/metamask-error/metamask-error.component.css":
/*!*************************************************************!*\
  !*** ./src/app/metamask-error/metamask-error.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/metamask-error/metamask-error.component.html":
/*!**************************************************************!*\
  !*** ./src/app/metamask-error/metamask-error.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\r\n\t<head>\r\n\t\t<title>Ethereum Account Connectivity Error Page</title>\r\n\t</head>\r\n\t<body style=\"margin:75px  750px\"> \r\n\t\t <img src=\"./assets/metamask_logo.png\"/> \r\n\r\n\t\t\t<p>\r\n\t\t\t\t<br>There was an error while fetching your account.\r\n\t\t\t\t<br>Make sure your Ethereum client is configured correctly\r\n\r\n\t\t\t\t<br>Tips:\r\n\t\t\t\t<br>Ensure you unlocked your MetaMask plugin.\r\n\t\t\t\t<br>If you don't have MetaMask plugin install here: \r\n\t\t\t\t<br><a href =\"https://metamask.io/ \">https://metamask.io/</a>\r\n\t\t\t</p>\r\n\r\n\t</body>\r\n</html>"

/***/ }),

/***/ "./src/app/metamask-error/metamask-error.component.ts":
/*!************************************************************!*\
  !*** ./src/app/metamask-error/metamask-error.component.ts ***!
  \************************************************************/
/*! exports provided: MetamaskErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetamaskErrorComponent", function() { return MetamaskErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/contract.service */ "./src/app/services/contract.service.ts");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MetamaskErrorComponent = /** @class */ (function () {
    function MetamaskErrorComponent(cs, route) {
        this.cs = cs;
        this.route = route;
    }
    MetamaskErrorComponent.prototype.ngOnInit = function () {
        var meta = this;
        this.id1 = setInterval(function () {
            if (typeof window.web3 !== 'undefined') {
                meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_3__(window.web3.currentProvider);
                if (meta._web3.eth.accounts[0] !== undefined) {
                    meta.route.navigate(['service']);
                }
            }
            else {
                window.location.reload();
            }
        }, 200);
    };
    MetamaskErrorComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
    };
    MetamaskErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-metamask-error',
            template: __webpack_require__(/*! ./metamask-error.component.html */ "./src/app/metamask-error/metamask-error.component.html"),
            styles: [__webpack_require__(/*! ./metamask-error.component.css */ "./src/app/metamask-error/metamask-error.component.css")]
        }),
        __metadata("design:paramtypes", [_services_contract_service__WEBPACK_IMPORTED_MODULE_2__["ContractService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MetamaskErrorComponent);
    return MetamaskErrorComponent;
}());



/***/ }),

/***/ "./src/app/purchase/purchase.component.css":
/*!*************************************************!*\
  !*** ./src/app/purchase/purchase.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/purchase/purchase.component.html":
/*!**************************************************!*\
  !*** ./src/app/purchase/purchase.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<script defer src=\"/static/fontawesome/fontawesome-all.js\"></script>\r\n<div class=\"container\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-5\">     \r\n\r\n      <div class=\"col-sm-12\">\r\n        <div>\r\n        <h1 style=\"color:orange\">Purchase Tokens Here<p class=\"\tglyphicon glyphicon-hand-down\"></p></h1>\r\n      </div>\r\n\r\n          <br>\r\n          <h2>Equivalent Ether Value<img src=\"assets\\if_ETH_1175230.png\" style=\"height:35px\"></h2>\r\n          <form>\r\n            <div class=\"form-group\">\r\n              <label for=\"email\" style=\"color:orangered\">Ether</label>&nbsp;<p class=\"glyphicon glyphicon-transfer\"></p>\r\n              <input class=\"form-control\" id='ether' style=\"color:green\" readonly>\r\n            </div>\r\n          </form> \r\n      </div>\r\n    \r\n      \r\n         \r\n      <div class=\"col-sm-12\">\r\n          <h2>Equivalent USD Dollar<p class=\"glyphicon glyphicon-usd\"></p></h2> \r\n          <form>\r\n            <div class=\"form-group\">\r\n              <label for=\"email\" style=\"color:brown\">Dollar</label>&nbsp;<p class=\"glyphicon glyphicon-transfer\"></p>\r\n              <input type=\"email\" class=\"form-control\" id=\"dollar\" style=\"color:rgb(19, 0, 128)\" readonly>\r\n            </div>\r\n    \r\n          </form> \r\n      </div>\r\n\r\n      <div class=\"col-sm-12\"> \r\n          <h2>Get Native Tokens </h2>\r\n            <div class=\"form-group\">\r\n              <label for=\"tkn\">Tokens:</label>\r\n              <input type=\"text\" id = \"t1\" class=\"form-control\" #token placeholder=\"Enter no of tokens\" (input)=\"set(token.value)\">\r\n            </div>\r\n            <div class=\"form-group form-check\">\r\n              <label class=\"form-check-label\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"verify\"> Confirm\r\n              </label>\r\n            </div>\r\n            <div #d1>\r\n            <button  class=\"btn btn-success\" #b1 (click)=\"Purchase(token.value)\">Buy</button>\r\n          </div>\r\n          <div>\r\n            <br>\r\n            <h4><p id='p1' style=\"color:red\"></p></h4>\r\n            <h4><p id='p2' style=\"color:green\"></p></h4>\r\n          </div>\r\n         </div> \r\n\r\n  </div>\r\n  <ngx-spinner></ngx-spinner>\r\n \r\n</div>  \r\n\r\n"

/***/ }),

/***/ "./src/app/purchase/purchase.component.ts":
/*!************************************************!*\
  !*** ./src/app/purchase/purchase.component.ts ***!
  \************************************************/
/*! exports provided: PurchaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseComponent", function() { return PurchaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/contract.service */ "./src/app/services/contract.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PurchaseComponent = /** @class */ (function () {
    function PurchaseComponent(cs, http, route, spin) {
        this.cs = cs;
        this.http = http;
        this.route = route;
        this.spin = spin;
        this.i = "1027";
        this.Fetch_values();
    }
    PurchaseComponent.prototype.set = function (count) {
        this.Fetch_values();
        if (this.Indtoken_in_ether == "NaN") {
            this.set(count);
        }
        this.eth = count * this.Indtoken_in_ether;
        this.doll = count * this.usd_price;
        document.getElementById('ether').value = this.eth;
        document.getElementById('dollar').value = this.doll;
        if (document.getElementById('ether').value == "NaN") {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Please Re-enter the value");
        }
    };
    PurchaseComponent.prototype.Purchase = function (tokens) {
        var _this = this;
        // this.spin.show();
        if (tokens != '') {
            if (document.getElementById('verify').checked == true) {
                document.getElementById("p2").innerHTML = "Transaction in Progress...";
                document.getElementById("p1").innerHTML = "";
                this.ether_for_total_tokens = tokens * this.Indtoken_in_ether;
                // console.log("ONE TKN ETH",this.Indtoken_in_ether)
                // console.log("TOTA ETH FOR TKN",this.ether_for_total_tokens)
                this.spin.show();
                this.cs.buy_token(this.account, this.Indtoken_in_ether, this.ether_for_total_tokens).then(function (result) {
                    _this.spin.hide();
                    if (result == 1) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Tokens Purchased Successfully...!");
                        document.getElementById("p2").innerHTML = " ";
                        document.getElementById("t1").value = '';
                        document.getElementById('verify').checked == false;
                        _this.route.navigate(['service']);
                    }
                    else if (result == 0) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("You Rejected this Transaction...!");
                        document.getElementById("t1").value = '';
                        document.getElementById('verify').checked == false;
                    }
                    else if (result == 2) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Transaction failed...!");
                        document.getElementById("t1").value = '';
                        document.getElementById('verify').checked == false;
                    }
                });
            }
            else {
                document.getElementById("p2").innerHTML = "";
                document.getElementById("p1").innerHTML = "Please confirm your transaction";
            }
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()('Please Enter a Value');
        }
    };
    PurchaseComponent.prototype.Fetch_values = function () {
        var _this = this;
        this.http.get('https://api.coinmarketcap.com/v2/ticker/1027/')
            .subscribe(function (resp) {
            _this.resul = resp;
            _this.ethereum_price = _this.resul.data.quotes.USD.price;
        });
        this.http.get('https://api.coinmarketcap.com/v2/ticker/1967/')
            .subscribe(function (res) {
            _this.result = res;
            _this.usd_price = _this.result.data.quotes.USD.price;
            _this.tot_supply = _this.result.data.total_supply;
            _this.Indtoken_in_ether = (_this.usd_price * (1 / _this.ethereum_price));
        });
    };
    PurchaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        var meta = this;
        meta.cs.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_6__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.route.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            window.location.reload(true);
                        }
                    }
                }
                else {
                    meta.route.navigate(['metamask']);
                }
            }, 200);
        });
    };
    PurchaseComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
        if (this.id2) {
            clearInterval(this.id2);
        }
    };
    PurchaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-purchase',
            template: __webpack_require__(/*! ./purchase.component.html */ "./src/app/purchase/purchase.component.html"),
            styles: [__webpack_require__(/*! ./purchase.component.css */ "./src/app/purchase/purchase.component.css")]
        }),
        __metadata("design:paramtypes", [_services_contract_service__WEBPACK_IMPORTED_MODULE_2__["ContractService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], PurchaseComponent);
    return PurchaseComponent;
}());



/***/ }),

/***/ "./src/app/services/contract.json":
/*!****************************************!*\
  !*** ./src/app/services/contract.json ***!
  \****************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, default */
/***/ (function(module) {

module.exports = [{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Transfer_amount","type":"event"},{"constant":false,"inputs":[{"name":"_service_name","type":"string"},{"name":"_service_price","type":"uint256"}],"name":"add_service","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_service_id","type":"uint256"}],"name":"buy_service","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_rate","type":"uint256"}],"name":"buy_token","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"indexed_from","type":"address"},{"indexed":false,"name":"indexed_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"indexed_owner","type":"address"},{"indexed":false,"name":"indexed_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"inputs":[],"payable":true,"stateMutability":"payable","type":"constructor"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"client_addresses","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"service_details","outputs":[{"name":"service_name","type":"string"},{"name":"service_price","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"service_id","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token_contract_balance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"user_services","outputs":[{"name":"token_value","type":"uint256"},{"name":"service_avail_time","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];

/***/ }),

/***/ "./src/app/services/contract.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/contract.service.ts ***!
  \**********************************************/
/*! exports provided: ContractService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractService", function() { return ContractService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var contractAbi = __webpack_require__(/*! ./contract.json */ "./src/app/services/contract.json");
var ContractService = /** @class */ (function () {
    function ContractService(route, spin) {
        this.route = route;
        this.spin = spin;
        this.account = null;
        this.acc = null;
        this._LogicContractAddress = "0xc9de0da933af20ecb53bd50814f21005e37a8f87";
        if (typeof window.web3 !== 'undefined') {
            this._web3 = new web3__WEBPACK_IMPORTED_MODULE_1__(window.web3.currentProvider);
            this._LogicContract = this._web3.eth.contract(contractAbi).at(this._LogicContractAddress);
        }
    }
    ContractService.prototype.getAccount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.account == null)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this._web3.eth.getAccounts(function (err, accs) {
                                    if (err != null) {
                                        _this.route.navigate(['metamask']);
                                        return;
                                    }
                                    if (accs.length === 0) {
                                        _this.route.navigate(['metamask']);
                                        return;
                                    }
                                    resolve(accs[0]);
                                });
                            })];
                    case 1:
                        _a.account = (_b.sent());
                        this._web3.eth.defaultAccount = this.account;
                        _b.label = 2;
                    case 2: return [2 /*return*/, Promise.resolve(this.account)];
                }
            });
        });
    };
    ContractService.prototype.getUserBalance = function (account) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var _web3 = _this._web3;
                        _this._web3.eth.getBalance(account, function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            resolve(_web3.fromWei(result));
                        });
                    })];
            });
        });
    };
    //purchase token
    ContractService.prototype.buy_token = function (address, Indtoken_in_ether, ether_for_total_tokens) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta;
            return __generator(this, function (_a) {
                meta = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var arg1 = _this._web3.toWei(Indtoken_in_ether, 'ether').split(".")[0];
                        var msgvalue = _this._web3.toWei(ether_for_total_tokens, 'ether').split(".")[0];
                        console.log(arg1);
                        console.log(msgvalue);
                        meta.spin.show();
                        meta._LogicContract.buy_token.sendTransaction(arg1, { from: address, value: msgvalue, gas: 600000 }, function (err, result) {
                            if (err != null) {
                                console.log(err);
                                // (document.getElementById('ether') as HTMLInputElement ).value= '';
                                // (document.getElementById('dollar') as HTMLInputElement ).value= '';
                                // (document.getElementById("t1") as HTMLInputElement).value ='';
                                // (document.getElementById('verify') as HTMLInputElement).checked =false;
                                // document.getElementById("p2").innerHTML = "Transaction Rejected...";
                                resolve(0);
                                //meta.spin.hide();  
                            }
                            else {
                                meta.hash(result).then(function (res) {
                                    if (res == true) {
                                        resolve(1);
                                    }
                                    else if (res == false) {
                                        resolve(2);
                                    }
                                });
                            }
                        });
                    })];
            });
        });
    };
    //withdraw token
    ContractService.prototype.withdraw = function (address, amount) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var meta;
            return __generator(this, function (_a) {
                meta = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        meta._LogicContract.withdraw.sendTransaction(_this._web3.toWei(amount, 'ether'), { from: address, gas: 600000 }, function (err, result) {
                            //(document.getElementById('with_amt')  as HTMLInputElement).value='';
                            if (err != null) {
                                console.log(err);
                                resolve(0);
                            }
                            else {
                                meta.hash(result).then(function (res) {
                                    if (res == true) {
                                        resolve(1);
                                    }
                                    else if (res == false) {
                                        resolve(2);
                                    }
                                });
                            }
                        });
                    })];
            });
        });
    };
    //token balance
    ContractService.prototype.token_contract_balance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var meta, acc;
            return __generator(this, function (_a) {
                meta = this;
                acc = '';
                this.getAccount().then(function (address) { return acc = address; });
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        meta._LogicContract.token_contract_balance(function (err, result) {
                            if (err) {
                                console.log(err);
                                reject(err);
                            }
                            else {
                                var out = result / 1000000000000000000;
                                resolve(out);
                            }
                        });
                    })];
            });
        });
    };
    //transfer
    ContractService.prototype.transfer = function (address, tokens) {
        return __awaiter(this, void 0, void 0, function () {
            var meta;
            return __generator(this, function (_a) {
                meta = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var tkn_address = 0x88b9cf7bea8f50847e300034b3e28f6279b5829e;
                        meta._LogicContract.transfer(tkn_address, tokens, { from: address, gas: 600000 }, function (err, result) {
                            if (err != null) {
                                console.log(err);
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    //create_service 
    ContractService.prototype.add_service = function (address, name, price) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var indor;
            return __generator(this, function (_a) {
                indor = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        console.log("ADDRESs" + address);
                        //indor.spin.show();
                        indor._LogicContract.add_service.sendTransaction(name, _this._web3.toWei(price, 'ether'), { from: address, gas: 600000 }, function (err, result) {
                            // (document.getElementById('n')  as HTMLInputElement).value='';
                            // (document.getElementById('p')  as HTMLInputElement).value='';
                            if (err != null) {
                                // resolve(result)
                                resolve(0);
                                //indor.spin.hide();
                                return;
                            }
                            else {
                                indor.hash(result).then(function (res) {
                                    if (res == true) {
                                        resolve(1);
                                    }
                                    else if (res == false) {
                                        resolve(2);
                                    }
                                });
                            }
                        });
                    })];
            });
        });
    };
    //get service id
    ContractService.prototype.service_id = function () {
        return __awaiter(this, void 0, void 0, function () {
            var indor;
            return __generator(this, function (_a) {
                indor = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        indor._LogicContract.service_id.call(function (err, result) {
                            if (err != null) {
                                // resolve(result)
                                reject(err);
                            }
                            else {
                                var array = [];
                                for (var i = 1; i <= result; i++) {
                                    array.push(i);
                                }
                                resolve(array);
                                console.log("RESULT" + result);
                            }
                        });
                    })];
            });
        });
    };
    //get service details
    ContractService.prototype.service_details = function (address, id) {
        return __awaiter(this, void 0, void 0, function () {
            var indor;
            return __generator(this, function (_a) {
                indor = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        indor._LogicContract.service_details.call(id, { from: address, gas: 600000 }, function (err, result) {
                            if (err) {
                                // resolve(result)
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    //buy_service
    ContractService.prototype.buy_service = function (address, id) {
        return __awaiter(this, void 0, void 0, function () {
            var indor;
            return __generator(this, function (_a) {
                indor = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        //indor.spin.show();
                        indor._LogicContract.buy_service.sendTransaction(id, { from: address, gas: 600000 }, function (err, result) {
                            if (err != null) {
                                // resolve(result)
                                resolve(0);
                                //indor.spin.hide();
                            }
                            else {
                                indor.hash(result).then(function (res) {
                                    if (res == true) {
                                        resolve(1);
                                    }
                                    else if (res == false) {
                                        resolve(2);
                                        //indor.spin.hide();
                                    }
                                });
                            }
                        });
                    })];
            });
        });
    };
    //hashing
    ContractService.prototype.hash = function (a) {
        return __awaiter(this, void 0, void 0, function () {
            var meta;
            return __generator(this, function (_a) {
                meta = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var accountInterval = setInterval(function () {
                            meta._web3.eth.getTransactionReceipt(a, function (err, result) {
                                if (err != null) {
                                    resolve(err);
                                }
                                if (result !== null) {
                                    clearInterval(accountInterval);
                                    if (result.status == 0x1) {
                                        resolve(true);
                                    }
                                    else {
                                        resolve(false);
                                    }
                                }
                            });
                        }, 100);
                    })];
            });
        });
    };
    //check admin
    ContractService.prototype.check_admin = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var indor;
            return __generator(this, function (_a) {
                indor = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        indor._LogicContract.admin.call({ from: address, gas: 600000 }, function (err, result) {
                            if (err) {
                                reject(err);
                            }
                            else {
                                console.log((indor.account == result));
                                if (indor.account == result) {
                                    resolve(true);
                                }
                                else {
                                    resolve(false);
                                }
                            }
                        });
                    })];
            });
        });
    };
    //user_services
    ContractService.prototype.user_services = function (address, id) {
        return __awaiter(this, void 0, void 0, function () {
            var indor;
            return __generator(this, function (_a) {
                indor = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        indor._LogicContract.user_services.call(indor.account, id, { from: address, gas: 600000 }, function (err, result) {
                            if (err) {
                                // resolve(result)
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    ContractService.prototype.balanceOf = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var indor;
            return __generator(this, function (_a) {
                indor = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        indor._LogicContract.balanceOf.call(address, { from: address, gas: 600000 }, function (err, result) {
                            if (err) {
                                reject(err);
                            }
                            else {
                                var tkns = result / 1000000000000000000;
                                resolve(tkns);
                            }
                        });
                    })];
            });
        });
    };
    ContractService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], ContractService);
    return ContractService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\IndorseNew\Indorse\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map