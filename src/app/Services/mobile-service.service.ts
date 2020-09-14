import { Injectable } from "@angular/core";
import { Mobile } from "../Model/mobile-model";
import { MobileDescription } from "../Model/mobileDescription-model";
import { baseUrl } from "../config/api";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MobileServiceService {
  // create a api url too fetch the data from api:
  apiUrl = baseUrl + "/mobiles";

  // create a variable mobiles too take the data of api:
  mobiles: Mobile[] = [];
  moboDescription: MobileDescription[] = [];

  // inject HttpClient and create an instance:
  constructor(private http: HttpClient) {}

  // method too get all the posts:
  getMobiles(): Observable<Mobile[]> {
    return this.http.get<Mobile[]>(this.apiUrl);
  }

  // method too get a single mobile with id:
  getSingleMobile(id: number): Observable<Mobile> {
    return this.http.get<Mobile>(this.apiUrl + "/" + id);
  }
  // method too get a single mobile with id and mobile description:
  getSingleMobileDescription(id: number): Observable<MobileDescription> {
    return this.http.get<MobileDescription>(this.apiUrl + "/" + id);
  }
}
