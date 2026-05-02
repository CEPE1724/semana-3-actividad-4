import { Rol } from "./Rol";

export interface RolRepository {
  create(rol: Rol): Promise<Rol>;
  findAll(): Promise<Rol[]>;
  update(id: number, rol: Rol): Promise<Rol>;
  delete(id: number): Promise<void>;
}
