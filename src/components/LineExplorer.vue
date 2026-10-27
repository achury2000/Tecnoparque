<template>
  <div class="tp-lx">
    <div class="tp-lx__tabs" role="tablist" aria-label="Líneas tecnológicas">
      <button v-for="(l, i) in lineas" :id="'tp-lt-' + l.id" :key="l.id" class="tp-lx__tab" type="button" role="tab" :aria-selected="String(i === actual)" :aria-controls="'tp-lp-' + l.id" :tabindex="i === actual ? 0 : -1" @click="actual = i" @keydown="onKey($event, i)">
        <span class="tp-card__icon"><TpIcon :name="l.icon" :size="22" /></span>{{ l.nombre }}
      </button>
    </div>
    <article :id="'tp-lp-' + linea.id" class="tp-lx__panel" role="tabpanel" :aria-labelledby="'tp-lt-' + linea.id">
      <h2 class="tp-h2">{{ linea.nombre }}</h2>
      <p class="tp-lead">{{ linea.resumen }}</p>
      <div class="tp-lx__cols">
        <div><h3 class="tp-h3" style="font-size:1rem;color:var(--tp-muted);font-family:var(--tp-sans);margin-bottom:12px">Áreas de trabajo</h3><ul class="tp-list"><li v-for="s in linea.subtemas" :key="s">{{ s }}</li></ul></div>
        <div><h3 class="tp-h3" style="font-size:1rem;color:var(--tp-muted);font-family:var(--tp-sans);margin-bottom:12px">Equipos disponibles</h3><ul class="tp-chips"><li v-for="e in linea.equipos" :key="e">{{ e }}</li></ul></div>
      </div>
    </article>
  </div>
</template>

<script>
import TpIcon from './TpIcon.vue';
import { lineas } from '../data/contenido.js';
export default {
  name: 'LineExplorer',
  components: { TpIcon },
  data() { return { lineas, actual: 0 }; },
  computed: { linea() { return this.lineas[this.actual]; } },
  methods: {
    onKey(e, i) {
      const n = this.lineas.length; let to = null;
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') to = (i + 1) % n;
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') to = (i - 1 + n) % n;
      if (to === null) return;
      e.preventDefault(); this.actual = to;
      this.$nextTick(() => { const b = document.getElementById('tp-lt-' + this.lineas[to].id); if (b) b.focus(); });
    },
  },
};
</script>
