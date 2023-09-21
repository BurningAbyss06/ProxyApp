import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoDeckComponent } from './nuevo-deck.component';

describe('NuevoDeckComponent', () => {
  let component: NuevoDeckComponent;
  let fixture: ComponentFixture<NuevoDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoDeckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
