// Contenido público tomado del sitio actual. Los textos que el sitio tiene con errores
// se corrigieron y están marcados con "// corregido" para que los confirmen.

export const lineas = [
  {
    id: 'biotecnologia', icon: 'flask', nombre: 'Biotecnología y Nanotecnología',
    resumen: 'Agroindustria, biotecnología vegetal y aplicaciones moleculares.', // corregido: hoy el sitio muestra aquí el texto de Ingeniería y Diseño
    subtemas: ['Biotecnología animal y vegetal', 'Nuevos materiales', 'Energías verdes y biocombustibles', 'Nanotecnología'],
    equipos: ['Extractor', 'Microscopio UV', 'Soxhlet', 'Rotaevaporador', 'Biorreactores'],
  },
  {
    id: 'electronica', icon: 'chip', nombre: 'Electrónica y Telecomunicaciones',
    resumen: 'Internet de las cosas, automatización, robótica y energías renovables.', // corregido
    subtemas: ['Automatización e instrumentación', 'Redes inteligentes', 'Robótica', 'Sistemas embebidos', 'Agroelectrónica', 'Análisis de señales y protocolos'],
    equipos: ['Tarjetas de desarrollo', 'Sensores IoT', 'Software de diseño de PCB', 'Kits de robótica', 'Cámara termográfica'],
  },
  {
    id: 'ingenieria', icon: 'cube', nombre: 'Ingeniería y Diseño',
    resumen: 'Diseño mecánico, CAD/CAM/CAE, prototipado rápido e ingeniería inversa.', // corregido
    subtemas: ['Productos y procesos', 'Diseño de concepto y detalles', 'Análisis y simulación', 'Ingeniería inversa', 'Mecanizado', 'Diseño estratégico'],
    equipos: ['Escáneres 3D', 'Cortadora láser', 'Termoformado', 'Fresadora CNC', 'Impresoras 3D'],
  },
  {
    id: 'virtuales', icon: 'vr', nombre: 'Tecnologías Virtuales',
    resumen: 'Aplicaciones web y móviles, inteligencia artificial, realidad aumentada, GIS y ciberseguridad.',
    subtemas: ['Realidad virtual y simulación', 'Animación digital', 'Ingeniería de software', 'Multimediales', 'Geotecnología'],
    equipos: ['Estaciones de trabajo', 'Oculus Rift', 'HTC Vive Pro', 'Captura de movimiento'],
  },
];

// Otras áreas que el sitio lista en la página de líneas (hoy sin descripción propia).
export const otrasAreas = ['Diseño de Productos', 'Producción y Transformación', 'Materiales y Biotecnología', 'TIC e Inteligencia Artificial', 'Usuario, Comercialización y Logística', 'SENA se Transforma', 'Sociedad, Cultura y Pedagogía', 'Economía Popular y Campesina'];

export const especializacion = ['Agroelectrónica', 'Agroindustria alimentaria', 'Agroindustria no alimentaria', 'Alimentos', 'Análisis de señales y protocolos', 'Análisis y diseño de sistemas de gestión energética', 'Análisis y simulación', 'Animación digital', 'Animación 2D', 'Animación 3D']; // corregido: "Animacion Dos D / Tres D"

export const servicios = [
  { icon: 'support', nombre: 'Acompañamiento a proyecto y articulación', texto: 'Asesoría técnica especializada y acceso a infraestructura tecnológica.' },
  { icon: 'bulb', nombre: 'Ideación', texto: 'Comité, talleres y charlas para dar forma a tu idea.' },
  { icon: 'users', nombre: 'EDT', texto: 'Eventos de divulgación y transferencia de tecnología.' }, // texto ampliado: hoy dice solo "Eventos"
  { icon: 'flask', nombre: 'Visita', texto: 'Visita general a las instalaciones del nodo.' },
  { icon: 'wrench', nombre: 'Mantenimiento y soporte', texto: 'Soporte técnico y mantenimiento asociado a tu proyecto.' }, // corregido: hoy repite el texto del primer servicio
];

export const pasos = [
  { n: 1, nombre: 'Registro', texto: 'Presenta tu idea en la plataforma SIRT o en el nodo más cercano.' },
  { n: 2, nombre: 'Evaluación', texto: 'Expertos validan la viabilidad técnica e innovadora de tu propuesta.' },
  { n: 3, nombre: 'Desarrollo', texto: 'Accedes a laboratorios y asesoría para construir tu prototipo.' },
  { n: 4, nombre: 'Escalamiento', texto: 'Te conectamos con el ecosistema para llevar la solución al mercado.' },
];

