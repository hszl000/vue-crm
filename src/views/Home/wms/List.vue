<template>
  <div>
      <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>列表展示</span>
      <el-button style="float: right; padding: 3px 0" type="text" @click="dialogVisible = true">添加数据</el-button>
    </div>
    <el-collapse v-model="activeNames" @change="handleChange" accordion>
      <el-collapse-item v-for="v in items" :title="v.title" :name="v.id" :key="v.id">
        <div v-for="item in v.content" :key="item">{{item}}</div>
      </el-collapse-item>
    </el-collapse>
  </el-card>

  <!-- 会话框 -->
  <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
    <AddFrom @dialog="dialogFn" />
  </el-dialog>
  </div>
</template>

<script>
import AddFrom from '../../../components/AddForm.vue'
export default {
  name:"List",
  components:{AddFrom},
  data(){
    return {
      activeNames:'001',
      items:[],
      dialogVisible:false,
    }
  },
  methods:{
    getItems(){
      this.$http.get('/items').then(res=>{
        let {code,items} = res.data
        if(code == "200"){
          this.items = items
          this.activeNames = items[0].id
        }
      })
    },
    handleChange(){

    },
    handleClose(){},
    dialogFn(obj){
      this.items.unshift(obj)
      this.dialogVisible = false;
    },
  },
  mounted(){
    this.getItems()
  }
}
</script>

<style>

</style>