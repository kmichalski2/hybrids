import {Component, OnInit} from '@angular/core';
import {Game} from "../../infrastructure/http-get-games.service";
import {Observable} from "rxjs";
import {GamesStore} from "../../application/games.store";

@Component({
  selector: 'app-my-games-list',
  templateUrl: './my-games-list.component.html',
  styleUrls: ['./my-games-list.component.scss']
})
export class MyGamesListComponent implements OnInit {
  myGames$: Observable<Game[]>;
  selected$: Observable<Game>;

  constructor(private store: GamesStore) { }

  ngOnInit(): void {
    this.myGames$ = this.store.myGames$;
    this.selected$ = this.store.selectedGame$;
  }

  onSelectClicked(game: Game): void {
    this.store.select(game);
  }

  onPlayed(game: Game): void {
    alert(`Running the game ${game.title} ....`);
  }
}
