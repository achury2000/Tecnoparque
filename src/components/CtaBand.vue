<template>
  <section class="tp-sec">
    <div class="tp-wrap">
      <div class="tp-cta">
        <NetworkBg soft />
        <div style="position:relative">
          <h2 class="tp-h2">{{ title }}</h2>
          <p>{{ text }}</p>
        </div>
        <router-link :to="to" class="tp-btn tp-btn--lg" style="position:relative">{{ button }} <TpIcon name="arrowR" :size="20" /></router-link>
      </div>
    </div>
  </section>
</template>

<script>
import NetworkBg from './NetworkBg.vue';
import TpIcon from './TpIcon.vue';
export default {
  name: 'CtaBand',
  components: { NetworkBg, TpIcon },
  props: { title: { type: String, default: '¿Tienes una idea que merece volverse prototipo?' }, text: { type: String, default: 'Regístrate y un gestor del nodo más cercano te acompaña. Es gratis.' }, button: { type: String, default: 'Registra tu idea' }, to: { type: String, default: '/registro' } },
};
</script>
