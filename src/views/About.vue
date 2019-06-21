<template>
  <section class="product" >
    <template v-for="item in product" >
      <div class="product-header">
        <div class="left">
          <span class="shop-name">{{item.storeName}}</span>
        </div>
        <div class="right">
          <span>{{`评价${item.areaAgentFee}分`}}</span>
          <span>{{`配送费&yen;${item.deliveryPrice}`}}</span>
        </div>
      </div>
      <div class="product-content">
        <div class="img-wrapper">
          <img :src="item.foodImageURL" :alt="item.foodName">
        </div>
        <div class="product-info">
          <div class="title" :class="{'in-active': !hasProduct}">{{item.foodName}}</div>
          <div class="info-body">
            <div class="body-left">
              <div class="remain">
                <div class="remain-num"
                  :class="{'active': hasProduct}"
                >
                  <span>{{hasProduct ? `仅剩${item.promotionStock}份` : '今日已抢完'}}</span>
                </div>
                <div class="remain-bar">
                  <div :style="{'width': `${item.promotionStock / item.dailyStock * 100}%`}" class="bar-inner"></div>
                </div>
              </div>
              <div class="price-wrapper">
                <div class="cur-price" :class="{'in-active': !hasProduct}">&yen;<span>{{item.activityPrice}}</span></div>
              </div>
            </div>
            <div class="right-button">
              <button :class="{'none': !hasProduct}">{{hasProduct ? '马上抢' : '进店逛逛'}}</button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </section>
</template>

<script>
  export default {
    data(){
      return{
        product:[{
          storeId: 1,
          foodId: 1,
          activityId: 1,
          foodName: '喜力330瓶装啤酒 我就是喜力啤酒 世界排名第三的啤酒 不一样的啤酒',
          storeName: 'E点便利（上海市 普陀区 真北路 1009号 天怡美便利店 24小时营业）',
          dailyStock: 20,
          promotionStock: 0,
          stockStatus: 1,
          areaAgentFee: 3, // 起送价
          deliveryPrice: 5,
          foodImageURL: 'https://fuss10.elemecdn.com/e/c1/62734f91dbc96899a980def94069djpeg.jpeg',
          activityPrice: 9.9,
          originalPrice: 20.00,
        }, 
        {
          storeId: 1,
          foodId: 2,
          activityId: 1,
          foodName: '喜力330瓶装啤酒 我就是喜力啤酒 世界排名第三的啤酒 不一样的啤酒',
          storeName: 'E点便利（上海市 普陀区 真北路 1009号 天怡美便利店 24小时营业）',
          dailyStock: 20,
          promotionStock: 3,
          stockStatus: 1,
          areaAgentFee: 3, // 起送价
          deliveryPrice: 5,
          foodImageURL: 'https://fuss10.elemecdn.com/e/c1/62734f91dbc96899a980def94069djpeg.jpeg',
          activityPrice: 9.9,
          originalPrice: 20.00,
        }, {
          storeId: 1,
          foodId: 3,
          activityId: 1,
          foodName: '喜力330瓶装啤酒 我就是喜力啤酒 世界排名第三的啤酒 不一样的啤酒',
          storeName: 'E点便利（上海市 普陀区 真北路 1009号 天怡美便利店 24小时营业）',
          dailyStock: 20,
          promotionStock: 0,
          stockStatus: 1,
          areaAgentFee: 3, // 起送价
          deliveryPrice: 5,
          foodImageURL: 'https://fuss10.elemecdn.com/e/c1/62734f91dbc96899a980def94069djpeg.jpeg',
          activityPrice: 9.9,
          originalPrice: 20.00,
        }, {
          storeId: 1,
          foodId: 4,
          activityId: 1,
          foodName: '喜力330瓶装啤酒 我就是喜力啤酒 世界排名第三的啤酒 不一样的啤酒',
          storeName: 'E点便利（上海市 普陀区 真北路 1009号 天怡美便利店 24小时营业）',
          dailyStock: 20,
          promotionStock: 3,
          stockStatus: 1,
          areaAgentFee: 3, // 起送价
          deliveryPrice: 5,
          foodImageURL: 'https://fuss10.elemecdn.com/e/c1/62734f91dbc96899a980def94069djpeg.jpeg',
          activityPrice: 9.9,
          originalPrice: 20.00,
        }, {
          storeId: 1,
          foodId: 5,
          activityId: 1,
          foodName: '喜力330瓶装啤酒 我就是喜力啤酒 世界排名第三的啤酒 不一样的啤酒',
          storeName: 'E点便利（上海市 普陀区 真北路 1009号 天怡美便利店 24小时营业）',
          dailyStock: 20,
          promotionStock: 3,
          stockStatus: 1,
          areaAgentFee: 3, // 起送价
          deliveryPrice: 5,
          foodImageURL: 'https://fuss10.elemecdn.com/e/c1/62734f91dbc96899a980def94069djpeg.jpeg',
          activityPrice: 9.9,
          originalPrice: 20.00,
        }, {
          storeId: 1,
          foodId: 6,
          activityId: 1,
          foodName: '喜力330瓶装啤酒 我就是喜力啤酒 世界排名第三的啤酒 不一样的啤酒',
          storeName: 'E点便利（上海市 普陀区 真北路 1009号 天怡美便利店 24小时营业）',
          dailyStock: 20,
          promotionStock: 3,
          stockStatus: 1,
          areaAgentFee: 3, // 起送价
          deliveryPrice: 5,
          foodImageURL: 'https://fuss10.elemecdn.com/e/c1/62734f91dbc96899a980def94069djpeg.jpeg',
          activityPrice: 9.9,
          originalPrice: 20.00,
        }, {
          storeId: 1,
          foodId: 7,
          activityId: 1,
          foodName: '喜力330瓶装啤酒 我就是喜力啤酒 世界排名第三的啤酒 不一样的啤酒',
          storeName: 'E点便利（上海市 普陀区 真北路 1009号 天怡美便利店 24小时营业）',
          dailyStock: 20,
          promotionStock: 3,
          stockStatus: 1,
          areaAgentFee: 3, // 起送价
          deliveryPrice: 5,
          foodImageURL: 'https://fuss10.elemecdn.com/e/c1/62734f91dbc96899a980def94069djpeg.jpeg',
          activityPrice: 9.9,
          originalPrice: 20.00,
        }, {
          storeId: 1,
          foodId: 8,
          activityId: 1,
          foodName: '喜力330瓶装啤酒 我就是喜力啤酒 世界排名第三的啤酒 不一样的啤酒',
          storeName: 'E点便利（上海市 普陀区 真北路 1009号 天怡美便利店 24小时营业）',
          dailyStock: 20,
          promotionStock: 3,
          stockStatus: 1,
          areaAgentFee: 3, // 起送价
          deliveryPrice: 5,
          foodImageURL: 'https://fuss10.elemecdn.com/e/c1/62734f91dbc96899a980def94069djpeg.jpeg',
          activityPrice: 9.9,
          originalPrice: 20.00,
      },],
      }
    },
    computed: {
      
      hasProduct() {
        return +this.product[0].promotionStock !== 0
      },
    },
  }
