import { Component } from '@angular/core';

@Component({
  selector: 'app-evaluate-driver',
  standalone: false,
  
  templateUrl: './evaluate-driver.component.html',
  styleUrl: './evaluate-driver.component.css'
})
export class EvaluateDriverComponent {

  conductores: string[] = [
    'Maria Rodriguez',
    'Juan Ramirez',
    'Roberto Peña',
    'Andres Rodríguez'
  ]

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Formulario Enviado', form.value);
    } else {
      console.log('Formulario inválido');
    }
  }
  

}
