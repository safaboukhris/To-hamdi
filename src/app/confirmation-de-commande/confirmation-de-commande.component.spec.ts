import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDeCommandeComponent } from './confirmation-de-commande.component';

describe('ConfirmationDeCommandeComponent', () => {
  let component: ConfirmationDeCommandeComponent;
  let fixture: ComponentFixture<ConfirmationDeCommandeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmationDeCommandeComponent]
    });
    fixture = TestBed.createComponent(ConfirmationDeCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
