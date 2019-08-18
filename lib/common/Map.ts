import Assoc from './Assoc';

export default class Map {
  private _state: Assoc = {};

  get state(): Assoc {
    return { ...this.state };
  }

  constructor(a: Assoc) {
    this._state = a;
  }

  has(k: string): any {
    return Object.keys(this._state).includes(k);
  }

  get(k: string): any {
    return this._state[k];
  }

  set(k: string, v: any): any {
    this._state[k] = v;
    return v;
  }

  diff(m: Map) {
    const ownState = this.state;
    const theirState = m.state;


  }
}
