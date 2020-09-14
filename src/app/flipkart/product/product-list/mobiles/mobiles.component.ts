import { Component, OnInit } from "@angular/core";
import { Mobile } from "../../../../Model/mobile-model";
import { MobileServiceService } from "../../../../Services/mobile-service.service";

@Component({
  selector: "app-mobiles",
  templateUrl: "./mobiles.component.html",
  styleUrls: ["./mobiles.component.css"],
})
export class MobilesComponent implements OnInit {
  // create a variable too take aal the data coming from service or api:
  mobiles: Mobile[];

  // inject mobileService:
  constructor(private mobileService: MobileServiceService) {}

  ngOnInit() {
    this.getMobiles();
  }

  getMobiles() {
    this.mobileService.getMobiles().subscribe((mobiles: Mobile[]) => {
      this.mobiles = mobiles;
    });
  }
}
