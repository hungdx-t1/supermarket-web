import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockInfoApiComponent } from './stock-info-api.component';

describe('StockInfoApiComponent', () => {
  let component: StockInfoApiComponent;
  let fixture: ComponentFixture<StockInfoApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockInfoApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockInfoApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
