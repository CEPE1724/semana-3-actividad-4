import { CategoriaDonacion } from "../domain/CategoriaDonacion";
import { CategoriaDonacionModel } from "./CategoriaDonacionModel";

export class CategoriaDonacionMapper {
  static toDomain(model: CategoriaDonacionModel): CategoriaDonacion {
    return {
      idCategoria: model.idCategoria,
      nombre: model.nombre,
      descripcion: model.descripcion,
      estado: model.estado
    };
  }

  static toPersistence(categoria: CategoriaDonacion): Omit<CategoriaDonacion, "idCategoria"> {
    return {
      nombre: categoria.nombre,
      descripcion: categoria.descripcion,
      estado: categoria.estado
    };
  }
}
