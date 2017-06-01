import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventsPage } from './events';
import { HomePage } from './home';
import { IonicIcons } from '../../app/ionicons.css';

@NgModule({
  declarations: [
    EventsPage,
  ],
  imports: [
    IonicPageModule.forChild(EventsPage),
  ],
  exports: [
    EventsPage
  ]
})
export class EventsModule {}
