<template>
  <div>
    <div class="header">
      <div class="toggle" @click="handleCollapse">
        <i v-if="!isCollapse" class="iconfont icon-indent-decrease"></i>
        <i v-else class="iconfont icon-indent-increase"></i>
      </div>

      <div>顶部区域</div>
      
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['isCollapse'])
  },
  methods: {
    handleCollapse() {
      this.$store.commit('SET_ISCOLLAPSE')
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  background: skyblue;
  height: 40px;
  line-height: 40px;
  .toggle i{
    font-size: 24px;
  }
}
</style>