# Actividad 4: Integración en arquitectura hexagonal

## Objetivo
Implementar una API con arquitectura hexagonal, separando responsabilidades por capas e integrando un ORM para persistencia relacional.

## Cumplimiento de la actividad

### 1) Incorporar ORM en una arquitectura hexagonal


### 2) Separar capas: dominio, aplicación e infraestructura

## Evidencia de código funcional y buenas prácticas

### Evidencia funcional
- Compilación de tipos ejecutada correctamente:

```bash
npm run typecheck
```

## Ejecución del proyecto

```bash
npm install
npm run dev
```

La API se expone bajo el prefijo:

```text
/api/v2/uisrael
```

## Endpoints disponibles

### Donaciones `/api/v2/uisrael/donaciones`

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/getAllDonaciones` | Listar todas las donaciones |
| GET | `/getAllDonacionesConRelaciones` | Listar donaciones con donante, responsable y categoría |
| GET | `/donacionesPorCategoria/:idCategoria` | Filtrar donaciones por categoría |
| GET | `/donacionesPorDonante/:idDonante` | Filtrar donaciones por donante |
| POST | `/insertDonacion` | Crear una donación |
| PATCH | `/updateDonacion/:id` | Actualizar una donación |
| DELETE | `/deleteDonacion/:id` | Eliminar una donación |

### Donantes `/api/v2/uisrael/donantes`

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/getAllDonantes` | Listar todos los donantes |
| GET | `/getAllDonantesConCategoria` | Listar donantes con su categoría |
| POST | `/insertDonante` | Crear un donante |
| PATCH | `/updateDonante/:id` | Actualizar un donante |
| DELETE | `/deleteDonante/:id` | Eliminar un donante |

### Usuarios `/api/v2/uisrael/usuarios`

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/getAllUsuarios` | Listar todos los usuarios |
| GET | `/getAllUsuariosConRol` | Listar usuarios con su rol |
| GET | `/usuariosPorRol/:idRol` | Filtrar usuarios por rol |
| POST | `/insertUsuario` | Crear un usuario |
| PATCH | `/updateUsuario/:id` | Actualizar un usuario |
| DELETE | `/deleteUsuario/:id` | Eliminar un usuario |

### Roles `/api/v2/uisrael/roles`

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/getAllRoles` | Listar todos los roles |
| POST | `/insertRol` | Crear un rol |
| PATCH | `/updateRol/:id` | Actualizar un rol |
| DELETE | `/deleteRol/:id` | Eliminar un rol |

### Categorías de donación `/api/v2/uisrael/categoriasDonacion`

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/getAllCategorias` | Listar todas las categorías |
| POST | `/insertCategoria` | Crear una categoría |
| PATCH | `/updateCategoria/:id` | Actualizar una categoría |
| DELETE | `/deleteCategoria/:id` | Eliminar una categoría |


