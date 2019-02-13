<template>
  <Dropdown @on-click="handleMenuClick">
    <Avatar icon="ios-person" size="small"/>
    <span>
      {{userName}}
      <Icon type="ios-arrow-down"></Icon>
    </span>
    <DropdownMenu slot="list">
      <DropdownItem name="changepassword">修改密码</DropdownItem>
      <DropdownItem name="message">消息中心</DropdownItem>
      <DropdownItem divided name="logout">退出</DropdownItem>
    </DropdownMenu>
  </Dropdown>
</template>

<script>
export default {
  created() {},
  data() {
    return {};
  },
  computed: {
    userName() {
      return this.$store.state.user.userName;
    }
  },
  methods: {
    handleMenuClick(name) {
      switch (name) {
        case "changepassword":
          //TODO
          break;
        case "logout":
          //TODO
          break;
      }

      this.$Message.info("待实现");
    }
  }
};
</script>
