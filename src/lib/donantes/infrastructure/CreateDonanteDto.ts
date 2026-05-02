import {
  IsEmail,
  IsInt,
  IsString,
  MaxLength,
  Min,
  MinLength
} from "class-validator";

export class CreateDonanteDto {
  @IsInt({ message: "La categoria debe ser un numero entero" })
  @Min(1, { message: "La categoria es obligatoria" })
  idCategoria!: number;

  @IsString({ message: "El tipo de donante debe ser texto" })
  @MinLength(2, { message: "El tipo de donante debe tener al menos 2 caracteres" })
  @MaxLength(5, { message: "El tipo de donante no debe superar 5 caracteres" })
  tipoDonante!: string;

  @IsString({ message: "Los nombres deben ser texto" })
  @MinLength(2, { message: "Los nombres deben tener al menos 2 caracteres" })
  @MaxLength(100, { message: "Los nombres no deben superar 100 caracteres" })
  nombres!: string;

  @IsString({ message: "Los apellidos deben ser texto" })
  @MinLength(2, { message: "Los apellidos deben tener al menos 2 caracteres" })
  @MaxLength(100, { message: "Los apellidos no deben superar 100 caracteres" })
  apellidos!: string;

  @IsString({ message: "La identificacion debe ser texto" })
  @MinLength(5, { message: "La identificacion debe tener al menos 5 caracteres" })
  @MaxLength(20, { message: "La identificacion no debe superar 20 caracteres" })
  identificacion!: string;

  @IsEmail({}, { message: "El correo no es valido" })
  @MaxLength(100, { message: "El correo no debe superar 100 caracteres" })
  correo!: string;

  @IsString({ message: "El telefono debe ser texto" })
  @MinLength(7, { message: "El telefono debe tener al menos 7 caracteres" })
  @MaxLength(20, { message: "El telefono no debe superar 20 caracteres" })
  telefono!: string;

  @IsString({ message: "La direccion debe ser texto" })
  @MinLength(5, { message: "La direccion debe tener al menos 5 caracteres" })
  @MaxLength(250, { message: "La direccion no debe superar 250 caracteres" })
  direccion!: string;
}
