"use strict";
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
exports.HighlightDirective = void 0;
var core_1 = require("@angular/core");
var HighlightDirective = /** @class */ (function () {
    function HighlightDirective(el) {
        this.el = el;
    }
    HighlightDirective.prototype.onMouseEnter = function () {
        this.setColor(this.highlightColor || 'red');
    };
    HighlightDirective.prototype.onMouseLeave = function () {
        this.setColor(null);
    };
    HighlightDirective.prototype.setColor = function (color) {
        this.el.nativeElement.style.backgroundColor = color;
    };
    __decorate([
        (0, core_1.Input)('appHighlight'),
        __metadata("design:type", String)
    ], HighlightDirective.prototype, "highlightColor", void 0);
    __decorate([
        (0, core_1.HostListener)('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighlightDirective.prototype, "onMouseEnter", null);
    __decorate([
        (0, core_1.HostListener)('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighlightDirective.prototype, "onMouseLeave", null);
    HighlightDirective = __decorate([
        (0, core_1.Directive)({
            selector: '[appHighlight]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], HighlightDirective);
    return HighlightDirective;
}());
exports.HighlightDirective = HighlightDirective;
//# sourceMappingURL=highlight.directive.js.map