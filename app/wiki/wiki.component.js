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
var core_1 = require('@angular/core');
var wikipedia_service_1 = require('./wikipedia.service');
var WikiComponent = (function () {
    function WikiComponent(wikipediaService) {
        this.wikipediaService = wikipediaService;
    }
    WikiComponent.prototype.search = function (term) {
        // this.items = this.wikipediaService.search(term);
        this.items = this.wikipediaService.search(term);
    };
    WikiComponent = __decorate([
        core_1.Component({
            selector: 'my-wiki',
            template: "\n\t\t<h1>Wikipedia Demo</h1>\n\t    <p><i>Fetches after each keystroke</i></p>\n\t    <input #term (keyup)=\"search(term.value)\"/>\n\t    <ul>\n\t      <li *ngFor=\"let item of items | async\">{{item}}</li>\n\t    </ul>\n\t",
            providers: [wikipedia_service_1.WikipediaService]
        }), 
        __metadata('design:paramtypes', [wikipedia_service_1.WikipediaService])
    ], WikiComponent);
    return WikiComponent;
}());
exports.WikiComponent = WikiComponent;
//# sourceMappingURL=wiki.component.js.map