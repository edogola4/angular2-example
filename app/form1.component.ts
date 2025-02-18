import { Component } from '@angular/core';

@Component({
  selector: 'example',
  template: `
    <!-- Render each fruit inside a div -->
    <div *ngFor="let f of fruit"> {{ f }} </div>
    
    <!-- Populate a select dropdown with fruit options -->
    <select required>
      <option *ngFor="let f of fruit" [value]="f"> {{ f }} </option>
    </select>
  `
})
export class Form1Component {
  fruit = ['Apples', 'Oranges', 'Bananas', 'Limes', 'Lemons'];
}
