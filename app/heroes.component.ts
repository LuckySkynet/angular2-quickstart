import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
	// 显示英雄列表
	selector:'my-heroes',
	templateUrl:'app/heroes.component.html',
	styleUrls:['app/heroes.component.css'],
})

export class HeroesComponent implements OnInit{
	test = {id:1,name:'skynet'}

	heroes:Hero[];
	selectedHero:Hero;
	constructor(
		private heroService:HeroService,
		private router:Router
	){}

	getHeroes(){
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	ngOnInit(){
		this.getHeroes();
	}

	onSelect(hero:Hero) {
		this.selectedHero = hero;
	}

	gotoDetail(){
		// 在方法中的属性若要被this前缀的属性访问，则必须声明类型例如let const
		this.router.navigate(['/detail', this.selectedHero.id]);
	}

	add(name:string){
		name = name.trim();
		if(!name){return;}
		this.heroService.create(name).then(hero=>{
			this.heroes.push(hero);
			// 清空选择的hero
			this.selectedHero = null;
		})
	}

	delete(hero:Hero){
		this.heroService.delete(hero.id).then(()=>{
			this.heroes = this.heroes.filter(h=> h !== hero);
			if(this.selectedHero === hero) {this.selectedHero == null;}
		});
	}

	setUpperCaseFirstName(event:any){
		this.test.name = event.toUpperCase();
	}
}	