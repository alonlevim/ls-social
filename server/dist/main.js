(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MisterMac\Documents\projects\Code\angular\ls-social\client\src\main.ts */"zUnb");


/***/ }),

/***/ "3iJX":
/*!**************************************!*\
  !*** ./src/config/config.service.ts ***!
  \**************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _authentication_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../authentication/token.service */ "UaA9");








class ConfigService {
    constructor(http, token) {
        this.http = http;
        this.token = token;
        this.configUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? '/' : "http://localhost:8081/";
        this.handleError = this.handleError.bind(this);
    }
    // Feed
    getFeed(ids) {
        const feedApi = 'api/feed';
        const options = this.getOptions();
        return this.http.post(this.configUrl + feedApi, { ids }, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    postAddPost(post) {
        const addPostApi = 'api/add-post';
        const withoutContentType = true;
        const options = this.getOptions(withoutContentType);
        return this.http.post(this.configUrl + addPostApi, post, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            this.checkIllegalResponse(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.error.message || 'Something bad happened; please try again later.');
        }));
    }
    putUpdatePost(post) {
        const updatePostApi = 'api/update-post';
        const withoutContentType = true;
        const options = this.getOptions(withoutContentType);
        return this.http.put(this.configUrl + updatePostApi, post, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            this.checkIllegalResponse(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.error.message || 'Something bad happened; please try again later.');
        }));
    }
    deletePost(id) {
        const deletePostApi = `api/delete-post/${id}`;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', authorization: this.token.getToken() }),
        };
        return this.http.delete(this.configUrl + deletePostApi, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            this.checkIllegalResponse(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.error.message || 'Something bad happened; please try again later.');
        }));
    }
    // Login / Registration
    postLogin(user) {
        const loginApi = 'login';
        return this.http.post(this.configUrl + loginApi, Object.assign({}, user));
    }
    postRegistration(user) {
        const addUserApi = 'add-user';
        return this.http.post(this.configUrl + addUserApi, Object.assign({}, user));
    }
    getOptions(withoutContentType = false) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        return {
            params,
            reportProgress: true,
            headers: withoutContentType ? new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                authorization: this.token.getToken()
            }) : new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                authorization: this.token.getToken()
            })
        };
    }
    checkIllegalResponse({ error }) {
        const failed = "failed";
        if (typeof error.status !== "undefined" && error.status === failed) {
            // Remove token from local-storage
            this.token.removeToken();
            window.location.reload();
            return false;
        }
        return true;
    }
    handleError(error) {
        this.checkIllegalResponse(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_authentication_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"])); };
ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _authentication_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"] }]; }, null); })();


/***/ }),

/***/ "4AzG":
/*!******************************************************!*\
  !*** ./src/authentication/authentication.service.ts ***!
  \******************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token.service */ "UaA9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../config/config.service */ "3iJX");





class AuthenticationService {
    constructor(token, router, server) {
        this.token = token;
        this.router = router;
        this.server = server;
    }
    checkAuth(path) {
        const loginPath = "/login";
        const rootPath = "/";
        if (path !== loginPath && !this.token.existsToken()) {
            // There is no token redirect to login page
            this.router.navigate([loginPath]);
        }
        else if (this.token.existsToken() && path === loginPath) {
            // In Login page and have token, will redirect to root page
            this.router.navigate([rootPath]);
        }
    }
    login(user, catchError) {
        this.server.postLogin(user).subscribe({
            next: data => this.loginSucceeded(data),
            error: error => catchError()
        });
    }
    registration(user, catchError) {
        this.server.postRegistration(user).subscribe({
            next: data => this.loginSucceeded(data),
            error: error => catchError()
        });
    }
    logout() {
        this.token.removeToken();
        window.location.reload();
    }
    loginSucceeded(data) {
        if (data.status === "ok") {
            // Set token in local-storage
            this.token.setToken(data.token);
            // refresh page
            window.location.reload();
        }
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }]; }, null); })();


/***/ }),

/***/ "6NqG":
/*!********************************************************************!*\
  !*** ./src/app/login-registration/login-registration.component.ts ***!
  \********************************************************************/
