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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _github_search_github_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./github-search/github-search.component */ "./src/app/github-search/github-search.component.ts");
/* harmony import */ var _github_users_github_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./github-users/github-users.component */ "./src/app/github-users/github-users.component.ts");
/* harmony import */ var _github_repo_github_repo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./github-repo/github-repo.component */ "./src/app/github-repo/github-repo.component.ts");






var routes = [{
        path: '', component: _github_search_github_search_component__WEBPACK_IMPORTED_MODULE_3__["GithubSearchComponent"]
    },
    {
        path: 'users', component: _github_users_github_users_component__WEBPACK_IMPORTED_MODULE_4__["GithubUsersComponent"]
    },
    {
        path: 'repo', component: _github_repo_github_repo_component__WEBPACK_IMPORTED_MODULE_5__["GithubRepoComponent"]
    }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* body{\n  background-image: url(\"/map.jpg\");\nbackground-repeat: no-repeat;\nbackground-size: cover;\n} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7SUFJSSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogYm9keXtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL21hcC5qcGdcIik7XG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn0gKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n\n  <div class=\"start\">\n\n  </div>\n\n  <router-outlet></router-outlet>\n\n</body>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Github-search';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _github_search_github_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./github-search/github-search.component */ "./src/app/github-search/github-search.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _github_users_github_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./github-users/github-users.component */ "./src/app/github-users/github-users.component.ts");
/* harmony import */ var _github_repo_github_repo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./github-repo/github-repo.component */ "./src/app/github-repo/github-repo.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _github_search_github_search_component__WEBPACK_IMPORTED_MODULE_6__["GithubSearchComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_8__["FormComponent"],
                _github_users_github_users_component__WEBPACK_IMPORTED_MODULE_9__["GithubUsersComponent"],
                _github_repo_github_repo_component__WEBPACK_IMPORTED_MODULE_10__["GithubRepoComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/form/form.component.css":
/*!*****************************************!*\
  !*** ./src/app/form/form.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#btnn{\n  margin-top: 21px;\n  margin-left: 20px;\n}\n.form-control{\n  padding: 20px;\n    border-radius: 5px;\n    width: 333px;\n    margin-top: 21px;\n\n}\n.form-group{\n    display: flex;\n    justify-content: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxjQUFjO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixpQkFBaUI7O0NBRXBCO0FBQ0Q7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0NBQzNCIiwiZmlsZSI6InNyYy9hcHAvZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYnRubntcbiAgbWFyZ2luLXRvcDogMjFweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4uZm9ybS1jb250cm9se1xuICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB3aWR0aDogMzMzcHg7XG4gICAgbWFyZ2luLXRvcDogMjFweDtcblxufVxuLmZvcm0tZ3JvdXB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/form/form.component.html":
/*!******************************************!*\
  !*** ./src/app/form/form.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)='submitSearch(searchForm)' #searchForm='ngForm'>\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control\" name=\"find\" placeholder=\"Search\" [(ngModel)]=\"searchRequest.find\" #find='ngModel'  required>\n    <button type=\"submit\" class=\"btn btn-danger\" id=\"btnn\">Search</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search */ "./src/app/search.ts");



// import { Users } from '../users';
// import { RequestService } from '../git-API/request.service';
var FormComponent = /** @class */ (function () {
    function FormComponent() {
        this.searchRequest = new _search__WEBPACK_IMPORTED_MODULE_2__["Search"]("");
        this.getName = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    // find:string
    // user: Users;
    FormComponent.prototype.submitSearch = function (data) {
        this.getName.emit(data.value.find);
        data.reset();
    };
    // submitSearch(){
    //
    //   this.searchService.updateUserName(this.find);
    //     console.log(this.find);
    //
    //     this.searchService.findUser()
    //     this.user = this.searchService.user
    // }
    FormComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormComponent.prototype, "getName", void 0);
    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/form/form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/git-API/request.service.ts":
/*!********************************************!*\
  !*** ./src/app/git-API/request.service.ts ***!
  \********************************************/
/*! exports provided: RequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users */ "./src/app/users.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var RequestService = /** @class */ (function () {
    // private searchName:"Fahari"
    function RequestService(http) {
        this.http = http;
        this.users = new _users__WEBPACK_IMPORTED_MODULE_2__["Users"]('', '', '', '', 0, 0, new Date(), 0);
        // this.repo = new Repo("","","",new Date())
    }
    // updateUserName(username:string){
    //   this.searchName =this.username
    // }
    RequestService.prototype.findUser = function (searchName) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get('https://api.github.com/users/' + searchName + '?access_token=dc7660e95d86c6b6772345f4b8979cb16f479b4b').toPromise().then(function (getResponse) {
                _this.users.name = getResponse.name;
                _this.users.login = getResponse.login;
                _this.users.avatar_url = getResponse.avatar_url;
                _this.users.html_url = getResponse.html_url;
                _this.users.public_repos = getResponse.public_repos;
                _this.users.created_at = getResponse.created_at;
                _this.users.followers = getResponse.followers;
                _this.users.following = getResponse.following;
                resolve();
            }, function (error) {
                console.log('Loading has Failed. Try Again later');
                reject(error);
            });
        });
        return promise;
    };
    RequestService.prototype.getUserRepo = function (searchName) {
        var _this = this;
        var myPromise = new Promise(function (resolve, reject) {
            _this.http.get('https://api.github.com/users/' + searchName + '/repos?order=created&sort=asc?access_token=dc7660e95d86c6b6772345f4b8979cb16f479b4b').toPromise().then(function (getRepoResponse) {
                _this.newRepo = getRepoResponse;
                resolve();
            }, function (error) {
                console.log('Loading has Failed. Try Again later');
                reject(error);
            });
        });
        return myPromise;
    };
    RequestService.prototype.findRepo = function (searchName, toShow) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get('https://api.github.com/search/repositories?q=' + searchName + '&per_page=' + toShow + '&sort=forks&order=asc?access_token=dc7660e95d86c6b6772345f4b8979cb16f479b4b').toPromise().then(function (getRepoResponse) {
                _this.searchRepo = getRepoResponse.items;
                resolve();
            }, function (error) {
                _this.searchRepo = 'Type above to make a search request';
                console.log('Loading has Failed. Try Again later');
                reject(error);
            });
        });
        return promise;
    };
    RequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], RequestService);
    return RequestService;
}());



