import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response } from "express";
import { CreateCategoriaDonacion } from "../application/CreateCategoriaDonacion";
import { DeleteCategoriaDonacion } from "../application/DeleteCategoriaDonacion";
import { ListCategoriasDonacion } from "../application/ListCategoriasDonacion";
import { UpdateCategoriaDonacion } from "../application/UpdateCategoriaDonacion";
import { CreateCategoriaDonacionDto } from "./CreateCategoriaDonacionDto";

export class CategoriaDonacionController {
  constructor(
    private readonly createCategoria: CreateCategoriaDonacion,
    private readonly listCategorias: ListCategoriasDonacion,
    private readonly updateCategoria: UpdateCategoriaDonacion,
    private readonly deleteCategoria: DeleteCategoriaDonacion
  ) {}

  create = async (req: Request, res: Response): Promise<void> => {
    const dto = plainToInstance(CreateCategoriaDonacionDto, req.body);
    const errors = await validate(dto);

    if (errors.length > 0) {
      const messages = errors.flatMap((e) => Object.values(e.constraints ?? {}));
      res.status(400).json({ message: messages });
      return;
    }

    try {
      const categoria = await this.createCategoria.execute(dto);
      res.status(201).json(categoria);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Error desconocido";
      res.status(400).json({ message });
    }
  };

  list = async (_req: Request, res: Response): Promise<void> => {
    try {
      const categorias = await this.listCategorias.execute();
      res.status(200).json(categorias);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Error desconocido";
      res.status(500).json({ message });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);
    const dto = plainToInstance(CreateCategoriaDonacionDto, req.body);
    const errors = await validate(dto);

    if (errors.length > 0) {
      const messages = errors.flatMap((e) => Object.values(e.constraints ?? {}));
      res.status(400).json({ message: messages });
      return;
    }

    try {
      const categoria = await this.updateCategoria.execute(id, dto);
      res.status(200).json(categoria);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Error desconocido";
      res.status(400).json({ message });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);

    try {
      await this.deleteCategoria.execute(id);
      res.status(200).json({ message: `Categoria con id ${id} eliminada correctamente` });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Error desconocido";
      res.status(400).json({ message });
    }
  };
}
