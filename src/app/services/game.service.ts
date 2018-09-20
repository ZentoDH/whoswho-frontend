import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Player } from '../models/player.model';


@Injectable({
  providedIn: 'root',
})
export class GameService {
  apiURL=environment.apiurl+"/games"

  constructor(private http: HttpClient) {}

  startGame(player:Player){
    return this.http.post(this.apiURL + "/create", player);
  }
}