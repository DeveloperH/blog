<template>
  <div class="home">
    <div class="header">
      <el-input v-model="keyword" placeholder="请输入内容" style="margin-right:10px;"></el-input>
      <el-button type="primary" @click="search">查询</el-button>
      <el-button type="primary" @click="add">添加</el-button>
    </div>
    <div class="main">
      <el-table
        :data="searchResult"
        style="width: 100%">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="id"
          label="文章ID"
          width="180">
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题"
          width="180">
        </el-table-column>
        <el-table-column
          prop="postdate"
          label="创建日期">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>



    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: '',
      articleList: null,
      searchResult: null
    }
  },
  methods: {
    search() {
      console.log('1111')
      // 如果关键字为空则不查询
      if(this.keyword.trim() == ''){
        this.searchResult = this.articleList
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
          this.searchResult = res.data
        })
        .catch(err=>{
          console.log(err)
        })
    },
    add() {
      this.$router.push({name: 'BlogAdd'})
    },
    handleEdit(e, data) {
      console.log(e, data)
      this.$store.commit('SAVE_EDITOR_ARTICLE', data)
      this.$router.push({name: 'BlogUpdate'})
    },
    handleDelete(e,data) {
      const _id = data.id
      this.$confirm(`此操作将永久删除 【${data.title}】 文章，是否继续？`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(()=>{
        // 删除博客
        const options = {
          method: 'POST',
          headers:{'Content-type': 'application/x-www-form-urlencoded'},
          data: this.$qs.stringify({"id": _id}),
          url: '/api/del'
        }
        this.$request(options).then(res=> {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.getData()
        })
      })
    },
    getData() {
      this.$request.get('/api/get')
        .then(res=> {
          // console.log(res.data)
          this.articleList = res.data
          this.searchResult = res.data
        })
        .catch(err=> {
          console.log(err)
        })
    }
  },
  created() {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
.home {
  // width: 100%;
  overflow: hidden;
  padding: 10px;
  background: #FFF;
  .header {
    display: flex;
    margin-bottom: 20px;
  }
  .main {
    z-index: 999;
    width: 100%;
    .block {
      margin-top: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        font-size: 14px;
        color: gray;
      }
    }
  }
}
</style>