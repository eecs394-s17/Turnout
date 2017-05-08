import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventsPage } from '../events/events';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	items = [];

  constructor(public navCtrl: NavController) {

  	var prefs = ["music","food","sports","theater","movies","nightlife","greek","career","tech"];

  	for(var i=0;i<prefs.length;i++) {
  		var pref = {
  			name: prefs[i],
  			selected: false
  		};

  		this.items.push(pref);

  	}

  }

  submitPrefs() {
    var selected = [];
    this.items.forEach(function(item){
      if(item.selected){
        selected.push(item);
      }
    })
    this.navCtrl.setRoot(EventsPage, selected);
  }

}
