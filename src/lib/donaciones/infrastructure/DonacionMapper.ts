import { Donacion } from "../domain/Donacion";
import { DonacionModel } from "./DonacionModel";

export class DonacionMapper {
  static toDomain(model: DonacionModel): Donacion {
    return {
      idDonacion: model.idDonacion,
      idDonante: model.idDonante,
      idUsuarioResponsable: model.idUsuarioResponsable,
      idCategoria: model.idCategoria,
      titulo: model.titulo,
      descripcion: model.descripcion,
      cantidad: Number(model.cantidad),
      unidadMedida: model.unidadMedida,
      fechaExpiracion: model.fechaExpiracion,
      estado: model.estado,
      fechaRegistro: model.fechaRegistro
    };
  }

  static toPersistence(donacion: Donacion): Omit<Donacion, "idDonacion" | "fechaRegistro"> {
    return {
      idDonante: donacion.idDonante,
      idUsuarioResponsable: donacion.idUsuarioResponsable,
      idCategoria: donacion.idCategoria,
      titulo: donacion.titulo,
      descripcion: donacion.descripcion,
      cantidad: donacion.cantidad,
      unidadMedida: donacion.unidadMedida,
      fechaExpiracion: donacion.fechaExpiracion,
      estado: donacion.estado
    };
  }
}
