import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Checkout } from './checkout';

describe('Checkout', () => {
  let fixture: ComponentFixture<Checkout>;
  let component: Checkout;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [Checkout] }).compileComponents();
    fixture = TestBed.createComponent(Checkout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
