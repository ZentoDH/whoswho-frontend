import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './/app-routing.module';
import {HomeComponent} from './home/home.component';
import {MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule, MatGridListModule} from '@angular/material';
import {GameComponent} from './game/game.component';
import {TopscoresComponent} from './topscores/topscores.component';
import {MsalModule} from '@azure/msal-angular';
import { HttpClientModule } from '@angular/common/http';
import {ConvertDurationPipe} from './topscores/convertDurationPipe';
import { HeaderComponent } from './header/header.component';
import { EndscreenComponent } from './endscreen/endscreen.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        GameComponent,
        TopscoresComponent,
        ConvertDurationPipe,
        HeaderComponent,
        EndscreenComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatGridListModule,
        HttpClientModule,
        MsalModule.forRoot({
            clientID: 'f993cf0d-9e6d-44b1-80f3-cf760d018618',
            authority: 'https://login.microsoftonline.com/common/',
            validateAuthority: true,
            consentScopes: ['user.read'],
            navigateToLoginRequestUrl: true,
            popUp: false,
            piiLoggingEnabled: true
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
