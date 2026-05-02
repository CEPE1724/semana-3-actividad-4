import { Donacion } from "../domain/Donacion";
import { DonacionRepository } from "../domain/DonacionRepository";
import { AppDataSource } from "../../Shared/infrastructure/database";
import { DonacionMapper } from "./DonacionMapper";
import { DonacionModel } from "./DonacionModel";

export class TypeOrmDonacionRepository implements DonacionRepository {
  private readonly repository = AppDataSource.getRepository(DonacionModel);

  async create(donacion: Donacion): Promise<Donacion> {
    const entity = this.repository.create(DonacionMapper.toPersistence(donacion));
    const created = await this.repository.save(entity);
    return DonacionMapper.toDomain(created);
  }

  async findAll(): Promise<Donacion[]> {
    const rows = await this.repository.find({ order: { fechaRegistro: "DESC" } });
    return rows.map((row) => DonacionMapper.toDomain(row));
  }

  async findAllWithRelations(): Promise<DonacionModel[]> {
    return this.repository.find({
      relations: {
        donante: true,
        usuarioResponsable: true,
        categoria: true
      },
      order: { fechaRegistro: "DESC" }
    });
  }

  async findByCategoria(idCategoria: number): Promise<DonacionModel[]> {
    return this.repository.find({
      where: { idCategoria },
      relations: {
        donante: true,
        usuarioResponsable: true,
        categoria: true
      },
      order: { fechaRegistro: "DESC" }
    });
  }

  async findByDonante(idDonante: number): Promise<DonacionModel[]> {
    return this.repository.find({
      where: { idDonante },
      relations: {
        donante: true,
        usuarioResponsable: true,
        categoria: true
      },
      order: { fechaRegistro: "DESC" }
    });
  }

  async update(id: number, donacion: Donacion): Promise<Donacion> {
    const existing = await this.repository.findOne({ where: { idDonacion: id } });

    if (!existing) {
      throw new Error(`Donacion con id ${id} no encontrada`);
    }

    Object.assign(existing, DonacionMapper.toPersistence(donacion));
    const updated = await this.repository.save(existing);

    return DonacionMapper.toDomain(updated);
  }

  async delete(id: number): Promise<void> {
    const result = await this.repository.delete({ idDonacion: id });

    if (!result.affected) {
      throw new Error(`Donacion con id ${id} no encontrada`);
    }
  }
}