/***/ }),

/***/ "./src/app/github-repo/github-repo.component.css":
/*!*******************************************************!*\
  !*** ./src/app/github-repo/github-repo.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpdGh1Yi1yZXBvL2dpdGh1Yi1yZXBvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/github-repo/github-repo.component.html":
/*!********************************************************!*\
  !*** ./src/app/github-repo/github-repo.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <app-form></app-form>\n\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"table\">\n        <table>\n          <tbody>\n            <tr>\n              <td>\n                <h4>\n                  <a href=\"#\">#</a>\n                </h4>\n                <p>Owner:\n                <a href=\"#\"></a></p>\n                <p>Details: </p>\n                <p>Date Created: </p>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/github-repo/github-repo.component.ts":
/*!******************************************************!*\
  !*** ./src/app/github-repo/github-repo.component.ts ***!
  \******************************************************/
/*! exports provided: GithubRepoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubRepoComponent", function() { return GithubRepoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _git_API_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../git-API/request.service */ "./src/app/git-API/request.service.ts");



var GithubRepoComponent = /** @class */ (function () {
    function GithubRepoComponent() {
    }
    GithubRepoComponent.prototype.ngOnInit = function () {
    };
    GithubRepoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-github-repo',
            template: __webpack_require__(/*! ./github-repo.component.html */ "./src/app/github-repo/github-repo.component.html"),
            providers: [_git_API_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]],
            styles: [__webpack_require__(/*! ./github-repo.component.css */ "./src/app/github-repo/github-repo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GithubRepoComponent);
    return GithubRepoComponent;
}());



/***/ }),

