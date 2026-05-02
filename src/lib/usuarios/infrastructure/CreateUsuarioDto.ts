import {
  IsEmail,
  IsInt,
  IsString,
  MaxLength,
  Min,
  MinLength
} from "class-validator";

export class CreateUsuarioDto {
  @IsInt({ message: "El id del rol debe ser un numero entero" })
  @Min(1, { message: "El id del rol es obligatorio" })
  idRol!: number;

  @IsString({ message: "Los nombres deben ser texto" })
  @MinLength(2, { message: "Los nombres deben tener al menos 2 caracteres" })
  @MaxLength(100, { message: "Los nombres no deben superar 100 caracteres" })
  nombres!: string;

  @IsString({ message: "Los apellidos deben ser texto" })
  @MinLength(2, { message: "Los apellidos deben tener al menos 2 caracteres" })
  @MaxLength(20, { message: "Los apellidos no deben superar 20 caracteres" })
  apellidos!: string;

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

  @IsString({ message: "La contrasena debe ser texto" })
  @MinLength(8, { message: "La contrasena debe tener al menos 8 caracteres" })
  @MaxLength(255, { message: "La contrasena no debe superar 255 caracteres" })
  passwordHash!: string;

  @IsString({ message: "El estado debe ser texto" })
  @MinLength(2, { message: "El estado debe tener al menos 2 caracteres" })
  @MaxLength(20, { message: "El estado no debe superar 20 caracteres" })
  estado!: string;
}
