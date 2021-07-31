import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/interfaces/Proyecto';

@Component({
  selector: 'app-listar-proyectos',
  templateUrl: './listar-proyectos.component.html',
  styleUrls: ['./listar-proyectos.component.css'],
})
export class ListarProyectosComponent implements OnInit {
  listaProyectos: Proyecto[] = [
    {
      id: 1,
      idFacultad: 'Ingenieria',
      idDepartamento: 'Ingenieria',
      actaSeguimiento: '001',
      anioInicio: '2021',
      areaEstrategica: 'ciencias',
      areaEstrategica2: 'matematicas',
      cofinanciacion: true,
      estadoProyecto: 'activo',
      fechaEvaluacion: new Date(),
      fechaInicialTerminacion: new Date(),
      fechaInicio: new Date(),
      fechaRealFinalizacion: new Date(),
      idConvocatoria: '001',
      idGrupoInvestigacion: '001',
      idTipoProyecto: 'Investigativo',
      nombreProyecto: 'BioTec',
      objetivo: 'soluciones',
      observacionesProyecto: 'ninguna',
      resultadosEsperados: 'Proyecto',
      resumen: '',
      valorAsignadoVip: 12,
      valorCofinanciacionNoRecurrente: 300000,
      valorCofinanciacionRecurrente: 5000000,
      valorRecurrenteUcaldas: 1000000,
    },
    {
      id: 2,
      idFacultad: 'Artes y Humanidades',
      idDepartamento: 'Humanidades',
      actaSeguimiento: '002',
      anioInicio: '2021',
      areaEstrategica: 'ciencias',
      areaEstrategica2: 'matematicas',
      cofinanciacion: true,
      estadoProyecto: 'activo',
      fechaEvaluacion: new Date(),
      fechaInicialTerminacion: new Date(),
      fechaInicio: new Date(),
      fechaRealFinalizacion: new Date(),
      idConvocatoria: '003',
      idGrupoInvestigacion: '001',
      idTipoProyecto: 'Experimental',
      nombreProyecto: 'SociedadMas',
      objetivo: 'soluciones',
      observacionesProyecto: 'ninguna',
      resultadosEsperados: 'Proyecto',
      resumen: '',
      valorAsignadoVip: 12,
      valorCofinanciacionNoRecurrente: 300000,
      valorCofinanciacionRecurrente: 5000000,
      valorRecurrenteUcaldas: 1000000,
    },
    {
      id: 3,
      idFacultad: 'Ingenieria',
      idDepartamento: 'Salud',
      actaSeguimiento: '003',
      anioInicio: '2021',
      areaEstrategica: 'ciencias',
      areaEstrategica2: 'matematicas',
      cofinanciacion: true,
      estadoProyecto: 'activo',
      fechaEvaluacion: new Date(),
      fechaInicialTerminacion: new Date(),
      fechaInicio: new Date(),
      fechaRealFinalizacion: new Date(),
      idConvocatoria: '002',
      idGrupoInvestigacion: '001',
      idTipoProyecto: 'Experimental',
      nombreProyecto: 'SoluCancer',
      objetivo: 'soluciones',
      observacionesProyecto: 'ninguna',
      resultadosEsperados: 'Proyecto',
      resumen: '',
      valorAsignadoVip: 12,
      valorCofinanciacionNoRecurrente: 300000,
      valorCofinanciacionRecurrente: 5000000,
      valorRecurrenteUcaldas: 1000000,
    },
  ];


  filtrosFacultad: Array<String>;
  filtroFacultadSeleccionado: string;
  constructor() {
    this.filtrosFacultad = [
      'Ingenieria',
      'Ciencias Juridicas y sociales',
      'Artes y Humanidades',
      'Ciencias Agropecuarias',
      'Ciencias para la salud',
      'Ciencias exactas y naturales',
    ];
    this.filtroFacultadSeleccionado ='';
  }

  ngOnInit(): void {}
  capturarFacultad(){

  }

}
