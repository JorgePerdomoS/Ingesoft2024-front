import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/enviroment';

interface Vehiculo {
  id: number;
  modelo: string;
  tipo: string;
  capacidadCarga: number;
  sensores: string[];
}

@Injectable({
  providedIn: 'root'
})
export class FlotaVehiculosService {

  private apiUrl = environment+'/api/vehiculos';  // URL del backend

  constructor(private http: HttpClient) {}

  // Obtener la lista de vehículos
  obtenerVehiculos(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>(this.apiUrl);
  }

  // Modificar las características de un vehículo
  modificarVehiculo(vehiculo: Vehiculo): Observable<Vehiculo> {
    return this.http.put<Vehiculo>(`${this.apiUrl}/${vehiculo.id}`, vehiculo);
  }
}
