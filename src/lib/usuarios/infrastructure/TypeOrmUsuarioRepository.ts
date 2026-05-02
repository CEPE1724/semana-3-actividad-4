import { AppDataSource } from "../../Shared/infrastructure/database";
import { Usuario } from "../domain/Usuario";
import { UsuarioRepository } from "../domain/UsuarioRepository";
import { UsuarioMapper } from "./UsuarioMapper";
import { UsuarioModel } from "./UsuarioModel";

export class TypeOrmUsuarioRepository implements UsuarioRepository {
  private readonly repository = AppDataSource.getRepository(UsuarioModel);

  async create(usuario: Usuario): Promise<Usuario> {
    const entity = this.repository.create(UsuarioMapper.toPersistence(usuario));
    const created = await this.repository.save(entity);
    return UsuarioMapper.toDomain(created);
  }

  async findAll(): Promise<Usuario[]> {
    const rows = await this.repository.find({ order: { fechaRegistro: "DESC" } });
    return rows.map((row) => UsuarioMapper.toDomain(row));
  }

  async findAllWithRol(): Promise<UsuarioModel[]> {
    return this.repository.find({
      relations: { rol: true },
      order: { fechaRegistro: "DESC" }
    });
  }

  async findByRol(idRol: number): Promise<UsuarioModel[]> {
    return this.repository.find({
      where: { idRol },
      relations: { rol: true },
      order: { fechaRegistro: "DESC" }
    });
  }

  async update(id: number, usuario: Usuario): Promise<Usuario> {
    const existing = await this.repository.findOne({ where: { idUsuario: id } });

    if (!existing) {
      throw new Error(`Usuario con id ${id} no encontrado`);
    }

    Object.assign(existing, UsuarioMapper.toPersistence(usuario));
    const updated = await this.repository.save(existing);
    return UsuarioMapper.toDomain(updated);
  }

  async delete(id: number): Promise<void> {
    const result = await this.repository.delete({ idUsuario: id });

    if (!result.affected) {
      throw new Error(`Usuario con id ${id} no encontrado`);
    }
  }
}
