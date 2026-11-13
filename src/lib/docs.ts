export type DocMethod = 'GET' | 'POST';

export type DocBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'steps'; items: Array<{ title: string; description: string }> }
  | { type: 'code'; title: string; language: string; code: string }
  | { type: 'callout'; tone: 'info' | 'warning' | 'success'; title: string; text: string }
  | { type: 'endpoint'; method: DocMethod; path: string; description: string }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'links'; items: Array<{ title: string; description: string; href: string }> };

export type DocSection = {
  id: string;
  title: string;
  blocks: DocBlock[];
};

export type DocPage = {
  slug: string;
  title: string;
  description: string;
  category: string;
  sections: DocSection[];
};

export type DocNavGroup = {
  title: string;
  items: Array<{ slug: string; title: string }>;
};

const createSessionCurl = String.raw`curl --request POST \
  --url https://api.emverax.com/v2/sessions \
  --header 'Content-Type: application/json' \
  --header 'X-API-Key: emv_sandbox_REEMPLAZA_ESTA_CLAVE' \
  --data '{
    "end_user_ref": "cliente-8472",
    "workflow_type": "document_selfie",
    "return_url": "https://tu-app.example.com/verificacion/completa"
  }'`;

const createSessionResponse = String.raw`{
  "session_id": "f3a72d98-7d19-4f32-a3eb-81011ecdc2cf",
  "status": "created",
  "environment": "sandbox",
  "share_token": "TOKEN_DE_CAPTURA",
  "return_url": "https://tu-app.example.com/verificacion/completa",
  "consent": {
    "accepted": false,
    "text_version": "CAPTURA-CONSENT-ES-1.0"
  }
}`;

const webhookPayload = String.raw`{
  "event": "verification.completed",
  "session_id": "f3a72d98-7d19-4f32-a3eb-81011ecdc2cf",
  "data": {
    "session_id": "f3a72d98-7d19-4f32-a3eb-81011ecdc2cf",
    "external_ref": "cliente-8472",
    "environment": "sandbox",
    "status": "completed",
    "workflow_type": "document_selfie",
    "decision": "APPROVE",
    "approved": true,
    "scores": {},
    "reasons": [],
    "extracted_data": {},
    "artifacts": ["document_front", "document_back", "selfie"]
  },
  "sent_at": "2026-11-13T16:24:18Z"
}`;

export const docsNavigation: DocNavGroup[] = [
  {
    title: 'Comenzar',
    items: [
      { slug: '', title: 'Introducción' },
      { slug: 'primeros-pasos', title: 'Primeros pasos' },
      { slug: 'flujo-de-verificacion', title: 'Flujo de verificación' },
      { slug: 'autenticacion-y-entornos', title: 'Autenticación y entornos' },
    ],
  },
  {
    title: 'Integración',
    items: [
      { slug: 'consentimiento', title: 'Consentimiento' },
      { slug: 'webhooks', title: 'Webhooks' },
      { slug: 'estados-y-decisiones', title: 'Estados y decisiones' },
    ],
  },
  {
    title: 'Referencia API',
    items: [
      { slug: 'api/sesiones', title: 'Sesiones' },
      { slug: 'api/media', title: 'Documentos y selfie' },
      { slug: 'api/eventos', title: 'Eventos SSE' },
      { slug: 'api/errores-y-limites', title: 'Errores y límites' },
    ],
  },
  {
    title: 'Recursos',
    items: [
      { slug: 'ejemplos', title: 'Ejemplos de código' },
      { slug: 'seguridad-y-datos', title: 'Seguridad y datos' },
      { slug: 'ir-a-produccion', title: 'Ir a producción' },
      { slug: 'changelog', title: 'Changelog' },
    ],
  },
];

