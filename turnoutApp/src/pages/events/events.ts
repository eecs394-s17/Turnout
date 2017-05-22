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
  events2: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFireDatabase) {
    var cats = [];
    this.events = [];
    for (var i = 0;i<navParams["data"].length;i++) {
      cats.push(navParams["data"][i]["name"].toLowerCase());
    }

    var tester = af.list('/events')
    .subscribe(snapshots=>{
        snapshots.forEach(snapshot => {
          snapshot["score"] = 0;
          for (var i = 0;i<cats.length;i++) {
            if (snapshot["description"] != undefined && snapshot["description"].toLowerCase().includes(cats[i])){
              snapshot["score"] += 1;
            }
          }
          this.events.push(snapshot);
        });

        this.events.sort(function(a, b) {
            return parseFloat(b.score) - parseFloat(a.score);
        });
        this.filteredEvents = this.events;
    });
   }

  // Make this functional :/
  sortEvents(userPrefs, eventList){
      // Calculates the Score for a given event
      // Counts the number of keyword matches between the user's preferences and the event categories
      for(var i=0; i< userPrefs.length; i++){
          for(var j=0; j< eventList.length; j++){
              if(eventList[j].categories.indexOf(userPrefs[i].name) >= 0){
                  eventList[j].score += 1
              }
          }
      }
      // Sort the list from Highest Score to Lowest
      eventList.sort(
        function(x, y){
            return y.score - x.score;
        }
      );
  }

  getEvents(ev: any) {

    this.filteredEvents = this.events;
    console.log(this.filteredEvents);
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.filteredEvents = this.filteredEvents.filter((item) => {
        var inDescription =  (item.description.toLowerCase().indexOf(val.toLowerCase()) > -1);
        var inTitle = (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);

        return (inTitle || inDescription);
      })
    }
    
    console.log(this.filteredEvents);
  }

}
