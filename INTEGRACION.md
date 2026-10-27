# Red Tecnoparque Colombia · Rediseño en Vue 2

Rediseño de las vistas públicas y de acceso, manteniendo el logo. Hecho con **Vue 2.7 + vue-router 3** (API de opciones; sin `<script setup>` ni Composition API, así que funciona también en Vue 2.5/2.6 con cambios mínimos).

## Probar
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/ (también incluido ya construido)
```

## Vistas (mismas URLs del sitio actual)
| Ruta | Vista |
|---|---|
| `/` | `Home.vue` |
| `/nodos-tecnoparque` | `Nodos.vue` (buscador) |
| `/lineas-tecnoparque` | `Lineas.vue` (explorador por pestañas) |
| `/servicios-tecnoparque` | `Servicios.vue` |
| `/creditos` | `Creditos.vue` |
| `/registro` | `Registro.vue` (asistente de 6 pasos, campos condicionales) |
| `/login` | `Login.vue` |
| `/password/reset` | `PasswordReset.vue` |
| `/email/reset` | `EmailReset.vue` |

## Cómo llevarlo a tu proyecto
1. Copia `src/components`, `src/views`, `src/styles`, `src/utils`, `src/data` y `src/services`.
2. Importa los 3 CSS (`tokens`, `base`, `components`) una vez. **Todo está bajo `.tp-app`, con clases `tp-*` y variables `--tp-*`**, para no chocar con tu CSS. Envuelve tu app en `<div class="tp-app">` (ver `App.vue`).
3. Añade las rutas de `src/router.js` a tu router. Usa `mode: 'history'` en Laravel (en la demo es `hash`).
4. Fuentes: Work Sans y Bricolage Grotesque desde Google Fonts (ver `index.html`).
5. **Backend:** en `src/services/api.js` pon `USE_MOCK = false`. Endpoints esperados (ajústalos a los tuyos):
   `POST /login`, `POST /password/email`, `POST /email/reset`, `GET /api/usuarios/existe`, `GET /api/ciudades`, `POST /registro`, `GET /api/nodos`. Lee el token CSRF de `meta[name=csrf-token]`. Si usas axios, cambia solo la función `http()`.
6. **Logo:** `BrandLogo.vue` usa PNG con fondo transparente (blanco y verde). Para máxima nitidez usa tus SVG originales: `<BrandLogo src-override="/img/logo-tecnoparque-white.svg" />`.
7. Componentes de formulario con `v-model` estándar de Vue 2 (`value`/`input`): `TpInput`, `TpSelect`, `TpRadioGroup`, `TpCheck`.

## Datos y textos
`src/data/contenido.js` tiene los textos públicos. Lo que corregí está marcado con `// corregido`: **revísenlo antes de publicar**.

## Hallazgos del sitio actual (para corregir en el contenido)
- Nodos muestra 1 solo nodo, mientras los metadatos hablan de 22 nodos, 12 departamentos y 20 ciudades.
- Líneas: dice 4 líneas pero lista 12 secciones, 8 con el texto e imagen copiados de "Tecnologías Virtuales"; los títulos de las 3 primeras líneas están rotados respecto de sus descripciones/equipos.
- Servicios "Acompañamiento" y "Mantenimiento" tienen la misma descripción.
- Errores de texto: "Animacion Dos D/Tres D", "Registrate", "veridica".
- Placeholders "Cargando..." visibles; copyright 2019 en metadatos vs 2026 en el pie.

## Límites de esta entrega
- **No vi el área autenticada** (no tenía credenciales). Solo se rediseñaron las vistas públicas y de acceso. Si me pasan capturas o un usuario de prueba, el panel se adapta con el mismo sistema.
- La API es simulada (demo): documento `1000000000` aparece "ya registrado"; contraseña `incorrecta` falla el ingreso.
- Los campos del registro se infirieron del sitio actual; confirma los obligatorios con el backend.
- El texto de las otras 8 áreas de especialización no se pudo obtener.
