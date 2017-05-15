import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { EventsPage } from '../pages/events/events';
import { AddEvents } from '../pages/add-events/add-events';


// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyCMdMzpxpXriHZUtTAGJRCc51wtoSrSHDQ",
  authDomain: "turnout-8d342.firebaseapp.com",
  databaseURL: "https://turnout-8d342.firebaseio.com/",
  storageBucket: "",
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    EventsPage,
    AddEvents
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    EventsPage,
    AddEvents
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
