<template>
  <div id="app">
    <navBar :tabs="tabs"></navBar>
    <div class="list"
      v-for="item in info.goods"
      :key="item.id">
      <a href="" class="toutu">
        <img :src="item.imgUrl" alt="" class="toutu-img">
        <div class="desc">
          <h1 class="title">{{ item.name }}</h1>
          <span>{{ item.type }}</span>
        </div>
      </a>
      <div class="list-group">
        <div class="buy-price group-padding">
          <div class="container">
            <div class="price">
              <strong class="strong-color">{{ item.price }}</strong>
              <span class="strong-color">元</span>
              <span>门市价:{{ item.originalPrice }}</span>
            </div>
            <router-link :to="{ name: 'cart' }" class="btn">立即抢购</router-link>
          </div>
        </div>
        <div class="agreement group-padding">
          <ul class="agree">
            <li class="color-ok">
              <span class="agreement-icon icon-sp icon-tk"></span>
              <span>支持随时退款</span>
            </li>
            <li class="color-ok">
              <span class="agreement-icon icon-sp icon-gq"></span>
              <span>支持过期自动退</span>
            </li>
            <li class="agreement-solds">
              <span class="agreement-icon icon-solds icon-sp"></span>
              <span>{{ item.sold }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="list-group poi-container">
        <div class="group-title">商家信息</div>
        <div class="group-item group-padding">
          <div class="card">
            <div class="biz-detail">
              <a href="" class="detail-info">
                <h5 class="single-line">{{ item.name }}</h5>
                <div class="address single-line">{{ item.adress }}</div>
                <div class="dist">
                  <span class="icon-sp icon-location"></span>
                  <span class="dist-title">离我最近</span>
                </div>
              </a>
            </div>
            <div class="biz-call">
              <a href="" class="phone">
                <div class="icon-sp icon-tel"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="list-group menu-container">
        <div class="group-title">套餐</div>
        <div class="menu">
          <div class="menu-table">
            <div class="menu-item menu-tr">
                <span class="left">{{ item.type }}</span>
                <span class="middle">1 位</span>
                <span class="right">{{ item.price }}元</span>
            </div>
            <div class="menu-item menu-head">备注</div>
          </div>
          <div class="menu-explanation">
            <ul>
              <li class="menu-li">自助晚餐：15：00-22：00</li>
              <li class="menu-li">最多可用餐 2 小时</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="list-group notice-container">
        <div class="group-title">购买须知</div>
        <div class="group-padding">
          <div class="notice-item">
            <div class="notice-item-title">有效期</div>
            <ul class="notice-item-des">
              <li>2014.11.28 至 2019.5.7（周末、法定节假日通用）</li>
            </ul>
          </div>
          <div class="notice-item">
            <div class="notice-item-title">使用规则</div>
            <ul class="notice-item-des">
              <li class="much-content">1米（不含）以下儿童免费，每位成人限带1名免费儿童，1米（含）-1.3米（含）收费29元/位</li>
              <li class="much-content">到店加5元可享受自助火锅</li>
              <li class="much-content">进店用餐需收取每台20元的食物押金，避免食物浪费，桌上浪费100g按20元计算，以此类推</li>
              <li class="much-content">团购用户不可同时享受商家其他优惠</li>
              <li class="much-content">部分菜品因时令原因有所不同，请以店内当日实际供应为准</li>
              <li class="much-content">无需预约，消费高峰期可能需要等位</li>
              <li class="much-content">每张美团券最多1位成人使用，身高1米以上儿童计入人数</li>
              <li class="much-content">商家提供免费WiFi</li>
              <li class="much-content">停车位收费标准：请咨询商家</li>  
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from '../components/NavBar.vue'
import axios from 'axios'
export default {
  data () {
    return {
      tabs: { title: '团购详情', icon1: 'icon-collect', name1: '收藏', icon2: 'icon-menuu', name2: '导航' },
      info: {},

    }
  },
  methods: {
    getDetailData () {
      axios.get('/json/imgUrl.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(res => {
        let data = res.data;
        this.info = data.find(item => {
          // console.log(item.goods)
          // console.log(this.$route)
          return item.id === parseInt(this.$route.params.id)
        })
      })
    },
  },
  components: {
    navBar
  },
  created () {
    this.getDetailData();
  }
}

