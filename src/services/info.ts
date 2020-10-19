import { Injectable } from '@angular/core';
import {LoadingController,Platform } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InfoService {
	public loader:any;
	constructor(public plt: Platform,public http_mobile: HTTP,public loading: LoadingController,public http_web: HttpClient){
	}

	showLoading(){
		this.loader = this.loading.create({
		});
		this.loader.present();
	}
	
	hideLoading(){
		this.loader.dismiss();
	}
	
	callHttpFunction_post(URL,row_data,fun_sucess,fun_error){

		if(this.plt.is('core') == true || this.plt.is('mobileweb') == true || this.plt.is('android') == true){
			try{
				this.http_web.post(URL, row_data,{headers: {"Auth":"dibdaaauth"}}).subscribe((response: any) => {
					fun_sucess(response);
				}, error => {
					fun_error(error);
				});
			}catch(Error){
				console.log(Error);
			}
		}else{
			try{
				let headers = {
					"Auth": "dibdaaauth",
					"Content-Type": "application/json"
				};
				this.http_mobile.setDataSerializer('json');
				this.http_mobile.post(URL, row_data, headers).then((response: any) => {
					response.data = JSON.parse(response.data);
					fun_sucess(response.data);
				}).catch((error: any) => {
					fun_error(error);
			   });
			}catch(Error){
				console.log(Error);
			}
		}
	}
	
	/*
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			let networkState = navigator.connection.type;
 
			let states = {};
			states[Connection.UNKNOWN]  = 'Unknown connection';
			states[Connection.ETHERNET] = 'Ethernet connection';
			states[Connection.WIFI]     = 'WiFi connection';
			states[Connection.CELL_2G]  = 'Cell 2G connection';
			states[Connection.CELL_3G]  = 'Cell 3G connection';
			states[Connection.CELL_4G]  = 'Cell 4G connection';
			states[Connection.CELL]     = 'Cell generic connection';
			states[Connection.NONE]     = 'No network';
			
			if(states[networkState] == "No network"){
				let toast = this.toastCtrl.create({
					message: 'There may be a problem in your internet connection. Please try again !',
					duration: 3000,
					position: 'top'
				});
				toast.present();
				return false;
			}else{
				if(this.plt.is('core') == true || this.plt.is('mobileweb') == true || this.plt.is('android') == true){
					try{
						this.http_web.post(URL, row_data,{headers: {"Auth":"dibdaaauth"}}).subscribe((response: any) => {
							fun_sucess(response);
						}, error => {
							fun_error(error);
						});
					}catch(Error){
						console.log(Error);
					}
				}else{
					try{
						let headers = {
							"Auth": "dibdaaauth",
							"Content-Type": "application/json"
						};
						this.http_mobile.setDataSerializer('json');
						this.http_mobile.post(URL, row_data, headers).then((response: any) => {
							response.data = JSON.parse(response.data);
							fun_sucess(response.data);
						}).catch((error: any) => {
							fun_error(error);
					   });
					}catch(Error){
						console.log(Error);
					}
				}
			}
		}else{
			if(this.plt.is('core') == true || this.plt.is('mobileweb') == true || this.plt.is('android') == true){
				try{
					this.http_web.post(URL, row_data,{headers: {"Auth":"dibdaaauth"}}).subscribe((response: any) => {
						fun_sucess(response);
					}, error => {
						fun_error(error);
					});
				}catch(Error){
					console.log(Error);
				}
			}else{
				try{
					let headers = {
						"Auth": "dibdaaauth",
						"Content-Type": "application/json"
					};
					this.http_mobile.setDataSerializer('json');
					this.http_mobile.post(URL, row_data, headers).then((response: any) => {
						response.data = JSON.parse(response.data);
						fun_sucess(response.data);
					}).catch((error: any) => {
						fun_error(error);
				   });
				}catch(Error){
					console.log(Error);
				}
			}
		}
	*/
}