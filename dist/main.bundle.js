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

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_navigation_navigation_component__ = __webpack_require__("./src/app/main/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_home_home_component__ = __webpack_require__("./src/app/main/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main_dashboard_dashboard_component__ = __webpack_require__("./src/app/main/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__main_certificates_certificates_component__ = __webpack_require__("./src/app/main/certificates/certificates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__main_upload_upload_component__ = __webpack_require__("./src/app/main/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__main_loc_loc_component__ = __webpack_require__("./src/app/main/loc/loc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__service_project_service__ = __webpack_require__("./src/app/service/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__service_api_service__ = __webpack_require__("./src/app/service/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// entry point and the router outlet is defined in below component

// Routes are necessary

// Navigation

// Body







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__main_navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_7__main_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__main_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__main_certificates_certificates_component__["a" /* CertificatesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__main_upload_upload_component__["a" /* UploadComponent */],
                __WEBPACK_IMPORTED_MODULE_11__main_loc_loc_component__["a" /* LocComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* routes */], { useHash: true }),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__service_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_12__service_project_service__["a" /* ProjectService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_navigation_navigation_component__ = __webpack_require__("./src/app/main/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_home_home_component__ = __webpack_require__("./src/app/main/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_dashboard_dashboard_component__ = __webpack_require__("./src/app/main/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_certificates_certificates_component__ = __webpack_require__("./src/app/main/certificates/certificates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_upload_upload_component__ = __webpack_require__("./src/app/main/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_loc_loc_component__ = __webpack_require__("./src/app/main/loc/loc.component.ts");
// import { AuthGuard } from './service/ZauthGuard';

// Body





var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_0__main_navigation_navigation_component__["a" /* NavigationComponent */], children: [
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__main_home_home_component__["a" /* HomeComponent */] },
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__main_dashboard_dashboard_component__["a" /* DashboardComponent */] },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'certificates', component: __WEBPACK_IMPORTED_MODULE_3__main_certificates_certificates_component__["a" /* CertificatesComponent */] },
            { path: 'upload', component: __WEBPACK_IMPORTED_MODULE_4__main_upload_upload_component__["a" /* UploadComponent */] },
            { path: 'loc', component: __WEBPACK_IMPORTED_MODULE_5__main_loc_loc_component__["a" /* LocComponent */] }
        ]
    },
    { path: '**', redirectTo: 'dashboard' }
];


/***/ }),

