import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root' 
})
export class PokemonService { 

  constructor(private httpClient: HttpClient) {}



  RandomPokemonId1 = Math.floor(Math.random() * 898);
  RandomPokemonId2 = Math.floor(Math.random() * 898);
  RandomPokemonId3 = Math.floor(Math.random() * 898);

  public getRandomPokemon(): Observable<any> {

    const httpResponse = this.httpClient
    

      .get<any>(`https://pokeapi.co/api/v2/pokemon/${this.RandomPokemonId1}`)
      .pipe(
        map((data) => {
          return data;
        })
      );
      

    return httpResponse;

  }

  public getRandomProposition1(): Observable<any> {

    const httpResponse = this.httpClient
    

      .get<any>(`https://pokeapi.co/api/v2/pokemon-species/${this.RandomPokemonId1}/`)
      .pipe(
        map((data) => {

          let i = 0;
          
          console.log(`Début fonction getRandomProposition1`);

          while (data.names[i].language.name != "fr"){

            i = i + 1
            console.log(`Tour : ${i}`);
            console.log(`Langue : ${data.names[i].language.name}`);
            console.log(`Nom : ${data.names[i].name}`);

          };

          console.log('Fin fonction getRandomProposition1');

          return data.names[i].name

        })
      );
      

    return httpResponse;

  }

  public getRandomProposition2(): Observable<any> {

    const httpResponse = this.httpClient
    

      .get<any>(`https://pokeapi.co/api/v2/pokemon-species/${this.RandomPokemonId2}/`)
      .pipe(
        map((data) => {

          let i = 0;
          
          console.log(`Début fonction getRandomProposition2`);

          while (data.names[i].language.name != "fr"){

            i = i + 1
            console.log(`Tour : ${i}`);
            console.log(`Langue : ${data.names[i].language.name}`);
            console.log(`Nom : ${data.names[i].name}`);

          };

          console.log(`Fin fonction getRandomProposition2`);

          return data.names[i].name

        })
      );
      

    return httpResponse;

  }

  public getRandomProposition3(): Observable<any> {

    const httpResponse = this.httpClient
    

      .get<any>(`https://pokeapi.co/api/v2/pokemon-species/${this.RandomPokemonId3}/`)
      .pipe(
        map((data) => {

          let i = 0;
          
          console.log(`Début fonction getRandomProposition3`);

          while (data.names[i].language.name != "fr"){

            i = i + 1
            console.log(`Tour : ${i}`);
            console.log(`Langue : ${data.names[i].language.name}`);
            console.log(`Nom : ${data.names[i].name}`);

          };

          console.log(`Début fonction getRandomProposition3`);

          return data.names[i].name

        })
      );
      

    return httpResponse;

  }

}
