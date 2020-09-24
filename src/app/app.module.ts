import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

// import NgbModule for implementing slider:
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

// import angular material modules:
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";

// import flipkart module:
import { FlipkartModule } from "./flipkart/flipkart.module";
import { AppRoutingModule } from "./app-routing.module";
// import HttpClientModule for fetching data through api or server:
import { HttpClientModule } from "@angular/common/http";

import { FlexLayoutModule } from "@angular/flex-layout";

// components:
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HeaderComponent } from "./Shared/header/header.component";

import { NavbarComponent } from "./Shared/navbar/navbar.component";
import { PageNotFoundComponent } from "./Shared/page-not-found/page-not-found.component";

import { FooterComponent } from "./Shared/footer/footer.component";
import { FooterOneComponent } from "./Shared/footer/footer-one/footer-one.component";
import { FooterTwoComponent } from "./Shared/footer/footer-two/footer-two.component";
import { FooterThreeComponent } from "./Shared/footer/footer-three/footer-three.component";

// Pipes:
import { SearchPipe } from "./pipes/search.pipe";
import { MyUppercasePipe } from "./pipes/my-uppercase.pipe";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    PageNotFoundComponent,
    FooterOneComponent,
    FooterTwoComponent,
    FooterThreeComponent,
    SearchPipe,
    MyUppercasePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatDialogModule,
    MatInputModule,
    FlipkartModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FlexLayoutModule,
  ],
  providers: [],
  entryComponents: [LoginComponent, RegisterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
