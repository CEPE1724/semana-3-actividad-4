import { Router } from "express";
import { CreateRol } from "../application/CreateRol";
import { DeleteRol } from "../application/DeleteRol";
import { ListRoles } from "../application/ListRoles";
import { UpdateRol } from "../application/UpdateRol";
import { RolController } from "./RolController";
import { TypeOrmRolRepository } from "./TypeOrmRolRepository";

const rolRouter = Router();

const repository = new TypeOrmRolRepository();
const createRol = new CreateRol(repository);
const listRoles = new ListRoles(repository);
const updateRol = new UpdateRol(repository);
const deleteRol = new DeleteRol(repository);
const controller = new RolController(createRol, listRoles, updateRol, deleteRol);

rolRouter.get("/getAllRoles", controller.list);
rolRouter.post("/insertRol", controller.create);
rolRouter.patch("/updateRol/:id", controller.update);
rolRouter.delete("/deleteRol/:id", controller.delete);

export { rolRouter };
