<template>
  <div>
    <!-- 头部 -->
    <navBar :tabs="tabs"></navBar>
    <!-- 个人信息tab -->
    <div>
      <a href="#" class="my-account">
        <img src="http://ms0.meituan.net/touch/img/my-photo.png" alt="" class="first-img">
        <img src="http://ms0.meituan.net/touch/img/pic-default.png" alt="" class="second-img">
        <div class="user-info">
          <p class="uname">Toki</p>
          <p>
            账户余额：<strong>0</strong>元
          </p>
          <i class="iconfont icon-right-angle"></i>
        </div>
      </a>
    </div>
    <dl class="list">
      <dd>
        <a href="" class="list-click">
          <div>
            <i class="iconfont order-icon icon-daipingjia1"></i>
            全部订单
            <i class="iconfont icon-right-angle"></i>
          </div>
        </a>
      </dd>
      <dd>
        <ul class="order-index">
          <li>
            <a href="">
              <i class="iconfont text-icon icon-daifukuan"></i>
              <span>待付款</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="iconfont text-icon icon-daishiyong"></i>
              <span>待使用</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="iconfont text-icon icon-daipingjia1"></i>
              <span>待评价</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="iconfont text-icon icon-tuikuan"></i>
              <span>退款</span>
            </a>
          </li>
        </ul>
      </dd>
    </dl>
    <dl class="list">
      <dd>
        <a href="" class="list-click">
          <div>
            <i class="iconfont order-icon icon-shoucang"></i>
            我的收藏
            <i class="iconfont icon-right-angle"></i>
          </div>
        </a>
      </dd>
      <dd>
        <a href="" class="list-click">
          <div>
            <i class="iconfont order-icon icon-diyongquan"></i>
            我的抵用券
            <i class="iconfont icon-right-angle"></i>
          </div>
        </a>
      </dd>
      <dd>
        <a href="" class="list-click">
          <div>
            <i class="iconfont order-icon icon-liwu-copy-copy-copy"></i>
            我的抽奖单
            <i class="iconfont icon-right-angle"></i>
          </div>
        </a>
      </dd>
      <dd>
        <a href="" class="list-click">
          <div>
            <i class="iconfont order-icon icon-jifen"></i>
            积分换礼品
            <i class="iconfont icon-right-angle"></i>
          </div>
        </a>
      </dd>
    </dl>
  </div>
</template>

<script>
import navBar from '../components/NavBar.vue'
export default {
  data () {
    return {
      tabs: { title: '我的美团', icon1: 'icon-homee', name1: '首页', icon2: 'icon-ss', name2: '搜索' }
    }
  },
  components: {
    navBar
  }
}
</script>

<style lang="less">
@import '../styles/common/reset.less';
@import '../styles/common/common.less';
.my-account{
  display: block;
  position: relative;
  width: 100%;
  height: 80.5px;
  background-color: #e1dace;
  color: #333;

  .first-img{
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;
  }

  .second-img{
    position: absolute;
    width: 60px;
    height: 60px;
    top: 10px;
    left: 20px;
  }

  .user-info{
    z-index: 1;
    position: relative;
    height: 100%;
    padding: 14px 10px;
    margin-right: 10px;
    padding-left: 100px;
    font-size: 12px;
    color: #666;

    p{
      text-align: justify;
      margin: -4px 0;
      word-break: break-all;

      strong{
        color:#FF9712;
        font-weight: normal;
      }
    }

    .uname{
      font-size: 15px;
      color: #333;
      margin-top: 5px;
      margin-bottom: 12.5px;
    }

    i{
      position: absolute;
      top: 50%;
      right: 2.5px;
      font-size: 15px;
      transform: translateY(-12px);
    }
  }
}

.list{
  border-top: 1px solid #DDD8CE;
  border-bottom: 1px solid #DDD8CE;
  margin-top: 10px;
  background: #fff;

  dd{
    position: relative;
    border-bottom: 1px solid #DDD8CE;

    .list-click{
      display: block;
      color: inherit;
      padding: 14px 10px;
      height: 100%;
      white-space: nowrap;

      div{
        position: relative;
        box-sizing: border-box;
        font-size: 14px;

        .order-icon{
          display: inline-block;
          width: 25px;
          height: 25px;
          text-align: center;
          line-height: 25px;
          border-radius: 3px;
          color: #fff;
          margin-right: 12.5px;
          margin-top: -3px;
          margin-bottom: -3px;
          font-size: 15px;
        }

        .icon-daipingjia1{
          background-color: #06c1ae;
        }

        .icon-shoucang{
          background-color: #0092DE;
        }

        .icon-diyongquan{
          background-color: #EB2C00;
        }
        
        .icon-liwu-copy-copy-copy{
          background-color: #F5B345;
        }

        .icon-jifen{
          background-color: #A624C7;
        }

        .icon-right-angle{
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 2.5px;
          font-size: 14px;
        }
      }
    }
  }

  .order-index{
    li{
      display: inline-block;
      position: relative;
      width: 24.2%;
      text-align: center;

      a{
        display: block;
        height: 100%;
        padding: 14px 0;
        color: #000;
        
        .text-icon{
          display: block;
          font-size: 30px;
          margin-top: -5px;
        }

        span{
          display: block;
          margin-top: -5px;
        }
      }
    }
  }
}
</style>
