import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcuerdosPagoComponent } from './acuerdos-pago.component';

describe('AcuerdosPagoComponent', () => {
  let component: AcuerdosPagoComponent;
  let fixture: ComponentFixture<AcuerdosPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcuerdosPagoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcuerdosPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
