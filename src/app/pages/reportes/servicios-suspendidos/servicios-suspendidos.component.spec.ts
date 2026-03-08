import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosSuspendidosComponent } from './servicios-suspendidos.component';

describe('ServiciosSuspendidosComponent', () => {
  let component: ServiciosSuspendidosComponent;
  let fixture: ComponentFixture<ServiciosSuspendidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosSuspendidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosSuspendidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
