import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// import routerModule and routes:
import { Routes, RouterModule, Router } from "@angular/router";
// import components inside of flipkart:
import { ProfileComponent } from "./profile/profile.component";
import { ProductListComponent } from "./product/product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { MobilesDetailComponent } from "./product-details/mobiles-detail/mobiles-detail.component";
import { MobilesComponent } from "./product/product-list/mobiles/mobiles.component";

// create a child route for flipkart component:
const routes: Routes = [
  { path: "product/list", component: ProductListComponent },
  // { path: "product/details/:id", component: ProductDetailsComponent },

  { path: "mobiles", component: MobilesComponent },
  { path: "mobiles/:id", component: MobilesDetailComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class FlipkartRoutingModule {}