/*! exports provided: LoginRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRegistrationComponent", function() { return LoginRegistrationComponent; });
/* harmony import */ var _authentication_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../authentication/user */ "y0VC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/authentication/authentication.service */ "4AzG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function LoginRegistrationComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.messageError);
} }
function LoginRegistrationComponent_div_7_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginRegistrationComponent_div_7_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name should be at least 2 characters long");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginRegistrationComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginRegistrationComponent_div_7_div_1_p_1_Template, 2, 0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginRegistrationComponent_div_7_div_1_div_2_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r8.errors == null ? null : _r8.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r8.errors == null ? null : _r8.errors.minlength);
} }
function LoginRegistrationComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginRegistrationComponent_div_7_div_1_Template, 3, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginRegistrationComponent_div_7_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.model.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r0.submitted && _r8.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.model.name);
} }
function LoginRegistrationComponent_div_9_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginRegistrationComponent_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Must be a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginRegistrationComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginRegistrationComponent_div_9_p_1_Template, 2, 0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginRegistrationComponent_div_9_div_2_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r4.errors.email || _r4.errors.pattern);
} }
function LoginRegistrationComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginRegistrationComponent_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password should be at least 6 characters long ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginRegistrationComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginRegistrationComponent_div_13_div_1_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginRegistrationComponent_div_13_div_2_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors.minlength);
} }
class LoginRegistrationComponent {
    constructor(auth) {
        this.auth = auth;
        this.model = new _authentication_user__WEBPACK_IMPORTED_MODULE_0__["User"]();
        this.typeMethod = 'sign-up';
        this.errorRequest = false;
    }
    ngOnInit() {
    }
    onSubmit(user) {
        this.errorRequest = false;
        if (this.typeMethod === "sign-up") {
            this.auth.registration(user, () => {
                // Error while sent request
                this.errorRequest = true;
                this.messageError = "Can't sign up right now, try in few minutes again.";
            });
        }
        else if (this.typeMethod === "sign-in") {
            this.auth.login(user, () => {
                // Error while sent request
                this.errorRequest = true;
                this.messageError = "Your account or password is incorrect.";
            });
        }
    }
    changeTypeMethod() {
        this.typeMethod = this.typeMethod === 'sign-up' ? 'sign-in' : 'sign-up';
    }
}
LoginRegistrationComponent.ɵfac = function LoginRegistrationComponent_Factory(t) { return new (t || LoginRegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"])); };
LoginRegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginRegistrationComponent, selectors: [["app-login-registration"]], decls: 21, vars: 8, consts: [[1, "content"], [1, "logo"], ["src", "../../assets/logo.svg", 1, "logo"], [1, "form-login", 3, "ngSubmit"], ["userForm", "ngForm"], [4, "ngIf"], ["class", "name-group group", 4, "ngIf"], [1, "name-group", "group"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "email", "name", "email", "placeholder", "Email", "email", "", "required", "", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["type", "password", "name", "password", "placeholder", "Password", "minlength", "6", "required", "", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "change-method-login"], [3, "click"], [1, "error-message"], ["type", "text", "name", "name", "placeholder", "Full Name", "required", "", "minlength", "2", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], [1, "invalid-feedback"], ["class", "error-message", 4, "ngIf"]], template: function LoginRegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginRegistrationComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); return _r0.form.valid && ctx.onSubmit(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LoginRegistrationComponent_div_6_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LoginRegistrationComponent_div_7_Template, 4, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LoginRegistrationComponent_div_9_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginRegistrationComponent_Template_input_ngModelChange_10_listener($event) { return ctx.model.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, LoginRegistrationComponent_div_13_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginRegistrationComponent_Template_input_ngModelChange_14_listener($event) { return ctx.model.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginRegistrationComponent_Template_a_click_19_listener() { return ctx.changeTypeMethod(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorRequest);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.typeMethod == "sign-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r0.submitted && _r4.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.model.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r0.submitted && _r6.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.model.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.typeMethod === "sign-up" ? "Sign up" : "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.typeMethod == "sign-up" ? "Sign In" : "Sign Up");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"]], styles: ["section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  max-width: 1000px;\n  margin: auto;\n}\nsection[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n@media (max-width: 600px) {\n  section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\nsection[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 60%;\n  display: flex;\n  justify-content: center;\n}\nsection[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80%;\n}\n@media (max-width: 600px) {\n  section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n    width: 50%;\n    margin: auto;\n  }\n}\nsection[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .form-login[_ngcontent-%COMP%] {\n  width: 40%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  max-width: 300px;\n  margin: auto;\n}\n@media (max-width: 600px) {\n  section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .form-login[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n    width: 85%;\n    margin: 20px auto auto auto;\n  }\n}\nsection[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .form-login[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\nsection[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .form-login[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .form-login[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 40px;\n}\nsection[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .form-login[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: inset 3px 3px 3px rgba(0, 0, 0, 0.2), 1px 1px 1px rgba(0, 0, 0, 0.1);\n  margin-bottom: 15px;\n  padding: 0 10px;\n  border-radius: 5px;\n}\nsection[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .form-login[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .form-login[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:active {\n  outline: none;\n  border: 1px solid #393b6b;\n}\nsection[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .form-login[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #393b6b;\n  color: white;\n  border: none;\n  border-radius: 10px;\n  outline: none;\n  margin-top: 10px;\n  cursor: pointer;\n}\nsection[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .form-login[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: #a52a2a;\n}\nsection[_ngcontent-%COMP%]   .change-method-login[_ngcontent-%COMP%] {\n  text-align: center;\n}\nsection[_ngcontent-%COMP%]   .change-method-login[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tcmVnaXN0cmF0aW9uL2xvZ2luLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUFDUjtBQUNRO0VBTko7SUFPUSxzQkFBQTtFQUVWO0FBQ0Y7QUFBUTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFFWjtBQURZO0VBQ0ksVUFBQTtBQUdoQjtBQUNZO0VBVEo7SUFVUSxnQkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0VBRWQ7QUFDRjtBQUNRO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ1o7QUFDWTtFQVJKO0lBU1EsZ0JBQUE7SUFDQSxVQUFBO0lBQ0EsMkJBQUE7RUFFZDtBQUNGO0FBQVk7RUFDSSxXQUFBO0FBRWhCO0FBQ1k7RUFDSSxZQUFBO0FBQ2hCO0FBRVk7RUFDSSxZQUFBO0VBQ0EsZ0ZBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUFoQjtBQUVnQjtFQUNJLGFBQUE7RUFDQSx5QkFBQTtBQUFwQjtBQUlZO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUZoQjtBQUtZO0VBQ0ksY0FBQTtBQUhoQjtBQVFJO0VBQ0ksa0JBQUE7QUFOUjtBQVFRO0VBQ0ksZUFBQTtBQU5aIiwiZmlsZSI6InNyYy9hcHAvbG9naW4tcmVnaXN0cmF0aW9uL2xvZ2luLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSAge1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvZ28ge1xyXG4gICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpICB7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvcm0tbG9naW4ge1xyXG4gICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSAge1xyXG4gICAgICAgICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0byBhdXRvIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ncm91cCA+ICoge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0LCBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAzcHggM3B4IDNweCByZ2JhKDAsMCwwLC4yKSwgMXB4IDFweCAxcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAmOmZvY3VzLCAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzkzYjZiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2I2YjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNhNTJhMmE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNoYW5nZS1tZXRob2QtbG9naW4ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginRegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-login-registration',
                templateUrl: './login-registration.component.html',
                styleUrls: ['./login-registration.component.scss']
            }]
    }], function () { return [{ type: src_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }]; }, null); })();


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

/***/ "LAg+":
/*!*********************************!*\
  !*** ./src/app/feed.service.ts ***!
  \*********************************/
/*! exports provided: FeedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedService", function() { return FeedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../config/config.service */ "3iJX");



class FeedService {
    constructor(service) {
        this.service = service;
        this.posts = [];
    }
    getPosts(errCallback, successCallback) {
        this.service.getFeed().subscribe((data) => {
            this.posts = data;
            successCallback();
        }, (err) => {
            errCallback();
        });
    }
    addPost(post, errCallback, successCallback) {
        this.service.postAddPost(post).subscribe((data) => {
            this.posts = data;
            successCallback();
        }, (err) => {
            errCallback(err);
        });
    }
    updatePost(post, errCallback, successCallback) {
        this.service.putUpdatePost(post).subscribe((data) => {
            this.posts = data;
            successCallback();
        }, (err) => {
            errCallback(err);
        });
    }
    deletePost(id, errCallback, successCallback) {
        this.service.deletePost(id).subscribe((data) => {
            this.posts = data;
            successCallback();
        }, (err) => {
            errCallback(err);
        });
    }
    getMorePosts(errCallback, successCallback) {
        const ids = this.posts.map(({ _id }) => _id);
        this.service.getFeed(ids).subscribe((data) => {
            data.forEach(item => {
                this.posts.push(item);
            });
            successCallback();
        }, (err) => {
            errCallback();
        });
    }
}
FeedService.ɵfac = function FeedService_Factory(t) { return new (t || FeedService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_config_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"])); };
FeedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FeedService, factory: FeedService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _config_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'ls-social';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "UaA9":
/*!*********************************************!*\
  !*** ./src/authentication/token.service.ts ***!
  \*********************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TokenService {
    constructor() {
        this.tokenKey = "token";
    }
    existsToken() {
        return localStorage.getItem(this.tokenKey) != null;
    }
    getToken() {
        return 'bearer ' + localStorage.getItem(this.tokenKey);
    }
    setToken(token) {
        return localStorage.setItem(this.tokenKey, token);
    }
    removeToken() {
        localStorage.removeItem(this.tokenKey);
    }
}
TokenService.ɵfac = function TokenService_Factory(t) { return new (t || TokenService)(); };
TokenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenService, factory: TokenService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _login_registration_login_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login-registration/login-registration.component */ "6NqG");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./feed/feed.component */ "eVva");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./post/post.component */ "fQWx");
/* harmony import */ var _add_update_post_add_update_post_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-update-post/add-update-post.component */ "j5dv");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./loading/loading.component */ "f/hT");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../authentication/authentication.service */ "4AzG");















class AppModule {
    constructor(router, authentication) {
        this.router = router;
        this.authentication = authentication;
        router.events.subscribe((val) => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                this.authentication.checkAuth(val.url);
            }
        });
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"])); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__["InfiniteScrollModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                { path: 'login', component: _login_registration_login_registration_component__WEBPACK_IMPORTED_MODULE_7__["LoginRegistrationComponent"] },
                { path: '', component: _feed_feed_component__WEBPACK_IMPORTED_MODULE_8__["FeedComponent"] },
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _login_registration_login_registration_component__WEBPACK_IMPORTED_MODULE_7__["LoginRegistrationComponent"],
        _feed_feed_component__WEBPACK_IMPORTED_MODULE_8__["FeedComponent"],
        _post_post_component__WEBPACK_IMPORTED_MODULE_9__["PostComponent"],
        _add_update_post_add_update_post_component__WEBPACK_IMPORTED_MODULE_10__["AddUpdatePostComponent"],
        _loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__["InfiniteScrollModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _login_registration_login_registration_component__WEBPACK_IMPORTED_MODULE_7__["LoginRegistrationComponent"],
                    _feed_feed_component__WEBPACK_IMPORTED_MODULE_8__["FeedComponent"],
                    _post_post_component__WEBPACK_IMPORTED_MODULE_9__["PostComponent"],
                    _add_update_post_add_update_post_component__WEBPACK_IMPORTED_MODULE_10__["AddUpdatePostComponent"],
                    _loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__["InfiniteScrollModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                        { path: 'login', component: _login_registration_login_registration_component__WEBPACK_IMPORTED_MODULE_7__["LoginRegistrationComponent"] },
                        { path: '', component: _feed_feed_component__WEBPACK_IMPORTED_MODULE_8__["FeedComponent"] },
                    ])
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "eVva":
/*!****************************************!*\
  !*** ./src/app/feed/feed.component.ts ***!
  \****************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _feed_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../feed.service */ "LAg+");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../authentication/authentication.service */ "4AzG");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../post/post.component */ "fQWx");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../loading/loading.component */ "f/hT");
