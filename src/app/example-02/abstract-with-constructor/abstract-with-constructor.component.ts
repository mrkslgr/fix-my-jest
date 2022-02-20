import { FooService } from '../../services/foo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  template: '<div></div>',
})
export abstract class AbstractWithConstructorComponent implements OnInit {
  constructor(private fooService: FooService) {
    this.fooService.bar();
  }

  ngOnInit(): void {}
}
