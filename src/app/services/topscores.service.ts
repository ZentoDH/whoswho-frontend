import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { TopScore } from '../models/topScore.model';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class TopScoresService {
  apiURL = environment.apiurl + '/scores/monthly'

  constructor(private http: HttpClient) {}

  getTopScores(): Observable<any>{
    return this.http.get(this.apiURL);
  }
}
