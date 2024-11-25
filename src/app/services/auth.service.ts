import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    const user = this.isBrowser() ? localStorage.getItem('currentUser') : null;
    this.currentUserSubject = new BehaviorSubject<any>(user ? JSON.parse(user) : null);
    this.currentUser = this.currentUserSubject.asObservable();
   }

   private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  login(username: string, password: string) {
    // Aquí puedes tener tu lógica para validar contra una base de datos o API
    const users = [
      { idConductor: '345678901', username: 'admin', password: 'admin123', rol: 'Administrador' },
      { idConductor: '345678901', username: 'conductor', password: 'user123', rol: 'Conductor' },
      { idConductor: '345678901', username: 'bodega', password: 'user123', rol: 'Bodega' },
    ];

    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      // Almacenamos el usuario en el localStorage
      if (this.isBrowser()) {
        localStorage.setItem('currentUser', JSON.stringify(user));
      };
      this.currentUserSubject.next(user);  // Notificamos a los componentes que el usuario ha cambiado
      return true;
    } else {
      return false; // Si el usuario no se encuentra, retornamos falso
    }
  }

  logout() {
    if (this.isBrowser()) {
      localStorage.removeItem('currentUser');
    }    this.currentUserSubject.next(null);
  }

  get currentUserValue() {
    return this.currentUserSubject.value;
  }
}
