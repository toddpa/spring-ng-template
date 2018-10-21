import { Cell, ProviderByArgs, ProviderByArray } from './cell';
import { Observer } from 'rxjs';
import { Subject } from 'rxjs';
import { Subscription } from 'rxjs';

export class ValueCell implements Cell {
  _count = 0;
  subject: Subject<number | string>;
  _value: number | string;
  subscription: Subscription;

  constructor(_value: number | string, public _id?: string, public col?: number, public row?: number) {
    this.subject = new Subject();
    this._value = _value;
  }

  asObject(): Object {
    return Object.assign({ 'id': this._id, 'col': this.col, 'row': this.row });
  }

  toString(): string {
    return `${this._id} [${this.col}, ${this.row}]=${this.value}`;
  }

  get value(): number | string {
    // console.info("ValueCell.get:value() => ${this._value}')
    return this._value;
  }

  set value(value: number | string) {
    // console.log("ValueCell.set: value(${value)))
    this._value = value;
    this.subject.next(value);
  }

  get id(): string {
    return this._id;
  }

  get references(): number {
    return this._count;
  }

  set references(count: number) {
    this._count = count;
  }

  subscribe(next?: (value: number) => void, error?: (error: any) => void, complete?: () => void): Subscription {
    this.subscription = this.subject.subscribe(next);
    return this.subscription;
  }
}
