import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {

  RandomPokemon : any;
  
  RandomProposition1 : any;
  RandomProposition2 : any;




  constructor(private PokemonService: PokemonService) {}

  ngOnInit() {
    this.PokemonService
      .getRandomPokemon()
      .subscribe((RandomPokemon) => {
        this.RandomPokemon = RandomPokemon;
      });

      

    
    this.PokemonService
    .getRandomProposition1()
    .subscribe((RandomProposition1) => {
      this.RandomProposition1 = RandomProposition1;
    });

    this.PokemonService
    .getRandomProposition2()
    .subscribe((RandomProposition2) => {
      this.RandomProposition2 = RandomProposition2;
    });
    
      
  }

}
