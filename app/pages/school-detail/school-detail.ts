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
    this.school = this.params.data.school;  3
    this.initMap();
    
    // console.log("NavParams: ",this.params)
    
  };
  
  initMap() {
    console.log("Should get a map", this);
    let mapDiv = document.getElementById('map');
    return new google.maps.Map(document.getElementById('map_canvas'), {
                zoom: 12,
                center: new google.maps.LatLng(38.50, -90.50),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
  }
}