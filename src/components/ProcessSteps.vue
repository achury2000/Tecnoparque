<template>
  <div class="tp-steps">
    <ul class="tp-steps__list" role="tablist" aria-label="Pasos del camino del prototipo">
      <li v-for="(p, i) in pasos" :key="p.n" role="presentation">
        <button :id="'tp-st-' + i" class="tp-steps__btn" type="button" role="tab" :aria-selected="String(i === actual)" :aria-controls="'tp-stp-' + i" :tabindex="i === actual ? 0 : -1" @click="actual = i" @keydown="onKey($event, i)">
          <span class="tp-steps__n">{{ p.n }}</span>
          <strong>{{ p.nombre }}</strong>
        </button>
      </li>
    </ul>
    <div :id="'tp-stp-' + actual" class="tp-steps__panel" role="tabpanel" :aria-labelledby="'tp-st-' + actual">
      <div class="tp-steps__bar" aria-hidden="true"><i :style="{ width: ((actual + 1) / pasos.length * 100) + '%' }" /></div>
      <p class="tp-hero__tag" style="color:var(--tp-green-d);margin:0">Paso {{ pasos[actual].n }} de {{ pasos.length }}</p>
      <h3 class="tp-h2">{{ pasos[actual].nombre }}</h3>
      <p class="tp-lead">{{ pasos[actual].texto }}</p>
    </div>
  </div>
</template>

<script>
import { pasos } from '../data/contenido.js';
export default {
  name: 'ProcessSteps',
  data() { return { pasos, actual: 0 }; },
  methods: {
    onKey(e, i) {
      const n = this.pasos.length; let to = null;
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') to = (i + 1) % n;
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') to = (i - 1 + n) % n;
      if (to === null) return;
      e.preventDefault(); this.actual = to;
      this.$nextTick(() => { const b = document.getElementById('tp-st-' + to); if (b) b.focus(); });
    },
  },
};
</script>
