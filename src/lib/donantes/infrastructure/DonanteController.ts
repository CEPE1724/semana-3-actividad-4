import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response } from "express";
import { CreateDonante } from "../application/CreateDonante";
import { DeleteDonante } from "../application/DeleteDonante";
import { ListDonantes } from "../application/ListDonantes";
import { UpdateDonante } from "../application/UpdateDonante";
import { CreateDonanteDto } from "./CreateDonanteDto";
import { TypeOrmDonanteRepository } from "./TypeOrmDonanteRepository";

export class DonanteController {
  constructor(
    private readonly createDonante: CreateDonante,
    private readonly listDonantes: ListDonantes,
    private readonly updateDonante: UpdateDonante,
    private readonly deleteDonante: DeleteDonante,
    private readonly repository: TypeOrmDonanteRepository
  ) {}

  create = async (req: Request, res: Response): Promise<void> => {
    const dto = plainToInstance(CreateDonanteDto, req.body);
    const errors = await validate(dto);

    if (errors.length > 0) {
      const messages = errors.flatMap((e) => Object.values(e.constraints ?? {}));
      res.status(400).json({ message: messages });
      return;
    }

    try {
      const donante = await this.createDonante.execute(dto);
      res.status(201).json(donante);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Error desconocido";
      res.status(400).json({ message });
    }
  };

  list = async (_req: Request, res: Response): Promise<void> => {
    try {
      const donantes = await this.listDonantes.execute();
      res.status(200).json(donantes);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Error desconocido";
      res.status(500).json({ message });
    }
  };

  listWithCategoria = async (_req: Request, res: Response): Promise<void> => {
    try {
      const donantes = await this.repository.findAllWithCategoria();
      res.status(200).json(donantes);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Error desconocido";
      res.status(500).json({ message });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);
    const dto = plainToInstance(CreateDonanteDto, req.body);
    const errors = await validate(dto);

    if (errors.length > 0) {
      const messages = errors.flatMap((e) => Object.values(e.constraints ?? {}));
      res.status(400).json({ message: messages });
      return;
    }

    try {
      const donante = await this.updateDonante.execute(id, dto);
      res.status(200).json(donante);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Error desconocido";
      res.status(400).json({ message });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);

    try {
      await this.deleteDonante.execute(id);
      res.status(200).json({ message: `Donante con id ${id} eliminado correctamente` });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Error desconocido";
      res.status(400).json({ message });
    }
  };
}
