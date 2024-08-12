import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellinputComponent } from './cellinput.component';

describe('CellinputComponent', () => {
  let component: CellinputComponent;
  let fixture: ComponentFixture<CellinputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CellinputComponent]
    });
    fixture = TestBed.createComponent(CellinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
