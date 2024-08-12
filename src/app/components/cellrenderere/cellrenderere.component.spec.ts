import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellrenderereComponent } from './cellrenderere.component';

describe('CellrenderereComponent', () => {
  let component: CellrenderereComponent;
  let fixture: ComponentFixture<CellrenderereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CellrenderereComponent]
    });
    fixture = TestBed.createComponent(CellrenderereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
