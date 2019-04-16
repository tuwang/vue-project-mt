<template>
  <div>
    <div class="header">
      <div class="address">
        <a>
          深圳
          <i class="iconfont icon-arrow-down"></i>
        </a>
      </div>
      <div class="search">
        <input type="text" placeholder="输入商家/品类/商圈">
      </div>
      <div class="my">
        <a>
          <i class="iconfont icon-wode"></i>
          <span>我的</span>
        </a>
      </div>
    </div>
    <div class="nav">
      <ul>
        <li v-for="(item,index) in navList" :key="index">
          <router-link to="item.href">
            <i :class="[ 'iconfont', item.icon ]" :style="{ color:item.color }"></i>
            <span>{{ item.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="list">
      <dl>
        <dt>猜你喜欢</dt>
        <dd>
          <a href="#">
            <div class="deal">
              <div class="deal_left">
                <img
                  src="http://p1.meituan.net/200.0/deal/7b284ae8426ed2e34557596523fafaf6169906.jpg@69_0_564_564a%7C267h_267w_2e_90Q"
                  alt
                >
              </div>
              <div class="deal_rigth">
                <div class="name">正新鸡排</div>
                <div class="describe">[3店通用]正新鸡排一份</div>
                <div class="price">
                  <div class="p_left">
                    <span>8.9元</span>
                    <span>门市价:15元</span>
                  </div>
                  <div class="p_right">
                    <span>已售137116</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </dd>
        <dd class="dd">
          <a href="#">
            <div>查看全部团购</div>
            <i class="iconfont icon-right-angle"></i>
          </a>
        </dd>
      </dl>
    </div>
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
<script>
export default {
  data() {
    return {
      navList: [
        {
          name: "美食",
          href: "/meishi",
          color: "#fd9d21",
          icon: "icon-meishi"
        },
        {
          name: "猫眼电影",
          href: "/dianyin",
          color: "#ff6767",
          icon: "icon-icon_-maoyandianying"
        },
        {
          name: "酒店",
          href: "/jiudian",
          color: "#8a90fa",
          icon: "icon-jiudian"
        },
        {
          name: "休闲娱乐",
          href: "/dianyin",
          color: "#fed030",
          icon: "icon-xiuxianyule"
        },
        {
          name: "外卖",
          href: "/waimai",
          color: "#fd9d21",
          icon: "icon-waimai"
        },
        { name: "KTV", href: "/ktv", color: "#fed030", icon: "icon-ktv" },
        {
          name: "周边游",
          href: "/zhoubianyou",
          color: "#4dc6ee",
          icon: "icon-zhoubianyou"
        },
        { name: "丽人", href: "/liren", color: "#ff80c2", icon: "icon-liren1" },
        {
          name: "小餐快吃",
          href: "/xiaocankuaichi",
          color: "#fd9d21",
          icon: "icon-xiaochikuaican"
        },
        {
          name: "火车票",
          href: "/huoche",
          color: "#599eec",
          icon: "icon-huoche"
        }
      ]
    };
  }
};
</script>


<style lang="less">
@import "../styles/common/mixins.less";
.header {
  width: 100%;
  height: 101px;
  background: #06c1ae;
  border-bottom: 1px solid #21897d;
  .address {
    width: 135px;
    height: 101px;
    line-height: 101px;
    text-align: center;
    float: left;
    a {
      font-size: 32px;
      color: #fff;
    }
    i {
      font-size: 26px;
    }
  }
  .search {
    width: 517px;
    height: 64px;
    float: left;
    border-radius: 4px;
    margin-top: 20px;
    input {
      border: 0;
      width: 517px;
      height: 64px;
      font-size: 24px;
      padding-left: 17px;
      line-height: 64px;
      background: rgba(0, 0, 0, 0.15);
    }
    ::-webkit-input-placeholder {
      color: #fff;
    }
  }
  .my {
    width: 98px;
    height: 101px;
    float: right;
    line-height: 101px;
    a {
      width: 100%;
      height: 81px;
      display: block;
      text-align: center;
      height: 81px;
      color: #fff;
      i {
        font-size: 50px;
        height: 50px;
        margin-top: 20px;
        line-height: 50px;
        display: block;
        color: #fff;
      }
      span {
        display: block;
        height: 30px;
        line-height: 30px;
      }
    }
  }
}
.nav {
  width: 100%;
  height: 361px;
  background: #fff;
  ul {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    li {
      flex: 1 0 20%;
      height: 162px;
      a {
        display: flex;
        height: 162px;
        flex-direction: column;
        align-items: center;
        i {
          font-size: 80px;
        }
        span {
          color: #666;
          font-size: 24px;
        }
      }
    }
  }
}
.list {
  width: 100%;
  height: auto;
  margin-top: 40px;
  background: #fff;

  dl {
    padding-left: 20px;

    dt {
      font-size: 34px;
      padding-top: 30px;
      padding-bottom: 20px;
      color: #333;
      border-bottom: 1px solid #ddd8ce;
    }
    dd {
      border-bottom: 1px solid #dddddd;
      overflow: hidden;

      a {
        display: block;
        padding: 20px;
        padding-left: 0;
        height: 100%;

        .deal {
          position: relative;

          .deal_left {
            position: absolute;
            width: 180px;
            height: 164px;
            img {
              width: 180px;
              height: 164px;
            }
          }
          .deal_rigth {
            position: relative;
            height: 164px;
            color: #333;
            margin-left: 200px;
            .name {
              line-height: 30px;
              padding-top: 5px;
              font-size: 30px;
              margin-bottom: 12px;
            }
            .describe {
              height: 34px;
              font-size: 24px;
            }
            .price {
              margin-top: 44px;
              line-height: 19px;
              .p_left {
                float: left;
                :first-child {
                  color: #06c1ae;
                  font-size: 38px;
                  margin-right: 10px;
                }
                :last-child {
                  font-size: 24px;
                }
              }
              .p_right {
                float: right;
              }
            }
          }
        }
      }
    }
    .dd {
      position: relative;
      font-size: 30px;
      a {
        line-height: 40px;
        color: #06c1ae;
        div {
          position: absolute;
        }
        i {
          margin-left: 690px;
          font-size: 30px;
        }
      }
    }
  }
}
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
