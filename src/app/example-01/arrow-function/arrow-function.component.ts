import { Component, OnInit } from '@angular/core';
import { AbstractWithConstructorComponent } from '../abstract-with-constructor/abstract-with-constructor.component';

@Component({
  selector: 'app-arrow-function',
  templateUrl: './arrow-function.component.html',
  styleUrls: ['./arrow-function.component.scss'],
})
export class ArrowFunctionComponent
  extends AbstractWithConstructorComponent
  implements OnInit
{
  ngOnInit(): void {}

  doSomething = () => {
    console.log('i can do it');
  };
}