/***/ "./src/app/main/certificates/certificates.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-body\">\r\n  <div class=\"table-responsive\">\r\n    <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\r\n      <thead>\r\n        <tr>\r\n          <th>ULR</th>\r\n          <th>Filename</th>\r\n          <th>Issue Date</th>\r\n          <th>Expire</th>\r\n          <th></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>Tiger Nixon</td>\r\n          <td>System Architect</td>\r\n          <td>Edinburgh</td>\r\n          <td>61</td>\r\n          <td class=\"text-right\">\r\n            <button class=\"btn btn-dark btn-sm m-2\">\r\n              Download</button>\r\n            <button class=\"btn btn-warning btn-sm\">View</button>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Tiger Nixon</td>\r\n          <td>System Architect</td>\r\n          <td>Edinburgh</td>\r\n          <td>61</td>\r\n          <td class=\"text-right\">\r\n            <button class=\"btn btn-dark btn-sm m-2\">\r\n              Download</button>\r\n            <button class=\"btn btn-warning btn-sm\">View</button>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Tiger Nixon</td>\r\n          <td>System Architect</td>\r\n          <td>Edinburgh</td>\r\n          <td>61</td>\r\n          <td class=\"text-right\">\r\n            <button class=\"btn btn-dark btn-sm m-2\">\r\n              Download</button>\r\n            <button class=\"btn btn-warning btn-sm\">View</button>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Tiger Nixon</td>\r\n          <td>System Architect</td>\r\n          <td>Edinburgh</td>\r\n          <td>61</td>\r\n          <td class=\"text-right\">\r\n            <button class=\"btn btn-dark btn-sm m-2\">\r\n              Download</button>\r\n            <button class=\"btn btn-warning btn-sm\">View</button>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Tiger Nixon</td>\r\n          <td>System Architect</td>\r\n          <td>Edinburgh</td>\r\n          <td>61</td>\r\n          <td class=\"text-right\">\r\n            <button class=\"btn btn-dark btn-sm m-2\">\r\n              Download</button>\r\n            <button class=\"btn btn-warning btn-sm\">View</button>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Tiger Nixon</td>\r\n          <td>System Architect</td>\r\n          <td>Edinburgh</td>\r\n          <td>61</td>\r\n          <td class=\"text-right\">\r\n            <button class=\"btn btn-dark btn-sm m-2\">\r\n              Download</button>\r\n            <button class=\"btn btn-warning btn-sm\">View</button>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Tiger Nixon</td>\r\n          <td>System Architect</td>\r\n          <td>Edinburgh</td>\r\n          <td>61</td>\r\n          <td class=\"text-right\">\r\n            <button class=\"btn btn-dark btn-sm m-2\">\r\n              Download</button>\r\n            <button class=\"btn btn-warning btn-sm\">View</button>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Tiger Nixon</td>\r\n          <td>System Architect</td>\r\n          <td>Edinburgh</td>\r\n          <td>61</td>\r\n          <td class=\"text-right\">\r\n            <button class=\"btn btn-dark btn-sm m-2\">\r\n              Download</button>\r\n            <button class=\"btn btn-warning btn-sm\">View</button>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Tiger Nixon</td>\r\n          <td>System Architect</td>\r\n          <td>Edinburgh</td>\r\n          <td>61</td>\r\n          <td class=\"text-right\">\r\n            <button class=\"btn btn-dark btn-sm m-2\">\r\n              Download</button>\r\n            <button class=\"btn btn-warning btn-sm\">View</button>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Tiger Nixon</td>\r\n          <td>System Architect</td>\r\n          <td>Edinburgh</td>\r\n          <td>61</td>\r\n          <td class=\"text-right\">\r\n            <button class=\"btn btn-dark btn-sm m-2\">\r\n              Download</button>\r\n            <button class=\"btn btn-warning btn-sm\">View</button>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Tiger Nixon</td>\r\n          <td>System Architect</td>\r\n          <td>Edinburgh</td>\r\n          <td>61</td>\r\n          <td class=\"text-right\">\r\n            <button class=\"btn btn-dark btn-sm m-2\">\r\n              Download</button>\r\n            <button class=\"btn btn-warning btn-sm\">View</button>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Tiger Nixon</td>\r\n          <td>System Architect</td>\r\n          <td>Edinburgh</td>\r\n          <td>61</td>\r\n          <td class=\"text-right\">\r\n            <button class=\"btn btn-dark btn-sm m-2\">\r\n              Download</button>\r\n            <button class=\"btn btn-warning btn-sm\">View</button>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Tiger Nixon</td>\r\n          <td>System Architect</td>\r\n          <td>Edinburgh</td>\r\n          <td>61</td>\r\n          <td class=\"text-right\">\r\n            <button class=\"btn btn-dark btn-sm m-2\">\r\n              Download</button>\r\n            <button class=\"btn btn-warning btn-sm\">View</button>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Tiger Nixon</td>\r\n          <td>System Architect</td>\r\n          <td>Edinburgh</td>\r\n          <td>61</td>\r\n          <td class=\"text-right\">\r\n            <button class=\"btn btn-dark btn-sm m-2\">\r\n              Download</button>\r\n            <button class=\"btn btn-warning btn-sm\">View</button>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Tiger Nixon</td>\r\n          <td>System Architect</td>\r\n          <td>Edinburgh</td>\r\n          <td>61</td>\r\n          <td class=\"text-right\">\r\n            <button class=\"btn btn-dark btn-sm m-2\">\r\n              Download</button>\r\n            <button class=\"btn btn-warning btn-sm\">View</button>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Tiger Nixon</td>\r\n          <td>System Architect</td>\r\n          <td>Edinburgh</td>\r\n          <td>61</td>\r\n          <td class=\"text-right\">\r\n            <button class=\"btn btn-dark btn-sm m-2\">\r\n              Download</button>\r\n            <button class=\"btn btn-warning btn-sm\">View</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/certificates/certificates.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/certificates/certificates.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CertificatesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CertificatesComponent = /** @class */ (function () {
    function CertificatesComponent() {
    }
    CertificatesComponent.prototype.ngOnInit = function () {
    };
    CertificatesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-certificates',
            template: __webpack_require__("./src/app/main/certificates/certificates.component.html"),
            styles: [__webpack_require__("./src/app/main/certificates/certificates.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CertificatesComponent);
    return CertificatesComponent;
}());



