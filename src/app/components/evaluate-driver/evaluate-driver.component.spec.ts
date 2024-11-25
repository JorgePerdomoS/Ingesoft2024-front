import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateDriverComponent } from './evaluate-driver.component';

describe('EvaluateDriverComponent', () => {
  let component: EvaluateDriverComponent;
  let fixture: ComponentFixture<EvaluateDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvaluateDriverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluateDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