/* harmony import */ var _add_update_post_add_update_post_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../add-update-post/add-update-post.component */ "j5dv");









function FeedComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedComponent_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.showAddPostPopup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FeedComponent_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Oops! The Data Could Not Be Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FeedComponent_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "There is no posts in feed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FeedComponent_app_post_21_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-post", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("edit", function FeedComponent_app_post_21_Template_app_post_edit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const post_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.showEditPostPopup(post_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", post_r8);
} }
function FeedComponent_app_loading_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function FeedComponent_app_add_update_post_23_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-add-update-post", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("exit", function FeedComponent_app_add_update_post_23_Template_app_add_update_post_exit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.closePopup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r5.typePopup)("post", ctx_r5.postToEdit);
} }
class FeedComponent {
    constructor(feed, auth) {
        this.feed = feed;
        this.auth = auth;
        this.showPopup = false;
        this.loading = false;
        this.loadingMorePosts = false;
        this.error = false;
        this.successGetFeed = this.successGetFeed.bind(this);
        this.errorGetFeed = this.errorGetFeed.bind(this);
    }
    ngOnInit() {
        this.loading = true;
        this.feed.getPosts(this.errorGetFeed, this.successGetFeed);
    }
    successGetFeed() {
        this.error = false;
        this.loading = false;
        this.loadingMorePosts = false;
    }
    errorGetFeed() {
        this.error = true;
        this.loading = false;
        this.loadingMorePosts = false;
    }
    showAddPostPopup() {
        this.showPopup = true;
        this.typePopup = 'add';
    }
    showEditPostPopup(post) {
        this.showPopup = true;
        this.typePopup = 'edit';
        this.postToEdit = post;
    }
    closePopup() {
        this.showPopup = false;
        this.postToEdit = {};
    }
    logout() {
        this.auth.logout();
    }
    onScroll() {
        if (!this.loadingMorePosts) {
            this.loadingMorePosts = true;
            this.feed.getMorePosts(this.errorGetFeed, this.successGetFeed);
        }
    }
}
FeedComponent.ɵfac = function FeedComponent_Factory(t) { return new (t || FeedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_feed_service__WEBPACK_IMPORTED_MODULE_1__["FeedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"])); };
FeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeedComponent, selectors: [["app-feed"]], decls: 24, vars: 7, consts: [[1, "container"], [1, "left-side"], ["src", "../../assets/logo.svg", 1, "logo"], [1, "right-side"], [1, "user"], [1, "avatar"], [1, "settings"], [1, "dropdown-logout"], [3, "click"], ["infiniteScroll", "", 1, "feed", 3, "fromRoot", "scrolled"], [1, "content-container"], [1, "feed-title"], ["class", "add-post", 3, "click", 4, "ngIf"], ["class", "error", 4, "ngIf"], [3, "post", "edit", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "type", "post", "exit", 4, "ngIf"], [1, "add-post", 3, "click"], [1, "error"], [3, "post", "edit"], [3, "type", "post", "exit"]], template: function FeedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedComponent_Template_a_click_11_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scrolled", function FeedComponent_Template_section_scrolled_13_listener() { return ctx.onScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Feed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, FeedComponent_button_18_Template, 2, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, FeedComponent_p_19_Template, 2, 0, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FeedComponent_p_20_Template, 2, 0, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, FeedComponent_app_post_21_Template, 1, 1, "app-post", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, FeedComponent_app_loading_22_Template, 1, 0, "app-loading", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, FeedComponent_app_add_update_post_23_Template, 1, 2, "app-add-update-post", 16);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fromRoot", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.error && ctx.feed.posts.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.feed.posts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading || ctx.loadingMorePosts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPopup);
    } }, directives: [ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__["InfiniteScrollDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _post_post_component__WEBPACK_IMPORTED_MODULE_5__["PostComponent"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"], _add_update_post_add_update_post_component__WEBPACK_IMPORTED_MODULE_7__["AddUpdatePostComponent"]], styles: ["header[_ngcontent-%COMP%] {\n  height: 60px;\n  padding-top: 10px;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);\n}\nheader[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\nheader[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  height: 80%;\n  margin: auto 0;\n}\nheader[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\nheader[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\nheader[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  background: #f7f9fe;\n  width: 50px;\n  height: 50px;\n  margin-right: 10px;\n  position: relative;\n}\nheader[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.05) 100%);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  border-radius: 50%;\n}\nheader[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%] {\n  background: url('settings.svg') no-repeat center;\n  width: 20px;\n  height: 20px;\n  margin-left: 20px;\n  cursor: pointer;\n  position: relative;\n}\nheader[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .dropdown-logout[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  opacity: 0;\n  height: 0;\n  right: -50%;\n  width: 100px;\n  background-color: white;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n  padding: 10px 0;\n  text-align: center;\n  border-radius: 5px;\n  color: transparent;\n  transition: 0.5s all;\n}\nheader[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .dropdown-logout[_ngcontent-%COMP%]:hover, header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .dropdown-logout[_ngcontent-%COMP%]:active, header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .dropdown-logout[_ngcontent-%COMP%]:focus {\n  background-color: #fefefe;\n}\nheader[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]:hover   .dropdown-logout[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]:active   .dropdown-logout[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]:focus   .dropdown-logout[_ngcontent-%COMP%] {\n  opacity: 1;\n  height: 42px;\n  z-index: 1;\n  color: black;\n}\n.feed[_ngcontent-%COMP%] {\n  padding-top: 50px;\n  background-color: #eeeeee;\n  padding-bottom: 20px;\n  min-height: calc( 100% - 60px - 10px );\n  position: relative;\n}\n.feed[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: auto auto 20px;\n}\n.feed[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .feed-title[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  color: #393b6b;\n}\n.feed[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .add-post[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 1px solid rgba(0, 0, 0, 0.4);\n  width: 90px;\n  height: 40px;\n  cursor: pointer;\n}\n.feed[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .add-post[_ngcontent-%COMP%]:hover {\n  background-color: white;\n}\n.feed[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #424a52;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  height: 100%;\n  margin: auto;\n}\n@media (max-width: 1039px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC9mZWVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0NBQUE7QUFDSjtBQUNJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDUjtBQUVJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUFBUjtBQUdJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFEUjtBQUdRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBRFo7QUFHWTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFEaEI7QUFHZ0I7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1GQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtBQURwQjtBQU1RO0VBQ0ksZ0RBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBSlo7QUFNWTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHVDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUVBLG9CQUFBO0FBTGhCO0FBT2dCO0VBQ0kseUJBQUE7QUFMcEI7QUFVZ0I7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBUnBCO0FBZ0JBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtBQWJKO0FBZUk7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0FBYlI7QUFlUTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQWJaO0FBZ0JRO0VBQ0ksNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQWRaO0FBZ0JZO0VBQ0ksdUJBQUE7QUFkaEI7QUFtQkk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUFqQlI7QUFxQkE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBbEJKO0FBb0JJO0VBTEo7SUFNUSxlQUFBO0VBakJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mZWVkL2ZlZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwwLDAsMC40KTtcclxuXHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2dvIHtcclxuICAgICAgICBoZWlnaHQ6IDgwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG8gMDtcclxuICAgIH1cclxuXHJcbiAgICAucmlnaHQtc2lkZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC51c2VyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIFxyXG4gICAgICAgICAgICAuYXZhdGFyIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmN2Y5ZmU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMCwgMCwgMCwgMCkgMjAlLCByZ2JhKDAsIDAsIDAsIDAuMDUpIDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5zZXR0aW5ncyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvc2V0dGluZ3Muc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAuZHJvcGRvd24tbG9nb3V0IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICByaWdodDogLTUwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgYWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXIsICY6YWN0aXZlLCAmOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyLCAmOmFjdGl2ZSwgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbG9nb3V0IHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDJweDtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5mZWVkIHtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgbWluLWhlaWdodDogY2FsYyggMTAwJSAtIDYwcHggLSAxMHB4ICk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBcclxuICAgIC5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgICBtYXJnaW46IGF1dG8gYXV0byAyMHB4O1xyXG5cclxuICAgICAgICAuZmVlZC10aXRsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzkzYjZiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFkZC1wb3N0IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC40KTtcclxuICAgICAgICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZXJyb3Ige1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogIzQyNGE1MjtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAzOXB4KSAge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-feed',
                templateUrl: './feed.component.html',
                styleUrls: ['./feed.component.scss']
            }]
    }], function () { return [{ type: _feed_service__WEBPACK_IMPORTED_MODULE_1__["FeedService"] }, { type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "f/hT":
/*!**********************************************!*\
  !*** ./src/app/loading/loading.component.ts ***!
  \**********************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0) { return { "absolute-style": a0, "sk-cube-grid": true }; };
class LoadingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], inputs: { absoluteStyle: "absoluteStyle" }, decls: 10, vars: 3, consts: [[3, "ngClass"], [1, "sk-cube", "sk-cube1"], [1, "sk-cube", "sk-cube2"], [1, "sk-cube", "sk-cube3"], [1, "sk-cube", "sk-cube4"], [1, "sk-cube", "sk-cube5"], [1, "sk-cube", "sk-cube6"], [1, "sk-cube", "sk-cube7"], [1, "sk-cube", "sk-cube8"], [1, "sk-cube", "sk-cube9"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.absoluteStyle));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".sk-cube-grid[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  margin: auto;\n}\n.sk-cube-grid.absolute-style[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n}\n.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube[_ngcontent-%COMP%] {\n  width: 33%;\n  height: 33%;\n  background-color: #393b6b;\n  float: left;\n  animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n}\n.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube1[_ngcontent-%COMP%] {\n  animation-delay: 0.2s;\n}\n.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube2[_ngcontent-%COMP%] {\n  animation-delay: 0.3s;\n}\n.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube3[_ngcontent-%COMP%] {\n  animation-delay: 0.4s;\n}\n.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube4[_ngcontent-%COMP%] {\n  animation-delay: 0.1s;\n}\n.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube5[_ngcontent-%COMP%] {\n  animation-delay: 0.2s;\n}\n.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube6[_ngcontent-%COMP%] {\n  animation-delay: 0.3s;\n}\n.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube7[_ngcontent-%COMP%] {\n  animation-delay: 0s;\n}\n.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube8[_ngcontent-%COMP%] {\n  animation-delay: 0.1s;\n}\n.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube9[_ngcontent-%COMP%] {\n  animation-delay: 0.2s;\n}\n@keyframes sk-cubeGridScaleDelay {\n  0%, 70%, 100% {\n    transform: scale3D(1, 1, 1);\n  }\n  35% {\n    transform: scale3D(0, 0, 1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDSTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtBQUNOO0FBRUk7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUVBLDBEQUFBO0FBQVI7QUFJRTtFQUVVLHFCQUFBO0FBRFo7QUFFRTtFQUVVLHFCQUFBO0FBQ1o7QUFBRTtFQUVVLHFCQUFBO0FBR1o7QUFGRTtFQUVVLHFCQUFBO0FBS1o7QUFKRTtFQUVVLHFCQUFBO0FBT1o7QUFORTtFQUVVLHFCQUFBO0FBU1o7QUFSRTtFQUVVLG1CQUFBO0FBV1o7QUFWRTtFQUVVLHFCQUFBO0FBYVo7QUFaRTtFQUVVLHFCQUFBO0FBZVo7QUFIRTtFQUNFO0lBRVUsMkJBQUE7RUFnQlo7RUFmSTtJQUVRLDJCQUFBO0VBaUJaO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2stY3ViZS1ncmlkIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgICYuYWJzb2x1dGUtc3R5bGUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuc2stY3ViZSB7XHJcbiAgICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgICBoZWlnaHQ6IDMzJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzYjZiO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1jdWJlR3JpZFNjYWxlRGVsYXkgMS4zcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgICAgICBhbmltYXRpb246IHNrLWN1YmVHcmlkU2NhbGVEZWxheSAxLjNzIGluZmluaXRlIGVhc2UtaW4tb3V0OyBcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTEge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4yczsgfVxyXG4gIC5zay1jdWJlLWdyaWQgLnNrLWN1YmUyIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuM3M7IH1cclxuICAuc2stY3ViZS1ncmlkIC5zay1jdWJlMyB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzOyB9XHJcbiAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTQge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMXM7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4xczsgfVxyXG4gIC5zay1jdWJlLWdyaWQgLnNrLWN1YmU1IHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7IH1cclxuICAuc2stY3ViZS1ncmlkIC5zay1jdWJlNiB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4zcztcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzOyB9XHJcbiAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTcge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDBzOyB9XHJcbiAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTgge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMXM7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4xczsgfVxyXG4gIC5zay1jdWJlLWdyaWQgLnNrLWN1YmU5IHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7IH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgc2stY3ViZUdyaWRTY2FsZURlbGF5IHtcclxuICAgIDAlLCA3MCUsIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzRCgxLCAxLCAxKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMSwgMSwgMSk7XHJcbiAgICB9IDM1JSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDAsIDAsIDEpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzRCgwLCAwLCAxKTsgXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgc2stY3ViZUdyaWRTY2FsZURlbGF5IHtcclxuICAgIDAlLCA3MCUsIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzRCgxLCAxLCAxKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMSwgMSwgMSk7XHJcbiAgICB9IDM1JSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDAsIDAsIDEpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzRCgwLCAwLCAxKTtcclxuICAgIH0gXHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading',
                templateUrl: './loading.component.html',
                styleUrls: ['./loading.component.scss']
            }]
    }], function () { return []; }, { absoluteStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "fQWx":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: Post, PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _helper_dateHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper/dateHelper */ "kXf0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





function PostComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Update: ", ctx_r0.updatedAt, "");
} }
function PostComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_div_13_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.edit.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class Post {
}
class PostComponent {
    constructor() {
        this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.updatedAt = '';
    }
    ngOnInit() {
        this.convertDateToString();
    }
    ngOnChanges() {
        this.convertDateToString();
    }
    convertDateToString() {
        this.createdAt = Object(_helper_dateHelper__WEBPACK_IMPORTED_MODULE_1__["timeSince"])(new Date(this.post.createdAt));
        if (this.post.updatedAt)
            this.updatedAt = Object(_helper_dateHelper__WEBPACK_IMPORTED_MODULE_1__["timeSince"])(new Date(this.post.updatedAt));
    }
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(); };
PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post"]], inputs: { post: "post" }, outputs: { edit: "edit" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 14, vars: 7, consts: [[1, "post"], [1, "user"], [1, "avatar"], [4, "ngIf"], [1, "title"], [3, "src"], ["class", "settings", 3, "click", 4, "ngIf"], [1, "settings", 3, "click"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PostComponent_p_5_Template, 2, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PostComponent_div_13_Template, 1, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.author);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.post.updatedAt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Posted: ", ctx.createdAt, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.post.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.post.admin);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".post[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  background-color: #ffffff;\n  padding: 40px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  max-width: 600px;\n  margin: 0 auto 20px;\n  position: relative;\n}\n.post[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.post[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  background: #efeefe;\n  width: 50px;\n  height: 50px;\n  margin-right: 10px;\n  position: relative;\n}\n.post[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.05) 100%);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  border-radius: 50%;\n}\n.post[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px;\n  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);\n}\n.post[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40px;\n  right: 40px;\n  background: url('settings.svg') no-repeat center;\n  width: 20px;\n  height: 20px;\n  opacity: 0.6;\n  cursor: pointer;\n}\n.post[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9wb3N0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFDUjtBQUNRO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNaO0FBQ1k7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1GQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtBQUNoQjtBQUlJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUFGUjtBQUtJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGdEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUhSO0FBTUk7RUFDSSxnQkFBQTtBQUpSIiwiZmlsZSI6InNyYy9hcHAvcG9zdC9wb3N0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3Qge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvIDIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgLnVzZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VmZWVmZTtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgwLCAwLCAwLCAwKSAyMCUsIHJnYmEoMCwgMCwgMCwgMC4wNSkgMTAwJSk7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDE2cHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZXR0aW5ncyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNDBweDtcclxuICAgICAgICByaWdodDogNDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL3NldHRpbmdzLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post',
                templateUrl: './post.component.html',
                styleUrls: ['./post.component.scss']
            }]
    }], function () { return []; }, { post: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], edit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "j5dv":
