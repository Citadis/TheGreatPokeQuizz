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
  RandomPokemonId1 = Math.floor(Math.random() * 898);
  RandomPokemonId2 = Math.floor(Math.random() * 898);

  public getRandomProposition1(): Observable<any> {

    const httpResponse = this.httpClient
    

      .get<any>(`https://pokeapi.co/api/v2/pokemon/${this.RandomPokemonId1}`)
      .pipe(
        map((data) => {
          return data;
        })
      );
      

    return httpResponse;

  }

  public getRandomProposition2(): Observable<any> {

    const httpResponse = this.httpClient
    

      .get<any>(`https://pokeapi.co/api/v2/pokemon/${this.RandomPokemonId2}`)
      .pipe(
        map((data) => {
          return data;
        })
      );
      

    return httpResponse;

  }

}
