"use strict";
// A. Basic Custom Directive
// Objective: Create a directive that sets the text color of an element to green.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreenDirective = void 0;
var core_1 = require("@angular/core");
var GreenDirective = /** @class */ (function () {
    function GreenDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        // Apply the green color to the host element
        renderer.setElementStyle(elementRef.nativeElement, 'color', 'green');
    }
    GreenDirective = __decorate([
        (0, core_1.Directive)({
            selector: '[green]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
    ], GreenDirective);
    return GreenDirective;
}());
exports.GreenDirective = GreenDirective;
/**
 * Explanation:

The directive uses the @Directive decorator with a selector [green].
In the constructor, it sets the text color to green by interacting with the DOM via Renderer.
 */ 
//# sourceMappingURL=green.directive.js.map