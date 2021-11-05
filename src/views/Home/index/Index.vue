<template>
  <div>
    <!-- 走马灯 -->
    <Marqu :imgList="imgList"/>
    <!-- 卡片 -->
    <el-row :gutter="20">
      <Card v-for="(v,index) in cardList" :key="index" :v="v"/>
    </el-row>
  </div>
</template>
<script>
import Marqu from '@/components/Marqu.vue'
import Card from '@/components/Card.vue'
export default {
  name:'Index',
  components:{Marqu,Card},
  data(){
    return {
      imgList:[
        require('@/assets/img/1.jpg'),
        require('@/assets/img/2.png'),
        require('@/assets/img/3.png'),
        require('@/assets/img/4.jpg'),
        require('@/assets/img/5.jpg'),
      ],
      cardList:[
        {title:'防疫物资',img:require('@/assets/kz.jpg')},
        {title:'企业荣誉',img:require('@/assets/sds.jpg')},
        {title:'成长之路',img:require('@/assets/kz.jpg')},
        {title:'企业福利',img:require('@/assets/wx.jpg')},
      ],
    }
  },
  methods:{

  }
}
</script>
<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  img{
    width: 100%;
    height: 100%;
  }
</style>