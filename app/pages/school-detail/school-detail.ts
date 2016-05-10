import {Page, NavController, NavParams} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/school-detail/school-detail.html'
})
export class SchoolDetailPage {
  
  nav: NavController;
  params: NavParams;
  school: Object;
  
  constructor(nav: NavController, navParams: NavParams) {
    this.nav = nav;
    this.params = navParams;
    this.school = this.params.data.school;  
    
    // console.log("NavParams: ",this.params)
  };
  
}