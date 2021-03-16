import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { ScryScaperService } from '../scryscaper.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-planeswalkers',
  templateUrl: './planeswalkers.component.html',
  styleUrls: ['./planeswalkers.component.css']
})
export class PlaneswalkersComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: ScryScaperService, private messageService: MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}