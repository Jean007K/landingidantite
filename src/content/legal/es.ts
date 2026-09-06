import type { LegalDoc } from '@/components/LegalPage';

const CONTACT = {
  privacy: 'privacy@emverax.com',
  info: 'info@emverax.com',
  support: 'support@emverax.com',
  phone: '+56 9 64223283',
};

const relatedCore = [
  { href: '/privacy', label: 'Política de privacidad (sitio y cuentas)' },
  { href: '/end-user-privacy', label: 'Aviso para usuarios finales' },
  { href: '/terms', label: 'Términos de uso' },
  { href: '/cookies', label: 'Política de cookies' },
  { href: '/privacy-requests', label: 'Solicitudes y eliminación de datos' },
];

export const privacyDoc: LegalDoc = {
  title: 'Política de privacidad — sitio y cuentas',
  version: '0.4',
  updated: '6 de septiembre de 2026',
  intro: [
    `Esta política cubre el sitio corporativo https://emverax.com, las cuentas del panel (dash.emverax.com) y de la consola de administración (admin.emverax.com), la facturación B2B y los registros de seguridad de esos sistemas.`,
    `No cubre las fotografías, el OCR, las plantillas faciales ni la decisión de una verificación. Ese tratamiento lo regula el Aviso para usuarios finales: allí el Cliente es Responsable y EMVERAX es Encargado.`,
    `El operador es emverax LLC, EIN 99-856987. La marca comercial es EMVERAX. El canal de privacidad es ${CONTACT.privacy}. También puede escribir a ${CONTACT.info} o llamar al ${CONTACT.phone}. El domicilio social aún no se publica.`,
  ],
  blocks: [
    {
      title: '1. Quién es el Responsable de esta política',
      paragraphs: [
        'El Responsable de esta política es emverax LLC, EIN 99-856987. Respecto de visitantes del sitio y de las personas con cuenta en el panel, actúa como Responsable independiente: decide por qué trata esos datos (cuenta, facturación, seguridad del propio sistema).',
        'EMVERAX no es un banco, no presta un KYC bancario completo y no está fiscalizado por la CMF por el solo hecho de ofrecer verificación de identidad.',
      ],
    },
    {
      title: '2. Qué datos tratamos',
      bullets: [
        'Cuenta de panel: nombre, correo corporativo, organización, rol, hash de contraseña, MFA si lo activa (el MFA no es obligatorio hoy para administradores).',
        'Sitio: formularios de contacto o registro, IP, fecha, recurso y user-agent en logs de servidor.',
        'Facturación B2B: razón social, RUT, domicilio comercial y contactos de cobro del Cliente. No tratamos tarjetas de usuarios finales.',
        'Logs de seguridad: inicios de sesión, fallos, cambios de configuración y denegaciones por rate limit. No son fotos ni embeddings.',
      ],
    },
    {
      title: '3. Finalidades',
      paragraphs: [
        'Creamos y administramos su cuenta, autenticamos el acceso, facturamos, damos soporte y defendemos reclamos. No usamos los datos de su cuenta para entrenar modelos de reconocimiento facial ni para verificar a otras personas.',
        'Hasta el 30 de noviembre de 2026 rige la Ley N° 19.628. Desde el 1 de diciembre de 2026 rige la Ley N° 21.719, salvo postergación legal.',
      ],
    },
    {
      title: '4. Destinatarios y transferencias',
      paragraphs: [
        'Comunicamos estos datos a personal con necesidad de conocer, a proveedores de hosting y operación (Oracle Cloud, Dokploy, Cloudflare para el sitio y el DNS) y a autoridades cuando una norma chilena lo exija.',
        'No vendemos datos personales. No cruzamos rostros ni cuentas entre organizaciones.',
        'La región física del cómputo y de los backups aún no se declara como “residencia en Chile”. Si hay transferencia internacional, se informará con precisión cuando esté confirmada.',
      ],
    },
    {
      title: '5. Conservación (objetivo de política)',
      paragraphs: [
        'Los plazos siguientes son objetivo. Hoy no hay un job de borrado automático en producción; implementarlo es un control pendiente.',
      ],
      table: {
        headers: ['Categoría', 'Plazo objetivo'],
        rows: [
          ['Cuenta de panel', 'Mientras esté activa + 12 meses tras baja o inactividad'],
          ['Logs de autenticación', '12 meses'],
          ['Soporte de la cuenta', '24 meses desde el cierre del ticket'],
          ['Facturación', '6 años (sujeto a plazo tributario aplicable)'],
        ],
      },
    },
    {
      title: '6. Derechos',
      paragraphs: [
        `Puede pedir información, rectificación, eliminación, bloqueo u oposición sobre los datos de su cuenta de panel. Canal: ${CONTACT.privacy}. Asunto: “Derechos — cuenta de panel”.`,
        'Hoy (Ley N° 19.628): el Responsable debe pronunciarse; si no lo hace en dos días hábiles cabe el amparo de datos ante el juez de letras en lo civil.',
        'Desde el 1 de diciembre de 2026 (Ley N° 21.719): acuse de recibo y pronunciamiento en treinta días corridos, prorrogable una vez. El ejercicio es gratuito.',
        'Si su solicitud se refiere a una verificación (fotos, OCR, embedding), diríjala primero al Cliente. Esta política no incluye renuncia a acciones colectivas ni arbitraje sobre derechos irrenunciables.',
      ],
    },
    {
      title: '7. Seguridad y certificaciones',
      paragraphs: [
        'Aplicamos TLS en tránsito, cookies HttpOnly y CSRF en el panel, hashing de contraseñas, cifrado AES-GCM de secretos MFA y de webhook cuando están migrados, aislamiento por organización (incluida seguridad a nivel de fila), límites de velocidad y tokens de captura almacenados como hash.',
        'No afirmamos cifrado en reposo de todos los almacenes. El MFA no está forzado para administradores.',
        'Hay un programa formal de certificaciones en curso (ISO/IEC 27001, SOC 2, evaluación PAD alineada a ISO/IEC 30107-3 y pentest de terceros). No declaramos ningún sello como obtenido. Se publicará solo cuando exista certificado, informe o carta verificable.',
      ],
    },
  ],
  related: [
    { href: '/cookies', label: 'Política de cookies' },
    { href: '/end-user-privacy', label: 'Aviso para usuarios finales' },
    { href: '/privacy-requests', label: 'Solicitudes y eliminación' },
    { href: '/terms', label: 'Términos de uso' },
  ],
};

