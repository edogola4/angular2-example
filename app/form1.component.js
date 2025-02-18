"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form1Component = void 0;
var core_1 = require("@angular/core");
var Form1Component = /** @class */ (function () {
    function Form1Component() {
        this.fruit = ['Apples', 'Oranges', 'Bananas', 'Limes', 'Lemons'];
    }
    Form1Component = __decorate([
        (0, core_1.Component)({
            selector: 'example',
            template: "\n    <!-- Render each fruit inside a div -->\n    <div *ngFor=\"let f of fruit\"> {{ f }} </div>\n    \n    <!-- Populate a select dropdown with fruit options -->\n    <select required>\n      <option *ngFor=\"let f of fruit\" [value]=\"f\"> {{ f }} </option>\n    </select>\n  "
        })
    ], Form1Component);
    return Form1Component;
}());
exports.Form1Component = Form1Component;
//# sourceMappingURL=form1.component.js.map