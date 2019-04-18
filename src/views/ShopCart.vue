<template>
  <div>
    <navBar :tabs="tabs"></navBar>
    <div class="content-wrap" v-for="item in info.goods" :key="item.id">
      <div class="content-title">{{ item.name }}</div>
      <div class="deal-content-wrap">
        <div class="content-info-line">
          单价:
          <span class="deal-price" id="price">{{ item.price }}元</span>
        </div>
        <div class="content-info-line border-t">
          数量:
          <div class="operate">
            <button type="button" class="btn minus btn-disabled" @click="minus()">-</button>
            <input type="text" class="number" :value="num">
            <button type="button" class="btn add btn-weak" @click="add()">+</button>
          </div>
        </div>
        <div class="content-info-line border-t">
          总价:
          <span class="deal-price amount">{{ totulPrice }}元</span>
        </div>
      </div>
      <div class="deal-content-wrap">
        <div class="content-info-line">
          还需支付:
          <span class="amount">{{ totulPrice }}元</span>
        </div>
      </div>
      <div class="btn-wrap">
        <button type="button" class="btn-sub">提交订单</button>
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
      tabs: { title: '提交订单' },
      info: {},
      num: 1,
      totulPrice: 0,
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
          console.log(item.goods)
          // console.log(this.$route)
          return item.id === parseInt(this.$route.params.id)
        })
      })
    },
    add () {
      this.num += 1;
      return this.num;
    },
    minus () {
      if (this.num > 1) {
        this.num -= 1;
        return this.num;
      }
    },
  },
  components: {
    navBar,
  },
  created () {
    this.getDetailData();
  }
}
</script>

<style lang="less">
@import '../styles/common/reset.less';
@import '../styles/common/common.less';
.content-wrap{

  .content-title{
    margin: 60px 20px 20px;
    font-size: 34px;
    font-weight: 400;
  }

  .deal-content-wrap{
    margin-bottom: 20px;
    border-top: 1px solid #ddd8ce;
    border-bottom: 1px solid #ddd8ce;
    background: #fff;

    .content-info-line{
      position: relative;
      padding: 0 20px;
      height: 90px;
      line-height: 90px;
      text-align: left;
      font-size: 30px;

      span{
        position: absolute;
        top: 0;
        right: 20px;
      }

      .operate{
        position: absolute;
        top: -2px;
        right: 20px;
        text-align: right;

        .btn{
          width: 60px;
          padding: 0;
          outline: 0;
          font-size: 50px;
          line-height: 60px;
          border-radius: 6px;
          transform: translateY(8px);
        }

        .minus{
          margin-right: 10px;
        }

        .number{
          width: 120px;
          height: 60px;
          vertical-align: middle;
          border: 2px solid #ddd8ce;
          border-radius: 6px;
          box-sizing: border-box;
          line-height: 60px;
          text-align: center;
          font: inherit;
        }

        .add{
          margin-left: 10px;
          transform: translateY(11px);
        }

      }

      .amount{
        font-weight: bold;
        color: #ff9712;
      }
    }

    .border-t{
      border-top: 1px solid #ddd8ce;
    }
  }

  .btn-wrap{
    margin: 0 20px;

    .btn-sub{
      display: block;
      width: 100%;
      height: 94px;
      line-height: 94px;
      font-size: 40px;
      background-color: #f90;
      color: #fff;
      text-align: center;
      border: 0;
      border-radius: 6px;
    }
  } 
}
</style>

