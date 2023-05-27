import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () =>
            import(/* webpackChunkName: 'home' */ "../views/Home.vue"),
    },
    {
        path: "/list",
        name: "List",
        component: () =>
            import(/* webpackChunkName: 'list' */ "../views/List.vue"),
    },
    {
        path: "/details/:id",
        name: "Details",
        component: () =>
            import(/* webpackChunkName: 'details' */ "../views/Details.vue"),
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
            import(/* webpackChunkName: 'details' */ "../views/Login.vue"),
    },
    {
        path: "/signup",
        name: "Signup",
        component: () =>
            import(/* webpackChunkName: 'details' */ "../views/SignUp.vue"),
    },
];

const router = createRouter({
    history: createWebHistory("/"),
    routes,
    scrollBehavior() {
        document.getElementById("app").scrollIntoView();
    },
});

export default router;
