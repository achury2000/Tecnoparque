<template>
  <svg class="tp-icon" :width="size" :height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
    <g v-html="paths[name] || paths.dot" />
  </svg>
</template>

<script>
// Iconos propios en trazo (sin dependencias). Para agregar uno: añade su SVG interno aquí.
const paths = {
  dot: '<circle cx="12" cy="12" r="3"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/>',
  lock: '<rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/><circle cx="12" cy="15.5" r="1.2"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4.5 20.5c1-4 4-6 7.5-6s6.5 2 7.5 6"/>',
  id: '<rect x="3" y="5" width="18" height="14" rx="2.5"/><circle cx="9" cy="11" r="2.2"/><path d="M5.8 16c.6-1.6 1.8-2.4 3.2-2.4s2.6.8 3.2 2.4M14.5 10h4M14.5 13.5h3"/>',
  calendar: '<rect x="3.5" y="5" width="17" height="15" rx="2.5"/><path d="M8 3v4M16 3v4M3.5 10h17"/>',
  phone: '<path d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5z"/>',
  pin: '<path d="M12 21s6.5-5.7 6.5-11A6.5 6.5 0 0 0 5.5 10C5.5 15.3 12 21 12 21z"/><circle cx="12" cy="10" r="2.3"/>',
  home: '<path d="M4 11.5 12 4l8 7.5V20H4z"/><path d="M10 20v-5h4v5"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  arrowR: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  arrowL: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  chevD: '<path d="m6 9 6 6 6-6"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.8"/>',
  eyeOff: '<path d="M3 3l18 18M10 5.7a8.7 8.7 0 0 1 2-.2c6 0 9.5 6.5 9.5 6.5a16 16 0 0 1-3.1 3.9M6.4 7.6A16 16 0 0 0 2.5 12S6 18.5 12 18.5a9.5 9.5 0 0 0 4-.9M9.9 9.9a3 3 0 0 0 4.2 4.2"/>',
  bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>',
  flask: '<path d="M9.5 3h5M10 3v6L4.8 18a2 2 0 0 0 1.8 3h10.8a2 2 0 0 0 1.8-3L14 9V3"/><path d="M7.5 15h9"/>',
  chip: '<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/>',
  cube: '<path d="M12 3 20 7.5v9L12 21 4 16.5v-9z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9"/>',
  vr: '<path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-3.5l-1.7-2.5h-3.6L8.5 17H5a2 2 0 0 1-2-2z"/><circle cx="8.5" cy="12" r="1"/><circle cx="15.5" cy="12" r="1"/>',
  support: '<path d="M4 13v-1a8 8 0 0 1 16 0v1"/><rect x="3" y="13" width="4" height="6" rx="1.5"/><rect x="17" y="13" width="4" height="6" rx="1.5"/><path d="M19 19c0 1.5-2 2-4.5 2"/>',
  users: '<circle cx="9" cy="8.5" r="3.3"/><path d="M3 19.5c.8-3.3 3.2-5 6-5s5.2 1.7 6 5"/><circle cx="17" cy="9.5" r="2.5"/><path d="M17 14.5c2 .2 3.5 1.6 4 4"/>',
  wrench: '<path d="M14.5 6.5a4 4 0 0 0 5 5l-9.6 9.6a2.1 2.1 0 0 1-3-3z"/><path d="m14.5 6.5 3-3"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  rocket: '<path d="M14 4c3 0 6 .5 6 .5s.5 3 .5 6c0 4-4 7-7 8l-4-4c1-3 4-7 8-7z" transform="translate(-2 1)"/><circle cx="14.5" cy="9.5" r="1.4"/><path d="M6 15c-1.5 1-2 3-2 5 2 0 4-.5 5-2"/>',
  shield: '<path d="M12 3 5 6v5.5c0 4.5 3 8 7 9.5 4-1.5 7-5 7-9.5V6z"/><path d="m9 12 2.2 2.2L15.5 10"/>',
  fingerprint: '<path d="M6 11a6 6 0 0 1 12 0M9 20c-1-2-1.2-4-1.2-6.2a4.2 4.2 0 0 1 8.4 0c0 2.5.4 4.3 1.3 6M12 12v2.5c0 2 .3 3.5.9 5M6 15.5c-.2 1.5 0 3 .5 4.5"/>',
  gift: '<rect x="3.5" y="9" width="17" height="11" rx="2"/><path d="M12 9v11M3.5 13h17M12 9c-1.5-4-5-4.5-5-2.2C7 8.4 9 9 12 9zm0 0c1.5-4 5-4.5 5-2.2 0 1.6-2 2.2-5 2.2z"/>',
  book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5"/>',
  external: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 19V8a1.5 1.5 0 0 1 1.5-1.5H10"/>',
};
export default {
  name: 'TpIcon',
  props: { name: { type: String, required: true }, size: { type: [Number, String], default: 22 } },
  data() { return { paths }; },
};
</script>
