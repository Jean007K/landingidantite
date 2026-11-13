---
name: "EMVERAX Documentation"
description: "Manual técnico preciso para integrar la API v2 de EMVERAX con seguridad."
colors:
  emverax-blue: "#0046FB"
  emverax-blue-deep: "#003CCF"
  blue-wash: "#EAF1FF"
  selection-wash: "#CFE0FF"
  focus-wash: "#D6E2FF"
  surface: "#FFFFFF"
  surface-muted: "#F8FAFC"
  line: "#E2E8F0"
  line-strong: "#CBD5E1"
  heading: "#020617"
  ink: "#0F172A"
  body: "#475569"
  muted: "#64748B"
  code-surface: "#0B1220"
  code-text: "#DCE7F7"
typography:
  display:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "44px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.111
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.333
    letterSpacing: "-0.025em"
  body-large:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.778
  body-small:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.429
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.429
  eyebrow:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 700
    letterSpacing: "0.12em"
  code:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.846
rounded:
  inline: "4px"
  sm: "6px"
  md: "8px"
  lg: "12px"
  full: "9999px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "20px"
  "6": "24px"
  "7": "28px"
  "8": "32px"
  "9": "36px"
  "10": "40px"
  "12": "48px"
components:
  button-primary:
    backgroundColor: "{colors.emverax-blue}"
    textColor: "{colors.surface}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "10px 16px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.emverax-blue-deep}"
    textColor: "{colors.surface}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "10px 16px"
    height: "44px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "#1E293B"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "10px 16px"
    height: "44px"
  search-input:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.ink}"
    typography: "{typography.body-small}"
    rounded: "{rounded.md}"
    padding: "0 56px 0 36px"
    height: "36px"
  api-version-chip:
    backgroundColor: "{colors.blue-wash}"
    textColor: "{colors.emverax-blue-deep}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
  navigation-active:
    backgroundColor: "{colors.blue-wash}"
    textColor: "{colors.emverax-blue-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
  code-block:
    backgroundColor: "{colors.code-surface}"
    textColor: "{colors.code-text}"
    typography: "{typography.code}"
    rounded: "{rounded.lg}"
    padding: "20px"
  endpoint-post:
    backgroundColor: "{colors.emverax-blue}"
    textColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: "4px 10px"
  callout-info:
    backgroundColor: "rgb(239 246 255 / 70%)"
    textColor: "#172554"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    padding: "16px"
  docs-drawer:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.heading}"
    padding: "20px 20px 32px"
    width: "min(88vw, 340px)"
---

# Design System: EMVERAX Documentation

## Overview

**Creative North Star: "El manual de confianza operacional"**

La documentación se comporta como un manual técnico que reduce incertidumbre antes de pedir una acción. Su mundo es blanco y azul EMVERAX: preciso, sobrio y moderno, con navegación persistente, reglas frías, jerarquía tipográfica firme y ejemplos ejecutables que mantienen visible el camino seguro de integración.

La expresión evita la estética de una landing comercial. No usa gradientes promocionales, grandes gestos decorativos ni colecciones de tarjetas inconexas; la personalidad aparece en la exactitud de la retícula, el azul usado con medida, los bloques navy de código y una profundidad reservada para capas funcionales. La densidad es informativa pero respirable, y cada patrón debe ayudar a leer, orientarse, copiar o decidir.

**Key Characteristics:**

- Manual técnico blanco y azul, no página de venta.
- Jerarquía de lectura firme con Inter y columna de texto contenida.
- Navegación precisa y persistente en escritorio, accesible como cajón en móvil.
- Bordes fríos, radios contenidos y profundidad funcional.
- Código navy como ancla visual de la integración segura.

## Colors

La paleta combina el azul eléctrico de EMVERAX con una escala neutral slate; el color identifica acciones, posición y sintaxis operacional sin teñir la superficie de lectura.

### Primary

- **Azul EMVERAX** (`emverax-blue`): acción primaria, enlaces relevantes, métodos POST, iconos de orientación y foco visible.
- **Azul EMVERAX Profundo** (`emverax-blue-deep`): hover de la acción principal y texto activo sobre fondos azules pálidos.
- **Lavado de Navegación** (`blue-wash`): selección de navegación, chip de versión y numeración de pasos.
- **Lavado de Selección** (`selection-wash`): selección de texto; comunica control sin competir con el contenido.
- **Halo de Foco** (`focus-wash`): segundo anillo suave del campo de búsqueda.

### Neutral

