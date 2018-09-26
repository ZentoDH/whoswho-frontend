import {Injectable} from '@angular/core';
import {Player} from '../models/player.model';
import {MsalService} from '@azure/msal-angular';
import * as jwt_decode from 'jwt-decode';


@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private _token: string;
    private _currentPlayer: Player;

    constructor(private msalService: MsalService) {
        this.msalService.acquireTokenSilent(['user.read']).then(t => {
                this._token = t;

                let tokenInfo = AuthService.getDecodedAccessToken(this._token);

                this._currentPlayer = new Player();
                this._currentPlayer.id = tokenInfo.oid;
                this._currentPlayer.displayName = tokenInfo.name;
                this._currentPlayer.givenName = tokenInfo.given_name;
                this._currentPlayer.surName = tokenInfo.family_name;
            },
            e => {
                console.log(e);
            });
    }

    private static getDecodedAccessToken(token: string): any {
        try{
            return jwt_decode(token);
        }
        catch(Error){
            return null;
        }
    }

    get token(): string {
        return this._token;
    }

    get currentPlayer(): Player {
        return this._currentPlayer;
    }
}