/***/ "./src/app/github-search/github-search.component.css":
/*!***********************************************************!*\
  !*** ./src/app/github-search/github-search.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " body{\n  background-image: url(\"map.jpg\");\nbackground-repeat: no-repeat;\nbackground-size: cover;\noutline: none;\n}\n\nh1 {\n  font-weight: 500;\n}\n\np {\n  font-weight: 500;\n}\n\na {\n  text-decoration: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2l0aHViLXNlYXJjaC9naXRodWItc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7RUFDQyxpQ0FBaUM7QUFDbkMsNkJBQTZCO0FBQzdCLHVCQUF1QjtBQUN2QixjQUFjO0NBQ2I7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBQ0Q7RUFDRSxzQkFBc0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9naXRodWItc2VhcmNoL2dpdGh1Yi1zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiBib2R5e1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJtYXAuanBnXCIpO1xuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5vdXRsaW5lOiBub25lO1xufVxuXG5oMSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5wIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/github-search/github-search.component.html":
/*!************************************************************!*\
  !*** ./src/app/github-search/github-search.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<div style=\"text-align:center\" class=\"row\">\n  <div class=\"col-md-6\">\n    <br><h1>\n      Welcome to Github-Google\n    </h1><br><br>\n    <button type=\"button\" class=\"btn btn-success\" id=\"bttn\"><a routerLink='/users' routerLinkActive='active'>Get started</a></button>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/github-search/github-search.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/github-search/github-search.component.ts ***!
  \**********************************************************/
/*! exports provided: GithubSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubSearchComponent", function() { return GithubSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GithubSearchComponent = /** @class */ (function () {
    function GithubSearchComponent() {
    }
    GithubSearchComponent.prototype.ngOnInit = function () {
    };
    GithubSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-github-search',
            template: __webpack_require__(/*! ./github-search.component.html */ "./src/app/github-search/github-search.component.html"),
            styles: [__webpack_require__(/*! ./github-search.component.css */ "./src/app/github-search/github-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GithubSearchComponent);
    return GithubSearchComponent;
}());



/***/ }),

/***/ "./src/app/github-users/github-users.component.css":
/*!*********************************************************!*\
  !*** ./src/app/github-users/github-users.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\n  max-width: 80%;\n  border-radius: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2l0aHViLXVzZXJzL2dpdGh1Yi11c2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2dpdGh1Yi11c2Vycy9naXRodWItdXNlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcbiAgbWF4LXdpZHRoOiA4MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/github-users/github-users.component.html":
/*!**********************************************************!*\
  !*** ./src/app/github-users/github-users.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<div class=\"john\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <app-form (getName)='searchUser($event)'></app-form>\n        <hr>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <img src=\"{{users.avatar_url}}\" alt=\"Loading avatar\">\n      </div>\n      <div class=\"col-md-8\">\n        <div class=\"table1\">\n          <h3><i><b>{{users.name}}</b></i></h3>\n          <table>\n            <tbody>\n              <tr>\n                <th scope='row'>Github User:</th>\n                <td><a href=\"{{users.html_url}}\" target=\"_blank\">{{users.login}}</a></td>\n              </tr>\n              <tr>\n                <th scope='row'>Number of Repos:</th>\n                <td>{{users.public_repos}}</td>\n              </tr>\n              <tr>\n                <th scope='row'>Followers:</th>\n                <td>{{users.followers}}</td>\n              </tr>\n              <tr>\n                <th scope='row'>Following:</th>\n                <td>{{users.following}}</td>\n              </tr>\n              <tr>\n                <th scope='row'>Date Joined:</th>\n                <td>{{users.created_at}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n  <hr>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h4>Repositories by <i><b>{{users.name}}</b></i></h4>\n        <div class=\"table2\">\n          <table>\n            <tbody>\n              <tr *ngFor='let repository of gitUserRepo.newRepo'>\n                <td>\n                  <a href=\"{{repository.html_url}}\" target=\"_blank\">{{repository.name}}</a><br>\n                  <p>Details: {{repository.description}}</p><br>\n                  <p>Date Joined: {{repository.created_at}}</p>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/github-users/github-users.component.ts":
/*!********************************************************!*\
  !*** ./src/app/github-users/github-users.component.ts ***!
  \********************************************************/
