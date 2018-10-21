import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, Observer, fromEvent, of, range, Subject } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit, OnDestroy {
  private observable: Observable<number>;
  private observer: Observer<number> = {
    next: function (value: number) {
      console.log(value);
    },
    error: function (error) {
      console.log('ERROR');
    },
    complete: function () {
      console.log('COMPLETE');
    }
  };
  private subscription: Subscription;
  private subject = new Subject<number>();

  constructor() { }

  ngOnInit() {
    // this.observable = Observable.create();
    this.observable = new Observable((x) => { console.log('Initialized Observable'); });
    this.subscription = this.subject.pipe(map(x => x / 1000))
      .subscribe(this.observer);
    // range(1, 100).pipe(filter( x => x % 5 === 0), map(x => x * 3)).subscribe(x => console.log(x));
  }

  clicked(event: MouseEvent) {
    console.log('progress button clicked');
    this.subject.next(event.clientY);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
