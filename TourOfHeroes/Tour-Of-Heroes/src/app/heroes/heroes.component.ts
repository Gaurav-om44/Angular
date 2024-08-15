import { Component} from '@angular/core';
import { Hero } from '../../Hero';
import {HEROES} from '../mock-heroes';
import { NgFor, UpperCasePipe } from '@angular/common';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from "../hero-detail-component/hero-detail-component.component";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  standalone : true,
  imports : [NgFor,NgIf,UpperCasePipe,FormsModule,HeroDetailComponent]
})
export class HeroesComponent {

heroes = HEROES;
selectedHero?: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

}

  
