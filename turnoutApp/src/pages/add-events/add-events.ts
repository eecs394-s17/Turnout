import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
/**
 * Generated class for the AddEvents page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-events',
  templateUrl: 'add-events.html',
})
export class AddEvents {
  events: FirebaseListObservable<any>;
  event = {
    title: null,
    date: null,
    location: null,
    description: null
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFireDatabase) {
     this.events = af.list('/events');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEvents');
  }

  submitEvent(){
    this.events.push({
      title: this.event.title,
      date: this.event.date,
      location: this.event.location,
      description: this.event.description
    });
  }

}