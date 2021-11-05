<template>
  <div>
    <!-- 没子集 -->
    <el-menu-item :index="`${basePath}`" v-if="!item.child">
        <i class="el-icon-setting"></i>
        <span slot="title">{{item.name}}</span>
    </el-menu-item>

    <!-- 有子集 -->
    <el-submenu v-else :index="basePath" >
        <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{item.name}}</span>
        </template>
        <!-- 递归组件调用 -->
        <AsideItem v-for="sub in item.child" :key="sub.url" :item="sub" :basePath="sub.url"/>
    </el-submenu>
  </div>
</template>

<script>
export default {
    name:'AsideItem',
    props:['item','basePath']
}
</script>

<style>

</style>