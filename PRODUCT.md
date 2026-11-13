# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Los usuarios principales son equipos técnicos de empresas clientes que necesitan integrar la verificación de identidad de EMVERAX en sus propios productos. También consultan la documentación responsables de seguridad, cumplimiento y operaciones que deben entender el flujo, los datos tratados y la salida de cada verificación.

## Product Purpose

EMVERAX ofrece infraestructura B2B para crear sesiones de verificación, capturar documentos y selfie, registrar consentimiento, comunicar resultados firmados y permitir que la empresa cliente tome decisiones dentro de su propio flujo. La documentación pública debe permitir que un integrador complete una primera integración segura sin depender de explicaciones privadas.

## Positioning

EMVERAX combina una API versionada con una captura alojada para que la empresa cliente mantenga sus credenciales en el backend mientras el usuario final completa el proceso en una experiencia separada y controlada.

## Operating Context

La integración comienza en sandbox con una clave API asociada al ambiente. El backend del cliente crea una sesión, entrega al usuario final un enlace alojado de captura y recibe el resultado mediante webhook firmado. Las empresas que construyan captura propia deben registrar el consentimiento antes de subir documentos o selfie. La URL pública de la API es `https://api.emverax.com` y la captura alojada vive en `https://verify.emverax.com`.

## Capabilities and Constraints

- Contrato público actual: API v2.
- Autenticación de integradores mediante `X-API-Key`; el ambiente pertenece a la clave.
- Flujo disponible para documento y selfie, con estados de sesión y decisiones `APPROVE`, `REVIEW` y `REJECT`.
- Webhooks firmados con HMAC-SHA256 y eventos SSE para seguimiento en tiempo real.
- `/v2/sessions/:id/submit` está retirado y responde `410 Gone`.
- La documentación pública no expone rutas internas, infraestructura, credenciales, umbrales operativos ni capacidades no contratadas.
- Los ejemplos nunca contienen secretos reales.

## Brand Commitments

La marca es EMVERAX. Su voz es precisa, confiable, moderna, segura y transparente. La nueva documentación hereda la identidad visual y verbal de `emverax.com`; no constituye un rediseño de la marca.

## Evidence on Hand

- Implementación visual y contenidos de marca en `src/` y `public/`.
- Contrato vigente de backend y pruebas en `D:/14.-Idantite/panel-usuario-y-backend/api/`.
- Documentación histórica, guías de integración, seguridad y legal en `D:/14.-Idantite/`, usada como contexto pero subordinada al comportamiento comprobado del código actual.
- No se deben fabricar certificaciones, clientes, benchmarks ni garantías comerciales.

## Product Principles

- El código vigente y sus pruebas son la fuente de verdad del contrato técnico.
- El camino recomendado debe ser visible antes que las opciones avanzadas.
- Las credenciales permanecen siempre en el backend del cliente.
- Los límites y responsabilidades se explican con la misma claridad que las capacidades.
- Una integración debe poder verificarse de extremo a extremo en sandbox antes de pasar a producción.

## Accessibility & Inclusion

La documentación debe ser utilizable con teclado, conservar foco visible, mantener contraste suficiente, respetar reducción de movimiento y ofrecer una estructura semántica comprensible para tecnologías de asistencia.
