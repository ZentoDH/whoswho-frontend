import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-endscreen',
  templateUrl: './endscreen.component.html',
  styleUrls: ['./endscreen.component.css']
})
export class EndscreenComponent implements OnInit {
  endscreenData:any;

  constructor(private globalData: DataService, private router: Router) { }

  ngOnInit() {
    this.endscreenData = this.globalData.endscreenData;
  }

  topScores(){
    this.router.navigate(['/topscores']);
  }

  backToHome(){
    this.router.navigate(['']);
  }

}
