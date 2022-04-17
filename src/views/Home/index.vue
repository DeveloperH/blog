<template>
  <div class="home-index">
    

    <MobileNav class="mobile-nav" />
    <div class="nav-margin"></div>
    <div class="headbar"></div>

		<div class="container">
			<main>
        <!-- 缓存Home组件 -->
        <keep-alive include="Home">
          <router-view></router-view>
        </keep-alive>
        
			</main>

			<header class="hidden-xs hidden-sm">
				<div class="title">
					<p>热爱生活</p>
					<p>追求理想</p>
				</div>
				<nav class="site-nav">
					<ul id="menu">
						<li><router-link to="/"><i class="iconfont icon-home"></i>首页</router-link></li>
						<li><router-link to="/about"><i class="iconfont icon-user"></i>关于</router-link></li>
						<li><a href="/books" target="_blank"><i class="iconfont icon-book"></i>GitBook</a></li>
						<li><a href="https://github.com/developerH" target="_blank"><i class="iconfont icon-github-fill"></i>开源库</a></li>
						<li>
							<div>
								<span class="search-icon"><i class="iconfont icon-search"></i></span>
								<input type="text" class="key-input" @input="selectArt" v-model="keyword" placeholder="搜索">
							</div>
						</li>
						<div class="searchresult" v-show="searchInfo">
							<ul @click="selectItem">
								<li v-for="(item,index) in searchInfo" :key="index" :id="item.id">
									<router-link :to="'/article/' + item.id">标题:{{item.title}}</router-link>
								</li>
							</ul>
						</div>
					</ul>
				</nav>
			</header>
		</div>

    

		<footer>
			<p>&copy; 2021 RainstormDy</p>
			<p>
				<img src="../../assets/images/ba.png"><a href="https://beian.miit.gov.cn/" id="ba">粤ICP备19038831号</a>
				<a href="http://www.beian.gov.cn" id="ba">粤公网安备44080302000107号</a>
			</p>
		</footer>
  </div>
</template>

<script>
import MobileNav from '../../components/MobileNav'
export default {
  name: 'app',
  components: {
    MobileNav
  },
  data() {
    return {
      keyword: '',	// 搜索关键词
      timer: null,	// 防抖定时器对象
      searchInfo: null 	// 关键词查询结果
    }
  },
  methods: {
    selectArt(){
      clearTimeout(this.timer)
      this.timer = setTimeout(()=>{
        // 如果关键字为空则不查询
        if(this.keyword.trim() == ''){
          this.searchInfo = null
          return
        }

        const options = {
          method: 'POST',
          headers:{'Content-type': 'application/x-www-form-urlencoded'},
          data: this.$qs.stringify({"keyword": this.keyword}),
          url: '/api/selectkeyword'
        }
        this.$request(options)
          .then(res=>{
            this.searchInfo = res.data
          })
          .catch(err=>{
            console.log(err)
          })
      }, 300)
    },
    selectItem(e){
      // 通过事件委托获取到点击的li的id值
      // console.log('1')
      this.id = e.target.id
      this.selectedTitle = e.target.innerText
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/common.scss';

</style>
