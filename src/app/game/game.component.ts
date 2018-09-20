import {Component, OnInit, Input} from '@angular/core';
import {DataService} from '../services/data.service';
import {Game} from '../models/game.model';
import {MsalService} from '@azure/msal-angular';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ResponseContentType} from '@angular/http';

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

    toDataURL(url, token, callback) {
        const xhr = new XMLHttpRequest();
        xhr.onload = function() {
            let reader = new FileReader();
            reader.onloadend = function() {
                callback(reader.result);
            }
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.setRequestHeader('Authorization', token);
        xhr.responseType = 'blob';
        xhr.send();
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
                responseType: 'blob' as 'blob'
            };

            this.toDataURL(url, 'Bearer ' + token, (result) => {
                const img = new Image(1, 1); // width, height values are optional params
                img.src = result;

                document.getElementById('mybody').appendChild(img);
            });
        });
    }
}