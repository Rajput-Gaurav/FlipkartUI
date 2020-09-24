import { Component, OnInit } from "@angular/core";
// import matDialog and matDialogRef:
import { MatDialog, MatDialogRef } from "@angular/material";
import { LoginComponent } from "../../login/login.component";
// import mobileService:
import { MobileServiceService } from "../../Services/mobile-service.service";
// import mobileModel:
import { Mobile } from "../../Model/mobile-model";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  // create a variable too get all the data of mobile:
  mobile: Mobile[] = [];

  // create instance of dialog:
  constructor(
    public dialog: MatDialog,
    private mobileService: MobileServiceService
  ) {}

  ngOnInit() {
    this.mobileService.getMobiles().subscribe((mobile: Mobile[]) => {
      this.mobile = mobile;
    });
  }

  // implement openLoginForm method for open the login component as a dialog component:
  openLoginForm() {
    this.dialog.open(LoginComponent, { width: "500px", height: "450px" });
  }
}
