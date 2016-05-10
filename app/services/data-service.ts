import { Injectable } from 'angular2/core';
import { Http, URLSearchParams, Response } from "angular2/http";
import "rxjs/add/operator/map";

@Injectable()
export class DataService {
  url = "https://github.com"
  queryParams: URLSearchParams = new URLSearchParams('limits=100')
  
  constructor(private http: Http) { }
  
  getData() {
    return this.http.get(this.url, {search: this.queryParams})
      .map((res => res.json()));
  }

}