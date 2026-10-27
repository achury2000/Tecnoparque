import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import Nodos from './views/Nodos.vue';
import Lineas from './views/Lineas.vue';
import Servicios from './views/Servicios.vue';
import Creditos from './views/Creditos.vue';
import Login from './views/Login.vue';
import Registro from './views/Registro.vue';
import PasswordReset from './views/PasswordReset.vue';
import EmailReset from './views/EmailReset.vue';

Vue.use(VueRouter);

// Las rutas replican las del sitio actual para que el cambio sea transparente.
// `layout: 'auth'` oculta la cabecera y el pie (las vistas de acceso usan su propio diseño).
const routes = [
  { path: '/', name: 'inicio', component: Home, meta: { title: 'Inicio' } },
  { path: '/nodos-tecnoparque', name: 'nodos', component: Nodos, meta: { title: 'Nodos' } },
  { path: '/lineas-tecnoparque', name: 'lineas', component: Lineas, meta: { title: 'Líneas tecnológicas' } },
  { path: '/servicios-tecnoparque', name: 'servicios', component: Servicios, meta: { title: 'Servicios' } },
  { path: '/creditos', name: 'creditos', component: Creditos, meta: { title: 'Créditos' } },
  { path: '/registro', name: 'registro', component: Registro, meta: { title: 'Registro', layout: 'site' } },
  { path: '/login', name: 'login', component: Login, meta: { title: 'Iniciar sesión', layout: 'auth' } },
  { path: '/password/reset', name: 'password-reset', component: PasswordReset, meta: { title: 'Restablecer contraseña', layout: 'auth' } },
  { path: '/email/reset', name: 'email-reset', component: EmailReset, meta: { title: 'Cambiar correo electrónico', layout: 'auth' } },
  { path: '*', redirect: '/' },
];

const router = new VueRouter({
  mode: 'hash', // en Laravel usa 'history' y deja que el servidor sirva la misma vista para estas rutas
  routes,
  scrollBehavior(to, from, saved) {
    if (saved) return saved;
    if (to.hash) return { selector: to.hash, offset: { x: 0, y: 84 } };
    return { x: 0, y: 0 };
  },
});

router.afterEach((to) => {
  document.title = `${to.meta.title || 'Red Tecnoparque Colombia'} | Red Tecnoparque Colombia`;
});

export default router;
