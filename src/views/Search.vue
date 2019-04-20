<template>
  <div>
    <navBar :tabs="tabs"></navBar>
    <!-- banner图区域 -->
    <Banner></Banner>
    <!-- 搜索框 -->
    <div id="search-wrap">
      <div>
        <form id="search-form" action="">
          <div class="box-search">
            <i class="iconfont icon-sousuo"></i>
            <input type="text" id="keyword" placeholder="输入商家名、品类或商圈">
          </div>
          <button type="submit" class="btn">搜索</button>
        </form>
        <div id="search-hot">
          <dl class="list-in">
            <dd class="icon-wrap">
              <ul class="icon-list">
                <li class="icon">
                  <a href="" class="icon-link">
                    周边热门
                  </a>
                </li>
                <li class="icon">
                  <a href="" class="icon-link">
                    深圳欢乐谷
                  </a>
                </li>
                <li class="icon">
                  <a href="" class="icon-link">
                    凤凰古村
                  </a>
                </li>
                <li class="icon">
                  <a href="" class="icon-link">
                    7天连锁酒店
                  </a>
                </li>
                <li class="icon">
                  <a href="" class="icon-link">
                    愿者上钩
                  </a>
                </li>
                <li class="icon">
                  <a href="" class="icon-link">
                    华莱士炸鸡
                  </a>
                </li>
                <li class="icon">
                  <a href="" class="icon-link">
                    德信影城
                  </a>
                </li>
                <li class="icon">
                  <a href="" class="icon-link">
                    彭厨
                  </a>
                </li>
                <li class="icon">
                  <a href="" class="icon-link">
                    环球国际影城
                  </a>
                </li>
              </ul>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from '../components/NavBar.vue'
import Banner from '../components/Banner.vue'
export default {
  data () {
    return {
      tabs: { title: '搜索', icon1: 'icon-homee', name1: '首页', icon2: 'icon-menuu', name2: '导航' }
    }
  },
  components: {
    navBar,
    Banner
  }
}
</script>

<style lang="less" scope>
@import '../styles/common/reset.less';
@import '../styles/common/common.less';
// search区
.navbar .nav-wrap-right{
  float:none !important;
}
#search-wrap{
  min-height: 250px;

  #search-form{
    position: relative;
    height: 40px;
    margin: 10px 0;
    padding: 0 10px;
    
    .box-search{
      position: relative;
      height: 40px;
      vertical-align: middle;
      margin-right: 70px;
      border-radius: 3px;
      border: 1px solid #ccc;
      background-color: #fff;
      line-height: 40px;
      padding: 0 35px 0;

      .icon-sousuo{
        position: absolute;
        left: 10px;
        font-size: 20px;
        color: #999;
      }

      input[type="text"]{
        display: block;
        width: 100%;
        height: 100%;
        border: none;
        outline-style: none;
        background-color: rgba(255,255,255,0);
        font-size: 14px;
        line-height: 214px;

      }
    }

    button{
      position: absolute;
      width: 60px;
      height: 100%;
      right: 10px;
      top: 0;
      background-color: #dcdcdc;
      color: #999;
      border: none;
      font-size: 14px;
      border-radius: 3px;
    }
  }

  #search-hot{

    .list-in{
      border-bottom: 1px solid #DDD8CE;
      background-color: #fff;

      .icon-wrap{
        height: 180px;

        .icon-list{
          height: auto;
          padding-bottom: 20px;
          font-size: 14px;

          .icon{
            display: inline-block;
            width: 25%;
            height: 40px;
            float: left;
            box-sizing: border-box;
            text-align: center;
            line-height: 40px;
            font-size: 14px;
            border-bottom: 1px solid #ddd8ce;
            margin-bottom: -1px;
            background-color: #fff;
            padding: 1px;
            background-clip: content-box;
            
            .icon-link{
              display: block;
              position: relative;
              height: 100%;
              padding: 10px 0;
              overflow: hidden;
              color: #000;
            }
          }
        }
      }
    }
  }
}
</style>

