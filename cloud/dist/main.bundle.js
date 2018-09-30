webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "/* MAIN PROPERTIES*/\r\n#main-chat{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-align: stretch;\r\n        -ms-flex-align: stretch;\r\n            align-items: stretch;\r\n\r\n    min-width: 30%;\r\n    max-width: 30%;\r\n    max-height: 70%;\r\n    position: absolute;\r\n    right: 5%;\r\n}\r\n#fab-chat{\r\n    -ms-flex-item-align: end;\r\n        align-self: flex-end\r\n}\r\n#fab-chat i{\r\n    color: white;\r\n}\r\nmat-toolbar{\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n    -ms-flex-item-align: stretch;\r\n        -ms-grid-row-align: stretch;\r\n        align-self: stretch;\r\n    /*min-height: 2em !important;\r\n    /height: 3em;*/\r\n}\r\nmat-toolbar-row{\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start\r\n}\r\n#tool-title{\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 0 auto;\r\n            flex: 1 0 auto;\r\n    color: white;\r\n    font-size: 20px;\r\n}\r\n#tool-button{\r\n    -webkit-box-flex: 4;\r\n        -ms-flex: 4 0 auto;\r\n            flex: 4 0 auto;\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-pack: end;\r\n        -ms-flex-pack: end;\r\n            justify-content: flex-end\r\n}\r\napp-chat{\r\n    /*margin-top: 5%;*/\r\n    -webkit-box-flex: 4;\r\n        -ms-flex: 4 0 auto;\r\n            flex: 4 0 auto;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n/* MEDIA QUERIES */\r\n@media screen and (max-width:640px) {\r\n    #main-chat{\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: column;\r\n                flex-direction: column;\r\n        -webkit-box-align: stretch;\r\n            -ms-flex-align: stretch;\r\n                align-items: stretch;\r\n\r\n        min-height: 10%;\r\n        min-width: 10%;\r\n        width: 100% !important;\r\n        height: 100% !important;\r\n        max-width: 100% !important;\r\n        max-height: 100% !important;\r\n        position: inherit !important;\r\n    }\r\n\r\n    mat-toolbar{\r\n\r\n        border-top-left-radius: 0px;\r\n        border-top-right-radius: 0px;\r\n        -ms-flex-item-align: stretch;\r\n            -ms-grid-row-align: stretch;\r\n            align-self: stretch;\r\n        /*min-height: 2em !important;\r\n        /height: 3em;*/\r\n    }\r\n\r\n    #fab-chat{\r\n        -ms-flex-item-align: end;\r\n            align-self: flex-end;\r\n        position: absolute;\r\n        right: 5%;\r\n        bottom: 5%;\r\n    }\r\n}\r\n@media screen and (max-height:450px) {\r\n    #main-chat{\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: column;\r\n                flex-direction: column;\r\n        -webkit-box-align: stretch;\r\n            -ms-flex-align: stretch;\r\n                align-items: stretch;\r\n\r\n        min-height: 10%;\r\n        min-width: 10%;\r\n        width: 100% !important;\r\n        height: 100% !important;\r\n        max-width: 100% !important;\r\n        max-height: 100% !important;\r\n        position: inherit !important;\r\n    }\r\n\r\n    mat-toolbar{\r\n\r\n        border-top-left-radius: 0px;\r\n        border-top-right-radius: 0px;\r\n        -ms-flex-item-align: stretch;\r\n            -ms-grid-row-align: stretch;\r\n            align-self: stretch;\r\n        /*min-height: 2em !important;\r\n        /height: 3em;*/\r\n    }\r\n\r\n    #fab-chat{\r\n        -ms-flex-item-align: end;\r\n            align-self: flex-end;\r\n        position: absolute;\r\n        right: 5%;\r\n        bottom: 5%;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div id=\"main-chat\" [style.bottom]=\"service.bottom\" [style.min-height]=\"service.minHeight\">\r\n  <button mat-fab color=\"primary\" (click)=\"toggle(true)\" *ngIf=\"!chat\" id=\"fab-chat\">\r\n      <i class=\"material-icons\">chat_bubble</i>\r\n  </button>\r\n  <mat-toolbar color=\"primary\" (mouseover)=\"mouse(false)\" *ngIf=\"chat\">\r\n    <mat-toolbar-row>\r\n      <span id=\"tool-title\">\r\n        <span>\r\n          {{ title }}\r\n        </span>\r\n      </span>\r\n      <div id=\"tool-button\">\r\n        <span id=\"mini\">\r\n            <button mat-icon-button color=\"warn\" (click)=\"mini(false)\">\r\n              <i class=\"material-icons\">remove</i>\r\n            </button>\r\n          </span>\r\n        <span id=\"close\">\r\n          <button mat-icon-button color=\"warn\" (click)=\"toggle(false)\">\r\n            <i class=\"material-icons\">close</i>\r\n          </button>\r\n        </span>\r\n      </div>\r\n    </mat-toolbar-row>\r\n  </mat-toolbar>\r\n  <!--i class=\"material-icons\">face</i-->\r\n  <!--img width=\"30%\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"-->\r\n  <app-chat *ngIf=\"chat\" (mouseover)=\"mouse(true)\" (mouseout)=\"mouse(false)\"></app-chat>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__text_service__ = __webpack_require__("./src/app/text.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(service) {
        this.service = service;
        this.title = 'GE';
        this.chat = false;
        window.document.body.setAttribute('style', 'margin:0px !important;');
        // console.log(window.parent.document);
    }
    AppComponent.prototype.toggle = function (value) {
        this.chat = value;
        this.service.bottom = '2.5%';
        if (value) {
            this.service.minHeight = '67%';
        }
        else {
            this.service.minHeight = '0%';
            this.service.chats = [];
        }
    };
    AppComponent.prototype.mini = function (value) {
        this.chat = value;
        this.service.bottom = '2.5%';
        if (value) {
            this.service.minHeight = '67%';
        }
        else {
            this.service.minHeight = '0%';
        }
    };
    AppComponent.prototype.mouse = function (value) {
        if (value) {
            console.log('mouse is over');
            // window.document.body.setAttribute('style', 'overflow:hidden; margin:0px !important;');
            window.parent.postMessage('over', '*');
        }
        else {
            console.log('mouse is out');
            // window.document.body.setAttribute('style', 'overflow:auto; margin:0px !important;');
            window.parent.postMessage('out', '*');
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__text_service__["a" /* TextService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chat_chat_component__ = __webpack_require__("./src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__text_service__ = __webpack_require__("./src/app/text.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { AngularFireModule } from 'angularfire2';
// import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__chat_chat_component__["a" /* ChatComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MatListModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__text_service__["a" /* TextService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/***/ (function(module, exports) {

module.exports = ".chat-text{\r\n    overflow-y: scroll;\r\n    background-color: whitesmoke;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    height: 15em;\r\n    -webkit-box-flex: 4;\r\n        -ms-flex-positive: 4;\r\n            flex-grow: 4;\r\n    padding: 2.5% !important;\r\n}\r\n\r\n.texts{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    margin: 1%;\r\n    margin-left: 0px;\r\n    min-height: 2.7em;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n    position: relative;\r\n}\r\n\r\n#message{\r\n    padding: 2.5%;\r\n    min-height: 2em;\r\n    -ms-flex-item-align: end;\r\n        align-self: flex-end;\r\n}\r\n\r\n#message mat-chip{\r\n    color: white !important;\r\n}\r\n\r\n#response{\r\n    margin: 2.5%;\r\n    margin-left: 0%;\r\n    padding: 2.5%;\r\n    -ms-flex-item-align: start;\r\n        align-self: flex-start;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n}\r\n\r\n#logo-button{\r\n    height:20px;\r\n    width: 20px;\r\n    margin: .5% !important;\r\n    background-color: white;\r\n}\r\n\r\n#typing_gif{\r\n    max-height:4em;\r\n    max-width:4em;\r\n    margin: .5%;\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n#logo{\r\n    height:15px;\r\n    width: 15px;\r\n    margin: .5%;\r\n}\r\n\r\n.text-logo{\r\n    position: absolute;\r\n    top:80%;\r\n    left: .5%;\r\n}\r\n\r\n.suggest-logo{\r\n    /*margin: 0px !important;*/\r\n    position: absolute;\r\n    top:60%;\r\n    left: 1px;\r\n}\r\n\r\n.texts-suggest{\r\n    background-color: whitesmoke;\r\n    -ms-flex-item-align: stretch;\r\n        align-self: stretch;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    margin-top:3%;\r\n    max-height: 10em;\r\n}\r\n\r\n.texts-suggest #title{\r\n    margin: 2.5%;\r\n    margin-left: 1%;\r\n    -ms-flex-item-align: start;\r\n        align-self: flex-start;\r\n    position: relative;\r\n}\r\n\r\n.texts-suggest .title-chip{\r\n    margin-left: 10px;\r\n}\r\n\r\n.texts-suggest #suggestion{\r\n    margin: 5px;\r\n    margin-left: 0%;\r\n    padding: 2.5%;\r\n    -ms-flex-item-align: start;\r\n        align-self: flex-start;\r\n}\r\n\r\n#suggestion mat-chip{\r\n    margin: 3px;\r\n}\r\n\r\n.type3{\r\n    background-color: whitesmoke;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -ms-flex-item-align: stretch;\r\n        align-self: stretch;\r\n    margin:2.5%;\r\n    min-height: 5em;\r\n    max-height: 8em;\r\n    overflow:hidden;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.type3 img{\r\n    max-width:60%;\r\n    max-height: 100%;\r\n    -ms-flex-item-align: start;\r\n        align-self: flex-start;\r\n}\r\n\r\n.type1{\r\n    padding: 0% !important;\r\n    border-radius: 10px;\r\n    background-color: whitesmoke;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    \r\n    margin:2.5%;\r\n    min-height: 20em;\r\n    max-width: 60%;\r\n    -ms-flex-item-align: start;\r\n        align-self: flex-start;\r\n}\r\n\r\n.type1 span{\r\n    margin: 5%;\r\n    color: black;\r\n    font-size: 15px;\r\n    -ms-flex-item-align: stretch;\r\n        -ms-grid-row-align: stretch;\r\n        align-self: stretch;\r\n    -webkit-box-flex: 2;\r\n        -ms-flex-positive: 2;\r\n            flex-grow: 2;\r\n}\r\n\r\n.type1 img{\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n    max-width:100%;\r\n    max-height:100%;\r\n    -ms-flex-item-align: stretch;\r\n        -ms-grid-row-align: stretch;\r\n        align-self: stretch;\r\n    -webkit-box-flex: 2;\r\n        -ms-flex-positive: 2;\r\n            flex-grow: 2;\r\n}\r\n\r\n.type1 div{\r\n    border-top-style: solid;\r\n    border-color: gainsboro;\r\n    border-top-width: 1px; \r\n    -ms-flex-item-align: stretch; \r\n        align-self: stretch;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.type1 div a{\r\n    /*align-self: center;*/\r\n    margin-top:3px;\r\n    -ms-flex-item-align: center;\r\n        -ms-grid-row-align: center;\r\n        align-self: center;\r\n    color: rgb(42, 28, 236);\r\n    font-weight: 200;\r\n    /*flex-flow: column;*/\r\n}\r\n\r\n.chat-type{\r\n    -ms-flex-item-align: stretch;\r\n        align-self: stretch;\r\n    /*margin-top: 3px;*/ \r\n    background-color: white;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    min-height: 2.7em;\r\n    max-height: 3.4em;\r\n    padding: 2.5% !important;\r\n    padding-right: 0% !important;\r\n    /*flex-wrap: wrap*/\r\n}\r\n\r\n.chat-type  input{\r\n    -webkit-box-flex: 5;\r\n        -ms-flex-positive: 5;\r\n            flex-grow: 5;\r\n    outline: none;\r\n    border: none;\r\n    overflow-wrap: break-word;\r\n    /*border-style: solid;\r\n    border-radius: 4px;\r\n    border-color:darkslateblue !important;*/\r\n    height: 2.7em;\r\n    margin:0px !important;\r\n    color:grey;\r\n    font-size: 16px;\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n    color:gainsboro;\r\n    font-size: 16px;\r\n    opacity: 1; /* Firefox */\r\n}\r\n\r\n:-ms-input-placeholder {\r\n    color:gainsboro;\r\n    font-size: 16px;\r\n    opacity: 1; /* Firefox */\r\n}\r\n\r\n::-ms-input-placeholder {\r\n    color:gainsboro;\r\n    font-size: 16px;\r\n    opacity: 1; /* Firefox */\r\n}\r\n\r\n::placeholder {\r\n    color:gainsboro;\r\n    font-size: 16px;\r\n    opacity: 1; /* Firefox */\r\n}\r\n\r\n.chat-type button{\r\n    outline: none;\r\n    border:none;\r\n    /*background-color: white;*/\r\n    font-size: 16px;\r\n    margin: 2% !important;\r\n    margin-left: 10% !important;\r\n    padding: 0% !important;\r\n    color:white;\r\n    font-weight: 200;\r\n}\r\n\r\n/* MEDIA QUERIES*/\r\n\r\n@media screen and (max-width:640px) {\r\n\r\n    .chat-text{\r\n        overflow-y: scroll;\r\n        background-color: whitesmoke;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: column;\r\n                flex-direction: column;\r\n        -webkit-box-flex: 4;\r\n            -ms-flex-positive: 4;\r\n                flex-grow: 4\r\n    }\r\n\r\n}\r\n\r\n@media screen and (min-width:640px) and (max-width:800px) {\r\n\r\n    .chat-text{\r\n        overflow-y: scroll;\r\n        background-color: whitesmoke;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: column;\r\n                flex-direction: column;\r\n        -webkit-box-flex: 4;\r\n            -ms-flex-positive: 4;\r\n                flex-grow: 4\r\n    }\r\n\r\n    .chat-type{\r\n        -ms-flex-item-align: stretch;\r\n            align-self: stretch;\r\n        /*margin-top: 3px;*/ \r\n        background-color: white;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: row;\r\n                flex-direction: row;\r\n        -webkit-box-pack: start;\r\n            -ms-flex-pack: start;\r\n                justify-content: flex-start;\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n        min-height: 2.7em;\r\n        max-height: 3.4em;\r\n        padding: 2.5% !important    \r\n    }    \r\n\r\n}\r\n\r\n@media screen and (max-height:450px){\r\n    .chat-text{\r\n        overflow-y: scroll;\r\n        background-color: whitesmoke;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        height:10em;\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: column;\r\n                flex-direction: column;\r\n        -webkit-box-flex: 4;\r\n            -ms-flex-positive: 4;\r\n                flex-grow: 4\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "  <mat-card #chatText class=\"chat-text\">\r\n    <div *ngFor=\"let chat of chat_service.chats\">\r\n      \r\n      <div class=\"texts\" *ngFor=\"let text of chat.type0_\" [ngSwitch]=\"text.type\">\r\n        <mat-chip-list id=\"message\" *ngSwitchCase=\"'message'\">\r\n          <mat-chip color='primary' selected=\"true\">{{text.val}}</mat-chip>\r\n        </mat-chip-list>\r\n\r\n        <mat-chip-list id=\"response\" *ngSwitchCase=\"'response'\">\r\n          <mat-chip color='accent' selected=\"true\">{{text.val}} </mat-chip>\r\n        </mat-chip-list>\r\n\r\n        <mat-chip-list id=\"response\" *ngSwitchCase=\"'pre-response'\">\r\n          <!--mat-chip color='accent' selected=\"true\">{{text.val}}</mat-chip-->\r\n          <img id=\"typing_gif\" src=\"../../assets/typing.gif\">\r\n        </mat-chip-list>\r\n\r\n        <button mat-icon-button id=\"logo-button\" class=\"text-logo\" *ngIf=\"text.src!=null\">\r\n            <!--img id=\"logo\" src=\"../../assets/tripscam.jpeg\"-->\r\n            <img id=\"logo\" src=\"../../assets/GE.jpg\">\r\n            <!--i class=\"../../assets/tripscam.jpeg\"></i-->\r\n        </button>\r\n      </div>\r\n\r\n      <mat-card class=\"type1\" *ngFor=\"let suggest of chat.type1_\">\r\n        <img [src]=\"suggest['imageUrl']\">\r\n        <mat-divider></mat-divider>\r\n        <span>{{suggest['title']}}</span>\r\n        <mat-divider [inset]='true' ></mat-divider>\r\n        <div *ngFor=\"let suggestion of suggest['buttons']\">\r\n          <a mat-button target=\"_blank\" [href]=\"suggestion['postback']\" color='accent'selectable='true'>{{suggestion['text']}}</a>\r\n          <mat-divider [inset]='true'></mat-divider>\r\n        </div>\r\n      </mat-card>\r\n\r\n      <div class=\"type3\" *ngFor=\"let suggest of chat.type3_\">\r\n        <img [src]=\"suggest['imageUrl']\">\r\n      </div>\r\n\r\n      <div class=\"texts-suggest\" *ngFor=\"let suggest of chat.type2_\">\r\n        <div id=\"title\">\r\n          <mat-chip class=\"title-chip\" color='accent' selected=\"true\">{{suggest['title']}}</mat-chip>\r\n          <button mat-icon-button id=\"logo-button\" class=\"suggest-logo\" >\r\n            <!--img id=\"logo\" src=\"../../assets/tripscam.jpeg\"-->  \r\n            <img id=\"logo\" src=\"../../assets/GE.jpg\">\r\n          </button>\r\n        </div>\r\n\r\n          <mat-chip-list id=\"suggestion\">\r\n              <mat-chip class=\"chip\" color=\"warn\" (click)=\"send(suggestion)\" color='accent' *ngFor=\"let suggestion of suggest['replies']\" selectable='true'>{{suggestion}}</mat-chip>\r\n          </mat-chip-list>\r\n      </div>\r\n\r\n    </div>\r\n  </mat-card>\r\n\r\n  <!--div id=\"type3_1\"></div-->\r\n\r\n  <mat-card class=\"chat-type\">\r\n    <input #userInput  [(ngModel)]=\"msg\" (keyup.enter)=\"send(userInput.value)\" placeholder=\"Send message here..\">\r\n    <button mat-raised-button color='primary' (click)=\"send(userInput.value)\">\r\n      Send\r\n      <!--i class=\"material-icons\">send</i-->\r\n    </button>\r\n  </mat-card>\r\n"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__text_service__ = __webpack_require__("./src/app/text.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { ViewContainerRef } from '@angular/core/src/linker/view_container_ref';
// import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
var ChatComponent = /** @class */ (function () {
    function ChatComponent(chat_service) {
        this.chat_service = chat_service;
        this.msg = null;
        this.chat_schema = {
            'id': '',
            'type0_': [],
            'type1_': [],
            'type2_': [],
            'type3_': []
        };
        this.chat_length = 0;
        window.parent.postMessage('over', '*');
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.chatElement = document.getElementsByClassName('chat-text');
        // console.log(this.chatElement[0].offsetHeight);
        // console.log(this.chatElement[0].clientHeight);
    };
    ChatComponent.prototype.ngAfterViewInit = function () {
        this.chatElement[0].scrollTop = this.chatElement[0].scrollHeight;
    };
    ChatComponent.prototype.ngAfterContentInit = function () {
        // Called after ngOnInit when the component's or directive's content has been initialized.
        // Add 'implements AfterContentInit' to the class.
        console.log(this.container);
    };
    ChatComponent.prototype.send = function (value) {
        var _this = this;
        this.msg = null;
        if (this.chat_length > 0) {
            for (var _i = 0, _a = this.chat_service.chats[this.chat_length - 1].type2_; _i < _a.length; _i++) {
                var suggest = _a[_i];
                suggest['replies'] = [];
            }
        }
        this.chat_service.chats.push({
            'id': '',
            'type0_': [],
            'type1_': [],
            'type2_': [],
            'type3_': []
        });
        this.chat_length = this.chat_service.chats.length;
        console.log(this.chat_length);
        this.chat_service.chats[this.chat_length - 1].id = this.chat_length;
        this.chat_service.bottom = '2.5%';
        console.log(value);
        this.chat_service.talk(value).subscribe(function (res) {
            console.log(res);
            /* remove pre-resonse gif */
            _this.chat_service.chats[_this.chat_length - 1].type0_.pop();
            for (var _i = 0, _a = res['messages']; _i < _a.length; _i++) {
                var msg = _a[_i];
                if (msg['type'] === 2) {
                    _this.chat_service.chats[_this.chat_length - 1].type2_.push(msg);
                }
                if (msg['type'] === 0 && msg['platform'] !== 'facebook') {
                    if (msg['speech'] !== '') {
                        // tslint:disable-next-line:max-line-length
                        // tslint:disable-next-line:max-line-length
                        _this.chat_service.chats[_this.chat_length - 1].type0_.push({ 'type': 'response', 'val': msg['speech'], 'src': '../../assets/tripscam.jpeg' });
                    }
                }
                if (msg['type'] === 1) {
                    console.log('There is one type 1 message');
                    _this.chat_service.chats[_this.chat_length - 1].type1_.push(msg);
                    _this.chat_service.bottom = '2.5%';
                }
                if (msg['type'] === 3) {
                    console.log('There is one type 3 message');
                    _this.chat_service.chats[_this.chat_length - 1].type3_.push(msg);
                    _this.chat_service.bottom = '2.5%';
                }
            }
            console.log(_this.chat_service.chats);
            setTimeout(function () {
                _this.chatElement[0].scrollTop = _this.chatElement[0].scrollHeight;
                console.log('Interval set');
            }, 1);
        });
        this.chat_service.chats[this.chat_length - 1].type0_.push({ 'type': 'message', 'val': value, 'src': null });
        // tslint:disable-next-line:max-line-length
        this.chat_service.chats[this.chat_length - 1].type0_.push({ 'type': 'pre-response', 'val': 'typing...', 'src': '../../assets/tripscam.jpeg' });
        setTimeout(function () {
            _this.chatElement[0].scrollTop = _this.chatElement[0].scrollHeight;
            console.log('Interval set');
        }, 1);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('chatText'),
        __metadata("design:type", Object)
    ], ChatComponent.prototype, "container", void 0);
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-chat',
            template: __webpack_require__("./src/app/chat/chat.component.html"),
            styles: [__webpack_require__("./src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__text_service__["a" /* TextService */]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/text.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { ApiAiClient } from 'api-ai-javascript';
// import { HttpClient, HttpHeaders } from '@angular/common/http';


var TextService = /** @class */ (function () {
    function TextService(http) {
        this.http = http;
        // readonly client = new ApiAiClient({accessToken: '938172b53645458795ffa0e2019f2fc9'});
        //private url = 'https://us-central1-tkartalpha.cloudfunctions.net/dialogflow?text=';
        this.url = 'https://us-central1-plachat-9a2af.cloudfunctions.net/dialogflow?text=';
        this.bottom = '5%';
        this.minHeight = '0%';
        this.chats = [];
        this.texts = Array();
        this.type2_ = Array();
        this.type1_ = Array();
        this.type3_ = Array();
    }
    TextService.prototype.talk = function (text) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        params.set('text', text);
        return this.http.get(this.url + text, { headers: headers });
    };
    TextService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TextService);
    return TextService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map