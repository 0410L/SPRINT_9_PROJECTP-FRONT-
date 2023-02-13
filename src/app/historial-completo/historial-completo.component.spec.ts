import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialCompletoComponent } from './historial-completo.component';

describe('HistorialCompletoComponent', () => {
  let component: HistorialCompletoComponent;
  let fixture: ComponentFixture<HistorialCompletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialCompletoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
