# Skills de diseño instaladas

Skills de agente instaladas a nivel de proyecto en `.claude/skills/`.
Se activan solas por descripción, o se invocan con `/<nombre>`.

## Procedencia

| Origen | Commit instalado | Skills |
|---|---|---|
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | `de5f12b` | 7 |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | `f2c7051` | 1 (+4 subagentes, 2 hooks) |
| [emilkowalski/skills](https://github.com/emilkowalski/skills) | `85e8e23` | 13 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | `e79ca9e` | 13 |

## Inventario por origen

**ui-ux-pro-max** — `ui-ux-pro-max`, `design`, `design-system`, `ui-styling`, `brand`, `banner-design`, `slides`

**impeccable** — `impeccable` (comandos `/impeccable init|audit|critique|polish|...`).
Subagentes en `.claude/agents/impeccable-*.md`. Hooks en `.claude/settings.json`:
verificación de UI tras Edit/Write y pasada profunda al terminar el turno.
El launcher `skills/impeccable/scripts/impeccable` descarga su binario a `~/.impeccable/bin/`
en el primer uso; el hook está protegido y no falla si el archivo no existe.

**emilkowalski** — `animate`, `animate-expo`, `animation-vocabulary`, `apple-design`,
`ask-sonner`, `emil-design-eng`, `find-animation-opportunities`, `improve-animations`,
`mobile-native`, `pick-ui-library`, `prototype`, `review-animations`, `write-swift`

**taste-skill** — `design-taste-frontend`, `design-taste-frontend-v1`, `gpt-taste`,
`image-to-code`, `imagegen-frontend-web`, `imagegen-frontend-mobile`, `brandkit`,
`redesign-existing-projects`, `high-end-visual-design`, `full-output-enforcement`,
`minimalist-ui`, `industrial-brutalist-ui`, `stitch-design-taste`

> Las carpetas de taste-skill se renombraron al `name:` de su frontmatter (nombre de
> instalación canónico), no al nombre de carpeta del repo original.

## Actualizar

Volver a clonar el repo de origen y copiar su carpeta de skills sobre `.claude/skills/`.
Para impeccable existe además `npx impeccable update`.
