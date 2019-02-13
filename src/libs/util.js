//
import cookie from "js-cookie";
import config from '@/config'

const TOKEN_NAME = ".token";

/**
 *  保存token
 * @param {String} token
 */
export const setAccessToken = token => {
	if (localStorage) {
		localStorage.setItem(TOKEN_NAME, token);
	} else {
		cookie.set(TOKEN_NAME, token, {
			expires: 1
		});
	}
};

/**
 *  获取token
 */
export const getAccessToken = () => {
	if (localStorage) {
		return localStorage.getItem(TOKEN_NAME);
	} else {
		return cookie.get(TOKEN_NAME) || '';
	}
};

/**
 *  设置网页标题
 * @param {*} route 当前路由对象
 */
export const setDocumentTitle = (route) => {
	var title = route.name;
	if (route.meta && route.meta.title)
		title = route.meta.title;
	if (route.name != config.routeName.home) {
		document.title = config.title + " - " + title;
	} else {
		document.title = config.title
	}
}

/**
 *  从路由表中获取菜单
 * @param {Array} list 路由表
 * @param {Array} accessKeys  权限值
 */
export const getMenuListFromRouter = (list, accessKeys) => {
	var result = [];
	forEach(list, item => {
		if (item.children) {
			item.children = getMenuListFromRouter(item.children, accessKeys);
		}
		if (item.meta && item.meta.hideInMenu) {
			// TODO
		} else {
			result.push(item);
		}
	});
	return result;
};

export const forEach = (arr, fn) => {
	if (!arr.length || !fn) return;
	let i = -1;
	let len = arr.length;
	while (++i < len) {
		let item = arr[i];
		fn(item, i, arr);
	}
};
