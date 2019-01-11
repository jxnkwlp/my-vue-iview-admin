<template>
  <Dropdown @on-click="handleMenuClick">
    <span>
      {{userName}}
      <Icon type="ios-arrow-down"></Icon>
    </span>
    <DropdownMenu slot="list">
      <DropdownItem name="changepassword">修改密码</DropdownItem>
      <DropdownItem divided name="logout">退出</DropdownItem>
    </DropdownMenu>
  </Dropdown>
</template>

<script>
export default {
  created() {
    this.loadUserInfo();
  },
  data() {
    return {
      userName: ""
    };
  },
  methods: {
    loadUserInfo() {
        // TODO 
      this.userName = "aaa";
    },
    handleMenuClick(name) {
      switch (name) {
        case "changepassword":
          //TODO
          this.$Message.info("待实现");
          break;
        case "logout":
          //TODO
          this.$Message.info("待实现");
          break;
      }
    }
  }
};
</script>
