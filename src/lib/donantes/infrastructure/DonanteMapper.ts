import { Donante } from "../domain/Donante";
import { DonanteModel } from "./DonanteModel";

export class DonanteMapper {
  static toDomain(model: DonanteModel): Donante {
    return {
      idDonante: model.idDonante,
      idCategoria: model.idCategoria,
      tipoDonante: model.tipoDonante,
      nombres: model.nombres,
      apellidos: model.apellidos,
      identificacion: model.identificacion,
      correo: model.correo,
      telefono: model.telefono,
      direccion: model.direccion
    };
  }

  static toPersistence(donante: Donante): Omit<Donante, "idDonante"> {
    return {
      idCategoria: donante.idCategoria,
      tipoDonante: donante.tipoDonante,
      nombres: donante.nombres,
      apellidos: donante.apellidos,
      identificacion: donante.identificacion,
      correo: donante.correo,
      telefono: donante.telefono,
      direccion: donante.direccion
    };
  }
}
