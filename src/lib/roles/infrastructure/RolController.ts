import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response } from "express";
import { CreateRol } from "../application/CreateRol";
import { DeleteRol } from "../application/DeleteRol";
import { ListRoles } from "../application/ListRoles";
import { UpdateRol } from "../application/UpdateRol";
import { CreateRolDto } from "./CreateRolDto";

export class RolController {
  constructor(
    private readonly createRol: CreateRol,
    private readonly listRoles: ListRoles,
    private readonly updateRol: UpdateRol,
    private readonly deleteRol: DeleteRol
  ) {}

  create = async (req: Request, res: Response): Promise<void> => {
    const dto = plainToInstance(CreateRolDto, req.body);
    const errors = await validate(dto);

    if (errors.length > 0) {
      const messages = errors.flatMap((e) => Object.values(e.constraints ?? {}));
      res.status(400).json({ message: messages });
      return;
    }

    try {
      const rol = await this.createRol.execute(dto);
      res.status(201).json(rol);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Error desconocido";
      res.status(400).json({ message });
    }
  };

  list = async (_req: Request, res: Response): Promise<void> => {
    try {
      const roles = await this.listRoles.execute();
      res.status(200).json(roles);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Error desconocido";
      res.status(500).json({ message });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);
    const dto = plainToInstance(CreateRolDto, req.body);
    const errors = await validate(dto);

    if (errors.length > 0) {
      const messages = errors.flatMap((e) => Object.values(e.constraints ?? {}));
      res.status(400).json({ message: messages });
      return;
    }

    try {
      const rol = await this.updateRol.execute(id, dto);
      res.status(200).json(rol);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Error desconocido";
      res.status(400).json({ message });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);

    try {
      await this.deleteRol.execute(id);
      res.status(200).json({ message: `Rol con id ${id} eliminado correctamente` });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Error desconocido";
      res.status(400).json({ message });
    }
  };
}
