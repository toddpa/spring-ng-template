import { Row } from './row';
import { Cell } from './cell';

export class Region {
  private _rows: Row[] = [];
  private _headings: string[] = [];
  private _name: string;

  constructor(name?: string) {
    this._name = name;
  }
  add(row: Row): number {
    if (row) {
      return this._rows.push(row);
    }
    throw new Error('Region.set() - adding null row object');
  }
  addMany(rows: Row[]): number {
    if (rows) {
      this._rows = rows.slice();
      return this._rows.length;
    }
    throw new Error('Region.addMany() - adding null row[]');
  }

  set(row: Row, position: number) {
    if (row) {
      this._rows[position] = row;
    }
    throw new Error('Region.set() - adding null row object');
  }

  addHeading(heading: string): number {
    return this._headings.push(heading);
  }

  setHeading(heading: string, position: number) {
    this._headings[position] = heading;
  }

  column(position: number, start: number, end: number): Cell[] {
    const column: Cell[] = [];
    this._rows.forEach( (row) => {
      if (position >= start && position <= end) {
      column.push(row[position]);
      }
    });
    return column;
  }
}
