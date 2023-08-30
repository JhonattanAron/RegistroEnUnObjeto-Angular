import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualiaComponentComponent } from './actualia-component.component';

describe('ActualiaComponentComponent', () => {
  let component: ActualiaComponentComponent;
  let fixture: ComponentFixture<ActualiaComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualiaComponentComponent]
    });
    fixture = TestBed.createComponent(ActualiaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
