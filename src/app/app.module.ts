import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StatsComponent } from "./stats/stats.component";
import { PropositionsComponent } from './propositions/propositions.component';
import { AppRoutingModule } from './app-routing.module';
import { PokemonComponent } from './pokemon/pokemon.component';
import { DisplayComponent } from './display/display.component';
import { GameComponent } from './game/game.component';
import { Scoreboard } from './scoreboard/scbd.compo'

@NgModule({
  declarations: [
    PokemonComponent,
    PropositionsComponent,
    StatsComponent,
    DisplayComponent,
    GameComponent,
    Scoreboard,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [DisplayComponent]
})
export class AppModule { }
