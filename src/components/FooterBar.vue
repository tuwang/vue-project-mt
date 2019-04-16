<template>
  <div>
    <div class="footer">
      <div class="footer_bar">
        <a href="#" class="btn">登录</a>
        <a href="#" class="btn">注册</a>
        <div class="pull_right">
          <span>城市:</span>
          <a href="#" class="btn weak_btn">深圳</a>
        </div>
      </div>
      <div class="footer_nav">
        <a href="#">首页</a>|
        <a href="#">我的</a>|
        <a href="#">美团下载</a>|
        <a href="#">电脑下载</a>|
        <a href="#">帮助</a>
      </div>
      <div class="footer_link">
        友情链接:
        <a href="#">猫眼电影</a>
        <a href="#">大众点评</a>
        <a href="#">美团旅行</a>
        <br>
        <a href="#">榛果民宿</a>
        <a href="#">大众点评下载</a>
        <a href="#">美团收银官网</a>
        <br>
        <a href="#">大众点评餐饮学院</a>
        <a href="#">快驴进货商家合作</a>
      </div>
      <div class="footer_copyright">
        <p>&copy;2019 美团网 京ICP证070791号</p>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.footer {
  margin-top: 15px;
  padding: 0 10px 20px;
  .btn {
    display: inline-block;
    line-height: 60px;
    font-size: 28px;
    border: 1px solid #06c1ae;
    border-radius: 6px;
    padding: 0 32px;
    color: #06c1ae;
    text-align: center;
  }
  .weak_btn {
    padding: 0 44px;
    margin-left: 20px;
  }
  .footer_bar {
    height: 60px;
    font-size: 28px;
    margin-bottom: 40px;
    :first-child {
      margin-right: 20px;
    }
    .pull_right {
      float: right;
    }
  }
  .footer_nav {
    text-align: center;
    height: 60px;
    line-height: 60px;
    margin-bottom: 20px;
    a {
      padding: 0 30px;
      color: #06c1ae;
    }
  }
  .footer_link {
    text-align: center;
    margin-bottom: 20px;
    a {
      padding: 0 20px;
      line-height: 20px;
      color: #06c1ae;
    }
  }
  .footer_copyright {
    text-align: center;
  }
}
</style>
