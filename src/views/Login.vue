<template>
  <div class="content">
    <div class="main">
      <div class="login">
        <div class="pic"></div>
        <p class="username">Admin</p>
        <div>
          <input type="password" class="pwd" v-model="pwd" />
        </div>
      </div>
      <div class="btn_login" @click="login">
        <span class="iconfont icon-arrowright"></span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      pwd: ''
    }
  },
  methods: {
    async login() {
      if(this.pwd.trim().length == 0){
        alert('密码不能为空')
        return
      }
      const _data = {
        username: 'hlw',
        pwd: this.pwd
      }

      this.$request.post('/api/login', this.$qs.stringify(_data))
        .then(res=>{
          if(res.data.status === '10001') {
            // 登录成功
            localStorage.setItem('token', res.data.token)
            this.$router.replace({name: 'ManagerHome'})
          }else {
            console.log(res.data.msg)
          }
        })

      // console.log('login')
      // this.$store.commit('LOGIN_SUCCESS', ()=> {
      //   this.$router.push({name:'Manager'})
      // })
      // this.$router.push({name:'Manager'})
      // await this.$store.dispatch('LOGIN_ACTION')
      // this.$router.push({name:'Manager'})
    }
  }

}
</script>

<style lang="scss">
.content {
  width: 100%;
  height: 100vh;
  background-color: #1C1171;
  position: relative;
  .main {
    width: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .login {
      text-align: center;
      background-color: #50599A;
      border-radius: 10px;
      padding: 10px;
      color: #FFFFFF;
      .pic {
        width: 60px;
        height: 60px;
        border-radius: 10px;
        margin: -40px auto 10px auto;
        background-image: url('../assets/images/login.jpg');
        background-size: cover;
      }
      .username {
        font-weight: bold;
      }
      .pwd {
        width: 100%;
        height: 30px;
        background-color: #737CB3;
        border: none;
        border-radius: 5px;
        box-sizing: border-box;
        text-align: center;
        outline: none;
      }
    }
    .btn_login {
      width: 30px;
      height: 30px;
      line-height: 30px;
      background-color: #1D62E7;
      border-radius: 50%;
      color: #FFFFFF;
      text-align: center;
      margin: 10px auto;
      cursor: pointer;
    }
  }
}
</style>