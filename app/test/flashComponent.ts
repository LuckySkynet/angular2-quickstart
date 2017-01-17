import {
  Component,
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';
import { Hero } from '../hero';

@Component({
  moduleId: module.id,
  selector: 'hero-list-basic',
  template: `
    <ul>
      <li *ngFor="let hero of heroes"
          [@heroState]="hero.state"
          (click)="toggleState(hero)">
         <div class="form form-help">{{hero | json}}</div>
        {{hero.name}}
      </li>
    </ul>
  `,
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class HeroListBasicComponent {
  @Input() heroes: Hero[];
  hero:Hero;

  toggleState(hero:Hero){
    if(hero.state == 'active'){
      hero.state = 'inactive';
    }else{
      hero.state = 'active';
    }
  }
}
