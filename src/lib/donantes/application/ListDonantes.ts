import { Donante } from "../domain/Donante";
import { DonanteRepository } from "../domain/DonanteRepository";

export class ListDonantes {
  constructor(private readonly repository: DonanteRepository) {}

  async execute(): Promise<Donante[]> {
    return this.repository.findAll();
  }
}
