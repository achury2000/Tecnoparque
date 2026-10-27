<template>
  <div class="tp-app">
    <a class="tp-skip" href="#tp-main" @click.prevent="focusMain">Saltar al contenido</a>
    <AppHeader v-if="layout !== 'auth'" />
    <main id="tp-main" tabindex="-1" ref="main">
      <transition name="tp-fade" mode="out-in">
        <router-view :key="$route.path" />
      </transition>
    </main>
    <AppFooter v-if="layout !== 'auth'" />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: { AppHeader, AppFooter },
  computed: {
    layout() { return this.$route.meta.layout || 'site'; },
  },
  methods: {
    focusMain() { this.$refs.main && this.$refs.main.focus(); },
  },
};
</script>
