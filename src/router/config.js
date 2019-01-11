// 路由配置文件
// {
//     path: "/page1",
//     name: "page1",
//     meta: {
//       hideInMenu: false,
//       title: "page1-title",
//	     icon: ""
//     },
//     component: Main
//   }
import Main from "@/components/main/main.vue";

export default [
  {
    path: "/",
    name: "main",
    redirect: "/home",
    meta: {
      // hideInMenu: true
    },
    component: Main,
    children: [
      {
        path: "/home",
        name: "home",
        meta: {
          title: "首页",
          icon: "md-home"
        },
        component: () => import("@/views/home/home.vue")
      }
    ]
  },
  {
    path: "/page1",
    name: "大菜单",
    component: Main,
    children: [
      {
        path: "page1",
        name: "page1",
        meta: {
          title: "page11",
          icon: "ios-keypad"
        },
        component: () => import("@/views/page1/page1.vue")
      },
      {
        path: "/page2",
        name: "page2",
        meta: {
          title: "page22",
          icon: "ios-document"
        },
        component: () => import("@/views/page2/page2.vue")
      }
    ]
  },
  {
    path: "/page3",
    name: "page3",
    component: Main,
    children: [
      {
        path: "/page3",
        name: "page3",
        meta: {
          title: "page3标题",
          icon: "ios-document"
        },
        component: () => import("@/views/page3/page3.vue")
      }
    ]
  }
];
