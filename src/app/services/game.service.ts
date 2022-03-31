import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private httpClient: HttpClient) {}


  RandomPokemonId = Math.floor(Math.random() * 898);


  public getRandomProposition(): Observable<any> {

    const httpResponse = this.httpClient
    

      .get<any>(`https://pokeapi.co/api/v2/pokemon-species/${this.RandomPokemonId}/`)
      .pipe(
        map((data) => {
          console.log(data);
          console.log(data.names[3].name);

          if (''){ 

          }
          // i = 0
          // while ('data.names[i].language.name != "fr"'){
          // i++
          // }
          // return data.names[i].name

        })
      );
      

    return httpResponse;

  }
}
 