- **Papel Operacional** (`surface`): fondo dominante de la documentación y de los controles secundarios.
- **Papel Frío** (`surface-muted`): fondos de búsqueda, cabeceras de tabla y estados hover discretos.
- **Regla Fría** (`line`) y **Regla Firme** (`line-strong`): divisores, contornos y límites entre zonas funcionales.
- **Titular Nítido** (`heading`) y **Tinta Técnica** (`ink`): títulos y texto de alta prioridad.
- **Texto de Lectura** (`body`) y **Texto Auxiliar** (`muted`): cuerpo, metadatos, migas y navegación secundaria.
- **Navy de Código** (`code-surface`) y **Código de Hielo** (`code-text`): contraste dedicado a ejemplos copiables.

**The Azul Medido Rule.** El azul principal señala posición, acción o método; no rellena grandes superficies de lectura ni se usa como ornamento.

## Typography

**Display Font:** Inter (con `ui-sans-serif`, `system-ui` y `sans-serif` como respaldo)
**Body Font:** Inter (con `ui-sans-serif`, `system-ui` y `sans-serif` como respaldo)
**Label/Mono Font:** pila monoespaciada del sistema para código, rutas y métodos

**Character:** Inter produce una voz técnica contemporánea, legible y sin gestos editoriales innecesarios. El contraste depende de peso, escala y ritmo; la tipografía monoespaciada aparece solo cuando la literalidad del contrato importa.

### Hierarchy

- **Display** (700, 44px, 1.1): H1 de escritorio, limitado a 18ch y con tracking compacto.
- **Headline** (700, 36px, 1.111): H1 móvil cuando el viewport no admite la escala completa.
- **Title** (600, 24px, 1.333): encabezados de sección dentro del artículo.
- **Body Large** (400, 18px, 1.778): descripción inicial, con ancho máximo de 66ch.
- **Body Small** (400, 14px, 1.429): descripciones compactas en endpoints, resultados y callouts.
- **Body** (400, 16px, 1.75): explicación principal y listas, con ancho máximo de 72ch.
- **Label** (600, 14px, 1.429): acciones, rutas secundarias y navegación de alta intención.
- **Eyebrow** (700, 11px, 0.12em): categorías de navegación y versiones, siempre breve y en mayúsculas.
- **Code** (400, 13px, 1.846): bloques de código; rutas inline y métodos suben a peso semibold o bold según función.

**The Jerarquía Silenciosa Rule.** La comprensión nace de escala, peso y espacio; no añadas color ni ornamentación cuando la jerarquía tipográfica ya resuelve la relación.

## Layout

El shell documental ocupa hasta 1600px y se adapta de una a tres columnas. Desde 1024px usa navegación lateral de 240px y artículo central; desde 1280px pasa a 230px, artículo flexible y tabla de contenidos de 200px, con separaciones de 40px y 48px. El artículo no supera 800px y su prosa se mantiene entre 66ch y 72ch.

En móvil y tablet la navegación lateral se convierte en un cajón de hasta 340px o 88vw, mientras la tabla de contenidos desaparece. El artículo usa 20px de padding lateral en móvil y 32px desde 640px. La barra documental permanece debajo del header global; el chip de versión se oculta en móvil estrecho y el acceso al panel aparece solo desde 1024px. El ritmo usa pasos reales de 4, 8, 12, 16, 20, 24, 28, 32, 36, 40 y 48px.

**The Camino Visible Rule.** El lector debe conservar simultáneamente orientación, contenido actual y siguiente paso; cualquier adaptación responsiva puede reubicar esos elementos, pero no volverlos ambiguos.

## Elevation & Depth

El sistema es plano por defecto y separa regiones con fondo, borde y posición sticky. La elevación aparece solamente cuando una capa se superpone o cuando un bloque necesita actuar como herramienta: resultados de búsqueda, cajón móvil, botones accionables y código. Los bloques navy aportan profundidad por contraste tonal, no mediante decoración abundante.

### Shadow Vocabulary

- **Código contenido** (`0 14px 34px -22px rgba(15,23,42,0.8)`): separa un ejemplo ejecutable del papel sin hacerlo flotar como tarjeta promocional.
- **Búsqueda superpuesta** (`0 18px 50px -18px rgba(15,23,42,0.35)`): confirma que los resultados están temporalmente por encima del manual.
- **Controles discretos** (`shadow-sm`): botones primarios y secundarios; nunca debe convertirse en una sombra atmosférica dominante.
- **Cajón modal** (`shadow-2xl`): reservado para la navegación móvil sobre el velo slate.

**The Profundidad Contenida Rule.** Una superficie obtiene sombra solo cuando cambia de plano o de responsabilidad; el contenido ordinario se estructura con reglas y espacio.

## Shapes

