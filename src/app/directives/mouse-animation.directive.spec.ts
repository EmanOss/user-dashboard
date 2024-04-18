import { ElementRef } from '@angular/core';
import { MouseAnimationDirective } from './mouse-animation.directive';

describe('MouseAnimationDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = {} as ElementRef;
    const directive = new MouseAnimationDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
