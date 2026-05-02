import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UsuarioModel } from "../../usuarios/infrastructure/UsuarioModel";

@Entity({ name: "tbl_roles" })
export class RolModel {
  @PrimaryGeneratedColumn({ name: "id_rol" })
  idRol!: number;

  @Column({ name: "nombre", type: "varchar", length: 50 })
  nombre!: string;

  @Column({ name: "descripcion", type: "varchar", length: 150 })
  descripcion!: string;

  @Column({ name: "estado", type: "boolean", default: true })
  estado!: boolean;

  @OneToMany(() => UsuarioModel, (usuario) => usuario.rol)
  usuarios!: UsuarioModel[];
}
