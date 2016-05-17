import {ViewChild} from 'angular2/core';
import {App, Platform, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';

import {HomePage} from './pages/home/home';
import {SchoolDetailPage} from './pages/school-detail/school-detail';

interface PageObject {
  title: string;
  component: any;
  icon: string;
  index?: number;
}

@App({
  templateUrl :  'build/app.html',
  config: {} 
})
export class SchoolListApp {
  rootPage: any = HomePage;
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform) {
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
    
    this.rootPage = HomePage;
  }
  
  openPage(page: PageObject) {
    this.nav.setRoot(page.component);
  }
}
