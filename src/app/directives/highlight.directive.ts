import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private ref: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.ref.nativeElement.style.backgroundColor = 'green';
  }
}
