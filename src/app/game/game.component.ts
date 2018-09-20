import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  
  game:Game;
  roundCount: number = 0;
  round: object;
  rightPerson: object;

  constructor(private data: DataService) { }

  ngOnInit() {
    console.log("TEST INPUT", this.data.game);
    this.game = this.data.game;

    this.round = this.game[this.roundCount];
  }

  nextRound(){
    this.round = this.game[this.roundCount];
    this.game.rounds.forEach(element => {
      
    });

    this.roundCount++;
  }


}
