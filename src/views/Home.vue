<template>
  <div class="home">
    <template v-for="(item,index) in articleList">
      <ArticleItem :item="item" :key="index"/>
    </template>
  </div>
</template>

<script>
import ArticleItem from '../components/ArticleItem'
export default {
  data() {
    return {
      articleList: null
    }
  },
  created() {
    this.$request.get('/api/get')
      .then(res=> {
        this.articleList = res.data
      })
      .catch(err=> {
        console.log(err)
      })


  },
  components: {
    ArticleItem
  }
}
</script>

<style>

</style>