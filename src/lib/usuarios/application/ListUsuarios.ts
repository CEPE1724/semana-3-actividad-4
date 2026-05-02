import { Usuario } from "../domain/Usuario";
import { UsuarioRepository } from "../domain/UsuarioRepository";

export class ListUsuarios {
  constructor(private readonly repository: UsuarioRepository) {}

  async execute(): Promise<Usuario[]> {
    return this.repository.findAll();
  }
}
