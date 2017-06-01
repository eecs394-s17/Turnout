import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEvents } from './add-events';

@NgModule({
  declarations: [
    AddEvents,
  ],
  imports: [
    IonicPageModule.forChild(AddEvents),
  ],
  exports: [
    AddEvents
  ]
})
export class AddEventsModule {}