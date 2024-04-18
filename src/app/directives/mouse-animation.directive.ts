import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class MouseAnimationDirective {
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.style.backgroundColor = '#a6a';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.style.backgroundColor = 'transparent';
  }
}
