import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDogsListComponent } from './product-dogs-list.component';

describe('ProductDogsListComponent', () => {
  let component: ProductDogsListComponent;
  let fixture: ComponentFixture<ProductDogsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDogsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDogsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
