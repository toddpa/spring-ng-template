import { ValueCell } from './value.cell';

export class ValueCellBuilder {
  private value: number | string;
  private id?: string;
  private col?: number;
  private row?: number;

  clear(): ValueCellBuilder {
    this.value = undefined;
    this.id = undefined;
    this.row = undefined;
    this.col = undefined;
    return this;
  }

  withId(id: string): ValueCellBuilder {
    this.id = id;
    return this;
  }

  withValue(value: number | string): ValueCellBuilder {
    this.value = value;
    return this;
  }

  withRow(row: number): ValueCellBuilder {
    this.row = row;
    return this;
  }

  withColumn(col: number): ValueCellBuilder {
    this.col = col;
    return this;
  }

  build(): ValueCell {
    const cell = new ValueCell(this.value, this.id, this.col, this.row);
    return cell;
  }
}
