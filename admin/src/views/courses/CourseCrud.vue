
<template>
  <div>
    <avue-crud 
      v-if="option.column"
      :data="data" 
      :option="option" 
      :page="page"
      @on-load="onload"
      @row-save="handleAdd"
      @row-del="handleDel"
      @row-update="handleEdit"
    >
    </avue-crud>
  </div>
</template>


<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    components: {
      
    },
  })

  export default class CoursesList extends Vue{
    data: any = [];
    option: any = {};

    page: any = {
      total: 0, //如果没有total 字段，分页怎么都不会显示
      pageSize: 2,
      pageSizes: [2, 5, 10]
    }

    // 查询参数
    

    // 新增
    async handleAdd(row,done,loading) {
      const res = await this.$http.post('/courses', row);
      this.$message({
        type: 'success',
        message: '创建成功!'
      })
      this.fetch();
      done()
    }
    // 编辑
    async handleEdit(row,index,done,loading) {
      const data = JSON.parse(JSON.stringify(row));
      delete data.$index;  // 删除对象的某个键值
      const res = await this.$http.put(`/courses/${row._id}`, data);
      this.$message({
        type: 'success',
        message: '修改成功!'
      })
      this.fetch();
      done() 
    }

    // 删除
    async handleDel(row,index) {
      const res = await this.$http.delete(`/courses/${row._id}`);
      this.$message({
        type: 'success',
        message: '删除成功!'
      })
      this.fetch();
    }

    async onload(page) {
      console.log(page)
    }


    async fetch() {
      const res = await this.$http.get('/courses');
      this.page.total = res.data.total;  // 后台拿到总页数
      this.data = res.data.data;
    }


    async fetchOption() {
      const res = await this.$http.get('/courses/option');
      this.option = res.data; 
    }

    // async handleClick(row) {
    //   const res = await this.$http.delete(`/courses/${row._id}`);
    //   this.$confirm('是否继续删除?', '提示', {
    //     confirmButtonText: '确定',
    //     cancelButtonText: '取消',
    //     type: 'warning'
    //   }).then(() => {
    //     this.$message({
    //       type: 'success',
    //       message: '删除成功!'
    //     });
    //     this.fetch()
    //   })         
    // }


    created() {
      this.fetch();
      this.fetchOption();
    }
  }

</script>


<style>
</style>