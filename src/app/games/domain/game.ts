// TODO: (5) LSP

export interface Game {
  id: string | null;
  title: string;
  price: number;
  year: number;
  image: string;
  type: string;

  getRunAddress(): string | null;
}

export class SteamGame implements Game {
  readonly type: string;

  constructor(public readonly id: string | null,
                public readonly title: string,
                public readonly price: number,
                public readonly year: number,
                public readonly image: string) {
    this.type = "steam";
  }

  getRunAddress(): string | null {
    return `https://store.steampowered.com/app/${this.id}`;
  }
}

export class GOGGame implements Game {
  readonly type: string;

  constructor(public readonly id: string | null,
              public readonly title: string,
              public readonly price: number,
              public readonly year: number,
              public readonly image: string) {
    this.type = "gog";
  }

  getRunAddress(): string | null {
    return `https://www.gog.com/u/whoispro/game/${this.id}`;
  }
}

export class UnknownGame implements Game {
  readonly type: string;

  constructor(public readonly id: string | null,
              public readonly title: string,
              public readonly price: number,
              public readonly year: number,
              public readonly image: string) {
    this.type = "unknown";
  }

  getRunAddress(): string | null {
    return `https://www.google.com/search?q=${this.title}`;
  }
}
