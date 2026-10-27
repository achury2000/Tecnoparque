<template>
  <header class="tp-header" :class="{ 'is-scrolled': scrolled }">
    <div class="tp-wrap tp-header__in">
      <router-link to="/" class="tp-header__brand" aria-label="Red Tecnoparque Colombia, inicio"><BrandLogo variant="white" :height="42" /></router-link>

      <nav class="tp-nav" aria-label="Principal">
        <router-link v-for="l in links" :key="l.to" :to="l.to" exact class="tp-nav__link">{{ l.text }}</router-link>
      </nav>
      <div class="tp-header__cta">
        <router-link to="/login" class="tp-btn tp-btn--ghost tp-btn--sm">Iniciar sesión</router-link>
        <router-link to="/registro" class="tp-btn tp-btn--sm">Registra tu idea</router-link>
      </div>

      <button class="tp-burger" type="button" :aria-expanded="String(open)" aria-controls="tp-drawer" :aria-label="open ? 'Cerrar menú' : 'Abrir menú'" @click="open = !open">
        <TpIcon :name="open ? 'close' : 'menu'" :size="26" />
      </button>
    </div>

    <transition name="tp-drawer">
      <div v-if="open" id="tp-drawer" class="tp-drawer" @click="onDrawerClick">
        <div class="tp-drawer__title">Red Tecnoparque<small>SENA · Programa de Innovación</small></div>
        <router-link v-for="l in drawerLinks" :key="l.to" :to="l.to" exact class="tp-drawer__link"><TpIcon :name="l.icon" :size="22" />{{ l.drawer || l.text }}</router-link>
        <div class="tp-drawer__cta">
          <router-link to="/registro" class="tp-btn tp-btn--block">Registra tu idea</router-link>
          <router-link to="/login" class="tp-btn tp-btn--ghost tp-btn--block">Iniciar sesión</router-link>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
import BrandLogo from './BrandLogo.vue';
import TpIcon from './TpIcon.vue';

export default {
  name: 'AppHeader',
  components: { BrandLogo, TpIcon },
  data() {
    return {
      open: false,
      scrolled: false,
      links: [
        { to: '/', text: 'Inicio', icon: 'home' },
        { to: '/nodos-tecnoparque', text: 'Nodos', drawer: 'Nodos nacionales', icon: 'pin' },
        { to: '/lineas-tecnoparque', text: 'Líneas', drawer: 'Líneas tecnológicas', icon: 'chip' },
        { to: '/servicios-tecnoparque', text: 'Servicios', drawer: 'Nuestros servicios', icon: 'support' },
      ],
    };
  },
  computed: { drawerLinks() { return [...this.links, { to: '/creditos', text: 'Créditos', icon: 'book' }]; } },
  watch: { $route() { this.open = false; }, open(v) { document.body.style.overflow = v ? 'hidden' : ''; } },
  mounted() { window.addEventListener('scroll', this.onScroll, { passive: true }); window.addEventListener('keydown', this.onKey); this.onScroll(); },
  beforeDestroy() { window.removeEventListener('scroll', this.onScroll); window.removeEventListener('keydown', this.onKey); document.body.style.overflow = ''; },
  methods: {
    onScroll() { this.scrolled = window.scrollY > 8; },
    onKey(e) { if (e.key === 'Escape') this.open = false; },
    onDrawerClick(e) { if (e.target.closest('a')) this.open = false; },
  },
};
</script>
