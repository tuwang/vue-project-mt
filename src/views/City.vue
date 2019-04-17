<template>
  <div>
    <header class="navbar">
      <div class="nav-wrap-left">
        <a href="#">
          <i class="iconfont icon-arrow-left"></i>
        </a>
      </div>
      <span class="nav-title">选择城市</span>
      <div class="nav-wrap-right">
        <a href="#" class="home">
          <span>
            <i class="iconfont icon-home"></i>首页
          </span>
        </a>
        <a href="#" class="sousuo">
          <span>
            <i class="iconfont icon-sousuo"></i>搜索
          </span>
        </a>
      </div>
    </header>
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
import axios from "axios";
import { close } from 'fs';

export default {
  data() {
    return {
      citys: [],
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

  created() {
    this.getCityList();
  }
}
</script>

<style lang="less">
@import "../styles/common/reset.less";
body,
html {
  background-color: #f0efed;
}
.navbar {
  height: 100px;
  background: #06c1ae;

  .nav-wrap-left {
    float: left;
    width: 105px;
    height: 100px;

    a {
      display: block;
      text-align: center;
    }

    i {
      font-size: 60px;
      color: #fff;
    }
  }
  .nav-title {
    float: left;
    width: 446px;
    line-height: 100px;
    height: 100px;
    font-size: 36px;
    color: #fff;
    text-align: center;
  }
  .nav-wrap-right {
    float: left;
    width: 180px;
    height: 100px;

    a {
      display: inline-block;
      width: 85px;
      text-align: center;
    }

    span {
      font-size: 20px;
      color: #fff;
    }

    i {
      display: block;
      font-size: 40px;
      color: #fff;
    }
  }
}

.wrapper {
  padding: 0px 20px;

  .city-box {
    height: 86px;
    background: #fff;
    margin: 20px 0px 20px;
    padding: 20px 20px;
    font-size: 28px;
    color: #333333;
    border: 1px solid #ddd8ce;
    border-radius: 6px;
    overflow: hidden;
    background-color: #fdfdfc;

    .city-name {
      color: #06c1ae;
    }
  }

  .recent {
    height: 135px;

    h4 {
      font-size: 30px;
      color: #333333;
      font-weight: 500;
      margin-top: 14px;
      margin-bottom: 14px;
    }

    .recent-city {
      height: 80px;
      background-color: #fdfdfc;
      // border: 1px solid #DDD8CE;
      border-radius: 6px;
      overflow: hidden;

      li {
        float: left;
        width: 20%;
        height: 80px;
        line-height: 80px;
        text-align: center;
        border: 1px solid #ddd8ce;

        a {
          display: block;
          color: #333333;
          font-size: 28px;
        }
      }
    }
  }
  h4 {
    font-size: 30px;
    color: #333333;
    font-weight: 500;
    margin-top: 14px;
    margin-bottom: 14px;
  }

  .hot-city {
    height: 100%;
    background-color: #fdfdfc;
    border-radius: 6px;
    overflow: hidden;

    li {
      float: left;
      width: 25%;
      height: 80px;
      line-height: 80px;
      text-align: center;
      border: 1px solid #ddd8ce;

      a {
        display: block;
        color: #333333;
        font-size: 28px;
      }
    }
  }
  h5 {
    float: left;
    width: 100%;
    height: 80px;
    line-height: 80px;
    color: #333333;
    font-size: 30px;
    background-color: #f0efed;
  }
  .all-city {
    margin-top: 10px;
    background-color: #fdfdfc;

    .charlist {
      min-height: 425px;

      .react {
        float: left;
        width: 20%;
        height: 80px;
        line-height: 80px;
        text-align: center;
        // border:1px solid #ddd8ce;

        a {
          display: block;
          color: #06c1ae;
          font-size: 28px;
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
          width: 700px;
          height: 80px;
          line-height: 80px;
          font-size: 28px;
          padding: 0px 30px;

          a {
            display: block;
            color: #333333;
            font-size: 28px;
          }
        }
      }
    }
  }
}
</style>
