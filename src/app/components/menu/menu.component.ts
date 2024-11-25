import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  standalone: false,
  
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{

  showNavbar = true
  isAdmin: boolean = false;
  isDriver: boolean = false;
  isStorage: boolean = false

  constructor(private router: Router, private authService: AuthService){

  }

  ngOnInit() {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      // Ocultar menú si la URL es '/login'
      this.showNavbar = event.url !== '/login';
    });

    const currentUser = this.authService.currentUserValue;
    this.isAdmin = currentUser && currentUser.rol === 'Administrador';
    this.isDriver = currentUser && currentUser.rol === 'Conductor';
    this.isStorage = currentUser && currentUser.rol === 'Bodega';
  }

  logOut(){
    this.authService.logout()
  }
}
