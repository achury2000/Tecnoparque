<template>
  <AuthLayout>
    <div><h2>Restablecer contraseña</h2><p class="tp-lead" style="margin-top:8px">Indica tu documento y te enviaremos un enlace al correo registrado.</p></div>
    <p v-if="enviado" class="tp-alert tp-alert--ok" role="status">Si el documento corresponde a una cuenta, enviamos un enlace para restablecer la contraseña al correo registrado. Revisa también la carpeta de spam.</p>
    <form v-else class="tp-form" novalidate @submit.prevent="enviar">
      <p v-if="error" class="tp-alert tp-alert--err" role="alert">{{ error }}</p>
      <TpSelect v-model="form.tipoDocumento" label="Tipo de documento" :options="tipos" :error="errores.tipoDocumento" @blur="campo('tipoDocumento')" />
      <TpInput v-model="form.documento" label="Número de documento" icon="id" inputmode="text" :error="errores.documento" @blur="campo('documento')" />
      <button class="tp-btn tp-btn--lg tp-btn--block" :class="{ 'is-loading': cargando }" :disabled="cargando" type="submit"><span v-if="cargando" class="tp-spin" /> {{ cargando ? 'Enviando…' : 'Enviar enlace' }}</button>
    </form>
    <div class="tp-auth__links">
      <router-link to="/login">Volver a ingresar</router-link>
      <router-link to="/email/reset">Cambiar correo electrónico</router-link>
    </div>
  </AuthLayout>
</template>

<script>
import AuthLayout from '../components/AuthLayout.vue';
import TpInput from '../components/TpInput.vue';
import TpSelect from '../components/TpSelect.vue';
import { api } from '../services/api.js';
import { tiposDocumento } from '../data/catalogos.js';
import { rules, validar } from '../utils/validators.js';

const esquema = { tipoDocumento: [rules.requerido('Selecciona el tipo de documento.')], documento: [rules.requerido('Escribe tu número de documento.'), rules.documento()] };
export default {
  name: 'PasswordReset',
  components: { AuthLayout, TpInput, TpSelect },
  data() { return { tipos: tiposDocumento, form: { tipoDocumento: '', documento: '' }, errores: {}, error: '', cargando: false, enviado: false }; },
  methods: {
    campo(c) { const e = validar(this.form, esquema, [c]); this.$set(this.errores, c, e[c] || ''); },
    enviar() {
      this.error = '';
      this.errores = validar(this.form, esquema);
      if (Object.keys(this.errores).length) return;
      this.cargando = true;
      api.solicitarResetPassword(this.form).then(() => { this.enviado = true; }).catch((e) => { this.error = e.message; }).finally(() => { this.cargando = false; });
    },
  },
};
</script>
