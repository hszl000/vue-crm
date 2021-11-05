<template>
  <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in imgList" :key="item">
        <!-- <h3 class="medium">{{ item }}</h3> -->
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {
    name:'Marqu',
    props:['imgList'],
    mounted(){
        console.log(this.imgList)
    }
}
</script>

<style>
img{
    width: 100%;
    height: 100%;
  }
</style>