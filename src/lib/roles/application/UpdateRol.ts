import { Rol } from "../domain/Rol";
import { RolRepository } from "../domain/RolRepository";

export class UpdateRol {
  constructor(private readonly repository: RolRepository) {}

  async execute(id: number, rol: Rol): Promise<Rol> {
    return this.repository.update(id, rol);
  }
}
