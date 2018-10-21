import { CalculatedCell } from './calculated.cell';
import { Functor } from './functor';

export class CalculatedCellBuilder {
  private id: string;
  private functor?: Functor;
  private col?: number;
  private row?: number;

  clear(): CalculatedCellBuilder {
    this.functor = undefined;
    this.id = undefined;
    this.row = undefined;
    this.col = undefined;
    return this;
  }

  withFunctor(functor: Functor): CalculatedCellBuilder {
    this.functor = functor;
    return this;
  }

  withId(id: string): CalculatedCellBuilder {
    this.id = id;
    return this;
  }

  withRow(row: number): CalculatedCellBuilder {
    this.row = row;
    return this;
  }

  withColumn(col: number): CalculatedCellBuilder {
    this.col = col;
    return this;
  }

  build(): CalculatedCell {
    const cell = new CalculatedCell(this.functor, this.id, this.col, this.row);
    return cell;
  }
}