/***/ }),

/***/ "./src/app/main/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Accordion wrapper-->\r\n<div class=\"accordion md-accordion\" id=\"accordionEx\" role=\"tablist\" aria-multiselectable=\"true\">\r\n  <!-- Accordion card -->\r\n  <div class=\"card\">\r\n    <!-- Card header -->\r\n    <div class=\"card-header\" role=\"tab\" id=\"headingOne1\">\r\n      <a data-toggle=\"collapse\" data-parent=\"#accordionEx\" href=\"#collapseOne1\" aria-expanded=\"true\" aria-controls=\"collapseOne1\">\r\n        <h5 class=\"mb-0\">\r\n          Lab General Details\r\n        </h5>\r\n      </a>\r\n    </div>\r\n    <!-- Card body -->\r\n    <div id=\"collapseOne1\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingOne1\" data-parent=\"#accordionEx\">\r\n      <div class=\"card-body\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\r\n            <thead>\r\n              <tr>\r\n                <th width=\"50%\">Details</th>\r\n                <th width=\"50%\">Data Feeded by Lab</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>Name ofthe CAB</td>\r\n                <td>BHAVYALABORATORIES\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Type ofCAB</td>\r\n                <td>Private\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>GSTIN </td>\r\n                <td>06AJWPS4622H2ZP\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Country </td>\r\n                <td>India\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>State </td>\r\n                <td>Haryana\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>City </td>\r\n                <td>Faridabad</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Landline </td>\r\n                <td>129-2231248\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Does the LaboratoryOperate FromDifferent Locations Having Same LegalIdentityWithinThe City? </td>\r\n                <td>No</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Are you fromSEZ region(Specialeconomiczone) </td>\r\n                <td>No</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Whetherany individual or organization has provided consultancy for preparing towards NABLAccreditation\r\n                </td>\r\n                <td>No\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Whetherany adverseaction has been initiated/taken byNABL against thelaboratory in the past years.\r\n                </td>\r\n                <td>No\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr>\r\n                <th colspan=\"2\">Contact Person for NABL\r\n                </th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td width=\"50%\">Name</td>\r\n                <td width=\"50%\">Mr. GIRISHSHARMA</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Designation</td>\r\n                <td>QualityManager</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Mobile No</td>\r\n                <td>9350000800</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Landline No</td>\r\n                <td> 129-2231248</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Fax</td>\r\n                <td>129-2231248</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Email</td>\r\n                <td> info@bhavyalab.co.in</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr>\r\n                <th colspan=\"2\">\r\n                  Do youConduct Testing in the following Category\r\n                </th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td width=\"50%\">Permanent Facility</td>\r\n                <td width=\"50%\">Yes</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Site Facility</td>\r\n                <td>Yes</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Mobile Facility</td>\r\n                <td>\r\n                  No</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr>\r\n                <th colspan=\"2\">Parent OrganizationDetails\r\n                </th>\r\n\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td width=\"50%\">Name ofthe Parent OrganizationApplicable? </td>\r\n                <td width=\"50%\">No\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr>\r\n                <th colspan=\"2\">Legal Identity Details</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td width=\"50%\">Legal Identity Type</td>\r\n                <td width=\"50%\">Companies Act,Proprietorship Firm</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Proprietorship Firm Certificate</td>\r\n                <td>Download</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Type of Laboratory by Service</td>\r\n                <td>Open to Others</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Other Accreditations</td>\r\n                <td></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr>\r\n                <th colspan=\"2\">Internal Audit andManagement Review</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td width=\"50%\">Start Date/Schedule ofLast InternalAudit</td>\r\n                <td width=\"50%\">30-07-2018</td>\r\n              </tr>\r\n              <tr>\r\n                <td>End Date/Schedule ofLast InternalAudit</td>\r\n                <td>30-07-2018</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Whetherallrequirements ofISO/IEC 17025:2005covering all activities oflaboratory have been audited\r\n                  at least oncein last one year\r\n                </td>\r\n                <td>Yes</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Start Date ofLast Management Review</td>\r\n                <td> 04-08-2018</td>\r\n              </tr>\r\n              <tr>\r\n                <td>End Date ofLast Management Review</td>\r\n                <td> 04-08-2018</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr>\r\n                <th colspan=\"2\">File Uploads\r\n                </th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td width=\"50%\">Lab OrganizationChart</td>\r\n                <td width=\"50%\">\r\n                  <a href=\"\">Download</a>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>QualityManualFile</td>\r\n                <td>\r\n                  <a href=\"\">Download</a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Accordion card -->\r\n  <!-- Accordion card -->\r\n  <div class=\"card\">\r\n    <!-- Card header -->\r\n    <div class=\"card-header\" role=\"tab\" id=\"headingTwo2\">\r\n      <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordionEx\" href=\"#collapseTwo2\" aria-expanded=\"false\" aria-controls=\"collapseTwo2\">\r\n        <h5 class=\"mb-0\">\r\n          Disciplines\r\n        </h5>\r\n      </a>\r\n    </div>\r\n    <!-- Card body -->\r\n    <div id=\"collapseTwo2\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo2\" data-parent=\"#accordionEx\">\r\n      <div class=\"card-body\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr>\r\n                <th colspan=\"2\">Disciplines: Electro-technical</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td width=\"50%\">Group</td>\r\n                <td width=\"50%\">AlternatingCurrent(\r\n                  < 1 GHz)</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Group</td>\r\n                <td>Direct Current</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Group</td>\r\n                <td>Temperature Simulation</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Group</td>\r\n                <td>Time & Frequency</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr>\r\n                <th colspan=\"2\">Disciplines: Thermal</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td width=\"50%\">Group</td>\r\n                <td width=\"50%\">Specific heat & Humidity</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Group</td>\r\n                <td>Temperature</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr>\r\n                <th colspan=\"2\">Disciplines: Mechanical\r\n                </th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td width=\"50%\">Group</td>\r\n                <td width=\"50%\">Dimension (Basic Measuring Instrument, Gaugeetc.)</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Group</td>\r\n                <td>Dimension (Precision Instruments)</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Group</td>\r\n                <td>PressureIndicatingDevices</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Group</td>\r\n                <td>Volume</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Group</td>\r\n                <td>Weighing Scaleand Balance</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Group</td>\r\n                <td>Weights</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Group</td>\r\n                <td>Acceleration and Speed</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Group</td>\r\n                <td>Acoustics</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr>\r\n                <th colspan=\"2\">Disciplines: Electro-technical\r\n                </th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td width=\"50%\">Group</td>\r\n                <td width=\"50%\">Miscellaneous</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Accordion card -->\r\n  <div class=\"card\">\r\n    <!-- Card header -->\r\n    <div class=\"card-header\" role=\"tab\" id=\"headingTwo3\">\r\n      <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordionEx\" href=\"#collapseTwo3\" aria-expanded=\"false\" aria-controls=\"collapseTwo3\">\r\n        <h5 class=\"mb-0\">\r\n          Lab Location Details\r\n        </h5>\r\n      </a>\r\n    </div>\r\n    <!-- Card body -->\r\n    <div id=\"collapseTwo3\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo3\" data-parent=\"#accordionEx\">\r\n      <div class=\"card-body\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr>\r\n                <th width=\"50%\">Details\r\n                </th>\r\n                <th width=\"50%\">Data Feeded by Lab</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>Address</td>\r\n                <td>MCF NO. 1274, GALI NO. 25, SANJAYCOLONY, SECTRO : 23</td>\r\n              </tr>\r\n              <tr>\r\n                <td>District</td>\r\n                <td>FARIDABAD</td>\r\n              </tr>\r\n              <tr>\r\n                <td>City</td>\r\n                <td>Faridabad</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Pin Code </td>\r\n                <td>121005</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Contact No</td>\r\n                <td>9350000800</td>\r\n              </tr>\r\n              <tr>\r\n                <td>FaxNo. </td>\r\n                <td>129-2231248</td>\r\n              </tr>\r\n              <tr>\r\n                <td>E-mail</td>\r\n                <td>info@bhavyalab.co.in\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Accordion card -->\r\n  <!-- Accordion wrapper -->\r\n</div>"

