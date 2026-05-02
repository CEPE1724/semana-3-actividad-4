import { Router } from "express";
import { CreateUsuario } from "../application/CreateUsuario";
import { DeleteUsuario } from "../application/DeleteUsuario";
import { ListUsuarios } from "../application/ListUsuarios";
import { UpdateUsuario } from "../application/UpdateUsuario";
import { UsuarioController } from "./UsuarioController";
import { TypeOrmUsuarioRepository } from "./TypeOrmUsuarioRepository";

const usuarioRouter = Router();

const repository = new TypeOrmUsuarioRepository();
const createUsuario = new CreateUsuario(repository);
const listUsuarios = new ListUsuarios(repository);
const updateUsuario = new UpdateUsuario(repository);
const deleteUsuario = new DeleteUsuario(repository);
const controller = new UsuarioController(
  createUsuario,
  listUsuarios,
  updateUsuario,
  deleteUsuario,
  repository
);

usuarioRouter.get("/getAllUsuarios", controller.list);
usuarioRouter.get("/getAllUsuariosConRol", controller.listWithRol);
usuarioRouter.get("/usuariosPorRol/:idRol", controller.listByRol);
usuarioRouter.post("/insertUsuario", controller.create);
usuarioRouter.patch("/updateUsuario/:id", controller.update);
usuarioRouter.delete("/deleteUsuario/:id", controller.delete);

export { usuarioRouter };
