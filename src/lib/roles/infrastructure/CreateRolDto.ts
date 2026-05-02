import { IsBoolean, IsString, MaxLength, MinLength } from "class-validator";

export class CreateRolDto {
  @IsString({ message: "El nombre debe ser texto" })
  @MinLength(2, { message: "El nombre debe tener al menos 2 caracteres" })
  @MaxLength(50, { message: "El nombre no debe superar 50 caracteres" })
  nombre!: string;

  @IsString({ message: "La descripcion debe ser texto" })
  @MinLength(5, { message: "La descripcion debe tener al menos 5 caracteres" })
  @MaxLength(150, { message: "La descripcion no debe superar 150 caracteres" })
  descripcion!: string;

  @IsBoolean({ message: "El estado debe ser booleano" })
  estado!: boolean;
}