La geometría usa esquinas suavemente contenidas: 6px en chips, métodos y acciones compactas; 8px en botones, búsqueda y navegación; 12px en código, callouts, tablas y resultados superpuestos. El radio de 4px queda reservado a fragmentos inline y teclas. Los círculos aparecen únicamente en numeración de pasos o iconografía funcional.

Los bordes de 1px son slate fríos y forman la mayor parte de la arquitectura. Los bloques de código recortan su cabecera y cuerpo dentro de un radio común; las filas de endpoint, en cambio, permanecen abiertas y se delimitan solo arriba y abajo.

**The Esquina con Función Rule.** El radio comunica escala y contención: compacto para metadatos, medio para controles y amplio solo para contenedores técnicos completos.

## Components

### Buttons

- **Shape:** rectángulo compacto de 8px, altura mínima de 44px y padding de 10px por 16px.
- **Primary:** Azul EMVERAX, texto blanco semibold y flecha solo cuando refuerza dirección.
- **Hover / Focus:** azul profundo en hover; anillo azul de 2px con offset claro para teclado.
- **Secondary:** papel blanco, texto slate oscuro, borde slate-300 y hover slate-50; conserva el mismo peso que el primario sin competir por color.

### Chips

- **Style:** el chip API v2 usa lavado de navegación, texto azul profundo, radio de 6px y 4px por 8px de padding.
- **State:** es informativo, no interactivo; no imita un botón ni una pestaña seleccionable.

### Cards / Containers

- **Corner Style:** 12px para resultados, tablas, callouts y código; las listas de enlaces y endpoints evitan caja exterior.
- **Background:** blanco o papel frío para información; navy solo para código.
- **Shadow Strategy:** plano por defecto y limitado al vocabulario de elevación.
- **Border:** 1px slate-200, con slate-100 para divisiones internas más suaves.
- **Internal Padding:** 16px en callouts y tablas; 20px en el cuerpo de código.

### Inputs / Fields

- **Style:** búsqueda de 36px, fondo slate-50, borde slate-200, radio de 8px e icono a la izquierda.
- **Focus:** fondo blanco, borde azul medio y halo azul pálido de 2px.
- **Error / Disabled:** no están definidos en la búsqueda documental; no los inventes a partir de estados de otros formularios.

### Navigation

La navegación usa etiquetas de grupo de 11px en mayúsculas y enlaces de 14px. El estado activo combina lavado azul, texto azul profundo y peso semibold; hover neutraliza con slate-100. En escritorio permanece sticky y desplazable; bajo 1024px vive en un cajón modal con foco atrapado, cierre por Escape y restitución de foco.

### Code Blocks

El bloque de código es la firma visual del manual: superficie navy de 12px, cabecera separada por blanco al 10%, metadatos slate y contenido monoespaciado de hielo. La acción Copiar vive dentro de la cabecera, expone foco azul claro y confirma “Copiado” durante 1800ms.

### Endpoint Rows and Callouts

Las filas de endpoint usan reglas horizontales, método compacto y ruta monoespaciada; POST toma azul EMVERAX y GET usa verde semántico. Los callouts mantienen la misma estructura —icono, título y texto— y cambian solamente borde, lavado y acento entre información, advertencia y éxito.

### Documentation Drawer

El cajón móvil ocupa hasta 340px o 88vw, entra desde el borde izquierdo sobre un velo slate al 35% y repite el árbol de navegación de escritorio. Es un diálogo modal: bloquea el fondo, contiene el foco y devuelve el foco al disparador al cerrar.

## Do's and Don'ts

### Do:

- **Do** usa el azul EMVERAX para acciones, foco, posición y métodos; deja la mayor parte de la pantalla blanca.
- **Do** mantiene la prosa entre 66ch y 72ch y el shell de lectura por debajo de 800px.
- **Do** presenta el camino recomendado antes de la referencia exhaustiva.
- **Do** conserva foco visible, navegación por teclado y estados accesibles en búsqueda, cajón y acciones.
- **Do** usa navy y tipografía monoespaciada para ejemplos que el integrador puede copiar literalmente.

### Don't:

- **Don't** conviertas la documentación en una landing promocional con gradientes, píldoras decorativas o grandes fondos azules.
- **Don't** encierres cada fragmento en una tarjeta; usa reglas, ritmo y contenedores solo cuando expresan estructura o estado.
- **Don't** uses sombras en contenido ordinario ni mezcles más de un nivel de elevación sin una razón funcional.
- **Don't** sustituyas Inter por una tipografía expresiva ni uses mono fuera de código, rutas, métodos y valores literales.
- **Don't** ocultes credenciales, límites o próximos pasos detrás de interacción innecesaria.
