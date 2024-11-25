import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesFlotaComponent } from './reportes-flota.component';

describe('ReportesFlotaComponent', () => {
  let component: ReportesFlotaComponent;
  let fixture: ComponentFixture<ReportesFlotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportesFlotaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportesFlotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
