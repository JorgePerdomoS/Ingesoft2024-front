import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-role-management',
  templateUrl: './user-role-management.component.html',
  styleUrls: ['./user-role-management.component.css']
})
export class UserRoleManagementComponent implements OnInit{
  users = [
    { document: 12345678, username: 'Juan', role: 'conductor', password: '' },
    { document: 54321697, username: 'Ana', role: 'administrador', password: '' },
    { document: 34569871, username: 'Carlos', role: 'bodega', password: '' }
  ];

  newUser = {
    username: '',
    role: 'conductor',
    password: '',
    document: 0
  };
  


  isPasswordVisible: boolean = false;
  generatedPassword: string = '';

  ngOnInit(): void {
    this.generateRandomPassword();
  }
  // Crear un nuevo usuario
  onSubmit() {
    if (this.newUser.username) {
      this.users.push({ ...this.newUser });
      this.newUser.username = '';
    }
  }

  // Cambiar el rol de un usuario
  onRoleChange(event: any) {
    this.newUser.role = event.target.value
    console.log('Rol cambiado:', this.newUser);
  }

  // Eliminar un usuario
  deleteUser(index: number) {
    this.users.splice(index, 1);
  }

  //Mostrar constraseña
  togglePasswordVisibility(): void {
    debugger;
    this.isPasswordVisible = !this.isPasswordVisible;
  }

   // Genera una contraseña aleatoria
   generateRandomPassword(length: number = 12): void {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    this.generatedPassword = password;
  }
}
