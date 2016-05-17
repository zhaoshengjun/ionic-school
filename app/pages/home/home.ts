import {Page, NavController, NavParams, Modal} from 'ionic-angular';

import {SchoolDetailPage} from '../school-detail/school-detail';
import { FilterPage } from '../filter/filter';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  schools: Object[];
  nav: NavController;
  
  constructor(nav: NavController, navParams: NavParams) {
    this.nav = nav;
    console.log("navcontroller: ", nav);
    console.log("navparams: ", navParams);
    
    
    
    this.schools = [
      {
        "id": 1,
        "name": "Harvard University",
        "image": "Harvard_University",
        "location": "Cambridge, Massachusetts",
        "types": "Private Not-For-Profit",
        "years": "4 Year College"
      },
      {
        "id": 2,
        "name": "Princeton University",
        "image": "Princeton_University",
        "location": "Princeton, New Jersey",
        "types": "Private Not-For-Profit",
        "years": "4 Year College"
      },
      {
        "id": 3,
        "name": "Yale University",
        "image": "Yale_University",
        "location": "New Haven, Connecticut",
        "types": "Private Not-For-Profit",
        "years": "4 Year College"
      },
      {
        "id": 4,
        "name": "Massachusetts Institute of Technology",
        "image": "Massachusetts_Institute_of_Technology",
        "location": "Cambridge, Massachusetts",
        "types": "Private Not-For-Profit",
        "years": "4 Year College"
      },
      {
        "id": 5,
        "name": "Stanford University",
        "image": "Stanford_University",
        "location": "Stanford, California",
        "types": "Private Not-For-Profit",
        "years": "4 Year College"
      },
      {
        "id": 6,
        "name": "California Institute of Technology	",
        "image": "California_Institute_of_Technology",
        "location": "Pasadena, California",
        "types": "Private Not-For-Profit",
        "years": "4 Year College"
      },
      {
        "id": 7,
        "name": "Columbia University in the City of New York",
        "image": "Columbia_University_in_the_City_of_New_York",
        "location": "New York, New York",
        "types": "Private Not-For-Profit",
        "years": "4 Year College"
      },
      {
        "id": 8,
        "name": "Pomona College",
        "image": "Pomona_College",
        "location": "Claremont, California",
        "types": "Private Not-For-Profit",
        "years": "4 Year College"
      }
    ];
  }
  
  showDetails(school) {
    console.log("Show details for: ",school);
    this.nav.push(SchoolDetailPage, {
      school: school
    })
  }
  
  showFilters() {
    let filter = Modal.create(FilterPage);
    this.nav.present(filter);
  }
}