/*! exports provided: GithubUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubUsersComponent", function() { return GithubUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _git_API_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../git-API/request.service */ "./src/app/git-API/request.service.ts");



var GithubUsersComponent = /** @class */ (function () {
    function GithubUsersComponent(gitUserRequests, gitUserRepo) {
        this.gitUserRequests = gitUserRequests;
        this.gitUserRepo = gitUserRepo;
        this.nameToSearch = 'twyfordsparks';
        this.repo = [];
    }
    GithubUsersComponent.prototype.searchUser = function (name) {
        this.newName = '';
        for (var i = 0; i < name.length; i++) {
            if (name.charAt(i) === " " || name.charAt(i) === "?" || name.charAt(i) === "/") {
                alert("Username should not contain spaces");
                this.newName = 'twyfordsparks';
                break;
            }
            else if (name.charAt(i) !== " " || name.charAt(i) !== "?" || name.charAt(i) !== "/") {
                this.newName = this.newName.concat(name.charAt(i));
            }
        }
        this.nameToSearch = this.newName;
        this.ngOnInit();
    };
    GithubUsersComponent.prototype.ngOnInit = function () {
        this.gitUserRequests.findUser(this.nameToSearch);
        this.users = this.gitUserRequests.users;
        this.gitUserRepo.getUserRepo(this.nameToSearch);
    };
    GithubUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-github-users',
            template: __webpack_require__(/*! ./github-users.component.html */ "./src/app/github-users/github-users.component.html"),
            providers: [_git_API_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]],
            styles: [__webpack_require__(/*! ./github-users.component.css */ "./src/app/github-users/github-users.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_git_API_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"], _git_API_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]])
    ], GithubUsersComponent);
    return GithubUsersComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav{\n  width: 100;\n  background: #142323;\n}\n.nav ul {\n  width: 80%;\n  margin: 0;\n  padding: 0;\n}\n.nav ul li {\n  list-style: none;\n  display: inline-block;\n  padding: 15px;\n  margin-left: 64px;\n}\n.nav ul li:hover{\n  background: #2A4D4D;\n}\n.nav ul li a {\n  text-decoration: none;\n  color: #fff;\n}\nbody{\n  background-image: url(\"/\")\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixXQUFXO0NBQ1o7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0Usb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtDQUNiO0FBQ0Q7RUFDRSwwQkFBMEI7Q0FDM0IiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2e1xuICB3aWR0aDogMTAwO1xuICBiYWNrZ3JvdW5kOiAjMTQyMzIzO1xufVxuLm5hdiB1bCB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5uYXYgdWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiA2NHB4O1xufVxuLm5hdiB1bCBsaTpob3ZlcntcbiAgYmFja2dyb3VuZDogIzJBNEQ0RDtcbn1cbi5uYXYgdWwgbGkgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG59XG5ib2R5e1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvXCIpXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav john\">\n  <ul>\n    <li><a href=\"#\">Home</a></li>\n    \n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/search.ts":
/*!***************************!*\
  !*** ./src/app/search.ts ***!
  \***************************/
/*! exports provided: Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
var Search = /** @class */ (function () {
    function Search(find) {
        this.find = find;
    }
    return Search;
}());



/***/ }),

/***/ "./src/app/users.ts":
/*!**************************!*\
  !*** ./src/app/users.ts ***!
  \**************************/
/*! exports provided: Users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Users", function() { return Users; });
var Users = /** @class */ (function () {
    function Users(name, login, avatar_url, html_url, public_repos, created_at, followers, following) {
        this.name = name;
        this.login = login;
        this.avatar_url = avatar_url;
        this.html_url = html_url;
        this.public_repos = public_repos;
        this.created_at = created_at;
        this.followers = followers;
        this.following = following;
    }
    return Users;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true,
    apiUrl: "https://api.github.com/users/"
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/john/Desktop/Github/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map