import { Usuario } from "../domain/Usuario";
import { UsuarioRepository } from "../domain/UsuarioRepository";

export class CreateUsuario {
  constructor(private readonly repository: UsuarioRepository) {}

  async execute(input: Usuario): Promise<Usuario> {
    if (!Number.isFinite(input.idRol) || input.idRol <= 0) {
      throw new Error("El id del rol es obligatorio");
    }

    if (!input.nombres || input.nombres.trim().length < 2) {
      throw new Error("Los nombres son obligatorios");
    }

    if (!input.apellidos || input.apellidos.trim().length < 2) {
      throw new Error("Los apellidos son obligatorios");
    }

    if (!input.correo || !input.correo.includes("@")) {
      throw new Error("El correo no es valido");
    }

    if (!input.passwordHash || input.passwordHash.trim().length < 8) {
      throw new Error("La contrasena debe tener al menos 8 caracteres");
    }

    return this.repository.create({
      idRol: input.idRol,
      nombres: input.nombres.trim(),
      apellidos: input.apellidos.trim(),
      correo: input.correo.trim().toLowerCase(),
      telefono: input.telefono.trim(),
      direccion: input.direccion.trim(),
      passwordHash: input.passwordHash.trim(),
      estado: input.estado.trim()
    });
  }
}
