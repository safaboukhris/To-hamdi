import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetourCommandeComponent } from './retour-commande.component';

describe('RetourCommandeComponent', () => {
  let component: RetourCommandeComponent;
  let fixture: ComponentFixture<RetourCommandeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetourCommandeComponent]
    });
    fixture = TestBed.createComponent(RetourCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
