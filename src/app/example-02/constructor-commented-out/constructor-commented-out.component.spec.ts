import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooService } from '../../services/foo.service';

import { ConstructorCommentedOutComponent } from './constructor-commented-out.component';
let mockFooService: jest.Mocked<FooService>;

describe('ConstructorCommentedOutComponent', () => {
  let component: ConstructorCommentedOutComponent;
  let fixture: ComponentFixture<ConstructorCommentedOutComponent>;

  beforeEach(async () => {
    mockFooService = { bar: jest.fn() };

    await TestBed.configureTestingModule({
      declarations: [ConstructorCommentedOutComponent],
      providers: [{ provide: FooService, useValue: mockFooService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructorCommentedOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
