<template>
  <div class="blog-add">
    <h2>新增博客</h2>
    <div><el-input v-model="title" placeholder="标题"></el-input></div>
    <div><el-input v-model="summary" placeholder="概要"></el-input></div>
    <div><input type="date" v-model="postDate" >
    </div>

    <vue-tinymce v-model="content" :setting="setting"/>
    <el-button type="primary" @click="save">确认提交</el-button>
  </div>
</template>

<script>
import VueTinymce from '@packy-tang/vue-tinymce/src/vue-tinymce.vue';

export default {
  data() {
    return {
      title: '',
      summary: '',
      postDate: '',
      content: '',
      setting: {
        height: 500
      }
    }
  },
  components: {
    VueTinymce
  },
  methods: {    
    save(){

      // 验证必填字段是否为空
      if(this.title=="" || this.summary=="" || this.postDate=="" || this.content==""){
        this.$message('请完整填写所需内容！')
        return
      }

      // 将富文本内容转换为URI格式
      var encode = encodeURI(this.content)
			var _data = {
				title: this.title, 
				content: encode,
        summary: this.summary,
				postdate: this.postDate
			}

      const options = {
        method: 'POST',
        headers:{'Content-type': 'application/x-www-form-urlencoded'},
        data: this.$qs.stringify(_data),
        url: '/api/postdata'
      }

      this.$request(options)
        .then(res=>{
          this.$message('上传成功')
        })
        .catch(err=>{
          this.$message('上传失败')
        })
    }
  }
}
</script>

<style>

</style>