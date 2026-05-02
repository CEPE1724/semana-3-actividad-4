import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { CategoriaDonacionModel } from "../../categoriasDonacion/infrastructure/CategoriaDonacionModel";
import { DonacionModel } from "../../donaciones/infrastructure/DonacionModel";

@Entity({ name: "tbl_donante" })
export class DonanteModel {
  @PrimaryGeneratedColumn({ name: "id_donante" })
  idDonante!: number;

  @Column({ name: "id_categoria", type: "int" })
  idCategoria!: number;

  @ManyToOne(() => CategoriaDonacionModel, (categoria) => categoria.donantes, { nullable: false })
  @JoinColumn({ name: "id_categoria" })
  categoria!: CategoriaDonacionModel;

  @Column({ name: "tipo_donante", type: "varchar", length: 5 })
  tipoDonante!: string;

  @Column({ name: "nombres", type: "varchar", length: 100 })
  nombres!: string;

  @Column({ name: "apellidos", type: "varchar", length: 100 })
  apellidos!: string;

  @Column({ name: "identificacion", type: "varchar", length: 20 })
  identificacion!: string;

  @Column({ name: "correo", type: "varchar", length: 100 })
  correo!: string;

  @Column({ name: "telefono", type: "varchar", length: 20 })
  telefono!: string;

  @Column({ name: "direccion", type: "varchar", length: 250 })
  direccion!: string;

  @OneToMany(() => DonacionModel, (donacion) => donacion.donante)
  donaciones!: DonacionModel[];
}
