import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import { Hero } from './hero';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService{

	// 访问远程服务器数据（服务器访问JSON对象数组）
	// private heroesUrl = 'http://127.0.0.1:8080/app/heroes';
	private heroesUrl = 'app/heroes';
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http:Http){}

	getHeroes():Promise<Hero[]>{
		return this.http.get(this.heroesUrl)
						.toPromise()
						.then((r:Response)=>{
							// 注意：若使用远程获取JSON对象，则使用r.json() 替代 r.json().data 
							console.log(r.json());
							return r.json().data as Hero[];
						})
						.catch(this.handleError);
	}

	getHero(id:number):Promise<Hero>{
		return this.getHeroes().then(heroes=>heroes.find(hero=>hero.id === id));
	}

	handleError(error:any):Promise<any>{
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}

	update(hero:Hero):Promise<Hero>{
		const url = `${this.heroesUrl}/${hero.id}`;
		return this.http
			.put(url,JSON.stringify(hero),{headers:this.headers})
			.toPromise()
			.then(()=>hero)
			.catch(this.handleError);
	}

	create(name:string):Promise<Hero>{
		return this.http
		    .post(this.heroesUrl,JSON.stringify({name:name}),{headers:this.headers})
		    .toPromise()
		    .then(response=>response.json().data)
		    .catch(this.handleError);
	}

	delete(id:number):Promise<void>{
		const url = `${this.heroesUrl}/${id}`;
		return this.http
			.delete(url,{headers:this.headers})
			.toPromise()
			.then(()=>null)
			.catch(this.handleError);
	}
}