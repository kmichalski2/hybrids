import {Component, Input} from '@angular/core';
import {Game} from "../../domain/game";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() game: Game;

  constructor() {}
}
