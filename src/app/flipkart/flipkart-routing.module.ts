import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// import routerModule and routes:
import { Routes, RouterModule, Router } from "@angular/router";
// import components inside of flipkart:
import { ProfileComponent } from "./profile/profile.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";

// create a child route for flipkart component:
const routes: Routes = [
  { path: "product/list", component: ProductListComponent },
  { path: "product/details/:id", component: ProductDetailsComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class FlipkartRoutingModule {}
