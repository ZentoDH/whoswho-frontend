import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
export class DataService {
  game: Game;

  constructor(){ }
}