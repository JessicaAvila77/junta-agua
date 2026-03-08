import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperantesComponent } from './cooperantes.component';

describe('CooperantesComponent', () => {
  let component: CooperantesComponent;
  let fixture: ComponentFixture<CooperantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CooperantesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CooperantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
