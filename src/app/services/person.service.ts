import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MsalService } from '@azure/msal-angular';
import { Observable, observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient, private msalService: MsalService) { }

  getImageBase64(userId: string): Promise<any> {
    let token: any;
    let base64data
    this.msalService._oauthData.idToken
    return this.msalService.acquireTokenSilent(['user.read']).then(t => {
      token = t;

      const url = 'https://graph.microsoft.com/v1.0/users/' + userId + '/photo/$value';

      const headers = {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + token,
          'ResponseType': 'blob'
        }),
        responseType: 'blob' as 'blob'
      };
      return this.http.get('https://graph.microsoft.com/v1.0/users/' + userId + '/photo/$value', headers).toPromise()
      .then(
        blob => {
          return this.convertBlobToBase64(blob);
        }
      )
    });
  }

  convertBlobToBase64(blob): Promise<any> {
    let reader = new FileReader();
    let promise = new Promise((done) => {
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
      
        done(reader.result);
      }
    });
    return promise;
  }
}
