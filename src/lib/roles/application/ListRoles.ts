import { Rol } from "../domain/Rol";
import { RolRepository } from "../domain/RolRepository";

export class ListRoles {
  constructor(private readonly repository: RolRepository) {}

  async execute(): Promise<Rol[]> {
    return this.repository.findAll();
  }
}
