import { Usuario } from "../domain/Usuario";
import { UsuarioRepository } from "../domain/UsuarioRepository";

export class UpdateUsuario {
  constructor(private readonly repository: UsuarioRepository) {}

  async execute(id: number, usuario: Usuario): Promise<Usuario> {
    return this.repository.update(id, usuario);
  }
}
