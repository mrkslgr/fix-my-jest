import { FooService } from '../../services/foo.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArrowFunctionComponent } from './arrow-function.component';

let mockFooService: jest.Mocked<FooService>;

describe('ArrowFunctionComponent', () => {
  let component: ArrowFunctionComponent;
  let fixture: ComponentFixture<ArrowFunctionComponent>;

  beforeEach(async () => {
    mockFooService = { bar: jest.fn() };
    await TestBed.configureTestingModule({
      declarations: [ArrowFunctionComponent],
      providers: [{ provide: FooService, useValue: mockFooService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call bar() in FooService', () => {
    expect(mockFooService.bar).toHaveBeenCalled();
  });
});
