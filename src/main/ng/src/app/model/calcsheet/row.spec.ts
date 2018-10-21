import { async } from '@angular/core/testing';
import { Row } from './row';
import { Cell } from './cell';
import { ValueCell } from './value.cell';

describe('row', () => {
  it('test create row cell by cell', () => {
    const row = new Row('cell by cell');
    row.add(new ValueCell(10));
    row.add(new ValueCell(11));
    row.add(new ValueCell(12));
    expect(row.length).toEqual(3);
  });

  it('test create row with cell[]', () => {
    const row = new Row('by array');
    const cells = [];
    cells.push(new ValueCell(10));
    cells.push(new ValueCell(11));
    cells.push(new ValueCell(12));
    row.addMany(cells);
    expect(row.length).toEqual(3);
  });

  it('test sequence', () => {
    const row = new Row('by array');
    row.addSequence( (x) => x * 10, 10, 1).subscribe( (value: number) => {
      expect(value).toBeLessThanOrEqual(100);
    });
    expect(row.length).toEqual(10);
    expect(row.cells[9].value).toEqual(100);
  });
});
