"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var core_1 = require("@angular/core");
var highlight_directive_1 = require("./highlight.directive");
// Create a dummy container component for testing
var TestContainerComponent = /** @class */ (function () {
    function TestContainerComponent() {
    }
    TestContainerComponent = __decorate([
        (0, core_1.Component)({
            template: "\n    <div>\n      <span id=\"default\" appHighlight>Default Highlight</span>\n      <span id=\"custom\" [appHighlight]=\"'green'\">Green Highlight</span>\n      <span id=\"none\">No Highlight</span>\n    </div>\n  "
        })
    ], TestContainerComponent);
    return TestContainerComponent;
}());
describe('HighlightDirective', function () {
    var fixture;
    var element;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [TestContainerComponent, highlight_directive_1.HighlightDirective]
        });
        fixture = testing_1.TestBed.createComponent(TestContainerComponent);
        fixture.detectChanges();
        element = fixture.nativeElement;
    });
    it('should not have background color initially', function () {
        var span = element.querySelector('#default');
        expect(span.style.backgroundColor).toBe('');
    });
    it('should set default highlight color (red) on mouse enter', function () {
        var span = element.querySelector('#default');
        span.dispatchEvent(new Event('mouseenter'));
        expect(span.style.backgroundColor).toBe('red');
    });
    it('should set custom highlight color (green) on mouse enter', function () {
        var span = element.querySelector('#custom');
        span.dispatchEvent(new Event('mouseenter'));
        expect(span.style.backgroundColor).toBe('green');
    });
    it('should remove background color on mouse leave', function () {
        var span = element.querySelector('#custom');
        span.dispatchEvent(new Event('mouseenter'));
        span.dispatchEvent(new Event('mouseleave'));
        expect(span.style.backgroundColor).toBe('');
    });
});
//# sourceMappingURL=highlight.directive.spec.js.map