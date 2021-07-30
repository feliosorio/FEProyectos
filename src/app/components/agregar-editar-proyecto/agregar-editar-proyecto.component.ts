import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/interfaces/Proyecto';

@Component({
  selector: 'app-agregar-editar-proyecto',
  templateUrl: './agregar-editar-proyecto.component.html',
  styleUrls: ['./agregar-editar-proyecto.component.css']
})
export class AgregarEditarProyectoComponent implements OnInit {
  agregarProyecto: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.agregarProyecto = this.fb.group({
  idFacultad: ['', Validators.required],
  idDepartamento: ['', Validators.required],
  idGrupoInvestigacion: ['', Validators.required],
  nombreProyecto: ['', Validators.required],
  anioInicio: ['', Validators.required],
  fechaInicio: ['', Validators.required],
  fechaInicialTerminacion: ['', Validators.required],
  fechaEvaluacion: ['', Validators.required],
  fechaRealFinalizacion: ['', Validators.required],
  cofinanciacion: ['', Validators.required],
  entidadCofinanciadora: ['', Validators.required],
  valorCofinanciacionRecurrente: ['', Validators.required],
  valorCofinanciacionNoRecurrente: ['', Validators.required],
  valorRecurrenteUcaldas: ['', Validators.required],
  valorAsignadoVip: ['', Validators.required],
  idConvocatoria: ['', Validators.required],
  observacionesProyecto: ['', Validators.required],
  objetivo: ['', Validators.required],
  resumen: ['', Validators.required],
  resultadosEsperados: ['', Validators.required],
  compromisos: ['', Validators.required],
  idTipoProyecto: ['', Validators.required],
  areaEstrategica: ['', Validators.required],
  areaEstrategica2: ['', Validators.required],
  actaSeguimiento: ['', Validators.required],
  estadoProyecto: ['', Validators.required], //{En aprovación}
  participantes: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }
  agregar(){
   // console.log(this.agregarProyecto);
    //const proyecto: Proyecto = {
      //creador: this.agregarProyecto.get('creador')?.value,
      //titulo: this.agregarProyecto.get('titulo')?.value,
      //texto: this.agregarProyecto.get('texto')?.value,
      //fechaCreacion: new Date
    //}
  }

}
