<template>
    <el-menu
      :default-active="$route.path" exact
      class="el-menu-vertical-demo"
      background-color="#343f50"
      text-color="#fff"
      active-text-color="#ffd04b"
      router>

      <AsideItem v-for="v in items" :key="v.url" :item="v" :basePath="v.url"/>
    </el-menu>
</template>

<script>
import  AsideItem  from './AsideItem.vue'
export default {
  name:'Aside',
  components:{AsideItem},
  data(){
    return {
      items:[]
    }
  },
  mounted(){ // 挂在完成调用
    this.getNav()
  },
  methods:{
    getNav(){
      this.$http.get('/get_nav').then(res=>{
        let {code,result} = res.data;
        if(code == 200){
          this.items = result;
        }
      })
    }
  }
}
</script>

<style>

</style>