<style lang="less">
@import url(./main.less);
</style>
<template>
  <Layout :style="{minHeight: '100vh'}" class="main">
    <!-- 侧边栏 -->
    <Sider :width="256" :style="{overflow: 'hidden'}" class="left-sider">
      <Header class="left-sider-header">XXXX</Header>

      <side-menu
        ref="sideMenu"
        :menuList="menuList"
        :active-name="$route.name"
        :open-menus="menuOpenList"
        @on-select="handleMenuRoute"
      ></side-menu>
    </Sider>
    <!-- 左侧 -->
    <Layout>
      <!-- 头部 -->
      <Header
        class="top-header"
        :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"
      >
        <user class="top-header-user"></user>
      </Header>
      <Content :style="{padding: '16px 16px'}">
        <!-- 内容区 -->
        <keep-alive>
          <router-view/>
        </keep-alive>
      </Content>
    </Layout>
  </Layout>
</template>
<script>
import { getMenuList } from "@/libs/tools";

import SideMenu from "./components/side-menu/side-menu.vue";
import User from "./components/user/user.vue";

export default {
  components: {
    SideMenu,
    User
  },
  data() {
    return {
      isCollapsed: false
    };
  },
  computed: {
    menuitemClasses: function() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    },
    menuList: function() {
      return getMenuList([]);
    },
    menuOpenList: function() {
      return this.$route.matched
        .map(item => item.name)
        .filter(item => item !== this.$route.name);
    }
  },
  methods: {
    handleMenuRoute(route) {
      let { name, params, query } = {};
      if (typeof route === "string") name = route;
      else {
        name = route.name;
        params = route.params;
        query = route.query;
      }
      if (name.indexOf("isTurnByHref_") > -1) {
        window.open(name.split("_")[1]);
        return;
      }
      this.$router.push({
        name,
        params,
        query
      });
    }
  },
  watch: {
    // 页面地址改变
    $route(newRoute) {
      const { name, query, params, meta } = newRoute;
      this.$refs.sideMenu.updateOpenName(newRoute.name);
    }
  },
  mounted() {
    // 首次打开
    this.$refs.sideMenu.updateOpenName(this.$route);
  }
};
</script>
