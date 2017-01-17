import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './hero.service';
import { HttpModule, JsonpModule }    from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search.component';
import { HighlightDirective } from './test/highlight.directive';
import { HeroListBasicComponent } from './test/flashComponent';
import { WikiComponent } from './wiki/wiki.component';
import { WikiSmartComponent } from './wiki/wiki-smart.component';
import './rxjs-extensions';


@NgModule({
	imports:[
		BrowserModule,
		FormsModule,
		routing,
		HttpModule,
		JsonpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService)
	],
	declarations:[
		AppComponent,
		HeroesComponent,
		HeroDetailComponent,
		DashboardComponent,
		HeroSearchComponent,
		HighlightDirective,
		HeroListBasicComponent,
		WikiComponent,
		WikiSmartComponent
	],
	bootstrap:[
		AppComponent,
	],
	providers:[ HeroService, ]
})

export class AppModule{}