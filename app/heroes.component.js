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
var router_1 = require('@angular/router');
var hero_service_1 = require('./hero.service');
var HeroesComponent = (function () {
    function HeroesComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        this.test = { id: 1, name: 'skynet' };
    }
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.gotoDetail = function () {
        // 在方法中的属性若要被this前缀的属性访问，则必须声明类型例如let const
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    HeroesComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.create(name).then(function (hero) {
            _this.heroes.push(hero);
            // 清空选择的hero
            _this.selectedHero = null;
        });
    };
    HeroesComponent.prototype.delete = function (hero) {
        var _this = this;
        this.heroService.delete(hero.id).then(function () {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero == null;
            }
        });
    };
    HeroesComponent.prototype.setUpperCaseFirstName = function (event) {
        this.test.name = event.toUpperCase();
    };
    HeroesComponent = __decorate([
        core_1.Component({
            // 显示英雄列表
            selector: 'my-heroes',
            templateUrl: 'app/heroes.component.html',
            styleUrls: ['app/heroes.component.css'],
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map