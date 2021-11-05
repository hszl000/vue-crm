<template>
  <el-col :xs="24" :sm="12" :md="6" :span="6">
    <el-card :body-style="{ padding: '0px' }">
        <img :src="v.img" class="image">
        <div style="padding: 14px;">
        <span>{{v.title}}</span>
        <div class="bottom clearfix">
            <time class="time">更多的了解-{{ v.title }}-</time>
            <el-button type="text" class="button">详情 ></el-button>
        </div>
        </div>
    </el-card>
    </el-col>
</template>

<script>
export default {
    name:'Card',
    props:['v']
}
</script>

<style>
.el-card__body img{
    height: 200px;
    max-width: 100%;

  }
</style>