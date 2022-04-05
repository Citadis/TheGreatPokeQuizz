import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private httpClient: HttpClient) {}

  RandomPokemonId1 = Math.floor(Math.random() * 898);
  RandomPokemonId2 = Math.floor(Math.random() * 898);
  RandomPokemonId3 = Math.floor(Math.random() * 898);
  CorrectAnswer = '';

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

      .get<any>(
        `https://pokeapi.co/api/v2/pokemon-species/${this.RandomPokemonId1}/`
      )
      .pipe(
        map((data) => {
          let i = 0;

          console.groupCollapsed('Fonction getRandomProposition1');
          console.log(`Début fonction getRandomProposition1`);

          while (data.names[i].language.name != 'fr') {
            i = i + 1;
            console.log(
              `Tour : ${i}, Langue : ${data.names[i].language.name},  Nom : ${data.names[i].name}`
            );
          }

          console.log('Fin fonction getRandomProposition1');
          console.groupEnd();

          this.CorrectAnswer = data.names[i].name;
          return data.names[i].name;
        })
      );

    return httpResponse;
  }

  public getRandomProposition2(): Observable<any> {
    const httpResponse = this.httpClient

      .get<any>(
        `https://pokeapi.co/api/v2/pokemon-species/${this.RandomPokemonId2}/`
      )
      .pipe(
        map((data) => {
          let i = 0;

          console.groupCollapsed('Fonction getRandomProposition2');
          console.log(`Début fonction getRandomProposition2`);

          while (data.names[i].language.name != 'fr') {
            i = i + 1;
            console.log(
              `Tour : ${i}, Langue : ${data.names[i].language.name},  Nom : ${data.names[i].name}`
            );
          }

          console.log(`Fin fonction getRandomProposition2`);
          console.groupEnd();

          return data.names[i].name;
        })
      );

    return httpResponse;
  }

  public getRandomProposition3(): Observable<any> {
    const httpResponse = this.httpClient

      .get<any>(
        `https://pokeapi.co/api/v2/pokemon-species/${this.RandomPokemonId3}/`
      )
      .pipe(
        map((data) => {
          let i = 0;

          console.groupCollapsed('Fonction getRandomProposition3');
          console.log(`Début fonction getRandomProposition3`);

          while (data.names[i].language.name != 'fr') {
            i = i + 1;
            console.log(
              `Tour : ${i}, Langue : ${data.names[i].language.name},  Nom : ${data.names[i].name}`
            );
          }

          console.log(`Fin fonction getRandomProposition3`);
          console.groupEnd();

          return data.names[i].name;
        })
      );

    return httpResponse;
  }

  // Shuffle proposition's order
  public shufflePropositionOrder() {
    const proposition1 = document.querySelector(
      '.proposition:nth-child(1)'
    ) as HTMLElement;
    const proposition2 = document.querySelector(
      '.proposition:nth-child(2)'
    ) as HTMLElement;
    const proposition3 = document.querySelector(
      '.proposition:nth-child(3)'
    ) as HTMLElement;

    proposition1.style.order = (Math.floor(Math.random() * 3) + 1).toString();
    proposition2.style.order = (Math.floor(Math.random() * 3) + 1).toString();
    while (proposition1.style.order == proposition2.style.order) {
      proposition2.style.order = (Math.floor(Math.random() * 3) + 1).toString();
    }
    proposition3.style.order = (Math.floor(Math.random() * 3) + 1).toString();
    while (
      proposition1.style.order == proposition3.style.order ||
      proposition2.style.order == proposition3.style.order
    ) {
      proposition3.style.order = (Math.floor(Math.random() * 3) + 1).toString();
    }
  }
  
  // Show image of the pokemon when the user click on the correct answer
  public showPokemonImage() {
    const pokemonImage = document.querySelector('.pokemon-image') as HTMLElement;
    const correctAnswer = document.querySelector('.proposition:nth-child(1)') as HTMLElement;
    addEventListener('click', (event) => {
      if (event.target == correctAnswer) {
        pokemonImage.style.filter = 'brightness(100%)';
      }
    }, false);
  }
  
  


}
