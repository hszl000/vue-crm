<template>
  <el-form :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
    <el-form-item label="名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="内容" prop="desc">
      <el-input type="textarea" v-model="ruleForm.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm()">立即添加</el-button>
      <el-button @click="resetForm()">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
// 引入nanoid
import { nanoid } from 'nanoid'
export default {
    name:'AddForm',
    data(){
      return {
        ruleForm:{
          name:'',
          desc:''
        },
        rules: {
          name: [
            { required: true, message: '请输入名称', trigger: 'blur' },
            { min: 2, max: 255, message: '长度在 2 到 255 个字符', trigger: 'blur' }
          ],
          desc: [
            { required: true, message: '请输入内容', trigger: 'blur' },
            { min: 10, max: 255, message: '长度在 10 到 255 个字符', trigger: 'blur' }
          ],
        }
      } 
    },
    methods:{
      // 添加
      submitForm(){
        let {name,desc} = this.ruleForm;
        if(!name.trim() && !desc.trim()) return this.$message({message:'请输入内容',type:"error"})
        if(desc.trim().length<10) return this.$message({message:'请按提示输入信息',type:"error"})
        let content = desc.split('\n')
        let obj = {title:name,content,id:nanoid()}
        this.$emit('dialog',obj)
        this.resetForm()
      },
      // 重置
      resetForm(){
        this.ruleForm = {
          name:'',
          desc:''
        }
      }
    }
}
</script>

<style>

</style>