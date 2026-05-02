import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DonacionModel } from "../../donaciones/infrastructure/DonacionModel";
import { DonanteModel } from "../../donantes/infrastructure/DonanteModel";

@Entity({ name: "tbl_categorias_donacion" })
export class CategoriaDonacionModel {
  @PrimaryGeneratedColumn({ name: "id_categoria" })
  idCategoria!: number;

  @Column({ name: "nombre", type: "varchar", length: 80 })
  nombre!: string;

  @Column({ name: "descripcion", type: "varchar", length: 200 })
  descripcion!: string;

  @Column({ name: "estado", type: "boolean", default: true })
  estado!: boolean;

  @OneToMany(() => DonanteModel, (donante) => donante.categoria)
  donantes!: DonanteModel[];

  @OneToMany(() => DonacionModel, (donacion) => donacion.categoria)
  donaciones!: DonacionModel[];
}
