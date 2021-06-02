import {GetGames} from "./get-games";
import {Observable, of} from "rxjs";
import {Game} from "./game";

export class GetGamesStub implements GetGames {
  get(): Observable<Game[]> {
    return of([{
      id: "217200",
      type: "steam",
      title: "Worms Armageddon",
      price: 19.99,
      year: 1999,
      image: "https://upload.wikimedia.org/wikipedia/en/e/e5/Wa-win-cover.jpg"
    }]);
  }

}
