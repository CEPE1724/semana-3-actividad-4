import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { DonacionModel } from "../../donaciones/infrastructure/DonacionModel";
import { RolModel } from "../../roles/infrastructure/RolModel";

@Entity({ name: "tbl_usuarios" })
export class UsuarioModel {
  @PrimaryGeneratedColumn({ name: "id_usuario" })
  idUsuario!: number;

  @Column({ name: "id_rol", type: "int" })
  idRol!: number;

  @ManyToOne(() => RolModel, (rol) => rol.usuarios, { nullable: false })
  @JoinColumn({ name: "id_rol" })
  rol!: RolModel;

  @Column({ name: "nombres", type: "varchar", length: 100 })
  nombres!: string;

  @Column({ name: "apellidos", type: "varchar", length: 20 })
  apellidos!: string;

  @Column({ name: "correo", type: "varchar", length: 100 })
  correo!: string;

  @Column({ name: "telefono", type: "varchar", length: 20 })
  telefono!: string;

  @Column({ name: "direccion", type: "varchar", length: 250 })
  direccion!: string;

  @Column({ name: "password_hash", type: "varchar", length: 255 })
  passwordHash!: string;

  @Column({ name: "estado", type: "varchar", length: 20 })
  estado!: string;

  @CreateDateColumn({ name: "fecha_registro", type: "datetime" })
  fechaRegistro!: Date;

  @OneToMany(() => DonacionModel, (donacion) => donacion.usuarioResponsable)
  donacionesResponsables!: DonacionModel[];
}
