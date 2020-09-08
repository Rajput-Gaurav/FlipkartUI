import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// import forms module:
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatRadioModule } from "@angular/material/radio";
import { MatListModule } from "@angular/material/list";

// import NgbModule for implementing slider:
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

// import flipkart-routing module:
import { FlipkartRoutingModule } from "./flipkart-routing.module";
import { FlexLayoutModule } from "@angular/flex-layout";

// import components of flipkart:
import { SliderComponent } from "../Shared/slider/slider.component";
import { FlipkartComponent } from "./flipkart.component";
import { ProductComponent } from "./product/product.component";
import { ProductListComponent } from "./product/product-list/product-list.component";
import { ProductItemComponent } from "./product/product-list/product-item/product-item.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProfileComponent } from "./profile/profile.component";
import { ManageAccountComponent } from "./profile/manage-account/manage-account.component";
import { UserInformationComponent } from "./profile/user-information/user-information.component";
import { MobilesComponent } from './product/product-list/mobiles/mobiles.component';
import { MobilesDetailComponent } from './product-details/mobiles-detail/mobiles-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    FlipkartRoutingModule,
    NgbModule,
    FlexLayoutModule,
    MatListModule,
  ],
  declarations: [
    SliderComponent,
    FlipkartComponent,
    ProductComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    ProfileComponent,
    ManageAccountComponent,
    UserInformationComponent,
    MobilesComponent,
    MobilesDetailComponent,
  ],
  // export only one component which is main component:
  exports: [FlipkartComponent],
})
export class FlipkartModule {}
