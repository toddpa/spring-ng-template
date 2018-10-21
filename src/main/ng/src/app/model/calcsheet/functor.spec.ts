import { async } from '@angular/core/testing';
import { Functor } from './functor';
import { ValueCellBuilder } from './value.cell.builder';
import { ValueCell} from './value.cell';
import { Cell} from './cell';

describe('Functor', () => {
  const builder = new ValueCellBuilder();

  it('should execute', async () => {
    const cells = [];
    cells.push(builder.withValue(2).build());
    cells.push(builder.withValue(3).build());
    const functor = new Functor(cells, (c: Cell[]): number => {
      return (c[0].value as number) * (c[1].value as number);
    });
    expect(functor.exec()).toEqual(6);
  });
}
);
