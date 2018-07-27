<template>
  <div class="item-cols-num clearfix">
    <div class="select">
      <span class="down"
        @click.stop.prevent="down()"
        :class="{'down-disabled':Num<=1}">-
      </span>
      <span class="num">
        <input type="text" :class="{show:show}"
          v-model="Num>=limit?limit:Num" @blur="blur()" maxlength="2">
        <ul ref="ul">
          <li v-for="i in numList" :key="i">{{i}}</li>
        </ul>
      </span>
      <span class="up" :class="{'up-disabled':Num>=limit}"
        @click.stop.prevent="up()">+</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      productMsg: {},
      small: [],
      big: '',
      product: {
        salePrice: 0
      },
      productNum: 1,
      userId: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .select {
    input {
      z-index: 10;
      width: 36px;
      height: 18px;
      background-color: #fff;
      border: none;
      text-align: center;
      line-height: 18px;
      font-size: 14px;
      padding: 0;
      color: #666;
      visibility: hidden;
      position: relative;
      border: none;
      &.show {
        visibility: visible;
      }
    }
    ul {
      padding: 0;
      line-height: 18px;
      font-size: 14px;
      display: inline-block;
      position: absolute;
      left: 0;
      list-style: none;
      width: 36px;
      font-family: system-ui;
      z-index: 1;
      transform: translateY(-36px);
    }
    .up.up-disabled, .up.up-disabled:hover {
      background-position: 0 -240px !important;
      cursor: not-allowed !important;
    }
  }

  .item-cols-num {
    display: inline-block;
  }

  .select {
    height: 40px;
    padding-top: 4px;
    input {
      width: 100%;
      text-align: center;
    }
    .down {
      background-position: 0 -60px;
    }
    .down.down-disabled:hover {
      background-position: 0 -300px;
      cursor: not-allowed;
    }
    .down, .up {
      background: url(../../static/images/cart-updown_8303731e15@2x.jpg) no-repeat;
      overflow: hidden;
      float: left;
      width: 34px;
      height: 37px;
      background-size: 100% auto;
      line-height: 40px;
      text-indent: -9999em;
      cursor: pointer;
      user-select: none;
    }
    .num {
      position: relative;
      overflow: hidden;
      text-align: center;
      float: left;
      width: 36px;
      height: 18px;
      margin: 7px 0 0;
      border: none;
      border-radius: 3px;
      line-height: 18px;
      text-align: center;
      font-size: 14px;
    }
    .up {
      margin: 0;
      background-position: 0 0;
      &:hover {
        background-position: 0 -120px;
      }
    }
    .down {
      background-position: 0 -60px;
      &:hover {
        background-position: 0 -180px;
      }
    }
  }

  .down.down-disabled {
    background-position: 0 -300px;
    cursor: not-allowed;
  }
</style>
