<template>
  <div>
    <PageHero tag="Líneas tecnológicas" title="Cuatro líneas, un mismo objetivo: prototipar." lead="Elige una línea para ver sus áreas de trabajo y los equipos que tendrás a disposición." />
    <section class="tp-sec"><div class="tp-wrap"><LineExplorer /></div></section>
    <section class="tp-sec tp-sec--white">
      <div class="tp-wrap">
        <div class="tp-sec__head"><h2 class="tp-h2">Otras áreas de trabajo</h2><p class="tp-lead">Además de las cuatro líneas, la red trabaja en estas áreas.</p></div>
        <ul class="tp-chips"><li v-for="a in otrasAreas" :key="a">{{ a }}</li></ul>
      </div>
    </section>
    <CtaBand />
  </div>
</template>

<script>
import PageHero from '../components/PageHero.vue';
import LineExplorer from '../components/LineExplorer.vue';
import CtaBand from '../components/CtaBand.vue';
import { otrasAreas } from '../data/contenido.js';
export default { name: 'Lineas', components: { PageHero, LineExplorer, CtaBand }, data() { return { otrasAreas }; } };
</script>
