"use strict";
// Custom "Copy to Clipboard" Directive
// Objective: Create a directive that copies provided text to the clipboard when the host element is clicked.
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
exports.CopyTextDirective = void 0;
var core_1 = require("@angular/core");
var CopyTextDirective = /** @class */ (function () {
    function CopyTextDirective() {
    }
    CopyTextDirective.prototype.onClick = function () {
        // Create a temporary textarea element
        var textarea = document.createElement('textarea');
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
            var successful = document.execCommand('copy');
            console.log(successful ? 'Copy successful' : 'Copy unsuccessful');
        }
        catch (err) {
            console.error('Unable to copy', err);
        }
        document.body.removeChild(textarea);
    };
    __decorate([
        (0, core_1.Input)('textCopy'),
        __metadata("design:type", String)
    ], CopyTextDirective.prototype, "text", void 0);
    __decorate([
        (0, core_1.HostListener)('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CopyTextDirective.prototype, "onClick", null);
    CopyTextDirective = __decorate([
        (0, core_1.Directive)({
            selector: '[textCopy]'
        })
    ], CopyTextDirective);
    return CopyTextDirective;
}());
exports.CopyTextDirective = CopyTextDirective;
/**
 * Explanation:

The directive listens for click events on its host element.
When clicked, it creates a hidden <textarea>, sets its value to the provided text, and uses document.execCommand('copy') to copy the text.
Finally, it cleans up by removing the temporary element.
 */ 
//# sourceMappingURL=copy-text.directive.js.map