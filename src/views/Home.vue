<template>
  <div>
    <section class="tp-hero">
      <NetworkBg />
      <div class="tp-wrap">
        <p class="tp-hero__tag">Programa de innovación SENA</p>
        <h1 class="tp-h1">Tu idea, convertida en <em>prototipo funcional.</em></h1>
        <p class="tp-lead tp-on-dark">Aceleramos proyectos de I+D+i materializados en prototipos funcionales y fomentamos el emprendimiento de base tecnológica para todos los colombianos.</p>
        <div class="tp-hero__actions">
          <router-link to="/registro" class="tp-btn tp-btn--lg">Registra tu idea <TpIcon name="arrowR" :size="20" /></router-link>
          <router-link to="/servicios-tecnoparque" class="tp-btn tp-btn--lg tp-btn--ghost">Conoce los servicios</router-link>
        </div>
        <div class="tp-hero__stats">
          <div class="tp-stat"><strong>4</strong><span>líneas tecnológicas</span></div>
          <div class="tp-stat"><strong>10</strong><span>áreas de especialización</span></div>
          <div class="tp-stat"><strong>100%</strong><span>gratuito</span></div>
        </div>
      </div>
    </section>

    <section class="tp-sec tp-sec--white">
      <div class="tp-wrap">
        <div class="tp-sec__head">
          <h2 class="tp-h2">Cuatro líneas para construir casi cualquier cosa</h2>
          <p class="tp-lead">Cada nodo reúne laboratorios, equipos y expertos agrupados por línea tecnológica.</p>
        </div>
        <div class="tp-grid tp-grid--2">
          <router-link v-for="l in lineas" :key="l.id" to="/lineas-tecnoparque" class="tp-card tp-card--link">
            <span class="tp-card__icon"><TpIcon :name="l.icon" :size="26" /></span>
            <h3 class="tp-h3">{{ l.nombre }}</h3>
            <p>{{ l.resumen }}</p>
          </router-link>
        </div>
      </div>
    </section>

    <section class="tp-sec tp-sec--navy">
      <NetworkBg />
      <div class="tp-wrap" style="position:relative">
        <div class="tp-sec__head">
          <h2 class="tp-h2">El camino del prototipo</h2>
          <p class="tp-lead tp-on-dark">De la idea al mercado en cuatro etapas. Toca cada paso.</p>
        </div>
        <ProcessSteps />
      </div>
    </section>

    <section class="tp-sec">
      <div class="tp-wrap">
        <div class="tp-sec__head">
          <h2 class="tp-h2">Áreas de especialización</h2>
          <p class="tp-lead">Desde la agroindustria hasta la animación digital: encuentra el área de tu proyecto.</p>
        </div>
        <ul class="tp-chips"><li v-for="a in especializacion" :key="a">{{ a }}</li></ul>
      </div>
    </section>

    <CtaBand />
  </div>
</template>

<script>
import NetworkBg from '../components/NetworkBg.vue';
import TpIcon from '../components/TpIcon.vue';
import ProcessSteps from '../components/ProcessSteps.vue';
import CtaBand from '../components/CtaBand.vue';
import { lineas, especializacion } from '../data/contenido.js';
export default { name: 'Home', components: { NetworkBg, TpIcon, ProcessSteps, CtaBand }, data() { return { lineas, especializacion }; } };
</script>
