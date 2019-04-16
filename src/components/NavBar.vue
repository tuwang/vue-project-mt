<template>
  <header id="nav-bar">
    <div class="nav-wrap-left">
      <a class="back">
        <i class="iconfont icon-arrow-left"></i>
      </a>
    </div>
    <span class="nav-header">我的美团</span>
    <div class="nav-wrap-right">
      <a>
        <span class="nav-btn">
          <i class="iconfont icon-home"></i>
        </span>
      </a>
      <a>
        <span class="nav-btn">
          <i class="iconfont icon-sousuo"></i>
        </span>
      </a>
    </div>
  </header>
</template>

<style lang="less">
@import '../styles/common/reset.less';
#nav-bar{
  width: 100%;
  height: 100px;
  display: -webkit-box;
  border-bottom: 1px solid #21897d;
  background: #06c1ae;

  .nav-wrap-left{
    text-align: center;
    line-height: 101px;

    a{
      position: relative;
      display: block;
      width: 45px;
      height: 100px;
      padding: 0 30px;

      i{
        position: absolute;
        top: 50%;
        transform: translate(-50%,-50%);
        left: 50%;
        font-size: 64px;
        font-weight: normal;
        color: #fff;
      }
    }
  }

  .nav-header{
    display: block;
    -webkit-box-flex: 1;
    text-align: center;
    line-height: 100px;
    color: #fff;
    font-size: 36px;
  }

  .nav-wrap-right{
    height: 100%;

    a{
      display: inline-block;
      width: 94px;
      height: 100%;
      text-align: center;
      line-height: 100px;
      color: #fff;

      .nav-btn{
        display: inline-block;
        height: 100px;
        font-size: 20px;

        i{
          font-size: 40px;
        }
      }
    }
  }
}
</style>

