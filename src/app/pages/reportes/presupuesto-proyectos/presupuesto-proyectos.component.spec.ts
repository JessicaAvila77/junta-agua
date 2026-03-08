import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresupuestoProyectosComponent } from './presupuesto-proyectos.component';

describe('PresupuestoProyectosComponent', () => {
  let component: PresupuestoProyectosComponent;
  let fixture: ComponentFixture<PresupuestoProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresupuestoProyectosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresupuestoProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
