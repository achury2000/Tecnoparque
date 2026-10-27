<template>
  <div>
    <PageHero tag="Registro" title="Registra tu idea" lead="Crea tu cuenta en seis pasos cortos. Te tomará unos 5 minutos." />
    <section class="tp-wiz">
      <div class="tp-wrap">
        <div class="tp-wiz__box">
          <div v-if="listo" class="tp-done" role="status">
            <span class="tp-done__ico"><TpIcon name="check" :size="42" /></span>
            <h2 class="tp-h2" style="max-width:none">¡Registro enviado!</h2>
            <p class="tp-lead">Enviamos un correo a <strong>{{ form.correo }}</strong> para activar tu cuenta.</p>
            <router-link to="/login" class="tp-btn tp-btn--lg">Ir a iniciar sesión</router-link>
          </div>

          <form v-else novalidate @submit.prevent="siguiente">
            <ol class="tp-wiz__prog" aria-hidden="true"><li v-for="n in pasos.length" :key="n" :class="{ 'is-done': n - 1 < paso, 'is-now': n - 1 === paso }" /></ol>
            <p class="tp-wiz__count" aria-live="polite">Paso {{ paso + 1 }} de {{ pasos.length }}</p>
            <h2 ref="titulo" class="tp-wiz__title" tabindex="-1">{{ pasos[paso].t }}</h2>
            <p class="tp-wiz__sub">{{ pasos[paso].s }}</p>
            <p v-if="error" class="tp-alert tp-alert--err" role="alert" style="margin-bottom:20px">{{ error }}</p>

            <div v-if="paso === 0" class="tp-form__grid">
              <TpSelect v-model="form.tipoDocumento" label="Tipo de documento" :options="tipos" :error="errores.tipoDocumento" @blur="campo('tipoDocumento')" />
              <TpInput v-model="form.documento" label="Número de documento" icon="id" hint="Sin puntos ni espacios." :error="errores.documento" @blur="campo('documento')" />
              <p class="tp-alert tp-alert--info is-wide">Antes de continuar verificamos que tu usuario no haya sido creado.</p>
            </div>

            <div v-if="paso === 1" class="tp-form__grid">
              <TpInput v-model="form.correo" label="Correo electrónico" type="email" icon="mail" autocomplete="email" :error="errores.correo" @blur="campo('correo')" />
              <TpInput v-model="form.correoConfirmacion" label="Confirma el correo" type="email" icon="mail" autocomplete="email" :error="errores.correoConfirmacion" @blur="campo('correoConfirmacion')" />
              <TpInput v-model="form.celular" label="Celular" icon="phone" inputmode="tel" autocomplete="tel" hint="10 dígitos, empieza por 3." :error="errores.celular" @blur="campo('celular')" />
              <TpInput v-model="form.telefono" label="Teléfono fijo" icon="phone" inputmode="tel" optional :error="errores.telefono" @blur="campo('telefono')" />
            </div>

            <div v-if="paso === 2" class="tp-form__grid">
              <TpSelect v-model="form.departamento" label="Departamento" :options="departamentos" :error="errores.departamento" @input="cambiaDepto" @blur="campo('departamento')" />
              <TpSelect v-model="form.ciudad" label="Ciudad" :options="ciudades" :disabled="!form.departamento || cargandoCiudades" :placeholder="cargandoCiudades ? 'Cargando…' : 'Selecciona una ciudad'" :error="errores.ciudad" @blur="campo('ciudad')" />
              <TpInput v-model="form.direccion" label="Dirección de residencia" icon="home" autocomplete="street-address" class="is-wide" :error="errores.direccion" @blur="campo('direccion')" />
              <TpSelect v-model="form.estrato" label="Estrato" :options="estratos" :error="errores.estrato" @blur="campo('estrato')" />
            </div>

            <div v-if="paso === 3" class="tp-form__grid">
              <TpInput v-model="form.nombres" label="Nombres" icon="user" autocomplete="given-name" :error="errores.nombres" @blur="campo('nombres')" />
              <TpInput v-model="form.apellidos" label="Apellidos" icon="user" autocomplete="family-name" :error="errores.apellidos" @blur="campo('apellidos')" />
              <TpInput v-model="form.fechaNacimiento" label="Fecha de nacimiento" type="date" icon="calendar" autocomplete="bday" :error="errores.fechaNacimiento" @blur="campo('fechaNacimiento')" />
              <TpSelect v-model="form.sexo" label="Sexo" :options="sexos" :error="errores.sexo" @blur="campo('sexo')" />
              <TpSelect v-model="form.grupoSanguineo" label="Grupo sanguíneo" :options="grupos" :error="errores.grupoSanguineo" @blur="campo('grupoSanguineo')" />
              <TpSelect v-model="form.etnia" label="Grupo étnico" :options="etnias" :error="errores.etnia" @blur="campo('etnia')" />
              <TpSelect v-model="form.eps" label="EPS" :options="eps" :error="errores.eps" @blur="campo('eps')" />
              <TpInput v-if="form.eps === 'Otra'" v-model="form.epsOtra" label="¿Cuál EPS?" :error="errores.epsOtra" @blur="campo('epsOtra')" />
            </div>

            <div v-if="paso === 4" class="tp-form__grid">
              <TpSelect v-model="form.grado" label="Nivel de estudios" :options="grados" :error="errores.grado" @blur="campo('grado')" />
              <TpSelect v-model="form.ocupacion" label="Ocupación" :options="ocupaciones" :error="errores.ocupacion" @blur="campo('ocupacion')" />
              <TpInput v-if="form.ocupacion === 'Estudiante'" v-model="form.institucion" label="Institución educativa" class="is-wide" :error="errores.institucion" @blur="campo('institucion')" />
              <TpInput v-if="form.ocupacion === 'Empleado' || form.ocupacion === 'Independiente'" v-model="form.empresa" label="Empresa o actividad" class="is-wide" :error="errores.empresa" @blur="campo('empresa')" />
              <TpInput v-if="form.ocupacion === 'Otra'" v-model="form.ocupacionOtra" label="¿Cuál ocupación?" class="is-wide" :error="errores.ocupacionOtra" @blur="campo('ocupacionOtra')" />
            </div>

            <div v-if="paso === 5" class="tp-form">
              <dl class="tp-sum"><div v-for="r in resumen" :key="r[0]"><dt>{{ r[0] }}</dt><dd>{{ r[1] || '—' }}</dd></div></dl>
              <TpCheck v-model="form.acepta" :error="errores.acepta">Acepto la <a :href="politica" target="_blank" rel="noopener">política de privacidad y el tratamiento de mis datos personales</a>.</TpCheck>
            </div>

            <div class="tp-wiz__nav">
              <button v-if="paso > 0" type="button" class="tp-btn tp-btn--outline" @click="atras"><TpIcon name="arrowL" :size="20" /> Regresar</button>
              <span v-else />
              <button type="submit" class="tp-btn tp-btn--lg" :class="{ 'is-loading': cargando }" :disabled="cargando"><span v-if="cargando" class="tp-spin" />{{ textoBoton }} <TpIcon v-if="!cargando" name="arrowR" :size="20" /></button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PageHero from '../components/PageHero.vue';
