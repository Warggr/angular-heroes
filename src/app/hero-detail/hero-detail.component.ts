import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { ScryScaperService } from '../scryscaper.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
  	private route: ActivatedRoute,
  	private scryScape: ScryScaperService,
  	private location: Location
  ) {}

  ngOnInit(): void {
  	this.getHero();
  }

  getHero(): void {
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.scryScape.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void {
  	this.location.back();
  }

  save(): void {
    this.scryScape.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

}