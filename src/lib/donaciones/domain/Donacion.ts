export interface Donacion {
  idDonacion?: number;
  idDonante: number;
  idUsuarioResponsable: number;
  idCategoria: number;
  titulo: string;
  descripcion: string;
  cantidad: number;
  unidadMedida: string;
  fechaExpiracion: string;
  estado: string;
  fechaRegistro?: Date;
}
