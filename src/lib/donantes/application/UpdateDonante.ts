import { Donante } from "../domain/Donante";
import { DonanteRepository } from "../domain/DonanteRepository";

export class UpdateDonante {
  constructor(private readonly repository: DonanteRepository) {}

  async execute(id: number, donante: Donante): Promise<Donante> {
    return this.repository.update(id, donante);
  }
}
