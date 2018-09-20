import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Player} from '../models/player.model';
import {MsalService} from '@azure/msal-angular';
import {AuthService} from './auth.service';


@Injectable({
    providedIn: 'root',
})
export class ImageService {

    constructor(private authService: AuthService, private http: HttpClient) {
    }

    getImage(userId: string) {
        this.authService.token.then(t => {
            let token = t;
            console.log(token);

            const url = 'https://graph.microsoft.com/v1.0/users/' + userId + '/photo/$value';

            const httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': 'image/jpeg',
                    'Authorization': 'Bearer ' + token,
                }),
            };

            const image = this.http.get(url, httpOptions);
            console.log('Image: ', image);
        });
    }
}
