import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ScoreboardService {
  constructor(private httpClient: HttpClient) {}

  public getScoreboardData(): Observable<any> {
    const httpResponse = this.httpClient
      .get<any>('./assets/scbd.fake.json')
      .pipe(
        map((data) => {
          console.log("[Debug] : getScoreboardData()" + data)
          return data;
        })
      );

    return httpResponse;
  }
}
