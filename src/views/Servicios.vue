<template>
  <div>
    <PageHero tag="Servicios" title="Todo lo que necesitas, sin costo." lead="Los servicios de la Red Tecnoparque son 100% gratuitos para quienes tienen una idea de base tecnológica." />
    <section class="tp-sec">
      <div class="tp-wrap">
        <div class="tp-rows">
          <article v-for="s in servicios" :key="s.nombre" class="tp-row">
            <span class="tp-card__icon"><TpIcon :name="s.icon" :size="26" /></span>
            <h2 class="tp-h3">{{ s.nombre }}</h2>
            <p>{{ s.texto }}</p>
          </article>
        </div>
      </div>
    </section>
    <section class="tp-sec tp-sec--navy">
      <NetworkBg />
      <div class="tp-wrap" style="position:relative">
        <div class="tp-sec__head"><h2 class="tp-h2">Cómo acceder</h2><p class="tp-lead tp-on-dark">Cuatro etapas, desde tu registro hasta el escalamiento.</p></div>
        <ProcessSteps />
        <div class="tp-hero__actions">
          <a :href="'mailto:' + c.correo" class="tp-btn tp-btn--lg tp-btn--ghost">Contactar un asesor</a>
        </div>
      </div>
    </section>
    <CtaBand />
  </div>
</template>

<script>
import PageHero from '../components/PageHero.vue';
import NetworkBg from '../components/NetworkBg.vue';
import TpIcon from '../components/TpIcon.vue';
import ProcessSteps from '../components/ProcessSteps.vue';
import CtaBand from '../components/CtaBand.vue';
import { servicios, contacto } from '../data/contenido.js';
export default { name: 'Servicios', components: { PageHero, NetworkBg, TpIcon, ProcessSteps, CtaBand }, data() { return { servicios, c: contacto }; } };
</script>
