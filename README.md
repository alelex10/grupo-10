# GameVault

El proyecto consiste en una aplicación web que permite a los usuarios buscar y comprar videojuegos y DLCs.

La aplicación se divide en varias secciones:

- Home: Esta sección es la página principal de la aplicación y muestra una lista de los ultimos juegos y los más populares.

- Inicio de Sesión: Esta sección permite a los usuarios iniciar sesión y acceder a la Wishlist y Comentarios.

- Buscador de Juegos: Esta sección permite a los usuarios buscar juegos.

- Compra de Juegos: Esta sección permite a los usuarios comprar juegos y DLCs guardados en la Wishlist, ademas de una sección de comentarios.

- Página de Juegos: Esta sección muestra información detallada sobre cada juego y DLC..

- Wishlist: Esta sección permite a los usuarios agregar juegos y DLCs a su lista de deseos.

- Contacto: Esta sección permite a los usuarios enviar sus comentarios y preguntas a través de un formulario.

## Installation

Para instalar el proyecto, primero debemos clonarlo en nuestro equipo:

```bash
git clone https://github.com/alelex10/grupo-10.git
```

Una vez clonado, debemos instalar las dependencias del proyecto:

```bash
pnpm install
```

Una vez instaladas las dependencias, podemos iniciar el servidor de desarrollo:

```bash
pnpm dev
```

Esto iniciará un servidor de desarrollo en el puerto 4321, y nos mostrará la página de inicio del proyecto.

Si deseamos construir el proyecto para producción, podemos ejecutar:

```bash
pnpm build
```

Esto generará un directorio `dist` con el código compilado y optimizado para producción.

## API Reference

#### Get all games

```http
  GET https://api.rawg.io/api/games
```

| Parameter  | Type     | Description                                                                   |
| :--------- | :------- | :---------------------------------------------------------------------------- |
| `api_key`  | `string` | **Required**. Your API key                                                    |
| `ordering` | `string` | **Optional**. Determines result sort order                                    |
| `dates`    | `string` | **Optional**. Filters results by date range. Format: `YYYY-MM-DD,YYYY-MM-DD`. |

#### Get game

```http
  GET https://api.rawg.io/api/games/${slug}
```

| Parameter | Type     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `api_key` | `string` | **Required**. Your API key          |
| `slug`    | `string` | **Required**. Slug of game to fetch |

#### Get game's screenshots

```http
  GET https://api.rawg.io/api/games/${id}/screenshots
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of game to fetch |
| `api_key` | `string` | **Required**. Your API key        |

#### Get game's additions

```http
  GET https://api.rawg.io/api/games/${id}/additions
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of game to fetch |
| `api_key` | `string` | **Required**. Your API key        |

#### Get searched games

```http
  GET https://api.rawg.io/api/games
```

| Parameter   | Type     | Description                                                        |
| :---------- | :------- | :----------------------------------------------------------------- |
| `api_key`   | `string` | **Required**. Your API key                                         |
| `search`    | `string` | **Required**. Name of game to fetch                                |
| `page_size` | `string` | **Required**. Number of results to return per page. Example: `20`. |

## Authors

- [@alelex10](https://www.github.com/alelex10)
- [@fwmc-dev](https://www.github.com/fwmc-dev)
- [@gomosit0](https://www.github.com/gomosit0)
- [@yoelcolque](https://www.github.com/yoelcolque)

## Demo

[GameVault](https://grupo-10.vercel.app/)
