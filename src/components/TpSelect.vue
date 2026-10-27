<template>
  <div class="tp-field">
    <label class="tp-field__label" :for="id">{{ label }}<small v-if="optional"> (opcional)</small></label>
    <select :id="id" class="tp-input" :value="value" :disabled="disabled" :aria-invalid="error ? 'true' : 'false'" :aria-describedby="error ? id + '-e' : null" @change="$emit('input', $event.target.value)" @blur="$emit('blur')">
      <option value="">{{ placeholder }}</option>
      <option v-for="o in options" :key="o" :value="o">{{ o }}</option>
    </select>
    <p v-if="error" :id="id + '-e'" class="tp-field__err" role="alert">{{ error }}</p>
  </div>
</template>

<script>
let uid = 0;
export default {
  name: 'TpSelect',
  props: { value: { type: String, default: '' }, label: { type: String, required: true }, options: { type: Array, default: () => [] }, error: { type: String, default: '' }, placeholder: { type: String, default: 'Selecciona una opción' }, optional: Boolean, disabled: Boolean },
  data() { uid += 1; return { id: 'tp-sel-' + uid }; },
};
</script>
