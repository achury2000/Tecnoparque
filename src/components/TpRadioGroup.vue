<template>
  <fieldset class="tp-radios" :aria-describedby="error ? name + '-e' : null">
    <legend>{{ label }}</legend>
    <label v-for="o in options" :key="o" class="tp-radio">
      <input type="radio" :name="name" :value="o" :checked="value === o" @change="$emit('input', o)" />
      <span>{{ o }}</span>
    </label>
    <p v-if="error" :id="name + '-e'" class="tp-field__err" role="alert" style="width:100%">{{ error }}</p>
  </fieldset>
</template>

<script>
let uid = 0;
export default {
  name: 'TpRadioGroup',
  props: { value: { type: String, default: '' }, label: { type: String, required: true }, options: { type: Array, required: true }, error: { type: String, default: '' } },
  data() { uid += 1; return { name: 'tp-rg-' + uid }; },
};
</script>
