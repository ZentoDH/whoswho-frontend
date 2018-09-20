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
