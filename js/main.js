import Vue from 'vue';
window.Vue = require('vue');
import Vuex from 'vuex';
Vue.use(Vuex);
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import axios from 'axios';
Vue.prototype.$axios = axios;
Vue.use(require('vue-resource'));
Vue.http.options.emulateJSON = true;
Vue.http.options.crossOrigin = true;

import routes from './routes.js';
import VModal from 'vue-js-modal';
Vue.use(VModal, {
    dialog: true,
    dynamic: true
});
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);
import vSelect from 'vue-select';
Vue.component('v-select', vSelect);
import "./components.js";

const store = new Vuex.Store({
    state: {
        cartCount: 0
    },
    mutations: {
        change(state, obj) {
            state[obj.name] = obj.val;
        },
    },
    getters: {},
});

import test_mixin from "./mixins/test.js";
Vue.mixin(test_mixin);

const router = new VueRouter({mode: 'history', routes});

 new Vue({
     router,
     store,
 }).$mount('#app');
