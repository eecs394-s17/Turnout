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

  	var prefs = ["Music","Food","Sports","Theater","Movies","Nightlife","Greek","Career","Tech","Clubs"];
    var images = ["music.jpg","food.jpg","sports.jpg","theater.jpg","movies.jpg","music.jpg","music.jpg","music.jpg","science.jpg","music.jpg"];

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
    for(var i=0;i<ilen;i+=2) {

      nitems.push([this.items[i],this.items[i+1]]);

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
    })
    this.navCtrl.setRoot(EventsPage, selected);
  }

  check(id1,id2) {
    this.items[id1][id2].selected = !this.items[id1][id2].selected;
  }

}
