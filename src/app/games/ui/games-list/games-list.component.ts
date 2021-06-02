import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {GamesStore} from "../../application/games.store";
import {Game} from "../../domain/game";

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  games$: Observable<Game[]>;
  selected$: Observable<Game>;

  constructor(private store: GamesStore) { }

  ngOnInit(): void {
    this.store.load();
    this.games$ = this.store.games$;
    this.selected$ = this.store.selectedGame$;
  }

  onBuyClicked(game: Game): void {
   this.store.buy(game);
  }
}
