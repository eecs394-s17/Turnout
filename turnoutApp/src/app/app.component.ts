import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { EventsPage } from '../pages/events/events';
import { AddEvents } from '../pages/add-events/add-events';

@Component({
  templateUrl: 'app.html',
})

export class MyApp {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  rootPage:any = LoginPage;

  tab1Root = LoginPage;
  tab2Root = EventsPage;
  tab3Root = HomePage;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
