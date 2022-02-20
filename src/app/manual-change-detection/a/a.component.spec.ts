import { BComponent } from '../b/b.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AComponent } from './a.component';
import { By } from '@angular/platform-browser';

describe('AComponent', () => {
  let component: AComponent;
  let fixture: ComponentFixture<AComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AComponent, BComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should activate div', () => {
    component.changeSomething();
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.activeDiv'))).toBeTruthy();
  });
});
