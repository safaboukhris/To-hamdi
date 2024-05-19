import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteVisite2Component } from './carte-visite2.component';

describe('CarteVisite2Component', () => {
  let component: CarteVisite2Component;
  let fixture: ComponentFixture<CarteVisite2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarteVisite2Component]
    });
    fixture = TestBed.createComponent(CarteVisite2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
