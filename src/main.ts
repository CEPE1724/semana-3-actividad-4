import "reflect-metadata";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import { connectDatabase } from "./lib/Shared/infrastructure/database";
import { categoriaDonacionRouter } from "./lib/categoriasDonacion/infrastructure/categoria-donacion.routes";
import { env } from "./lib/Shared/infrastructure/env";
import { donanteRouter } from "./lib/donantes/infrastructure/donante.routes";
import { donacionRouter } from "./lib/donaciones/infrastructure/donacion.routes";
import { rolRouter } from "./lib/roles/infrastructure/rol.routes";
import { usuarioRouter } from "./lib/usuarios/infrastructure/usuario.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v2/uisrael", donacionRouter);
app.use("/api/v2/uisrael", donanteRouter);
app.use("/api/v2/uisrael", rolRouter);
app.use("/api/v2/uisrael", usuarioRouter);
app.use("/api/v2/uisrael", categoriaDonacionRouter);

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
    return;
  }
  console.error(err);
  res.status(500).json({ message: "Something broke!" });
});

app.listen(env.port, async () => {
  try {
    await connectDatabase();
    console.log(`Servidor escuchando en el puerto ${env.port}`);
  } catch (error) {
    console.error("Error al iniciar la aplicación:", error);
    process.exit(1);
  }
});
