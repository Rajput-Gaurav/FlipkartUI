// ElementRef too get the reference of element:
// HostListener too listen all the Host event:
import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appHighlight]",
})
export class HighlightDirective {
  // inject ElementRef:
  constructor(private el: ElementRef) {}

  // create a function onMouseOver():
  // use HostLintener too decorate the method:
  @HostListener("mouseover") onMouseOver() {
    // apply styles:
    this.el.nativeElement.style.border = "2px solid black";
    this.el.nativeElement.style.boxShadow =
      "1px 1px 10px black,1px 1px 10px black";
  }
  // create a function onMouseOut():
  @HostListener("mouseout") onMouseOut() {
    this.el.nativeElement.style.border = "none";
    this.el.nativeElement.style.boxShadow = "none";
  }
}
