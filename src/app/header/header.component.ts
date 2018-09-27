import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Player} from '../models/player.model';
import {DataService} from '../services/data.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    player:Player;

    constructor(private authService: AuthService, private globalData:DataService) {}


    ngOnInit() {
        this.globalData.currentUser.subscribe(p => {
            return this.player = p;
        });
    }

    logout() {
        this.authService.logout();
    }

}