import TpIcon from '../components/TpIcon.vue';
import TpInput from '../components/TpInput.vue';
import TpSelect from '../components/TpSelect.vue';
import TpCheck from '../components/TpCheck.vue';
import { api } from '../services/api.js';
import { contacto } from '../data/contenido.js';
import { tiposDocumento, departamentos, gruposSanguineos, estratos, etnias, grados, ocupaciones, sexos, eps } from '../data/catalogos.js';
import { rules, validar } from '../utils/validators.js';

const R = rules;
const pasos = [
  { t: 'Tu documento', s: 'Con él verificamos que no tengas una cuenta creada.', campos: ['tipoDocumento', 'documento'] },
  { t: 'Contacto', s: 'Por aquí te escribiremos sobre tu proyecto.', campos: ['correo', 'correoConfirmacion', 'celular', 'telefono'] },
  { t: 'Dónde vives', s: 'Nos ayuda a asignarte el nodo más cercano.', campos: ['departamento', 'ciudad', 'direccion', 'estrato'] },
  { t: 'Datos personales', s: 'Escríbelos como aparecen en tu documento.', campos: ['nombres', 'apellidos', 'fechaNacimiento', 'sexo', 'grupoSanguineo', 'etnia', 'eps', 'epsOtra'] },
  { t: 'Formación y ocupación', s: 'Para conocer el perfil de quien presenta la idea.', campos: ['grado', 'ocupacion', 'institucion', 'empresa', 'ocupacionOtra'] },
  { t: 'Confirma tus datos', s: 'Revisa la información antes de enviarla.', campos: ['acepta'] },
];
const cond = (fn, regla) => (v, f) => (fn(f) ? regla(v, f) : '');

