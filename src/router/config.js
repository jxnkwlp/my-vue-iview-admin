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

export default [{
		path: "/login",
		name: "login",
		meta: {
			hideInMenu: true
		},
		component: () => import("@/views/login/login.vue")
	},
	{
		path: "/",
		name: "main",
		redirect: "/home",
		meta: {
			// hideInMenu: true
		},
		component: Main,
		children: [{
			path: "/home",
			name: "home",
			meta: {
				title: "首页",
				icon: "md-home"
			},
			component: () => import("@/views/home/home.vue")
		}]
	},
	{
		path: "/role",
		name: "role",
		component: Main,
		children: [{
			path: "list",
			name: "role_list",
			meta: {
				title: "角色管理",
				icon: "ios-people"
			},
			component: () => import("@/views/role/list.vue")
		}]
	},
	{
		path: "/user",
		name: "user",
		component: Main,
		children: [{
			path: "list",
			name: "user_list",
			meta: {
				title: "用户管理",
				icon: "md-people"
			},
			component: () => import("@/views/user/list.vue")
		}]
	},
	{
		path: "/demopage",
		name: "多级菜单",
		component: Main,
		children: [{
				path: "page1",
				name: "page1",
				meta: {
					title: "page1 title",
					icon: "ios-keypad"
				},
				component: () => import("@/views/demopage/page1.vue")
			},
			{
				path: "page2",
				name: "page2",
				meta: {
					title: "page2 title",
					icon: "ios-document"
				},
				component: () => import("@/views/demopage/page2.vue"),
				children: [{
						path: "page3",
						name: "page3",
						meta: {
							title: "page3 title",
							icon: "ios-keypad"
						},
						component: () => import("@/views/demopage/page3.vue")
					},
					{
						path: "page4",
						name: "page4",
						meta: {
							title: "page4 title",
							icon: "ios-document"
						},
						component: () => import("@/views/demopage/page4.vue"),
						children: [{
								path: "page5",
								name: "page5",
								meta: {
									title: "page5 title",
									icon: "ios-keypad"
								},
								component: () => import("@/views/demopage/page5.vue")
							},
							{
								path: "page6",
								name: "page6",
								meta: {
									title: "page6 title",
									icon: "ios-document"
								},
								component: () => import("@/views/demopage/page6.vue")
							}
						]
					}
				]
			}
		]
	},


	{
		path: '/401',
		name: 'error_401',
		meta: {
			hideInMenu: true
		},
		component: () => import('@/views/error-page/401.vue')
	},
	{
		path: '/500',
		name: 'error_500',
		meta: {
			hideInMenu: true
		},
		component: () => import('@/views/error-page/500.vue')
	},
	{
		path: '*',
		name: 'error_404',
		meta: {
			hideInMenu: true
		},
		component: () => import('@/views/error-page/404.vue')
	},

];