</script>

<style lang='scss' scoped>
  :root {
    --redColor: #ff3618;
  }
  .product {
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    font-family: "PingFangSC";
  }
  .product-header {
    height: 72px;
    box-sizing: border-box;
    border-bottom: 1px dashed rgb(221, 221, 221);
    font-size: 12px;
    font-family: "PingFangSC";
    color: #666;
    display: flex;
    justify-content: space-between;
  }
  .left, .right {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .left {
    flex: 1;
    max-width: 60%;
  }
  .shop-name {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .right span {
    padding: 0 15px;
  }
  .right > span:last-of-type {
    padding-right: 0;
    position: relative;
    &::before {
      content: '';
      width: 1px;
      height: 20px;
      position: absolute;
      top: 6px;
      left: 0;
      background: #ddd;
    }
  }
  .product-content {
    display: flex;
    padding-top: 20px;
  }
  .img-wrapper {
    width: 90px;
    height: 90px;
    overflow: hidden;
    position: relative;
    border-radius: 4px;
    flex-shrink: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .product-info {
    margin-left: 20px;
    overflow: hidden;
    flex: 1;
    .title {
      font-size: 12px;
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .in-active {
      opacity: .4;
    }
    .info-body {
      padding-top: 24px;
      display: flex;
      justify-content: space-between;
      flex: 1;
    }
    .body-left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .remain-num {
      font-size: 12px;
      color: #666;
    }
    .active {
      color: #ccc
    }
    .remain-bar {
      height: 12px;
      border-radius: 6px;
      background-color: #ddd;
      position: relative;
      margin-top: 6px;
    }
    .bar-inner {
      height: 100%;
      background: red;
      position:absolute;
      left: 0;
      border-radius: 6px;
    }
    .price-wrapper {
      display: flex;
      font-family: "PingFangSC";
      margin-top: 10px;
    }
    .cur-price {
      color: var(--redColor);
      margin-right: 15px;
      font-size: 12px;
      span {
        font-weight: 500;
        font-size: 12px;
      }
    }
    .pre-price {
      font-size: 24px;
      color: #999;
      display: flex;
      flex-direction: column-reverse;
      span {
        margin-bottom: 10px;
        text-decoration: line-through;
      }
    }
    .right-button {
      display: flex;
      flex-direction: column-reverse;
      button {
        width: 160px;
        height: 70px;
        border-radius: 4px;
        box-sizing: border-box;
        background: #ccc;
        font-size: 16px;
        font-weight: 500;
        text-align: center;
        line-height: 70px;
        color: #fff;
      }
      .none {
        background: #fff;
        border: 1px solid var(--redColor);
        color: var(--redColor);
      }
    }
  }
</style>