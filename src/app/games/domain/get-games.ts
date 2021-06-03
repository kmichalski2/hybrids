import {Observable} from "rxjs";
import {InjectionToken} from "@angular/core";
import {Game} from "./game";

export interface GetGames {
  get(): Observable<Game[]>;
}

export const GET_GAMES = new InjectionToken<GetGames>('GET_GAMES');
