import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AgregarEditarProyectoComponent } from './components/agregar-editar-proyecto/agregar-editar-proyecto.component';
import { ListarProyectosComponent } from './components/listar-proyectos/listar-proyectos.component';
import { VerProyectoComponent } from './components/ver-proyecto/ver-proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AgregarEditarProyectoComponent,
    ListarProyectosComponent,
    VerProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
