<template>
  <div>
    <template v-if="hasChildren(menu)">
      <Submenu :name="menu.name">
        <template slot="title">
          <Icon :type="getIcon(menu)"/>
          {{getTitle(menu)}}
        </template>
        <template v-for="item in menu.children">
          <MenuItem :key="`menu-${item.name}`" :name="item.name">{{getTitle(item)}}</MenuItem>
        </template>
      </Submenu>
    </template>
    <template v-else>
      <MenuItem :key="`menu-${menu.name}`" :name="menu.name">
        <Icon :type="getIcon(menu)"/>
        {{getTitle(menu)}}
      </MenuItem>
    </template>
  </div>
</template>

<script>
import CommonIcon from "@/components/common-icon";
export default {
  name: "SideMenuItem",
  components: {
    CommonIcon
  },
  props: {
    menu: {
      type: Object,
      default: {}
    }
  },
  methods: {
    getTitle(menu) {
      var title = menu.name;
      if (menu.meta && menu.meta.title) {
        title = menu.meta.title;
      }
      if (menu.children && menu.children.length === 1) {
        return this.getTitle(menu.children[0]);
      }
      return title;
    },
    hasChildren(menu) {
      return menu.children && menu.children.length > 1;
    },
    getIcon(menu) {
      var icon = "md-apps";
      if (menu.meta && menu.meta.icon) {
        icon = menu.meta.icon;
      }
      if (menu.children && menu.children.length === 1) {
        return this.getIcon(menu.children[0]);
      }
      return icon;
    }
  }
};
</script>
