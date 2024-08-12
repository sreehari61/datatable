import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnpopupComponent } from './columnpopup.component';

describe('ColumnpopupComponent', () => {
  let component: ColumnpopupComponent;
  let fixture: ComponentFixture<ColumnpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColumnpopupComponent]
    });
    fixture = TestBed.createComponent(ColumnpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
