<template>
  <article>
    <div class="article-item">
      <p class="article-title">{{item.title}}</p>
      <p class="article-info">
        <span>发表于 {{item.postdate}}</span>
      </p>
      <div class="article-content">
        <p>{{item.summary}}</p>
      </div>
      <div class="goread">
        <router-link :to="'/article/' + item.id" class="readbtn">阅读全文 »</router-link>
        
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "ArticleItem",
  props: {
    item: {}
  },
};
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
  .goread {
    margin-top: 30px;
    text-align: center;
    .readbtn {
      display: inline-block;
      padding: 0 20px;
      border: 2px solid #222;
      border-radius: 5px;
      text-decoration: none;
      line-height: 200%;
      background: #fff;
      transition: all 0.5s;
      
    }
    .readbtn:hover {
      background: #222;
      color: #fff;
    }
  }
}

</style>
