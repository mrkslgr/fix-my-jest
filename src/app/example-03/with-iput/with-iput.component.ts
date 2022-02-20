import { Component, Input, OnInit } from '@angular/core';
import { AbstractWithConstructorComponent } from '../abstract-with-constructor/abstract-with-constructor.component';

@Component({
  selector: 'app-with-iput',
  templateUrl: './with-iput.component.html',
  styleUrls: ['./with-iput.component.scss'],
})
export class WithIputComponent
  extends AbstractWithConstructorComponent
  implements OnInit
{
  @Input()
  bar: boolean = false;

  ngOnInit(): void {
    this.bar = true;
  }
}
