import { DonanteRepository } from "../domain/DonanteRepository";

export class DeleteDonante {
  constructor(private readonly repository: DonanteRepository) {}

  async execute(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
