<template>
  <div id="app">
    <!-- 路由容器 有他可以显示所有路由-->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {

  },
})

export default class App extends Vue {

}
</script>

<style>

</style>
