<template>
  <div class="menu-list-container">
    <Menu theme="dark" :accordion="true" width="auto" :open-names="opendMenuNames" @on-select="HandleMenuSelect">
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
    }
  },
  data() {
    return {
      opendMenuNames: []
    };
  },
  methods: {
    HandleMenuSelect(name) {
        this.$emit('on-select', name)
    }
  }
};
</script>
