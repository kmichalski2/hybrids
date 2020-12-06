import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {GetGamesService} from "./get-games.service";

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

export class Game {
  readonly title: string;
  readonly price: number;
  readonly year: number;
  readonly image: string;
}


