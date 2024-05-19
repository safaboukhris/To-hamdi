import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteVisiteNoirComponent } from './carte-visite-noir.component';

describe('CarteVisiteNoirComponent', () => {
  let component: CarteVisiteNoirComponent;
  let fixture: ComponentFixture<CarteVisiteNoirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarteVisiteNoirComponent]
    });
    fixture = TestBed.createComponent(CarteVisiteNoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
