import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
	login = {};
	constructor(public navCtrl: NavController) {

	}

	submitLogin() {
	 
    this.navCtrl.setRoot(HomePage);
	}
}
