<style lang="less" scoped>
@import url(./login.less);
</style>
<template>
  <div class="login-page">
    <Card class="login-form" icon="log-in" title="欢迎登录" :bordered="false">
      <Form ref="loginForm" :model="loginForm" :rules="rules" @keydown.enter.native="handleSubmit">
        <FormItem prop="userName">
          <Input v-model="loginForm.userName" placeholder="请输入用户名">
            <span slot="prepend">
              <Icon :size="16" type="ios-person"></Icon>
            </span>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="loginForm.password" placeholder="请输入密码">
            <span slot="prepend">
              <Icon :size="14" type="md-lock"></Icon>
            </span>
          </Input>
        </FormItem>
        <FormItem>
          <Button @click="handleSubmit" type="primary" long :loading="submitLoading">登录</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import * as userApi from "@/api/user";
export default {
  computed: {
    rules() {
      return {
        userName: [
          { required: true, message: "账号不能为空", trigger: "blur" },
          {
            type: "string",
            max: 20,
            message: "最大可输入20个字符",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          {
            type: "string",
            max: 20,
            message: "最大可输入20个字符",
            trigger: "blur"
          }
        ]
      };
    }
  },
  data() {
    return {
      loginForm: {
        userName: "admin",
        password: "123456"
      },
      submitLoading: false
    };
  },
  methods: {
    ...mapActions(["saveAccessToken"]),
    handleSubmit() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.submitLoading = true;

          userApi
            .login(this.loginForm)
            .then(res => {
              var data = res.data;
              if (data.token) {
                this.saveAccessToken({ token: data.token })
                  .catch(error => {
                    this.$Modal.error({
                      title: "提示",
                      content: "系统错误"
                    });
                  })
                  .then(() => {
                    this.$router.push({
                      name: "home"
                    });
                  });
              } else {
                this.$Modal.error({
                  title: "提示",
                  content: data.message || "系统错误"
                });
              }
            })
            .catch(error => {
              this.$Modal.error({
                title: "提示",
                content: "系统错误"
              });
              console.error(error);
            })
            .then(res => {
              this.submitLoading = false;
            });
        }
      });
    }
  }
};
</script>
