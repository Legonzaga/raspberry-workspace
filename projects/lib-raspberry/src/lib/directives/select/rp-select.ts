import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'select[rpSelect]'
})
export class RpSelect {

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {
    const element = elementRef.nativeElement;
    this.renderer.addClass( element, 'rp-select');
   }
}
