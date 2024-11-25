import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-entrega',
  standalone: false,
  
  templateUrl: './formulario-entrega.component.html',
  styleUrl: './formulario-entrega.component.css'
})
export class FormularioEntregaComponent {
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Formulario Enviado', form.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}
