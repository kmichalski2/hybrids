import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {GetGamesService} from "../domain/get-games.service";
import {Game} from "../domain/game";

@Injectable()
export class HttpGetGamesService implements GetGamesService {
  constructor(private httpClient: HttpClient) {
  }

  get(): Observable<Game[]> {
    return this.httpClient.get<HasData<Game[]>>('assets/db/games.json').pipe(map(response => response.data));
  }
}

export interface HasData<T> {
  data: T;
}


