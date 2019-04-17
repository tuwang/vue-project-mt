<template>
  <div>
    <header class="navbar">
      <div class="nav-wrap-left">
        <a href="#">
          <i class="iconfont icon-arrow-left"></i>
        </a>
      </div>
      <span class="nav-title">美团网</span>
      <div class="nav-wrap-right">
        <a href="#" class="nav">
          <span>
            <i class="iconfont icon-daohang"></i>导航
          </span>
        </a>
      </div>
    </header>
    <div id="login">
      <dl class="list">
        <dd class="nav">
          <ul>
            <li>
              <a href="#" @click="className = 'account'">美团账号登录</a>
            </li>
            <li>
              <a href="#" @click="className = 'phone'">手机验证登录</a>
            </li>
            <div class="slide" :class="{ left: isLeft, right: isRight }"></div>
          </ul>
        </dd>
      </dl>
      <div id="from">
        <form action id="login-from" v-if="className === 'account'">
          <input id="username" type="text" placeholder="账户名/手机号/Email">
          <input id="password" type="password" placeholder="请输入您的密码">
          <button type="submit" id="btn">登录</button>
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
          <button type="submit" class="btn-phone">登录</button>
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
export default {
  data() {
    return {
      className: "account",
      isLeft: true,
      isRight: false
    };
  },
  computed: {
      fn1 () {
          if (this.className === 'account') {
              this.isLeft = true;
              this.isRight = false;
          }else if (this.className === 'phone') {
              this.isLeft = false;
              this.isRight = true;
          }
      }
  }
};
</script>

<style lang="less">
@import "../styles/common/reset.less";
body,
html {
  background-color: #f0efed;
}
.navbar {
  height: 100px;
  background: #06c1ae;

  .nav-wrap-left {
    float: left;
    width: 105px;
    height: 100px;

    a {
      display: block;
      text-align: center;
    }

    i {
      font-size: 60px;
      color: #fff;
    }
  }
  .nav-title {
    float: left;
    width: 446px;
    line-height: 100px;
    height: 100px;
    font-size: 36px;
    color: #fff;
    text-align: center;
  }
  .nav-wrap-right {
    float: right;
    width: 180px;
    height: 100px;

    a {
      display: block;
      float: right;
    }

    span {
      font-size: 20px;
      color: #fff;
    }

    i {
      display: block;
      font-size: 40px;
      color: #fff;
    }
  }
}

#login {
  display: block;

  .list {
    border-bottom: 1px solid #ddd8ce;

    .nav {
      height: 84px;

      ul {
        position: relative;
        height: 84px;
        border-bottom: 8px solid #DDD8CE;

        li {
          display: block;
          float: left;
          width: 50%;
          height: 76px;
          padding: 0px 20px;
          background-color: #fff;

          a {
            display: block;
            height: 76px;
            line-height: 76px;
            text-align: center;
            color: #333333;
            font-size: 28px;
            font-weight: 400;
          }
        }

        .slide {
            position: absolute;
            width: 355px;
            bottom: -8px;
            border-bottom: 8px solid #06c1ae;
        }

        .left{
            left:20px;
        }

        .right{
            left: 375px;
        }
      }
    }
  }

  #login-from {
    height: 290px;
    box-sizing: border-box;

    #username {
      display: block;
      width: 100%;
      padding-left: 0;
      padding: 28px 20px;
      border-bottom: 1px solid #ddd8ce;
      font-size: 28px;
      color: #333333;
      border-top: 0;
      border-left: 0;
      border-right: 0;
    }
    #password {
      display: block;
      width: 100%;
      padding-left: 0;
      padding: 28px 20px;
      border-bottom: 1px solid #ddd8ce;
      font-size: 28px;
      color: #333333;
      border: 0;
    }
    #btn {
      display: block;
      width: 710px;
      height: 94px;
      line-height: 94px;
      font-size: 40px;
      text-align: center;
      padding: 0px 32px;
      margin: 20px 20px;
      border-radius: 6px;
      color: #fff;
      border: 0;
      background-color: #06c1ae;
    }
  }

  #phone-login {
    // margin-top: 30px;
    height: 296px;

    dl {
      border-bottom: 1px solid #ddd8ce;
      background-color: #fff;
      height: 174px;

      .get-PhoneCode {
        position: relative;
        width: 100%;
        border-bottom: 1px solid #ddd8ce;

        #phone {
          width: 600px;
          padding-left: 0;
          padding: 28px 20px;
          font-size: 28px;
          color: #333333;
          border-top: 0;
          border-left: 0;
          border-right: 0;
        }
        .getCode {
          position: absolute;
          right: 30px;
          top: 20px;
          background-color: #dcdcdc;
          color: #999;
          border: 0;
          padding: 0 20px;
          text-align: center;
          height: 60px;
          border-radius: 6px;
          font-size: 28px;
          line-height: 60px;
          box-sizing: border-box;
        }
      }

      .noteCode {
        width: 100%;
        border: 0;

        #note {
          width: 690px;
          margin-top: 10px;
          margin-left: 15px;
          border: 0;
          height: 60px;
          text-indent: 10px;
          line-height: 60px;
          border-radius: 6px;
          font-size: 28px;
          background-color: rgb(235, 235, 228);
        }
      }
    }
    .btn-phone {
      display: block;
      width: 710px;
      height: 94px;
      line-height: 94px;
      font-size: 40px;
      text-align: center;
      padding: 0px 32px;
      margin: 20px 20px;
      border-radius: 6px;
      border: 0;
      background-color: #dcdcdc;
      color: #999;
    }
  }
  .subline {
    margin: 28px 20px;

    .zc-left {
      float: left;

      a {
        color: #06c1ae;
        font-size: 28px;
      }
    }

    .zc-right {
      float: right;

      a {
        color: #06c1ae;
        font-size: 28px;
      }
    }
  }
}
</style>


