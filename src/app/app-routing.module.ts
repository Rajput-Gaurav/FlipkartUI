import { ProfileComponent } from "./flipkart/profile/profile.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// import routes and routerModule:
import { Routes, RouterModule } from "@angular/router";
// import components:
import { FlipkartComponent } from "./flipkart/flipkart.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { PageNotFoundComponent } from "./Shared/page-not-found/page-not-found.component";

// create an array of route:
const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" }, //redirect too login page:
  { path: "home", component: FlipkartComponent },
  { path: "profile", component: ProfileComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "**", component: PageNotFoundComponent },
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
