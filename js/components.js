import Vue from 'vue';

Vue.component('test-component', (resolve) => {
    import('./components/test-component.vue')
        .then((AsyncComponent) => {
            resolve(AsyncComponent.default);
        });
});
