  <template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-active="$route.path" router>
        <el-submenu v-for="(item, index) in menu.items" 
          :key="`menu-item-${index}`"
          :index="`index-${index}`"
        >
          <template slot="title"><i :class="item.icon"></i>{{item.title}}</template>
          <el-menu-item-group v-for="(val,subIndex) in item.items" 
            :key="`menu-item-${subIndex}-${index}`">
            <el-menu-item :index="val.path">{{val.title}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

      </el-menu>
    </el-aside>
    
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        视频管理后台
      </el-header>
      
      <el-main>
        <!-- 路由根据$route.path 路径更新，不会造成数据缓存 -->
        <router-view :key="$route.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {

  },
})

export default class Main extends Vue{
  menu = {
    items: [
      {
        title: '内容管理',
        icon: 'el-icon-message',
        items: [
          { title: '首页', path: '/home' },
          { title: '课程管理', path: '/courseList' },
          { title: '课时管理', path: '/episodeList' },
        ]
      },
      {
        title: '运营管理',
        icon: 'el-icon-menu',
        items: [
          { title: '用户管理', path: '/userList' },
        ]
      }
    ]
  }
}
  
</script>



<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>



