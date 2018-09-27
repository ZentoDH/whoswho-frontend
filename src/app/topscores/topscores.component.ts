import {Component, OnInit} from '@angular/core';
import {TopScoresService} from '../services/topscores.service';
import {Router} from '@angular/router';
import {Player} from '../models/player.model';
import {Game} from '../models/game.model';
import {GameService} from '../services/game.service';
import {DataService} from '../services/data.service';
import {AuthService} from '../services/auth.service';
import {ConvertDurationPipe} from './convertDurationPipe';

@Component({
    selector: 'app-topscores',
    templateUrl: './topscores.component.html',
    styleUrls: ['./topscores.component.css']
})
export class TopscoresComponent implements OnInit {
    date = new Date();
    topScores = [];
    player: Player;
    loading = false;

    constructor(private topScoreService: TopScoresService, private authService: AuthService, private router: Router, private gameService: GameService, private globalData: DataService) {
    }

    ngOnInit() {
        this.globalData.currentUser.subscribe(p => {
            return this.player = p;
        });

        this.topScoreService.getTopScores().subscribe(
            res => {
                this.topScores = res;
            });
    }

    restartGame() {
        this.gameService.startGame(this.player).subscribe(
            (res: Game) => {
                console.log('startgame SUCCESS', res);
                this.globalData.game = res;
                this.loading = true;
                this.router.navigate(['/game']);
            },
            err => {
                console.log('startgame FAIL', err);
            }
        );
    }
}
