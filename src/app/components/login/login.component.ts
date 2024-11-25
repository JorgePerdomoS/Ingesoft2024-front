import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit{

  form: FormGroup;

  constructor(private toastr: ToastrService, private authService: AuthService, private router: Router){
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      contraseña: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/home']);
    }
  }

  onSummit() {
    const username = this.form.controls['username'].value;
    const password = this.form.controls['contraseña'].value;
    const isValid = this.authService.login(username, password);
    if(isValid) {
    console.log(this.form)
    this.toastr.success('Inicio de sesión éxitoso')
    this.router.navigate(['home'])
    } else {
      this.toastr.error('Usuario o contraseña incorrectos')
    }
  }
}
