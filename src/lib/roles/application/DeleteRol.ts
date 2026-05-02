import { RolRepository } from "../domain/RolRepository";

export class DeleteRol {
  constructor(private readonly repository: RolRepository) {}

  async execute(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
