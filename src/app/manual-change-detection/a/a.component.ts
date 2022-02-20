import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { BComponent } from '../b/b.component';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss'],
})
export class AComponent implements OnInit {
  foo;
  active: boolean = false;

  @ViewChild('myBComponent') myBComponent: BComponent;

  constructor(private change: ChangeDetectorRef) {}

  ngOnInit(): void {}
  changeSomething() {
    this.foo = 'randomString';

    this.doSomething()
      .pipe(
        tap(() => {
          console.log('now here');
          if (this.myBComponent) {
            this.active = true;
          } else {
            console.log('im not present :(');
          }
        })
      )
      .subscribe();
  }

  doSomething(): Observable<boolean> {
    return new Observable((updateDataSourceSubscriber) => {
      this.change.detectChanges();
      updateDataSourceSubscriber.next();
      updateDataSourceSubscriber.complete();
    });
  }
}
