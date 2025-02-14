import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AppComponent } from "../app.component";

import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero:Hero;
  
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private appComp: AppComponent
  ) {}
  ngOnInit(): void {
    this.getHero();
    
  }
  
  getHero(): void {
    this.appComp.inComponent = true
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack():void {
    this.location.back();
    this.appComp.inComponent = false
  }

}
