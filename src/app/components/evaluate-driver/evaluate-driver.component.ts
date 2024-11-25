import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-evaluate-driver',
  standalone: false,
  
  templateUrl: './evaluate-driver.component.html',
  styleUrl: './evaluate-driver.component.css'
})
export class EvaluateDriverComponent {

  form: FormGroup;
  idConductor: string = '123456789'

  constructor(private toastr: ToastrService) {
    this.form = new FormGroup({
      selectTimeDelivery: new FormControl(0, [Validators.required]),
      efficiency: new FormControl(0, [Validators.required]),
      compliance: new FormControl(0, [Validators.required]),
    })
  }


  conductores: string[] = [
    'Maria Rodriguez',
    'Juan Ramirez',
    'Roberto Peña',
    'Andres Rodríguez'
  ]

  onSubmit() {
    const timeDelivery = parseInt(this.form.controls['selectTimeDelivery'].value);
    const efficiency = parseInt(this.form.controls['efficiency'].value);
    const selectTimeDelivery = parseInt(this.form.controls['compliance'].value);
    const formSend: object[] = []
    const promedio = (timeDelivery + efficiency + selectTimeDelivery) / 3;
    if (this.form.valid) {
      formSend.push({
        idConductor: this.idConductor,
        promedio: promedio
      })
      this.toastr.success('Formulario enviado con éxito')
      this.form.reset();
    } else {
      this.toastr.error('Error al enviar formulario')
      this.form.reset();
    }
  }


  

}
