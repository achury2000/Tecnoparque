// Capa de acceso al backend.
//
// DEMO: con USE_MOCK = true todo se simula y no sale ninguna petición.
// PRODUCCIÓN: pon USE_MOCK = false y ajusta las rutas a las de tu backend (Laravel).
// Cada función devuelve una Promesa; los errores deben lanzar `new Error('mensaje para el usuario')`.
import { nodos } from '@/data/contenido.js';
import { ciudadesMock as ciudades } from '@/data/catalogos.js';

export const USE_MOCK = true;
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

// Si usas axios en tu proyecto, cambia esta función por `axios.request`.
async function http(method, url, body) {
  const token = document.querySelector('meta[name="csrf-token"]');
  const res = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json', Accept: 'application/json', ...(token ? { 'X-CSRF-TOKEN': token.content } : {}) },
    credentials: 'same-origin',
    body: body ? JSON.stringify(body) : undefined,
  });
  let data = null;
  try { data = await res.json(); } catch (e) { /* sin cuerpo */ }
  if (!res.ok) throw new Error((data && (data.message || firstError(data.errors))) || 'No se pudo completar la solicitud.');
  return data;
}
const firstError = (errs) => (errs ? Object.values(errs)[0][0] : '');

export const api = {
  // POST /login  { email, password, remember }
  async login(payload) {
    if (!USE_MOCK) return http('POST', '/login', payload);
    await wait(900);
    if (payload.password === 'incorrecta') throw new Error('Correo o contraseña incorrectos.');
    return { ok: true };
  },

  // POST /password/email  { tipoDocumento, documento }
  // Responde siempre igual para no revelar si el documento existe.
  async solicitarResetPassword(payload) {
    if (!USE_MOCK) return http('POST', '/password/email', payload);
    await wait(900);
    return { ok: true };
  },

  // POST /email/reset  { tipoDocumento, documento, fechaNacimiento, correo, correoConfirmacion }
  async cambiarCorreo(payload) {
    if (!USE_MOCK) return http('POST', '/email/reset', payload);
    await wait(900);
    return { ok: true };
  },

  // GET /api/usuarios/existe?tipoDocumento=..&documento=..  -> { existe: boolean }
  async existeUsuario(tipoDocumento, documento) {
    if (!USE_MOCK) return http('GET', `/api/usuarios/existe?tipoDocumento=${encodeURIComponent(tipoDocumento)}&documento=${encodeURIComponent(documento)}`);
    await wait(600);
    return { existe: documento === '1000000000' }; // en la demo, este documento "ya existe"
  },

  // GET /api/ciudades?departamento=..  -> ['Medellín', ...]
  async ciudades(departamento) {
    if (!USE_MOCK) return http('GET', `/api/ciudades?departamento=${encodeURIComponent(departamento)}`);
    await wait(250);
    return ciudades(departamento);
  },

  // POST /registro  { ...formulario }
  async registrar(payload) {
    if (!USE_MOCK) return http('POST', '/registro', payload);
    await wait(1200);
    return { ok: true };
  },

  // GET /api/nodos -> [{ id, nombre, ciudad, departamento }]
  async nodos() {
    if (!USE_MOCK) return http('GET', '/api/nodos');
    await wait(150);
    return nodos;
  },
};
