import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspensionServicioComponent } from './suspension-servicio.component';

describe('SuspensionServicioComponent', () => {
  let component: SuspensionServicioComponent;
  let fixture: ComponentFixture<SuspensionServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuspensionServicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuspensionServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