export const endUserDoc: LegalDoc = {
  title: 'Aviso de privacidad para usuarios finales',
  version: '0.4',
  updated: '6 de septiembre de 2026',
  intro: [
    'Usted no está siendo verificado “por EMVERAX como banco”. Quien decide verificarle y para qué es el Cliente: la organización cuyo nombre aparece en la captura (verify.emverax.com). Ese Cliente es el Responsable.',
    'EMVERAX opera la plataforma técnica (captura, OCR, comparación facial 1:1, prueba de vida cuando está activa, almacenamiento y panel). Respecto de esta verificación, EMVERAX es Encargado: trata por cuenta e instrucción del Cliente.',
    `Si el encabezado no muestra un nombre de organización reconocible, no continúe y contacte a quien le envió el enlace. Canal del Encargado (reenvío, no el canal principal): ${CONTACT.privacy}.`,
  ],
  blocks: [
    {
      title: '1. Qué se recoge',
      table: {
        headers: ['Dato', 'Para qué'],
        rows: [
          ['Frente del documento', 'Leer el documento y extraer la foto impresa'],
          ['Reverso', 'Completar campos del documento'],
          ['Selfie', 'Comparar 1:1 con la foto del documento y, si está activa, la prueba de vida'],
          ['Texto OCR (nombre, documento, fechas, etc.)', 'Mostrar al Cliente el resultado de la sesión'],
          ['Plantilla facial (embedding)', 'Confirmar que la selfie y el documento son de la misma persona'],
        ],
      },
    },
    {
      title: '2. Qué no hacemos',
      bullets: [
        'No entrenamos modelos con sus fotos ni con sus plantillas.',
        'No cruzamos su rostro con los de otros clientes (no hay “Known Faces” entre empresas).',
        'No consultamos Registro Civil, RENAPER ni otras bases estatales.',
        'No es un KYC/AML completo (no hay PEP, sanciones ni UBO).',
        'No hay carta iBeta ni PAD certificado. La evaluación de laboratorio está en proceso.',
      ],
    },
    {
      title: '3. Conservación objetivo',
      paragraphs: [
        'Embeddings: 30 días desde la decisión final. Fotos y OCR: 90 días (hasta 365 solo si el Cliente lo instruye por escrito). Metadatos de sesión: 12 meses. El borrado automático aún no está implementado; esos plazos son política, no un control ya comprobado.',
      ],
    },
    {
      title: '4. Sus derechos',
      paragraphs: [
        'Pídalos primero al Cliente (Responsable). Si no sabe quién es, escríbanos y reenviaremos. No podemos abrirle o cerrarle una cuenta en el negocio del Cliente ni “aprobar” una verificación rechazada.',
      ],
    },
  ],
  related: relatedCore,
};

