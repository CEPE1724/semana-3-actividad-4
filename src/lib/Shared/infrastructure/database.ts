import { DataSource, DataSourceOptions } from "typeorm";
import { env } from "./env";
import { CategoriaDonacionModel } from "../../categoriasDonacion/infrastructure/CategoriaDonacionModel";
import { DonacionModel } from "../../donaciones/infrastructure/DonacionModel";
import { DonanteModel } from "../../donantes/infrastructure/DonanteModel";
import { RolModel } from "../../roles/infrastructure/RolModel";
import { UsuarioModel } from "../../usuarios/infrastructure/UsuarioModel";

const options: DataSourceOptions =
  env.dbDialect === "sqlite"
    ? {
        type: "sqlite",
        database: env.dbStorage,
        synchronize: true,
        entities: [
          DonacionModel,
          DonanteModel,
          RolModel,
          UsuarioModel,
          CategoriaDonacionModel
        ],
        logging: env.nodeEnv === "development"
      }
    : env.dbDialect === "mysql"
      ? {
          type: "mysql",
          host: env.dbHost,
          port: env.dbPort,
          database: env.dbName,
          username: env.dbUser,
          password: env.dbPassword,
          synchronize: true,
          entities: [
            DonacionModel,
            DonanteModel,
            RolModel,
            UsuarioModel,
            CategoriaDonacionModel
          ],
          logging: env.nodeEnv === "development"
        }
      : {
          type: "postgres",
          host: env.dbHost,
          port: env.dbPort,
          database: env.dbName,
          username: env.dbUser,
          password: env.dbPassword,
          synchronize: true,
          entities: [
            DonacionModel,
            DonanteModel,
            RolModel,
            UsuarioModel,
            CategoriaDonacionModel
          ],
          logging: env.nodeEnv === "development"
        };

export const AppDataSource = new DataSource(options);

export async function connectDatabase(): Promise<void> {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }
  console.log(`Base de datos conectada (${env.dbDialect})`);
}
