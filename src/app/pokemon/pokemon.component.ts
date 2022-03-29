import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  RandomPkmImg = '';

  ngOnInit(): void {
    var RandomPkm;
    var RandomPkmId = Math.floor(Math.random() * 898);

    this.RandomPkmImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${RandomPkmId}.png`;

    RandomPkm = fetch(`https://pokeapi.co/api/v2/pokemon/${RandomPkmId}`)
      .then(response => response.json())
      .then(data => 
        console.log(data)
      )

        
      

  }
}
