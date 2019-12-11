
<template>
  <div>
    <h3>课程列表</h3>
    <div style="padding-bottom: 15px;">
      <el-button type="success" size="small" @click="$router.push('/courseEdit')">创建课程</el-button>
    </div>
    <el-table border :data="data">
      <!-- 遍历对象 -->
      <el-table-column
        v-for="(field, index) in fields" 
        :key="index" 
        :prop="index"
        :label="field.label"
        align="center">
      </el-table-column>    
      <el-table-column
        fixed="right"
        label="操作"
        width="100"
        align="center">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="$router.push(`/courseEdit/${scope.row._id}`)">编辑</el-button>
          <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column> 
    </el-table>
  </div>
</template>


<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    components: {
      
    },
  })

  export default class CoursesList extends Vue{
    data = [];
    fields = {
      _id: { label: 'ID' },
      name: { label: '课程名称' },
      cover: { label: '课程封面' },
    }

    async fetch() {
      const res = await this.$http.get('/courses');
      this.data = res.data.data;
    }

    async handleClick(row) {
      const res = await this.$http.delete(`/courses/${row._id}`);
      this.$confirm('是否继续删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
        this.fetch()
      })         
    }


    created() {
      this.fetch()
    }
  }

</script>


<style>
</style>