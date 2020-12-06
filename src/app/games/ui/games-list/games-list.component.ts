import {Component, OnInit} from '@angular/core';
import {Game} from "../../infrastructure/http-get-games.service";
import {Observable} from "rxjs";
import {GamesStore} from "../../application/games.store";
import {GameBoughtEvent} from "../card/card.component";

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

  onBuyClicked(event: GameBoughtEvent): void {
   this.store.buy(event.payload);
  }
}
