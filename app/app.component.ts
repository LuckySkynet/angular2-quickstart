import { Component } from '@angular/core';

@Component({
	selector:'my-app',
	template:`
	<h1>{{title}}</h1>
	<nav>
		<a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
		<a routerLink="/heroes" routerLinkActive="active">Heroes</a>
		<a routerLink="/wiki" routerLinkActive="active">Wikipedia</a>
	</nav>
	<router-outlet></router-outlet>
	<h1 highlight>{{title}}</h1>
	`,
	styleUrls:['app/app.component.css']
})

export class AppComponent {
	title = 'Tour of Hero';
}