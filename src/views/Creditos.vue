<template>
  <div>
    <PageHero tag="Créditos" title="Las personas detrás de la plataforma." lead="Proyecto desarrollado en el Tecnoparque Nodo Medellín con recursos de SENNOVA." />
    <section class="tp-sec">
      <div class="tp-wrap">
        <div class="tp-grid tp-grid--2" style="margin-bottom:56px">
          <article v-for="e in c.entidades" :key="e.nombre" class="tp-card"><h2 class="tp-h3">{{ e.nombre }}</h2><p>{{ e.detalle }}</p></article>
        </div>
        <div class="tp-team">
          <div v-for="a in c.equipo" :key="a.area" class="tp-team__area">
            <h2 class="tp-h3">{{ a.area }}</h2>
            <ul class="tp-people"><li v-for="p in a.personas" :key="p.nombre + p.rol"><strong>{{ p.nombre }}</strong><span>{{ p.rol }}</span></li></ul>
          </div>
        </div>
      </div>
    </section>
    <section class="tp-sec tp-sec--white">
      <div class="tp-wrap">
        <h2 class="tp-h2" style="margin-bottom:24px">Referencias</h2>
        <ol class="tp-refs"><li v-for="r in c.referencias" :key="r">{{ r }}</li></ol>
      </div>
    </section>
  </div>
</template>

<script>
import PageHero from '../components/PageHero.vue';
import { creditos } from '../data/contenido.js';
export default { name: 'Creditos', components: { PageHero }, data() { return { c: creditos }; } };
</script>
