import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import One from "../views/One.vue";
import Two from "../views/Two.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
    // name: "Home",
    // component: Home,
    meta: {
      nav: false,
      keep: false
    }
  },
  {
    path: "/home", // 主页路由
    name: "Home",
    component: Home,
    children: [
      // 嵌套子路由
      {
        path: "one", // 子页面1
        component: One,
        meta: {
          nav: true,
          keep: true
        }
      },
      {
        path: "two", // 子页面2
        component: Two,
        meta: {
          nav: true,
          keep: true
        }
      }
    ],
    meta: {
      nav: true,
      keep: false,
      adminHeader: true,
      adminSideBar: true
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
    component: () => import(/* webpackChunkName: "about" */ "../views/Blog.vue")
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
    component: () => import(/* webpackChunkName: "about" */ "../views/Lang.vue")
  },
  {
    path: "/admin/index",
    name: "index",
    meta: {
      nav: true,
      keep: true,
      adminHeader: false,
      adminSidebar: false
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/admin/Index.vue")
  },
  {
    path: "/unknown",
    name: "unknown",
    meta: {
      nav: false,
      keep: true,
      adminHeader: false,
      adminSidebar: false
    },
    component: () => 
      import("../views/Unknown.vue")
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach(async(to, from, next) => {
  /* 404跳转 */
  if (to.matched.length ===0) {  //如果未匹配到路由
    from.name ? next({ name:from.name }) : next('/unknown');   //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
  } else {
    next();    //如果匹配到正确跳转
  }

})

export default router;
