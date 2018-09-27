import {Injectable} from '@angular/core';
import {Player} from '../models/player.model';
import {MsalService} from '@azure/msal-angular';
import * as jwt_decode from 'jwt-decode';
import {DataService} from './data.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private token: any;
    private currentPlayer: Player;

    constructor(private msalService: MsalService, private globalData:DataService) {
    }

    setCurrentUser(){
        this.msalService.acquireTokenSilent(['user.read']).then(t => {
                this.token = t;

                let tokenInfo = AuthService.getDecodedAccessToken(this.token);

                this.currentPlayer = new Player("", "", "", "", "");
                this.currentPlayer.id = tokenInfo.oid;
                this.currentPlayer.displayName = tokenInfo.name;
                this.currentPlayer.givenName = tokenInfo.given_name;
                this.currentPlayer.surName = tokenInfo.family_name;
                this.currentPlayer.sex = 'MALE';

                this.globalData.currentUser.next(this.currentPlayer);
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
    
    logout() {
        this.msalService.logout();
    }
}