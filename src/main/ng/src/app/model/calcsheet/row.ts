
import { Cell, ProviderByArgs, ProviderByArray } from './cell';
import { Observable, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { ValueCell } from './value.cell';

export class Row {
  private _cells: Cell[] = [];

  addSequence( projection: (x: number) => number, length: number, start: number = 0): Observable<number> {
    return range(start, length).pipe(map(x => {
      const cell = new ValueCell(projection(x));
      this._cells.push(cell);
      return cell.value as number;
    }));
  }

  constructor(private _name?: string) {
  }

  add(cell: Cell): number {
    return this._cells.push(cell);
  }

  addMany(cells: Cell[]): number {
    if (cells) {
      this._cells = this._cells.concat(cells);
      return this._cells.length;
    }
    throw new Error('Row.addMany() - must provide a none null value for cell[]');
  }

  set(cell: Cell, position: number) {
    if (cell) {
      this._cells[position] = cell;
      return;
    }
    throw new Error('Row.set() - must provide a none null value for cell');
  }

  get cells(): Cell[] {
    return this._cells;
  }

  get name(): string {
    return this._name;
  }

  get length(): number {
    return this._cells.length;
  }

  toString(): string {
    let out = '[';
    this.cells.forEach((cell) => {
      out += `${cell.value}`;
    });
    out += ']';
    return out;
  }
}
