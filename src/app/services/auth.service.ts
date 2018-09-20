import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Player } from '../models/player.model';
import {MsalService} from '@azure/msal-angular';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _token: Promise<any>;

  constructor(private msalService: MsalService) {
      this._token = this.msalService.acquireTokenSilent(['user.read']);
  }

  get token(): Promise<any> {
    return this._token;
  }
}
