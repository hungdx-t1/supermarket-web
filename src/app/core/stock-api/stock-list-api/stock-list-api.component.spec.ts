import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockListApiComponent } from './stock-list-api.component';

describe('StockListApiComponent', () => {
  let component: StockListApiComponent;
  let fixture: ComponentFixture<StockListApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockListApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockListApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
