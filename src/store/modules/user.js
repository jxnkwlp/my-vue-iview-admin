import router from "@/router";
import routers from "@/router/config";
import config from "@/config";
import {
	getAccessToken,
	setAccessToken
} from "@/libs/util";

export default {
	state: {
		userName: "",
		displayName: "",
		token: getAccessToken(),
		accessKeys: [],
		hasUserInfo: false
	},
	getters: {},
	mutations: {
		setUserName(state, value) {
			state.userName = value;
		},
		setToken(state, value) {
			state.token = value;
			setAccessToken(value);
		},
		setAccessKeys(state, value) {
			state.accessKeys = value;
		},
		setHasUserInfo(state, value) {
			state.hasUserInfo = value;
		}
	},
	actions: {
		/**
		 *  保存token
		 * @param {string} token
		 */
		saveAccessToken({
			commit
		}, {
			token
		}) {
			return new Promise((resolve, reject) => {
				if (token) {
					commit("setToken", token);
					commit("setHasUserInfo", false);
					resolve(token);
				} else {
					reject();
				}
			});
		},

		/**
		 *  清理token
		 */
		clearToken({
			commit
		}) {
			return new Promise((resolve, reject) => {
				commit("setToken", "");
				commit("setAccessKeys", []);
				commit("setHasUserInfo", false);
				resolve();
			});
		},

		/**
		 *  更新当前用户信息
		 */
		updateUserInfo({
			commit
		}, {
			data
		}) {
			return new Promise((resolve, reject) => {
				commit("setUserName", data.userName);
				commit("setAccessKeys", []);
				commit("setHasUserInfo", true);
				resolve(data);
			});

		}
	}
};
