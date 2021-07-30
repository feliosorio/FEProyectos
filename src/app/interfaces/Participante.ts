export interface Participante{
    documentoIdentidad:String;
    nombreInvestigador:String;
    apellidoInvestigador:String;
    celular:String;
    correoElectronico:string;
    genero:String;
    telefono:String;
    direccion:String;
    idRolProyecto:String;
    idInteres:String;
    ResponsableProyecto:Boolean;
    numeroHorasSemanales:number;
    aplicaLaborAcademico:Boolean;
    idTipoParticipante:String;
    estadoPaticipante: String;
    fechaIngresoProyecto:Date;
    idUnidadAcademica:String;

}