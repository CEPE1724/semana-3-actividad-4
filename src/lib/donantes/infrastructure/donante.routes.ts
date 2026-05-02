import { Router } from "express";
import { CreateDonante } from "../application/CreateDonante";
import { DeleteDonante } from "../application/DeleteDonante";
import { ListDonantes } from "../application/ListDonantes";
import { UpdateDonante } from "../application/UpdateDonante";
import { DonanteController } from "./DonanteController";
import { TypeOrmDonanteRepository } from "./TypeOrmDonanteRepository";

const donanteRouter = Router();

const repository = new TypeOrmDonanteRepository();
const createDonante = new CreateDonante(repository);
const listDonantes = new ListDonantes(repository);
const updateDonante = new UpdateDonante(repository);
const deleteDonante = new DeleteDonante(repository);
const controller = new DonanteController(
  createDonante,
  listDonantes,
  updateDonante,
  deleteDonante,
  repository
);

donanteRouter.get("/getAllDonantes", controller.list);
donanteRouter.get("/getAllDonantesConCategoria", controller.listWithCategoria);
donanteRouter.post("/insertDonante", controller.create);
donanteRouter.patch("/updateDonante/:id", controller.update);
donanteRouter.delete("/deleteDonante/:id", controller.delete);

export { donanteRouter };
