import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes-flota',
  standalone: false,
  
  templateUrl: './reportes-flota.component.html',
  styleUrl: './reportes-flota.component.css'
})
export class ReportesFlotaComponent implements OnInit{

  ngOnInit(): void {
  }

  //Tiempos Promedio de Entrega
  tiemposPromedio= [
    {conductor: 'Maria', promedio: '2'},
    {conductor: 'Carlos', promedio: '1.5'},
    {conductor: 'Juan', promedio: '0.5'},
    {conductor: 'Fernando', promedio: '3.5'}
  ]

  // Datos para los Accidentes Comunes (tabla)
  accidentes = [
    { tipo: 'Colisión', cantidad: 3 },
    { tipo: 'Frenazo Brusco', cantidad: 5 },
    { tipo: 'Desperfecto Mecánico', cantidad: 2 },
    { tipo: 'Accidente con Peatón', cantidad: 1 }
  ];

  // Datos para el rendimiento de los Conductores (gráfico de pastel)
  calificaciones = [
    {conductor: 'Maria', promedioCalificacion: '5.0'},
    {conductor: 'Carlos', promedioCalificacion: '3.0'},
    {conductor: 'Juan', promedioCalificacion: '4.2'},
    {conductor: 'Fernando', promedioCalificacion: '3.5'}
  ]

  // Datos para el Estado de las Cargas (gráfico de dona)
  estadoCargas = [
    {nombreCargamento: 'Cargamento de frutas', estado: 'En proceso', temperatura: '25°C', conductorAsignado: 'Maria', recepcionado: 'No'},
    {nombreCargamento: 'Cargamento de verduras', estado: 'Completada', temperatura: '28°C', conductorAsignado: 'Fernando', recepcionado: 'Sí'},
    {nombreCargamento: 'Cargamento de electrodomésticos', estado: 'Completada', temperatura: '25°C', conductorAsignado: 'Juan', recepcionado: 'Sí'},
    {nombreCargamento: 'Cargamento de telas', estado: 'En proceso', temperatura: '30°C', conductorAsignado: 'Panameños', recepcionado: 'No'}
  ]
}
