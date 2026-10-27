<template>
  <div class="tp-auth">
    <aside class="tp-auth__side">
      <NetworkBg />
      <router-link to="/" aria-label="Red Tecnoparque Colombia, ir al inicio"><BrandLogo variant="white" :height="52" /></router-link>
      <div>
        <h1>Tu idea, <em>en red</em> con todo el país.</h1>
        <p>Entra a tu cuenta para seguir tus proyectos, agendar asesorías y usar los laboratorios de la Red Tecnoparque.</p>
        <ul class="tp-auth__points">
          <li><TpIcon name="check" :size="20" /> Servicios 100% gratuitos</li>
          <li><TpIcon name="check" :size="20" /> Asesoría técnica especializada</li>
          <li><TpIcon name="check" :size="20" /> Acceso a infraestructura tecnológica</li>
        </ul>
      </div>
      <p class="tp-auth__home"><router-link to="/">← Volver al sitio</router-link></p>
    </aside>
    <div class="tp-auth__main"><div class="tp-auth__card"><slot /></div></div>
  </div>
</template>

<script>
import NetworkBg from './NetworkBg.vue';
import BrandLogo from './BrandLogo.vue';
import TpIcon from './TpIcon.vue';
export default { name: 'AuthLayout', components: { NetworkBg, BrandLogo, TpIcon } };
</script>
