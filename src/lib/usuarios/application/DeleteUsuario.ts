import { UsuarioRepository } from "../domain/UsuarioRepository";

export class DeleteUsuario {
  constructor(private readonly repository: UsuarioRepository) {}

  async execute(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
