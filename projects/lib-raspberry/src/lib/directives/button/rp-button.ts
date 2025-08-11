import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'button [RpButton]',
})
export class RpButton {
  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef<HTMLInputElement>
  ) {
    const element = elementRef.nativeElement;
    this.renderer.addClass(element, 'rp-button');
  }
}
