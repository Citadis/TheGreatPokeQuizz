import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
{
  path: 'stats',
  component: StatsComponent
},
{
  path: 'game',
  component: GameComponent
},
{
 path: '**',
 redirectTo: 'game'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