/***/ }),

/***/ "./src/app/main/dashboard/dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/main/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/main/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/main/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n          <!-- <div class=\"col-lg-10 home\"> -->\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-3\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-body\">\r\n                    <div><strong>Username : </strong><span>Durgesh</span></div>\r\n                    <div><strong>Email : </strong><span>abc@gmail.com</span></div>\r\n                    <div><strong>Report : </strong><span>Yes</span></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-3\">\r\n                <div class=\"card text-white bg-warning o-hidden h-100\">\r\n                  <div class=\"card-body\">\r\n                    <div class=\"card-body-icon\">\r\n                      <i class=\"fas fa-fw fa-list\"></i>\r\n                    </div>\r\n                    <div class=\"mr-5\">11 New Tasks!</div>\r\n                  </div>\r\n                  <a class=\"card-footer text-white clearfix small z-1\" href=\"#\">\r\n                    <span class=\"float-left\">View Details</span>\r\n                    <span class=\"float-right\">\r\n                      <i class=\"fas fa-angle-right\"></i>\r\n                    </span>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-3\">\r\n                <div class=\"card text-white bg-success o-hidden h-100\">\r\n                  <div class=\"card-body\">\r\n                    <div class=\"card-body-icon\">\r\n                      <i class=\"fas fa-fw fa-shopping-cart\"></i>\r\n                    </div>\r\n                    <div class=\"mr-5\">123 New Orders!</div>\r\n                  </div>\r\n                  <a class=\"card-footer text-white clearfix small z-1\" href=\"#\">\r\n                    <span class=\"float-left\">View Details</span>\r\n                    <span class=\"float-right\">\r\n                      <i class=\"fas fa-angle-right\"></i>\r\n                    </span>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-3\">\r\n                <div class=\"card text-white bg-danger o-hidden h-100\">\r\n                  <div class=\"card-body\">\r\n                    <div class=\"card-body-icon\">\r\n                      <i class=\"fas fa-fw fa-life-ring\"></i>\r\n                    </div>\r\n                    <div class=\"mr-5\">13 New Tickets!</div>\r\n                  </div>\r\n                  <a class=\"card-footer text-white clearfix small z-1\" href=\"#\">\r\n                    <span class=\"float-left\">View Details</span>\r\n                    <span class=\"float-right\">\r\n                      <i class=\"fas fa-angle-right\"></i>\r\n                    </span>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card graf\">\r\n              <div class=\"card-header\">\r\n                <i class=\"fas fa-chart-area\"></i>\r\n                Area Chart Example</div>\r\n              <div class=\"card-body\"><div class=\"chartjs-size-monitor\" style=\"position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;\"><div class=\"chartjs-size-monitor-expand\" style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\"><div style=\"position:absolute;width:1000000px;height:1000000px;left:0;top:0\"></div></div><div class=\"chartjs-size-monitor-shrink\" style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\"><div style=\"position:absolute;width:200%;height:200%;left:0; top:0\"></div></div></div>\r\n                <canvas id=\"myAreaChart\" width=\"1052\" height=\"315\" class=\"chartjs-render-monitor\" style=\"display: block; width: 1052px; height: 315px;\"></canvas>\r\n              </div>\r\n              <div class=\"card-footer small text-muted\">Updated yesterday at 11:59 PM</div>\r\n            </div>\r\n          <!-- </div> -->"

