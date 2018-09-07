import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import {MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule, MatGridListModule} from '@angular/material';
import { GameComponent } from './game/game.component';
import { TopscoresComponent } from './topscores/topscores.component';
import {MsalModule} from '@azure/msal-angular';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    TopscoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MsalModule.forRoot({
        clientID: 'f993cf0d-9e6d-44b1-80f3-cf760d018618'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
