import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDexpeditionComponent } from './confirmation-dexpedition.component';

describe('ConfirmationDexpeditionComponent', () => {
  let component: ConfirmationDexpeditionComponent;
  let fixture: ComponentFixture<ConfirmationDexpeditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmationDexpeditionComponent]
    });
    fixture = TestBed.createComponent(ConfirmationDexpeditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