export const termsDoc: LegalDoc = {
  title: 'Términos de uso',
  version: '0.4',
  updated: '6 de septiembre de 2026',
  intro: [
    'Estos términos rigen el uso del sitio y la creación de una cuenta de empresa con emverax LLC (EIN 99-856987), que opera la marca EMVERAX. Si existe una Orden de Servicio y un MSA firmados, esos documentos y el DPA prevalecen. Orden > DPA (datos personales) > MSA > estos términos > Política de uso aceptable.',
    'Al crear una cuenta usted declara ser mayor de 18 años y actuar en nombre de una persona jurídica, no como consumidor de la Ley N° 19.496 para fines personales.',
  ],
  blocks: [
    {
      title: '1. El Servicio',
      paragraphs: [
        'EMVERAX ofrece software B2B de verificación documental y facial 1:1, prueba de vida (liveness) como capacidad, decisión approve / review / reject, API y captura alojada.',
        'No incluye KYC/AML completo, firma electrónica avanzada, PAD o iBeta certificados, control de asistencia, consultas a bases estatales ni identificación 1:N.',
        'Los umbrales de face match están fijos en el producto. El Cliente responde por la revisión humana de review y por las consecuencias de negocio de la decisión.',
      ],
    },
    {
      title: '2. Cuentas y uso aceptable',
      paragraphs: [
        'Usted custodia contraseñas, MFA (recomendado; el producto no lo obliga a administradores) y API keys. Aplica la Política de uso aceptable: no menores; no Illinois/BIPA ni Quebec sin dictamen; no vigilancia 1:N; no empleo/asistencia; no crédito automatizado; no representar sellos no obtenidos.',
      ],
    },
    {
      title: '3. Datos y no-entrenamiento',
      paragraphs: [
        'Respecto de usuarios finales, el Cliente es Responsable y EMVERAX Encargado. Usted garantiza base jurídica, avisos y que los titulares tienen 18 años o más.',
        'EMVERAX no entrena modelos con datos del Cliente y no cruza rostros entre clientes. Los derechos de los titulares se piden primero al Cliente.',
      ],
    },
    {
      title: '4. Responsabilidad',
      paragraphs: [
        'El Servicio se ofrece con diligencia razonable. No se promete un 99,9 % de disponibilidad ni latencias publicitarias.',
        'En la máxima medida permitida se excluyen daños indirectos y lucro cesante. La responsabilidad de EMVERAX se limita a lo pagado en los 12 meses anteriores (o 3 meses en el periodo inicial). No se excluyen dolo ni culpa grave. No hay tope cero por una filtración biométrica imputable a EMVERAX.',
        'Estos términos no hacen renunciar a derechos irrenunciables de titulares (Ley N° 19.628). No hay renuncia a acciones colectivas de consumidores: no es un servicio B2C.',
      ],
    },
    {
      title: '5. Ley aplicable',
      paragraphs: [
        'Ley de la República de Chile. Tribunales ordinarios del domicilio de la Empresa, cuando esté publicado. Hasta entonces, el canal de notificaciones es el correo de privacidad.',
      ],
    },
  ],
  related: [
    { href: '/acceptable-use', label: 'Política de uso aceptable' },
    { href: '/privacy', label: 'Política de privacidad' },
    { href: '/end-user-privacy', label: 'Aviso para usuarios finales' },
  ],
};

