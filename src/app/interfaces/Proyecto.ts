import { Entregable } from "./Entregable";
import { Participante } from "./Participante";

export interface Proyecto {
  id?: number;
  idFacultad: string;
  idDepartamento: string;
  idGrupoInvestigacion: string;
  nombreProyecto: string;
  anioInicio: string;
  fechaInicio: Date;
  fechaInicialTerminacion: Date;
  fechaEvaluacion: Date;
  fechaRealFinalizacion: Date;
  cofinanciacion: Boolean;
  entidadCofinanciadora?: string;
  valorCofinanciacionRecurrente?: number;
  valorCofinanciacionNoRecurrente?: number;
  valorRecurrenteUcaldas: number;
  valorAsignadoVip: number;
  idConvocatoria: string;
  observacionesProyecto?: string;
  objetivo: string;
  resumen: string;
  resultadosEsperados?: string;
  compromisos?: Array<Entregable>; /// lista
  idTipoProyecto: string;
  areaEstrategica: string; //CONSULTA
  areaEstrategica2: string; //CONSULTA
  actaSeguimiento: string;
  estadoProyecto: string; //{En aprovación}
  participantes?: Array<Participante>; ///// lista
}
