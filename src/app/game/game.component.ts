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

    constructor(private globalData: DataService, private personService: PersonService, private router:Router, private sanitizer: DomSanitizer) {
    }

    ngOnInit() {
        // console.log('TEST INPUT', this.globalData.game);
        this.game = this.globalData.game
        if (this.game !== undefined) {
            this.round = this.game.rounds[this.roundCount];
            this.buildRound();
        }else{
            this.router.navigate(['']);
        }
    }

    buildRound() {
        this.imagesOfPersonsInRound = [];
        this.rightPerson = this.round.persons.find((person: Person) => this.round.rightPersonId == person.id);

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
        this.router.navigate(['']);
    }

    writeScoresToDB(){
        
    }
}