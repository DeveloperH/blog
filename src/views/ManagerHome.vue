<template>
  <div class="home">
    <div class="header">
      <el-input v-model="selectInput" placeholder="请输入内容" style="margin-right:10px;"></el-input>
      <el-button type="primary">查询</el-button>
      <el-button type="primary">添加</el-button>
    </div>
    <div class="main">
      <el-table
        :data="articleList"
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
      selectInput: '',
      articleList: null
    }
  },
  methods: {
    handleEdit() {

    },
    handleDelete() {

    },
  },
  created() {
    this.$request.get('/api/get')
      .then(res=> {
        console.log(res.data)
        this.articleList = res.data
      })
      .catch(err=> {
        console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped>
.home {
  overflow: hidden;
  padding: 10px;
  background: #FFF;
  .header {
    display: flex;
    margin-bottom: 20px;
  }
  .main {
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