import Vue from "vue";
import Router from "vue-router"

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("@/views/Home")
        },
        {
            path: "/:username",
            name: "user-profile",
            component: () => import("@/views/UserProfile")
        },
        {
            path: "/p/:shortcode",
            name: "post",
            component: () => import("@/views/Post")
        },
        {
            path: "/explore/tags/:tagName",
            name: "tag",
            component: () => import("@/views/explore/Tag")
        },
        {
            path: "/explore/locations/:locationId/:locationName",
            name: "location",
            component: () => import("@/views/explore/Location")
        }
    ]
})
