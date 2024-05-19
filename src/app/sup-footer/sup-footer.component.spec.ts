import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupFooterComponent } from './sup-footer.component';

describe('SupFooterComponent', () => {
  let component: SupFooterComponent;
  let fixture: ComponentFixture<SupFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupFooterComponent]
    });
    fixture = TestBed.createComponent(SupFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
