<template>
  <div class="menu-list-container">
    <Menu
      ref="menu"
      theme="dark"
      :accordion="true"
      width="auto"
      :active-name="activeName"
      :open-names="opendMenuNames"
      @on-select="HandleMenuSelect"
    >
      <template v-for="item in menuList">
        <side-menu-item :key="`menu-${item.name}`" :menu="item"></side-menu-item>
      </template>
    </Menu>
  </div>
</template>
<script>
import SideMenuItem from "./side-menu-item.vue";
export default {
  name: "SideMenu",
  components: {
    SideMenuItem
  },
  props: {
    menuList: {
      type: Array,
      default() {
        return [];
      }
    },
    activeName: {
      type: String,
      default() {
        return "";
      }
    },
    openMenus: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  mounted() {},
  created() {},
  data() {
    return {
      opendMenuNames: []
    };
  },
  methods: {
    HandleMenuSelect(name) {
      this.$emit("on-select", name);
    },

    getOpenedNamesByActiveName(name) {
      return this.$route.matched
        .map(item => item.name)
        .filter(item => item !== name);
    },

    updateOpenName(name) {
      this.opendMenuNames = this.getOpenedNamesByActiveName(name);
    }
  },
  watch: {
    activeName(name) {},
    opendMenuNames(names) {
      this.$nextTick(() => {
        this.$refs.menu.updateOpened();
      });
    }
  }
};
</script>
