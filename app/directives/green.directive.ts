// A. Basic Custom Directive
// Objective: Create a directive that sets the text color of an element to green.



import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[green]'
})
export class GreenDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    // Apply the green color to the host element
    renderer.setElementStyle(elementRef.nativeElement, 'color', 'green');
  }
}

/**
 * Explanation:

The directive uses the @Directive decorator with a selector [green].
In the constructor, it sets the text color to green by interacting with the DOM via Renderer.
 */