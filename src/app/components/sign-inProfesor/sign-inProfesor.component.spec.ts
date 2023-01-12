import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignInProfesorComponent } from './sign-inProfesor.component';

describe('SignInProfesorComponent', () => {
  let component: SignInProfesorComponent;
  let fixture: ComponentFixture<SignInProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInProfesorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
