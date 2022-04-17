<template>
  <div class="notfound">
    <div class="info404">
      <p><b>404.</b>抱歉，您访问的资源不存在，</p>
      <p>可能是网址有误，或者对应的内容被删除。<router-link to="/">返回首页</router-link></p>
    </div>
  </div>
</template>

<style>
.notfound {
  background: #fff !important;
  width: 100%;
  height: calc(100vh - 80px);
}
.info404 {
  text-align: center;
  padding-top: 80px;
  font-size: 16px;
}
.info404 a {
  color: cornflowerblue;
  font-size: 18px;
}
</style>