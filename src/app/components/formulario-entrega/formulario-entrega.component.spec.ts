import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEntregaComponent } from './formulario-entrega.component';

describe('FormularioEntregaComponent', () => {
  let component: FormularioEntregaComponent;
  let fixture: ComponentFixture<FormularioEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioEntregaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
