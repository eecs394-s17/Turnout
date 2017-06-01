import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { AddEvents } from '../add-events/add-events';

/**
 * Generated class for the Events page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  addEvents = AddEvents;
  events = [];
  filteredEvents = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFireDatabase) {
    var cats = [];
    for (var i = 0;i<navParams["data"].length;i++) {
      cats.push(navParams["data"][i]["name"].toLowerCase());
    }

    af.list('/events')
    .subscribe(snapshots=>{
        this.events = [];
        snapshots.forEach(snapshot => {
          snapshot["score"] = 0;
          for (var i = 0;i<cats.length;i++) {
            if (snapshot["description"] != undefined && snapshot["description"].toLowerCase().includes(cats[i])){
              snapshot["score"] += 1;
            }
          }
          this.events.push(snapshot);
        });

        this.filteredEvents = this.events.sort(function(a, b) {
            if(b.score == a.score){
                return Date.parse(a.date) - Date.parse(b.date);
            } else {
                return parseFloat(b.score) - parseFloat(a.score);
            }
        });
    });
   }

  getEvents(ev: any) {

    this.filteredEvents = this.events;
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.filteredEvents = this.filteredEvents.filter((item) => {
        var inDescription =  (item.description.toLowerCase().indexOf(val.toLowerCase()) > -1);
        var inTitle = (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);

        return (inTitle || inDescription);

        // return item.description.toLowerCase().indexOf(val.toLowerCase()) > -1
      })
    }
  }

}
