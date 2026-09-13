import type { LegalDoc } from '@/components/LegalPage';

const CONTACT = {
  privacy: 'privacy@emverax.com',
  info: 'info@emverax.com',
  phone: '+56 9 64223283',
};

const relatedCore = [
  { href: '/privacy', label: 'Política de privacidad' },
  { href: '/end-user-privacy', label: 'Aviso para usuarios finales' },
  { href: '/terms', label: 'Términos de uso' },
  { href: '/cookies', label: 'Política de cookies' },
  { href: '/privacy-requests', label: 'Solicitudes y eliminación de datos' },
];

export const privacyDoc: LegalDoc = {
  title: 'Política de privacidad',
  version: '1.0',
  updated: '13 de septiembre de 2026',
  intro: [
    'EMVERAX es una plataforma de verificación de identidad. Operamos el sitio emverax.com y el panel que usan las empresas que contratan el servicio.',
    'Esta política explica cómo tratamos los datos de quienes visitan el sitio y de quienes tienen una cuenta en el panel. El tratamiento de las personas que se verifican se describe en el aviso para usuarios finales.',
    `El responsable es emverax LLC (EIN 99-856987), que opera la marca EMVERAX. Privacidad: ${CONTACT.privacy}. Información: ${CONTACT.info}. Teléfono: ${CONTACT.phone}.`,
  ],
  blocks: [
    {
      title: 'Qué datos tratamos',
      bullets: [
        'Cuentas del panel: nombre, correo, organización, rol y credenciales de acceso.',
        'Sitio: datos que usted envíe en un formulario, e información técnica de conexión (dirección IP, fecha, página visitada y navegador) para seguridad y funcionamiento.',
        'Facturación: razón social, identificador tributario, domicilio comercial y contactos de cobro de la empresa cliente. No guardamos tarjetas de las personas que se verifican.',
        'Registros de seguridad: inicios de sesión, intentos fallidos y cambios relevantes de configuración. No son fotografías ni plantillas faciales.',
      ],
    },
    {
      title: 'Para qué los usamos',
      paragraphs: [
        'Usamos estos datos para operar el sitio, crear y administrar cuentas, autenticar el acceso, facturar, prestar soporte y proteger nuestros sistemas.',
        'No vendemos datos personales. No usamos los datos de su cuenta para entrenar modelos de reconocimiento facial.',
      ],
    },
    {
      title: 'Con quién los compartimos',
      paragraphs: [
        'Solo con el personal que necesita conocerlos, con proveedores que nos ayudan a operar la infraestructura (alojamiento, red y correo) y con autoridades cuando la ley lo exija.',
      ],
    },
    {
      title: 'Conservación',
      table: {
        headers: ['Datos', 'Plazo'],
        rows: [
          ['Cuenta del panel', 'Mientras la cuenta esté activa y 12 meses después de su baja'],
          ['Registros de acceso', '12 meses'],
          ['Soporte', '24 meses desde el cierre del caso'],
          ['Facturación', '6 años'],
        ],
      },
    },
    {
      title: 'Sus derechos',
      paragraphs: [
        `Puede pedir acceso, corrección o eliminación de los datos de su cuenta escribiendo a ${CONTACT.privacy}.`,
        'Si su solicitud se refiere a una verificación de identidad, escríbanos al mismo correo o contacte a la empresa que le pidió verificarse. Esa empresa es responsable de esa verificación.',
      ],
    },
    {
      title: 'Seguridad',
      paragraphs: [
        'Protegemos la información con cifrado en tránsito, controles de acceso y medidas organizativas acordes al tipo de dato que tratamos.',
      ],
    },
    {
      title: 'Menores',
      paragraphs: [
        'El sitio y el panel están pensados para personas mayores de 18 años.',
      ],
    },
    {
      title: 'Cambios',
      paragraphs: [
        'Publicaremos la versión vigente en esta página, con su fecha.',
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
  version: '1.0',
  updated: '13 de septiembre de 2026',
  intro: [
    'EMVERAX es una plataforma de verificación de identidad. Las empresas nos contratan para comprobar que una persona es quien dice ser, mediante su documento, una selfie y una comparación facial.',
    'La empresa que le pide verificarse —la que aparece en la pantalla de captura— es responsable de esa verificación y de las decisiones que tome con el resultado. EMVERAX opera la tecnología por cuenta de esa empresa.',
    'Si no reconoce a la organización que aparece en pantalla, no continúe y contacte a quien le envió el enlace.',
  ],
  blocks: [
    {
      title: 'Qué datos se recogen',
      bullets: [
        'Fotografías del frente y del reverso de su documento.',
        'El texto leído del documento (nombre, número, fechas y campos similares).',
        'Una selfie.',
        'Una plantilla facial, derivada de su rostro, para comparar la selfie con la foto del documento.',
        'El resultado de esa comparación, para entregárselo a la empresa que le pidió verificarse.',
        'Cuando corresponde, una comprobación de que la selfie la toma una persona presente ante la cámara.',
      ],
    },
    {
      title: 'Qué no hacemos con esos datos',
      bullets: [
        'No los vendemos.',
        'No los usamos para entrenar modelos.',
        'No comparamos su rostro con el de personas de otras empresas.',
      ],
    },
    {
      title: 'Conservación',
      table: {
        headers: ['Dato', 'Plazo'],
        rows: [
          ['Fotografías y texto del documento', '90 días'],
          ['Plantilla facial', '30 días'],
          ['Datos de la sesión (sin fotos ni plantilla)', '12 meses'],
        ],
      },
    },
    {
      paragraphs: [
        'La empresa que nos contrató puede pedirnos conservar las fotografías por más tiempo, dentro de lo lícito.',
      ],
    },
    {
      title: 'Sus derechos',
      paragraphs: [
        `Para acceder, corregir o eliminar estos datos, escriba a ${CONTACT.privacy} o al canal de privacidad de la empresa que le pidió verificarse.`,
        'Si no proporciona las fotos, la verificación no puede completarse y esa empresa podrá no continuar con su trámite.',
      ],
    },
    {
      title: 'Menores',
      paragraphs: [
        'Este proceso es solo para personas de 18 años o más.',
      ],
    },
    {
      title: 'Contacto',
      paragraphs: [
        `Responsable de la verificación: la empresa identificada en la pantalla de captura. EMVERAX: ${CONTACT.privacy} · ${CONTACT.phone}.`,
      ],
    },
  ],
  related: relatedCore,
};

export const termsDoc: LegalDoc = {
  title: 'Términos de uso',
  version: '1.0',
  updated: '13 de septiembre de 2026',
  intro: [
    'Estos términos rigen el uso del sitio emverax.com y de las cuentas de empresa con emverax LLC (EIN 99-856987), que opera la marca EMVERAX.',
    'Si existe un contrato firmado con nosotros, ese contrato prevalece sobre estos términos.',
    'Al crear una cuenta usted declara ser mayor de 18 años y actuar en nombre de una empresa.',
  ],
  blocks: [
    {
      title: 'El servicio',
      paragraphs: [
        'EMVERAX es una plataforma de verificación de identidad. Las empresas nos contratan para comprobar que una persona es quien dice ser, mediante documento, selfie y comparación facial.',
        'La empresa cliente es responsable de por qué verifica a una persona y de las decisiones que tome con el resultado. EMVERAX opera la tecnología por su cuenta.',
      ],
    },
    {
      title: 'Cuentas',
      paragraphs: [
        'Usted es responsable de custodiar las credenciales de su cuenta y de usar el servicio conforme a la Política de uso aceptable.',
      ],
    },
    {
      title: 'Datos',
      paragraphs: [
        'Respecto de las personas que se verifican, la empresa cliente es responsable y EMVERAX trata los datos por su cuenta. Esa empresa debe contar con una base jurídica y con avisos adecuados.',
        'No usamos los datos del cliente para entrenar modelos. No comparamos rostros entre empresas distintas.',
      ],
    },
    {
      title: 'Responsabilidad',
      paragraphs: [
        'Prestamos el servicio con diligencia razonable. En la máxima medida permitida se excluyen daños indirectos. La responsabilidad de EMVERAX se limita a lo pagado en los 12 meses anteriores, sin perjuicio de dolo o culpa grave.',
      ],
    },
    {
      title: 'Ley aplicable',
      paragraphs: [
        'Estos términos se rigen por la ley de la República de Chile. Las notificaciones se envían a privacy@emverax.com.',
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
  version: '1.0',
  updated: '13 de septiembre de 2026',
  intro: [
    'Esta política describe el uso de cookies en emverax.com y en el panel de clientes.',
  ],
  blocks: [
    {
      title: 'Qué es una cookie',
      paragraphs: [
        'Una cookie es un archivo pequeño que el sitio guarda en su navegador para que la página funcione o recuerde una preferencia.',
      ],
    },
    {
      title: 'Qué cookies usamos',
      bullets: [
        'Sitio: una cookie de idioma para recordar su preferencia. No es publicidad.',
        'Panel de clientes: cookies necesarias para mantener la sesión iniciada y proteger el acceso. Sin ellas el panel no puede funcionar.',
        'Verificación: el flujo en el que una persona fotografía su documento no usa cookies de cuenta ni de publicidad.',
      ],
    },
    {
      paragraphs: [
        'No usamos cookies de redes sociales ni de publicidad de terceros.',
      ],
    },
    {
      title: 'Cómo controlarlas',
      paragraphs: [
        'Puede borrar o bloquear cookies en la configuración de su navegador. Si bloquea las cookies del panel, no podrá iniciar sesión.',
      ],
    },
    {
      title: 'Contacto',
      paragraphs: [
        CONTACT.privacy,
      ],
    },
  ],
  related: relatedCore,
};

export const aupDoc: LegalDoc = {
  title: 'Política de uso aceptable',
  version: '1.0',
  updated: '13 de septiembre de 2026',
  intro: [
    'Las empresas que contratan EMVERAX y las personas que usan el panel deben cumplir esta política.',
  ],
  blocks: [
    {
      title: 'Uso permitido',
      paragraphs: [
        'El servicio se usa para verificar la identidad de personas naturales mayores de 18 años, en el marco de una relación lícita de la empresa cliente con esa persona.',
      ],
    },
    {
      title: 'Uso no permitido',
      bullets: [
        'Verificar a menores de 18 años.',
        'Usar el servicio para vigilancia o para buscar a una persona entre muchas.',
        'Usar el resultado como única base de una decisión automatizada con efectos significativos, sin revisión de la empresa cliente.',
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
  version: '1.0',
  updated: '13 de septiembre de 2026',
  intro: [
    `Para acceder, corregir o eliminar sus datos, escriba a ${CONTACT.privacy}.`,
  ],
  blocks: [
    {
      title: 'Qué incluir en el correo',
      bullets: [
        'Su nombre y un medio de contacto.',
        'Si se verificó con una empresa o si tiene cuenta en el panel.',
        'El nombre de esa empresa, si lo recuerda.',
        'Qué solicita: acceso, corrección o eliminación.',
      ],
    },
    {
      paragraphs: [
        'No envíe fotografías de su documento en el primer correo. Si las necesitamos para confirmar que es usted, se las pediremos.',
      ],
    },
    {
      title: 'Si se verificó con una empresa',
      paragraphs: [
        'Esa empresa es responsable de la verificación. También puede escribirle a ella. Si nos escribe a nosotros, le ayudamos y, cuando corresponda, ejecutamos la eliminación en nuestros sistemas.',
      ],
    },
    {
      title: 'Si tiene cuenta en el panel',
      paragraphs: [
        `Escriba a ${CONTACT.privacy} o pida a la persona que administra su organización que dé de baja su usuario.`,
      ],
    },
  ],
  related: relatedCore,
};

export const biometricDoc: LegalDoc = {
  title: 'Aviso de datos biométricos',
  version: '1.0',
  updated: '13 de septiembre de 2026',
  intro: [
    'Este aviso complementa el aviso para usuarios finales.',
  ],
  blocks: [
    {
      title: 'Qué dato biométrico tratamos',
      paragraphs: [
        'De su selfie y de la foto de su documento se obtiene una plantilla facial: un conjunto de números que permite confirmar que ambas imágenes corresponden a la misma persona.',
        'La fotografía en sí es un dato personal. La plantilla es el dato biométrico. No guardamos un mapa 3D de su cara ni un escaneo de iris.',
      ],
    },
    {
      title: 'Para qué se usa',
      paragraphs: [
        'Únicamente para confirmar, en esa verificación, que la persona de la selfie es la de la foto del documento. El resultado se entrega a la empresa que le pidió verificarse.',
        'No usamos la plantilla para reconocerle entre otras personas, ni para entrenar modelos, ni la compartimos con otras empresas.',
      ],
    },
    {
      title: 'Por cuánto tiempo',
      paragraphs: [
        'La plantilla se conserva 30 días. Las fotografías, 90 días.',
      ],
    },
    {
      title: 'Quién es responsable',
      paragraphs: [
        `La empresa que le pide verificarse es responsable de esa verificación. EMVERAX opera la tecnología por su cuenta. Para ejercer sus derechos, escriba a ${CONTACT.privacy} o al canal de privacidad de esa empresa.`,
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
  version: '1.0',
  updated: '13 de septiembre de 2026',
  intro: [
    'El servicio de verificación de EMVERAX está pensado para personas de 18 años o más.',
    'Si usted es menor de 18 años, no use el enlace de captura y no fotografíe su documento. Avise a un adulto y a quien le envió el enlace.',
  ],
  blocks: [
    {
      title: 'Responsabilidad de la empresa que nos contrata',
      paragraphs: [
        'La empresa que pide la verificación es responsable de usarla solo con personas mayores de edad.',
      ],
    },
    {
      title: 'Si se verificó a un menor',
      paragraphs: [
        `Escriba a ${CONTACT.privacy} y, si puede, a esa empresa. Eliminaremos los datos de esa sesión.`,
      ],
    },
  ],
  related: [
    { href: '/acceptable-use', label: 'Política de uso aceptable' },
    { href: '/end-user-privacy', label: 'Aviso para usuarios finales' },
  ],
};

export const subprocessorsDoc: LegalDoc = {
  title: 'Proveedores de infraestructura',
  version: '1.0',
  updated: '13 de septiembre de 2026',
  intro: [
    'Para operar el servicio, EMVERAX utiliza proveedores de infraestructura que tratan datos por nuestra cuenta. Avisaremos un cambio material con al menos 30 días de antelación, salvo una emergencia de seguridad.',
  ],
  blocks: [
    {
      title: 'Proveedores',
      table: {
        headers: ['Proveedor', 'Función'],
        rows: [
          ['Cloudflare, Inc.', 'Almacenamiento de fotografías de verificación, DNS y red'],
          ['Oracle Cloud', 'Alojamiento de servidores y base de datos'],
        ],
      },
    },
  ],
  related: [
    { href: '/privacy', label: 'Política de privacidad' },
    { href: '/end-user-privacy', label: 'Aviso para usuarios finales' },
  ],
};
