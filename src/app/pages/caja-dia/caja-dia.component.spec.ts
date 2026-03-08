import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaDiaComponent } from './caja-dia.component';

describe('CajaDiaComponent', () => {
  let component: CajaDiaComponent;
  let fixture: ComponentFixture<CajaDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CajaDiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CajaDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
