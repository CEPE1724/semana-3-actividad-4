import { CategoriaDonacion } from "../domain/CategoriaDonacion";
import { CategoriaDonacionRepository } from "../domain/CategoriaDonacionRepository";

export class CreateCategoriaDonacion {
  constructor(private readonly repository: CategoriaDonacionRepository) {}

  async execute(input: CategoriaDonacion): Promise<CategoriaDonacion> {
    if (!input.nombre || input.nombre.trim().length < 2) {
      throw new Error("El nombre de la categoria es obligatorio");
    }

    if (!input.descripcion || input.descripcion.trim().length < 5) {
      throw new Error("La descripcion de la categoria es obligatoria");
    }

    return this.repository.create({
      nombre: input.nombre.trim(),
      descripcion: input.descripcion.trim(),
      estado: Boolean(input.estado)
    });
  }
}
