<template>
  <div class="box">
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="v in list" :key="v.path">
          <router-link :to="v.path">{{v.meta.title}}</router-link>
        </el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 退出 -->
    <el-button class="exit" type="primary" @click="goBack">退出</el-button>
  </div>
</template>

<script>
export default {
    name:'Header',
    data(){
      return {
        list:[]
      }
    },
    methods:{
      // 退出登录
      goBack(){
        // 清除本地储存
        sessionStorage.removeItem('name')
        // 弹框
        this.$message({showClose: true,message:'正在退出',type:"info"})
        setTimeout(()=>{
          // 跳转到登录
          return this.$router.replace('/login')
        },1000)
      },
      // 去除重复首页面包屑
      getBreadcrumb(matched){
        if(matched.length && matched[1].path == '/index'){
          matched = [{path:'/home',name:'home',meta:{title:'首页'}}]
        }
        this.list = matched
      }
    },
    created(){
      this.getBreadcrumb(this.$route.matched)
    },
    watch:{
      $route:{
        deep:true,
        handler(val){
          this.getBreadcrumb(val.matched)
        }
      }
    }
}
</script>

<style>
.box{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>