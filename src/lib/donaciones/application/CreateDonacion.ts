import { Donacion } from "../domain/Donacion";
import { DonacionRepository } from "../domain/DonacionRepository";

export class CreateDonacion {
  constructor(private readonly repository: DonacionRepository) {}

  async execute(input: Donacion): Promise<Donacion> {
    if (!Number.isFinite(input.idDonante) || input.idDonante <= 0) {
      throw new Error("El id del donante es obligatorio");
    }

    if (!Number.isFinite(input.idUsuarioResponsable) || input.idUsuarioResponsable <= 0) {
      throw new Error("El id del usuario responsable es obligatorio");
    }

    if (!Number.isFinite(input.idCategoria) || input.idCategoria <= 0) {
      throw new Error("El id de la categoria es obligatorio");
    }

    if (!input.titulo || input.titulo.trim().length < 3) {
      throw new Error("El titulo es obligatorio y debe tener al menos 3 caracteres");
    }

    if (!input.descripcion || input.descripcion.trim().length < 5) {
      throw new Error("La descripcion es obligatoria y debe tener al menos 5 caracteres");
    }

    if (!Number.isFinite(input.cantidad) || input.cantidad <= 0) {
      throw new Error("La cantidad debe ser mayor a 0");
    }

    if (!input.unidadMedida || input.unidadMedida.trim().length < 1) {
      throw new Error("La unidad de medida es obligatoria");
    }

    if (!input.fechaExpiracion) {
      throw new Error("La fecha de expiracion es obligatoria");
    }

    if (!input.estado || input.estado.trim().length < 2) {
      throw new Error("El estado es obligatorio");
    }

    return this.repository.create({
      idDonante: input.idDonante,
      idUsuarioResponsable: input.idUsuarioResponsable,
      idCategoria: input.idCategoria,
      titulo: input.titulo.trim(),
      descripcion: input.descripcion.trim(),
      cantidad: input.cantidad,
      unidadMedida: input.unidadMedida.trim(),
      fechaExpiracion: input.fechaExpiracion,
      estado: input.estado.trim()
    });
  }
}
