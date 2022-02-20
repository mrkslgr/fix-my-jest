import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithIputComponent } from './with-iput.component';

describe('WithIputComponent', () => {
  let component: WithIputComponent;
  let fixture: ComponentFixture<WithIputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WithIputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithIputComponent);
    component = fixture.componentInstance;
    console.log(component);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
