<template>
  <!-- @touchmove.prevent @mousewheel.prevent 禁用滚动 -->
  <div class="mobile-nav" @touchmove.prevent @mousewheel.prevent>
    <div class="top">
      <div class="left" @click="toggle"><i class="iconfont icon-zhedie"></i></div>
      <div class="right" @click="hide"><router-link to="/">博客首页</router-link></div>
    </div>
    <div class="toggle-list" :class="mobileNavStatus? 'active': ''" @click="toggle">
				<nav>
					<ul>
						<li><router-link to="/"><i class="iconfont icon-home"></i>首页</router-link></li>
						<li><router-link to="/about"><i class="iconfont icon-user"></i>关于</router-link></li>
						<li><a href="/books" target="_blank"><i class="iconfont icon-book"></i>GitBook</a></li>
						<li><a href="https://github.com/developerH" target="_blank"><i class="iconfont icon-github-fill"></i>开源库</a></li>
					</ul>
				</nav>
    </div>

    
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      isActive: true
    }
  },
  computed: {
    ...mapState(['mobileNavStatus'])
  },
  methods: {
    toggle() {
      this.$store.commit('TOGGLE_MOBILENAV_STATUS')
    },
    hide() {
      this.$store.commit('HIDE_MOBILENAV')
    }
  }
}
</script>

<style lang="scss" scoped>
.mobile-nav {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 9999;
  
  .top {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    font-size: 16px;
    z-index: 9999;
    border-bottom: 1px solid #e7e7e7;
    .left {
      margin-left: 20px;
      i {
        font-size: 26px;
      }
    }
    .right{
      margin-right: 20px;
      font-size: 14px;
    }
  }

  .toggle-list {
    background: #F8F8F8;
    height: 0;
    transition: height 0.3s;
    overflow: hidden;
    color: #777;
    nav {
      padding-left: 20px;
      background: #fff;
      li {
        height: 40px;
        line-height: 40px;
      }
      li:first-child {
        padding-top: 10px;
      }
    }
  }
}

.active {
  // height: 172px !important;
  height: 100vh !important;
}

</style>