import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {
    private heroesURL = 'api/heroes';

  constructor(
    private http: HttpClient,
    private messageService: MessageService)
     { }

  getHeroes(): Observable<Hero[]> {
    // send the message _after_ fetching the heroes
    // this.messageService.add('Warning: fetched bullshit');
    return this.http.get<Hero[]>(this.heroesURL)
  }
  
  getHero(id: number): Observable<Hero> {
    // send the message _after_ fetching the hero
    this.messageService.add(`Warning: fetched bullshit hero of id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  private log(message: string) {
    this.messageService.add('HeroService:'+ message)
   }
}