export default {
  name: 'Registro',
  components: { PageHero, TpIcon, TpInput, TpSelect, TpCheck },
  data() {
    return {
      pasos, paso: 0, errores: {}, error: '', cargando: false, listo: false, cargandoCiudades: false, ciudades: [],
      tipos: tiposDocumento, departamentos, grupos: gruposSanguineos, estratos, etnias, grados, ocupaciones, sexos, eps, politica: contacto.politica,
      form: { tipoDocumento: '', documento: '', correo: '', correoConfirmacion: '', celular: '', telefono: '', departamento: '', ciudad: '', direccion: '', estrato: '', nombres: '', apellidos: '', fechaNacimiento: '', sexo: '', grupoSanguineo: '', etnia: '', eps: '', epsOtra: '', grado: '', ocupacion: '', institucion: '', empresa: '', ocupacionOtra: '', acepta: false },
    };
  },
  computed: {
    esquema() {
      return {
        tipoDocumento: [R.requerido('Selecciona el tipo de documento.')],
        documento: [R.requerido('Escribe tu número de documento.'), R.documento()],
        correo: [R.requerido('Escribe tu correo.'), R.correo()],
        correoConfirmacion: [R.requerido('Confirma tu correo.'), R.igualA('correo', 'Los dos correos deben ser iguales.')],
        celular: [R.requerido('Escribe tu celular.'), R.celular()],
        telefono: [R.telefono()],
        departamento: [R.requerido('Selecciona el departamento.')],
        ciudad: [R.requerido('Selecciona la ciudad.')],
        direccion: [R.requerido('Escribe tu dirección.'), R.minimo(5)],
        estrato: [R.requerido('Selecciona el estrato.')],
        nombres: [R.requerido('Escribe tus nombres.'), R.minimo(2)],
        apellidos: [R.requerido('Escribe tus apellidos.'), R.minimo(2)],
        fechaNacimiento: [R.requerido('Indica tu fecha de nacimiento.'), R.fechaNacimiento()],
        sexo: [R.requerido('Selecciona una opción.')],
        grupoSanguineo: [R.requerido('Selecciona una opción.')],
        etnia: [R.requerido('Selecciona una opción.')],
        eps: [R.requerido('Selecciona tu EPS.')],
        epsOtra: [cond((f) => f.eps === 'Otra', R.requerido('Escribe cuál EPS.'))],
        grado: [R.requerido('Selecciona tu nivel de estudios.')],
        ocupacion: [R.requerido('Selecciona tu ocupación.')],
        institucion: [cond((f) => f.ocupacion === 'Estudiante', R.requerido('Escribe tu institución.'))],
        empresa: [cond((f) => f.ocupacion === 'Empleado' || f.ocupacion === 'Independiente', R.requerido('Escribe tu empresa o actividad.'))],
        ocupacionOtra: [cond((f) => f.ocupacion === 'Otra', R.requerido('Escribe cuál ocupación.'))],
        acepta: [R.aceptar('Debes aceptar la política para continuar.')],
      };
    },
    textoBoton() { return this.cargando ? 'Un momento…' : (this.paso === this.pasos.length - 1 ? 'Enviar registro' : 'Continuar'); },
    resumen() {
      const f = this.form;
      return [['Documento', f.tipoDocumento + ' ' + f.documento], ['Nombre', f.nombres + ' ' + f.apellidos], ['Correo', f.correo], ['Celular', f.celular], ['Residencia', f.direccion + ', ' + f.ciudad + ', ' + f.departamento], ['Nacimiento', f.fechaNacimiento], ['EPS', f.eps === 'Otra' ? f.epsOtra : f.eps], ['Estudios', f.grado], ['Ocupación', f.ocupacion === 'Otra' ? f.ocupacionOtra : f.ocupacion]];
    },
  },
  methods: {
    campo(c) { const e = validar(this.form, this.esquema, [c]); this.$set(this.errores, c, e[c] || ''); },
    cambiaDepto() {
      this.form.ciudad = ''; this.ciudades = [];
      if (!this.form.departamento) return;
      this.cargandoCiudades = true;
      const d = this.form.departamento;
      api.ciudades(d).then((c) => { if (d === this.form.departamento) this.ciudades = c; }).catch(() => { this.error = 'No pudimos cargar las ciudades. Intenta de nuevo.'; }).finally(() => { this.cargandoCiudades = false; });
    },
    foco() { this.$nextTick(() => { if (this.$refs.titulo) this.$refs.titulo.focus(); window.scrollTo({ top: 0, behavior: 'smooth' }); }); },
    atras() { this.error = ''; this.errores = {}; this.paso -= 1; this.foco(); },
    siguiente() {
      this.error = '';
      this.errores = validar(this.form, this.esquema, this.pasos[this.paso].campos);
      if (Object.keys(this.errores).length) return;
      if (this.paso === 0) return this.verificar();
      if (this.paso === this.pasos.length - 1) return this.enviar();
      this.paso += 1; this.foco();
    },
    verificar() {
      this.cargando = true;
      api.existeUsuario(this.form.tipoDocumento, this.form.documento).then((r) => {
        if (r.existe) { this.error = 'Ya existe un usuario con este documento. Inicia sesión o restablece tu contraseña.'; return; }
        this.paso += 1; this.foco();
      }).catch((e) => { this.error = e.message; }).finally(() => { this.cargando = false; });
    },
    enviar() {
      this.cargando = true;
      api.registrar(this.form).then(() => { this.listo = true; window.scrollTo({ top: 0 }); }).catch((e) => { this.error = e.message; }).finally(() => { this.cargando = false; });
    },
  },
};
</script>
