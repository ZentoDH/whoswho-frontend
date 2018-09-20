import {Component, OnInit, Input} from '@angular/core';
import {DataService} from '../services/data.service';
import {Game} from '../models/game.model';
import {MsalService} from '@azure/msal-angular';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ResponseContentType} from '@angular/http';
import {Observable, Subscriber} from 'rxjs';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    game: Game;
    roundCount: number = 0;
    round: object;
    rightPerson: object;

    constructor(private data: DataService, private msalService: MsalService, private http: HttpClient) {
    }

    ngOnInit() {
        this.getImage('3d940146-2109-402b-b817-dd5301d03881');

        console.log('TEST INPUT', this.data.game);
        this.game = this.data.game;

        this.round = this.game[this.roundCount];
    }

    nextRound() {
        this.round = this.game[this.roundCount];
        this.game.rounds.forEach(element => {

        });

        this.roundCount++;
    }

    getImage(userId: string) {
        let token: any;
        this.msalService.acquireTokenSilent(['user.read']).then(t => {
            token = t;
            console.log(token);

            const url = 'https://graph.microsoft.com/v1.0/users/' + userId + '/photo/$value';

            const headers = {
                headers: new HttpHeaders({
                    'Authorization': 'Bearer ' + token,
                    'ResponseType': 'blob'
                }),
            };

            let objectUrl: string = null;
            let observer;


           const image = this.http
                .get(url, headers)
                .subscribe(m => {
                objectUrl = URL.createObjectURL(m);
                observer.next(objectUrl);
            });


            console.log(image);
            //image.subscribe(res => console.log('test image: ', res));
        });
    }
}