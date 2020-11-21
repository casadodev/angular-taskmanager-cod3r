import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDoneComponent } from './product-done.component';

describe('ProductDoneComponent', () => {
  let component: ProductDoneComponent;
  let fixture: ComponentFixture<ProductDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
