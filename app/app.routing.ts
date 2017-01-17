import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { WikiComponent } from './wiki/wiki.component';
import { WikiSmartComponent } from './wiki/wiki-smart.component';

const appRoutes:Routes = [ 
	{
		path:'heroes',
		component:HeroesComponent
	},
	{
		path:'dashboard',
		component:DashboardComponent
	},
	{
		path:'',
		redirectTo:'/dashboard',
		pathMatch:'full'
	},
	{
		path:'detail/:id',
		component:HeroDetailComponent
	},
	{
		path:'wiki',
		// component:WikiComponent
		component:WikiSmartComponent
	},

];

// 导出路由数组
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);