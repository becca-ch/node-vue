
<template>
  <div>
    <h3>{{id?"编辑":"创建"}}课程</h3>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="课程名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="封面图">
        <el-input v-model="form.cover"></el-input>
      </el-form-item>
      <!-- <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';

  @Component({
    components: {

    },
  })

  export default class CoursesEdit extends Vue{
    @Prop(String) id!: string
    data = {};
    // fields = {
    //   name: { type: 'input', label: '课程名称' },
    //   cover: { type: 'input', label: '课程封面图',},
    // }
    form = {
      name: '',
      cover: ''
    }

    async fetch() {   
      const res = await this.$http.get(`/courses/${this.id}`);
      this.form = Object.assign(this.form, res.data);
    }

    // 提交分编辑还是创建
    async onSubmit() {
      if(this.id) {
        const res = await this.$http.put(`/courses/${this.id}`, this.form)
      } else {
        const res = await this.$http.post('/courses', this.form)
      }
      this.$message({
        type: 'success',
        message: this.id ? '编辑成功!' : '创建成功!'
      });
      this.$router.push('/courseList')
    }

    created() {
      this.id ? this.fetch():'';
    }
  }

</script>


<style>
</style>