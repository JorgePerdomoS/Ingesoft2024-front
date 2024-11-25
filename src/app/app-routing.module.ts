import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UserRoleManagementComponent } from './components/user-role-management/user-role-management.component';
import { FormularioEntregaComponent } from './components/formulario-entrega/formulario-entrega.component';
import { ReportesFlotaComponent } from './components/reportes-flota/reportes-flota.component';
import { VehicleLoadsComponent } from './components/vehicle-loads/vehicle-loads.component';
import { EvaluateDriverComponent } from './components/evaluate-driver/evaluate-driver.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'role-managment', component: UserRoleManagementComponent},
  {path: 'form-entrega', component: FormularioEntregaComponent},
  {path: 'reporte-entrega', component: ReportesFlotaComponent},
  {path: 'vehiculos', component: VehicleLoadsComponent},
  {path: 'evaluación', component: EvaluateDriverComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
