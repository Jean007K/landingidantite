---
version: 1
slug: "src-app-docs-slug-page-tsx"
primary_target: "src/app/docs/[[...slug]]/page.tsx"
related_targets: ["src/components/docs/DocsShell.tsx"]
---

# Documentation Surface Brief

## Scope

Ruta pública `/docs` y sus páginas hijas. Modo: Read. Audiencia principal: desarrolladores y responsables técnicos de empresas clientes que deben completar una integración segura con la API v2. La estructura, URL y contenidos fueron aprobados por el usuario. La superficie hereda la identidad existente de emverax.com y no altera el backend ni su documentación histórica.

## Direction contract

THESIS: La documentación se comporta como un manual operativo de confianza: el camino recomendado siempre aparece antes que la referencia exhaustiva. Rechaza tanto una landing promocional disfrazada de documentación como una colección de tarjetas inconexas.

OWN-WORLD: Marco blanco y azul EMVERAX, tipografía Inter, navegación precisa, reglas frías y superficies de código azul marino. El azul principal marca posición, acciones y métodos sin invadir la columna de lectura; bordes finos y radios contenidos sustituyen ornamentos.

STORY: El lector entiende primero el flujo completo, crea una sesión en sandbox, entrega la captura alojada, verifica el webhook y procesa la decisión. La navegación separa integración, referencia, ejemplos y seguridad, y siempre ofrece el siguiente paso.

FIRST VIEWPORT: Cabecera compacta de documentación con marca, versión y acceso al panel; debajo, una retícula de tres columnas con árbol lateral, artículo central y tabla de contenidos. La portada abre con “Integra verificación de identidad con EMVERAX”, una explicación breve, dos acciones claras y un ejemplo real de creación de sesión visible sin desplazar la orientación.

FORM: Manual técnico digital, primero de la lista aprobada por claridad y mantenimiento. Sidebar persistente en escritorio, cajón accesible en móvil, búsqueda local, código copiable y navegación anterior/siguiente. seed: none (unavailable)

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
