import { Component, OnInit } from "@angular/core";
// import data or model class:
import { MobileDescription } from "../../../../Model/mobileDescription-model";
// import Activated route for get the id:
import { ActivatedRoute } from "@angular/router";
// import MobileService:
import { MobileServiceService } from "../../../../Services/mobile-service.service";
import { Mobile } from "src/app/Model/mobile-model";

@Component({
  selector: "app-mobiles-description-detail",
  templateUrl: "./mobiles-description-detail.component.html",
  styleUrls: ["./mobiles-description-detail.component.css"],
})
export class MobilesDescriptionDetailComponent implements OnInit {
  // create a variable too take the data coming from api:
  moboDescription: MobileDescription;

  // inject Activated route and MobileService into constructor:
  constructor(
    private route: ActivatedRoute,
    private mobileService: MobileServiceService
  ) {}

  ngOnInit() {
    // call the getSingleMobile() method inside onInit:
    // take the id:
    let id = this.route.snapshot.params["id"];

    this.mobileService
      .getSingleMobileDescription(id)
      .subscribe((moboDescription) => (this.moboDescription = moboDescription));
  }
}
