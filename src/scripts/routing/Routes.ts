import VueRouter, {RouteConfig} from 'vue-router';

import home from './routes/home';

const routes: RouteConfig[] = [
    ...home
];

export function createRouter() {
    // Create router
    const router = new VueRouter({
        routes,
        mode: 'history'
    });

    return router;
}