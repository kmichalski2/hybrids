import {GetGames} from "./get-games";
import {Observable, of} from "rxjs";
import {Game, UnknownGame} from "./game";

export const GAME_STUB = new UnknownGame("217200", "Worms Armageddon",  19.99, 1999, "image.jpg");

export class GetGamesStub implements GetGames {
  get(): Observable<Game[]> {
    return of([GAME_STUB]);
  }

}
