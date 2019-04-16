<template>
  <div>
    <nav-bar></nav-bar>
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
  components: {
    navBar,
    Banner
  }
}
</script>

<style lang="less">
@import '../styles/common/reset.less';
// search区
#search-wrap{
  min-height: 500px;

  #search-form{
    position: relative;
    height: 80px;
    margin: 20px 0;
    padding: 0 20px;
    
    .box-search{
      position: relative;
      height: 80px;
      vertical-align: middle;
      margin-right: 140px;
      border-radius: 6px;
      border: 1px solid #ccc;
      background-color: #fff;
      line-height: 80px;
      padding: 0 70px 0;

      .icon-sousuo{
        position: absolute;
        left: 20px;
        font-size: 40px;
        color: #999;
      }

      input[type="text"]{
        display: block;
        width: 100%;
        height: 100%;
        border: none;
        outline-style: none;
        background-color: rgba(255,255,255,0);
        font-size: 28px;
        line-height: 28px;

      }
    }

    button{
      position: absolute;
      width: 120px;
      height: 100%;
      right: 20px;
      top: 0;
      background-color: #dcdcdc;
      color: #999;
      border: none;
      font-size: 28px;
      border-radius: 6px;
    }
  }

  #search-hot{

    .list-in{
      border-bottom: 1px solid #DDD8CE;
      background-color: #fff;

      .icon-wrap{
        height: 360px;

        .icon-list{
          height: auto;
          padding-bottom: 40px;
          font-size: 28px;

          .icon{
            display: inline-block;
            width: 25%;
            height: 80px;
            float: left;
            box-sizing: border-box;
            text-align: center;
            line-height: 80px;
            font-size: 28px;
            border-bottom: 1px solid #ddd8ce;
            margin-bottom: -1px;
            background-color: #fff;
            padding: 1px;
            background-clip: content-box;
            
            .icon-link{
              display: block;
              position: relative;
              height: 100%;
              padding: 20px 0;
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

