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
  height: 102px;
  color: #fff;
  background-color: #06c1ae;
  border-bottom: 1px solid #21897d;

  .nav-wrap-left{
    height: 101px;
    line-height: 101px;

    .back{
      display: block;
      height: 100px;
      width: 45px;
      line-height: 100px;
      padding: 0 30px;

      .text-icon{
        display: inline-block;
        position: relative;
        height: 45px;
        width: 45px;
        vertical-align: middle;

        &::before{
          content: '';
          display: block;
          position: absolute;
          left: 7px;
          top: 0;
          width: 40px;
          height: 40px;
          border-bottom: 4px solid #fff;
          border-left: 4px solid #fff;
          transform: scaleY(0.8) rotateZ(45deg);
        }

        &::after{
          content: '';
          display: block;
          position: absolute;
          top: 20px;
          left: 3px;
          height: 0;
          width: 45px;
        }
      }
    }
  }

  .nav-header{
    display: block;
    -webkit-box-flex: 1;
    font-size: 36px;
    font-weight: 400;
    text-align: center;
    line-height: 100px;
  }

  .nav-wrap-right{
    height: 100%;

    a{
      display: inline-block;
      height: 100%;
      width: 94px;
      line-height: 100px;
      text-align: center;

      .nav-btn{
        display: inline-block;
        font-size: 20px;
        line-height: 1;
        vertical-align: middle;
        text-align: center;
        color: #fff;

        .icon-collect{
          background-image: url('http://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/94a35bd5a3c8b11f.png@5b99d5a');
          background-position: -88px 0;
          width: 40px;
          height: 40px;
        }

        .icon-menu{
          background-image: url('http://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/94a35bd5a3c8b11f.png@5b99d5a');
          background-position: -44px -44px;
          width: 40px;
          height: 40px;
        }
      }
    }
  }
}
</style>

