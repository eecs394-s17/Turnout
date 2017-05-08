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
          categories: ["music","nightlife"]
      },{
          name: "Womens Club Soccer vs DePaul",
          categories: ["sports"]
      },{
          name: "IFC Todoroki Sushi Contest",
          categories: ["greek","food"]
      },{
          name: "Open Hack Night",
          categories: ["tech","food"]
      },{
          name: "Waa-Mu Show",
          categories: ["music","theater"]
      }
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Events');
  }

}