// Datos que en producción vienen del API (ver services/api.js).
export const nodos = [{ id: 1, nombre: 'Tecnoparque Medellín', ciudad: 'Medellín', departamento: 'Antioquia' }];

export const aliados = ['SENA', 'SENNOVA', 'SIRT', 'Tecnoparque', 'Red Tecnoparque Colombia'];

export const contacto = {
  direccion: 'Calle 54 No 10 – 39, Bogotá D.C.',
  correo: 'tecnoparque@sena.edu.co',
  ciudadano: 'servicioalciudadano@sena.edu.co',
  telefonos: ['018000 910270', '(57 1) 3430111'],
  redes: [
    { nombre: 'Facebook', url: 'https://www.facebook.com/TecnoparqueSENA' },
    { nombre: 'X', url: 'https://twitter.com/TecnoparqueSENA' },
    { nombre: 'Instagram', url: 'https://www.instagram.com/tecnoparquesena' },
    { nombre: 'YouTube', url: 'https://www.youtube.com/@TecnoparqueSENA' },
    { nombre: 'WhatsApp', url: 'https://wa.me/573159032882' },
  ],
  politica: 'https://sena.tecnoparquemedellin.com/politica-de-confidencialidad',
};

export const creditos = {
  entidades: [
    { nombre: 'SENNOVA', detalle: 'Sistema de Investigación, Desarrollo Tecnológico e Innovación del SENA. Entidad financiadora, a través del Centro de Servicios y Gestión Empresarial.' },
    { nombre: 'Tecnoparque Nodo Medellín', detalle: 'Ambiente de trabajo del proyecto: investigación y desarrollo web, piso 7.' },
  ],
  equipo: [
    { area: 'Dirección y formulación', personas: [{ nombre: 'John Jairo Castro Maldonado', rol: 'Formulador del proyecto' }, { nombre: 'Diego Javier Rivera Rodríguez', rol: 'Asesor SENNOVA' }] },
    { area: 'Investigación', personas: [{ nombre: 'John Jairo Castro Maldonado', rol: 'Investigador' }, { nombre: 'Dily Alexandra Castillo Carvajal', rol: 'Investigadora' }, { nombre: 'Diego Javier Rivera Rodríguez', rol: 'Recolección de información' }] },
    { area: 'Desarrollo de software', personas: [{ nombre: 'Dily Alexandra Castillo Carvajal', rol: 'Líder de proyecto' }, { nombre: 'Víctor Manuel Moreno Vega', rol: 'Desarrollo full stack' }, { nombre: 'Julián Darío Londoño Raigosa', rol: 'Desarrollo full stack' }] },
  ],
  referencias: [
    'COLCIENCIAS (2016). Actores del Sistema Nacional de Ciencia, Tecnología e Innovación.',
    'Castro Maldonado, J. J.; Patiño Murillo, J. A.; Gómez López, C. (2018). Procesos de I+D+i en el Centro de Servicios y Gestión Empresarial del SENA 2015-2017.',
    'Londoño, J.; Restrepo, S.; Rodríguez, M.; Cuartas, F.; Viana, N. (2018). Identificación de tipos, modelos y mecanismos de transferencia tecnológica.',
    'SENA (2018). Guía Metodológica Red Tecnoparque Colombia, Dirección.',
    'Ibáñez de Aldecoa Quintana, J. M. (2013). Niveles de madurez de la tecnología (TRLs).',
    'TEC-SHS (2008). Technology readiness levels handbook for space applications, ESA 66.',
    'Manrique Rojas, E., et al. (2019). Sistema de Gestión Académica a través del desarrollo de Modelo-Vista-Controlador.',
    'Angarita, C.; Gallardo, O. (2015). Implementación de un modelo de desarrollo de software orientado a la web.',
    'Segarra Cabrero, P. (2016). Diseño e implementación de un sitio web de seguridad informática.',
    'Sánchez, J. (2004). Principios sobre bases de datos relacionales.',
    'Silberschatz, A.; Korth, H. F.; Sudarshan, S. (2006). Fundamentos de bases de datos.',
    'Shahzad, F. (2017). Modern and Responsive Mobile-enabled Web Applications.',
    'Pop, D. P.; Altar, A. (2014). Designing an MVC model for rapid web application development.',
    'Welling, L.; Thomson, L. (2005). Desarrollo Web con PHP y MySQL.',
    'Manchado, D. S. (2010). Estudio del servidor de aplicaciones Glassfish y de las aplicaciones J2EE.',
    'Castro-Maldonado, J. J., et al. (2019). Implementation of a technological tool for project management in Tecnoparque.',
  ],
};
