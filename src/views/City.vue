<template>
  <div>
    <navBar :tabs="tabs"></navBar>
    <div class="wrapper">
      <div class="city-box">
        定位城市：
        <a href="#">
          <span class="city-name">深圳</span>
        </a>
      </div>
      <!-- <div class="recent">
        <h4>最近访问</h4>
        <div class="recent-city">
          <ul class="table">
            <li>
              <a href="#">北京</a>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </div>
      </div> -->
      <h4>热门城市</h4>
      <div class="hot-city">
        <ul class="table">
          <li>
            <a href="#">深圳</a>
          </li>
          <li>
            <a href="#">上海</a>
          </li>
          <li>
            <a href="#">北京</a>
          </li>
          <li>
            <a href="#">广州</a>
          </li>
        </ul>
      </div>
      <h4>全部城市</h4>
      <div class="all-city">
        <ul class="charlist">
          <li class="react"
          v-for="item in myCitys"
          :key = "item.py"
          >
           <a href="#">{{item.py}}</a>
          </li>

        </ul>
        <div class="abc">
          <ul class="table"
            v-for="item in myCitys"
            :key = "item.py"
           >
            <h5 class="A">{{item.py}}</h5>
            <li 
               v-for="city in item.list"
               :key="city.cityId"
            >
              <a href="#">{{city.name}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import { close } from 'fs'
import navBar from '../components/NavBar.vue'
export default {
  data() {
    return {
      citys: [],
      tabs: { title: '选择城市', icon1: 'icon-homee', name1: '首页', icon2: 'icon-ss', name2: '搜索' }
    }
  },

  computed: {
      myCitys() {
        var index = 0;
        var flag = {};
        var result = [];
        this.citys.forEach(item => {
          var py = item.pinyin.substr(0, 1).toUpperCase();

          if (flag[py]) {
            result[flag[py] - 1].list.push(item);
          } else {
            var obj = {
              py: py,
              list: [ item ]
            };
            flag[py] = ++index;
            result.push(obj);
          }
        })
        result.sort((a, b) => {
          return a.py.charCodeAt() - b.py.charCodeAt();
        })
        return result;
      }
  },

// hotCitys() {
//       return this.citys.filter(item => {
//         return item.isHot
//       })
//     },

  methods: {
    getCityList() {
     axios.get('https://m.maizuo.com/gateway?k=4551001', {
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"15546520171868310774513"}',
          'X-Host': 'mall.film-ticket.city.list'
        }
      }).then(res => {
        let data = res.data;
        console.log(data);
        if (data.status === 0) {
          this.citys = data.data.cities;
        } else {
          alert(data.msg);
        }
      })
    }
  },

  components: {
    navBar
  },

  created() {
    this.getCityList();
  }
}
</script>

<style lang="less">
@import "../styles/common/reset.less";
@import "../styles/common/common.less";
body,
html {
  background-color: #f0efed;
}
.wrapper {
  padding: 0px 10px;

  .city-box {
    height: 43px;
    background: #fff;
    margin: 10px 0px 10px;
    padding: 10px 10px;
    font-size: 14px;
    color: #333333;
    border: 1px solid #ddd8ce;
    border-radius: 3px;
    overflow: hidden;
    background-color: #fdfdfc;

    .city-name {
      color: #06c1ae;
    }
  }

  .recent {
    height: 67.5px;

    h4 {
      font-size: 15px;
      color: #333333;
      font-weight: 500;
      margin-top: 7px;
      margin-bottom: 7px;
    }

    .recent-city {
      height: 40px;
      background-color: #fdfdfc;
      // border: 1px solid #DDD8CE;
      border-radius: 3px;
      overflow: hidden;

      li {
        float: left;
        width: 20%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border: 1px solid #ddd8ce;

        a {
          display: block;
          color: #333333;
          font-size: 14px;
        }
      }
    }
  }
  h4 {
    font-size: 15px;
    color: #333333;
    font-weight: 500;
    margin-top: 7px;
    margin-bottom: 7px;
  }

  .hot-city {
    height: 100%;
    background-color: #fdfdfc;
    border-radius: 3px;
    overflow: hidden;

    li {
      float: left;
      width: 25%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border: 1px solid #ddd8ce;

      a {
        display: block;
        color: #333333;
        font-size: 14px;
      }
    }
  }
  h5 {
    float: left;
    width: 100%;
    height: 40px;
    line-height: 40px;
    color: #333333;
    font-size: 15px;
    background-color: #f0efed;
  }
  .all-city {
    margin-top: 5px;
    background-color: #fdfdfc;

    .charlist {
      min-height: 212.5px;

      .react {
        float: left;
        width: 20%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        // border:1px solid #ddd8ce;

        a {
          display: block;
          color: #06c1ae;
          font-size: 14px;
        }
      }
    }

    .abc {
      position: relative;
      border-top: 1px solid #ddd8ce;
      border-bottom: 1px solid #ddd8ce;
      background-color: #fdfdfc;

      .table {
        float: left;
        background-color: #fdfdfc;

        li {
          float: left;
          width: 350px;
          height: 40px;
          line-height: 40px;
          font-size: 14px;
          padding: 0px 15px;

          a {
            display: block;
            color: #333333;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
