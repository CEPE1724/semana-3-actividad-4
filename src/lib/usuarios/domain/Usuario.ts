export interface Usuario {
  idUsuario?: number;
  idRol: number;
  nombres: string;
  apellidos: string;
  correo: string;
  telefono: string;
  direccion: string;
  passwordHash: string;
  estado: string;
  fechaRegistro?: Date;
}
