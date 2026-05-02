import { Donante } from "./Donante";

export interface DonanteRepository {
  create(donante: Donante): Promise<Donante>;
  findAll(): Promise<Donante[]>;
  update(id: number, donante: Donante): Promise<Donante>;
  delete(id: number): Promise<void>;
}