import { ComponentFixture, TestBed } from '@angular/core/testing';
import Swal from 'sweetalert2'
import { DashboardProfesorComponent } from './dashboardProfesor.component';

describe('DashboardProfesorComponent', () => {
  let component: DashboardProfesorComponent;
  let fixture: ComponentFixture<DashboardProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardProfesorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }); 

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
