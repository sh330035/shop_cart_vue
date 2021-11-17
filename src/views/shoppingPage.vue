<template>
  <div class="container">
    <h1 class="page-title">結帳</h1>
    <div class="row">
      <div class="container-left">
        <ShoppingStep :formPartState="formPartState" />
        <!-- shoppingForm -->
        <ShoppingForm
          :formPartState="formPartState"
          @after-previous-step="afterPreviousStep"
          @after-next-step="afterNextStep"
        />
      </div>
      <div class="container-right">
        <!-- shoppingCart -->
        <ShoppingCart
          :items="items"
          :delivery-method="deliveryMethod"
          @after-add-count="afterAddCount"
          @after-minus-count="afterMinusCount"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingCart from "../components/ShoppingCart.vue";
import ShoppingStep from "../components/ShoppingStep.vue";
import ShoppingForm from "../components/ShoppingForm.vue";

const dummyData = {
  items: [
    {
      id: 1,
      name: "破壞補釘修身牛仔褲",
      unitPrice: 3999,
      image:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      count: 1,
    },
    {
      id: 2,
      name: "刷色直筒牛仔褲",
      unitPrice: 1299,
      image:
        "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
      count: 1,
    },
    {
      id: 3,
      name: "修身窄管牛仔褲",
      unitPrice: 1399,
      image:
        "https://images.unsplash.com/photo-1475178626620-a4d074967452?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=386&q=80",
      count: 1,
    },
  ],
  deliveryMethod: [
    {
      id: "standard-method",
      method: "standardMethod",
      fee: 0,
      showed: "免費",
      thisMethod: true,
    },
    {
      id: "DHL-method",
      method: "DHLMethod",
      fee: 500,
      showed: "$500",
      thisMethod: false,
    },
  ],
};

export default {
  name: "shoppingPage",
  components: {
    ShoppingCart,
    ShoppingStep,
    ShoppingForm,
  },
  data() {
    return {
      items: [],
      deliveryMethod: [],
      formPartState: 1,
      userFilled: {
        salutation: "",
        username: "",
        phone: "",
        email: "",
        city: "",
        addr: "",
        shippingFee: 0,
        ccname: "",
        cardnumber: "",
        expdate: "",
        cvv: 0,
        totalPrice: 0,
      },
    };
  },
  methods: {
    fetchData() {
      const { items, deliveryMethod } = dummyData;
      this.items = items;
      this.deliveryMethod = deliveryMethod;
    },
    afterAddCount(itemId) {
      this.items = this.items.map((item) => {
        if (item.id == itemId) {
          item.count++;
          return { ...item, count: item.count };
        } else {
          return item;
        }
      });
    },
    afterMinusCount(itemId) {
      this.items = this.items.map((item) => {
        if (item.id == itemId) {
          if (item.count - 1 <= 0) {
            alert("click delete button");
            return item;
          }
          item.count--;
          return { ...item, count: item.count };
        } else {
          return item;
        }
      });
    },
    afterPreviousStep() {
      this.formPartState--;
    },
    afterNextStep() {
      this.formPartState++;
    },
    afterSubmit() {},
  },
  created() {
    this.fetchData();
  },
};
</script>

<style>
button {
  background-color: transparent;
  border: 0;
  cursor: pointer;
}

button[disabled] {
  pointer-events: none;
}

input {
  padding: 0;
}

input:required {
  -webkit-box-shadow: none;
  box-shadow: none;
}

input:invalid {
  -webkit-box-shadow: none;
  box-shadow: none;
}
form input,
form select {
  border: 1px solid #000000;
  border-radius: 5px;
  font-style: 16px;
  padding: 0.25rem;
  margin-top: 2px;
  height: 30px;
}
</style>

<style scoped>
.container {
  margin: 50px auto;
  width: 80%;
}
.container .row {
  display: flex;
  justify-content: space-between;
}
.container .row .container-left {
  width: 45%;
}
.container .row .container-right {
  width: 50%;
}

.page-title {
  width: 100%;
  height: 78px;
  margin: 20px 0;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
</style>