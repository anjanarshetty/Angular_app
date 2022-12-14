import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllproductsComponent } from './allproducts.component';

describe('HomeComponent', () => {
  let component: AllproductsComponent;
  let fixture: ComponentFixture<AllproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});