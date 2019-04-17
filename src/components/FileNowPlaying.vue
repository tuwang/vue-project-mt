<template>
  <div class="film-list-content">
    <div class="nowPlayingList-wrap">
      <ul>
        <li class="item"
          v-for="item in movieList"
          :key="item.filmId">
          <router-link :to="{ name: 'detail', params: { id: item.filmId } }">
            <div class="img">
              <img
                :src="item.poster"
                alt
              >
            </div>
            <div class="info">
              <div class="film-name info-col">
                <span class="name">{{ item.name }}</span>
                <span class="item">{{ item.item.name }}</span>
              </div>
              <div class="film-grade info-col" style="visibility: visible;">
                <span class="label">观众评分</span>
                <span class="grade">{{ item.grade }}</span>
              </div>
              <div class="film-actors info-col">
                <span class="label">主演：{{ actorsFn(item.actors) }}</span>
              </div>
              <div class="film-detail info-col">
                <span class="label">{{ item.nation }} | {{ item.runtime }}分钟</span>
              </div>
            </div>
            <div class="buy">购票</div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="load-more" @click="loadmore" v-if="pageNum < totalPage">加载更多...</div>
    <div class="load-more" v-else>到底了</div>
  </div>
</template>

<script>
import Axios from 'axios';
export default {
  data () {
    return {
      movieList: [],
      pageNum: 1,
      pageSize: 10,
      total: 10
    }
  },
  computed: {
    totalPage () {
      return Math.ceil(this.total / this.pageSize)
    }
  },
  methods: {
    getList () {
      Axios.get('https://m.maizuo.com/gateway', {
        // axios 的 get请求，如果需要参数的话，那么是使用第二个参数里面的params这个选项来设置
        params: {
          cityId: 440300,
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          type: 1,
          k: 31887
        },
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"15546272691911260447363"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        let data = res.data;
        if(data.status === 0){
          this.total = data.data.total
          // this.movieList = data.data.films;
          this.movieList.push(...data.data.films);
        }else{
          alert(data.msg);
        }
      })
    },
    /**
     * 将主演的数组转换成主演的名字
     * @param {Array} actors 主演数组
     * actors = [] 是 es6中 参数默认值的设置
     */
    actorsFn(actors = []) {
      let temp = actors.map(item => {
        return item.name;
      })
      return temp.join('、');
    },
    loadmore () {
      this.pageNum ++
      this.getList()
    }
  },
  created() {
    this.getList();
  }
}
</script>

<style lang="less">
@import '../styles/common/mixins.less';
.film-list-content {
  background: #fff;
  ul {
    margin-left: 30px;

    li {
      padding: 30px 30px 30px 0;
      height: 188px;
      position: relative;
      box-sizing: content-box;

      > a {
        display: flex;
        align-items: center;
      }

      .img {
        flex-shrink: 0;
        width: 132px;
        height: 188px;
        background: rgb(249, 249, 249);
        img {
          width: 100%;
          border-radius: 4px;
        }
      }

      .info {
        flex: 1;
        padding: 0 20px;
        overflow: hidden;

        .info-col {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100%;
        }

        .film-name {
          .name {
            max-width: calc(100% - 50px);
            color: #191a1b;
            font-size: 32px;
            height: 44px;
            line-height: 44px;
            margin-right: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .item {
            font-size: 18px;
            color: #fff;
            background-color: #d2d6dc;
            height: 28px;
            line-height: 28px;
            padding: 0 4px;
            border-radius: 4px;
          }
        }

        .film-grade {
          .label {
            font-size: 26px;
            margin-top: 8px;
            color: #797d82;
          }
          .grade {
            color: #ffb232;
            font-size: 28px;
          }
        }

        .film-actors {
          .label {
            font-size: 26px;
            margin-top: 8px;
            color: #797d82;
          }
        }

        .film-detail {
          .label {
            font-size: 26px;
            margin-top: 8px;
            color: #797d82;
          }
        }
      }

      .buy {
        .border-1;
        flex-shrink: 0;
        line-height: 50px;
        height: 50px;
        width: 100px;
        color: #ff5f16;
        font-size: 26px;
        text-align: center;
        border-radius: 4px;
        position: relative;
      }
    }
  }
  .load-more{
    height: 72px;
    line-height: 72px;
    text-align: center;
  }
}
</style>
