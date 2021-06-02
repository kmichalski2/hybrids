import {Store} from "./store";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Inject, Injectable} from "@angular/core";
import {GET_GAMES_SERVICE, GetGamesService} from "../domain/get-games.service";
import {Game} from "../domain/game";

export class GamesStateModel {
  selected: Game;
  games: Game[];
  myGames: Game[];
}

export const DEFAULT_GAMES_STATE: GamesStateModel = {
  selected: null,
  games: [],
  myGames: []
}

@Injectable({
  providedIn: 'root'
})
export class GamesStore extends Store<GamesStateModel> {
  constructor(@Inject(GET_GAMES_SERVICE) private getGamesService: GetGamesService) {
    super(DEFAULT_GAMES_STATE);
  }

  get selectedGame$(): Observable<Game> {
    return this.state$.pipe(map(state => state.selected));
  }

  get games$(): Observable<Game[]> {
    return this.state$.pipe(
      map(state => state.games),
      map(games => games.filter(game => !this.isMyGame(game))));
  }

  get myGames$(): Observable<Game[]> {
    return this.state$.pipe(map(state => state.myGames));
  }

  public load(): void {
    this.getGamesService.get().subscribe(games => this.patchState({games: games}));
  }

  public select(game: Game): void {
    this.patchState({selected: game});
  }

  public buy(game: Game): void {
    const { myGames } = this.state.getValue();
    this.patchState({ myGames: [ ...myGames, game ]});
  }

  private isMyGame(game: Game): boolean {
    const { myGames } = this.state.getValue();
    return myGames.findIndex(g => g.title === game.title) > -1;
  }
}
