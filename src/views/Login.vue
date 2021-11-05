<template>
  <div class="login_div">
    <div class="login">
      <h3>登录</h3>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="account">
          <el-input v-model="ruleForm.account" prefix-icon="el-icon-user" placeholder="请输入您的姓名"></el-input>
        </el-form-item>
      
        <el-form-item prop="password">
          <el-input type="password" v-model="ruleForm.password" prefix-icon="el-icon-lock" placeholder="请输入您的密码"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm()">登录</el-button>
          <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
  </div>
  </div>
</template>

<script>
export default {
name:'Login',
data(){
  return {
    ruleForm:{  // 初始化数据
      account:'林大🌳',
      password:''
    },
    rules: {  // 表单校验
          account: [
            { required: true, message: '请输入您的姓名', trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入您的密码', trigger: 'blur' },
            { min: 6, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur' }
          ],
    }
  }
},
methods: {
  // 登录
      submitForm() {
        let {account,password} = this.ruleForm;
        if(account && password){
          // 发送请求
        this.$http({
          method:'post', //请求类型 get post put delete
          url:'/login',
          data:{
            account,
            password
          }
        }).then(res=>{
          // 成功
          let {account:Name,password:Pass} = res.data.user  // 对象解构赋值+重命名
          if(account == Name && password == Pass){  // 校验账号密码
          this.$message({showClose: true,message: '登陆成功',type: 'success'});
          sessionStorage.setItem('name',Name) // 数据本地存储
          setTimeout(()=>{
            return this.$router.push('/home')  // 跳转首页
          },1000)
        }else{
          return this.$message({
          showClose: true,message: '账号或密码错误',type: 'error'});
        }
        },err=>{
          // 失败
          this.$message({
            showClose: true,
            message: err,
            type: 'error'
          });
        })
        }
      },
      // 重置
      resetForm(){
        this.ruleForm = {
          account:'',
          password:''
        }
      }
    }
}
</script>

<style scoped>
  .login_div{
    width: 100vw;
    height: 100vh;
    background: url(../assets/login.jpg);
    background-size: 100%;
    position: relative;
  }
  .login{
    text-align: center;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    padding: 40px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.5);
  }
  h3{
    margin-bottom: 15px;
  }
</style>