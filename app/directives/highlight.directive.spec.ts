import { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

// Create a dummy container component for testing
@Component({
  template: `
    <div>
      <span id="default" appHighlight>Default Highlight</span>
      <span id="custom" [appHighlight]="'green'">Green Highlight</span>
      <span id="none">No Highlight</span>
    </div>
  `
})
class TestContainerComponent { }

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<TestContainerComponent>;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestContainerComponent, HighlightDirective]
    });
    fixture = TestBed.createComponent(TestContainerComponent);
    fixture.detectChanges();
    element = fixture.nativeElement;
  });

  it('should not have background color initially', () => {
    const span = element.querySelector('#default') as HTMLElement;
    expect(span.style.backgroundColor).toBe('');
  });

  it('should set default highlight color (red) on mouse enter', () => {
    const span = element.querySelector('#default') as HTMLElement;
    span.dispatchEvent(new Event('mouseenter'));
    expect(span.style.backgroundColor).toBe('red');
  });

  it('should set custom highlight color (green) on mouse enter', () => {
    const span = element.querySelector('#custom') as HTMLElement;
    span.dispatchEvent(new Event('mouseenter'));
    expect(span.style.backgroundColor).toBe('green');
  });

  it('should remove background color on mouse leave', () => {
    const span = element.querySelector('#custom') as HTMLElement;
    span.dispatchEvent(new Event('mouseenter'));
    span.dispatchEvent(new Event('mouseleave'));
    expect(span.style.backgroundColor).toBe('');
  });
});
