import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { CategoriaDonacionModel } from "../../categoriasDonacion/infrastructure/CategoriaDonacionModel";
import { DonanteModel } from "../../donantes/infrastructure/DonanteModel";
import { UsuarioModel } from "../../usuarios/infrastructure/UsuarioModel";

@Entity({ name: "tbl_donaciones" })
export class DonacionModel {
  @PrimaryGeneratedColumn({ name: "id_donacion" })
  idDonacion!: number;

  @Column({ name: "id_donante", type: "int" })
  idDonante!: number;

  @ManyToOne(() => DonanteModel, (donante) => donante.donaciones, { nullable: false })
  @JoinColumn({ name: "id_donante" })
  donante!: DonanteModel;

  @Column({ name: "id_usuario_responsable", type: "int" })
  idUsuarioResponsable!: number;

  @ManyToOne(() => UsuarioModel, (usuario) => usuario.donacionesResponsables, { nullable: false })
  @JoinColumn({ name: "id_usuario_responsable" })
  usuarioResponsable!: UsuarioModel;

  @Column({ name: "id_categoria", type: "int" })
  idCategoria!: number;

  @ManyToOne(() => CategoriaDonacionModel, (categoria) => categoria.donaciones, { nullable: false })
  @JoinColumn({ name: "id_categoria" })
  categoria!: CategoriaDonacionModel;

  @Column({ name: "titulo", type: "varchar", length: 120 })
  titulo!: string;

  @Column({ name: "descripcion", type: "varchar", length: 300 })
  descripcion!: string;

  @Column({ name: "cantidad", type: "decimal", precision: 10, scale: 2 })
  cantidad!: number;

  @Column({ name: "unidad_medida", type: "varchar", length: 30 })
  unidadMedida!: string;

  @Column({ name: "fecha_expiracion", type: "date" })
  fechaExpiracion!: string;

  @Column({ name: "estado", type: "varchar", length: 20 })
  estado!: string;

  @CreateDateColumn({ name: "fecha_registro", type: "datetime" })
  fechaRegistro!: Date;
}
