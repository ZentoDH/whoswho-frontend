import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';

@Injectable({
    providedIn: 'root',
  })
export class DataService {
  game: Game;
}