/*!**************************************************************!*\
  !*** ./src/app/add-update-post/add-update-post.component.ts ***!
  \**************************************************************/
/*! exports provided: AddUpdatePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUpdatePostComponent", function() { return AddUpdatePostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../post/post.component */ "fQWx");
/* harmony import */ var _feed_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../feed.service */ "LAg+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loading/loading.component */ "f/hT");









const _c0 = ["UploadFileInput"];
function AddUpdatePostComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddUpdatePostComponent_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.exit.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUpdatePostComponent_form_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.errorMessage);
} }
function AddUpdatePostComponent_form_6_div_3_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Title is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUpdatePostComponent_form_6_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Title should be at least ", ctx_r11.minLengthTitle, " characters long");
} }
function AddUpdatePostComponent_form_6_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Title should be at most ", ctx_r12.maxLengthTitle, " characters long");
} }
function AddUpdatePostComponent_form_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddUpdatePostComponent_form_6_div_3_p_1_Template, 2, 0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddUpdatePostComponent_form_6_div_3_div_2_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddUpdatePostComponent_form_6_div_3_div_3_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.f.title.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.f.title.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.f.title.errors.maxlength);
} }
function AddUpdatePostComponent_form_6_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddUpdatePostComponent_form_6_div_6_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.deleteImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Delete Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r7.post.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AddUpdatePostComponent_form_6_input_7_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddUpdatePostComponent_form_6_input_7_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.onFileSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUpdatePostComponent_form_6_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddUpdatePostComponent_form_6_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.deletePost(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUpdatePostComponent_form_6_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddUpdatePostComponent_form_6_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddUpdatePostComponent_form_6_div_1_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddUpdatePostComponent_form_6_div_3_Template, 4, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "textarea", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AddUpdatePostComponent_form_6_div_6_Template, 4, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AddUpdatePostComponent_form_6_input_7_Template, 2, 0, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AddUpdatePostComponent_form_6_button_11_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.postForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.errorSend);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.submitted && ctx_r1.f.title.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("minlength", ctx_r1.minLengthTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("maxlength", ctx_r1.maxLengthTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.post != undefined && ctx_r1.post.image != null && ctx_r1.post.image.trim() != "" && !ctx_r1.deleteImageFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.post == undefined || ctx_r1.post.image == null || ctx_r1.post.image.trim() == "" || ctx_r1.deleteImageFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.type == "edit" ? "Update" : "Publish");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.type === "edit");
} }
function AddUpdatePostComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("absoluteStyle", true);
} }
class AddUpdatePostComponent {
    constructor(feed, formBuilder) {
        this.feed = feed;
        this.formBuilder = formBuilder;
        this.errorSend = false;
        this.submitted = false;
        this.minLengthTitle = 2;
        this.maxLengthTitle = 50;
        this.deleteImageFlag = false;
        this.loading = false;
        this.exit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.successSubmitPost = this.successSubmitPost.bind(this);
        this.errorSubmitPost = this.errorSubmitPost.bind(this);
    }
    ngOnInit() {
        this.postForm = this.formBuilder.group({
            title: [this.type === "edit" ? this.post.title : '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(this.minLengthTitle), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(this.maxLengthTitle)]],
            description: [this.type === "edit" ? (this.post.description || '') : ''],
            image: ['']
        });
    }
    initPost() {
        this.post = new _post_post_component__WEBPACK_IMPORTED_MODULE_2__["Post"]();
        this.deleteImageFlag = false;
    }
    // convenience getter for easy access to form fields
    get f() { return this.postForm.controls; }
    onFileSelect(event) {
        const file = event.target.files[0];
        this.postForm.get('image').setValue(file);
    }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.postForm.invalid) {
            return;
        }
        this.loading = true;
        // Organize form
        const formData = new FormData();
        formData.append('image', this.postForm.get('image').value);
        formData.append('title', this.postForm.get('title').value);
        if (this.postForm.get('description').value.trim() !== "") {
            formData.append('description', this.postForm.get('description').value);
        }
        // Send form
        if (this.type === "add")
            this.feed.addPost(formData, this.errorSubmitPost, this.successSubmitPost);
        else {
            formData.append('_id', this.post._id);
            formData.append('deletePhoto', this.deleteImageFlag ? 'true' : 'false');
            if (this.deleteImageFlag) {
                formData.append('keyImage', this.post.keyImage);
            }
            this.feed.updatePost(formData, this.errorSubmitPost, this.successSubmitPost);
        }
    }
    successSubmitPost() {
        this.loading = false;
        this.errorSend = false;
        this.errorMessage = '';
        this.exit.emit();
    }
    errorSubmitPost(error) {
        this.loading = false;
        this.errorSend = true;
        this.errorMessage = error;
    }
    deleteImage() {
        this.deleteImageFlag = true;
    }
    deletePost() {
        this.loading = true;
        this.feed.deletePost(this.post._id, this.errorSubmitPost, this.successSubmitPost);
    }
}
AddUpdatePostComponent.ɵfac = function AddUpdatePostComponent_Factory(t) { return new (t || AddUpdatePostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_feed_service__WEBPACK_IMPORTED_MODULE_3__["FeedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
AddUpdatePostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddUpdatePostComponent, selectors: [["app-add-update-post"]], viewQuery: function AddUpdatePostComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.uploadFileInput = _t.first);
    } }, inputs: { type: "type", post: "post" }, outputs: { exit: "exit" }, decls: 8, vars: 4, consts: [[1, "layout"], [1, "container"], [1, "content"], [1, "title-add-post"], ["class", "exit", 3, "click", 4, "ngIf"], ["class", "post-form", 3, "formGroup", "ngSubmit", 4, "ngIf"], [4, "ngIf"], [1, "exit", 3, "click"], [1, "post-form", 3, "formGroup", "ngSubmit"], [1, "title-group", "group"], ["class", "invalid-feedback", 4, "ngIf"], ["id", "title", "type", "text", "name", "title", "placeholder", "Title", "formControlName", "title", "required", "", 3, "minlength", "maxlength"], ["name", "description", "placeholder", "Description", "formControlName", "description"], ["class", "manage-img", 4, "ngIf"], ["type", "file", "name", "image", "accept", "image/*", "id", "customFile", 3, "change", 4, "ngIf"], [1, "buttons"], [1, "publish-update"], ["class", "delete-post", 3, "click", 4, "ngIf"], [1, "error-message"], [1, "invalid-feedback"], ["class", "error-message", 4, "ngIf"], [1, "manage-img"], [3, "src"], [3, "click"], ["type", "file", "name", "image", "accept", "image/*", "id", "customFile", 3, "change"], ["UploadFileInput", ""], [1, "delete-post", 3, "click"], [3, "absoluteStyle"]], template: function AddUpdatePostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AddUpdatePostComponent_div_5_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AddUpdatePostComponent_form_6_Template, 12, 9, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AddUpdatePostComponent_div_7_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.type == "edit" ? "Update" : "Add", " Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"]], styles: [".layout[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.layout[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  background-color: white;\n  max-width: 600px;\n  width: 100%;\n  margin: auto;\n  padding: 40px;\n  border-radius: 10px;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);\n  position: relative;\n  overflow-y: auto;\n  min-height: 365px;\n}\n.layout[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title-add-post[_ngcontent-%COMP%] {\n  color: #393b6b;\n  margin-bottom: 40px;\n}\n.layout[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .exit[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 40px;\n  top: 40px;\n  cursor: pointer;\n}\n.layout[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .post-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.layout[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .post-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .layout[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .post-form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  box-shadow: inset 2px 2px 1px rgba(0, 0, 0, 0.1), 0 0 2px rgba(0, 0, 0, 0.4);\n  padding: 10px;\n  margin-bottom: 20px;\n}\n.layout[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .post-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  max-width: 100%;\n  min-width: 100%;\n}\n.layout[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .post-form[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.layout[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .post-form[_ngcontent-%COMP%]   .publish-update[_ngcontent-%COMP%], .layout[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .post-form[_ngcontent-%COMP%]   .delete-post[_ngcontent-%COMP%] {\n  max-width: 200px;\n  width: 100%;\n  height: 35px;\n}\n.layout[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .post-form[_ngcontent-%COMP%]   .manage-img[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n.layout[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .post-form[_ngcontent-%COMP%]   .manage-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.layout[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .post-form[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: #a52a2a;\n}\n.layout[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .post-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.layout[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .post-form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-top: 20px;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  height: 100%;\n  margin: auto;\n}\n@media (max-width: 1039px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXVwZGF0ZS1wb3N0L2FkZC11cGRhdGUtcG9zdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUNSO0FBRUk7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUFSO0FBRVE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUFBWjtBQUdRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFEWjtBQUlRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBRlo7QUFJWTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNEVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFGaEI7QUFLWTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBSGhCO0FBTVk7RUFDSSxtQkFBQTtBQUpoQjtBQU9ZO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUxoQjtBQVFZO0VBQ0ksZ0JBQUE7QUFOaEI7QUFRZ0I7RUFDSSxXQUFBO0FBTnBCO0FBVVk7RUFDSSxjQUFBO0FBUmhCO0FBV1k7RUFDSSxXQUFBO0FBVGhCO0FBWVk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBVmhCO0FBZ0JBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQWJKO0FBZUk7RUFMSjtJQU1RLGVBQUE7RUFaTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWRkLXVwZGF0ZS1wb3N0L2FkZC11cGRhdGUtcG9zdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYXlvdXQge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICBcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogNDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDM2NXB4O1xyXG5cclxuICAgICAgICAudGl0bGUtYWRkLXBvc3Qge1xyXG4gICAgICAgICAgICBjb2xvcjogIzM5M2I2YjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5leGl0IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogNDBweDtcclxuICAgICAgICAgICAgdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucG9zdC1mb3JtIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICAgIHRleHRhcmVhLCBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDJweCAxcHggcmdiYSgwLDAsMCwwLjEpLCAwIDAgMnB4IHJnYmEoMCwwLDAsMC40KTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0W3R5cGU9J2ZpbGUnXSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucHVibGlzaC11cGRhdGUsIC5kZWxldGUtcG9zdCB7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5tYW5hZ2UtaW1nIHtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5lcnJvci1tZXNzYWdlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjYTUyYTJhO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZ3JvdXAgPiAqe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5idXR0b25zIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAzOXB4KSAge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddUpdatePostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-update-post',
                templateUrl: './add-update-post.component.html',
                styleUrls: ['./add-update-post.component.scss']
            }]
    }], function () { return [{ type: _feed_service__WEBPACK_IMPORTED_MODULE_3__["FeedService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { uploadFileInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['UploadFileInput', { static: false }]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], post: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], exit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "kXf0":
/*!**********************************!*\
  !*** ./src/helper/dateHelper.ts ***!
  \**********************************/
/*! exports provided: timeSince */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeSince", function() { return timeSince; });
const timeSince = (date) => {
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) {
        return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
};



/***/ }),

/***/ "y0VC":
/*!************************************!*\
  !*** ./src/authentication/user.ts ***!
  \************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




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