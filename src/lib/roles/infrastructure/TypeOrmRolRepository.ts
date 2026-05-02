import { AppDataSource } from "../../Shared/infrastructure/database";
import { Rol } from "../domain/Rol";
import { RolRepository } from "../domain/RolRepository";
import { RolMapper } from "./RolMapper";
import { RolModel } from "./RolModel";

export class TypeOrmRolRepository implements RolRepository {
  private readonly repository = AppDataSource.getRepository(RolModel);

  async create(rol: Rol): Promise<Rol> {
    const entity = this.repository.create(RolMapper.toPersistence(rol));
    const created = await this.repository.save(entity);
    return RolMapper.toDomain(created);
  }

  async findAll(): Promise<Rol[]> {
    const rows = await this.repository.find({ order: { idRol: "DESC" } });
    return rows.map((row) => RolMapper.toDomain(row));
  }

  async update(id: number, rol: Rol): Promise<Rol> {
    const existing = await this.repository.findOne({ where: { idRol: id } });

    if (!existing) {
      throw new Error(`Rol con id ${id} no encontrado`);
    }

    Object.assign(existing, RolMapper.toPersistence(rol));
    const updated = await this.repository.save(existing);
    return RolMapper.toDomain(updated);
  }

  async delete(id: number): Promise<void> {
    const result = await this.repository.delete({ idRol: id });

    if (!result.affected) {
      throw new Error(`Rol con id ${id} no encontrado`);
    }
  }
}
