import { Component } from '@angular/core';
import { Vehicle } from '../../model/vehicle.model';
import { Load } from '../../model/load.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vehicle-loads',
  standalone: false,
  
  templateUrl: './vehicle-loads.component.html',
  styleUrl: './vehicle-loads.component.css'
})
export class VehicleLoadsComponent {
  cargoForm: FormGroup;
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

  constructor( private toastr: ToastrService) {
    this.cargoForm = new FormGroup({
      nombreCarga: new FormControl('', Validators.required),
      temperatura: new FormControl('', Validators.required),
      conductor: new FormControl('', Validators.required),
      confirmarRecepcion: new FormControl('', Validators.required)
    })

    this.vehicles = [
      new Vehicle(1, 'Camión A', [
        new Load(1, 'Cargamento de frutas', 25, false, 'Maria'),
        new Load(2, 'Cargamento de verduras', 22, true, 'Juan')
      ]),
      new Vehicle(2, 'Camión B', [
        new Load(3, 'Cargamento de electrodomésticos', 18, false, 'José')
      ])
    ];
  }

  ngOnInit(): void {}

  selectVehicle(vehicle: Vehicle): void {
    this.selectedVehicle = vehicle;
  }

  verifyDelivery(load: Load): void {
    load.deliveryVerified = true;
  }

  showRandomImage(): void {
    const randomIndex = Math.floor(Math.random() * this.images.length);
    this.selectedImage = this.images[randomIndex];
  }

  onSubmit(){
    if(this.cargoForm.valid){
      console.log(this.cargoForm)
      this.toastr.success('Formulario enviado con éxito')
    }
  }
}
