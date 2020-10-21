import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import One from "../views/One.vue";
import Two from "../views/Two.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: '/home',
    // name: "Home",
    // component: Home,
    meta: {
      nav: true,
      keep: true
    }
  },
  {
    path: '/home', // 主页路由
    name: 'Home',
    component: Home,
    children:[ // 嵌套子路由
        {
          path:'one', // 子页面1
          component:One,
          meta: {
            nav: true,
            keep: true
          }
        },
        {
          path:'two', // 子页面2
          component:Two,
          meta: {
            nav: true,
            keep: true
          }
        },
    ],
    meta: {
      nav: true,
      keep: true
    }
  },
  {
    path: "/about",
    name: "About",
    // component: About,
    meta: {
      nav: true,
      keep: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/blog",
    name: "Blog",
    meta: {
      nav: true,
      keep: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Blog.vue")
  },
    {
    path: "/Lang",
    name: "Lang",
    meta: {
      nav: true,
      keep: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Lang.vue")
  },
];

const router = new VueRouter({
  routes
});

export default router;
