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

## Cómo trabajamos como equipo

Este proyecto fue desarrollado por un equipo de 4 personas. Nos organizamos de forma colaborativa para asegurar una comunicación fluida y una ejecución eficiente. A continuación, detallamos cómo fue nuestra dinámica de trabajo:

#### Organización del equipo

**Planificación inicial:**
Al comenzar el proyecto, realizamos reuniones para definir los objetivos, establecer las funcionalidades clave y distribuir las tareas por páginas, para que cada uno pueda aplicar HTML, CSS y JS.

**Distribución de roles:**

- **Alan:** Se encargó de la página de _payment_ y la funcionalidad del buscador en el navbar.
- **Paul:** Se encargó de la página de _wishlist_ y _info-game_.
- **Alejandro:** Se encargó de la página de _home_ y _contact_.
- **Lucas:** Se encargó de la página de _login_ y _comentarios_.

#### Metodología de trabajo

- Utilizamos **GitHub** como herramienta principal de control de versiones.
- Cada integrante trabajó en una **rama independiente** y luego propuso cambios mediante _pull requests_.
- La comunicación del equipo se llevó a cabo a través de **WhatsApp o Discord**, permitiendo coordinar avances y resolver bloqueos de forma ágil.

#### Revisión y colaboración

- Todo cambio fue revisado constantemente por los miembros del equipo.
- Si había conflictos, nos reuníamos y lo solucionábamos.
- Seguimos una **guía básica de estilo** para mantener coherencia en el código HTML, CSS y JavaScript.
- Al finalizar el desarrollo, realizamos **pruebas cruzadas** para validar la funcionalidad completa del proyecto en conjunto.

## Authors

- [@alelex10](https://www.github.com/alelex10)
- [@fwmc-dev](https://www.github.com/fwmc-dev)
- [@gomosit0](https://www.github.com/gomosit0)
- [@yoelcolque](https://www.github.com/yoelcolque)

## Demo

[GameVault](https://grupo-10.vercel.app/)
