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
      //startDate, endDate, location, organizer, duration, description, image,
      // {
      //     name: "Mayfest Battle of the Bands",
      //     categories: ["music","nightlife"],
      //     score: 0
      // },{
      //     name: "Womens Club Soccer vs DePaul",
      //     categories: ["sports"],
      //     score: 0
      // },{
      //     name: "IFC Todoroki Sushi Contest",
      //     categories: ["greek","food"],
      //     score: 0
      // },{
      //     name: "Open Hack Night",
      //     categories: ["tech","food"],
      //     score: 0
      // },{
      //     name: "Waa-Mu Show",
      //     categories: ["music","theater"],
      //     score: 0
      // }

      {
        name: "Feelings? | Undergraduate Senior Art Show",
        description: "Artist Statements: Daniel Eghdami: In our daily lives, we experience uninvited, chaotic and unavoidable events. They affect us in complex ways that can compromise our objectivity, which can interfere with the way we interact with the world around us. I want to appreciate what happens in the world around me rather than being dominated by the feeling that it is stressful and disturbing. That is why, as an artist, I strive to characterize unspoken truths and highlight uncommon opinions that help me (and hopefully others) gain some fresh perspectives. ",
        image: "https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/18238481_10212193906905693_7035049923914598537_o.jpg?oh=5b85d5f853d8471dbfd162001d4ff559&oe=597BC28A",
        startDate: new Date(),
        endDate: new Date(),
        duration: 0,
        location: "test",
        organizer: "test",
        categories: [],
      },{
        name: "test",
        description: "test",
        image: "image_url",
        startDate: new Date(),
        endDate: new Date(),
        duration: 0,
        location: "test",
        organizer: "test",
        categories: [],
      },{
        name: "test",
        description: "test",
        image: "image_url",
        startDate: new Date(),
        endDate: new Date(),
        duration: 0,
        location: "test",
        organizer: "test",
        categories: [],
      },

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
