<template>
  <div>
    <navBar :tabs="tabs"></navBar>
    <div class="content-wrap" v-for="item in info.goods" :key="item.id">
      <div class="content-title">{{ item.type }}</div>
      <div class="deal-content-wrap">
        <div class="content-info-line">
          单价:
          <span class="deal-price" id="price">{{ item.price }}元</span>
        </div>
        <div class="content-info-line border-t">
          数量:
          <div class="operate">
            <button type="button" class="btn minus" :class="{ disable: isDisabled, weak: isWeak }" @click="minus()">-</button>
            <input type="text" class="number" :value="num">
            <button type="button" class="btn add weak" @click="add()">+</button>
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
      totul: 0,
      isDisabled: true,
      isWeak: false
    }
  },
  methods: {
    getDetailDatas () {
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
    add () {
      this.num += 1;
      this.totulPrice;
      return this.num;
    },
    minus () {
      if (this.num > 1) {
        this.num -= 1;
        this.totulPrice;
        return this.num;
      }
    },
  },
  computed: {
    totulPrice () {
      let a = this.info.price
      this.totul = this.num * a
      return this.totul.toFixed(1)
    }
  },
  watch: {
    num :function () {
      if (this.num > 1) {
        this.isDisabled = false
        this.isWeak = true
      } else {
        this.isDisabled = true
        this.isWeak = false
      }
    }
  },
  components: {
    navBar,
  },
  created () {
    this.getDetailDatas();
  },
}
</script>

<style lang="less">
@import '../styles/common/reset.less';
@import '../styles/common/common.less';
.content-wrap{

  .content-title{
    margin: 30px 10px 10px;
    font-size: 17px;
    font-weight: 400;
  }

  .deal-content-wrap{
    margin-bottom: 10px;
    border-top: 1px solid #ddd8ce;
    border-bottom: 1px solid #ddd8ce;
    background: #fff;

    .content-info-line{
      position: relative;
      padding: 0 10px;
      height: 45px;
      line-height: 45px;
      text-align: left;
      font-size: 15px;

      span{
        position: absolute;
        top: 0;
        right: 10px;
      }

      .operate{
        position: absolute;
        top: -1px;
        right: 10px;
        text-align: right;

        .btn{
          width: 30px;
          height: 30px;
          padding: 0;
          outline: 0;
          font-size: 25px;
          line-height: 27.5px;
          border-radius: 3px;
          transform: translateY(5.5px);
        }

        .minus{
          margin-right: 5px;
        }

        .number{
          width: 60px;
          height: 30px;
          vertical-align: middle;
          border: 1px solid #ddd8ce;
          border-radius: 3px;
          box-sizing: border-box;
          line-height: 30px;
          text-align: center;
          font: inherit;
        }

        .add{
          margin-left: 5px;
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
    margin: 0 10px;

    .btn-sub{
      display: block;
      width: 100%;
      height: 47px;
      line-height: 47px;
      font-size: 20px;
      background-color: #f90;
      color: #fff;
      text-align: center;
      border: 0;
      border-radius: 3px;
    }
  } 
}
</style>