export const cookiesDoc: LegalDoc = {
  title: 'Política de cookies',
  version: '0.4',
  updated: '6 de septiembre de 2026',
  intro: [
    'Esta política describe cookies y tecnologías similares en emverax.com, dash.emverax.com, admin.emverax.com y verify.emverax.com.',
  ],
  blocks: [
    {
      title: '1. Captura alojada',
      paragraphs: [
        'La sesión de verificación se autentica con el parámetro de consulta t. Ese token no es una cookie. En la captura no hemos detectado Google Analytics, Mixpanel, PostHog, Sentry, Hotjar ni píxeles publicitarios.',
      ],
    },
    {
      title: '2. Panel y admin',
      paragraphs: [
        'Usamos cookies estrictamente necesarias de sesión (HttpOnly) y de protección CSRF. Los nombres exactos, Max-Age y SameSite se publicarán en esta tabla cuando Ingeniería los confirme; no se inventan aquí.',
        'El sitio corporativo usa una cookie de idioma para recordar es / en / pt / fr. Es una preferencia, no publicidad.',
      ],
    },
    {
      title: '3. Analítica',
      paragraphs: [
        'El sitio corporativo puede usar Umami (primera parte / autoalojado) para conteos de visitas, sin SDK publicitario de terceros. Si se añaden cookies no esenciales, se pedirá consentimiento antes de activarlas.',
      ],
    },
  ],
  related: relatedCore,
};

export const aupDoc: LegalDoc = {
  title: 'Política de uso aceptable',
  version: '0.4',
  updated: '6 de septiembre de 2026',
  intro: [
    'El Cliente y sus usuarios de panel deben cumplir esta política. Una orden comercial no autoriza lo prohibido aquí sin addendum legal.',
  ],
  blocks: [
    {
      title: 'Uso permitido',
      paragraphs: [
        'Solo verificación de identidad 1:1 de personas naturales de 18 años o más, en una relación lícita del Cliente con el titular, con base jurídica y con revisión humana de review.',
      ],
    },
    {
      title: 'Prohibido',
      bullets: [
        'Verificar menores de 18 años.',
        'Tratar biometría de titulares de Illinois (BIPA) o de Quebec sin dictamen y addendum.',
        'Identificación 1:N, watchlists de rostros o CCTV con búsqueda facial.',
        'Control de asistencia, fichaje o selección automatizada de personal. Attendance no está lanzado.',
        'Usar approve/reject como decisión crediticia automatizada sin intervención humana del Cliente.',
        'Decir que EMVERAX está certificado en iBeta, ISO 27001, SOC 2 o PAD. El programa está en curso; el sello no está emitido.',
        'Afirmar consulta al Registro Civil u otras bases estatales.',
      ],
    },
  ],
  related: [
    { href: '/terms', label: 'Términos de uso' },
    { href: '/minors', label: 'Aviso para menores' },
  ],
};

export const requestsDoc: LegalDoc = {
  title: 'Solicitudes y eliminación de datos',
  version: '0.4',
  updated: '6 de septiembre de 2026',
  intro: [
    'EMVERAX no ofrece todavía un portal de autoservicio en el que usted, con usuario y contraseña, descargue o borre una verificación. Ese portal está previsto. Mientras tanto use los canales de abajo.',
  ],
  blocks: [
    {
      title: 'Si usted se fotografió (usuario final)',
      paragraphs: [
        'Diríjase primero al Cliente cuyo nombre vio en la captura. Ese es el Responsable.',
        `Si no sabe quién es, escriba a ${CONTACT.privacy} con fecha aproximada, país y datos del enlace (sin reenviar fotos). Reenviaremos. No podemos abrir o cerrar su cuenta en el negocio del Cliente.`,
      ],
    },
    {
      title: 'Si usted tiene cuenta de panel',
      paragraphs: [
        `Para su usuario (correo, roles, logs de login), EMVERAX es Responsable. Escriba a ${CONTACT.privacy} o pida al administrador de su organización que le dé de baja.`,
      ],
    },
    {
      title: 'Cómo escribirnos',
      paragraphs: [
        `Correo: ${CONTACT.privacy}. Asunto: “Solicitud de derechos — usuario final o cuenta panel”. Incluya nombre, medio de contacto y, si puede, session_id o correo del Cliente. No envíe fotos de carnet por este canal si puede evitarlo.`,
      ],
    },
  ],
  related: relatedCore,
};

