import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteVisiteNoir2Component } from './carte-visite-noir2.component';

describe('CarteVisiteNoir2Component', () => {
  let component: CarteVisiteNoir2Component;
  let fixture: ComponentFixture<CarteVisiteNoir2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarteVisiteNoir2Component]
    });
    fixture = TestBed.createComponent(CarteVisiteNoir2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
