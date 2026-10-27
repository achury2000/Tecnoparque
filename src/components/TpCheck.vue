<template>
  <div class="tp-field">
    <label class="tp-choice">
      <input type="checkbox" :checked="value" :aria-invalid="error ? 'true' : 'false'" @change="$emit('input', $event.target.checked)" />
      <span><slot /></span>
    </label>
    <p v-if="error" class="tp-field__err" role="alert">{{ error }}</p>
  </div>
</template>

<script>
export default { name: 'TpCheck', props: { value: Boolean, error: { type: String, default: '' } } };
</script>
