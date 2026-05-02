import { Usuario } from "./Usuario";

export interface UsuarioRepository {
  create(usuario: Usuario): Promise<Usuario>;
  findAll(): Promise<Usuario[]>;
  update(id: number, usuario: Usuario): Promise<Usuario>;
  delete(id: number): Promise<void>;
}
