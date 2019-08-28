import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDogsComponent } from './product-dogs.component';

describe('ProductDogsComponent', () => {
  let component: ProductDogsComponent;
  let fixture: ComponentFixture<ProductDogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
