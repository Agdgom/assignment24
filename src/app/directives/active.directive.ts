import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appActive]',
})
export class ActiveDirective {
  constructor(private ref: ElementRef) {}

  @HostListener('click')
  onClick() {
    this.ref.nativeElement.style.backgroundColor = 'yellow';
  }
}
