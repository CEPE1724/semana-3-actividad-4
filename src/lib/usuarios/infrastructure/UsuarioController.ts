import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response } from "express";
import { CreateUsuario } from "../application/CreateUsuario";
import { DeleteUsuario } from "../application/DeleteUsuario";
import { ListUsuarios } from "../application/ListUsuarios";
import { UpdateUsuario } from "../application/UpdateUsuario";
import { CreateUsuarioDto } from "./CreateUsuarioDto";
import { TypeOrmUsuarioRepository } from "./TypeOrmUsuarioRepository";

export class UsuarioController {
  constructor(
    private readonly createUsuario: CreateUsuario,
    private readonly listUsuarios: ListUsuarios,
    private readonly updateUsuario: UpdateUsuario,
    private readonly deleteUsuario: DeleteUsuario,
    private readonly repository: TypeOrmUsuarioRepository
  ) {}

  create = async (req: Request, res: Response): Promise<void> => {
    const dto = plainToInstance(CreateUsuarioDto, req.body);
    const errors = await validate(dto);

    if (errors.length > 0) {
      const messages = errors.flatMap((e) => Object.values(e.constraints ?? {}));
      res.status(400).json({ message: messages });
      return;
    }

    try {
      const usuario = await this.createUsuario.execute(dto);
      res.status(201).json(usuario);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Error desconocido";
      res.status(400).json({ message });
    }
  };

  list = async (_req: Request, res: Response): Promise<void> => {
    try {
      const usuarios = await this.listUsuarios.execute();
      res.status(200).json(usuarios);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Error desconocido";
      res.status(500).json({ message });
    }
  };

  listWithRol = async (_req: Request, res: Response): Promise<void> => {
    try {
      const usuarios = await this.repository.findAllWithRol();
      res.status(200).json(usuarios);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Error desconocido";
      res.status(500).json({ message });
    }
  };

  listByRol = async (req: Request, res: Response): Promise<void> => {
    const idRol = Number(req.params.idRol);
    try {
      const usuarios = await this.repository.findByRol(idRol);
      res.status(200).json(usuarios);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Error desconocido";
      res.status(500).json({ message });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);
    const dto = plainToInstance(CreateUsuarioDto, req.body);
    const errors = await validate(dto);

    if (errors.length > 0) {
      const messages = errors.flatMap((e) => Object.values(e.constraints ?? {}));
      res.status(400).json({ message: messages });
      return;
    }

    try {
      const usuario = await this.updateUsuario.execute(id, dto);
      res.status(200).json(usuario);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Error desconocido";
      res.status(400).json({ message });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);

    try {
      await this.deleteUsuario.execute(id);
      res.status(200).json({ message: `Usuario con id ${id} eliminado correctamente` });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Error desconocido";
      res.status(400).json({ message });
    }
  };
}