/***/ }),

/***/ "./src/app/main/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/main/home/home.component.html"),
            styles: [__webpack_require__("./src/app/main/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/main/loc/loc.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-body\">\r\n  <div class=\"table-responsive\">\r\n    <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\r\n      <thead>\r\n        <tr>\r\n          <th>Sr No.</th>\r\n          <th *ngFor=\"let head of table.header; let i = index\">{{head}}</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let row of table.rows; let j = index\">\r\n          <td>{{j+1}}</td>         \r\n          <td>{{row.ulr}}</td>\r\n          <td>{{row.filename}}</td>\r\n          <td>{{row.issuedate}}</td>\r\n          <td>{{row.expire}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/loc/loc.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/loc/loc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_project_service__ = __webpack_require__("./src/app/service/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocComponent = /** @class */ (function () {
    function LocComponent(_pro) {
        var _this = this;
        this._pro = _pro;
        this.showData = false;
        this.get = this._pro.emitTable.subscribe(function (res) {
            console.log(res);
            _this.showData = true;
            _this.table = res;
        });
    }
    LocComponent.prototype.ngOnInit = function () {
        this._pro.loc();
    };
    LocComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loc',
            template: __webpack_require__("./src/app/main/loc/loc.component.html"),
            styles: [__webpack_require__("./src/app/main/loc/loc.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_project_service__["a" /* ProjectService */]])
    ], LocComponent);
    return LocComponent;
}());



/***/ }),

