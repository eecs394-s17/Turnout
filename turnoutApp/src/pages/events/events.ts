import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  events = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams);
    this.events = [
      {
          name: "Mayfest Battle of the Bands",
          categories: ["music","nightlife"],
          score: 0
      },{
          name: "Womens Club Soccer vs DePaul",
          categories: ["sports"],
          score: 0
      },{
          name: "IFC Todoroki Sushi Contest",
          categories: ["greek","food"],
          score: 0
      },{
          name: "Open Hack Night",
          categories: ["tech","food"],
          score: 0
      },{
          name: "Waa-Mu Show",
          categories: ["music","theater"],
          score: 0
      }
    ];

    this.sortEvents(navParams.data, this.events);
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad Events');
  }

}
