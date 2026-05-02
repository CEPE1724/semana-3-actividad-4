import { IsBoolean, IsString, MaxLength, MinLength } from "class-validator";

export class CreateCategoriaDonacionDto {
  @IsString({ message: "El nombre debe ser texto" })
  @MinLength(2, { message: "El nombre debe tener al menos 2 caracteres" })
  @MaxLength(80, { message: "El nombre no debe superar 80 caracteres" })
  nombre!: string;

  @IsString({ message: "La descripcion debe ser texto" })
  @MinLength(5, { message: "La descripcion debe tener al menos 5 caracteres" })
  @MaxLength(200, { message: "La descripcion no debe superar 200 caracteres" })
  descripcion!: string;

  @IsBoolean({ message: "El estado debe ser booleano" })
  estado!: boolean;
}
