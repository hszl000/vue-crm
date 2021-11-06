<template>
  <el-col :xs="24" :sm="12" :span="12">
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span><b>{{v.titles}}</b></span>
            <el-button style="float: right; padding: 3px 0" type="text">了解更多 ></el-button>
        </div>
      <div class="text item">
        <div :ref="`main${index}`" style="width: 100%; height: 100%"></div>
      </div>
    </el-card>
  </el-col>
</template>
<script>
window.onresize = function () {};
import * as echarts from "echarts";
export default {
  name: "Echarts",
  props: ["v", "index"],
  data() {
    return {};
  },
  mounted() {
    
  },
  methods:{
      resizeEcharts(){
        let main = "main" + `${this.index}`;
      this.$nextTick(() => {
        let myChart = echarts.init(this.$refs[main])
        myChart.setOption(this.v);
        // 监听屏幕的大小变化
        window.addEventListener('resize',()=>{
            // 调用echarts身上的resize方法（适应屏幕大小）
            window.onresize = myChart.resize()
        })
      })
    }
  },
  watch: {
    //   监听图表数据变化重新渲染
    v: {
      immediate: true,
      deep: true,
      handler() {
        this.resizeEcharts();
      },
    },
  },
};
</script>
<style scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
  height: 280px;
}

.box-card {
  width: 100%;
  height: 100%;
}
.el-col {
  padding-top: 25px;
  padding-bottom: 25px;
}
</style>