import { Rol } from "../domain/Rol";
import { RolModel } from "./RolModel";

export class RolMapper {
  static toDomain(model: RolModel): Rol {
    return {
      idRol: model.idRol,
      nombre: model.nombre,
      descripcion: model.descripcion,
      estado: model.estado
    };
  }

  static toPersistence(rol: Rol): Omit<Rol, "idRol"> {
    return {
      nombre: rol.nombre,
      descripcion: rol.descripcion,
      estado: rol.estado
    };
  }
}