export const docsPages: DocPage[] = [
  {
    slug: '',
    title: 'Integra verificación de identidad con EMVERAX',
    description: 'Crea una sesión, envía a tu usuario a la captura segura y recibe el resultado firmado en tu backend.',
    category: 'Introducción',
    sections: [
      {
        id: 'primera-sesion',
        title: 'Crea tu primera sesión',
        blocks: [
          { type: 'endpoint', method: 'POST', path: '/v2/sessions', description: 'Crea una verificación document_selfie y devuelve un token de captura de uso limitado.' },
          { type: 'code', title: 'Solicitud', language: 'bash', code: createSessionCurl },
          { type: 'code', title: 'Respuesta 201', language: 'json', code: createSessionResponse },
          {
            type: 'callout',
            tone: 'success',
            title: 'Enlace de captura',
            text: 'Construye https://verify.emverax.com/?session=SESSION_ID&t=SHARE_TOKEN y ábrelo en el navegador del usuario final.',
          },
        ],
      },
      {
        id: 'como-funciona',
        title: 'Un flujo seguro de extremo a extremo',
        blocks: [
          {
            type: 'paragraph',
            text: 'Tu backend crea una sesión con una clave de sandbox. EMVERAX devuelve un token de captura que utilizas para construir el enlace alojado. Cuando la verificación termina, tu servidor recibe un webhook firmado con la decisión.',
          },
          {
            type: 'steps',
            items: [
              { title: 'Crea la sesión', description: 'Haz la solicitud desde tu backend y conserva la clave API fuera del navegador.' },
              { title: 'Abre la captura', description: 'Redirige al usuario a verify.emverax.com con el identificador y token devueltos.' },
              { title: 'Recibe el resultado', description: 'Valida la firma HMAC del webhook antes de procesar APPROVE, REVIEW o REJECT.' },
            ],
          },
          {
            type: 'callout',
            tone: 'info',
            title: 'Empieza en sandbox',
            text: 'El ambiente está asociado a la clave API. No envíes X-Environment en las solicitudes de integración.',
          },
        ],
      },
      {
        id: 'siguientes-pasos',
        title: 'Continúa la integración',
        blocks: [
          {
            type: 'links',
            items: [
              { title: 'Primeros pasos', description: 'Completa el recorrido recomendado en sandbox.', href: '/docs/primeros-pasos' },
              { title: 'Webhooks', description: 'Verifica la firma y responde correctamente.', href: '/docs/webhooks' },
              { title: 'Ir a producción', description: 'Revisa la lista técnica antes de activar live.', href: '/docs/ir-a-produccion' },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'primeros-pasos',
    title: 'Primeros pasos',
    description: 'Completa una integración funcional en sandbox usando la captura alojada de EMVERAX.',
    category: 'Comenzar',
    sections: [
      {
        id: 'requisitos',
        title: 'Antes de comenzar',
        blocks: [
          {
            type: 'list',
            items: [
              'Una cuenta de empresa EMVERAX con acceso al panel.',
              'Una clave API de sandbox guardada únicamente en tu backend.',
              'Un endpoint HTTPS público para recibir webhooks.',
              'Un identificador interno no sensible para relacionar la sesión con tu usuario.',
            ],
          },
        ],
      },
      {
        id: 'recorrido',
        title: 'Recorrido recomendado',
        blocks: [
          {
            type: 'steps',
            items: [
              { title: 'Configura el webhook', description: 'Registra la URL HTTPS en el panel y guarda el secreto una sola vez.' },
              { title: 'Crea una sesión', description: 'Envía end_user_ref y, opcionalmente, return_url desde tu servidor.' },
              { title: 'Redirige al usuario', description: 'Construye el enlace de captura con session_id y share_token.' },
              { title: 'Valida el evento', description: 'Calcula HMAC-SHA256 sobre el cuerpo crudo y compara la firma.' },
              { title: 'Procesa la decisión', description: 'Usa el webhook como fuente principal y consulta la sesión para reconciliar.' },
            ],
          },
          { type: 'code', title: 'Crear sesión', language: 'bash', code: createSessionCurl },
        ],
      },
      {
        id: 'resultado-esperado',
        title: 'Qué debes comprobar',
        blocks: [
          {
            type: 'list',
            items: [
              'La sesión se crea con environment sandbox y status created.',
              'La captura solicita consentimiento antes de aceptar fotos.',
              'Tu endpoint responde 2xx al webhook válido.',
              'Tu sistema tolera entregas repetidas usando session_id como clave de idempotencia.',
              'APPROVE, REVIEW y REJECT siguen caminos explícitos en tu aplicación.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'flujo-de-verificacion',
    title: 'Flujo de verificación',
    description: 'Entiende qué hace tu backend, qué hace la captura alojada y cuándo llega el resultado.',
    category: 'Comenzar',
    sections: [
      {
        id: 'responsabilidades',
        title: 'Responsabilidades del flujo',
        blocks: [
          {
            type: 'table',
            headers: ['Etapa', 'Tu sistema', 'EMVERAX'],
            rows: [
              ['Inicio', 'Autentica al usuario y crea la sesión.', 'Emite session_id y share_token.'],
              ['Captura', 'Abre el enlace alojado.', 'Obtiene consentimiento, documento y selfie.'],
              ['Procesamiento', 'Espera un evento o consulta el estado.', 'Procesa los artefactos y determina la decisión.'],
              ['Resultado', 'Valida el webhook y actualiza tu negocio.', 'Firma y entrega el evento correspondiente.'],
            ],
          },
        ],
      },
      {
        id: 'secuencia',
        title: 'Secuencia recomendada',
        blocks: [
          {
            type: 'steps',
            items: [
              { title: 'Backend → API', description: 'POST /v2/sessions con X-API-Key.' },
              { title: 'Backend → navegador', description: 'Entrega el enlace de verify.emverax.com al usuario autenticado.' },
              { title: 'Navegador → captura', description: 'El usuario acepta el aviso y entrega las imágenes requeridas.' },
              { title: 'EMVERAX → webhook', description: 'El resultado llega firmado a tu endpoint HTTPS.' },
              { title: 'Backend → negocio', description: 'Tu aplicación decide cómo continuar según la decisión y sus políticas.' },
            ],
          },
          {
            type: 'callout',
            tone: 'warning',
            title: 'return_url no confirma el resultado',
            text: 'La redirección mejora la experiencia del navegador, pero no reemplaza al webhook ni a GET /v2/sessions/:id.',
          },
        ],
      },
    ],
  },
  {
    slug: 'autenticacion-y-entornos',
    title: 'Autenticación y entornos',
    description: 'Protege tus credenciales y separa las verificaciones de prueba de las reales.',
    category: 'Comenzar',
    sections: [
      {
        id: 'clave-api',
        title: 'Autentica cada solicitud',
        blocks: [
          { type: 'paragraph', text: 'Envía la clave en X-API-Key desde tu backend. Si falta, la API responde 401; si no es válida, responde 403.' },
          { type: 'code', title: 'Encabezado', language: 'http', code: 'X-API-Key: emv_sandbox_REEMPLAZA_ESTA_CLAVE' },
          {
            type: 'callout',
            tone: 'warning',
            title: 'Nunca en el navegador',
            text: 'No insertes una clave API en JavaScript público, aplicaciones móviles distribuidas, URLs, registros o herramientas de analítica.',
          },
        ],
      },
      {
        id: 'entornos',
        title: 'Sandbox y live',
        blocks: [
          {
            type: 'table',
            headers: ['Entorno', 'Uso', 'Datos'],
            rows: [
              ['sandbox', 'Desarrollo, pruebas y certificación del flujo.', 'No debe usarse para decisiones reales.'],
              ['live', 'Verificaciones reales de producción.', 'Sujeto al contrato, cuota y políticas activas.'],
            ],
          },
          { type: 'paragraph', text: 'Cada clave está ligada a un entorno. Para cambiar de ambiente utiliza la clave correspondiente; X-Environment pertenece al panel y no es parte del contrato de autenticación para integradores.' },
        ],
      },
      {
        id: 'rotacion',
        title: 'Rotación y alcance',
        blocks: [
          {
            type: 'list',
            items: [
              'Crea claves separadas por aplicación y ambiente.',
              'Asigna solamente los alcances necesarios, como sessions.read y sessions.write.',
              'Rota inmediatamente una clave expuesta y actualiza el secreto en un gestor seguro.',
              'Registra el identificador de la clave, nunca su valor completo.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'consentimiento',
    title: 'Consentimiento',
    description: 'Registra una aceptación verificable antes de enviar documentos o datos biométricos.',
    category: 'Integración',
    sections: [
      {
        id: 'captura-alojada',
        title: 'Con captura alojada',
        blocks: [
          { type: 'paragraph', text: 'El flujo de verify.emverax.com presenta el aviso vigente y registra la aceptación antes de habilitar la carga. No necesitas llamar el endpoint de consentimiento desde tu backend cuando utilizas esta experiencia.' },
        ],
      },
      {
        id: 'captura-propia',
        title: 'Con captura propia',
        blocks: [
          { type: 'endpoint', method: 'POST', path: '/v2/sessions/:id/consent', description: 'Registra la aceptación para una sesión activa. La respuesta correcta no contiene cuerpo.' },
          {
            type: 'code',
            title: 'Solicitud',
            language: 'bash',
            code: String.raw`curl --request POST \
  --url https://api.emverax.com/v2/sessions/SESSION_ID/consent \
  --header 'Content-Type: application/json' \
  --header 'X-API-Key: emv_sandbox_REEMPLAZA_ESTA_CLAVE' \
  --data '{
    "accepted": true,
    "text_version": "CAPTURA-CONSENT-ES-1.0"
  }'`,
          },
          {
            type: 'callout',
            tone: 'info',
            title: 'Respuesta 204',
            text: 'La operación es idempotente para el texto vigente. Una versión antigua responde 400 y una sesión que ya no admite captura responde 409.',
          },
        ],
      },
      {
        id: 'bloqueo',
        title: 'El consentimiento es obligatorio',
        blocks: [
          { type: 'paragraph', text: 'POST /media responde 403 si la sesión no tiene una aceptación válida. Guarda también en tu sistema la evidencia contractual que corresponda a tu relación con el usuario.' },
        ],
      },
    ],
  },
  {
    slug: 'webhooks',
    title: 'Webhooks',
    description: 'Recibe resultados firmados, verifica su autenticidad y responde de forma idempotente.',
    category: 'Integración',
    sections: [
      {
        id: 'entrega',
        title: 'Cómo se entrega un evento',
        blocks: [
          { type: 'paragraph', text: 'EMVERAX realiza una solicitud POST HTTPS con Content-Type application/json. Un código 2xx confirma la entrega; ante errores se realizan reintentos automáticos.' },
          {
            type: 'table',
            headers: ['Encabezado', 'Contenido'],
            rows: [
              ['X-EMVERAX-Event', 'Nombre del evento, por ejemplo verification.completed.'],
              ['X-EMVERAX-Signature', 'HMAC-SHA256 hexadecimal del cuerpo crudo.'],
              ['User-Agent', 'EMVERAX-Webhooks/1.0'],
            ],
          },
          { type: 'code', title: 'Evento verification.completed', language: 'json', code: webhookPayload },
        ],
      },
      {
        id: 'verificar-firma',
        title: 'Verifica la firma',
        blocks: [
          {
            type: 'code',
            title: 'Node.js',
            language: 'javascript',
            code: String.raw`import crypto from 'node:crypto';

export function verifyEmveraxWebhook(rawBody, signature, secret) {
  const expected = crypto
    .createHmac('sha256', secret)
    .update(rawBody)
    .digest('hex');

  const received = Buffer.from(signature, 'hex');
  const calculated = Buffer.from(expected, 'hex');

  return received.length === calculated.length &&
    crypto.timingSafeEqual(received, calculated);
}`,
          },
          {
            type: 'callout',
            tone: 'warning',
            title: 'Usa el cuerpo crudo',
            text: 'Calcula la firma antes de convertir el JSON a un objeto. Serializarlo nuevamente puede cambiar los bytes y producir una firma distinta.',
          },
        ],
      },
      {
        id: 'eventos',
        title: 'Eventos disponibles',
        blocks: [
          {
            type: 'table',
            headers: ['Evento', 'Cuándo ocurre'],
            rows: [
              ['verification.completed', 'La verificación automática finalizó.'],
              ['verification.reviewed', 'Un operador completó una revisión manual.'],
              ['verification.resubmission_requested', 'Se solicita una nueva captura al usuario.'],
            ],
          },
          { type: 'paragraph', text: 'Procesa cada evento de forma idempotente. Puedes almacenar la combinación event + session_id y consultar GET /v2/sessions/:id para reconciliar el estado.' },
        ],
      },
    ],
  },
  {
    slug: 'estados-y-decisiones',
    title: 'Estados y decisiones',
    description: 'Interpreta el ciclo de vida de una sesión y separa el resultado técnico de tu decisión de negocio.',
    category: 'Integración',
    sections: [
      {
        id: 'estados',
        title: 'Estados de sesión',
        blocks: [
          {
            type: 'table',
            headers: ['Estado', 'Significado'],
            rows: [
              ['created', 'La sesión existe y espera el inicio de captura.'],
              ['capturing', 'La sesión está recibiendo artefactos.'],
              ['processing', 'EMVERAX está procesando la información recibida.'],
              ['completed', 'Existe un resultado disponible.'],
              ['resubmission_requested', 'La captura debe repetirse según la instrucción recibida.'],
              ['failed', 'La sesión no pudo completarse.'],
            ],
          },
        ],
      },
      {
        id: 'decisiones',
        title: 'Decisiones',
        blocks: [
          {
            type: 'table',
            headers: ['Decisión', 'Tratamiento recomendado'],
            rows: [
              ['APPROVE', 'Continúa el flujo si también cumple tus políticas internas.'],
              ['REVIEW', 'Envía el caso a revisión o solicita evidencia adicional.'],
              ['REJECT', 'Detén el flujo o aplica el manejo definido por tu organización.'],
            ],
          },
          {
            type: 'callout',
            tone: 'info',
            title: 'Tu empresa conserva la decisión final',
            text: 'EMVERAX entrega señales de verificación. No reemplaza tus obligaciones de conocimiento del cliente, prevención de fraude, sanciones o cumplimiento regulatorio.',
          },
        ],
      },
    ],
  },
  {
    slug: 'api/sesiones',
    title: 'Sesiones',
    description: 'Crea una verificación y consulta su estado o resultado.',
    category: 'Referencia API',
    sections: [
      {
        id: 'crear',
        title: 'Crear una sesión',
        blocks: [
          { type: 'endpoint', method: 'POST', path: '/v2/sessions', description: 'Crea una sesión en el entorno asociado a la clave API.' },
          {
            type: 'table',
            headers: ['Campo', 'Tipo', 'Requerido', 'Descripción'],
            rows: [
              ['end_user_ref', 'string', 'No', 'Referencia interna no sensible del usuario.'],
              ['workflow_type', 'string', 'No', 'Por defecto document_selfie.'],
              ['return_url', 'string', 'No', 'URL http(s) a la que puede volver el navegador.'],
            ],
          },
          { type: 'code', title: 'Solicitud', language: 'bash', code: createSessionCurl },
          { type: 'code', title: 'Respuesta 201', language: 'json', code: createSessionResponse },
        ],
      },
      {
        id: 'consultar',
        title: 'Consultar una sesión',
        blocks: [
          { type: 'endpoint', method: 'GET', path: '/v2/sessions/:id', description: 'Devuelve el estado actual y, cuando existe, la decisión y los datos extraídos.' },
          {
            type: 'code',
            title: 'Solicitud',
            language: 'bash',
            code: String.raw`curl --request GET \
  --url https://api.emverax.com/v2/sessions/SESSION_ID \
  --header 'X-API-Key: emv_sandbox_REEMPLAZA_ESTA_CLAVE'`,
          },
          {
            type: 'code',
            title: 'Respuesta completada',
            language: 'json',
            code: String.raw`{
  "session_id": "SESSION_ID",
  "status": "completed",
  "workflow": "document_selfie",
  "environment": "sandbox",
  "external_ref": "cliente-8472",
  "decision": "APPROVE",
  "approved": true,
  "scores": {},
  "reasons": [],
  "extracted_data": {}
}`,
          },
        ],
      },
      {
        id: 'submit-retirado',
        title: 'Endpoint retirado',
        blocks: [
          {
            type: 'callout',
            tone: 'warning',
            title: 'POST /submit responde 410 Gone',
            text: 'No llames /v2/sessions/:id/submit. Cada envío se realiza con POST /v2/sessions/:id/media y el procesamiento comienza automáticamente.',
          },
        ],
      },
    ],
  },
  {
    slug: 'api/media',
    title: 'Documentos y selfie',
    description: 'Envía artefactos cuando tu empresa implementa una experiencia de captura propia.',
    category: 'Referencia API',
    sections: [
      {
        id: 'antes-de-enviar',
        title: 'Antes de enviar',
        blocks: [
          {
            type: 'list',
            items: [
              'Registra el consentimiento vigente para la sesión.',
              'Codifica la imagen JPEG o PNG en base64.',
              'Usa imágenes entre 20 KB y 8 MB.',
              'Envía cada contexto por separado.',
            ],
          },
        ],
      },
      {
        id: 'cargar',
        title: 'Cargar un artefacto',
        blocks: [
          { type: 'endpoint', method: 'POST', path: '/v2/sessions/:id/media', description: 'Almacena el artefacto y encola el procesamiento correspondiente.' },
          {
            type: 'table',
            headers: ['context', 'Uso'],
            rows: [
              ['document_front', 'Frente del documento; inicia OCR.'],
              ['document_back', 'Reverso del documento.'],
              ['selfie', 'Imagen facial; inicia comparación.'],
            ],
          },
          {
            type: 'code',
            title: 'Solicitud',
            language: 'bash',
            code: String.raw`curl --request POST \
  --url https://api.emverax.com/v2/sessions/SESSION_ID/media \
  --header 'Content-Type: application/json' \
  --header 'X-API-Key: emv_sandbox_REEMPLAZA_ESTA_CLAVE' \
  --data '{
    "context": "document_front",
    "document_type": "CL_ID",
    "image": "BASE64_DE_LA_IMAGEN"
  }'`,
          },
          {
            type: 'code',
            title: 'Respuesta 202',
            language: 'json',
            code: String.raw`{
  "session_id": "SESSION_ID",
  "status": "processing",
  "context": "document_front",
  "job_id": "JOB_ID",
  "received": ["document_front"]
}`,
          },
        ],
      },
      {
        id: 'documentos',
        title: 'Tipos de documento',
        blocks: [
          {
            type: 'table',
            headers: ['Código', 'Documento'],
            rows: [
              ['CL_ID', 'Documento de identidad de Chile.'],
              ['AR_DNI', 'Documento Nacional de Identidad de Argentina.'],
              ['HT_ID', 'Documento de identidad de Haití.'],
              ['PASSPORT', 'Pasaporte.'],
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'api/eventos',
    title: 'Eventos SSE',
    description: 'Observa cambios de una sesión sin hacer consultas agresivas.',
    category: 'Referencia API',
    sections: [
      {
        id: 'conectar',
        title: 'Abrir el stream',
        blocks: [
          { type: 'endpoint', method: 'GET', path: '/v2/sessions/:id/events', description: 'Mantiene una conexión text/event-stream durante un máximo aproximado de tres minutos.' },
          {
            type: 'code',
            title: 'cURL',
            language: 'bash',
            code: String.raw`curl --no-buffer \
  --url https://api.emverax.com/v2/sessions/SESSION_ID/events \
  --header 'Accept: text/event-stream' \
  --header 'X-API-Key: emv_sandbox_REEMPLAZA_ESTA_CLAVE'`,
          },
        ],
      },
      {
        id: 'tipos',
        title: 'Eventos del stream',
        blocks: [
          {
            type: 'table',
            headers: ['Evento', 'Descripción'],
            rows: [
              ['connected', 'La conexión se abrió y entrega el estado inicial.'],
              ['status', 'La sesión cambió o continúa procesándose.'],
              ['completed', 'Existe un resultado y el stream finaliza.'],
              ['failed', 'La sesión falló y el stream finaliza.'],
              ['timeout', 'El stream alcanzó su duración máxima; puedes reconectar.'],
            ],
          },
          {
            type: 'callout',
            tone: 'warning',
            title: 'No expongas la clave',
            text: 'EventSource del navegador no permite proteger X-API-Key de forma segura. Consume este endpoint desde tu backend o usa la experiencia de captura alojada.',
          },
        ],
      },
    ],
  },
  {
    slug: 'api/errores-y-limites',
    title: 'Errores y límites',
    description: 'Implementa reintentos seguros y respuestas claras ante fallos de autenticación, cuota o estado.',
    category: 'Referencia API',
    sections: [
      {
        id: 'formato',
        title: 'Formato de error',
        blocks: [
          { type: 'paragraph', text: 'Los errores de la API utilizan un objeto JSON con un mensaje legible. No programes lógica basada únicamente en el texto; utiliza el estado HTTP.' },
          { type: 'code', title: 'Ejemplo', language: 'json', code: '{\n  "message": "Clave API inválida"\n}' },
        ],
      },
      {
        id: 'codigos',
        title: 'Estados HTTP',
        blocks: [
          {
            type: 'table',
            headers: ['Código', 'Cuándo ocurre', 'Acción'],
            rows: [
              ['400', 'JSON, campo o imagen inválidos.', 'Corrige la solicitud; no reintentes sin cambios.'],
              ['401', 'Falta X-API-Key.', 'Configura la credencial en el backend.'],
              ['402', 'Cuota mensual o condición de plan.', 'Revisa el plan antes de reintentar.'],
              ['403', 'Clave inválida, consentimiento ausente o bloqueo.', 'Corrige autorización o flujo.'],
              ['404', 'La sesión no existe en esa organización y entorno.', 'Revisa el identificador y la clave.'],
              ['409', 'El estado de la sesión ya no permite la acción.', 'Consulta la sesión y decide el siguiente paso.'],
              ['410', 'Endpoint retirado o enlace expirado.', 'Usa el flujo vigente o crea una sesión nueva.'],
              ['429', 'Límite de solicitudes excedido.', 'Espera Retry-After y aplica backoff con jitter.'],
              ['500/503', 'Fallo transitorio o dependencia no disponible.', 'Reintenta de forma acotada e idempotente.'],
            ],
          },
        ],
      },
      {
        id: 'limites',
        title: 'Encabezados de límite',
        blocks: [
          {
            type: 'list',
            items: [
              'X-RateLimit-Limit indica el máximo aplicable por minuto.',
              'X-RateLimit-Remaining indica solicitudes disponibles en la ventana actual.',
              'Retry-After indica cuántos segundos esperar ante 429.',
              'Los límites dependen del plan; evita polling frecuente y prefiere webhooks o SSE.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'ejemplos',
    title: 'Ejemplos de código',
    description: 'Crea una sesión desde Node.js, Python o Go sin depender de un SDK propietario.',
    category: 'Recursos',
    sections: [
      {
        id: 'node',
        title: 'Node.js',
        blocks: [
          {
            type: 'code',
            title: 'Crear sesión',
            language: 'javascript',
            code: String.raw`const response = await fetch('https://api.emverax.com/v2/sessions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': process.env.EMVERAX_API_KEY,
  },
  body: JSON.stringify({
    end_user_ref: 'cliente-8472',
    workflow_type: 'document_selfie',
    return_url: 'https://tu-app.example.com/verificacion/completa',
  }),
});

if (!response.ok) {
  throw new Error('EMVERAX respondió ' + response.status);
}

const session = await response.json();
const captureUrl =
  'https://verify.emverax.com/?session=' +
  encodeURIComponent(session.session_id) +
  '&t=' +
  encodeURIComponent(session.share_token);`,
          },
        ],
      },
      {
        id: 'python',
        title: 'Python',
        blocks: [
          {
            type: 'code',
            title: 'Crear sesión',
            language: 'python',
            code: String.raw`import os
import requests

response = requests.post(
    "https://api.emverax.com/v2/sessions",
    headers={
        "Content-Type": "application/json",
        "X-API-Key": os.environ["EMVERAX_API_KEY"],
    },
    json={
        "end_user_ref": "cliente-8472",
        "workflow_type": "document_selfie",
        "return_url": "https://tu-app.example.com/verificacion/completa",
    },
    timeout=15,
)
response.raise_for_status()
session = response.json()`,
          },
        ],
      },
      {
        id: 'go',
        title: 'Go',
        blocks: [
          {
            type: 'code',
            title: 'Crear sesión',
            language: 'go',
            code: String.raw`payload := strings.NewReader(
  "{\"end_user_ref\":\"cliente-8472\",\"workflow_type\":\"document_selfie\"}",
)

req, err := http.NewRequest(
  http.MethodPost,
  "https://api.emverax.com/v2/sessions",
  payload,
)
if err != nil {
  return err
}

req.Header.Set("Content-Type", "application/json")
req.Header.Set("X-API-Key", os.Getenv("EMVERAX_API_KEY"))

client := &http.Client{Timeout: 15 * time.Second}
resp, err := client.Do(req)
if err != nil {
  return err
}
defer resp.Body.Close()`,
          },
          {
            type: 'callout',
            tone: 'info',
            title: 'Ejemplos sin SDK',
            text: 'Estos ejemplos usan las bibliotecas HTTP estándar. Así puedes integrar el contrato actual sin depender de la publicación o versión de un paquete adicional.',
          },
        ],
      },
    ],
  },
  {
    slug: 'seguridad-y-datos',
    title: 'Seguridad y datos',
    description: 'Aplica controles básicos de credenciales, firma, minimización y retención antes de operar.',
    category: 'Recursos',
    sections: [
      {
        id: 'controles',
        title: 'Controles obligatorios',
        blocks: [
          {
            type: 'list',
            items: [
              'Guarda claves API y secretos de webhook en un gestor de secretos.',
              'Usa TLS y endpoints HTTPS en producción.',
              'Valida HMAC-SHA256 antes de analizar o confiar en un webhook.',
              'Evita datos personales directos en end_user_ref.',
              'Restringe registros, trazas y herramientas de observabilidad para que no almacenen imágenes ni credenciales.',
              'Aplica acceso mínimo y rotación periódica.',
            ],
          },
        ],
      },
      {
        id: 'retencion',
        title: 'Retención operativa',
        blocks: [
          { type: 'paragraph', text: 'La política operativa actual contempla hasta 30 días para representaciones biométricas derivadas y hasta 90 días para imágenes de captura y datos OCR, salvo una obligación contractual o legal aplicable. Confirma las condiciones de tu organización antes de activar live.' },
          {
            type: 'callout',
            tone: 'info',
            title: 'Sin entrenamiento con datos del cliente',
            text: 'Los datos enviados para una verificación se procesan para prestar el servicio contratado; no deben reutilizarse como material público ni incorporarse a ejemplos.',
          },
        ],
      },
      {
        id: 'alcance',
        title: 'Alcance del servicio',
        blocks: [
          { type: 'paragraph', text: 'EMVERAX verifica documentos y realiza comparación facial 1:1 dentro del flujo configurado. No consulta bases gubernamentales y no sustituye un programa completo de KYC/AML, listas de sanciones, PEP o monitoreo transaccional.' },
        ],
      },
    ],
  },
  {
    slug: 'ir-a-produccion',
    title: 'Ir a producción',
    description: 'Valida el flujo completo, los controles de seguridad y la operación antes de usar una clave live.',
    category: 'Recursos',
    sections: [
      {
        id: 'checklist',
        title: 'Checklist técnico',
        blocks: [
          {
            type: 'list',
            items: [
              'La clave API vive solamente en el backend y puede rotarse sin desplegar el frontend.',
              'El webhook usa HTTPS, conserva el cuerpo crudo y verifica X-EMVERAX-Signature.',
              'Las entregas duplicadas son idempotentes.',
              'Tu aplicación maneja APPROVE, REVIEW, REJECT, failed y resubmission_requested.',
              'Los errores 402, 409, 429 y 5xx tienen una respuesta operativa definida.',
              'return_url se usa solo para UX; el backend confía en el webhook o en GET de sesión.',
              'Registros y alertas omiten secretos, tokens, imágenes y datos biométricos.',
              'El recorrido se probó de extremo a extremo con una clave sandbox.',
            ],
          },
        ],
      },
      {
        id: 'activacion',
        title: 'Activación de live',
        blocks: [
          {
            type: 'steps',
            items: [
              { title: 'Confirma el contrato', description: 'Revisa cuota, retención, documentos y responsabilidades aplicables.' },
              { title: 'Configura credenciales live', description: 'Crea claves y secreto de webhook independientes de sandbox.' },
              { title: 'Ejecuta una prueba controlada', description: 'Completa una verificación real autorizada y revisa la trazabilidad.' },
              { title: 'Activa monitoreo', description: 'Alerta sobre fallos de entrega, 429, 5xx y sesiones sin resultado esperado.' },
            ],
          },
          {
            type: 'links',
            items: [
              { title: 'Contactar soporte', description: 'Coordina la habilitación o resuelve dudas de integración.', href: '/contacto' },
              { title: 'Seguridad y datos', description: 'Revisa las responsabilidades antes de live.', href: '/docs/seguridad-y-datos' },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'changelog',
    title: 'Changelog',
    description: 'Cambios relevantes del contrato público de integración.',
    category: 'Recursos',
    sections: [
      {
        id: 'api-v2',
        title: 'API v2 — contrato actual',
        blocks: [
          {
            type: 'list',
            items: [
              'Consentimiento verificable obligatorio antes de cargar medios en capturas propias.',
              'La creación de sesión devuelve consent y un share_token para la captura alojada.',
              'Carga separada de document_front, document_back y selfie mediante POST /media.',
              'Webhooks de finalización, revisión y solicitud de nueva captura con encabezados X-EMVERAX-*.',
              'Eventos SSE para seguimiento sin polling agresivo.',
              'El ambiente de integración se determina por la clave API.',
            ],
          },
        ],
      },
      {
        id: 'retirado',
        title: 'Retirado',
        blocks: [
          {
            type: 'callout',
            tone: 'warning',
            title: 'POST /v2/sessions/:id/submit',
            text: 'Este endpoint responde 410 Gone. Las cargas por POST /media inician automáticamente el procesamiento necesario.',
          },
        ],
      },
    ],
  },
];

export const docsBySlug = new Map(docsPages.map((page) => [page.slug, page]));

export const docsSlugs = docsPages.map((page) => page.slug);

export const docsSearchIndex = docsPages.map((page) => ({
  slug: page.slug,
  href: page.slug ? '/docs/' + page.slug : '/docs',
  title: page.title,
  description: page.description,
  category: page.category,
  headings: page.sections.map((section) => section.title),
}));

export const flatDocsNavigation = docsNavigation.flatMap((group) => group.items);
