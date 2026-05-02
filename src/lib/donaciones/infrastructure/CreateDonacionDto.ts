import {
  IsDateString,
  IsInt,
  IsNumber,
  IsString,
  MaxLength,
  Min,
  MinLength
} from "class-validator";

export class CreateDonacionDto {
  @IsInt({ message: "El id del donante debe ser un numero entero" })
  @Min(1, { message: "El id del donante es obligatorio" })
  idDonante!: number;

  @IsInt({ message: "El id del usuario responsable debe ser un numero entero" })
  @Min(1, { message: "El id del usuario responsable es obligatorio" })
  idUsuarioResponsable!: number;

  @IsInt({ message: "El id de la categoria debe ser un numero entero" })
  @Min(1, { message: "El id de la categoria es obligatorio" })
  idCategoria!: number;

  @IsString({ message: "El titulo debe ser texto" })
  @MinLength(3, { message: "El titulo debe tener al menos 3 caracteres" })
  @MaxLength(120, { message: "El titulo no debe superar 120 caracteres" })
  titulo!: string;

  @IsString({ message: "La descripcion debe ser texto" })
  @MinLength(5, { message: "La descripcion debe tener al menos 5 caracteres" })
  @MaxLength(300, { message: "La descripcion no debe superar 300 caracteres" })
  descripcion!: string;

  @IsNumber({}, { message: "La cantidad debe ser un numero" })
  @Min(0.01, { message: "La cantidad debe ser mayor a 0" })
  cantidad!: number;

  @IsString({ message: "La unidad de medida debe ser texto" })
  @MinLength(1, { message: "La unidad de medida es obligatoria" })
  @MaxLength(30, { message: "La unidad de medida no debe superar 30 caracteres" })
  unidadMedida!: string;

  @IsDateString({}, { message: "La fecha de expiracion debe tener formato valido" })
  fechaExpiracion!: string;

  @IsString({ message: "El estado debe ser texto" })
  @MinLength(2, { message: "El estado debe tener al menos 2 caracteres" })
  @MaxLength(20, { message: "El estado no debe superar 20 caracteres" })
  estado!: string;
}
