<template>
  <div id="module">
      <el-container class="container">
        <!-- 左侧导航 -->
        <el-aside class="aside" width="200px">
          <Aside/>
        </el-aside>
        <el-container>
          <!-- 头部信息 -->
          <el-header class="header">
            <Header/>
          </el-header>
          <!-- 主体部分 -->
          <el-main>
            <router-view/>
          </el-main>
        </el-container>
      </el-container>
  </div>
</template>
<script>
// 引入导航组件
import Aside from '../../components/Aside.vue'
// 引入头部组件
import Header from '../../components/Header.vue'
export default {
  name:'Home',
  components:{Aside,Header},
  data(){
    return {}
  }
}
</script>
<style scoped>
  .container{
    width: 100%;
    height: 100%;
  }
  .aside{
    background: #343f50;
  }
  .header{
    border-bottom: 1px solid #ebebeb;
  }
</style>