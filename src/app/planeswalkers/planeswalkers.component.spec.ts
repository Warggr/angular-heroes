import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneswalkersComponent } from './planeswalkers.component';

describe('PlaneswalkersComponent', () => {
  let component: PlaneswalkersComponent;
  let fixture: ComponentFixture<PlaneswalkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaneswalkersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneswalkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
