import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { Game } from '../models/game.model';
import { MsalService } from '@azure/msal-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseContentType } from '@angular/http';
import { PersonService } from '../services/person.service';
import { Observable } from 'rxjs';
import { Person } from '../models/person.model';
import { Round } from '../models/round.model';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { GameService } from '../services/game.service';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    game: Game;
    roundCount: number = 0;
    round: Round;
    rightPerson: Person;

    score: number = 0;

    imageToShow: any;
    imagesOfPersonsInRound: object[] = [];
    isLoading: boolean = true;

    constructor(private globalData: DataService, private gameService: GameService, private personService: PersonService, private router:Router, private sanitizer: DomSanitizer) {
    }

    ngOnInit() {
        // console.log('TEST INPUT', this.globalData.game);
        this.game = this.globalData.game;
        
        if (this.game !== undefined) {
            this.round = this.game.rounds[this.roundCount];
            this.buildRound();
        }else{
            this.router.navigate(['']);
        }

        //set begin time
        var d  = new Date();
        let formatDateTime = d.getFullYear() + "-" + ("00" + (d.getMonth() + 1)).slice(-2) + "-" + ("00" + d.getDate()).slice(-2) + " " + ("00" + d.getHours()).slice(-2) + ":" + ("00" + d.getMinutes()).slice(-2) + ":" + ("00" + d.getSeconds()).slice(-2);

        this.game.startTime = formatDateTime;
    }

    buildRound() {
        this.imagesOfPersonsInRound = [];
        this.rightPerson = this.round.persons.find((person: Person) => this.round.rightPersonId.toString() == person.id);

        //getImages
        this.round.persons.forEach(person => {
            this.personService.getImageBase64(person.id).then(imageBase64 => {
                this.imagesOfPersonsInRound.push({ "id": person.id, "imageBase64": this.sanitizer.bypassSecurityTrustResourceUrl(imageBase64) });
            },
                err => {
                    this.imagesOfPersonsInRound.push({ "id": person.id, "imageBase64": "https://cataas.com/cat/gif" });
                }).then(res => { console.log(this.imagesOfPersonsInRound); this.isLoading = true });
        });
    }

    selectedAnswer(id: string) {
        this.game.rounds[this.roundCount].guessedPersonId = id;
        if (this.rightPerson.id === id) {
            console.log("correct");
            this.score++;
            this.nextRound();
        } else {
            console.log("fout");
            this.nextRound();
        }
    }

    nextRound() {
        console.log("current score", this.score);
        this.roundCount++;

        //check if last round reached / end game
        if(this.roundCount < this.game.rounds.length){
            this.round = this.game.rounds[this.roundCount];
            this.buildRound();
        }else{
            this.endGame();
        }
    }

    endGame(){
        
        //set end time
        var d  = new Date();
        let formatDateTime = d.getFullYear() + "-" + ("00" + (d.getMonth() + 1)).slice(-2) + "-" + ("00" + d.getDate()).slice(-2) + " " + ("00" + d.getHours()).slice(-2) + ":" + ("00" + d.getMinutes()).slice(-2) + ":" + ("00" + d.getSeconds()).slice(-2);

        this.game.endTime = formatDateTime;

        console.log("POSTING GAME", this.game);
        this.gameService.postScore(this.game).subscribe(
            (res:any) => {
                console.log("RETURNED FROM POST", res)
                this.globalData.endscreenData = res;
                this.router.navigate(['/endscreen']);
            },
            err => console.log(err)
        );
        
    }
}