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

/***/ "./src/app/Service/loan-service.service.ts":
/*!*************************************************!*\
  !*** ./src/app/Service/loan-service.service.ts ***!
  \*************************************************/
/*! exports provided: LoanServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanServiceService", function() { return LoanServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
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



var loanAbi = __webpack_require__(/*! ./loan.json */ "./src/app/Service/loan.json");
var LoanServiceService = /** @class */ (function () {
    function LoanServiceService(spinner) {
        this.spinner = spinner;
        this.address = null;
        this.loan_contractaddress = "0x82b250e1eeee17bd9f3c85bc96adeff52cde5325";
        if (typeof window.web3 !== 'undefined') {
            this._web3 = new web3__WEBPACK_IMPORTED_MODULE_1__(window.web3.currentProvider);
            this.loan_contract = this._web3.eth.contract(loanAbi).at(this.loan_contractaddress);
        }
    }
    LoanServiceService.prototype.getAccount = function () {
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
                                        // this.router.navigate(['metamask']);
                                        return;
                                    }
                                    if (accs.length === 0) {
                                        // this.router.navigate(['metamask']);
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
    LoanServiceService.prototype.check_spv = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var instance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        instance = this;
                        return [4 /*yield*/, instance.getAccount().then(function (address) { return _this.account = address; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                instance.loan_contract.spv_id_get.call(_this.account, function (err, result) {
                                    if (err != null) {
                                        reject(err);
                                    }
                                    else {
                                        if (result == 0) {
                                            // alert("Not registered")
                                            resolve(false);
                                        }
                                        else {
                                            // alert("Already Registered")
                                            resolve(true);
                                        }
                                    }
                                });
                            })];
                }
            });
        });
    };
    LoanServiceService.prototype.check_investor = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var instance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        instance = this;
                        return [4 /*yield*/, instance.getAccount().then(function (acc) { return _this.address = acc; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                instance.loan_contract.investor_id_get.call(_this.address, function (err, result) {
                                    if (err != null) {
                                        reject(err);
                                    }
                                    else {
                                        if (result == 0) {
                                            // alert("Not registered")
                                            resolve(false);
                                        }
                                        else {
                                            // alert("Already Registered")
                                            resolve(true);
                                        }
                                    }
                                });
                            })];
                }
            });
        });
    };
    LoanServiceService.prototype.hash = function (a) {
        return __awaiter(this, void 0, void 0, function () {
            var meta;
            return __generator(this, function (_a) {
                meta = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var accountInterval = setInterval(function () {
                            meta._web3.eth.getTransactionReceipt(a, function (err, result) {
                                if (err != null) {
                                    reject(err);
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
    LoanServiceService.prototype.contract_balance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.contract_balance.call(function (err, result) {
                            if (err != null) {
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
    LoanServiceService.prototype.current_time = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.current_time.call(function (err, result) {
                            if (err != null) {
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
    LoanServiceService.prototype.pool_owned_by = function (pool_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.pool_owned_by.call(pool_id, function (err, result) {
                            if (err != null) {
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
    LoanServiceService.prototype.check_issuer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var instance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        instance = this;
                        return [4 /*yield*/, instance.getAccount().then(function (address) { return _this.address = address; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                instance.loan_contract.issuer.call(function (err, result) {
                                    if (err != null) {
                                        reject(err);
                                    }
                                    else if (result == instance.address) {
                                        resolve(true);
                                    }
                                    else {
                                        resolve(false);
                                    }
                                });
                            })];
                }
            });
        });
    };
    LoanServiceService.prototype.bank_ids = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.bank_ids.call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                var arr = [];
                                for (var i = 1; i <= result.toNumber(); i++) {
                                    arr.push(i);
                                }
                                resolve(arr);
                            }
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.bank_detail_map = function (bank_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.bank_detail_map.call(bank_id, function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                var tmp = instance._web3.toAscii(result);
                                var bank_name = "";
                                for (var i = 0; i < 32; i++) {
                                    if ((tmp[i] == " ") || (tmp[i] >= "a" && tmp[i] <= "z") || (tmp[i] >= "A" && tmp[i] <= "Z"))
                                        bank_name = bank_name + tmp[i];
                                }
                                resolve(bank_name);
                            }
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.add_bank = function (bank_name, address) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.add_bank.sendTransaction(bank_name, { from: address, gas: 600000 }, function (err, result) {
                            if (err != null) {
                                // instance.spinner.hide()
                                resolve(0);
                            }
                            else {
                                instance.hash(result).then(function (res) {
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
    LoanServiceService.prototype.borrower_ids = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.borrower_ids.call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                var arr = [];
                                for (var i = 1; i <= result.toNumber(); i++) {
                                    arr.push(i);
                                }
                                resolve(arr);
                            }
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.borrower_map = function (borrower_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.borrower_map.call(borrower_id, function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                var tmp = instance._web3.toAscii(result);
                                var borrower_name = "";
                                for (var i = 0; i < 32; i++) {
                                    if ((tmp[i] == " ") || (tmp[i] >= "a" && tmp[i] <= "z") || (tmp[i] >= "A" && tmp[i] <= "Z"))
                                        borrower_name = borrower_name + tmp[i];
                                }
                                resolve(borrower_name);
                            }
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.add_borrower = function (bank_id, borrower_name, address) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.add_borrower.sendTransaction(bank_id, borrower_name, { from: address, gas: 600000 }, function (err, result) {
                            if (err != null) {
                                // instance.spinner.hide()
                                resolve(0);
                            }
                            else {
                                instance.hash(result).then(function (res) {
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
    LoanServiceService.prototype.show_borrower = function (bank_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.show_borrower.call(bank_id, function (err, result) {
                            if (err != null) {
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
    LoanServiceService.prototype.loan_ids = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.loan_ids.call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                var arr = [];
                                for (var i = 1; i <= result.toNumber(); i++) {
                                    arr.push(i);
                                }
                                // console.log(result.toNumber());
                                resolve(arr);
                            }
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.borrower_details_map = function (loan_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.borrower_details_map.call(loan_id, function (err, result) {
                            if (err != null) {
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
    LoanServiceService.prototype.asset_ids = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.asset_ids.call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                var arr = [];
                                for (var i = 1; i <= result.toNumber(); i++) {
                                    arr.push(i);
                                }
                                resolve(arr);
                            }
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.add_loan = function (borrower_id, loan_amount, interest_rate, loan_duration, asset_details, asset_amount, borrower_paid, address) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.add_loan.sendTransaction(borrower_id, loan_amount, interest_rate, loan_duration, asset_details, asset_amount, borrower_paid, { from: address, gas: 600000 }, function (err, result) {
                            if (err != null) {
                                // instance.spinner.hide()
                                resolve(0);
                            }
                            else {
                                instance.hash(result).then(function (res) {
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
    LoanServiceService.prototype.update_loan = function (loanid, amount, option, owned_spv_id, owned_inv_id, address) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.update_loan.sendTransaction(loanid, amount, option, owned_spv_id, owned_inv_id, { from: address, gas: 600000 }, function (err, result) {
                            if (err != null) {
                                // instance.spinner.hide()
                                resolve(0);
                            }
                            else {
                                instance.hash(result).then(function (res) {
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
    LoanServiceService.prototype.pool_ids = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.pool_ids.call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                var arr = [];
                                for (var i = 1; i <= result.toNumber(); i++) {
                                    arr.push(i);
                                }
                                resolve(arr);
                            }
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.pool_details = function (pool_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.pool_details.call(pool_id, function (err, result) {
                            if (err != null) {
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
    LoanServiceService.prototype.show_loanids_of_pool = function (pool_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.show_loanids_of_pool.call(pool_id, function (err, result) {
                            if (err != null) {
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
    LoanServiceService.prototype.create_pool = function (loan_ids, value, address) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.create_pool.sendTransaction(loan_ids, value, { from: address, gas: 600000 }, function (err, result) {
                            if (err != null) {
                                // instance.spinner.hide()
                                resolve(0);
                            }
                            else {
                                instance.hash(result).then(function (res) {
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
    LoanServiceService.prototype.spv_ids = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.spv_ids.call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                var arr = [];
                                for (var i = 1; i <= result.toNumber(); i++) {
                                    arr.push(i);
                                }
                                resolve(arr);
                            }
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.spv_details = function (spv_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.spv_details.call(spv_id, function (err, result) {
                            if (err != null) {
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
    LoanServiceService.prototype.spv_id_get = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.spv_id_get.call(address, function (err, result) {
                            if (err != null) {
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
    LoanServiceService.prototype.register_spv = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.register_spv.sendTransaction({ from: address, gas: 600000 }, function (err, result) {
                            if (err != null) {
                                // instance.spinner.hide()
                                resolve(0);
                            }
                            else {
                                instance.hash(result).then(function (res) {
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
    LoanServiceService.prototype.is_owned_spv = function (spv_id, pool_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.is_owned_spv.call(spv_id, pool_id, function (err, result) {
                            if (err != null) {
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
    LoanServiceService.prototype.spv_id_by_pool_id = function (pool_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.spv_id_by_pool_id.call(pool_id, function (err, result) {
                            if (err != null) {
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
    LoanServiceService.prototype.spv_buy_pool = function (pool_id, amount, address) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.spv_buy_pool.sendTransaction(pool_id, { from: address, value: amount, gas: 600000 }, function (err, result) {
                            if (err != null) {
                                // instance.spinner.hide()
                                resolve(0);
                            }
                            else {
                                instance.hash(result).then(function (res) {
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
    LoanServiceService.prototype.investor_ids = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.investor_ids.call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                var arr = [];
                                for (var i = 1; i <= result.toNumber(); i++) {
                                    arr.push(i);
                                }
                                resolve(arr);
                            }
                        });
                    })];
            });
        });
    };
    LoanServiceService.prototype.investor_details = function (investor_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.investor_details.call(investor_id, function (err, result) {
                            if (err != null) {
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
    LoanServiceService.prototype.investor_id_get = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.investor_id_get.call(address, function (err, result) {
                            if (err != null) {
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
    LoanServiceService.prototype.is_owned_investor = function (inv_id, pool_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.is_owned_investor.call(inv_id, pool_id, function (err, result) {
                            if (err != null) {
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
    LoanServiceService.prototype.register_investor = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.register_investor.sendTransaction({ from: address, gas: 600000 }, function (err, result) {
                            if (err != null) {
                                // instance.spinner.hide()
                                resolve(0);
                            }
                            else {
                                instance.hash(result).then(function (res) {
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
    LoanServiceService.prototype.investor_purchase = function (pool_id, address, amount) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.investor_purchase.sendTransaction(pool_id, { from: address, value: amount, gas: 600000 }, function (err, result) {
                            if (err != null) {
                                // instance.spinner.hide()
                                resolve(0);
                            }
                            else {
                                instance.hash(result).then(function (res) {
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
    LoanServiceService.prototype.issuer_withdraw = function (how_much_amount, address) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.issuer_withdraw.sendTransaction(how_much_amount, { from: address, gas: 600000 }, function (err, result) {
                            if (err != null) {
                                // instance.spinner.hide()
                                resolve(0);
                            }
                            else {
                                instance.hash(result).then(function (res) {
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
    LoanServiceService.prototype.inv_id_by_pool_id = function (pool_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.inv_id_by_pool_id.call(pool_id, pool_id, function (err, result) {
                            if (err != null) {
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
    LoanServiceService.prototype.loan_status = function (loan_id) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance.loan_contract.loan_status.call(loan_id, function (err, result) {
                            if (err != null) {
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
    LoanServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], LoanServiceService);
    return LoanServiceService;
}());



/***/ }),

/***/ "./src/app/Service/loan.json":
/*!***********************************!*\
  !*** ./src/app/Service/loan.json ***!
  \***********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, default */
/***/ (function(module) {

module.exports = [{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"transfer","type":"event"},{"constant":false,"inputs":[{"name":"_bank_name","type":"bytes32[]"}],"name":"add_bank","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"bank_id","type":"uint256"},{"name":"_borrower_name","type":"bytes32[]"}],"name":"add_borrower","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_borrower_id","type":"uint256"},{"name":"_loan_amount","type":"uint256"},{"name":"_interest_rate","type":"uint256"},{"name":"_loan_duration","type":"uint256"},{"name":"_asset_details","type":"string"},{"name":"_asset_amount","type":"uint256"},{"name":"_borrower_paid","type":"uint256"}],"name":"add_loan","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_loan_ids","type":"uint256[]"},{"name":"_value","type":"uint256"}],"name":"create_pool","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_pool_id","type":"uint256"}],"name":"investor_purchase","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"issuer_withdraw","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"register_investor","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"register_spv","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_pool_id","type":"uint256"}],"name":"spv_buy_pool","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":true,"stateMutability":"payable","type":"constructor"},{"constant":false,"inputs":[{"name":"_loan_id","type":"uint256"},{"name":"_amount","type":"uint256"},{"name":"_options","type":"uint256"},{"name":"spv_id","type":"uint256"},{"name":"inv_id","type":"uint256"}],"name":"update_loan","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"asset_ids","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"bank_detail_map","outputs":[{"name":"bank_name","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"bank_ids","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"borrower_details_map","outputs":[{"name":"borrower_id","type":"uint256"},{"name":"loan_amount","type":"uint256"},{"name":"interest_rate","type":"uint256"},{"name":"loan_duration","type":"uint256"},{"name":"asset_id","type":"uint256"},{"name":"asset_details","type":"string"},{"name":"asset_amount","type":"uint256"},{"name":"borrower_paid","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"borrower_ids","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"borrower_map","outputs":[{"name":"borrower_name","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_loan_ids","type":"uint256[]"}],"name":"can_pack","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"contract_balance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"inv_id_by_pool_id","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"investor_details","outputs":[{"name":"investor_address","type":"address"},{"name":"gain_amount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"investor_id_get","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"investor_ids","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"is_owned_investor","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"is_owned_spv","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"issuer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"loan_ids","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_loan_id","type":"uint256"}],"name":"loan_status","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"pool_details","outputs":[{"name":"pool_value","type":"uint256"},{"name":"is_sold","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pool_ids","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"bank_id","type":"uint256"}],"name":"show_borrower","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_pool_id","type":"uint256"}],"name":"show_loanids_of_pool","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"spv_details","outputs":[{"name":"spv_address","type":"address"},{"name":"gain_amount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"spv_id_by_pool_id","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"spv_id_get","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"spv_ids","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];

/***/ }),

/***/ "./src/app/add bank/addbank.component.html":
/*!*************************************************!*\
  !*** ./src/app/add bank/addbank.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n<div class=\"container-fluid\" >\r\n\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-sm-1\">\r\n    </div>\r\n\r\n<div class=\"col-sm-3\"> \r\n  <h4><b>Bank Details</b></h4>\r\n            <table class=\"table\" style=\"overflow-y:auto;display:block;height:600px;width:195px\">\r\n                <thead class=\"thead-dark\">\r\n                  <tr>\r\n                    <th>Bank ID</th>\r\n                    <th>Bank Name</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let bank of banklist\" >\r\n                    <td>{{ bank.bankid }}</td>\r\n                    <td>{{ bank.bankname }}</td>\r\n                  </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n\r\n  \r\n</div>\r\n\r\n\r\n\r\n  <div class=\"col-sm-6\">\r\n      <h3>Bank Registeration</h3>\r\n<br>\r\n      \r\n    <div class=\"col-sm-12\">\r\n  \r\n        <div class=\"group\">      \r\n            <input class=\"input\" type=\"text\" id=\"id1\" #bankname required>\r\n            <span class=\"highlight\"></span>\r\n            <span class=\"bar\"></span>\r\n            <label>Enter Bank Name</label>\r\n          </div>\r\n    </div>\r\n    <div class=\"col-sm-12\">\r\n      <br>\r\n        <button class=\"btn btn-success\" (click)=\"get_bank_Id(bankname.value)\">Register</button>\r\n      </div>\r\n      <br/>\r\n      <br/>\r\n      \r\n    <div class=\"col-sm-12\">\r\n        <br><br>\r\n        <h5><span><b>Note:</b></span>You can Register Multiple Banks at a time, By using comma(,) you need to separate Bank Names</h5>\r\n  </div>\r\n  \r\n\r\n \r\n\r\n</div>\r\n\r\n  <div class=\"col-sm-3\">\r\n      \r\n  </div>\r\n<!-- row2 -->\r\n\r\n</div>\r\n\r\n<ngx-spinner></ngx-spinner>"

/***/ }),

/***/ "./src/app/add bank/addbank.component.scss":
/*!*************************************************!*\
  !*** ./src/app/add bank/addbank.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\n/* basic stylings ------------------------------------------ */\n\n.container {\n  font-family: 'Roboto';\n  width: 600px;\n  margin: 30px auto 0;\n  display: block;\n  background: #FFF;\n  padding: 10px 50px 50px; }\n\nh2 {\n  text-align: center;\n  margin-bottom: 50px; }\n\nh2 small {\n  font-weight: normal;\n  color: #888;\n  display: block; }\n\n.footer {\n  text-align: center; }\n\n.footer a {\n  color: #53B2C8; }\n\n/* form starting stylings ------------------------------- */\n\n.group {\n  position: relative;\n  margin-bottom: 45px; }\n\n.input {\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 300px;\n  border: none;\n  border-bottom: 1px solid #757575; }\n\n.input:focus {\n  outline: none; }\n\n/* LABEL ======================================= */\n\nlabel {\n  color: #999;\n  font-size: 18px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all; }\n\n/* active state */\n\n.input:focus ~ label, .input:valid ~ label {\n  top: -20px;\n  font-size: 14px;\n  color: #5264AE; }\n\n/* BOTTOM BARS ================================= */\n\n.bar {\n  position: relative;\n  display: block;\n  width: 300px; }\n\n.bar:before, .bar:after {\n  content: '';\n  height: 2px;\n  width: 0;\n  bottom: 1px;\n  position: absolute;\n  background: green;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all; }\n\n.bar:before {\n  left: 50%; }\n\n.bar:after {\n  right: 50%; }\n\n/* active state */\n\n.input:focus ~ .bar:before, .input:focus ~ .bar:after {\n  width: 50%; }\n\n/* HIGHLIGHTER ================================== */\n\n.highlight {\n  position: absolute;\n  height: 60%;\n  width: 100px;\n  top: 25%;\n  left: 0;\n  pointer-events: none;\n  opacity: 0.5; }\n\n/* active state */\n\n.input:focus ~ .highlight {\n  -webkit-animation: inputHighlighter 0.3s ease;\n  animation: inputHighlighter 0.3s ease; }\n\n/* ANIMATIONS ================ */\n\n@-webkit-keyframes inputHighlighter {\n  from {\n    background: skyblue; }\n  to {\n    width: 0;\n    background: transparent; } }\n\n@keyframes inputHighlighter {\n  from {\n    background: skyblue; }\n  to {\n    width: 0;\n    background: transparent; } }\n"

/***/ }),

/***/ "./src/app/add bank/addbank.component.ts":
/*!***********************************************!*\
  !*** ./src/app/add bank/addbank.component.ts ***!
  \***********************************************/
/*! exports provided: AddbankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbankComponent", function() { return AddbankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Service/loan-service.service */ "./src/app/Service/loan-service.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddbankComponent = /** @class */ (function () {
    function AddbankComponent(ls, router, spinner) {
        this.ls = ls;
        this.router = router;
        this.spinner = spinner;
        this.banklist = [];
        jquery__WEBPACK_IMPORTED_MODULE_3___default()("#issuer").addClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_3___default()("#spv").removeClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_3___default()("#investor").removeClass("active");
        this.bankid = '';
    }
    AddbankComponent.prototype.get_bank_Id = function (bname) {
        var _this = this;
        var temp = bname.trim();
        if (temp !== '') {
            var bank_names_1 = [];
            var tmp;
            tmp = bname.trim().split(",");
            for (var i = 0; i < tmp.length; i++) {
                bank_names_1.push(tmp[i]);
            }
            this.spinner.show();
            this.ls.getAccount().then(function (address) {
                _this.ls.add_bank(bank_names_1, address).then(function (result) {
                    document.getElementById('id1').value = '';
                    _this.spinner.hide();
                    if (result == 0) {
                        alert("You Rejected this Transaction!");
                    }
                    else if (result == 2) {
                        alert("Transaction Failed !");
                    }
                    else if (result == 1) {
                        _this.ls.bank_ids().then(function (ids) {
                            _this.bankid = ids.length;
                            alert("Bank(s) Registered Successfully!");
                        });
                    }
                });
            });
        }
        else {
            alert("Enter Bank Name In Input textbox");
            return;
        }
    };
    AddbankComponent.prototype.bank_table = function () {
        var _this = this;
        this.banklist.length = 0;
        this.ls.bank_ids().then(function (bank_ids) {
            bank_ids.forEach(function (bank_id) {
                var obj = {};
                _this.ls.bank_detail_map(bank_id).then(function (b_d) {
                    obj['bankid'] = bank_id;
                    obj['bankname'] = b_d;
                    _this.banklist.push(obj);
                });
            });
        });
    };
    AddbankComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bank_table();
        var meta = this;
        meta.ls.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_4__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            window.location.reload(true);
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 100);
        });
    };
    AddbankComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
    };
    AddbankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addbank',
            template: __webpack_require__(/*! ./addbank.component.html */ "./src/app/add bank/addbank.component.html"),
            styles: [__webpack_require__(/*! ./addbank.component.scss */ "./src/app/add bank/addbank.component.scss")]
        }),
        __metadata("design:paramtypes", [_Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__["LoanServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], AddbankComponent);
    return AddbankComponent;
}());



/***/ }),

/***/ "./src/app/addborrower/addborrower.component.css":
/*!*******************************************************!*\
  !*** ./src/app/addborrower/addborrower.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* { box-sizing:border-box; }\r\n\r\n/* basic stylings ------------------------------------------ */\r\n\r\nh2 \t\t { \r\n  text-align:center; \r\n  margin-bottom:50px; \r\n}\r\n\r\nh2 small { \r\n  font-weight:normal; \r\n  color:#888; \r\n  display:block; \r\n}\r\n\r\n.footer \t{ text-align:center; }\r\n\r\n.footer a  { color:#53B2C8; }\r\n\r\n/* form starting stylings ------------------------------- */\r\n\r\n.group \t\t\t  { \r\n  position:relative; \r\n  margin-bottom:45px; \r\n}\r\n\r\n.input \t\t\t\t{\r\n  font-size:18px;\r\n  padding:10px 10px 10px 5px;\r\n  display:block;\r\n  width:300px;\r\n  border:none;\r\n  border-bottom:1px solid #757575;\r\n}\r\n\r\n.input:focus \t\t{ outline:none; }\r\n\r\n/* LABEL ======================================= */\r\n\r\nlabel \t\t\t\t {\r\n  color:#999; \r\n  font-size:18px;\r\n  font-weight:normal;\r\n  position:absolute;\r\n  pointer-events:none;\r\n  left:5px;\r\n  top:10px;\r\n  transition:0.2s ease all; \r\n  -moz-transition:0.2s ease all; \r\n  -webkit-transition:0.2s ease all;\r\n}\r\n\r\n/* active state */\r\n\r\n.input:focus ~ label, .input:valid ~ label \t\t{\r\n  top:-20px;\r\n  font-size:14px;\r\n  color:#5264AE;\r\n}\r\n\r\n/* BOTTOM BARS ================================= */\r\n\r\n.bar \t{ position:relative; display:block; width:300px; }\r\n\r\n.bar:before, .bar:after \t{\r\n  content:'';\r\n  height:2px; \r\n  width:0;\r\n  bottom:1px; \r\n  position:absolute;\r\n  background:green; \r\n  transition:0.2s ease all; \r\n  -moz-transition:0.2s ease all; \r\n  -webkit-transition:0.2s ease all;\r\n}\r\n\r\n.bar:before {\r\n  left:50%;\r\n}\r\n\r\n.bar:after {\r\n  right:50%; \r\n}\r\n\r\n/* active state */\r\n\r\n.input:focus ~ .bar:before, .input:focus ~ .bar:after {\r\n  width:50%;\r\n}\r\n\r\n/* HIGHLIGHTER ================================== */\r\n\r\n.highlight {\r\n  position:absolute;\r\n  height:60%; \r\n  width:100px; \r\n  top:25%; \r\n  left:0;\r\n  pointer-events:none;\r\n  opacity:0.5;\r\n}\r\n\r\n/* active state */\r\n\r\n.input:focus ~ .highlight {\r\n  -webkit-animation:inputHighlighter 0.3s ease;\r\n  animation:inputHighlighter 0.3s ease;\r\n}\r\n\r\n/* ANIMATIONS ================ */\r\n\r\n@-webkit-keyframes inputHighlighter {\r\n\tfrom { background:skyblue; }\r\n  to \t{ width:0; background:transparent; }\r\n}\r\n\r\n@keyframes inputHighlighter {\r\n\tfrom { background:skyblue; }\r\n  to \t{ width:0; background:transparent; }\r\n}"

/***/ }),

/***/ "./src/app/addborrower/addborrower.component.html":
/*!********************************************************!*\
  !*** ./src/app/addborrower/addborrower.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"col-sm-4\">\r\n            <h4><b>Bank Details</b></h4>\r\n            <table class=\"table\" style=\"overflow-y:auto;display:block;height:600px;width:225px\">\r\n                <thead class=\"thead-dark\">\r\n                  <tr>\r\n                    <th>Bank ID</th>\r\n                    <th>Bank Name</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let bank of banklist\" >\r\n                    <td>{{ bank.bankid }}</td>\r\n                    <td>{{ bank.bankname }}</td>\r\n                  </tr>\r\n                </tbody>\r\n            </table>\r\n    </div>\r\n    <div class=\"col-sm-5\">\r\n\r\n            <h3>Borrower Registeration</h3>\r\n            <br>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"group\">      \r\n                <input class=\"input\" type=\"text\" id=\"id1\" #brwrname required>\r\n                <span class=\"highlight\"></span>\r\n                <span class=\"bar\"></span>\r\n                <label >Enter Borrower Name</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-12\"> \r\n              <div class=\"group\">      \r\n                  <input class=\"input\" type=\"text\" id=\"id2\" #bankid required>\r\n                  <span class=\"highlight\"></span>\r\n                  <span class=\"bar\"></span>\r\n                  <label>Enter Bank ID</label>\r\n              </div>\r\n            </div> \r\n            <div class=\"col-sm-12\"> \r\n              <button class=\"btn btn-success\" (click)=\"get_borrower_id(brwrname.value,bankid.value)\">Register</button>\r\n              <br><br>\r\n              </div>\r\n              <!-- <div class=\"col-sm-6\">\r\n                  <br><br>\r\n                  <h4>Generated Borrower Id</h4>\r\n                  <input type=\"text\" value={{borrower_id}} class=\"form-control\" readonly>        \r\n            </div> -->\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n            <h4><b>Borrower Details</b></h4>\r\n            <table class=\"table\" style=\"overflow-y:auto;display:block;height:600px;\">\r\n                <thead class=\"thead-dark\">\r\n                  <tr>\r\n                    <th>Borrower ID</th>\r\n                    <th>Borrower Name</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let borrower of borrowerlist\" >\r\n                    <td>{{ borrower.borrowerid }}</td>\r\n                    <td>{{ borrower.borrowername }}</td>\r\n                  </tr>\r\n                </tbody>\r\n            </table>\r\n    </div>\r\n</div>\r\n<ngx-spinner></ngx-spinner>"

/***/ }),

/***/ "./src/app/addborrower/addborrower.component.ts":
/*!******************************************************!*\
  !*** ./src/app/addborrower/addborrower.component.ts ***!
  \******************************************************/
/*! exports provided: AddborrowerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddborrowerComponent", function() { return AddborrowerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Service/loan-service.service */ "./src/app/Service/loan-service.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddborrowerComponent = /** @class */ (function () {
    function AddborrowerComponent(ls, router, spinner) {
        var _this = this;
        this.ls = ls;
        this.router = router;
        this.spinner = spinner;
        this.loan_details = [];
        this.borrowerlist = [];
        this.banklist = [];
        jquery__WEBPACK_IMPORTED_MODULE_3___default()("#issuer").addClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_3___default()("#spv").removeClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_3___default()("#investor").removeClass("active");
        this.borrower_id = '';
        this.ls.contract_balance().then(function (result) { return _this.balance = result; });
    }
    AddborrowerComponent.prototype.get_borrower_id = function (brwrname, bankid) {
        var _this = this;
        if (document.getElementById('id1').value == '') {
            alert("Enter Borrower Name");
            return;
        }
        if (document.getElementById('id2').value == '') {
            alert("Enter Bank Id");
            return;
        }
        var borrower_names = [];
        var tmp;
        tmp = brwrname.trim().split(",");
        for (var i = 0; i < tmp.length; i++) {
            borrower_names.push(tmp[i]);
        }
        this.spinner.show();
        this.ls.getAccount().then(function (address) {
            _this.ls.add_borrower(bankid, borrower_names, address).then(function (res) {
                document.getElementById('id1').value = '';
                document.getElementById('id2').value = '';
                _this.spinner.hide();
                if (res == 0) {
                    alert("You Rejected this Transaction");
                }
                else if (res == 2) {
                    alert("Transaction Failed !");
                }
                else if (res == 1) {
                    _this.ls.borrower_ids().then(function (id) {
                        _this.borrower_id = id.length;
                        _this.borrower_table();
                        alert("Borrower Successfully Registered!");
                    });
                }
            });
        });
    };
    AddborrowerComponent.prototype.table = function () {
        var _this = this;
        this.loan_details.length = 0;
        this.ls.loan_ids().then(function (ids) {
            ids.forEach(function (element) {
                var obj = {};
                _this.ls.borrower_details_map(element).then(function (result) {
                    obj['loanid'] = element;
                    obj['borrowerid'] = result[0];
                    obj['borrowerloanamt'] = result[2];
                    obj['borrowerintrest'] = result[1];
                    obj['loanduration'] = result[3];
                    obj['assetid'] = result[4];
                    obj['assetdetails'] = result[5];
                    obj['assetamt'] = result[6];
                    obj['borrowerpaid'] = result[7];
                    console.log(result);
                    _this.loan_details.push(obj);
                });
            });
        });
    };
    AddborrowerComponent.prototype.bank_table = function () {
        var _this = this;
        this.banklist.length = 0;
        this.ls.bank_ids().then(function (bank_ids) {
            bank_ids.forEach(function (bank_id) {
                var obj = {};
                _this.ls.bank_detail_map(bank_id).then(function (b_d) {
                    obj['bankid'] = bank_id;
                    obj['bankname'] = b_d;
                    _this.banklist.push(obj);
                });
            });
        });
    };
    AddborrowerComponent.prototype.borrower_table = function () {
        var _this = this;
        this.borrowerlist.length = 0;
        this.ls.borrower_ids().then(function (ids) {
            ids.forEach(function (element) {
                var temp_obj = {};
                _this.ls.borrower_map(element).then(function (details) {
                    temp_obj['borrowerid'] = element;
                    temp_obj['borrowername'] = details;
                    _this.borrowerlist.push(temp_obj);
                });
            });
        });
    };
    AddborrowerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.table();
        this.bank_table();
        this.borrower_table();
        var meta = this;
        meta.ls.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_4__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            window.location.reload(true);
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 100);
        });
    };
    AddborrowerComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
    };
    AddborrowerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addborrower',
            template: __webpack_require__(/*! ./addborrower.component.html */ "./src/app/addborrower/addborrower.component.html"),
            styles: [__webpack_require__(/*! ./addborrower.component.css */ "./src/app/addborrower/addborrower.component.css")]
        }),
        __metadata("design:paramtypes", [_Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__["LoanServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], AddborrowerComponent);
    return AddborrowerComponent;
}());



/***/ }),

/***/ "./src/app/addinvestor/addinvestor.component.html":
/*!********************************************************!*\
  !*** ./src/app/addinvestor/addinvestor.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\r\n<head>\r\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n</head>\r\n<body>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\">\r\n        \r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <h1>Investor Registeration</h1><br>\r\n        <button class=\"btn btn-info\" (click)=\"investor_register()\">Register</button>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n        \r\n        </div>\r\n        </div>\r\n</div>\r\n</body>\r\n</html>\r\n<ngx-spinner></ngx-spinner>"

/***/ }),

/***/ "./src/app/addinvestor/addinvestor.component.scss":
/*!********************************************************!*\
  !*** ./src/app/addinvestor/addinvestor.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/addinvestor/addinvestor.component.ts":
/*!******************************************************!*\
  !*** ./src/app/addinvestor/addinvestor.component.ts ***!
  \******************************************************/
/*! exports provided: AddinvestorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddinvestorComponent", function() { return AddinvestorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Service/loan-service.service */ "./src/app/Service/loan-service.service.ts");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddinvestorComponent = /** @class */ (function () {
    function AddinvestorComponent(ls, router, spinner) {
        this.ls = ls;
        this.router = router;
        this.spinner = spinner;
    }
    AddinvestorComponent.prototype.investor_register = function () {
        var _this = this;
        this.spinner.show();
        this.ls.getAccount().then(function (address) {
            _this.ls.register_investor(address).then(function (res) {
                _this.spinner.hide();
                if (res == 0) {
                    alert("You Rejected this Transaction");
                }
                else if (res == 2) {
                    alert("Transaction Failed !");
                }
                else if (res == 1) {
                    _this.ls.investor_ids().then(function (inv_ids) {
                        alert("You Successfully Registered As An Investor, Your Investor Id Is:  " + inv_ids.length);
                    });
                }
            });
        });
    };
    AddinvestorComponent.prototype.ngOnInit = function () {
        var _this = this;
        var meta = this;
        meta.ls.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_3__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            window.location.reload(true);
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 200);
        });
    };
    AddinvestorComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
    };
    AddinvestorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addinvestor',
            template: __webpack_require__(/*! ./addinvestor.component.html */ "./src/app/addinvestor/addinvestor.component.html"),
            styles: [__webpack_require__(/*! ./addinvestor.component.scss */ "./src/app/addinvestor/addinvestor.component.scss")]
        }),
        __metadata("design:paramtypes", [_Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__["LoanServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], AddinvestorComponent);
    return AddinvestorComponent;
}());



/***/ }),

/***/ "./src/app/addloan/addloan.component.css":
/*!***********************************************!*\
  !*** ./src/app/addloan/addloan.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* { box-sizing:border-box; }\r\n\r\n/* basic stylings ------------------------------------------ */\r\n\r\nbody \t\t\t\t { background:url(https://scotch.io/wp-content/uploads/2014/07/61.jpg); }\r\n\r\n.container \t\t{ \r\n  font-family:'Roboto';\r\n  width:600px; \r\n  margin:30px auto 0; \r\n  display:block; \r\n  background:#FFF;\r\n  padding:10px 50px 50px;\r\n}\r\n\r\nh2 \t\t { \r\n  text-align:center; \r\n  margin-bottom:50px; \r\n}\r\n\r\nh2 small { \r\n  font-weight:normal; \r\n  color:#888; \r\n  display:block; \r\n}\r\n\r\n.footer \t{ text-align:center; }\r\n\r\n.footer a  { color:#53B2C8; }\r\n\r\n/* form starting stylings ------------------------------- */\r\n\r\n.group \t\t\t  { \r\n  position:relative; \r\n  margin-bottom:45px; \r\n}\r\n\r\ninput \t\t\t\t{\r\n  font-size:18px;\r\n  padding:10px 10px 10px 5px;\r\n  display:block;\r\n  width:300px;\r\n  border:none;\r\n  border-bottom:1px solid #757575;\r\n}\r\n\r\ninput:focus \t\t{ outline:none; }\r\n\r\n/* LABEL ======================================= */\r\n\r\nlabel \t\t\t\t {\r\n  color:#999; \r\n  font-size:18px;\r\n  font-weight:normal;\r\n  position:absolute;\r\n  pointer-events:none;\r\n  left:5px;\r\n  top:10px;\r\n  transition:0.2s ease all; \r\n  -moz-transition:0.2s ease all; \r\n  -webkit-transition:0.2s ease all;\r\n}\r\n\r\n/* active state */\r\n\r\ninput:focus ~ label, input:valid ~ label \t\t{\r\n  top:-20px;\r\n  font-size:14px;\r\n  color:#5264AE;\r\n}\r\n\r\n/* BOTTOM BARS ================================= */\r\n\r\n.bar \t{ position:relative; display:block; width:300px; }\r\n\r\n.bar:before, .bar:after \t{\r\n  content:'';\r\n  height:2px; \r\n  width:0;\r\n  bottom:1px; \r\n  position:absolute;\r\n  background:green; \r\n  transition:0.2s ease all; \r\n  -moz-transition:0.2s ease all; \r\n  -webkit-transition:0.2s ease all;\r\n}\r\n\r\n.bar:before {\r\n  left:50%;\r\n}\r\n\r\n.bar:after {\r\n  right:50%; \r\n}\r\n\r\n/* active state */\r\n\r\ninput:focus ~ .bar:before, input:focus ~ .bar:after {\r\n  width:50%;\r\n}\r\n\r\n/* HIGHLIGHTER ================================== */\r\n\r\n.highlight {\r\n  position:absolute;\r\n  height:60%; \r\n  width:100px; \r\n  top:25%; \r\n  left:0;\r\n  pointer-events:none;\r\n  opacity:0.5;\r\n}\r\n\r\n/* active state */\r\n\r\ninput:focus ~ .highlight {\r\n  -webkit-animation:inputHighlighter 0.3s ease;\r\n  animation:inputHighlighter 0.3s ease;\r\n}\r\n\r\n/* ANIMATIONS ================ */\r\n\r\n@-webkit-keyframes inputHighlighter {\r\n\tfrom { background:skyblue; }\r\n  to \t{ width:0; background:transparent; }\r\n}\r\n\r\n@keyframes inputHighlighter {\r\n\tfrom { background:skyblue; }\r\n  to \t{ width:0; background:transparent; }\r\n}"

/***/ }),

/***/ "./src/app/addloan/addloan.component.html":
/*!************************************************!*\
  !*** ./src/app/addloan/addloan.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n<div class=\"container-fluid\">\r\n    <div class=\"col-sm-6\">\r\n\r\n                    <h3>Add Loan Details:</h3><br>\r\n        \r\n                    <div class=\"col-sm-12\">\r\n                                    \r\n                    <div class=\"col-sm-6\">\r\n                       \r\n                        <div class=\"group\">      \r\n                            <input type=\"text\" id=\"id1\" #borrowerid required>\r\n                            <span class=\"highlight\"></span>\r\n                            <span class=\"bar\"></span>\r\n                            <label >Enter Borrower Id</label>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"col-sm-6\">\r\n                        \r\n                           \r\n                            <div class=\"group\">      \r\n                                <input type=\"text\" id=\"id2\" #borrowerloanAmount required>\r\n                                <span class=\"highlight\"></span>\r\n                                <span class=\"bar\"></span>\r\n                                <label >Enter Borrower Loan Amount(in Rs)</label>\r\n                              </div>\r\n                            \r\n                          </div>\r\n                  \r\n                      </div>\r\n                  \r\n                        <div class=\"col-sm-12\">\r\n                                <div class=\"col-sm-6\">\r\n                                        <br>\r\n                         \r\n                                        <div class=\"group\">      \r\n                                            <input type=\"text\" id=\"id3\" #interestrate required>\r\n                                            <span class=\"highlight\"></span>\r\n                                            <span class=\"bar\"></span>\r\n                                            <label>Enter Interest rate</label>\r\n                                          </div>\r\n        \r\n                                      </div>\r\n                        \r\n                            <div class=\"col-sm-6\">\r\n                                <br>\r\n                             \r\n                                <div class=\"group\">      \r\n                                    <input type=\"text\" id=\"id4\" #loanduration required>\r\n                                    <span class=\"highlight\"></span>\r\n                                    <span class=\"bar\"></span>\r\n                                    <label >Enter Loan Duration(in months)</label>\r\n                                  </div>\r\n        \r\n                              </div>\r\n        \r\n                          </div>\r\n                  \r\n                          <div class=\"col-sm-12\">\r\n                           \r\n                                <div class=\"col-sm-6\">\r\n                                    <br>\r\n                                 \r\n                                    <div class=\"group\">      \r\n                                        <input type=\"text\" id=\"id5\" #assetdetails required>\r\n                                        <span class=\"highlight\"></span>\r\n                                        <span class=\"bar\"></span>\r\n                                        <label >Enter Asset Details</label>\r\n                                      </div>\r\n                  \r\n                                  </div>\r\n        \r\n                                  <div class=\"col-sm-6\">\r\n                                      <br>\r\n                          \r\n                  \r\n                                      <div class=\"group\">      \r\n                                          <input type=\"text\" id=\"id6\" #assetamt required>\r\n                                          <span class=\"highlight\"></span>\r\n                                          <span class=\"bar\"></span>\r\n                                          <label >Enter Asset Amount(in rupees)</label>\r\n                                        </div>\r\n        \r\n                                    </div>\r\n        \r\n                                </div>\r\n                  \r\n                                <div class=\"col-sm-12\">\r\n                                 \r\n                                       \r\n                                    <div class=\"col-sm-6\">\r\n                                        <br>\r\n                         \r\n                                        <div class=\"group\">      \r\n                                            <input type=\"text\" id=\"id7\" #borrowerpaid required>\r\n                                            <span class=\"highlight\"></span>\r\n                                            <span class=\"bar\"></span>\r\n                                            <label >Enter Borrower Paid(in Rs) *optional</label>\r\n                                          </div>\r\n        \r\n                                      </div>\r\n                                      <div class=\"col-sm-6\">\r\n                                            <br>\r\n                                        <button class=\"btn btn-info\" (click)=\"upload(borrowerid.value,borrowerloanAmount.value,interestrate.value,loanduration.value,assetdetails.value,assetamt.value,borrowerpaid.value)\">Upload Details</button>     \r\n                                        </div>    \r\n                                    </div>\r\n                                                                                                 \r\n                               \r\n\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n<div style=\"overflow-y:auto;display:block;height:300px;\">\r\n        <table class=\"table\" >\r\n                <thead class=\"thead-dark\">\r\n                  <tr>\r\n                    <th>Loan ID</th>\r\n                    <th> Borrower ID</th>\r\n                    <th>Borrower Loan Amount(Rs)</th>\r\n                    <th> Borrower Interest Rate</th>\r\n                    <th>Loan Duration</th>\r\n                    <th>Asset ID</th>\r\n                    <th>Asset Details</th>\r\n                    <th>Asset Amount (Rs)</th>\r\n                    <th>Borrower Paid</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody id=\"loantable\">\r\n                    <tr *ngFor=\"let issuer of loan_details\">\r\n                        <td>{{ issuer.loanid }}</td>\r\n                        <td>{{ issuer.borrowerid }}</td>\r\n                        <td>{{ issuer. borrowerloanamt}}</td>\r\n                        <td>{{ issuer.borrowerintrest }}</td>\r\n                        <td>{{ issuer.loanduration }}</td>\r\n                        <td>{{ issuer.assetid }}</td>\r\n                        <td>{{ issuer.assetdetails }}</td>\r\n                        <td>{{ issuer.assetamt }}</td>\r\n                        <td>{{ issuer.borrowerpaid }}</td>\r\n                     </tr>\r\n                 </tbody>\r\n              </table>\r\n</div>\r\n\r\n    </div>\r\n</div>\r\n<ngx-spinner></ngx-spinner>"

/***/ }),

/***/ "./src/app/addloan/addloan.component.ts":
/*!**********************************************!*\
  !*** ./src/app/addloan/addloan.component.ts ***!
  \**********************************************/
/*! exports provided: AddloanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddloanComponent", function() { return AddloanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Service/loan-service.service */ "./src/app/Service/loan-service.service.ts");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddloanComponent = /** @class */ (function () {
    function AddloanComponent(ls, router, spinner) {
        this.ls = ls;
        this.router = router;
        this.spinner = spinner;
        this.loan_details = [];
    }
    AddloanComponent.prototype.upload = function (borrowerid, borrowerloanAmount, interestrate, loanduration, assetdetails, assetamt, borrowerpaid) {
        var _this = this;
        if (document.getElementById('id1').value == '') {
            alert("Enter Borrower Id");
            return;
        }
        if (document.getElementById('id2').value == '') {
            alert("Enter Borrower Loan Amount");
            return;
        }
        if (document.getElementById('id3').value == '') {
            alert("Enter Interest rate");
            return;
        }
        if (document.getElementById('id4').value == '') {
            alert("Enter Loan Duration");
            return;
        }
        if (document.getElementById('id5').value == '') {
            alert("Enter Asset Details");
            return;
        }
        if (document.getElementById('id6').value == '') {
            alert("Enter Asset Amount(in rupees)");
            return;
        }
        this.spinner.show();
        this.ls.getAccount().then(function (address) {
            _this.ls.add_loan(borrowerid, borrowerloanAmount, interestrate, loanduration, assetdetails, assetamt, borrowerpaid, address).then(function (result) {
                document.getElementById('id1').value = '';
                document.getElementById('id2').value = '';
                document.getElementById('id3').value = '';
                document.getElementById('id4').value = '';
                document.getElementById('id5').value = '';
                document.getElementById('id6').value = '';
                document.getElementById('id7').value = '';
                _this.spinner.hide();
                if (result == 0) {
                    alert("You Rejected this Transaction");
                }
                else if (result == 2) {
                    alert("Transaction Failed !");
                }
                else if (result == 1) {
                    _this.table();
                    _this.ls.loan_ids().then(function (loan_ids) {
                        alert("Loan Added Successfully and Generated Loan Id Is:  " + loan_ids.length);
                    });
                }
            });
        });
    };
    AddloanComponent.prototype.table = function () {
        var _this = this;
        this.loan_details = [];
        this.ls.loan_ids().then(function (ids) {
            ids.forEach(function (element) {
                var obj = {};
                _this.ls.borrower_details_map(element).then(function (result) {
                    obj['loanid'] = element;
                    obj['borrowerid'] = result[0];
                    obj['borrowerloanamt'] = result[1];
                    obj['borrowerintrest'] = result[2];
                    obj['loanduration'] = result[3];
                    obj['assetid'] = result[4];
                    obj['assetdetails'] = result[5];
                    obj['assetamt'] = result[6];
                    obj['borrowerpaid'] = result[7];
                    console.log(result);
                    _this.loan_details.push(obj);
                });
            });
        });
    };
    AddloanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.table();
        var meta = this;
        meta.ls.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_3__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            window.location.reload(true);
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 200);
        });
    };
    AddloanComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
    };
    AddloanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addloan',
            template: __webpack_require__(/*! ./addloan.component.html */ "./src/app/addloan/addloan.component.html"),
            styles: [__webpack_require__(/*! ./addloan.component.css */ "./src/app/addloan/addloan.component.css")]
        }),
        __metadata("design:paramtypes", [_Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__["LoanServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], AddloanComponent);
    return AddloanComponent;
}());



/***/ }),

/***/ "./src/app/addspv/addspv.component.html":
/*!**********************************************!*\
  !*** ./src/app/addspv/addspv.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\r\n<head>\r\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n</head>\r\n<body>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\">\r\n        \r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <h1>SPV Registeration</h1><br>\r\n       <button class=\"btn btn-info\" (click)=\"spv_registeration()\">Register</button>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n        \r\n        </div>\r\n        </div>\r\n</div>\r\n</body>\r\n</html> \r\n<ngx-spinner></ngx-spinner>"

/***/ }),

/***/ "./src/app/addspv/addspv.component.scss":
/*!**********************************************!*\
  !*** ./src/app/addspv/addspv.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/addspv/addspv.component.ts":
/*!********************************************!*\
  !*** ./src/app/addspv/addspv.component.ts ***!
  \********************************************/
/*! exports provided: AddspvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddspvComponent", function() { return AddspvComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_loan_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Service/loan-service.service */ "./src/app/Service/loan-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddspvComponent = /** @class */ (function () {
    function AddspvComponent(ls, router, spinner) {
        this.ls = ls;
        this.router = router;
        this.spinner = spinner;
    }
    AddspvComponent.prototype.spv_registeration = function () {
        var _this = this;
        this.spinner.show();
        this.ls.getAccount().then(function (address) {
            _this.ls.register_spv(address).then(function (res) {
                _this.spinner.hide();
                if (res == 0) {
                    alert("You Rejected this Transaction");
                }
                else if (res == 2) {
                    alert("Transaction Failed");
                }
                else if (res == 1) {
                    alert("You Successfully Registered As An SPV");
                    _this.router.navigate(['spv']);
                }
            });
        });
    };
    AddspvComponent.prototype.ngOnInit = function () {
        var _this = this;
        var meta = this;
        meta.ls.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_3__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            window.location.reload(true);
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 200);
        });
    };
    AddspvComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
    };
    AddspvComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addspv',
            template: __webpack_require__(/*! ./addspv.component.html */ "./src/app/addspv/addspv.component.html"),
            styles: [__webpack_require__(/*! ./addspv.component.scss */ "./src/app/addspv/addspv.component.scss")]
        }),
        __metadata("design:paramtypes", [_Service_loan_service_service__WEBPACK_IMPORTED_MODULE_1__["LoanServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], AddspvComponent);
    return AddspvComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-routing/routes.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing/routes.ts ***!
  \***************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _spv_spv_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../spv/spv.component */ "./src/app/spv/spv.component.ts");
/* harmony import */ var _investor_investor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../investor/investor.component */ "./src/app/investor/investor.component.ts");
/* harmony import */ var _createpack_createpack_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../createpack/createpack.component */ "./src/app/createpack/createpack.component.ts");
/* harmony import */ var _updateloan_updateloan_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../updateloan/updateloan.component */ "./src/app/updateloan/updateloan.component.ts");
/* harmony import */ var _addspv_addspv_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../addspv/addspv.component */ "./src/app/addspv/addspv.component.ts");
/* harmony import */ var _guard_spv_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../guard/spv.guard */ "./src/app/guard/spv.guard.ts");
/* harmony import */ var _guard_investor_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../guard/investor.guard */ "./src/app/guard/investor.guard.ts");
/* harmony import */ var _addinvestor_addinvestor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../addinvestor/addinvestor.component */ "./src/app/addinvestor/addinvestor.component.ts");
/* harmony import */ var _guard_issuer_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../guard/issuer.guard */ "./src/app/guard/issuer.guard.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _addloan_addloan_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../addloan/addloan.component */ "./src/app/addloan/addloan.component.ts");
/* harmony import */ var _add_bank_addbank_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../add bank/addbank.component */ "./src/app/add bank/addbank.component.ts");
/* harmony import */ var _addborrower_addborrower_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../addborrower/addborrower.component */ "./src/app/addborrower/addborrower.component.ts");
/* harmony import */ var _withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../withdraw/withdraw.component */ "./src/app/withdraw/withdraw.component.ts");
/* harmony import */ var _metamask_error_metamask_error_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../metamask-error/metamask-error.component */ "./src/app/metamask-error/metamask-error.component.ts");















var routes = [
    {
        path: 'WelcomeComponent',
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeComponent"],
    },
    {
        path: 'addbank',
        component: _add_bank_addbank_component__WEBPACK_IMPORTED_MODULE_11__["AddbankComponent"],
        canActivate: [_guard_issuer_guard__WEBPACK_IMPORTED_MODULE_8__["IssuerGuard"]]
    },
    {
        path: 'addborrower',
        component: _addborrower_addborrower_component__WEBPACK_IMPORTED_MODULE_12__["AddborrowerComponent"],
        canActivate: [_guard_issuer_guard__WEBPACK_IMPORTED_MODULE_8__["IssuerGuard"]]
    },
    {
        path: 'addloan',
        component: _addloan_addloan_component__WEBPACK_IMPORTED_MODULE_10__["AddloanComponent"],
        canActivate: [_guard_issuer_guard__WEBPACK_IMPORTED_MODULE_8__["IssuerGuard"]]
    },
    {
        path: 'spv',
        component: _spv_spv_component__WEBPACK_IMPORTED_MODULE_0__["SpvComponent"],
        canActivate: [_guard_spv_guard__WEBPACK_IMPORTED_MODULE_5__["SpvGuard"]]
    },
    {
        path: 'addspv',
        component: _addspv_addspv_component__WEBPACK_IMPORTED_MODULE_4__["AddspvComponent"],
    },
    {
        path: 'investor',
        component: _investor_investor_component__WEBPACK_IMPORTED_MODULE_1__["InvestorComponent"],
        canActivate: [_guard_investor_guard__WEBPACK_IMPORTED_MODULE_6__["InvestorGuard"]]
    },
    {
        path: 'addinvestor',
        component: _addinvestor_addinvestor_component__WEBPACK_IMPORTED_MODULE_7__["AddinvestorComponent"],
    },
    {
        path: 'createpack',
        component: _createpack_createpack_component__WEBPACK_IMPORTED_MODULE_2__["CreatepackComponent"],
        canActivate: [_guard_issuer_guard__WEBPACK_IMPORTED_MODULE_8__["IssuerGuard"]]
    },
    {
        path: 'updateloan',
        component: _updateloan_updateloan_component__WEBPACK_IMPORTED_MODULE_3__["UpdateloanComponent"],
        canActivate: [_guard_issuer_guard__WEBPACK_IMPORTED_MODULE_8__["IssuerGuard"]]
    },
    {
        path: 'withdraw',
        component: _withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_13__["WithdrawComponent"],
        canActivate: [_guard_issuer_guard__WEBPACK_IMPORTED_MODULE_8__["IssuerGuard"]]
    },
    {
        path: 'metamask',
        component: _metamask_error_metamask_error_component__WEBPACK_IMPORTED_MODULE_14__["MetamaskErrorComponent"],
    },
    {
        path: '',
        redirectTo: '/addbank',
        pathMatch: 'full'
    }
];


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _addspv_addspv_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addspv/addspv.component */ "./src/app/addspv/addspv.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_routing_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing/routes */ "./src/app/app-routing/routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _spv_spv_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./spv/spv.component */ "./src/app/spv/spv.component.ts");
/* harmony import */ var _investor_investor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./investor/investor.component */ "./src/app/investor/investor.component.ts");
/* harmony import */ var _createpack_createpack_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./createpack/createpack.component */ "./src/app/createpack/createpack.component.ts");
/* harmony import */ var _updateloan_updateloan_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./updateloan/updateloan.component */ "./src/app/updateloan/updateloan.component.ts");
/* harmony import */ var _addinvestor_addinvestor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./addinvestor/addinvestor.component */ "./src/app/addinvestor/addinvestor.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _addloan_addloan_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./addloan/addloan.component */ "./src/app/addloan/addloan.component.ts");
/* harmony import */ var _add_bank_addbank_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./add bank/addbank.component */ "./src/app/add bank/addbank.component.ts");
/* harmony import */ var _addborrower_addborrower_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./addborrower/addborrower.component */ "./src/app/addborrower/addborrower.component.ts");
/* harmony import */ var _withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./withdraw/withdraw.component */ "./src/app/withdraw/withdraw.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _metamask_error_metamask_error_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./metamask-error/metamask-error.component */ "./src/app/metamask-error/metamask-error.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _spv_spv_component__WEBPACK_IMPORTED_MODULE_8__["SpvComponent"],
                _investor_investor_component__WEBPACK_IMPORTED_MODULE_9__["InvestorComponent"],
                _createpack_createpack_component__WEBPACK_IMPORTED_MODULE_10__["CreatepackComponent"],
                _updateloan_updateloan_component__WEBPACK_IMPORTED_MODULE_11__["UpdateloanComponent"],
                _addspv_addspv_component__WEBPACK_IMPORTED_MODULE_3__["AddspvComponent"],
                _addinvestor_addinvestor_component__WEBPACK_IMPORTED_MODULE_12__["AddinvestorComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_13__["WelcomeComponent"],
                _addloan_addloan_component__WEBPACK_IMPORTED_MODULE_14__["AddloanComponent"],
                _add_bank_addbank_component__WEBPACK_IMPORTED_MODULE_15__["AddbankComponent"],
                _addborrower_addborrower_component__WEBPACK_IMPORTED_MODULE_16__["AddborrowerComponent"],
                _withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_17__["WithdrawComponent"],
                _metamask_error_metamask_error_component__WEBPACK_IMPORTED_MODULE_19__["MetamaskErrorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing_routes__WEBPACK_IMPORTED_MODULE_5__["routes"]),
                ngx_spinner__WEBPACK_IMPORTED_MODULE_18__["NgxSpinnerModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/createpack/createpack.component.html":
/*!******************************************************!*\
  !*** ./src/app/createpack/createpack.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\">\r\n            <h3>Create Pool:</h3><br>\r\n            <div class=\"alert alert-info\">\r\n                <strong>Info!</strong> You can enter multiple loan Id's &nbsp;<strong>(ex:- 1,2,3)</strong>.\r\n            </div><br>    \r\n                    <div class=\"col-sm-12\">\r\n                <div class=\"group\">      \r\n                        <input type=\"text\" id =\"id1\"  #loanid required>\r\n                        <span class=\"highlight\"></span>\r\n                        <span class=\"bar\"></span>\r\n                        <label >Enter Loan id</label>\r\n                    </div>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"group\">      \r\n                        <input type=\"text\" id = \"id2\"  #totvalue required>\r\n                        <span class=\"highlight\"></span>\r\n                        <span class=\"bar\"></span>\r\n                        <label >Enter pool Amount(in ether)</label>\r\n                    </div>\r\n                </div>\r\n            <div class=\"col-sm-12\">\r\n                <br>\r\n                <button class=\"btn btn-info\" (click)=\"createpool(loanid.value,totvalue.value)\">Create</button>\r\n                </div>\r\n        </div>\r\n        <div class=\"col-sm-9\">\r\n            <h4>Loan Details</h4>\r\n            <table class=\"table\" style=\"overflow-y:auto;display:block;height:300px;\">\r\n                <thead class=\"thead-dark\">\r\n                    <tr>\r\n                    <th>Loan ID</th>\r\n                    <th> Borrower ID</th>\r\n                    <th>Borrower Loan Amount(Rs)</th>\r\n                    <th> Borrower Interest Rate</th>\r\n                    <th>Loan Duration</th>\r\n                    <th>Asset ID</th>\r\n                    <th>Asset Details</th>\r\n                    <th>Asset Amount (Rs)</th>\r\n                    <th>Borrower Paid</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody id=\"loantable\">\r\n                    <tr *ngFor=\"let issuer of loan_details\">\r\n                        <td>{{ issuer.loanid }}</td>\r\n                        <td>{{ issuer.borrowerid }}</td>\r\n                        <td>{{ issuer. borrowerloanamt}}</td>\r\n                        <td>{{ issuer.borrowerintrest }}</td>\r\n                        <td>{{ issuer.loanduration }}</td>\r\n                        <td>{{ issuer.assetid }}</td>\r\n                        <td>{{ issuer.assetdetails }}</td>\r\n                        <td>{{ issuer.assetamt }}</td>\r\n                        <td>{{ issuer.borrowerpaid }}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            \r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-5\">\r\n          \r\n        </div>\r\n    <div class=\"col-sm-2\">\r\n        <h4>Pool Details</h4>\r\n          <table class=\"table\" style=\"overflow-y:auto;display:block;height:300px;\">\r\n              <thead class=\"thead-dark\">\r\n                <tr>\r\n                  <th>Pool ID</th>\r\n                  <th>Total Value</th>\r\n                  <th>Status</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody id=\"pooltable\">\r\n                  <tr *ngFor=\"let pool of pool_details\" [ngSwitch]=\"pool.status\">\r\n                      <td>{{ pool.id }}</td>\r\n                      <td>{{ pool.value }}</td>\r\n                      <td *ngSwitchCase='true'>sold</td>\r\n                      <td *ngSwitchCase='false'>Available</td>\r\n                   </tr>\r\n               </tbody>\r\n            </table>\r\n          \r\n        </div>\r\n     \r\n     \r\n    </div>\r\n       \r\n</div>\r\n<ngx-spinner></ngx-spinner>"

/***/ }),

/***/ "./src/app/createpack/createpack.component.scss":
/*!******************************************************!*\
  !*** ./src/app/createpack/createpack.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\n/* basic stylings ------------------------------------------ */\n\n.container {\n  font-family: 'Roboto';\n  width: 600px;\n  margin: 30px auto 0;\n  display: block;\n  background: #FFF;\n  padding: 10px 50px 50px; }\n\nh2 {\n  text-align: center;\n  margin-bottom: 50px; }\n\nh2 small {\n  font-weight: normal;\n  color: #888;\n  display: block; }\n\n.footer {\n  text-align: center; }\n\n.footer a {\n  color: #53B2C8; }\n\n/* form starting stylings ------------------------------- */\n\n.group {\n  position: relative;\n  margin-bottom: 45px; }\n\ninput {\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 300px;\n  border: none;\n  border-bottom: 1px solid #757575; }\n\ninput:focus {\n  outline: none; }\n\n/* LABEL ======================================= */\n\nlabel {\n  color: #999;\n  font-size: 18px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all; }\n\n/* active state */\n\ninput:focus ~ label, input:valid ~ label {\n  top: -20px;\n  font-size: 14px;\n  color: #5264AE; }\n\n/* BOTTOM BARS ================================= */\n\n.bar {\n  position: relative;\n  display: block;\n  width: 300px; }\n\n.bar:before, .bar:after {\n  content: '';\n  height: 2px;\n  width: 0;\n  bottom: 1px;\n  position: absolute;\n  background: green;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all; }\n\n.bar:before {\n  left: 50%; }\n\n.bar:after {\n  right: 50%; }\n\n/* active state */\n\ninput:focus ~ .bar:before, input:focus ~ .bar:after {\n  width: 50%; }\n\n/* HIGHLIGHTER ================================== */\n\n.highlight {\n  position: absolute;\n  height: 60%;\n  width: 100px;\n  top: 25%;\n  left: 0;\n  pointer-events: none;\n  opacity: 0.5; }\n\n/* active state */\n\ninput:focus ~ .highlight {\n  -webkit-animation: inputHighlighter 0.3s ease;\n  animation: inputHighlighter 0.3s ease; }\n\n/* ANIMATIONS ================ */\n\n@-webkit-keyframes inputHighlighter {\n  from {\n    background: skyblue; }\n  to {\n    width: 0;\n    background: transparent; } }\n\n@keyframes inputHighlighter {\n  from {\n    background: skyblue; }\n  to {\n    width: 0;\n    background: transparent; } }\n"

/***/ }),

/***/ "./src/app/createpack/createpack.component.ts":
/*!****************************************************!*\
  !*** ./src/app/createpack/createpack.component.ts ***!
  \****************************************************/
/*! exports provided: CreatepackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatepackComponent", function() { return CreatepackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Service/loan-service.service */ "./src/app/Service/loan-service.service.ts");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreatepackComponent = /** @class */ (function () {
    function CreatepackComponent(ls, router, spinner) {
        this.ls = ls;
        this.router = router;
        this.spinner = spinner;
        this.loan_details = [];
        this.pool_details = [];
        this.array = [];
        this.all_packed_loans = [];
        this.duplicate = [];
        this.error_input = [];
        this.multiple_times = [];
    }
    CreatepackComponent.prototype.createpool = function (loanid, totvalue) {
        var _this = this;
        if (document.getElementById('id1').value == '') {
            alert("Enter Loan Id");
            return;
        }
        if (document.getElementById('id2').value == '') {
            alert("Enter pool amount");
            return;
        }
        this.duplicate.length = 0;
        this.error_input.length = 0;
        var amount = totvalue * 1000000000000000000;
        var ids = [];
        var tmp;
        tmp = loanid.trim().split(",");
        for (var i = 0; i < tmp.length; i++) {
            ids.push(parseInt(tmp[i]));
        }
        this.ls.loan_ids().then(function (loan_ids) {
            _this.ls.getAccount().then(function (address) {
                _this.spinner.show();
                ids.forEach(function (id) {
                    if (id < 1 || id > loan_ids.length) {
                        _this.error_input.push(id);
                    }
                    _this.all_packed_loans.forEach(function (loan_id) {
                        if (loan_id == id) {
                            _this.duplicate.push(id);
                        }
                    });
                });
                if (_this.error_input.length >= 1) {
                    document.getElementById('id1').value = '';
                    document.getElementById('id2').value = '';
                    _this.spinner.hide();
                    alert("ERROR INPUT: " + _this.error_input + "  These Ids are not exist");
                }
                else if (_this.duplicate.length >= 1) {
                    _this.spinner.hide();
                    alert("Loan Ids " + _this.duplicate + " were Already Packed !");
                }
                else {
                    _this.ls.create_pool(ids, amount, address).then(function (res) {
                        _this.spinner.hide();
                        if (res == 0) {
                            document.getElementById('id1').value = '';
                            document.getElementById('id2').value = '';
                            alert("You Rejected this Transaction");
                        }
                        else if (res == 2) {
                            document.getElementById('id1').value = '';
                            document.getElementById('id2').value = '';
                            alert("Transaction Failed !");
                        }
                        else if (res == 1) {
                            document.getElementById('id1').value = '';
                            document.getElementById('id2').value = '';
                            _this.pools();
                            _this.packed_loans();
                            _this.table();
                            _this.ls.pool_ids().then(function (pool_ids) {
                                alert("Pool Successfully Created and Generated Pool Id Is  :" + pool_ids.length);
                            });
                        }
                    });
                }
            });
        });
    };
    CreatepackComponent.prototype.packed_loans = function () {
        var _this = this;
        this.all_packed_loans.length = 0;
        this.ls.pool_ids().then(function (pool_ids) {
            pool_ids.forEach(function (pool_id) {
                _this.ls.show_loanids_of_pool(pool_id).then(function (loan_ids) {
                    loan_ids.forEach(function (loan_id) {
                        _this.all_packed_loans.push(loan_id);
                    });
                });
            });
        });
    };
    CreatepackComponent.prototype.pools = function () {
        var _this = this;
        this.pool_details.length = 0;
        this.ls.pool_ids().then(function (ids) {
            ids.forEach(function (element) {
                var pool_obj = {};
                _this.ls.pool_details(element).then(function (data) {
                    pool_obj['id'] = element;
                    pool_obj['value'] = data[0] / 1000000000000000000;
                    pool_obj['status'] = data[1];
                    _this.pool_details.push(pool_obj);
                });
            });
        });
    };
    CreatepackComponent.prototype.table = function () {
        var _this = this;
        this.loan_details.length = 0;
        this.ls.loan_ids().then(function (ids) {
            ids.forEach(function (element) {
                var obj = {};
                _this.ls.borrower_details_map(element).then(function (result) {
                    obj['loanid'] = element;
                    obj['borrowerid'] = result[0];
                    obj['borrowerloanamt'] = result[1];
                    obj['borrowerintrest'] = result[2];
                    obj['loanduration'] = result[3];
                    obj['assetid'] = result[4];
                    obj['assetdetails'] = result[5];
                    obj['assetamt'] = result[6];
                    obj['borrowerpaid'] = result[7];
                    console.log(result);
                    _this.loan_details.push(obj);
                });
            });
        });
    };
    CreatepackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.table();
        this.pools();
        this.packed_loans();
        var meta = this;
        meta.ls.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_3__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            window.location.reload(true);
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 200);
        });
    };
    CreatepackComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
    };
    CreatepackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-createpack',
            template: __webpack_require__(/*! ./createpack.component.html */ "./src/app/createpack/createpack.component.html"),
            styles: [__webpack_require__(/*! ./createpack.component.scss */ "./src/app/createpack/createpack.component.scss")]
        }),
        __metadata("design:paramtypes", [_Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__["LoanServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], CreatepackComponent);
    return CreatepackComponent;
}());



/***/ }),

/***/ "./src/app/guard/investor.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/guard/investor.guard.ts ***!
  \*****************************************/
/*! exports provided: InvestorGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestorGuard", function() { return InvestorGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_loan_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Service/loan-service.service */ "./src/app/Service/loan-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InvestorGuard = /** @class */ (function () {
    function InvestorGuard(ls, route) {
        var _this = this;
        this.ls = ls;
        this.route = route;
        ls.getAccount().then(function (acc) { return _this.address = acc; });
    }
    InvestorGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.ls.check_investor().then(function (issuer) {
            if (issuer == true) {
                return true;
            }
            else {
                _this.route.navigate(["addinvestor"]);
                return false;
            }
        });
    };
    InvestorGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_Service_loan_service_service__WEBPACK_IMPORTED_MODULE_1__["LoanServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], InvestorGuard);
    return InvestorGuard;
}());



/***/ }),

/***/ "./src/app/guard/issuer.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guard/issuer.guard.ts ***!
  \***************************************/
/*! exports provided: IssuerGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuerGuard", function() { return IssuerGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Service/loan-service.service */ "./src/app/Service/loan-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IssuerGuard = /** @class */ (function () {
    function IssuerGuard(ls, route) {
        var _this = this;
        this.ls = ls;
        this.route = route;
        ls.getAccount().then(function (acc) { return _this.address = acc; });
    }
    IssuerGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.ls.check_issuer().then(function (issuer) {
            if (issuer == true) {
                return true;
            }
            else {
                _this.route.navigate(["WelcomeComponent"]);
                return false;
            }
        });
    };
    IssuerGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__["LoanServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], IssuerGuard);
    return IssuerGuard;
}());



/***/ }),

/***/ "./src/app/guard/spv.guard.ts":
/*!************************************!*\
  !*** ./src/app/guard/spv.guard.ts ***!
  \************************************/
/*! exports provided: SpvGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpvGuard", function() { return SpvGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Service/loan-service.service */ "./src/app/Service/loan-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpvGuard = /** @class */ (function () {
    function SpvGuard(ls, route) {
        this.ls = ls;
        this.route = route;
    }
    SpvGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.ls.check_spv().then(function (spv) {
            if (spv == true) {
                return true;
            }
            else {
                _this.route.navigate(["addspv"]);
                return false;
            }
        });
    };
    SpvGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__["LoanServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SpvGuard);
    return SpvGuard;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <title>Loan</title>\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\r\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\r\n    <script type=\"text/javascript\" src=\"//cdn.jsdelivr.net/momentjs/latest/moment.min.js\"></script>\r\n    <script type=\"text/javascript\" src=\"//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.js\"></script>\r\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.css\" />\r\n  </head>\r\n <body style=\"background-color:rgb(116, 241, 210)\">\r\n     \r\n <div class=\"container-fluid\">\r\n        <nav class=\"navbar default \" style=\"background-color:rgb(116, 241, 210)\">\r\n      <div class=\"navbar-header\">\r\n      </div>\r\n      <ul class=\"nav navbar-nav\">\r\n          <li class=\"dropdown\">&nbsp;&nbsp;&nbsp;&nbsp; \r\n              <a class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;ISSUER<span class=\"caret\"></span></a>\r\n              <ul class=\"dropdown-menu\">\r\n                <li  id=\"issue\"><a routerLink=\"/addbank\">Add Bank</a></li>\r\n                <li id=\"addloan\"><a routerLink=\"/addborrower\">Add Borrower</a></li>\r\n                <li id=\"addloan\"><a routerLink=\"/addloan\">Add Loan</a></li>\r\n                <li id=\"updateloan\"><a routerLink=\"/updateloan\">Update Loan</a></li>\r\n                <li id=\"createpack\"><a routerLink=\"/createpack\">Create Pool</a></li>\r\n                <li id=\"createpack\"><a routerLink=\"/withdraw\">Withdraw</a></li>\r\n\r\n              </ul>\r\n            </li>\r\n          <li class=\"dropdown\">&nbsp;&nbsp;&nbsp;&nbsp;   \r\n              <a class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;SPV<span class=\"caret\"></span></a>\r\n              <ul class=\"dropdown-menu\">\r\n                <li  id=\"spv\"><a routerLink=\"/spv\">Purchase Pool</a></li>\r\n              </ul>\r\n            </li>\r\n            \r\n             <li class=\"dropdown\">&nbsp;&nbsp;&nbsp;&nbsp;\r\n              <a class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;INVESTOR<span class=\"caret\"></span></a>\r\n                <ul class=\"dropdown-menu\">\r\n                  <li  id=\"investor\"><a routerLink=\"/investor\">Purchase Pool</a></li>\r\n                </ul>\r\n              </li>        \r\n      </ul>\r\n    \r\n  </nav>\r\n</div>\r\n  </body>\r\n\r\n  </html>\r\n\r\n  "

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".default {\n  color: black;\n  background-color: white;\n  height: 100%; }\n\n.navbar-brand {\n  padding: 0px; }\n\n.navbar-brand > img {\n  height: 100%;\n  padding: 3px;\n  width: auto; }\n\n.header th {\n  height: 2px;\n  line-height: 2px;\n  width: 1px; }\n\n.btn {\n  border: none;\n  outline: none;\n  padding: 0px 0px;\n  background-color: #1295e5;\n  cursor: pointer;\n  font-size: 18px; }\n\n.btn1 {\n  border: none;\n  outline: none;\n  padding: 0px 0px;\n  background-color: #f0f0f0;\n  color: black;\n  cursor: pointer;\n  font-size: 18px; }\n\n.btn1 .navbar-default {\n    color: black;\n    background-color: white;\n    height: 100%; }\n\n.btn1 .navbar-brand {\n    padding: 0px; }\n\n.btn1 .navbar-brand > img {\n    height: 100%;\n    padding: 3px;\n    width: auto; }\n\n.btn1 .header th {\n    height: 2px;\n    line-height: 2px;\n    width: 1px; }\n\n.btn1 .btn {\n    border: none;\n    outline: none;\n    padding: 0px 0px;\n    background-color: #1295e5;\n    cursor: pointer;\n    font-size: 18px; }\n\n.btn1 .btn1 {\n    border: none;\n    outline: none;\n    padding: 0px 0px;\n    background-color: #f0f0f0;\n    color: black;\n    cursor: pointer;\n    font-size: 18px; }\n\n.btn1 .navbar-default .navbar-nav > .active > a,\n  .btn1 .navbar-default .navbar-nav > .active > a:hover,\n  .btn1 .navbar-default .navbar-nav > .active > a:focus {\n    color: white;\n    background: #1295e5; }\n\na {\n  color: black; }\n\n.active, .btn:hover {\n  background-color: #1295e5;\n  color: black; }\n\n.dropbtn {\n  color: black;\n  padding: 5px;\n  font-size: 15px;\n  border: none; }\n\n.dropdown {\n  position: relative;\n  display: inline-block; }\n\n.dropdown-menu {\n  display: none;\n  position: absolute;\n  background-color: #f1f1f1;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1; }\n\n.dropdown-menu a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block; }\n\n.dropdown-menu a:hover {\n  background-color: #ddd; }\n\n.dropdown:hover .dropdown-menu {\n  display: block; }\n\n.dropdown:hover .dropbtn {\n  background-color: white;\n  color: black; }\n"

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
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/investor/investor.component.html":
/*!**************************************************!*\
  !*** ./src/app/investor/investor.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n<div class=\"container-fluid\">\r\n <div class=\"col-sm-3\">\r\n    <h3>Purchase Pool</h3><br>\r\n            <div class=\"col-sm-12\">\r\n              \r\n           \r\n                    <div class=\"group\">      \r\n                        <input type=\"text\" id=\"id1\"  #poolid required>\r\n                        <span class=\"highlight\"></span>\r\n                        <span class=\"bar\"></span>\r\n                        <label >Enter pool Id</label>\r\n                      </div>\r\n                \r\n            </div>\r\n    \r\n            \r\n            <div class=\"col-sm-12\">\r\n               <br> \r\n                <button class=\"btn btn-success\" (click)=\"investor_purchase_pool(poolid.value)\">Purchase</button>\r\n            </div>\r\n </div>\r\n <div class=\"col-sm-2\">\r\n    <h4><b>Purchased Pools</b></h4>\r\n    <table class=\"table\" style=\"overflow-y:auto;display:block;;height:600px\">\r\n      <thead class=\"thead-dark\">\r\n        <tr>\r\n          <th>Pool ID</th>\r\n          <th>Pool Value</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody id=\"purchasedpools\">\r\n        <tr *ngFor=\"let pool of purchased_pools\">\r\n          <td>{{ pool.poolid }}</td>\r\n          <td>{{ pool.poolvalue }}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n </div>\r\n <div class=\"col-sm-2\">\r\n    <h4><b>Available Pools</b></h4>\r\n    <table class=\"table\" style=\"overflow-y:auto;display:block;height:600px\">\r\n      <thead class=\"thead-dark\">\r\n        <tr>\r\n          <th>Pool ID</th>\r\n          <th>Pool Value</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let pool of available_pools\" >\r\n          <td>{{ pool.poolid }}</td>\r\n          <td>{{ pool.poolvalue }}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n </div>\r\n\r\n <div class=\"col-sm-2\">\r\n    <h4><b>Loans of Pool</b></h4>\r\n            <table class=\"table\" style=\"overflow-y:auto;display:block;height:600px\">\r\n        <thead class=\"thead-dark\">\r\n          <tr><th>Pool Id</th><th>Loan Ids</th></tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor = \"let obj of loans_of_pool\">\r\n            <td>{{obj.poolid}}</td>\r\n            <td>{{obj.loanids}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n\r\n </div>\r\n\r\n <div class=\"col-sm-2\">\r\n   \r\n    <h4 style=\"text-align:center\"><b>Amount Gained</b></h4>\r\n    <h1 style=\"text-align:center\">{{investor_gain_amount}}</h1>\r\n\r\n\r\n </div>\r\n\r\n \r\n</div>\r\n<ngx-spinner></ngx-spinner>"

/***/ }),

/***/ "./src/app/investor/investor.component.scss":
/*!**************************************************!*\
  !*** ./src/app/investor/investor.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\n/* basic stylings ------------------------------------------ */\n\n.container {\n  font-family: 'Roboto';\n  width: 600px;\n  margin: 30px auto 0;\n  display: block;\n  background: #FFF;\n  padding: 10px 50px 50px; }\n\nh2 {\n  text-align: center;\n  margin-bottom: 50px; }\n\nh2 small {\n  font-weight: normal;\n  color: #888;\n  display: block; }\n\n.footer {\n  text-align: center; }\n\n.footer a {\n  color: #53B2C8; }\n\n/* form starting stylings ------------------------------- */\n\n.group {\n  position: relative;\n  margin-bottom: 45px; }\n\ninput {\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 300px;\n  border: none;\n  border-bottom: 1px solid #757575; }\n\ninput:focus {\n  outline: none; }\n\n/* LABEL ======================================= */\n\nlabel {\n  color: #999;\n  font-size: 18px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all; }\n\n/* active state */\n\ninput:focus ~ label, input:valid ~ label {\n  top: -20px;\n  font-size: 14px;\n  color: #5264AE; }\n\n/* BOTTOM BARS ================================= */\n\n.bar {\n  position: relative;\n  display: block;\n  width: 300px; }\n\n.bar:before, .bar:after {\n  content: '';\n  height: 2px;\n  width: 0;\n  bottom: 1px;\n  position: absolute;\n  background: green;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all; }\n\n.bar:before {\n  left: 50%; }\n\n.bar:after {\n  right: 50%; }\n\n/* active state */\n\ninput:focus ~ .bar:before, input:focus ~ .bar:after {\n  width: 50%; }\n\n/* HIGHLIGHTER ================================== */\n\n.highlight {\n  position: absolute;\n  height: 60%;\n  width: 100px;\n  top: 25%;\n  left: 0;\n  pointer-events: none;\n  opacity: 0.5; }\n\n/* active state */\n\ninput:focus ~ .highlight {\n  -webkit-animation: inputHighlighter 0.3s ease;\n  animation: inputHighlighter 0.3s ease; }\n\n/* ANIMATIONS ================ */\n\n@-webkit-keyframes inputHighlighter {\n  from {\n    background: skyblue; }\n  to {\n    width: 0;\n    background: transparent; } }\n\n@keyframes inputHighlighter {\n  from {\n    background: skyblue; }\n  to {\n    width: 0;\n    background: transparent; } }\n"

/***/ }),

/***/ "./src/app/investor/investor.component.ts":
/*!************************************************!*\
  !*** ./src/app/investor/investor.component.ts ***!
  \************************************************/
/*! exports provided: InvestorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestorComponent", function() { return InvestorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Service_loan_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Service/loan-service.service */ "./src/app/Service/loan-service.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InvestorComponent = /** @class */ (function () {
    function InvestorComponent(ls, router, spinner) {
        this.ls = ls;
        this.router = router;
        this.spinner = spinner;
        this.available_pools = [];
        this.purchased_pools = [];
        this.loans_of_pool = [];
        jquery__WEBPACK_IMPORTED_MODULE_2___default()("#investor").addClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_2___default()("#spv").removeClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_2___default()("#issuer").removeClass("active");
        this.investor_gain();
    }
    InvestorComponent.prototype.investor_purchase_pool = function (poolid) {
        var _this = this;
        // alert(poolid)
        if (document.getElementById('id1').value == '') {
            alert("Please enter a Pool Id ");
            return;
        }
        //this.spinner.show()
        this.ls.getAccount().then(function (address) {
            _this.ls.pool_ids().then(function (pool_ids) {
                if (pool_ids.length >= poolid && poolid >= 1) {
                    _this.ls.show_loanids_of_pool(poolid).then(function (loan_ids) {
                        // alert(loan_ids)
                        _this.ls.loan_status(loan_ids[0]).then(function (state) {
                            if (state[0] == 0 && state[1] == 0) {
                                //pool not sold to spv
                                document.getElementById('id1').value = '';
                                alert("Pool " + poolid + " Currently not Available");
                            }
                            else if (state[0] != 0 && state[1] != 0) {
                                //pool aready sold to investor
                                // alert(state)
                                document.getElementById('id1').value = '';
                                alert("Pool " + poolid + " Already Sold !");
                            }
                            else if (state[0] != 0 && state[1] == 0) {
                                //pool available
                                _this.ls.pool_details(poolid).then(function (amo_obj) {
                                    _this.spinner.show();
                                    _this.ls.investor_purchase(poolid, address, amo_obj[0]).then(function (result) {
                                        _this.spinner.hide();
                                        if (result == 0) {
                                            document.getElementById('id1').value = '';
                                            alert("You Rejected this Transaction");
                                        }
                                        else if (result == 2) {
                                            document.getElementById('id1').value = '';
                                            alert("Transaction Failed !");
                                        }
                                        else if (result == 1) {
                                            document.getElementById('id1').value = '';
                                            _this.available_pools_table();
                                            _this.purchased_pools_table();
                                            _this.spinner.hide();
                                            alert("You Purchased Pool " + poolid);
                                        }
                                    });
                                });
                            }
                        });
                    });
                }
                else {
                    document.getElementById('id1').value = '';
                    alert("You Entered an Invalid Pool Id");
                    _this.spinner.hide();
                }
            });
        });
    };
    InvestorComponent.prototype.investor_gain = function () {
        var _this = this;
        this.ls.getAccount().then(function (address) {
            _this.ls.investor_id_get(address).then(function (inv_id) {
                _this.ls.investor_details(inv_id).then(function (i_d) {
                    _this.investor_gain_amount = i_d[1];
                });
            });
        });
    };
    InvestorComponent.prototype.available_pools_table = function () {
        var _this = this;
        this.available_pools.length = 0;
        this.ls.getAccount().then(function (address) {
            _this.ls.investor_id_get(address).then(function (inv_id) {
                _this.ls.spv_ids().then(function (spv_ids) {
                    spv_ids.forEach(function (spv_id) {
                        _this.ls.pool_ids().then(function (pool_ids) {
                            pool_ids.forEach(function (pool_id) {
                                _this.ls.is_owned_spv(spv_id, pool_id).then(function (result) {
                                    _this.ls.pool_details(pool_id).then(function (result2) {
                                        if (result == true) {
                                            var obj = {};
                                            obj['poolid'] = pool_id;
                                            obj['poolvalue'] = result2[0] / 1000000000000000000;
                                            _this.available_pools.push(obj);
                                        }
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    };
    InvestorComponent.prototype.purchased_pools_table = function () {
        var _this = this;
        this.purchased_pools.length = 0;
        this.ls.getAccount().then(function (address) {
            _this.ls.investor_id_get(address).then(function (inv_id) {
                _this.ls.pool_ids().then(function (pool_ids) {
                    pool_ids.forEach(function (pool_id) {
                        _this.ls.is_owned_investor(inv_id, pool_id).then(function (result) {
                            if (result == true) {
                                _this.ls.pool_details(pool_id).then(function (p_d) {
                                    var obj2 = {};
                                    obj2['poolid'] = pool_id;
                                    obj2['poolvalue'] = p_d[0] / 1000000000000000000;
                                    _this.purchased_pools.push(obj2);
                                });
                            }
                        });
                    });
                });
            });
        });
    };
    InvestorComponent.prototype.loans_of_pools = function () {
        var _this = this;
        this.loans_of_pool.length = 0;
        this.ls.pool_ids().then(function (pool_ids) {
            pool_ids.forEach(function (pool_id) {
                var obj = {};
                obj["poolid"] = pool_id;
                _this.ls.show_loanids_of_pool(pool_id).then(function (loan_ids) {
                    obj["loanids"] = loan_ids;
                    _this.loans_of_pool.push(obj);
                });
            });
        });
    };
    InvestorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.available_pools_table();
        this.investor_gain();
        this.loans_of_pools();
        this.purchased_pools_table();
        var meta = this;
        meta.ls.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_5__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            window.location.reload(true);
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 200);
        });
    };
    InvestorComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
    };
    InvestorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-investor',
            template: __webpack_require__(/*! ./investor.component.html */ "./src/app/investor/investor.component.html"),
            styles: [__webpack_require__(/*! ./investor.component.scss */ "./src/app/investor/investor.component.scss")]
        }),
        __metadata("design:paramtypes", [_Service_loan_service_service__WEBPACK_IMPORTED_MODULE_3__["LoanServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], InvestorComponent);
    return InvestorComponent;
}());



/***/ }),

/***/ "./src/app/metamask-error/metamask-error.component.html":
/*!**************************************************************!*\
  !*** ./src/app/metamask-error/metamask-error.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\r\n\t<head>\r\n\t\t<title>Ethereum Account Connectivity Error Page</title>\r\n\t</head>\r\n\t<body style=\"margin:75px  700px\"> \r\n\t\t <img src=\"./assets/metamask.png\"/> \r\n\t\t\t<p>\r\n\t\t\t\t<br>There was an error while fetching your account.\r\n\t\t\t\t<br>Make sure your Ethereum client is configured correctly\r\n\r\n\t\t\t\t<br>Tips:\r\n\t\t\t\t<br>Ensure you unlocked your MetaMask plugin.\r\n\t\t\t\t<br>If you don't have MetaMask plugin install here: \r\n\t\t\t\t<br><a href =\"https://metamask.io/ \">https://metamask.io/</a>\r\n\t\t\t</p>\t\r\n\t</body>\r\n</html>"

/***/ }),

/***/ "./src/app/metamask-error/metamask-error.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/metamask-error/metamask-error.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { LoanServiceService } from '../Service/loan-service.service';


var MetamaskErrorComponent = /** @class */ (function () {
    // private wcs: LoanServiceService, 
    function MetamaskErrorComponent(router) {
        this.router = router;
    }
    MetamaskErrorComponent.prototype.ngOnInit = function () {
        var meta = this;
        this.id1 = setInterval(function () {
            if (typeof window.web3 !== 'undefined') {
                meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_2__(window.web3.currentProvider);
                if (meta._web3.eth.accounts[0] !== undefined) {
                    meta.router.navigate(['WelcomeComponent']);
                }
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
            styles: [__webpack_require__(/*! ./metamask-error.component.scss */ "./src/app/metamask-error/metamask-error.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MetamaskErrorComponent);
    return MetamaskErrorComponent;
}());



/***/ }),

/***/ "./src/app/spv/spv.component.html":
/*!****************************************!*\
  !*** ./src/app/spv/spv.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n<div class=\"container-fluid\">\r\n  <div class=\"col-sm-3\">\r\n      <h3>Purchase Pools</h3><br>\r\n    <div class=\"text-input\">\r\n          <div class=\"group\">      \r\n              <input type=\"text\" id = \"id1\" #poolid required>\r\n              <span class=\"highlight\"></span>\r\n              <span class=\"bar\"></span>\r\n              <label > Enter Pool ID</label>\r\n            </div>\r\n        </div>\r\n   \r\n      \r\n      <div class=\"col-sm-6\">\r\n        <br>\r\n          <button class=\"btn btn-success\" (click)=\"purchasepool(poolid.value)\">Purchase</button>\r\n        </div>\r\n  </div>\r\n \r\n\r\n<div class=\"col-sm-2\">\r\n    <h4><b>Purchased Pools</b></h4>\r\n    <table class=\"table\" style=\"overflow-y:auto;display:block;height:600px\">\r\n        <thead class=\"thead-dark\">\r\n          <tr>\r\n            <th>Pool ID</th>\r\n            <th>Pool Value</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody id=\"purchasedpools\">\r\n            <tr *ngFor=\"let pool of purchased_pools\">\r\n                <td>{{ pool.id }}</td>\r\n                <td>{{ pool.value }}</td>\r\n             </tr>\r\n         </tbody>\r\n      </table>  \r\n</div>\r\n\r\n\r\n  <div class=\"col-sm-2\">\r\n          <h4><b>Available Pools</b></h4>\r\n           <table class=\"table\" style=\"overflow-y:auto;display:block;height:600px\">\r\n              <thead class=\"thead-dark\">\r\n                <tr>\r\n                  <th>Pool ID</th>\r\n                  <th>Pool Value</th>                \r\n                </tr>\r\n              </thead>\r\n              <tbody id=\"availablepools\">\r\n                  <tr *ngFor=\"let pool of available_pools\" [ngSwitch]=\"pool.status\">\r\n                      <td>{{ pool.id }}</td>\r\n                      <td>{{ pool.value }}</td>\r\n                      <td *ngSwitchCase='false'>Unsold</td>  \r\n                   </tr>\r\n               </tbody>\r\n            </table>\r\n  </div>\r\n\r\n  \r\n  <div class=\"col-sm-2\">\r\n      <h4><b>Loans of Pool</b></h4>\r\n      <table class=\"table\" style=\"overflow-y:auto;display:block;height:600px\">\r\n  <thead class=\"thead-dark\">\r\n    <tr><th>Pool Id</th><th>Loan Ids</th></tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor = \"let obj of loans_of_pool\">\r\n      <td>{{obj.poolid}}</td>\r\n      <td>{{obj.loanids}}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n    </div>\r\n\r\n    <div class=\"col-sm-2\">\r\n        <h4 style=\"text-align:center\"><b>Amount Gained:</b></h4>\r\n        <h1 style=\"text-align:center\">{{spv_gain_amount}}</h1>\r\n      </div>\r\n  </div>\r\n<ngx-spinner></ngx-spinner>"

/***/ }),

/***/ "./src/app/spv/spv.component.scss":
/*!****************************************!*\
  !*** ./src/app/spv/spv.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\n/* basic stylings ------------------------------------------ */\n\n.container {\n  font-family: 'Roboto';\n  width: 600px;\n  margin: 30px auto 0;\n  display: block;\n  background: #FFF;\n  padding: 10px 50px 50px; }\n\nh2 {\n  text-align: center;\n  margin-bottom: 50px; }\n\nh2 small {\n  font-weight: normal;\n  color: #888;\n  display: block; }\n\n.footer {\n  text-align: center; }\n\n.footer a {\n  color: #53B2C8; }\n\n/* form starting stylings ------------------------------- */\n\n.group {\n  position: relative;\n  margin-bottom: 45px; }\n\ninput {\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 300px;\n  border: none;\n  border-bottom: 1px solid #757575; }\n\ninput:focus {\n  outline: none; }\n\n/* LABEL ======================================= */\n\nlabel {\n  color: #999;\n  font-size: 18px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all; }\n\n/* active state */\n\ninput:focus ~ label, input:valid ~ label {\n  top: -20px;\n  font-size: 14px;\n  color: #5264AE; }\n\n/* BOTTOM BARS ================================= */\n\n.bar {\n  position: relative;\n  display: block;\n  width: 300px; }\n\n.bar:before, .bar:after {\n  content: '';\n  height: 2px;\n  width: 0;\n  bottom: 1px;\n  position: absolute;\n  background: green;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all; }\n\n.bar:before {\n  left: 50%; }\n\n.bar:after {\n  right: 50%; }\n\n/* active state */\n\ninput:focus ~ .bar:before, input:focus ~ .bar:after {\n  width: 50%; }\n\n/* HIGHLIGHTER ================================== */\n\n.highlight {\n  position: absolute;\n  height: 60%;\n  width: 100px;\n  top: 25%;\n  left: 0;\n  pointer-events: none;\n  opacity: 0.5; }\n\n/* active state */\n\ninput:focus ~ .highlight {\n  -webkit-animation: inputHighlighter 0.3s ease;\n  animation: inputHighlighter 0.3s ease; }\n\n/* ANIMATIONS ================ */\n\n@-webkit-keyframes inputHighlighter {\n  from {\n    background: skyblue; }\n  to {\n    width: 0;\n    background: transparent; } }\n\n@keyframes inputHighlighter {\n  from {\n    background: skyblue; }\n  to {\n    width: 0;\n    background: transparent; } }\n"

/***/ }),

/***/ "./src/app/spv/spv.component.ts":
/*!**************************************!*\
  !*** ./src/app/spv/spv.component.ts ***!
  \**************************************/
/*! exports provided: SpvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpvComponent", function() { return SpvComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Service/loan-service.service */ "./src/app/Service/loan-service.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SpvComponent = /** @class */ (function () {
    function SpvComponent(ls, router, spinner) {
        this.ls = ls;
        this.router = router;
        this.spinner = spinner;
        this.available_pools = [];
        this.purchased_pools = [];
        this.loans_of_pool = [];
        jquery__WEBPACK_IMPORTED_MODULE_5___default()("#spv").addClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_5___default()("#issuer").removeClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_5___default()("#investor").removeClass("active");
    }
    SpvComponent.prototype.spv_gain = function () {
        var _this = this;
        this.ls.getAccount().then(function (address) {
            _this.ls.spv_id_get(address).then(function (spv_id) {
                _this.ls.spv_details(spv_id).then(function (s_d) {
                    _this.spv_gain_amount = s_d[1];
                });
            });
        });
    };
    SpvComponent.prototype.purchasepool = function (poolid) {
        var _this = this;
        if (document.getElementById('id1').value == '') {
            alert("Please enter a Pool Id ");
            return;
        }
        this.ls.pool_ids().then(function (pool_ids) {
            if (pool_ids.length >= poolid && poolid >= 1) {
                _this.ls.getAccount().then(function (address) {
                    _this.ls.pool_details(poolid).then(function (data) {
                        _this.spinner.show();
                        if (data[1] == false) {
                            _this.ls.spv_buy_pool(poolid, data[0], address).then(function (result) {
                                _this.spinner.hide();
                                if (result == 0) {
                                    document.getElementById('id1').value = '';
                                    _this.spinner.hide();
                                    alert("You Rejected this Transaction");
                                }
                                else if (result == 2) {
                                    document.getElementById('id1').value = '';
                                    _this.spinner.hide();
                                    alert("Transaction Failed !");
                                }
                                else if (result == 1) {
                                    document.getElementById('id1').value = '';
                                    _this.purchased();
                                    _this.available();
                                    _this.spinner.hide();
                                    alert("You Bought the Pool " + poolid);
                                }
                            });
                        }
                        else {
                            document.getElementById('id1').value = '';
                            alert("pool " + poolid + " already sold");
                            _this.spinner.hide();
                        }
                    });
                });
            }
            else {
                document.getElementById('id1').value = '';
                alert("You had Entered an Invalid Pool Id");
                _this.spinner.hide();
            }
        });
    };
    SpvComponent.prototype.purchased = function () {
        var _this = this;
        this.purchased_pools.length = 0;
        this.ls.getAccount().then(function (address) {
            _this.ls.spv_id_get(address).then(function (spvid) {
                if (spvid > 0) {
                    _this.ls.pool_ids().then(function (p_ids) {
                        p_ids.forEach(function (index) {
                            _this.ls.is_owned_spv(spvid, index).then(function (status) {
                                if (status == true) {
                                    _this.ls.pool_details(index).then(function (result) {
                                        var obj = {};
                                        obj['id'] = index;
                                        obj['value'] = result[0] / 1000000000000000000;
                                        _this.purchased_pools.push(obj);
                                    });
                                }
                            });
                        });
                    });
                }
                else {
                    alert("Still not purchased");
                }
            });
        });
    };
    SpvComponent.prototype.available = function () {
        var _this = this;
        this.available_pools.length = 0;
        this.ls.pool_ids().then(function (ids) {
            ids.forEach(function (element) {
                var pool_obj = {};
                _this.ls.pool_details(element).then(function (data) {
                    if (data[1] == false) {
                        pool_obj['id'] = element;
                        pool_obj['value'] = data[0] / 1000000000000000000;
                        _this.available_pools.push(pool_obj);
                    }
                });
            });
        });
    };
    SpvComponent.prototype.loans_of_pools = function () {
        var _this = this;
        this.loans_of_pool.length = 0;
        this.ls.pool_ids().then(function (pool_ids) {
            pool_ids.forEach(function (pool_id) {
                var obj = {};
                obj["poolid"] = pool_id;
                _this.ls.show_loanids_of_pool(pool_id).then(function (loan_ids) {
                    obj["loanids"] = loan_ids;
                    _this.loans_of_pool.push(obj);
                });
            });
        });
    };
    SpvComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.purchased();
        this.available();
        this.spv_gain();
        this.loans_of_pools();
        var meta = this;
        meta.ls.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_4__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            window.location.reload(true);
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 200);
        });
    };
    SpvComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
    };
    SpvComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spv',
            template: __webpack_require__(/*! ./spv.component.html */ "./src/app/spv/spv.component.html"),
            styles: [__webpack_require__(/*! ./spv.component.scss */ "./src/app/spv/spv.component.scss")]
        }),
        __metadata("design:paramtypes", [_Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__["LoanServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], SpvComponent);
    return SpvComponent;
}());



/***/ }),

/***/ "./src/app/updateloan/updateloan.component.html":
/*!******************************************************!*\
  !*** ./src/app/updateloan/updateloan.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n        <h3>Update Loan Details</h3><br>\r\n          <div class=\"col-sm-12\"> \r\n            <div class=\"group\">      \r\n                <input type=\"text\" id = \"id1\" #loanid required>\r\n                <span class=\"highlight\"></span>\r\n                <span class=\"bar\"></span>\r\n                <label >Enter Loan Id</label>\r\n              </div>\r\n          </div>  \r\n          <div class=\"col-sm-12\">\r\n\r\n              <div class=\"group\">      \r\n                  <input type=\"text\" id = \"id2\" #loanvalue required>\r\n                  <span class=\"highlight\"></span>\r\n                  <span class=\"bar\"></span>\r\n                  <label >Enter amount</label>\r\n                </div>\r\n            </div>\r\n          <div class=\"col-sm-12\">\r\n            <br>\r\n              <button class=\"btn btn-info\" (click)=\"updateloan(loanid.value,loanvalue.value)\">Update</button>\r\n            </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-9\">\r\n        <h4>Loan Details</h4>\r\n          <table class=\"table\" style=\"overflow-y:auto;display:block;height:300px;\">\r\n            <thead class=\"thead-dark\">\r\n                <tr>\r\n                  <th>Loan ID</th>\r\n                  <th> Borrower ID</th>\r\n                  <th>Borrower Loan Amount(Rs)</th>\r\n                  <th> Borrower Interest Rate</th>\r\n                  <th>Loan Duration</th>\r\n                  <th>Asset ID</th>\r\n                  <th>Asset Details</th>\r\n                  <th>Asset Amount (Rs)</th>\r\n                  <th>Borrower Paid</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody id=\"loantable\">\r\n                  <tr *ngFor=\"let issuer of updated_loan_details\">\r\n                      <td>{{ issuer.loanid }}</td>\r\n                      <td>{{ issuer.borrowerid }}</td>\r\n                      <td>{{ issuer. borrowerloanamt}}</td>\r\n                      <td>{{ issuer.borrowerintrest }}</td>\r\n                      <td>{{ issuer.loanduration }}</td>\r\n                      <td>{{ issuer.assetid }}</td>\r\n                      <td>{{ issuer.assetdetails }}</td>\r\n                      <td>{{ issuer.assetamt }}</td>\r\n                      <td>{{ issuer.borrowerpaid }}</td>\r\n                   </tr>\r\n               </tbody>\r\n          </table>\r\n        \r\n      </div>\r\n     \r\n    </div>\r\n</div>\r\n<ngx-spinner></ngx-spinner>"

/***/ }),

/***/ "./src/app/updateloan/updateloan.component.scss":
/*!******************************************************!*\
  !*** ./src/app/updateloan/updateloan.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\n/* basic stylings ------------------------------------------ */\n\n.container {\n  font-family: 'Roboto';\n  width: 600px;\n  margin: 30px auto 0;\n  display: block;\n  background: #FFF;\n  padding: 10px 50px 50px; }\n\nh2 {\n  text-align: center;\n  margin-bottom: 50px; }\n\nh2 small {\n  font-weight: normal;\n  color: #888;\n  display: block; }\n\n.footer {\n  text-align: center; }\n\n.footer a {\n  color: #53B2C8; }\n\n/* form starting stylings ------------------------------- */\n\n.group {\n  position: relative;\n  margin-bottom: 45px; }\n\ninput {\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 300px;\n  border: none;\n  border-bottom: 1px solid #757575; }\n\ninput:focus {\n  outline: none; }\n\n/* LABEL ======================================= */\n\nlabel {\n  color: #999;\n  font-size: 18px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all; }\n\n/* active state */\n\ninput:focus ~ label, input:valid ~ label {\n  top: -20px;\n  font-size: 14px;\n  color: #5264AE; }\n\n/* BOTTOM BARS ================================= */\n\n.bar {\n  position: relative;\n  display: block;\n  width: 300px; }\n\n.bar:before, .bar:after {\n  content: '';\n  height: 2px;\n  width: 0;\n  bottom: 1px;\n  position: absolute;\n  background: green;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all; }\n\n.bar:before {\n  left: 50%; }\n\n.bar:after {\n  right: 50%; }\n\n/* active state */\n\ninput:focus ~ .bar:before, input:focus ~ .bar:after {\n  width: 50%; }\n\n/* HIGHLIGHTER ================================== */\n\n.highlight {\n  position: absolute;\n  height: 60%;\n  width: 100px;\n  top: 25%;\n  left: 0;\n  pointer-events: none;\n  opacity: 0.5; }\n\n/* active state */\n\ninput:focus ~ .highlight {\n  -webkit-animation: inputHighlighter 0.3s ease;\n  animation: inputHighlighter 0.3s ease; }\n\n/* ANIMATIONS ================ */\n\n@-webkit-keyframes inputHighlighter {\n  from {\n    background: skyblue; }\n  to {\n    width: 0;\n    background: transparent; } }\n\n@keyframes inputHighlighter {\n  from {\n    background: skyblue; }\n  to {\n    width: 0;\n    background: transparent; } }\n"

/***/ }),

/***/ "./src/app/updateloan/updateloan.component.ts":
/*!****************************************************!*\
  !*** ./src/app/updateloan/updateloan.component.ts ***!
  \****************************************************/
/*! exports provided: UpdateloanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateloanComponent", function() { return UpdateloanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Service/loan-service.service */ "./src/app/Service/loan-service.service.ts");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpdateloanComponent = /** @class */ (function () {
    function UpdateloanComponent(ls, router, spinner) {
        this.ls = ls;
        this.router = router;
        this.spinner = spinner;
        this.updated_loan_details = [];
    }
    UpdateloanComponent.prototype.updateloan = function (text_loan_id, amount) {
        var _this = this;
        if (document.getElementById('id1').value == '') {
            alert("Please Enter Loan Id");
            return;
        }
        if (document.getElementById('id2').value == '') {
            alert("Please Enter amount");
            return;
        }
        this.spinner.show();
        this.ls.getAccount().then(function (address) {
            _this.ls.loan_status(text_loan_id).then(function (result) {
                if (result[0] == 0 && result[1] == 0) {
                    _this.ls.update_loan(text_loan_id, amount, 0, 0, 0, address).then(function (res) {
                        document.getElementById('id1').value = '';
                        document.getElementById('id2').value = '';
                        _this.spinner.hide();
                        if (res == 0) {
                            alert("You Rejected this Transaction");
                        }
                        else if (res == 2) {
                            alert("Transaction Failed !");
                        }
                        else if (res == 1) {
                            _this.table();
                            alert("Loan Amount Updated");
                        }
                    });
                }
                else if (result[0] != 0 && result[1] == 0) {
                    _this.ls.update_loan(text_loan_id, amount, 1, result[0], 0, address).then(function (res) {
                        document.getElementById('id1').value = '';
                        document.getElementById('id2').value = '';
                        _this.spinner.hide();
                        if (res == 0) {
                            alert("You Rejected this Transaction");
                        }
                        else if (res == 2) {
                            alert("Transaction Failed !");
                        }
                        else if (res == 1) {
                            _this.table();
                            alert("Loan Amount Updated");
                        }
                    });
                }
                else if (result[0] != 0 && result[1] != 0) {
                    _this.ls.update_loan(text_loan_id, amount, 2, result[0], result[1], address).then(function (res) {
                        document.getElementById('id1').value = '';
                        document.getElementById('id2').value = '';
                        _this.spinner.hide();
                        if (res == 0) {
                            alert("You Rejected this Transaction");
                        }
                        else if (res == 2) {
                            alert("Transaction Failed !");
                        }
                        else if (res == 1) {
                            _this.table();
                            alert("Loan Amount Updated");
                        }
                    });
                }
            });
        });
    };
    UpdateloanComponent.prototype.table = function () {
        var _this = this;
        this.updated_loan_details = [];
        this.ls.loan_ids().then(function (ids) {
            ids.forEach(function (element) {
                var obj = {};
                _this.ls.borrower_details_map(element).then(function (result) {
                    obj['loanid'] = element;
                    obj['borrowerid'] = result[0];
                    obj['borrowerloanamt'] = result[1];
                    obj['borrowerintrest'] = result[2];
                    obj['loanduration'] = result[3];
                    obj['assetid'] = result[4];
                    obj['assetdetails'] = result[5];
                    obj['assetamt'] = result[6];
                    obj['borrowerpaid'] = result[7];
                    _this.updated_loan_details.push(obj);
                });
            });
        });
    };
    UpdateloanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.table();
        var meta = this;
        meta.ls.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_3__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            window.location.reload(true);
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 200);
        });
    };
    UpdateloanComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
    };
    UpdateloanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-updateloan',
            template: __webpack_require__(/*! ./updateloan.component.html */ "./src/app/updateloan/updateloan.component.html"),
            styles: [__webpack_require__(/*! ./updateloan.component.scss */ "./src/app/updateloan/updateloan.component.scss")]
        }),
        __metadata("design:paramtypes", [_Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__["LoanServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], UpdateloanComponent);
    return UpdateloanComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n    color:blue;\r\n}"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\r\n  <div class=\"col-sm-4\">\r\n    \r\n  </div>\r\n\r\n  <div class=\"col-sm-4\">\r\n      <br><br><br><br><br><br><br><br><br><br>\r\n      <h1>WELCOME <br><BR>\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TO<BR>\r\n         <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LOAN SECURITIZATION</h1>\r\n    \r\n    </div>\r\n\r\n    <div class=\"col-sm-4\">\r\n    \r\n      </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Service/loan-service.service */ "./src/app/Service/loan-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(ls, router) {
        this.ls = ls;
        this.router = router;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ls.getAccount().then(function (address) {
            _this.ls.check_issuer().then(function (result) {
                if (result == true) {
                    _this.router.navigate(['issuer']);
                }
                else {
                    _this.router.navigate(['WelcomeComponent']);
                }
            });
        });
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [_Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__["LoanServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/withdraw/withdraw.component.css":
/*!*************************************************!*\
  !*** ./src/app/withdraw/withdraw.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* { box-sizing:border-box; }\r\n\r\n/* basic stylings ------------------------------------------ */\r\n\r\n.container \t\t{ \r\n  font-family:'Roboto';\r\n  width:600px; \r\n  margin:30px auto 0; \r\n  display:block; \r\n  background:#FFF;\r\n  padding:10px 50px 50px;\r\n}\r\n\r\nh2 \t\t { \r\n  text-align:center; \r\n  margin-bottom:50px; \r\n}\r\n\r\nh2 small { \r\n  font-weight:normal; \r\n  color:#888; \r\n  display:block; \r\n}\r\n\r\n.footer \t{ text-align:center; }\r\n\r\n.footer a  { color:#53B2C8; }\r\n\r\n/* form starting stylings ------------------------------- */\r\n\r\n.group \t\t\t  { \r\n  position:relative; \r\n  margin-bottom:45px; \r\n}\r\n\r\ninput \t\t\t\t{\r\n  font-size:18px;\r\n  padding:10px 10px 10px 5px;\r\n  display:block;\r\n  width:300px;\r\n  border:none;\r\n  border-bottom:1px solid #757575;\r\n}\r\n\r\ninput:focus \t\t{ outline:none; }\r\n\r\n/* LABEL ======================================= */\r\n\r\nlabel \t\t\t\t {\r\n  color:#999; \r\n  font-size:18px;\r\n  font-weight:normal;\r\n  position:absolute;\r\n  pointer-events:none;\r\n  left:5px;\r\n  top:10px;\r\n  transition:0.2s ease all; \r\n  -moz-transition:0.2s ease all; \r\n  -webkit-transition:0.2s ease all;\r\n}\r\n\r\n/* active state */\r\n\r\ninput:focus ~ label, input:valid ~ label \t\t{\r\n  top:-20px;\r\n  font-size:14px;\r\n  color:#5264AE;\r\n}\r\n\r\n/* BOTTOM BARS ================================= */\r\n\r\n.bar \t{ position:relative; display:block; width:300px; }\r\n\r\n.bar:before, .bar:after \t{\r\n  content:'';\r\n  height:2px; \r\n  width:0;\r\n  bottom:1px; \r\n  position:absolute;\r\n  background:green; \r\n  transition:0.2s ease all; \r\n  -moz-transition:0.2s ease all; \r\n  -webkit-transition:0.2s ease all;\r\n}\r\n\r\n.bar:before {\r\n  left:50%;\r\n}\r\n\r\n.bar:after {\r\n  right:50%; \r\n}\r\n\r\n/* active state */\r\n\r\ninput:focus ~ .bar:before, input:focus ~ .bar:after {\r\n  width:50%;\r\n}\r\n\r\n/* HIGHLIGHTER ================================== */\r\n\r\n.highlight {\r\n  position:absolute;\r\n  height:60%; \r\n  width:100px; \r\n  top:25%; \r\n  left:0;\r\n  pointer-events:none;\r\n  opacity:0.5;\r\n}\r\n\r\n/* active state */\r\n\r\ninput:focus ~ .highlight {\r\n  -webkit-animation:inputHighlighter 0.3s ease;\r\n  animation:inputHighlighter 0.3s ease;\r\n}\r\n\r\n/* ANIMATIONS ================ */\r\n\r\n@-webkit-keyframes inputHighlighter {\r\n\tfrom { background:skyblue; }\r\n  to \t{ width:0; background:transparent; }\r\n}\r\n\r\n@keyframes inputHighlighter {\r\n\tfrom { background:skyblue; }\r\n  to \t{ width:0; background:transparent; }\r\n}"

/***/ }),

/***/ "./src/app/withdraw/withdraw.component.html":
/*!**************************************************!*\
  !*** ./src/app/withdraw/withdraw.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-3\">\r\n      \r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n          <div class=\"row\">\r\n              <h3 style=\"text-align:center\">Balance in Ether</h3>\r\n              <h2 style=\"text-align:center\">{{balance}}</h2>\r\n            <br>                       \r\n            <br> \r\n            <h3 style=\"text-align: center\">Withdraw Balance</h3><br>\r\n            <br>\r\n            <div class=\"group\">      \r\n                <input type=\"text\" id = \"id1\"  #withdrawamount required>\r\n                <span class=\"highlight\"></span>\r\n                <span class=\"bar\"></span>\r\n                <label >Enter Amount to Withdraw</label>\r\n              </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-3\">\r\n\r\n                  </div>\r\n                  <div class=\"col-sm-6\">\r\n                      <button  type=\"button\" class=\"btn btn-primary\" (click)=\"withdraw(withdrawamount.value)\">Withdraw</button>                          \r\n          \r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n\r\n                      </div>\r\n\r\n            </div>\r\n\r\n             \r\n           \r\n  </div>\r\n      </div>\r\n      <div class=\"col-sm-3\">\r\n      \r\n      </div>\r\n  \r\n    </div>\r\n  </div>\r\n  <ngx-spinner></ngx-spinner>"

/***/ }),

/***/ "./src/app/withdraw/withdraw.component.ts":
/*!************************************************!*\
  !*** ./src/app/withdraw/withdraw.component.ts ***!
  \************************************************/
/*! exports provided: WithdrawComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawComponent", function() { return WithdrawComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Service/loan-service.service */ "./src/app/Service/loan-service.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WithdrawComponent = /** @class */ (function () {
    function WithdrawComponent(ls, router, spinner) {
        var _this = this;
        this.ls = ls;
        this.router = router;
        this.spinner = spinner;
        this.loan_details = [];
        jquery__WEBPACK_IMPORTED_MODULE_3___default()("#issuer").addClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_3___default()("#spv").removeClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_3___default()("#investor").removeClass("active");
        this.borrower_id = '';
        this.bank_id = '';
        this.ls.contract_balance().then(function (result) { return _this.balance = result / 1000000000000000000; });
    }
    WithdrawComponent.prototype.withdraw = function (amount) {
        var _this = this;
        if (document.getElementById('id1').value == '' || amount <= 0) {
            alert("Please Enter a valid amount");
            return;
        }
        this.ls.contract_balance().then(function (result) {
            if (result < amount * 1000000000000000000) {
                alert("You Can withdraw upto " + result / 1000000000000000000);
                document.getElementById('id1').value = '';
                // // /1000000000000000000
                return;
            }
            _this.spinner.show();
            _this.ls.getAccount().then(function (address) {
                _this.ls.issuer_withdraw(amount * 1000000000000000000, address).then(function (res) {
                    document.getElementById('id1').value = '';
                    _this.spinner.hide();
                    _this.fetch();
                    if (res == 0) {
                        alert("You Rejected the Transaction");
                    }
                    else if (res == 2) {
                        document.getElementById('id1').value = '';
                        alert("Transaction Failed !");
                    }
                    else if (res == 1) {
                        document.getElementById('id1').value = '';
                        alert("Amount Credited to Your Wallet");
                    }
                });
            });
        });
    };
    WithdrawComponent.prototype.fetch = function () {
        var _this = this;
        this.ls.contract_balance().then(function (result) {
            _this.balance = result / 1000000000000000000;
            console.log(result / 1000000000000000000);
        });
    };
    WithdrawComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ls.contract_balance().then(function (result) { return _this.balance = result / 1000000000000000000; });
        var meta = this;
        meta.ls.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_4__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            window.location.reload(true);
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 100);
        });
    };
    WithdrawComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
    };
    WithdrawComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-withdraw',
            template: __webpack_require__(/*! ./withdraw.component.html */ "./src/app/withdraw/withdraw.component.html"),
            styles: [__webpack_require__(/*! ./withdraw.component.css */ "./src/app/withdraw/withdraw.component.css")]
        }),
        __metadata("design:paramtypes", [_Service_loan_service_service__WEBPACK_IMPORTED_MODULE_2__["LoanServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], WithdrawComponent);
    return WithdrawComponent;
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

module.exports = __webpack_require__(/*! D:\Loan staging\loan-securitization-v2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map