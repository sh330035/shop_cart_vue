<template>
  <div class="cart">
    <div class="cart-title-container">
      <h3 class="cart-title">購物籃</h3>
    </div>
    <div class="cart-items d-flex flex-column scrollbar">
      <div class="item-card" v-for="item in items" :key="item.id">
        <div class="item-image">
          <img :src="item.image" alt="item image" />
        </div>
        <div class="item-content">
          <div class="item-title">{{ item.name }}</div>
          <div class="item-count">
            <div class="minus" @click.stop.prevent="minusButtonClick(item.id)">
              -
            </div>
            <div class="count">{{ item.count }}</div>
            <div class="add" @click.stop.prevent="addButtonClick(item.id)">
              +
            </div>
          </div>
        </div>
        <div class="item-unit-price">{{ item.unitPrice }}</div>
      </div>
    </div>
    <div class="cart-delivery-fee d-flex justify-content-between">
      <div class="content">運費</div>
      <div class="delivery-fee subtotal">{{ deliveryFee }}</div>
    </div>
    <div class="cart-total-cost d-flex justify-content-between">
      <div class="content">小計</div>
      <div class="total-cost subtotal">{{ totalCostCal }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
    },
    shippingFee: {
      type: Number,
      required: true,
    },
  },
  methods: {
    addButtonClick(itemId) {
      this.$emit("after-add-count", itemId);
    },
    minusButtonClick(itemId) {
      this.$emit("after-minus-count", itemId);
    },
  },
  computed: {
    totalCostCal() {
      let totalCostTemp = 0;
      // 將所有項目相加
      for (let i = 0; i < this.items.length; i++) {
        totalCostTemp += this.items[i].unitPrice * this.items[i].count;
      }
      totalCostTemp = totalCostTemp + this.shippingFee;
      return totalCostTemp;
    },
    deliveryFee() {
      let showed = "";
      // 確認當前運送方式，回傳顯示值
      if (this.shippingFee == 0) {
        showed = "免費";
      } else {
        showed = `$ ${this.shippingFee}`;
      }
      return showed;
    },
  },
  updated: function () {
    this.$emit("total-cost-change", this.totalCostCal);
  },
  created() {
    this.$emit("total-cost-change", this.totalCostCal);
  },
};
</script>

<style scoped>
.cart {
  margin: auto;
  padding: 16px 10px 0px 16px;
  border: 1px solid #f0f0f5;
  border-radius: 10px;
  width: 80%;
}

.cart .cart-title-container {
  padding-bottom: 16px;
}

.cart .cart-title {
  display: unset;
  font-size: 18px;
}

.cart .cart-items {
  padding-top: 20px;
  min-height: 280px;
  max-height: 280px;
  overflow-y: scroll;
}

.cart .item-card {
  padding-bottom: 32px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.cart .item-card .item-image img {
  -o-object-fit: cover;
  object-fit: cover;
  width: 100px;
  height: 100px;
  display: block;
  border-radius: 8px;
}

.cart .item-card .item-content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 150px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.cart .item-card .item-content .item-count {
  padding: 16px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-around;
  align-items: center;
  width: 120px;
}

.cart .item-card .item-content .item-count .add,
.cart .item-card .item-content .item-count .minus {
  width: 27px;
  height: 27px;
  font-size: 25px;
  background-color: #f0f0f5;
  border-radius: 50%;
  text-align: center;
  line-height: 25px;
  cursor: pointer;
}

.cart .item-card .item-unit-price {
  font-weight: 700;
  margin-right: 20px;
}

.cart .cart-delivery-fee,
.cart .cart-total-cost {
  border-top: 1px solid #f0f0f5;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  margin-right: 40px;
}

.cart .cart-delivery-fee .content,
.cart .cart-total-cost .content {
  font-size: 14px;
}

.cart .cart-delivery-fee .subtotal,
.cart .cart-total-cost .subtotal {
  font-size: 14px;
  font-weight: 700;
}
</style>