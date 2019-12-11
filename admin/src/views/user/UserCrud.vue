
<template>
  <div>
    <avue-crud 
      v-if="option.column"
      :data="data" 
      :option="option" 
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
    data = [];
    option = {};

    // 新增
    async handleAdd(row,done,loading) {
      console.log('1111')
      const res = await this.$http.post('/users', row);
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
      const res = await this.$http.put(`/users/${row._id}`, data);
      this.$message({
        type: 'success',
        message: '修改成功!'
      })
      this.fetch();
      done() 
    }

    // 删除
    async handleDel(row,index) {
      const res = await this.$http.delete(`/users/${row._id}`);
      this.$message({
        type: 'success',
        message: '删除成功!'
      })
      this.fetch();
    }


    async fetch() {
      const res = await this.$http.get('/users');
      this.data = res.data.data;
    }

    async fetchOption() {
      const res = await this.$http.get('/users/option');
      this.option = res.data;
      
    }

    // async handleClick(row) {
    //   const res = await this.$http.delete(`/users/${row._id}`);
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