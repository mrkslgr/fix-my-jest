import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FooService {
  constructor() {}

  bar() {
    console.log("Hi, i'm there!");
  }
}
