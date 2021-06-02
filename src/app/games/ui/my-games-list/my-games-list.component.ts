import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {GamesStore} from "../../application/games.store";
import {Game} from "../../domain/game";

@Component({
  selector: 'app-my-games-list',
  templateUrl: './my-games-list.component.html',
  styleUrls: ['./my-games-list.component.scss']
})
export class MyGamesListComponent implements OnInit {
  myGames$: Observable<Game[]>;
  selected$: Observable<Game>;

  // TODO (2): ISP, DIP on document provider
  constructor(private store: GamesStore) { }

  ngOnInit(): void {
    this.myGames$ = this.store.myGames$;
    this.selected$ = this.store.selectedGame$;
  }

  onSelectClicked(game: Game): void {
    this.store.select(game);
  }

  // TODO (1): on click redirect to https://store.steampowered.com/app/${id}
  onPlayedClicked(game: Game): void {
    alert(`Running the game ${game.title} ....`);
  }
}
