import { Component, OnInit } from "@angular/core";
// import NgbCarousel for control slider:
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"],
  providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})
export class SliderComponent implements OnInit {
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {}
}
//for installing ng-bootstrap for angular6
//npm install --save @ng-bootstrap/ng-bootstrap@3.3.1
