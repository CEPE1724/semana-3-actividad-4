import { CategoriaDonacion } from "./CategoriaDonacion";

export interface CategoriaDonacionRepository {
  create(categoria: CategoriaDonacion): Promise<CategoriaDonacion>;
  findAll(): Promise<CategoriaDonacion[]>;
  update(id: number, categoria: CategoriaDonacion): Promise<CategoriaDonacion>;
  delete(id: number): Promise<void>;
}
