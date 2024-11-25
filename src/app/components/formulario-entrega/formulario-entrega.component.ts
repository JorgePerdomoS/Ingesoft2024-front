import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import e from 'express';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-formulario-entrega',
  standalone: false,
  
  templateUrl: './formulario-entrega.component.html',
  styleUrl: './formulario-entrega.component.css'
})
export class FormularioEntregaComponent {
  form: FormGroup;
  idUser: number = 0;

  constructor(private toastr: ToastrService, private authService: AuthService){
    this.form = new FormGroup({
      idUser: new FormControl(this.idUser),
      destino: new FormControl('', [Validators.required]),
      estado: new FormControl('', [Validators.required]),
      entrega: new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    if (this.form.valid) {
      this.idUser = this.authService.currentUserValue.id;
      console.log(this.form.controls);
      this.form.reset();
      this.toastr.success('Formulario enviado con éxito')
    } else {
      this.form.reset();
      this.toastr.error('Formulario inválido');
    }
  }
}
