import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Player} from '../models/player.model';
import {MsalService} from '@azure/msal-angular';
import {BehaviorSubject} from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private _token: Promise<any>;
    private _currentPlayer: Player;

    constructor(private msalService: MsalService) {
        this._token = this.msalService.acquireTokenSilent(['user.read']);
        // this._currentPlayer = this.msalService.WIP;
        this._currentPlayer = new Player('1','arnehendrickx', 'Arne', 'Hendrickx', 'male');
    }

    get token(): Promise<any> {
        return this._token;
    }

    get currentPlayer(): Player {
        return this._currentPlayer;
    }
}
