<template>
  <img class="tp-logo" :src="src" :height="height" alt="Red Tecnoparque Colombia, SENA" />
</template>

<script>
import white from '../assets/logo-white.png';
import green from '../assets/logo-green.png';

// variant="white" para fondos oscuros, "green" para fondos claros.
// En tu proyecto puedes pasar `src` con tus SVG (img/logo-tecnoparque-white.svg, img/logo-sirt-green.svg...).
export default {
  name: 'BrandLogo',
  props: { variant: { type: String, default: 'white' }, height: { type: [Number, String], default: 44 }, srcOverride: { type: String, default: '' } },
  computed: { src() { return this.srcOverride || (this.variant === 'green' ? green : white); } },
};
</script>
