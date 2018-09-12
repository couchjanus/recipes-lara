
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

import CategoriesComponent from './components/CategoriesComponent.vue';

const app = new Vue({
    el: '#app',
    data: {
        items: [],
        message: 'Hi Vue!',
        hasError: true,
    },
    components: {
        CategoriesComponent
    },

    render: h => h(CategoriesComponent),

    mounted : function(){
        this.getVueItems();
    },
    created: function () {
        console.log('Значение message: ' + this.message);  // `this` указывает на экземпляр app
    },
    methods : {
        getVueItems: function(){
            axios.get('/vue/news').then((response) => {
                this.items = response.data;
            });
        },

    }
});
