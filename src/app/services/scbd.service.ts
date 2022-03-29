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
          // console.log("[Debug] : getScoreboardData()")
          console.groupCollapsed("[Debug] : getScoreboardData()")
          data.forEach((line: any) => {
            console.log(line)            
          });
          console.groupEnd();
          return data;
        })
      );

    return httpResponse;
  }
}
