<template>
  <div>
    <h2>新增博客</h2>
    <div v-if="id">
      <div><el-input v-model="title" placeholder="标题"></el-input></div>
      <div><el-input v-model="summary" placeholder="概要"></el-input></div>
      <div><input type="date" v-model="postDate" >
      </div>

      <vue-tinymce v-if="content" v-model="content" :setting="setting"/>
      <el-button type="primary" @click="update">确认修改</el-button>
    </div>
    <div v-else>
      请先在首页选取要编辑的博客
    </div>

  </div>
</template>

<script>
import VueTinymce from '@packy-tang/vue-tinymce/src/vue-tinymce.vue';
export default {
  data() {
    return {
      id: '',
      title: '',
      summary: '',
      postDate: '',
	    content: '',
      artcileData: null,
      setting: {
				height: 500
			},
    }
  },
  components: {
    VueTinymce
  },
  mounted() {
    console.log(this.$store.state.editorArticle)
    if(this.$store.state.editorArticle) {
      this.content = decodeURI(this.$store.state.editorArticle.content)
      this.id = this.$store.state.editorArticle.id
      this.postDate = this.$store.state.editorArticle.postdate
      this.summary = this.$store.state.editorArticle.summary
      this.title = this.$store.state.editorArticle.title
    }
  },
  methods: {
    update(){
      // 验证必填字段是否为空
      if(this.title=="" || this.summary=="" || this.postDate==""){
        console.log('请填写内容')
        return
      }

      // 将富文本内容转换为URI格式
      var encode = encodeURI(this.content)
			var p_data = {
        id: this.id,
				title: this.title, 
				content: encode,
        summary: this.summary,
				postdate: this.postDate
			}

      const options = {
        method: 'POST',
        headers:{'Content-type': 'application/x-www-form-urlencoded'},
        data: this.$qs.stringify(p_data),
        url: '/api/update'
      }
      this.$request(options)
        .then(res=>{
          this.$message('修改成功')
          this.$router.replace({name: 'ManagerHome'})
        })
        .catch(err=>{
          this.$message('修改失败')
        })
    },
  }
}
</script>

<style>

</style>