/***/ "./src/app/main/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-dark bg-dark static-top\">\r\n  <a class=\"navbar-brand mr-1\" href=\"index.html\">QCI</a>\r\n  <form class=\"d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0\">\r\n    <div class=\"input-group\">\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\" aria-label=\"Search\" aria-describedby=\"basic-addon2\">\r\n      <div class=\"input-group-append\">\r\n        <button class=\"btn btn-secondary\" type=\"button\">\r\n          <i class=\"fa fa-search\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</nav>\r\n<div id=\"wrapper\">\r\n  <div id=\"content-wrapper\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-2 qci-nav\" style=\"background:rgba(50, 140, 200, 0.9)\">\r\n            <!-- Sidebar -->\r\n          <ul class=\"sidebar navbar-nav\">\r\n            <li class=\"nav-item\" routerLink=\"/home\" routerLinkActive=\"active\"><a class=\"nav-link\" href=\"javascript:void(0)\"><span>Home</span></a></li>\r\n            <li class=\"nav-item\" routerLink=\"/dashboard\" routerLinkActive=\"active\"><a class=\"nav-link\" href=\"javascript:void(0)\"><span>Dashboard</span></a></li>\r\n            <li class=\"nav-item\" routerLink=\"/certificates\" routerLinkActive=\"active\"><a class=\"nav-link\" href=\"javascript:void(0)\"><span>Certificates from NABL</span></a></li>\r\n            <li class=\"nav-item\" routerLink=\"/upload\" routerLinkActive=\"active\"><a class=\"nav-link\" href=\"javascript:void(0)\"><span>Upload Test Report</span></a></li>\r\n            <li class=\"nav-item\" routerLink=\"/loc\" routerLinkActive=\"active\"><a class=\"nav-link\" href=\"javascript:void(0)\"><span>List Of Certificates</span></a></li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"card col-lg-10 home\">\r\n          <router-outlet></router-outlet>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- DataTables Example -->\r\n  </div>\r\n  <!-- /.container-fluid -->\r\n  <!-- Sticky Footer -->\r\n  <footer class=\"sticky-footer\">\r\n    <div class=\"container my-auto\">\r\n      <div class=\"copyright text-center my-auto\">\r\n        <span>Copyright © QCI 2019</span>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n</div>"

/***/ }),

