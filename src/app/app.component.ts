import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import '../../public/css/styles.css';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    styles: [require('./app.component.css')],
    directives: [HeroDetailComponent],
    providers: [HeroService]
})
export class AppComponent implements OnInit {
    heroes: Hero[];
    title = 'Tour of Heroes';
    selectedHero: Hero;

    constructor(private heroService: HeroService) { }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    getHeroes() {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes);
    }

}