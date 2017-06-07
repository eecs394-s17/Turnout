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

    var rowLen = 3;

  	var prefs = ["Music","Food","Sports","Theater","Movies","Nightlife","Greek","Career","Tech"];
    var images = ["music.jpg","food.jpg","sports.jpg","theater.jpg","movies.jpg","nightlife.jpg","greek.jpg","career.jpg","science.jpg"];

  	for(var i=0;i<prefs.length;i++) {
  		var pref = {
  			name: prefs[i],
  			selected: false,
        image: images[i]
  		};

  		this.items.push(pref);

  	}

    var ilen = this.items.length;
    var nitems = [];
    for(var i=0;i<ilen;i+=rowLen) {

      var colitems = [];

      for(var j=0;j<rowLen;j++) {
        colitems.push(this.items[i + j])
      }

      nitems.push(colitems);

    }

    this.items = nitems;

  }

  submitPrefs() {
    var selected = [];
    this.items.forEach(function(item){
      if(item[0].selected){
        selected.push(item[0]);
      }
      if(item[1].selected){
        selected.push(item[1]);
      }
      if(item[2].selected){
        selected.push(item[2]);
      }
    })
    this.navCtrl.setRoot(EventsPage, selected);
  }

  check(id1,id2) {
    this.items[id1][id2].selected = !this.items[id1][id2].selected;
  }

}
