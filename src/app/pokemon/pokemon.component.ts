import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  RandomPokemon: any;
  RandomProposition: any;
  RandomProposition2: any;
  RandomProposition3: any;
  RandomProposition1: any;
  Score = 0;

  // import the function showPokemonImage from the pokemon.service.ts file
  showPokemonImage() {
    this.PokemonService.showPokemonImage();
    console.log(this.PokemonService.Score)
    this.Score = this.PokemonService.Score;
  }

  resetPokemon() {
    this.PokemonService.resetPokemon();
  }

  constructor(private PokemonService: PokemonService) {}

  ngOnInit() {
    this.PokemonService.getRandomPokemon().subscribe((RandomPokemon) => {
      this.RandomPokemon = RandomPokemon;
    });

    this.PokemonService.getRandomProposition1().subscribe(
      (RandomProposition1) => {
        this.RandomProposition1 = RandomProposition1;
      }
    );

    this.PokemonService.getRandomProposition2().subscribe(
      (RandomProposition2) => {
        this.RandomProposition2 = RandomProposition2;
      }
    );

    this.PokemonService.getRandomProposition3().subscribe(
      (RandomProposition3) => {
        this.RandomProposition3 = RandomProposition3;
      }
    );

    this.PokemonService.shufflePropositionOrder();
  }
}
