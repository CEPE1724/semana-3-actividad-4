import { CategoriaDonacion } from "../domain/CategoriaDonacion";
import { CategoriaDonacionRepository } from "../domain/CategoriaDonacionRepository";

export class ListCategoriasDonacion {
  constructor(private readonly repository: CategoriaDonacionRepository) {}

  async execute(): Promise<CategoriaDonacion[]> {
    return this.repository.findAll();
  }
}
