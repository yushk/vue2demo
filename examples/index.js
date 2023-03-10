import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import Yxtx from 'main/index.js';
import hljs from 'highlight.js';

import App from './App';
import icon from './icon.json';
import routes from './route.config';

import 'packages/theme-chalk/src/index.scss';
import './assets/styles/common.css';
import './assets/styles/fonts/style.css';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false;
Vue.prototype.$icon = icon; // Icon 列表页用
Vue.use(ElementUI);
Vue.use(Yxtx);
Vue.use(VueRouter);

import demoBlock from './components/demo-block';
// import MainFooter from './components/footer';
import MainHeader from './components/header';
import SideNav from './components/side-nav';
// import FooterNav from './components/footer-nav';

// import {Scrollbar} from 'element-ui';
// Vue.use(Scrollbar);
// Vue.component(Scrollbar.name, Scrollbar);

Vue.component('demo-block', demoBlock);
// Vue.component('main-footer', MainFooter);
Vue.component('main-header', MainHeader);
Vue.component('side-nav', SideNav);
// Vue.component('footer-nav', FooterNav);

import Fragment from 'vue-fragment';
Vue.use(Fragment.Plugin);

import coms from 'main/assets/json/InterfaceReturn.json';
console.log('coms', coms);
coms.forEach((e) => {
  let com1 = Vue.extend({
    props: e.props,
    template: `<fragment>${e.template}</fragment>`
  });
  Vue.component(e.type, com1);
});

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
});
router.afterEach(route => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
});
new Vue({ // eslint-disable-line
  el: '#app',
  router,
  render: h => h(App)
});
