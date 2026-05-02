import { Router } from "express";
import { CreateCategoriaDonacion } from "../application/CreateCategoriaDonacion";
import { DeleteCategoriaDonacion } from "../application/DeleteCategoriaDonacion";
import { ListCategoriasDonacion } from "../application/ListCategoriasDonacion";
import { UpdateCategoriaDonacion } from "../application/UpdateCategoriaDonacion";
import { CategoriaDonacionController } from "./CategoriaDonacionController";
import { TypeOrmCategoriaDonacionRepository } from "./TypeOrmCategoriaDonacionRepository";

const categoriaDonacionRouter = Router();

const repository = new TypeOrmCategoriaDonacionRepository();
const createCategoria = new CreateCategoriaDonacion(repository);
const listCategorias = new ListCategoriasDonacion(repository);
const updateCategoria = new UpdateCategoriaDonacion(repository);
const deleteCategoria = new DeleteCategoriaDonacion(repository);
const controller = new CategoriaDonacionController(
  createCategoria,
  listCategorias,
  updateCategoria,
  deleteCategoria
);

categoriaDonacionRouter.get("/getAllCategoriasDonacion", controller.list);
categoriaDonacionRouter.post("/insertCategoriaDonacion", controller.create);
categoriaDonacionRouter.patch("/updateCategoriaDonacion/:id", controller.update);
categoriaDonacionRouter.delete("/deleteCategoriaDonacion/:id", controller.delete);

export { categoriaDonacionRouter };
