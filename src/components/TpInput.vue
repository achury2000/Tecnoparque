<template>
  <div class="tp-field">
    <label class="tp-field__label" :for="id">{{ label }}<small v-if="optional"> (opcional)</small></label>
    <div class="tp-field__box">
      <TpIcon v-if="icon" :name="icon" :size="20" />
      <input
        :id="id" class="tp-input" :class="{ 'has-icon': icon }" :type="shown ? 'text' : type" :value="value"
        :autocomplete="autocomplete" :placeholder="placeholder" :disabled="disabled" :inputmode="inputmode" :maxlength="maxlength"
        :aria-invalid="error ? 'true' : 'false'" :aria-describedby="describedby"
        @input="$emit('input', $event.target.value)" @blur="$emit('blur')"
      />
      <button v-if="type === 'password'" type="button" class="tp-field__toggle" :aria-label="shown ? 'Ocultar contraseña' : 'Mostrar contraseña'" :aria-pressed="String(shown)" @click="shown = !shown">
        <TpIcon :name="shown ? 'eyeOff' : 'eye'" :size="20" />
      </button>
    </div>
    <p v-if="hint && !error" :id="id + '-h'" class="tp-field__hint">{{ hint }}</p>
    <p v-if="error" :id="id + '-e'" class="tp-field__err" role="alert">{{ error }}</p>
  </div>
</template>

<script>
import TpIcon from './TpIcon.vue';
let uid = 0;
// Uso: <TpInput v-model="form.correo" label="Correo" type="email" :error="errores.correo" @blur="validarCampo('correo')" />
export default {
  name: 'TpInput',
  components: { TpIcon },
  props: {
    value: { type: [String, Number], default: '' }, label: { type: String, required: true }, type: { type: String, default: 'text' },
    icon: { type: String, default: '' }, error: { type: String, default: '' }, hint: { type: String, default: '' },
    autocomplete: { type: String, default: 'off' }, placeholder: { type: String, default: '' }, inputmode: { type: String, default: null },
    maxlength: { type: [Number, String], default: null }, optional: Boolean, disabled: Boolean,
  },
  data() { uid += 1; return { id: 'tp-in-' + uid, shown: false }; },
  computed: { describedby() { return this.error ? this.id + '-e' : (this.hint ? this.id + '-h' : null); } },
};
</script>
