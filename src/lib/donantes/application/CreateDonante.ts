import { Donante } from "../domain/Donante";
import { DonanteRepository } from "../domain/DonanteRepository";

export class CreateDonante {
  constructor(private readonly repository: DonanteRepository) {}

  async execute(input: Donante): Promise<Donante> {
    if (!Number.isFinite(input.idCategoria) || input.idCategoria <= 0) {
      throw new Error("La categoria es obligatoria");
    }

    if (!input.tipoDonante || input.tipoDonante.trim().length < 2) {
      throw new Error("El tipo de donante es obligatorio");
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

    return this.repository.create({
      idCategoria: input.idCategoria,
      tipoDonante: input.tipoDonante.trim(),
      nombres: input.nombres.trim(),
      apellidos: input.apellidos.trim(),
      identificacion: input.identificacion.trim(),
      correo: input.correo.trim().toLowerCase(),
      telefono: input.telefono.trim(),
      direccion: input.direccion.trim()
    });
  }
}
