import {Observable} from "rxjs";
import {InjectionToken} from "@angular/core";
import {Game} from "./http-get-games.service";

export interface GetGamesService {
  get(): Observable<Game[]>;
}

export const GET_GAMES_SERVICE = new InjectionToken<GetGamesService>('GetGamesService');
