import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/index.vue";
import ViewButton from "@/views/ButtonView.vue";
import ViewTypography from "@/views/TypographyView.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/button',
            name: 'Button',
            component: ViewButton,
        },
        {
            path: '/typography',
            name: 'Typography',
            component: ViewTypography,
        },
    ],
});

export default router;
