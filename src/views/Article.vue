<template>
  <div id="article">
    <article v-if="item">
      <div class="article-item">
        <p class="article-title">{{item.title}}</p>
        <p class="article-info"><span>发表于 {{item.postdate}}</span></p>
        <div class="article-content" v-html="decode"></div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: null
    }
  },
  created() {
    this.getData()
  },
  computed: {
    decode(){
      return decodeURI(this.item.content)
    }
  },
  methods: {
    // 获取指定博客
    getData() {
      const options = {
        method: 'POST',
        headers:{'Content-type': 'application/x-www-form-urlencoded'},
        data: this.$qs.stringify({id: this.$route.params.id}),
        url: '/api/select'
      }
      this.$request(options)
        .then(res => {
          if(res.data.length === 0){
            this.$router.replace({path:'/NotFound'})
            return
          }
          this.item = res.data[0]
          // _this.maskshow = false
        })
    }
  },
	watch: {
		$route: function(to, from) {
			// 解决路由中路径相同，参数不同跳转不刷新问题
			if(to.path !== from.path) {
				this.getData()
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.article-item {
  padding: 10px;
  margin-bottom: 10px;
  background: rgba(255, 255, 255, 0.75);
  opacity: 1;
  color: #555;
  .article-title {
    text-align: center;
    font-size: 24px;
    font-weight: 400;
  }
  .article-info {
    text-align: center;
    margin-top: 3px;
    margin-bottom: 20px;
    color: #999;
    font-size: 12px;
  }
  .article-content {
    font-size: 16px;
    // word-wrap: break-word;
  }
}


@media screen and	(min-width: 992px) {
  .article-item {
    padding: 40px;
  }
  .article-info {
    margin-bottom: 40px;
  }
}
</style>