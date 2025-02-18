// Custom "Copy to Clipboard" Directive
// Objective: Create a directive that copies provided text to the clipboard when the host element is clicked.

import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[textCopy]'
})
export class CopyTextDirective {
  @Input('textCopy') text: string;

  @HostListener('click') onClick(): void {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.style.position = 'fixed';
    textarea.style.top = '-999px';
    textarea.style.left = '-999px';
    textarea.style.width = '2em';
    textarea.style.height = '2em';
    textarea.style.padding = '0';
    textarea.style.border = 'none';
    textarea.style.outline = 'none';
    textarea.style.boxShadow = 'none';
    textarea.style.background = 'transparent';
    textarea.value = this.text;
    document.body.appendChild(textarea);
    textarea.select();

    try {
      const successful = document.execCommand('copy');
      console.log(successful ? 'Copy successful' : 'Copy unsuccessful');
    } catch (err) {
      console.error('Unable to copy', err);
    }

    document.body.removeChild(textarea);
  }
}
/**
 * Explanation:

The directive listens for click events on its host element.
When clicked, it creates a hidden <textarea>, sets its value to the provided text, and uses document.execCommand('copy') to copy the text.
Finally, it cleans up by removing the temporary element.
 */