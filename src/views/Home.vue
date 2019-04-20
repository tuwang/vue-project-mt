<template>
  <div>
    <div class="header">
      <div class="address">
        <router-link :to="{ name:'city' }">
          深圳
          <i class="iconfont icon-arrow-down"></i>
        </router-link>
      </div>
      <router-link :to="{ name:'search' }" class="search">
        <i class="iconfont icon-sousuo"></i>
        输入商家/品类/商圈
      </router-link>
      <div class="my">
        <router-link :to="{ name: 'center' }">
          <i class="iconfont icon-wode"></i>
        </router-link>
      </div>
    </div>
    <div class="nav">
      <ul>
        <li v-for="(item,index) in navList" :key="index">
          <router-link :to="item.href">
            <i :class="[ 'iconfont', item.icon ]" :style="{ color:item.color }"></i>
            <span>{{ item.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="list">
      <dl>
        <dt>猜你喜欢</dt>
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          loading-text="拼命中..."
          @load="onLoad"
          :offset="10"
        >
          <van-cell v-for="item in list" :key="item.id">
            <template>
              <dd>
                <router-link :to="{ name:'detail', params: { id: item.id } }">
                  <div class="deal">
                    <div class="deal_left">
                      <img :src="item.imgUrl" alt>
                    </div>
                    <div class="deal_rigth">
                      <div class="name">{{ item.name }}</div>
                      <div class="describe">{{ item.type }}</div>
                      <div class="price">
                        <div class="p_left">
                          <span>{{ item.price }}元</span>
                          <span>门市价:{{ item.originalPrice }}</span>
                        </div>
                        <div class="p_right">
                          <span>{{ item.sold }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </router-link>
              </dd>
            </template>
          </van-cell>
        </van-list>
        <dd class="dd">
          <a href="#">
            <div>查看全部团购</div>
            <i class="iconfont icon-right-angle"></i>
          </a>
        </dd>
      </dl>
    </div>
    <FooterBar></FooterBar>
  </div>
</template>
<script>
import FooterBar from "../components/FooterBar.vue";

import { mapMutations, mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "List",
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
          href: "cinema",
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
      // stortList: []
    };
  },

  computed: {
    ...mapState("seller", ["list", "pageNum", "pageSize", "totalSize"]),
    ...mapGetters("seller", ["totalPage", "finished"]),
    loading: {
      get() {
        return this.$store.state.seller.loading;
      },
      set(value) {
        this.$store.commit("seller/changeLoading", value);
      }
    }
  },
  methods: {
    /* getStortList() {
      Axios.get('/json/imgUrl.json')
        .then(res => {
          let data = res.data
          // console.log(data)
          this.stortList = data
          // console.log(this.stortList)
        })
    } */
    ...mapMutations("seller", [
      "changeList",
      "changeTotalSize",
      "changeLoading",
      "addPageNum"
    ]),
    ...mapActions("seller", ["onLoad"])
  },
  components: {
    FooterBar
  }
  /* created() {
    this.getStortList()
  } */
};
</script>


<style lang="less">
@import "../styles/common/mixins.less";
.header {
  width: 100%;
  height: 50.5px;
  background: #06c1ae;
  border-bottom: 1px solid #21897d;
  .address {
    width: 67.5px;
    height: 50.5px;
    line-height: 50.5px;
    text-align: center;
    float: left;
    a {
      font-size: 16px;
      color: #fff;
    }
    i {
      font-size: 13px;
    }
  }
  .search {
    width: 250px;
    height: 32px;
    float: left;
    line-height: 32px;
    border-radius: 2px;
    font-size: 12px;
    margin-top: 10px;
    padding-left: 8.5px;
    color: #eee;
    background: rgba(0, 0, 0, 0.15);
    i {
      font-size: 14px;
      color: #fff;
    }
  }
  .my {
    width: 49px;
    height: 50.5px;
    float: right;
    line-height: 50.5px;
    a {
      width: 100%;
      height: 10.5px;
      display: block;
      text-align: center;
      height: 40.5px;
      color: #fff;
      i {
        font-size: 25px;
        display: block;
        color: #fff;
      }
      span {
        display: block;
        height: 15px;
        line-height: 15px;
      }
    }
  }
}
.nav {
  width: 100%;
  height: 180.5px;
  background: #fff;
  ul {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    li {
      flex: 1 0 20%;
      height: 81px;
      a {
        display: flex;
        height: 81px;
        flex-direction: column;
        align-items: center;
        i {
          font-size: 40px;
        }
        span {
          color: #666;
          font-size: 12px;
        }
      }
    }
  }
}
.list {
  width: 100%;
  height: auto;
  margin-top: 20px;
  background: #fff;

  dl {
    padding-left: 10px;

    dt {
      font-size: 17px;
      padding-top: 15px;
      padding-bottom: 10px;
      color: #333;
      border-bottom: 1px solid #ddd8ce;
    }
    dd {
      border-bottom: 1px solid #dddddd;
      overflow: hidden;

      a {
        display: block;
        padding: 10px;
        padding-left: 0;
        height: 100%;

        .deal {
          position: relative;

          .deal_left {
            position: absolute;
            width: 90px;
            height: 82px;
            img {
              width: 90px;
              height: 82px;
            }
          }
          .deal_rigth {
            position: relative;
            height: 82px;
            color: #333;
            margin-left: 100px;
            .name {
              line-height: 15px;
              padding-top: 2.5px;
              font-size: 15px;
              margin-bottom: 6px;
            }
            .describe {
              height: 17px;
              font-size: 12px;
            }
            .price {
              margin-top: 26px;
              line-height: 9.5px;
              .p_left {
                float: left;
                :first-child {
                  color: #06c1ae;
                  font-size: 19px;
                  margin-right: 5px;
                }
                :last-child {
                  font-size: 12px;
                }
              }
              .p_right {
                font-size: 12px;
                float: right;
              }
            }
          }
        }
      }
    }
    .dd {
      position: relative;
      font-size: 15px;
      a {
        line-height: 20px;
        color: #06c1ae;
        div {
          position: absolute;
        }
        i {
          margin-left: 345px;
          font-size: 15px;
        }
      }
    }
  }
}
</style>
