import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) {}



  RandomPokemonId = Math.floor(Math.random() * 898);

  public getRandomPokemon(): Observable<any> {

    const httpResponse = this.httpClient
    

      .get<any>(`https://pokeapi.co/api/v2/pokemon/${this.RandomPokemonId}`)
      .pipe(
        map((data) => {
          return data.results;
        })
      );
      

    return httpResponse;

  }

}
