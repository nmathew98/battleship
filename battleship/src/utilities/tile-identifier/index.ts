import type { Coordinate } from "../cartesian-grid";

export class TileIdentifier {
  private _generator = counter();
  private _generatedIdentifiers = new Map<string, number>();
  private static _instance: TileIdentifier | null = null;

  private constructor() {}

  static get instance() {
    if (!TileIdentifier._instance)
      TileIdentifier._instance = new TileIdentifier();

    return TileIdentifier._instance;
  }

  public next(coordinate: Coordinate): number {
    const key = `${coordinate}`;

    if (this._generatedIdentifiers.has(key))
      return this._generatedIdentifiers.get(key) as number;

    const identifier = this._generator.next().value as number;

    this._generatedIdentifiers.set(key, identifier);

    return identifier;
  }
}

function* counter() {
  let i = 0;

  while (true) {
    yield ++i;
  }
}
