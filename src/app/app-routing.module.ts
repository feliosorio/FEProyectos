import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEditarProyectoComponent } from './components/agregar-editar-proyecto/agregar-editar-proyecto.component';
import { ListarProyectosComponent } from './components/listar-proyectos/listar-proyectos.component';
import { VerProyectoComponent } from './components/ver-proyecto/ver-proyecto.component';

const routes: Routes = [
  { path: '', component: ListarProyectosComponent },
  { path: 'agregar', component: AgregarEditarProyectoComponent },
  { path: 'editar/:id', component: AgregarEditarProyectoComponent },
  { path: 'ver/:id', component: VerProyectoComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
