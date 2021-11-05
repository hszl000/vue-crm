<template>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      sortable
      prop="date"
      label="日期"
      :filters="filterDate"
      :filter-method="filterHandler"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
    <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
  <el-table-column
      prop="tag"
      label="标签"
      width="100"
      :filters="filterTag"
      :filter-method="filterHandler"
      filter-placement="bottom-end">
      <template slot-scope="{row}">
        <el-tag
          :type="row.tag === '家' ? 'primary' : 'success'"
          disable-transitions>{{row.tag}}</el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
    name:'Index',
    data(){
      return {
        tableData: [],
        filterDate:[],  //筛选的动态事件数据
        filterTag:[], //筛选动态住址数据
      }
    },
    methods:{
      getTable(){
        this.$http.get('/tablist').then(res=>{
          let {code,tableData} = res.data
          if(code == "200"){
            this.tableData = tableData
            this.filterDate = this.tableData.map(item=>({text:item.date,value:item.date}))
            this.filterTag = [...new Set(this.tableData.map(item=>item.tag))].map(item=>({text:item,value:item}))  // 由于标签有重复的，所以先去重，再生成对象
          }
        },err=>{
          console.log(err)
        })
      },
      filterHandler(value,row,column){
        console.log(column)
        const property = column['property'];
        return row[property] === value;
      }
    },
    mounted(){
      this.getTable()
    }
}
</script>

<style>

</style>