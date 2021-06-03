import {Injectable} from "@angular/core";
import {Game, GOGGame, SteamGame, UnknownGame} from "./game";

@Injectable()
export class GameFactory {
  constructor() {
  }

  make(game: Game): Game {
    const { id, title, price, year, image, type } = game;

    switch (type) {
      case ("steam"):
        return new SteamGame(id, title, price, year, image);
      case ("gog"):
        return new GOGGame(id, title, price, year, image);
      default:
        return new UnknownGame(id, title, price, year, image);
    }
  }
}
