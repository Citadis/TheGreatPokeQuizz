import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { StatsComponent } from "./stats/stats.component";
import { QuestionComponent } from './question/question.component';
import { AppRoutingModule } from './app-routing.module';
import { PokemonComponent } from './pokemon/pokemon.component';
import { DisplayComponent } from './display/display.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    PokemonComponent,
    QuestionComponent,
    StatsComponent,
    DisplayComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [DisplayComponent]
})
export class AppModule { }
