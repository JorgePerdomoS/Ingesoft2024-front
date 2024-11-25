import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleLoadsComponent } from './vehicle-loads.component';

describe('VehicleLoadsComponent', () => {
  let component: VehicleLoadsComponent;
  let fixture: ComponentFixture<VehicleLoadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicleLoadsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleLoadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
