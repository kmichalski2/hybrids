import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Game} from "../../infrastructure/http-get-games.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  {
  @Input() game: Game;

  constructor() {}
}
