import { AppDataSource } from "../../Shared/infrastructure/database";
import { CategoriaDonacion } from "../domain/CategoriaDonacion";
import { CategoriaDonacionRepository } from "../domain/CategoriaDonacionRepository";
import { CategoriaDonacionMapper } from "./CategoriaDonacionMapper";
import { CategoriaDonacionModel } from "./CategoriaDonacionModel";

export class TypeOrmCategoriaDonacionRepository implements CategoriaDonacionRepository {
  private readonly repository = AppDataSource.getRepository(CategoriaDonacionModel);

  async create(categoria: CategoriaDonacion): Promise<CategoriaDonacion> {
    const entity = this.repository.create(CategoriaDonacionMapper.toPersistence(categoria));
    const created = await this.repository.save(entity);
    return CategoriaDonacionMapper.toDomain(created);
  }

  async findAll(): Promise<CategoriaDonacion[]> {
    const rows = await this.repository.find({ order: { idCategoria: "DESC" } });
    return rows.map((row) => CategoriaDonacionMapper.toDomain(row));
  }

  async update(id: number, categoria: CategoriaDonacion): Promise<CategoriaDonacion> {
    const existing = await this.repository.findOne({ where: { idCategoria: id } });

    if (!existing) {
      throw new Error(`Categoria con id ${id} no encontrada`);
    }

    Object.assign(existing, CategoriaDonacionMapper.toPersistence(categoria));
    const updated = await this.repository.save(existing);
    return CategoriaDonacionMapper.toDomain(updated);
  }

  async delete(id: number): Promise<void> {
    const result = await this.repository.delete({ idCategoria: id });

    if (!result.affected) {
      throw new Error(`Categoria con id ${id} no encontrada`);
    }
  }
}