</script>
<style lang="less">
@import '../styles/common/reset.less';
@import '../styles/common/common.less';
.list{
  max-height: 99999px;
  margin-top: 0;

  .toutu{
    display: block;
    position: relative;
    overflow: hidden;
    height: 195px;

    .toutu-img{
      position: absolute;
      top: 50%;
      width: 100%;
      min-height: 100%;
      transform: translateY(-50%);
      vertical-align: middle;
    }

    .desc{
      position: absolute;
      left: 15px;
      right: 15px;
      bottom: 14px;
      z-index: 1;
      text-shadow: 1px 1px 1px #000;
      color: #fff;

      .title{
        margin-bottom: 7px;
        font-size: 19px;
        line-height: 1.1;
      }
    }
  }

  .list-group{
    border-bottom: 1px solid #ddd8ce;
    background-color: #fff;

    .buy-price{
      position: relative;
      top: 0;
      left: 0;
      color: #999;
      width: 100%;
      box-sizing: border-box;
      border-bottom: 1px solid #ddd8ce;

      .container{
        line-height: 1;

        .price{
          display: inline-block;
          vertical-align: text-top;

          strong{
            font-size: 33px;
            margin-right: 3px;
            font-weight: bolder;
          }

          .strong-color{
            color: #06c1ae;
          }
        }

        .btn{
          display: inline-block;
          position: absolute;
          height: 40px;
          width: 130px;
          right: 10px;
          top: 10.5px;
          text-align: center;
          line-height: 40px;
          font-size: 20px;
          background: #f90;
          border-radius: 3px;
          color: #fff;
        }
      }
    }

    .agreement{

      .agree{
        line-height: 1;
        overflow: hidden;

        li{
          display: inline-block;
          height: 28px;
          width: 49%;
          // float: left;
          padding: 0;
          box-sizing: border-box;
          line-height: 28px;
          text-align: left;
          white-space: nowrap;
          text-overflow: ellipsis;

          .agreement-icon{
            display: inline-block;
            vertical-align: middle;
            transform: scale(1.42,1.42);
            margin-left: 5px;
            margin-right: 8px;
          }

          .icon-tk{
            background-image: url('http://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/94a35bd5a3c8b11f.png@5b99d5a');
            background-position: -17px -63px;
            width: 14px;
            height: 14px;
          }

          .icon-gq{
            background-image: url('http://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/94a35bd5a3c8b11f.png@5b99d5a');
            background-position: -33px -63px;
            width: 14px;
            height: 14px;
          }
        }

        .agreement-solds{
          margin-bottom: 5px;

          .icon-solds{
            background-image: url('http://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/94a35bd5a3c8b11f.png@5b99d5a');
            background-position: -49px -63px;
            width: 14px;
            height: 14px;
          }
        }
      }
    }
  }

  .poi-container{
    border-top: 1px solid #ddd8ce;
    margin-top: 10px;

    .group-item{
      .card{
        display: -webkit-box;
        -webkit-box-align: center;

        .biz-detail{
          -webkit-box-flex: 1;

          .detail-info{
            display: block;

            h5{
              margin-top: 0;
              margin-bottom: 3px;
              font-size: 16px;
              color: #000;
            }
            .single-line{
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }

            .address{
              padding-right: 10px;
              color: #666;
            }

            .dist{
              margin-top: 7px;
              line-height: 1.1;
              color: #666;

              .icon-location{
                background-image: url('http://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/94a35bd5a3c8b11f.png@5b99d5a');
                background-position: -65px -63px;
                width: 14px;
                height: 14px;
              }

              .dist-title{
                margin-left: 15px;
                color: #eb8706;
              }
            }
          }
        }

        .biz-call{
          width: 70px;
          text-align: center;
          border-left: 1px solid #ddd8ce;
          font-size: 25px;
          height: 60px;
          line-height: 60px;
          color: #06c1ae;

          .phone{
            display: block;
            height: 100%;

            .icon-tel{
              background-image: url('http://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/94a35bd5a3c8b11f.png@5b99d5a');
              background-position: -44px -22px;
              width: 19px;
              height: 19px;
            }
          }
        }
      }
    }
  }

  .menu-container{
    border-top: 1px solid #ddd8ce;
    margin-top: 10px;
    background: #fff;
    font-size: 15px;

    .menu{
      .menu-table{
        
        .menu-item{
          border-bottom: 1px solid #ddd8ce;
          line-height: 1.41;
        }

        .menu-tr{
          display: -webkit-box;
          font-size: 15px;
          padding-left: 10px;

          .left{
            -webkit-box-flex: 1;
            display: block;
            padding: 11px 0;
            padding-right: 10px;
          }

          .middle{
            display: -webkit-box;
            -webkit-box-align: center;
            width: 85px;
            padding: 11px 10px;
            border-left: 1px solid #ccc;
          }

          .right{
            display: -webkit-box;
            -webkit-box-align: center;
            width: 60px;
            padding: 11px 10px;
            border-left: 1px solid #ccc;
          }
        }

        .menu-head{
          background: #f8f9fa;
          padding: 5px;
          font-size: 15px;
          color: #000;
          text-align: center;
        }
      }

      .menu-explanation{
        position: relative;
        padding: 14px 10px;
        border-bottom: 1px solid #ddd8ce;
        overflow: hidden;
        font-weight: 400;

        ul{
          list-style-type: disc;
          padding-left: 20px;

          .menu-li{
            list-style-type: disc;
          }
        }
      }
    }
  }

  .notice-container{
    border-top: 1px solid #ddd8ce;
    margin-top: 10px;
    background: #fff; 

    .notice-item{
      margin-bottom: 13px;

      .notice-item-title{
        font-size: 15px;
        color: #f90;
      }

      .notice-item-des{
        padding-top: 10px;
        padding-left: 8px;
        font-size: 15px;
        color: #333;

        .much-content{
          list-style-type: disc;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>

