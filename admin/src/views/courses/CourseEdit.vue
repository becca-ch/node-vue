
<template>
  <div>
    <h3>{{id?"编辑":"创建"}}课程</h3>
    <el-form
      :form-data="data"
      :form-desc="fields"
    >
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
    formData: {};
    fields = {
      name: { type: 'input', label: '课程名称' },
      cover: { type: 'input', label: '课程封面图',},
    }

    async fetch() {
      const res = await this.$http.get('/courses');
      this.data = res.data;
      console.log(res.data)
    }


    created() {
      this.fetch();
    }
  }

</script>


<style>
</style>