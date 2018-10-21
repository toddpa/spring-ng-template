import { async } from '@angular/core/testing';
import { ValueCell } from './value.cell';
import { Cell } from './cell';
import { ValueCellBuilder } from './value.cell.builder';

describe('ValueCell', () => {

  beforeEach(async(() => {
  }));

  beforeEach(() => {
  });

  it('should build a ValueCell', () => {
    const builder = new ValueCellBuilder();
    const cell = builder.withValue(10).withId('test').withRow(0).withColumn(0).build();
    expect(cell.value).toEqual(10);
    expect(cell.id).toEqual('test');
    expect(cell.row).toEqual(0);
    expect(cell.col).toEqual(0);
  });
});
