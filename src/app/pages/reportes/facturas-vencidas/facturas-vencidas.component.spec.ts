import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturasVencidasComponent } from './facturas-vencidas.component';

describe('FacturasVencidasComponent', () => {
  let component: FacturasVencidasComponent;
  let fixture: ComponentFixture<FacturasVencidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacturasVencidasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturasVencidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
