<template>
  <svg class="tp-network" :class="{ 'tp-network--soft': soft }" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
    <g class="tp-network__lines">
      <line v-for="(l, i) in lines" :key="'l' + i" :x1="l.a[0]" :y1="l.a[1]" :x2="l.b[0]" :y2="l.b[1]" :style="{ animationDelay: (i * 70) + 'ms' }" />
    </g>
    <g class="tp-network__nodes">
      <circle v-for="(n, i) in nodes" :key="'n' + i" :cx="n[0]" :cy="n[1]" :r="n[2]" :class="{ 'is-accent': i % 5 === 0 }" />
    </g>
  </svg>
</template>

<script>
// Red de nodos generada de forma determinista (siempre se ve igual). Es el motivo de la marca: "Red" Tecnoparque.
const nodes = [[90, 90, 4], [230, 170, 3], [380, 70, 5], [520, 190, 3], [640, 90, 4], [790, 200, 6], [930, 80, 3], [1090, 170, 4],
  [150, 320, 3], [310, 380, 5], [470, 330, 3], [600, 440, 4], [760, 360, 3], [900, 470, 5], [1060, 350, 3], [1140, 480, 4],
  [60, 500, 3], [250, 540, 4], [420, 520, 3], [700, 540, 3], [980, 560, 4]];
const edges = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [1, 9], [3, 10], [5, 12], [7, 14], [8, 9], [9, 10], [10, 11], [11, 12], [12, 13], [13, 14], [14, 15], [8, 16], [9, 17], [10, 18], [11, 19], [13, 20], [0, 8], [4, 12], [6, 13], [2, 10]];
export default {
  name: 'NetworkBg',
  props: { soft: { type: Boolean, default: false } },
  data() { return { nodes, lines: edges.map(([a, b]) => ({ a: nodes[a], b: nodes[b] })) }; },
};
</script>