/***/ "./src/app/main/navigation/navigation.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    // private _pro: ProjectService
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () { };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigation',
            template: __webpack_require__("./src/app/main/navigation/navigation.component.html"),
            styles: [__webpack_require__("./src/app/main/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/main/upload/upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-body\">\r\n  <div class=\"table-responsive\">\r\n    <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\r\n      <thead>\r\n        <tr>\r\n          <th>ULR</th>\r\n          <th>Uploaded On</th>\r\n          <th>Expired On</th>\r\n          <th></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"ULR\" />\r\n          </td>\r\n          <td>20-01-2019</td>\r\n          <td>20-01-2019</td>\r\n          <td>\r\n            <input type=\"file\" multiple class=\"fileUpload\" />\r\n          </td>\r\n        </tr>\r\n        <br />\r\n      <div class=\"clearfix\">\r\n          <button class=\"btn btn-warning btn-sm\">Upload</button>\r\n        </div>\r\n\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/upload/upload.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/upload/upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UploadComponent = /** @class */ (function () {
    function UploadComponent() {
    }
    UploadComponent.prototype.ngOnInit = function () {
    };
    UploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-upload',
            template: __webpack_require__("./src/app/main/upload/upload.component.html"),
            styles: [__webpack_require__("./src/app/main/upload/upload.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/service/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Http } from '@angular/http'


var ApiService = /** @class */ (function () {
    function ApiService(http, router) {
        this.http = http;
        this.router = router;
        this.localJSON = "localhost:3000/";
        this.appHeader = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]({ 'Autherization': 'true' });
    }
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/service/project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("./src/app/service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectService = /** @class */ (function () {
    function ProjectService(api, router_) {
        this.api = api;
        this.router_ = router_;
        // booleans
        this.loader = false;
        // arrays
        this.header = [];
        this.rows = [];
        // Emitters
        this.emitsload = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.emithload = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.emitTable = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    /* showLoader() {
      this.loader = true
      this.emitsload.emit(this.loader)
      setTimeout(() => this.hideLoader(), 1000)
    }
    hideLoader() {
      this.loader = false
      this.emithload.emit(this.loader)
    } */
    /* get_api() {
      this._api.get_api().subscribe(el => {
        if (el.success) console.log('emit data to who called')//this.emitgetEmployees.emit(el.data)
        else console.log('emit err to who called')// this.snackBars('Employee Details', 'Try again!')
      }, err => this.router_.navigate(['some error page'])
      )
    } */
    /* post_api(data:any) {
      this._api.post_api(data).subscribe(el => {
        if (el.success) console.log('emit data to who called')//this.emitgetEmployees.emit(el.data)
        else console.log('emit err to who called')// this.snackBars('Employee Details', 'Try again!')
      }, err => this.router_.navigate(['some error page'])
      )
    } */
    ProjectService.prototype.HttpEventResponse = function (event) {
        console.log(event);
        switch (event.type) {
            case __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpEventType */].Sent:
                // console.log('Request started');
                break;
            case __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpEventType */].ResponseHeader:
                // console.log('Headers received ->', event.headers);
                break;
            case __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpEventType */].DownloadProgress:
                var loaded = Math.round(event.loaded / 1024);
                // console.log(`Downloading ${ loaded } kb downloaded`);
                break;
            case __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpEventType */].Response:
                // console.log('Finished -> ', event.body);
                return event.body;
        }
    };
    ProjectService.prototype.loc = function () {
        // this.api.loc().subscribe((event: HttpEvent<any>) =>{
        //   let response = this.HttpEventResponse(event)
        //   if( response ){
        this.emitTable.emit({
            "header": ["ULR", "Filename", "Issuedate", "Expire"],
            "rows": [
                {
                    "ulr": "ULR20190303000X1234",
                    "filename": "some.pdf",
                    "issuedate": "17/01/19",
                    "expire": "17/03/19"
                },
                {
                    "ulr": "ULR20190303000X1234",
                    "filename": "some.pdf",
                    "issuedate": "17/01/19",
                    "expire": "17/03/19"
                }
            ]
        });
        //   } else {
        //     // console.log("loc table err");
        //   }
        // }, ( err:HttpErrorResponse) => {
        //   // this.emitError.emit(err.error.message)
        // })
    };
    ProjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ProjectService);
    return ProjectService;
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
    production: false
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