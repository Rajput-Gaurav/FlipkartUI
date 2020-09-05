import { Component, OnInit } from "@angular/core";
// import MatDialog and MatDialogRef for make component Dialog Component:
import { MatDialog, MatDialogRef } from "@angular/material";
import { RegisterComponent } from "./../register/register.component";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  // create instance of dialog:
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  // implement openRegisterForm method for open the register component as a dialog component:
  openRegisterForm() {
    this.dialog.closeAll(); //for close openLoginForm():
    this.dialog.open(RegisterComponent, { width: "500px", height: "450px" });
  }
}
