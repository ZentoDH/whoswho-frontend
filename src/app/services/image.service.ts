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

    constructor(private authService: AuthService, private http: HttpClient, private msalService: MsalService) {
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

    }
}
