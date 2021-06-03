import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Game} from "../domain/game";
import {GameFactory} from "../domain/game.factory";
import {GetGames} from "../domain/get-games";

@Injectable()
export class HttpGetGamesService implements GetGames {
  constructor(private httpClient: HttpClient, private gameFactory: GameFactory) {
  }

  get(): Observable<Game[]> {
    return this.httpClient.get<HasData<Game[]>>('assets/db/games.json')
      .pipe(map(response => response.data.map(item => this.gameFactory.make(item))));
  }
}

export interface HasData<T> {
  data: T;
}


