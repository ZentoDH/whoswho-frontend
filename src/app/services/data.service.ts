import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';
import {Player} from '../models/player.model';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
export class DataService {
  game: Game;
  currentUser = new BehaviorSubject<Player>(undefined);
}
