import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	items = [];

  constructor(public navCtrl: NavController) {

  	var prefs = ["music","food","sports","theater","movies","nightlife","greek","career","sci & tech"];

  	for(var i=0;i<prefs.length;i++) {
  		var pref = {
  			name: prefs[i],
  			selected: false
  		};

  		this.items.push(pref);

  	}

  }

}
