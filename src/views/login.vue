<template>
  <div>
    <navBar :tabs="tabs"></navBar>
    <div id="login">
      <dl class="list">
        <dd class="nav">
          <ul>
            <li>
              <a href="#" @click="changeType('account')">美团账号登录</a>
            </li>
            <li>
              <a href="#" @click="changeType('phone')">手机验证登录</a>
            </li>
            <div class="slide" :class="{ left: isLeft, right: isRight }"></div>
          </ul>
        </dd>
      </dl>
      <div id="from">
        <form action id="login-from" v-if="className === 'account'">
          <input id="username" type="text" placeholder="账户名/手机号/Email" v-model="uphone">
          <input id="password" type="password" placeholder="请输入您的密码" v-model="password">
          <button type="submit" id="btn" @click="handleLogin">登录</button>
        </form>
        <form action id="phone-login" v-else>
          <dl>
            <dd class="get-PhoneCode">
              <input id="phone" type="tel" placeholder="请输入手机号">
              <button class="getCode">获取验证码</button>
            </dd>
            <dd class="noteCode">
              <input id="note" type="tel" placeholder="请输入短信验证码">
            </dd>
          </dl>
          <button type="submit" class="btn-phone" >登录</button>
        </form>
      </div>
      <ul class="subline">
        <li class="zc-left">
          <a href="#">立即注册</a>
        </li>
        <li class="zc-right">
          <a href="#">找回密码</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import navBar from '../components/NavBar.vue'
export default {
  data() {
    return {
      className: "account",
      uphone:'',
      password:'',
      isLeft: true,
      isRight: false,
      tabs: { title: '美团网', icon1: 'icon-homee', name1: '首页', icon2: 'icon-ss', name2: '搜索' }
    }
  },
  methods: {
    handleLogin () {
      window.isLogin = true
      // 假设这块登录成功。我们需要做的事情是：跳转回去
      // 1. 不管如何都跳转首页
      // this.$router.push('/');
      // console.log(1)
      // 2. 用户本来是想要进入哪里，就让他回答哪里
      var redirect = this.$route.query.redirect || '/'
      // console.log(window.isLogin)
      // console.log(redirect)
      this.$router.replace(redirect)
    },
    changeType (name) {
      this.className = name
    }
  },
  watch: {
    className: function () {
      this.isLeft = this.isRight;
      this.isRight = !this.isLeft;
    }
  },
  components: {
    navBar
  }
};
</script>

<style lang="less">
@import "../styles/common/reset.less";
@import "../styles/common/common.less";
body,
html {
  background-color: #f0efed;
}
#login {
  display: block;

  .list {
    border-bottom: 1px solid #ddd8ce;
    margin-top: 0;

    .nav {
      height: 42px;

      ul {
        position: relative;
        height: 42px;
        border-bottom: 4px solid #DDD8CE;

        li {
          display: block;
          float: left;
          width: 50%;
          height: 38px;
          padding: 0px 10px;
          background-color: #fff;

          a {
            display: block;
            height: 38px;
            line-height: 38px;
            text-align: center;
            color: #333333;
            font-size: 14px;
            font-weight: 400;
          }
        }

        .slide {
            position: absolute;
            width: 177.5px;
            bottom: -4px;
            border-bottom: 4px solid #06c1ae;
        }

        .left{
            left:10px;
        }

        .right{
            left: 177.5px;
        }
      }
    }
  }

  #login-from {
    height: 145px;

    #username {
      display: block;
      width: 100%;
      padding-left: 0;
      padding: 14px 10px;
      border-bottom: 1px solid #ddd8ce;
      font-size: 14px;
      color: #333333;
      border-top: 0;
      border-left: 0;
      border-right: 0;
    }
    #password {
      display: block;
      width: 100%;
      padding-left: 0;
      padding: 14px 10px;
      border-bottom: 1px solid #ddd8ce;
      font-size: 14px;
      color: #333333;
      border: 0;
    }
    #btn {
      display: block;
      width: 355px;
      height: 47px;
      line-height: 47px;
      font-size: 20px;
      text-align: center;
      padding: 0px 16px;
      margin: 10px 10px;
      border-radius: 3px;
      color: #fff;
      border: 0;
      background-color: #06c1ae;
    }
  }

  #phone-login {
    // margin-top: 30px;
    height: 148px;

    dl {
      border-bottom: 1px solid #ddd8ce;
      background-color: #fff;
      height: 87px;

      .get-PhoneCode {
        position: relative;
        width: 100%;
        border-bottom: 1px solid #ddd8ce;

        #phone {
          width: 300px;
          padding-left: 0;
          padding: 14px 10px;
          font-size: 14px;
          color: #333333;
          border-top: 0;
          border-left: 0;
          border-right: 0;
        }
        .getCode {
          position: absolute;
          right: 15px;
          top: 10px;
          background-color: #dcdcdc;
          color: #999;
          border: 0;
          padding: 0 10px;
          text-align: center;
          height: 30px;
          border-radius: 3px;
          font-size: 14px;
          line-height: 30px;
          box-sizing: border-box;
        }
      }

      .noteCode {
        width: 100%;
        height: 50px;
        background-color: #fff;
        border: 0;

        #note {
          width: 345px;
          margin-top: 10px;
          margin-left: 7.5px;
          border: 0;
          height: 30px;
          text-indent: 5px;
          line-height: 30px;
          border-radius: 3px;
          font-size: 14px;
          background-color: rgb(235, 235, 228);
        }
      }
    }
    .btn-phone {
      display: block;
      width: 155px;
      height: 47px;
      line-height: 47px;
      font-size: 20px;
      text-align: center;
      padding: 0px 16px;
      margin: 15px 10px;
      border-radius: 3px;
      border: 0;
      background-color: #dcdcdc;
      color: #999;
    }
  }
  .subline {
    margin: 14px 10px;

    .zc-left {
      float: left;

      a {
        color: #06c1ae;
        font-size: 14px;
      }
    }

    .zc-right {
      float: right;

      a {
        color: #06c1ae;
        font-size: 14px;
      }
    }
  }
}
</style>


