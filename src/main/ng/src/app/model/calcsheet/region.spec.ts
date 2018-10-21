import { async } from '@angular/core/testing';
import { Region } from './region';
import { Row } from './row';

describe('region tests', () => {
  it('create region', () => {
    const region = new Region('test region');
    let row;
    row = new Row('one');
    row.addSequence( (x) => x * 1, 10, 1).subscribe( (value: number) => {
      expect(value).toBeLessThanOrEqual(100);
    });
    region.add(row);
    row = new Row('two');
    row.addSequence( (x) => x * 2, 10, 1).subscribe( (value: number) => {
      expect(value).toBeLessThanOrEqual(100);
    });
    region.add(row);
    row = new Row('three');
    row.addSequence( (x) => x * 3, 10, 1).subscribe( (value: number) => {
      expect(value).toBeLessThanOrEqual(100);
    });
    region.add(row);

  });
});
