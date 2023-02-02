import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanComponent } from './qr.component';

describe('ScanComponent', () => {
  let component: ScanComponent;
  let fixture: ComponentFixture<ScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
