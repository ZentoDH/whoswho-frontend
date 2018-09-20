import {Component, OnInit} from '@angular/core';
import {TopScoresService} from '../services/topscores.service';
import {TopScore} from '../models/topScore.model';
import {AuthService} from '../services/auth.service';

@Component({
    selector: 'app-topscores',
    templateUrl: './topscores.component.html',
    styleUrls: ['./topscores.component.css']
})
export class TopscoresComponent implements OnInit {
    date = new Date();
    topScores: Array<TopScore>;
    id = '1';

    constructor(private topScoreService: TopScoresService) {
    }

    ngOnInit() {
        //this.topScores = this.topScoreService.getTopScores();
        this.topScores = [
            new TopScore('1', 'Arne', 'Hendrickx', 20, 123123123, 15),
            new TopScore('2', 'Vincent', 'Hendrickx', 19, 123123123, 15),
            new TopScore('3', 'Zento', 'Hendrickx', 17, 123123123, 15),
            new TopScore('4', 'Bram', 'Hendrickx', 16, 123123123, 15),
            new TopScore('5', 'Jorgi', 'Hendrickx', 12, 123123123, 15),
            new TopScore('6', 'Jelle', 'Hendrickx', 11, 123123123, 15),
            new TopScore('7', 'Lode', 'Hendrickx', 10, 123123123, 15),
            new TopScore('8', 'Lieven', 'Hendrickx', 20, 123123123, 15),
            new TopScore('9', 'Robbe', 'Hendrickx', 10, 123123123, 15),
            new TopScore('10', 'Jakkie', 'Hendrickx', 10, 123123123, 15),
            new TopScore('11', 'Jonathan', 'Hendrickx', 10, 123123123, 15),
            new TopScore('12', 'Gregory', 'Hendrickx', 10, 123123123, 15),
            new TopScore('13', 'Ronald', 'Hendrickx', 9, 123123123, 15),
            new TopScore('14', 'Jan', 'Hendrickx', 9, 123123123, 15),
            new TopScore('15', 'Piet', 'Hendrickx', 7, 123123123, 15),
            new TopScore('16', 'Joris', 'Hendrickx', 6, 123123123, 15),
            new TopScore('17', 'Korneel', 'Hendrickx', 5, 123123123, 15),
            new TopScore('18', 'Freddy', 'Hendrickx', 4, 123123123, 15),
            new TopScore('19', 'Fish', 'Hendrickx', 3, 123123123, 15),
            new TopScore('20', 'Flappie', 'Hendrickx', 1, 123123123, 15),
        ];

    }
}