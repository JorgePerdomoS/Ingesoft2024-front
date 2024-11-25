import { Component } from '@angular/core';
import { Vehicle } from '../../model/vehicle.model';
import { Load } from '../../model/load.model';

@Component({
  selector: 'app-vehicle-loads',
  standalone: false,
  
  templateUrl: './vehicle-loads.component.html',
  styleUrl: './vehicle-loads.component.css'
})
export class VehicleLoadsComponent {
  vehicles: Vehicle[] = [];
  selectedVehicle: Vehicle | null = null;
  images: string[] = [
    './Ruta1.png',
    './Ruta2.png',
    './Ruta3.png',
    './Ruta4.png',
    './Ruta5.png'
  ]
  selectedImage: string | null = null;
  conductores: string[] = [
    'Maria Rodriguez',
    'Juan Ramirez',
    'Roberto Peña',
    'Andres Rodríguez'
  ]

  constructor() {
    this.vehicles = [
      new Vehicle(1, 'Camión A', [
        new Load(1, 'Cargamento de frutas', 'in-progress', 25, false),
        new Load(2, 'Cargamento de verduras', 'completed', 22, true)
      ]),
      new Vehicle(2, 'Camión B', [
        new Load(3, 'Cargamento de electrodomésticos', 'in-progress', 18, false)
      ])
    ];
  }

  ngOnInit(): void {}

  selectVehicle(vehicle: Vehicle): void {
    this.selectedVehicle = vehicle;
  }

  updateLoadStatus(load: Load, status: string): void {
    load.status = status;
  }

  verifyDelivery(load: Load): void {
    load.deliveryVerified = true;
  }

  addLoadToVehicle(vehicle: Vehicle, description: string): void {
    const newLoad = new Load(vehicle.loads.length + 1, description);
    vehicle.loads.push(newLoad);
  }

  showRandomImage(): void {
    const randomIndex = Math.floor(Math.random() * this.images.length);
    this.selectedImage = this.images[randomIndex];
  }
}
