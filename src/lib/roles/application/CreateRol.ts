import { Rol } from "../domain/Rol";
import { RolRepository } from "../domain/RolRepository";

export class CreateRol {
  constructor(private readonly repository: RolRepository) {}

  async execute(input: Rol): Promise<Rol> {
    if (!input.nombre || input.nombre.trim().length < 2) {
      throw new Error("El nombre del rol es obligatorio");
    }

    if (!input.descripcion || input.descripcion.trim().length < 5) {
      throw new Error("La descripcion del rol es obligatoria");
    }

    return this.repository.create({
      nombre: input.nombre.trim(),
      descripcion: input.descripcion.trim(),
      estado: Boolean(input.estado)
    });
  }
}
