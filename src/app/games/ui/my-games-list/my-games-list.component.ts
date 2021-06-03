import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {GamesStore} from "../../application/games.store";
import {Game} from "../../domain/game";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-my-games-list',
  templateUrl: './my-games-list.component.html',
  styleUrls: ['./my-games-list.component.scss']
})
export class MyGamesListComponent implements OnInit {
  myGames$: Observable<Game[]>;
  selected$: Observable<Game>;

  // TODO (2): Add window dependency
  // TODO (4) ISP
  constructor(private store: GamesStore, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.myGames$ = this.store.myGames$;
    this.selected$ = this.store.selectedGame$;
  }

  onSelectClicked(game: Game): void {
    this.store.select(game);
  }

  // TODO (1): on click redirect to https://store.steampowered.com/app/${id}
  // SRP, OCP, DIP
  onPlayedClicked(game: Game): void {
    this.snackbar.open(`Running the game ${game.title} ....`);
  }

  // TODO (5): different runners
  // https://www.gog.com/u/whoispro/game/${this.id}`;
  // https://www.google.com/search?q=${this.title}`;
}
