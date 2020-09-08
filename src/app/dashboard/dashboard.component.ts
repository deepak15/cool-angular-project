import { Component, OnInit } from '@angular/core';
import { Hero } from './../model/hero';
//import { from } from 'rxjs';
import { HeroService } from './../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  heroes: Hero[] = [];

  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
    this.getHeros();
  }

  getHeros():void {
    this.heroService.getHeros().subscribe(heros => this.heroes = heros.slice(1, 5));
  }
}
