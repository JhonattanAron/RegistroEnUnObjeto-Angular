import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavTopComponent } from './barra-nav-top.component';

describe('BarraNavTopComponent', () => {
  let component: BarraNavTopComponent;
  let fixture: ComponentFixture<BarraNavTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarraNavTopComponent]
    });
    fixture = TestBed.createComponent(BarraNavTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
