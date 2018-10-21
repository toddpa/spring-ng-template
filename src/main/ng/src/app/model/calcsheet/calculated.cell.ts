import { Cell, ProviderByArgs, ProviderByArray } from './cell';
import { ValueCell } from './value.cell';
import { Functor } from './functor';
import { Subscription } from 'rxjs';


export class CalculatedCell extends ValueCell implements Cell {
  constructor(private f: Functor, id?: string, col?: number, row?: number) {
    super(null, id, col, row);
    f.args.forEach((cell) => {
      if (!cell) {
        throw Error('Referenced cell cannot be null in Calculated cell constructor');
      }
      cell.references++;
    });
    this._value = f.exec();
    this.subscribeAll();
  }

  subscribeAll(): void {
    this.f.args.forEach((cell) => {
      // console.log('SUBSCRIBING: ${cell}');
      cell.subscribe((x: number): void => { this.next(x); });
    });
  }

  get value(): number | string {
    // console.log('CalculatedCell.get: value() => ${this._value))
    return this._value;
  }

  set value(value: number | string) {
    // console.log("CalculatedCell.setValue(${value}))
    this._value = value;
  }

  next(value: number) {
    // console.log("RECEIVING Calculated Cell.next(${value}))
    this.value = this.f.exec();
    this.subject.next(this.value);
  }

  subscribe(next?: (value: number) => void, error?: (error: any) => void, complete?: () => void): Subscription {
    this.subscription = this.subject.subscribe(next);
    return this.subscription;
  }
}
