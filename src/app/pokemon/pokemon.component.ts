import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {

  RandomPkmImg : any;
  RandomPokemon : any;


  constructor(private PokemonService: PokemonService) {}

  ngOnInit() {
    this.PokemonService
      .getRandomPokemon()
      .subscribe((RandomPokemon) => {
        this.RandomPokemon = RandomPokemon;
      });
  }

}
