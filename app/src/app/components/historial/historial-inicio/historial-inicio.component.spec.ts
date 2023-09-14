import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialInicioComponent } from './historial-inicio.component';

describe('HistorialInicioComponent', () => {
  let component: HistorialInicioComponent;
  let fixture: ComponentFixture<HistorialInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
