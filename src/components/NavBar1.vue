<template>
  <header class="navbar">
    <div class="nav-wrap-left">
      <a href="" class="back">
        <i class="text-icon"></i>
      </a>
    </div>
    <div class="nav-header">团购详情</div>
    <div class="nav-wrap-right">
      <a href="">
        <span class="nav-btn">
          <i class="text-icon icon-sp icon-collect"></i>
          收藏
        </span>
      </a>
      <a href="">
        <span class="nav-btn">
          <i class="text-icon icon-sp icon-menu"></i>
          导航
        </span>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  
}
</script>

<style lang="less">
@import '../styles/common/reset.less';
@import '../styles/common/common.less';
.navbar{
  display: -webkit-box;
  position: relative;
  height: 51px;
  color: #fff;
  background-color: #06c1ae;
  border-bottom: 1px solid #21897d;

  .nav-wrap-left{
    height: 50.5px;
    line-height: 50.5px;

    .back{
      display: block;
      height: 50px;
      width: 22.5px;
      line-height: 50px;
      padding: 0 15px;

      .text-icon{
        display: inline-block;
        position: relative;
        height: 22.5px;
        width: 22.5px;
        vertical-align: middle;

        &::before{
          content: '';
          display: block;
          position: absolute;
          left: 3.5px;
          top: 0;
          width: 20px;
          height: 20px;
          border-bottom: 2px solid #fff;
          border-left: 2px solid #fff;
          transform: scaleY(0.8) rotateZ(45deg);
        }

        &::after{
          content: '';
          display: block;
          position: absolute;
          top: 10px;
          left: 1.5px;
          height: 0;
          width: 22.5px;
        }
      }
    }
  }

  .nav-header{
    display: block;
    -webkit-box-flex: 1;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    line-height: 50px;
  }

  .nav-wrap-right{
    height: 100%;

    a{
      display: inline-block;
      height: 100%;
      width: 47px;
      line-height: 50px;
      text-align: center;

      .nav-btn{
        display: inline-block;
        font-size: 10px;
        line-height: 51px;
        vertical-align: middle;
        text-align: center;
        color: #fff;

        .icon-collect{
          background-image: url('http://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/94a35bd5a3c8b11f.png@5b99d5a');
          background-position: -44px 0;
          width: 20px;
          height: 20px;
        }

        .icon-menu{
          background-image: url('http://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/94a35bd5a3c8b11f.png@5b99d5a');
          background-position: -22px -22px;
          width: 20px;
          height: 20px;
        }
      }
    }
  }
}
</style>

