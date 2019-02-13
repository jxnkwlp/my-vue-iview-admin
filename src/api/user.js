import http from "@/libs/httpclient";
// import axios from "axios";

export const login = ({
	userName,
	password
}) => {
	const data = {
		userName,
		password
	};
	return http.request({
		url: "api/auth/token",
		method: "post",
		data: data
	});
};

export const logout = ({
	token
}) => {
	const data = {
		token
	};
	return http.request({
		url: "api/auth/logout",
		method: "post",
		data: data
	});
};

export const getUserInfo = ({
	token
}) => {
	const data = {
		token
	};
	return http.request({
		url: "api/auth/userinfo",
		method: "get",
		data: data
	});
};
