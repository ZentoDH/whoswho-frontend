import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import {GameService} from '../services/game.service';
import {Player} from '../models/player.model';
import {environment} from '../../environments/environment';
import {DataService} from '../services/data.service';
import {Game} from '../models/game.model';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    player: Player;
    loading: boolean = false;

    constructor(private router: Router, private gameService: GameService, private globalData: DataService, private authService: AuthService) {
    }

    ngOnInit() {
        this.globalData.currentUser.subscribe(p => {
            return this.player = p;
        });

    }

    startGame() {
        /* MOCK USER
        this.player = new Player();
        this.player.id = 'bd9d0966-f7c2-413b-916b-886418ba5eaa';
        this.player.displayName = 'Arne Van Bael';
        this.player.givenName = 'Arne';
        this.player.surName = null;
        this.player.sex = 'MALE';
        MOCK USER END */

        console.log(this.player);

        this.loading = true;

        this.gameService.startGame(this.player).subscribe(
            (res: Game) => {
                console.log('startgame SUCCESS', res);
                this.globalData.game = res;
                this.router.navigate(['/game']);
            },
            err => {
                console.log('startgame FAIL', err);
            }
        );
    }

    topScores() {
        this.router.navigate(['/topscores']);
    }


}
