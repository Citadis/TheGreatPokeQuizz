import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})



export class GameComponent implements OnInit {
  Species: any;

  constructor(private GameService: GameService) {}

  ngOnInit(): void {



  }

}
