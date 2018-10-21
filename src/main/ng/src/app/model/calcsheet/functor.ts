import { Cell, ProviderByArgs, ProviderByArray } from './cell';
import { Observer } from 'rxjs';
import { Subject } from 'rxjs';

export class Functor {
  private _args: Cell[] = [];

  static sum(cells: Cell[]): number {
    const values = cells.map((v): number => {
      return v.value as number;
    });
    return values.reduce((a, b) => {
      return a + b;
    });
  }

  static product(cells: Cell[]): number {
    const values = cells.map((v): number => {
      return v.value as number;
    });
    return values.reduce((a, b) => {
      return a * b;
    });
  }
  constructor(args: Cell[], private binding: ProviderByArray) {
    if (!args) {
      throw Error('args must be present on Functor constructor');
    }
    this._args = args.slice();
    this._args.forEach((cell) => {
      if (!cell) {
        throw new Error('Functor cannot contain null cells ${binding.toString()');
      }
    });
  }

  exec(): number {
    return this.binding(this._args);
  }

  get args(): Cell[] {
    return this._args;
  }

  toString(): string {
    let out: string;
    out = this._args.reduce((prev, val) => {
      return '${prev.toString()} | ${val.toString()';
    }, '');
    return 'binding: ${this.binding) Arguments: ${out}';
  }
}
