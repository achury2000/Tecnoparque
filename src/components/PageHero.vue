<template>
  <section class="tp-hero tp-hero--sm">
    <NetworkBg />
    <div class="tp-wrap">
      <p v-if="tag" class="tp-hero__tag">{{ tag }}</p>
      <h1 class="tp-h1"><slot name="title">{{ title }}</slot></h1>
      <p v-if="lead" class="tp-lead tp-on-dark">{{ lead }}</p>
      <slot />
    </div>
  </section>
</template>

<script>
import NetworkBg from './NetworkBg.vue';
export default { name: 'PageHero', components: { NetworkBg }, props: { title: { type: String, default: '' }, lead: { type: String, default: '' }, tag: { type: String, default: '' } } };
</script>
