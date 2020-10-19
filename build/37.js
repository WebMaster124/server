webpackJsonp([37],{

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessinfoEditPageModule", function() { return BusinessinfoEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__businessinfo_edit__ = __webpack_require__(802);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_geoautocomplete__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_intl_phone__ = __webpack_require__(358);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BusinessinfoEditPageModule = /** @class */ (function () {
    function BusinessinfoEditPageModule() {
    }
    BusinessinfoEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__businessinfo_edit__["a" /* BusinessinfoEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__businessinfo_edit__["a" /* BusinessinfoEditPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ng4_geoautocomplete__["a" /* Ng4GeoautocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng4_intl_phone__["a" /* InternationalPhoneModule */]
            ],
        })
    ], BusinessinfoEditPageModule);
    return BusinessinfoEditPageModule;
}());

//# sourceMappingURL=businessinfo-edit.module.js.map

/***/ }),

/***/ 802:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessinfoEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_info__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the BusinessinfoEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BusinessinfoEditPage = /** @class */ (function () {
    function BusinessinfoEditPage(alertCtrl, fb, infoService, viewCtrl, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.fb = fb;
        this.infoService = infoService;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userSettings = {
            showCurrentLocation: true,
            showSearchButton: false,
            useGoogleGeoApi: true,
            locationIconUrl: "assets/images/369f997cef4f440c5394ed2ae6f8eecd.png",
        };
        this.checkKey = this.navParams.get('val');
        this.changeuserProfileForm = fb.group({
            'phonenumber': ['+971', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(7)])],
        });
    }
    BusinessinfoEditPage.prototype.autoCompleteCallback1 = function (selectedData) {
        var _this = this;
        if (selectedData.response == true) {
            var change_address = {
                id: this.navParams.get('user_Id'),
                key: 'business_address',
                value: selectedData.data.description
            };
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/user/edit-business-info', change_address, function (response) {
                if (response.users.status == "success") {
                    var persons = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
                    persons.business_address = selectedData.data.description;
                    localStorage.setItem('userInfo', JSON.stringify(persons));
                    __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem = persons;
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Change Address',
                        subTitle: 'Address updated successfully.',
                        buttons: [{
                                text: 'OK',
                                role: 'cancel',
                                handler: function () {
                                    _this.viewCtrl.dismiss();
                                }
                            }]
                    });
                    alert_1.present();
                }
                _this.infoService.hideLoading();
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
        }
    };
    
    
    
    BusinessinfoEditPage.prototype.changePhone = function (val) {
        var _this = this;
        var change_phone = {
            id: this.navParams.get('user_Id'),
            key: 'business_mobile',
            value: val.value.phonenumber
        };
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/user/edit-business-info', change_phone, function (response) {
            if (response.users.status == "success") {
                var persons = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
                persons.business_mobile = val.value.phonenumber;
                localStorage.setItem('userInfo', JSON.stringify(persons));
                __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem = persons;
                var alert_2 = _this.alertCtrl.create({
                    title: 'Change phone number',
                    subTitle: 'Phone number updated successfully.',
                    buttons: [{
                            text: 'OK',
                            role: 'cancel',
                            handler: function () {
                                _this.viewCtrl.dismiss();
                            }
                        }]
                });
                alert_2.present();
            }
            _this.infoService.hideLoading();
        }, function (error) {
            console.log(error);
            _this.infoService.hideLoading();
        });
    };
    
    
    
     BusinessinfoEditPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        try {
           
            
                this.infoService.showLoading();
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/user/get_country', '', function (response) {
                    _this.show_category = response.categories;
                    _this.infoService.hideLoading();
                    _this.showFees();
                }, function (error) {
                    console.log(error);
                });
            
        }
        catch (Error) {
            console.log(Error);
        }
    };
    
    
        BusinessinfoEditPage.prototype.checkSaesonDeal = function (val) {
            //alert(val);
              var country = {
            country_id: val
        };
         //   alert("dgfiusdf");
       var _this = this;
        try {
           
            
                this.infoService.showLoading();
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/user/get_state', country, function (response) {
                    _this.show_states = response.states;
                    _this.infoService.hideLoading();
                   // _this.showFees();
                }, function (error) {
                    console.log(error);
                });
            
        }
        catch (Error) {
            console.log(Error);
        }
    };
    
    
    
    BusinessinfoEditPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    
    
    
    
    BusinessinfoEditPage.prototype.changeaddress = function (selectedData) {
        var _this = this;
        //alert(selectedData.value.state_id);
        
         var change_address = {
            id: this.navParams.get('user_Id'),
            key: 'business_address',
            value: selectedData.value,
        };


        
         if (selectedData.value.country_id == "") {
            var alert1 = this.alertCtrl.create({
                title: 'Edit address',
                subTitle: 'Choose the country',
                buttons: [{
                        text: 'OK',
                        role: 'cancel',
                        cssClass: 'alert-button-changeColor'
                    }]
            });
            alert1.present();
            return false;
        }
    
        
           if (selectedData.value.city == "") {
            var alert2 = this.alertCtrl.create({
                title: 'Edit address',
                subTitle: 'Enter the City name!',
                buttons: [{
                        text: 'OK',
                        role: 'cancel',
                        cssClass: 'alert-button-changeColor'
                    }]
            });
            alert2.present();
            return false;
        }
        
            if (selectedData.value.state_id == "") {
            var alert3= this.alertCtrl.create({
               title: 'Edit address',
                subTitle: 'Choose the State',
                buttons: [{
                        text: 'OK',
                        role: 'cancel',
                        cssClass: 'alert-button-changeColor'
                    }]
            });
            alert3.present();
            return false;
        }
        
        
            if (selectedData.value.pincode == "") {
            var alert4 = this.alertCtrl.create({
                title: 'Edit address', 
               subTitle: 'Enter the Post / Zipcode',
                buttons: [{
                        text: 'OK',
                        role: 'cancel',
                        cssClass: 'alert-button-changeColor'
                    }]
            });
            alert4.present();
            return false;
        }
        
    
        //alert(selectedData.response);
        
        //if (selectedData.response == true) {
           
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/user/edit-business-address', change_address, function (response) {
                
               // alert(response.users.status);
                if (response.users.status == "success") {
                    
                    var persons = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
                    persons.business_address = response.users.address;
                   
                    localStorage.setItem('userInfo', JSON.stringify(persons));
                    __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem = persons;
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Change Address',
                        subTitle: 'Address updated successfully.',
                        buttons: [{
                                text: 'OK',
                                role: 'cancel',
                                handler: function () {
                                    _this.viewCtrl.dismiss();
                                }
                            }]
                    });
                    alert_1.present();
                }
                _this.infoService.hideLoading();
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
       // }
    };
    
    
    BusinessinfoEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-businessinfo-edit',
            templateUrl:'src/pages/modal/businessinfo-edit/businessinfo-edit.html',
            //template:/*ion-inline-start:"/var/www/html/src/pages/modal/businessinfo-edit/businessinfo-edit.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>\n			<h6 *ngIf="checkKey == \'Address\'">Change business address</h6>\n			<h6 *ngIf="checkKey == \'Phone\'">Change business phone number</h6>\n		</ion-title>\n		<ion-buttons end>\n			<button ion-button (click)="closeModal()"><i class="fa fa-close" style="font-size:26px"></i></button>\n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n<ion-content padding *ngIf="checkKey == \'Address\'">\n	 <div class="form-group col-md-6">\n<label for="inputCountry">Country or region</label>\n<select id="inputCountry" class="form-control" name="natinality">\n<option value="Afghanistan">Afghanistan</option>\n<option value="Albania">Albania</option>\n<option value="Algeria">Algeria</option>\n<option value="American Samoa">American Samoa</option>\n<option value="Andorra">Andorra</option>\n<option value="Angola">Angola</option>\n<option value="Anguilla">Anguilla</option>\n</select>\n</div>\n<div class="form-group col-md-6">\n<label for="inputCountry">State</label>\n<select id="inputCountry" class="form-control" name="natinality">\n<option value="Afghanistan">Afghanistan</option>\n<option value="Albania">Albania</option>\n<option value="Algeria">Algeria</option>\n<option value="American Samoa">American Samoa</option>\n<option value="Andorra">Andorra</option>\n<option value="Angola">Angola</option>\n<option value="Anguilla">Anguilla</option>\n</select>\n</div>\n<div class="form-group col-md-6">\n<label for="inputCountry">City</label>\n<select id="inputCountry" class="form-control" name="natinality">\n<option value="Afghanistan">Afghanistan</option>\n<option value="Albania">Albania</option>\n<option value="Algeria">Algeria</option>\n<option value="American Samoa">American Samoa</option>\n<option value="Andorra">Andorra</option>\n<option value="Angola">Angola</option>\n<option value="Anguilla">Anguilla</option>\n</select>\n</div>\n<div class="form-group col-md-6">\n<label for="inputSaddress">Street address</label>\n<input type="text" class="form-control" id="inputSaddress" name="ship_address" required >\n</div>\n<div class="form-group col-md-6">\n<label for="inputSaddress">Pin/Zip Code</label>\n<input type="text" class="form-control" id="inputSaddress" name="ship_address" required >\n</div>\n<div class="w-100 text-center mt-4"> \n<button type="submit" class="btn theme-light-btn">Submit</button>\n</div>\n</ion-content>\n\n<ion-content padding *ngIf="checkKey == \'Phone\'">\n	<label class="p-3 setFontSize">Phone Number</label>\n	<int-phone-prefix [locale]="\'en\'" id="phonenumber" [formControl]="changeuserProfileForm.controls[\'phonenumber\']" [ngClass]="{\'error-border\':!changeuserProfileForm.controls[\'phonenumber\'].valid}"></int-phone-prefix>\n	<div class="error-box" *ngIf="changeuserProfileForm.controls[\'phonenumber\'].hasError(\'minlength\') && changeuserProfileForm.controls[\'phonenumber\'].touched">* Minimum length is 7!</div>\n	<div class="error-box" *ngIf="changeuserProfileForm.controls[\'phonenumber\'].hasError(\'required\') && changeuserProfileForm.controls[\'phonenumber\'].touched">* Phone is required!</div>\n	<div class="w-100 text-center mt-4">\n		<button type="submit" class="btn theme-light-btn" (click)="changePhone(changeuserProfileForm)">Change Phone Number</button>\n	</div>\n</ion-content>\n\n'/*ion-inline-end:"/var/www/html/src/pages/modal/businessinfo-edit/businessinfo-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], BusinessinfoEditPage);
    return BusinessinfoEditPage;
}());

//# sourceMappingURL=businessinfo-edit.js.map

/***/ })

});
//# sourceMappingURL=37.js.map