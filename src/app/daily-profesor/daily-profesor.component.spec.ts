import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyProfesorComponent } from './daily-profesor.component';

describe('DailyProfesorComponent', () => {
  let component: DailyProfesorComponent;
  let fixture: ComponentFixture<DailyProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyProfesorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
