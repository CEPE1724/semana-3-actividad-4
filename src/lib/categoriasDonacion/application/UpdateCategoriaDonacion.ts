import { CategoriaDonacion } from "../domain/CategoriaDonacion";
import { CategoriaDonacionRepository } from "../domain/CategoriaDonacionRepository";

export class UpdateCategoriaDonacion {
  constructor(private readonly repository: CategoriaDonacionRepository) {}

  async execute(id: number, categoria: CategoriaDonacion): Promise<CategoriaDonacion> {
    return this.repository.update(id, categoria);
  }
}
