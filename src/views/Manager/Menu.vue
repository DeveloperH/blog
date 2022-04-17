<template>
  <div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      :collapse="isCollapse">
      <el-menu-item index="/manager">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/manager/center">
        <i class="el-icon-document"></i>
        <span slot="title">个人中心</span>
      </el-menu-item>
      <el-submenu index="/manager/blog-add">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>博客管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/manager/blog-add">添加博客</el-menu-item>
          <el-menu-item index="/manager/blog-update">修改博客</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['isCollapse'])
  }
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  /* min-height: 400px; */
}
.el-menu {
  border-right-width: 0;
}
</style>