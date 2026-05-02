import { CategoriaDonacionRepository } from "../domain/CategoriaDonacionRepository";

export class DeleteCategoriaDonacion {
  constructor(private readonly repository: CategoriaDonacionRepository) {}

  async execute(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
