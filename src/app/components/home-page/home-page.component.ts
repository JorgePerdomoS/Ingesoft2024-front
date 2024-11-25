import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Tooltip } from 'bootstrap';

@Component({
  selector: 'app-home-page',
  standalone: false,
  
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit, AfterViewInit{

  points = [
    { top: 20, left: 30, tooltip: 'Punto 1: Información relevante' },
    { top: 50, left: 60, tooltip: 'Punto 2: Detalle interesante' },
    { top: 40, left: 35, tooltip: 'Punto 3: Otro detalle' },
    { top: 30, left: 55, tooltip: 'Punto 4: Otro detalle' },
    { top: 60, left: 35, tooltip: 'Punto 5: Otro detalle' },
    { top: 30, left: 50, tooltip: 'Punto 6: Otro detalle' }

  ];

  constructor(){}

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      import('bootstrap').then((bootstrap) => {
        const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.forEach(tooltipTriggerEl => {
          new bootstrap.Tooltip(tooltipTriggerEl);
        });
      });
    }    
  }
}
