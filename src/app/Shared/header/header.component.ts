import { Component, OnInit } from "@angular/core";
// import matDialog and matDialogRef:
import { MatDialog, MatDialogRef } from "@angular/material";
import { LoginComponent } from "../../login/login.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  // create instance of dialog:
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  // implement openLoginForm method for open the login component as a dialog component:
  openLoginForm() {
    this.dialog.open(LoginComponent, { width: "500px", height: "450px" });
  }
}
