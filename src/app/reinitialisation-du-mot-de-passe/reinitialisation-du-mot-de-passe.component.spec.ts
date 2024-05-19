import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinitialisationDuMotDePasseComponent } from './reinitialisation-du-mot-de-passe.component';

describe('ReinitialisationDuMotDePasseComponent', () => {
  let component: ReinitialisationDuMotDePasseComponent;
  let fixture: ComponentFixture<ReinitialisationDuMotDePasseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReinitialisationDuMotDePasseComponent]
    });
    fixture = TestBed.createComponent(ReinitialisationDuMotDePasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
