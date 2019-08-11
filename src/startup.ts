import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import './scripts/startup/VueModules';

import {createRouter} from './scripts/routing/Routes';

import App from './components/App.vue';

export default async function () {
    const router = createRouter();
    const vuetify = new Vuetify({
        theme: {
            dark: true,
            themes: {
                dark: {
                    primary: '#ee1515',
                    secondary: '#222224',
                    accent: '#ffe441'
                }
            }
        },
        icons: {
            iconfont: 'mdi'
        }
    });

    // Mount router to page
    new Vue({
        el: `#vue-entry`,
        router,
        vuetify,
        render: h => h(App)
    });

    (window as any).config = AppConfig;
}