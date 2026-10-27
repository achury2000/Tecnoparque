// Catálogos del formulario de registro (tomados del sitio actual).
export const tiposDocumento = ['Cédula de Ciudadanía', 'Cédula de Extranjería', 'Pasaporte', 'Permiso Especial de Permanencia (PEP)', 'Registro Civil', 'Tarjeta de Identidad'];

export const departamentos = ['Amazonas', 'Antioquia', 'Arauca', 'Atlántico', 'Bolívar', 'Boyacá', 'Caldas', 'Caquetá', 'Casanare', 'Cauca', 'Cesar', 'Chocó', 'Córdoba', 'Cundinamarca', 'Guainía', 'Guaviare', 'Huila', 'La Guajira', 'Magdalena', 'Meta', 'Nariño', 'Norte de Santander', 'Putumayo', 'Quindío', 'Risaralda', 'San Andrés y Providencia', 'Santander', 'Sucre', 'Tolima', 'Valle del Cauca', 'Vaupés', 'Vichada', 'Extranjero'];

export const gruposSanguineos = ['A-', 'A+', 'AB-', 'AB+', 'B-', 'B+', 'N/A', 'O-', 'O+'];
export const estratos = ['1', '2', '3', '4', '5', '6'];
export const etnias = ['Indígena', 'NARP (Negra, Afrocolombiana, Raizal o Palenquera)', 'No aplica', 'Rom o gitano'];
export const grados = ['Bachiller Académico', 'Doctorado', 'Especialización', 'Maestría', 'Ninguno', 'Post Doctorado', 'Primaria', 'Profesional', 'Técnico', 'Tecnólogo'];
export const ocupaciones = ['Campesino', 'Empleado', 'Estudiante', 'Independiente', 'Otra'];
export const sexos = ['Masculino', 'Femenino', 'Intersexual'];

export const eps = ['A.R.S. Convida', 'Aliansalud EPS S.A.', 'Ambuq ARS', 'Anas Wayuu EPS Indígena', 'Asmet Salud', 'Asociación Indígena del Cauca', 'Asociación Mutual Ser ESS', 'Cafesalud EPS', 'Capital Salud EPS', 'Capresoca E.P.S.', 'CCF Cajacopi Atlántico', 'CCF de La Guajira', 'CCF de Nariño', 'Comfaboy', 'Comfacor', 'Comfacundi', 'Comfamiliar Cartagena', 'Comfamiliar Chocó', 'Comfamiliar Huila', 'Comfaoriente', 'Comfasucre', 'Comfenalco Valle E.P.S.', 'Comparta', 'Compensar E.P.S.', 'Coomeva E.P.S. S.A.', 'Coosalud EPS', 'Cruz Blanca EPS S.A.', 'Dusakawi A.R.S.I.', 'Ecoopsos ESS', 'Emdisalud E.S.S.', 'Emssanar ESS', 'EPS Famisanar Ltda', 'EPS Suramericana S.A.', 'Mallamas EPSI', 'Nueva EPS', 'Otra', 'Pijaos Salud EPSI', 'Salud Total S.A. EPS', 'Saludvida E.P.S. S.A.', 'Sanitas S.A. E.P.S.', 'Savia Salud EPS', 'Serv. Occ. de Salud SOS EPS'];

// MOCK de ciudades por departamento: en producción se piden al API (ver services/api.js).
const capitales = { Amazonas: 'Leticia', Antioquia: 'Medellín', Arauca: 'Arauca', Atlántico: 'Barranquilla', Bolívar: 'Cartagena', Boyacá: 'Tunja', Caldas: 'Manizales', Caquetá: 'Florencia', Casanare: 'Yopal', Cauca: 'Popayán', Cesar: 'Valledupar', Chocó: 'Quibdó', Córdoba: 'Montería', Cundinamarca: 'Bogotá D.C.', Guainía: 'Inírida', Guaviare: 'San José del Guaviare', Huila: 'Neiva', 'La Guajira': 'Riohacha', Magdalena: 'Santa Marta', Meta: 'Villavicencio', Nariño: 'Pasto', 'Norte de Santander': 'Cúcuta', Putumayo: 'Mocoa', Quindío: 'Armenia', Risaralda: 'Pereira', 'San Andrés y Providencia': 'San Andrés', Santander: 'Bucaramanga', Sucre: 'Sincelejo', Tolima: 'Ibagué', 'Valle del Cauca': 'Cali', Vaupés: 'Mitú', Vichada: 'Puerto Carreño', Extranjero: 'Otro país' };
const extra = { Antioquia: ['Bello', 'Envigado', 'Itagüí', 'Rionegro', 'Sabaneta'], 'Valle del Cauca': ['Palmira', 'Tuluá', 'Buenaventura'], Cundinamarca: ['Soacha', 'Chía', 'Zipaquirá'], Santander: ['Floridablanca', 'Girón'] };
export const ciudadesMock = (depto) => (depto ? [capitales[depto], ...(extra[depto] || [])].filter(Boolean) : []);
