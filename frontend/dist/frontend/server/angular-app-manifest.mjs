
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/register"
  },
  {
    "renderMode": 2,
    "route": "/films"
  }
],
  assets: {
    'index.csr.html': {size: 4971, hash: 'dda88b87491ff66695bf8df82aa51eaf53687e2ea03bf6ea8705f9ce96a9212a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1070, hash: '89682be6f09dfece4ec6a4a74e3e49bb56487111b966d7b727f3bd39e40f291b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 19678, hash: '8ad10375072bcdc59320b262fd56024fc8f3d53775e7f9f27207d6dbb569f7a6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 23002, hash: '7d0d6993219d7543a34c1d7f341be8ccf77771ae7420015b6c7b0c7b34f28bad', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 22739, hash: 'a39dcc1e3b650e31708396b9ad48b9065648a8e65459dcba0d43a419a2a06e11', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'films/index.html': {size: 20720, hash: 'bd6f712687851037a7f8f617798a6479536045e39981cc7682197906cdaa5d08', text: () => import('./assets-chunks/films_index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
