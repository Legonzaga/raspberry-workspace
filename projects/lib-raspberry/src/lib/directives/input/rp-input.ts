import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'input [rpInput]',
  standalone: true,
})
export class RpInput {

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef<HTMLInputElement>
  ) {
    const element = elementRef.nativeElement;
    this.renderer.addClass( element, 'rp-input');
   }

}
