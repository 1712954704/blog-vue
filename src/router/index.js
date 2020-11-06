import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import One from "../views/One.vue";
import Two from "../views/Two.vue";
import Admin from "../views/admin/Admin.vue";
import Index from "../views/admin/Index.vue";
import Login from "../views/admin/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
    // name: "Home",
    // component: Home,
  },
  {
    path: "/home", // 主页路由
    name: "Home",
    component: Home,
    children: [
      // 嵌套子路由
      {
        path: "one", // 子页面1
        name: "One",
        component: One,
        meta: {}
      },
      {
        path: "two", // 子页面2
        name: "Two",
        component: Two,
        meta: {}
      }
    ],
    meta: {}
  },
  {
    path: "/about",
    name: "About",
    // component: About,
    meta: {},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/blog",
    name: "Blog",
    meta: {},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Blog.vue")
  },
  {
    path: "/Lang",
    name: "Lang",
    meta: {},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Lang.vue")
  },
  {
    path: "/admin",
    redirect: "/admin/index",
    component: Admin,
    children: [
      {
        path: "index",
        name: "Index",
        meta: {},
        component: Index
      }
    ]
  },
  {
    path: "/admin/login",
    name: "Login",
    meta: {
      adminHeader: true,
      adminSideBar: true,
      tail: true
    },
    component: Login
  },
  {
    path: "/unknown",
    name: "unknown",
    meta: {
      tail: true
    },
    component: () => import("../views/Unknown.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach(async (to, from, next) => {
  /* 404跳转 */
  if (to.matched.length === 0) {
    //如果未匹配到路由
    from.name ? next({ name: from.name }) : next("/unknown"); //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
  } else {
    next(); //如果匹配到正确跳转
  }
});

export default router;
