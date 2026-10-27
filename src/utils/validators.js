// Validaciones del lado cliente (el servidor debe volver a validar).
const vacio = (v) => v === undefined || v === null || String(v).trim() === '';

export const rules = {
  requerido: (msg = 'Este campo es obligatorio.') => (v) => (vacio(v) ? msg : ''),
  correo: () => (v) => (!vacio(v) && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v).trim()) ? 'Escribe un correo válido, por ejemplo nombre@dominio.com.' : ''),
  documento: () => (v) => (!vacio(v) && !/^[A-Za-z0-9]{4,16}$/.test(String(v).trim()) ? 'Usa de 4 a 16 caracteres, solo letras y números, sin puntos ni espacios.' : ''),
  celular: () => (v) => (!vacio(v) && !/^3\d{9}$/.test(String(v).replace(/\s/g, '')) ? 'Escribe un celular colombiano de 10 dígitos que empiece por 3.' : ''),
  telefono: () => (v) => (!vacio(v) && !/^\d{7,10}$/.test(String(v).replace(/\s/g, '')) ? 'Escribe de 7 a 10 dígitos, solo números.' : ''),
  fechaPasada: () => (v) => (!vacio(v) && new Date(v) > new Date() ? 'La fecha no puede ser posterior a hoy.' : ''),
  fechaNacimiento: () => (v) => {
    if (vacio(v)) return '';
    const d = new Date(v), hoy = new Date();
    if (d > hoy) return 'La fecha no puede ser posterior a hoy.';
    if (hoy.getFullYear() - d.getFullYear() > 110) return 'Revisa el año de nacimiento.';
    return '';
  },
  minimo: (n, msg) => (v) => (!vacio(v) && String(v).length < n ? msg || `Escribe al menos ${n} caracteres.` : ''),
  igualA: (otro, msg) => (v, form) => (String(v).trim() !== String(form[otro] || '').trim() ? msg : ''),
  aceptar: (msg) => (v) => (v ? '' : msg),
};

// Ejecuta las reglas de un esquema { campo: [reglas...] } y devuelve { campo: 'mensaje' }.
export function validar(form, esquema, solo) {
  const errores = {};
  Object.keys(esquema).forEach((campo) => {
    if (solo && !solo.includes(campo)) return;
    for (const regla of esquema[campo]) {
      const msg = regla(form[campo], form);
      if (msg) { errores[campo] = msg; break; }
    }
  });
  return errores;
}
