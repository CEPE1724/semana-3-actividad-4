import { AppDataSource } from "../../Shared/infrastructure/database";
import { Donante } from "../domain/Donante";
import { DonanteRepository } from "../domain/DonanteRepository";
import { DonanteMapper } from "./DonanteMapper";
import { DonanteModel } from "./DonanteModel";

export class TypeOrmDonanteRepository implements DonanteRepository {
  private readonly repository = AppDataSource.getRepository(DonanteModel);

  async create(donante: Donante): Promise<Donante> {
    const entity = this.repository.create(DonanteMapper.toPersistence(donante));
    const created = await this.repository.save(entity);
    return DonanteMapper.toDomain(created);
  }

  async findAll(): Promise<Donante[]> {
    const rows = await this.repository.find({ order: { idDonante: "DESC" } });
    return rows.map((row) => DonanteMapper.toDomain(row));
  }

  async findAllWithCategoria(): Promise<DonanteModel[]> {
    return this.repository.find({
      relations: { categoria: true },
      order: { idDonante: "DESC" }
    });
  }

  async update(id: number, donante: Donante): Promise<Donante> {
    const existing = await this.repository.findOne({ where: { idDonante: id } });

    if (!existing) {
      throw new Error(`Donante con id ${id} no encontrado`);
    }

    Object.assign(existing, DonanteMapper.toPersistence(donante));
    const updated = await this.repository.save(existing);
    return DonanteMapper.toDomain(updated);
  }

  async delete(id: number): Promise<void> {
    const result = await this.repository.delete({ idDonante: id });

    if (!result.affected) {
      throw new Error(`Donante con id ${id} no encontrado`);
    }
  }
}
