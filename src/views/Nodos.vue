<template>
  <div>
    <PageHero tag="Presencia nacional" title="Un nodo cerca de ti." lead="Busca el nodo Tecnoparque de tu ciudad o departamento." />
    <section class="tp-sec">
      <div class="tp-wrap">
        <div class="tp-search">
          <TpInput v-model="q" label="Buscar nodo" icon="pin" placeholder="Ciudad, departamento o nombre" autocomplete="off" />
        </div>
        <p v-if="cargando" class="tp-note" role="status">Cargando nodos…</p>
        <div v-else-if="filtrados.length" class="tp-grid">
          <article v-for="n in filtrados" :key="n.id" class="tp-node">
            <span class="tp-node__dot" aria-hidden="true" />
            <div><h2 class="tp-h3">{{ n.nombre }}</h2><small>{{ n.ciudad }}, {{ n.departamento }}</small></div>
            <router-link to="/registro" class="tp-btn tp-btn--sm tp-btn--outline">Registrarme</router-link>
          </article>
        </div>
        <p v-else class="tp-note" role="status">No encontramos nodos con “{{ q }}”.</p>
        <p class="tp-note" style="margin-top:24px">Estamos conectando más nodos. Los datos se cargan desde <code>api.nodos()</code>, así que aparecerán aquí automáticamente.</p>
      </div>
    </section>
  </div>
</template>

<script>
import PageHero from '../components/PageHero.vue';
import TpInput from '../components/TpInput.vue';
import { api } from '../services/api.js';
export default {
  name: 'Nodos',
  components: { PageHero, TpInput },
  data() { return { q: '', nodos: [], cargando: true }; },
  computed: {
    filtrados() {
      const t = this.q.trim().toLowerCase();
      return t ? this.nodos.filter((n) => (n.nombre + ' ' + n.ciudad + ' ' + n.departamento).toLowerCase().indexOf(t) !== -1) : this.nodos;
    },
  },
  created() { api.nodos().then((n) => { this.nodos = n; }).finally(() => { this.cargando = false; }); },
};
</script>
