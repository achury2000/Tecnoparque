<template>
  <footer class="tp-footer">
    <div class="tp-wrap tp-footer__grid">
      <div class="tp-footer__about">
        <BrandLogo variant="white" :height="44" />
        <p>Programa de innovación del SENA que acelera proyectos de I+D+i hasta convertirlos en prototipos funcionales.</p>
        <ul class="tp-social" aria-label="Redes sociales">
          <li v-for="r in c.redes" :key="r.nombre"><a :href="r.url" target="_blank" rel="noopener" :aria-label="r.nombre">{{ r.nombre }}</a></li>
        </ul>
      </div>
      <nav aria-label="Navegación del pie">
        <h2 class="tp-footer__h">Explora</h2>
        <router-link to="/">Inicio</router-link>
        <router-link to="/nodos-tecnoparque">Nodos</router-link>
        <router-link to="/lineas-tecnoparque">Líneas</router-link>
        <router-link to="/servicios-tecnoparque">Servicios</router-link>
      </nav>
      <nav aria-label="Acceso y legal">
        <h2 class="tp-footer__h">Acceso</h2>
        <router-link to="/registro">Registrarse</router-link>
        <router-link to="/login">Iniciar sesión</router-link>
        <a :href="c.politica" rel="noopener">Política de privacidad</a>
        <router-link to="/creditos">Créditos</router-link>
      </nav>
      <address class="tp-footer__contact">
        <h2 class="tp-footer__h">Contacto</h2>
        <p>{{ c.direccion }}</p>
        <p><a :href="'mailto:' + c.correo">{{ c.correo }}</a></p>
        <p v-for="t in c.telefonos" :key="t">{{ t }}</p>
        <p class="tp-footer__small">Servicio al ciudadano: <a :href="'mailto:' + c.ciudadano">{{ c.ciudadano }}</a></p>
      </address>
    </div>
    <div class="tp-wrap tp-footer__legal">© {{ year }} SENA – Servicio Nacional de Aprendizaje. Todos los derechos reservados.</div>
  </footer>
</template>

<script>
import BrandLogo from './BrandLogo.vue';
import { contacto } from '../data/contenido.js';

export default { name: 'AppFooter', components: { BrandLogo }, data() { return { c: contacto, year: new Date().getFullYear() }; } };
</script>
