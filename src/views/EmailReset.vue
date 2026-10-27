<template>
  <AuthLayout>
    <div><h2>Cambiar correo electrónico</h2><p class="tp-lead" style="margin-top:8px">Verificamos tu identidad con tu documento y fecha de nacimiento.</p></div>
    <p v-if="enviado" class="tp-alert tp-alert--ok" role="status">Listo. Si los datos coinciden, el nuevo correo quedó registrado y podrás ingresar con él.</p>
    <form v-else class="tp-form" novalidate @submit.prevent="enviar">
      <p v-if="error" class="tp-alert tp-alert--err" role="alert">{{ error }}</p>
      <TpSelect v-model="form.tipoDocumento" label="Tipo de documento" :options="tipos" :error="errores.tipoDocumento" @blur="campo('tipoDocumento')" />
      <TpInput v-model="form.documento" label="Número de documento" icon="id" :error="errores.documento" @blur="campo('documento')" />
      <TpInput v-model="form.fechaNacimiento" label="Fecha de nacimiento" type="date" icon="calendar" :error="errores.fechaNacimiento" @blur="campo('fechaNacimiento')" />
      <TpInput v-model="form.correo" label="Nuevo correo electrónico" type="email" icon="mail" autocomplete="email" :error="errores.correo" @blur="campo('correo')" />
      <TpInput v-model="form.correoConfirmacion" label="Confirma el correo electrónico" type="email" icon="mail" autocomplete="email" :error="errores.correoConfirmacion" @blur="campo('correoConfirmacion')" />
      <button class="tp-btn tp-btn--lg tp-btn--block" :class="{ 'is-loading': cargando }" :disabled="cargando" type="submit"><span v-if="cargando" class="tp-spin" /> {{ cargando ? 'Guardando…' : 'Registrar nuevo correo' }}</button>
    </form>
    <div class="tp-auth__links"><router-link to="/login">Volver a ingresar</router-link></div>
  </AuthLayout>
</template>

<script>
import AuthLayout from '../components/AuthLayout.vue';
import TpInput from '../components/TpInput.vue';
import TpSelect from '../components/TpSelect.vue';
import { api } from '../services/api.js';
import { tiposDocumento } from '../data/catalogos.js';
import { rules, validar } from '../utils/validators.js';

const esquema = {
  tipoDocumento: [rules.requerido('Selecciona el tipo de documento.')],
  documento: [rules.requerido('Escribe tu número de documento.'), rules.documento()],
  fechaNacimiento: [rules.requerido('Indica tu fecha de nacimiento.'), rules.fechaNacimiento()],
  correo: [rules.requerido('Escribe el nuevo correo.'), rules.correo()],
  correoConfirmacion: [rules.requerido('Confirma el correo.'), rules.igualA('correo', 'Los dos correos deben ser iguales.')],
};
export default {
  name: 'EmailReset',
  components: { AuthLayout, TpInput, TpSelect },
  data() { return { tipos: tiposDocumento, form: { tipoDocumento: '', documento: '', fechaNacimiento: '', correo: '', correoConfirmacion: '' }, errores: {}, error: '', cargando: false, enviado: false }; },
  methods: {
    campo(c) { const e = validar(this.form, esquema, [c]); this.$set(this.errores, c, e[c] || ''); },
    enviar() {
      this.error = '';
      this.errores = validar(this.form, esquema);
      if (Object.keys(this.errores).length) return;
      this.cargando = true;
      api.cambiarCorreo(this.form).then(() => { this.enviado = true; }).catch((e) => { this.error = e.message; }).finally(() => { this.cargando = false; });
    },
  },
};
</script>
