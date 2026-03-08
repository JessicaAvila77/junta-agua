import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresosDiaComponent } from './ingresos-dia.component';

describe('IngresosDiaComponent', () => {
  let component: IngresosDiaComponent;
  let fixture: ComponentFixture<IngresosDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngresosDiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresosDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
