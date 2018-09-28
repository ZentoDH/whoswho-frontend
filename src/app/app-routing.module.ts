import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { TopscoresComponent } from './topscores/topscores.component';
import {MsalGuard} from '@azure/msal-angular';
import { EndscreenComponent } from './endscreen/endscreen.component';

const routes: Routes = [
  { path: '', component: HomeComponent,  canActivate : [MsalGuard] },
  { path: 'game', component: GameComponent ,  canActivate : [MsalGuard] },
  { path: 'topscores', component: TopscoresComponent ,  canActivate : [MsalGuard]},
  { path: 'endscreen', component: EndscreenComponent ,  canActivate : [MsalGuard]}

];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule {}