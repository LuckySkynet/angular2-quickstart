import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WikipediaService{
	// 在根模块中导入 JsonpModule 服务
	constructor(private jsonp: Jsonp) {}

	search(term:string){
		let wikiUrl = 'http://en.wikipedia.org/w/api.php';
		
		// 法一：拼接搜索字符串
		// let queryString =`?search=${term}&action=opensearch&format=json&callback=JSONP_CALLBACK`;
		// return this.json.get(wikiUrl + queryString).map(...);

		// 法二：参数化形式，以下四个为基本参数缺一不可
		let params = new URLSearchParams();

		params.set('search',term);
		params.set('action','opensearch');
		params.set('format','json');
		params.set('callback','JSONP_CALLBACK');

		// TODO: Add error handling
		return this.jsonp
				   .get(wikiUrl, { search: params })
				   .map(response=> <string[]> response.json()[1]);
	}
}