import { Usuario } from "../domain/Usuario";
import { UsuarioModel } from "./UsuarioModel";

export class UsuarioMapper {
  static toDomain(model: UsuarioModel): Usuario {
    return {
      idUsuario: model.idUsuario,
      idRol: model.idRol,
      nombres: model.nombres,
      apellidos: model.apellidos,
      correo: model.correo,
      telefono: model.telefono,
      direccion: model.direccion,
      passwordHash: model.passwordHash,
      estado: model.estado,
      fechaRegistro: model.fechaRegistro
    };
  }

  static toPersistence(usuario: Usuario): Omit<Usuario, "idUsuario" | "fechaRegistro"> {
    return {
      idRol: usuario.idRol,
      nombres: usuario.nombres,
      apellidos: usuario.apellidos,
      correo: usuario.correo,
      telefono: usuario.telefono,
      direccion: usuario.direccion,
      passwordHash: usuario.passwordHash,
      estado: usuario.estado
    };
  }
}
