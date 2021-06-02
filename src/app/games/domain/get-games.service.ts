import {Observable} from "rxjs";
import {InjectionToken} from "@angular/core";
import {Game} from "./game";

export interface GetGamesService {
  get(): Observable<Game[]>;
}

export const GET_GAMES_SERVICE = new InjectionToken<GetGamesService>('GET_GAMES_SERVICE');
