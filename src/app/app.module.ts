import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

// import angular material modules:
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";

// import NgbModule for implementing slider:
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

// components:
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HeaderComponent } from "./Shared/header/header.component";
import { FooterComponent } from "./Shared/footer/footer.component";
import { NavbarComponent } from "./Shared/navbar/navbar.component";
import { PageNotFoundComponent } from "./Shared/page-not-found/page-not-found.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SliderComponent } from "./Shared/slider/slider.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    PageNotFoundComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    NgbModule,
    MatDialogModule,
    MatInputModule,
  ],
  providers: [],
  entryComponents: [LoginComponent, RegisterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
