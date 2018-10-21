import { async } from '@angular/core/testing';
import { ValueCell } from './value.cell';
import { Cell } from './cell';
import { CalculatedCellBuilder } from './calculated.cell.builder';
import { ValueCellBuilder } from './value.cell.builder';
import { Functor } from './functor';

/*
const sum = (cells: Cell[]): number => {
  const values = cells.map((v): number => {
    return v.value as number;
  });
  return values.reduce((a, b) => {
    return a + b;
  });
};

const product = (cells: Cell[]): number => {
  const values = cells.map((v): number => {
    return v.value as number;
  });
  return values.reduce((a, b) => {
    return a * b;
  });
};
*/

describe('CalculatedCell', () => {

  beforeEach(async(() => {
  }));

  beforeEach(() => {
  });

  it('should build a CalculatedCell from ValueCells', () => {
    const builderV = new ValueCellBuilder();
    const builderC = new CalculatedCellBuilder();
    const cells = [];

    cells.push(builderV.withValue(2).build());
    cells.push(builderV.withValue(3).build());
    cells.push(builderV.withValue(4).build());

    let functor = new Functor(cells, Functor.sum);
    const sumCell = builderC.withFunctor(functor).withId('sum').withRow(0).withColumn(0).build();
    expect(sumCell.id).toEqual('sum');
    expect(sumCell.row).toEqual(0);
    expect(sumCell.col).toEqual(0);
    expect(sumCell.value).toEqual(9);

    functor = new Functor(cells, Functor.product);
    const productCell = builderC.withFunctor(functor).withId('product').withRow(0).withColumn(0).build();
    expect(productCell.id).toEqual('product');
    expect(productCell.row).toEqual(0);
    expect(productCell.col).toEqual(0);
    expect(productCell.value).toEqual(24);

    functor = new Functor([sumCell, productCell], Functor.product);
    const prodSumCell = builderC.withFunctor(functor).withId('product').withRow(0).withColumn(0).build();
    expect(prodSumCell.value).toEqual(216);

    cells[1].value = 5;
    expect(sumCell.value).toEqual(11);
    expect(productCell.value).toEqual(40);
    expect(prodSumCell.value).toEqual(440);
  });

});
