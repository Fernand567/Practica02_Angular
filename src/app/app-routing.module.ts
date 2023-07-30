import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InformacionComponent } from './informacion/informacion.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ReporteComponent } from './reporte/reporte.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';

const rutas: Routes= [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'informacion', component: InformacionComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'reporte', component: ReporteComponent },
  { path: 'usuarios', component: UsuarioComponent },

  
  ];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(rutas)],
    CommonModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
