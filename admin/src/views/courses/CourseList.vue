
<template>
  <div>
    <h3>课程列表</h3>
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
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small" @click="$router.push(`/courseEdit/${scope.row._id}`)">编辑</el-button>
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
      console.log(res.data.data)
      this.data = res.data.data;
    }


    created() {
      this.fetch();
    }
  }

</script>


<style>
</style>