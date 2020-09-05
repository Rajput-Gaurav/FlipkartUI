import { Component, OnInit } from "@angular/core";
// import MatDialog and MatDialogRef for make component Dialog Component:
import { MatDialog, MatDialogRef } from "@angular/material";
import { LoginComponent } from "../login/login.component";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  // create instance of dialog:
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  // implement openRegisterForm method for open the register component as a dialog component:
  openLoginForm() {
    this.dialog.closeAll(); //for close openLoginForm():
    this.dialog.open(LoginComponent, { width: "500px", height: "450px" });
  }
}
