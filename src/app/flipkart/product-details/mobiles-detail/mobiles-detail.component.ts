import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { MobileServiceService } from "../../../Services/mobile-service.service";
import { Mobile } from "../../../Model/mobile-model";
import { MobileDescription } from "../../../Model/mobileDescription-model";

@Component({
  selector: "app-mobiles-detail",
  templateUrl: "./mobiles-detail.component.html",
  styleUrls: ["./mobiles-detail.component.css"],
})
export class MobilesDetailComponent implements OnInit {
  // create a variable of Mobile model too take the data:
  mobile: Mobile;
  moboDescription: MobileDescription;

  // inject MobileService and ActivatedRoute:
  constructor(
    private route: ActivatedRoute,
    private mobileService: MobileServiceService
  ) {}

  ngOnInit() {
    // synchronnus method for getting id:
    let id = this.route.snapshot.params["id"];

    this.mobileService
      .getSingleMobile(id)
      .subscribe((mobile) => (this.mobile = mobile));
  }
}
