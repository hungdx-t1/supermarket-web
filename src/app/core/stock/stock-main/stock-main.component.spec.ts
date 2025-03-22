import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMainComponent } from './stock-main.component';

describe('StockMainComponent', () => {
  let component: StockMainComponent;
  let fixture: ComponentFixture<StockMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
