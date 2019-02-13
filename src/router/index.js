import Vue from "vue";
import Router from "vue-router";
import iView from "iview";
import routers from "./config";
import config from "@/config";
import store from "@/store";
import {
	getUserInfo
} from "@/api/user";
import {
	getAccessToken,
	setAccessToken,
	setDocumentTitle
} from "@/libs/util";

const HOME_NAME = config.routeName.home;
const LOGIN_NAME = config.routeName.login;

Vue.use(Router);

const router = new Router({
	routes: routers,
	mode: "history"
});

const turnTo = (to, next) => {
	// TODO 权限判断
	next();
};

router.beforeEach((to, from, next) => {
	iView.LoadingBar.start();
	var token = getAccessToken();

	if (!token && to.name !== LOGIN_NAME) {
		// 无token,不是登陆页
		next({
			name: LOGIN_NAME
		});
	} else if (!token && to.name === LOGIN_NAME) {
		// 无token, 是登陆页
		next();
	} else if (token && to.name === LOGIN_NAME) {
		// 有token , 是登陆页
		next({
			name: HOME_NAME
		});
	} else {
		//  获取用户信息
		var hasUserInfo = store.state.user.hasUserInfo;
		if (hasUserInfo) {
			turnTo(to, next);
		} else {
			getUserInfo({
				token
			}).then((res) => {
				store.dispatch('updateUserInfo', {
					data: res.data
				}).then(() => {
					turnTo(to, next);
				}).catch(error => {
					console.log(error);
					// 清理
					setAccessToken("");
					next({
						name: LOGIN_NAME
					});
				})
			}).catch(error => {
				console.log(error);
				// 清理
				setAccessToken("");
				next({
					name: LOGIN_NAME
				});
			})
		}

	}
});

router.afterEach(to => {
	setDocumentTitle(to, router.app);
	iView.LoadingBar.finish();
	window.scrollTo(0, 0);
});

export default router;
