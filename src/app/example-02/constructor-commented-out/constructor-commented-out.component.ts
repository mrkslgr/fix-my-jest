import { Component, OnInit } from '@angular/core';
import { AbstractWithConstructorComponent } from '../abstract-with-constructor/abstract-with-constructor.component';

@Component({
  selector: 'app-constructor-commented-out',
  templateUrl: './constructor-commented-out.component.html',
  styleUrls: ['./constructor-commented-out.component.scss'],
})
export class ConstructorCommentedOutComponent
  extends AbstractWithConstructorComponent
  implements OnInit
{
  // constructor(fooService: FooService) {
  //   super(fooService);
  //  }

  ngOnInit(): void {}
}
