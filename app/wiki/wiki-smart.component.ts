import { Component } from '@angular/core';
import { Observable }       from 'rxjs/Observable';
import { Subject } from 'rxjs/subject';
import { WikipediaService } from './wikipedia.service';

@Component({
	selector:'my-wiki',
	template:`
		<h1>Wikipedia Demo</h1>
	    <p><i>Fetches after each keystroke</i></p>
	    <input #term (keyup)="search(term.value)"/>
	    <ul>
	      <li *ngFor="let item of items | async">{{item}}</li>
	    </ul>
	`,
	providers: [WikipediaService]
})

export class WikiSmartComponent {

	constructor(private wikipedisService:WikipediaService){}

	private searchTermStream = new Subject<string>();

	search(term:string){
		this.searchTermStream.next(term);
	}

	item:Observable<string[]> = this.searchTermStream.debounceTime(300).distinctUntilChanged().switchMap((term:string)=>this.wikipedisService.search(term));

}