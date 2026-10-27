<template>
  <AuthLayout>
    <div><h2>Iniciar sesión</h2><p class="tp-lead" style="margin-top:8px">Ingresa con tu correo y contraseña.</p></div>
    <form class="tp-form" novalidate @submit.prevent="enviar">
      <p v-if="error" class="tp-alert tp-alert--err" role="alert">{{ error }}</p>
      <TpInput v-model="form.email" label="Correo electrónico" type="email" icon="mail" autocomplete="email" :error="errores.email" @blur="campo('email')" />
      <TpInput v-model="form.password" label="Contraseña" type="password" icon="lock" autocomplete="current-password" :error="errores.password" @blur="campo('password')" />
      <TpCheck v-model="form.remember">Recuérdame en este equipo</TpCheck>
      <button class="tp-btn tp-btn--lg tp-btn--block" :class="{ 'is-loading': cargando }" :disabled="cargando" type="submit"><span v-if="cargando" class="tp-spin" /> {{ cargando ? 'Ingresando…' : 'Ingresar' }}</button>
    </form>
    <p v-if="ok" class="tp-alert tp-alert--ok" role="status">Ingreso correcto. (En la demo no se abre el área privada.)</p>
    <div class="tp-auth__links">
      <router-link to="/password/reset">¿Olvidó su contraseña?</router-link>
      <span>¿Aún no tienes cuenta? <router-link to="/registro">Regístrate</router-link></span>
    </div>
  </AuthLayout>
</template>

<script>
import AuthLayout from '../components/AuthLayout.vue';
import TpInput from '../components/TpInput.vue';
import TpCheck from '../components/TpCheck.vue';
import { api } from '../services/api.js';
import { rules, validar } from '../utils/validators.js';

const esquema = { email: [rules.requerido('Escribe tu correo electrónico.'), rules.correo()], password: [rules.requerido('Escribe tu contraseña.')] };
export default {
  name: 'Login',
  components: { AuthLayout, TpInput, TpCheck },
  data() { return { form: { email: '', password: '', remember: false }, errores: {}, error: '', cargando: false, ok: false }; },
  methods: {
    campo(c) { const e = validar(this.form, esquema, [c]); this.$set(this.errores, c, e[c] || ''); },
    enviar() {
      this.error = ''; this.ok = false;
      this.errores = validar(this.form, esquema);
      if (Object.keys(this.errores).length) return;
      this.cargando = true;
      api.login(this.form).then(() => { this.ok = true; }).catch((e) => { this.error = e.message; }).finally(() => { this.cargando = false; });
    },
  },
};
</script>