export const biometricDoc: LegalDoc = {
  title: 'Aviso de datos sensibles y biométricos',
  version: '0.4',
  updated: '6 de septiembre de 2026',
  intro: [
    'Este aviso existe porque el producto genera plantillas faciales (embeddings), no por marketing. Anticipa el artículo 16 ter de la Ley N° 21.719, programado para el 1 de diciembre de 2026.',
  ],
  blocks: [
    {
      title: 'Foto frente a plantilla',
      table: {
        headers: ['Elemento', '¿Dato biométrico aquí?'],
        rows: [
          ['JPEG de selfie o documento', 'No automáticamente. Es dato personal (su imagen).'],
          ['Embedding / plantilla', 'Sí. Se obtiene con un tratamiento técnico específico para confirmar identidad 1:1.'],
          ['Score de similitud', 'Dato asociado al tratamiento biométrico; no es una segunda plantilla.'],
        ],
      },
    },
    {
      title: 'Sistema y finalidad',
      paragraphs: [
        'El modelo de embeddings corre en infraestructura de EMVERAX (InsightFace). La finalidad es confirmar que la persona de la selfie es la de la foto del documento en esa sesión. No hay identificación 1:N ni entrenamiento con estos vectores.',
        'Retención objetivo de embeddings: 30 días desde la decisión final. Es más corta que la práctica pública de varios competidores (hasta 1 o 3 años). El job de borrado automático aún no está implementado.',
        'El Responsable es el Cliente. EMVERAX es Encargado técnico.',
      ],
    },
  ],
  related: [
    { href: '/end-user-privacy', label: 'Aviso para usuarios finales' },
    { href: '/minors', label: 'Aviso para menores' },
  ],
};

export const minorsDoc: LegalDoc = {
  title: 'Aviso para menores de edad',
  version: '0.4',
  updated: '6 de septiembre de 2026',
  intro: [
    'EMVERAX no dirige este Servicio a personas menores de 18 años. No hay un modo parental ni un consentimiento de padres en la captura porque no ofrecemos verificación de menores.',
  ],
  blocks: [
    {
      title: 'Qué debe hacer el Cliente',
      paragraphs: [
        'El Cliente garantiza que solo envía a captura a personas de 18 años o más. Hoy el software no implementa un age gate: esa garantía es contractual. Ocultar el hueco sería inexacto; declarar un control que no existe sería falso.',
      ],
    },
    {
      title: 'Si usted es menor o tutor',
      paragraphs: [
        `No complete una verificación. Avise a quien le envió el enlace y, si hace falta, a ${CONTACT.privacy}. Pediremos al Cliente que detenga el flujo y borre lo que aún exista.`,
      ],
    },
  ],
  related: [
    { href: '/acceptable-use', label: 'Política de uso aceptable' },
    { href: '/end-user-privacy', label: 'Aviso para usuarios finales' },
  ],
};

export const subprocessorsDoc: LegalDoc = {
  title: 'Lista de subencargados',
  version: '0.4',
  updated: '6 de septiembre de 2026',
  intro: [
    'Un tercero es Subencargado solo si trata datos del Cliente por cuenta de EMVERAX. Las librerías que corren en nuestros servidores (InsightFace, RapidOCR, EasyOCR, PostgreSQL) no lo son.',
    'Avisaremos por escrito un alta o cambio material con al menos 30 días de antelación, salvo emergencia de seguridad. El Cliente puede objetar por motivos razonables de protección de datos en ese plazo.',
  ],
  blocks: [
    {
      title: 'Subencargados activos',
      table: {
        headers: ['Proveedor', 'Función', 'Datos', 'Estado'],
        rows: [
          ['Cloudflare, Inc. (R2)', 'Almacenamiento de fotos de sesión', 'Imágenes de documento y selfie', 'Activo. Región del bucket por confirmar'],
          ['Cloudflare, Inc. (DNS / edge)', 'DNS y, si el proxy está activo, tránsito HTTPS', 'IP, URL, certificados', 'Activo'],
          ['Oracle Cloud', 'VPS, disco y red del host', 'Stack (API, base, worker)', 'Activo. Región OCI por confirmar'],
          ['Dokploy', 'Orquestación y deploy sobre el VPS', 'Config, logs de plataforma, posible acceso de ops', 'Activo como herramienta. Calificación jurídica exacta sujeta a revisión'],
        ],
      },
    },
    {
      title: 'No son subencargados',
      paragraphs: [
        'InsightFace, RapidOCR, EasyOCR, ONNX Runtime, OpenCV, PostgreSQL y Redis corren en el host de EMVERAX. No se envían imágenes a una API de esos autores. Si en el futuro se usara una API cloud de liveness u OCR, se listará aquí con 30 días de aviso.',
      ],
    },
  ],
  related: [
    { href: '/privacy', label: 'Política de privacidad' },
    { href: '/end-user-privacy', label: 'Aviso para usuarios finales' },
  ],
};
