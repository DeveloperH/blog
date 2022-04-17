<template>
  <div class="manager">
    <Menu class="menu" />

    <Content class="content" :class="{'menu-collapse':$store.state.isCollapse}" />
  
  </div>
</template>

<script>
import Menu from './Menu.vue'
import Content from './Content.vue'
export default {
  data() {
    return {
      
    }
  },
  components: {
    Menu,
    Content
  },

}
</script>

<style lang="scss" scoped>
.manager{
  .menu {
    box-sizing: border-box;
    // width: 200px;
    height: 100vh;
    background: #545c64;
    position: fixed;
    top: 0;
    left: 0;
    // box-sizing: border-box;
  }
  .content {
    // width: 100%;
    // height: 1800px;
    // padding-left: 200px;
    // box-sizing: border-box;
    margin-left: 200px;
  }
  .menu-collapse {
    margin-left: 64px;
  }
}

</style>