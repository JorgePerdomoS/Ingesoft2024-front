import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FlotaVehiculosService } from './services/flota-vehiculos.service';
import { UserRoleManagementComponent } from './components/user-role-management/user-role-management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { FormularioEntregaComponent } from './components/formulario-entrega/formulario-entrega.component';
import { ReportesFlotaComponent } from './components/reportes-flota/reportes-flota.component';
import { VehicleLoadsComponent } from './components/vehicle-loads/vehicle-loads.component';
import { EvaluateDriverComponent } from './components/evaluate-driver/evaluate-driver.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    MenuComponent,
    FormularioEntregaComponent,
    ReportesFlotaComponent,
    VehicleLoadsComponent,
    EvaluateDriverComponent,        
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    UserRoleManagementComponent,
    ReactiveFormsModule,
    RouterModule,
    ToastrModule.forRoot({
    })
  ],
  providers: [
    FlotaVehiculosService,
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
