<template>
  <div class="form-panel">
    <form action="" id="shop-form">
      <div class="form-content">
        <FormPartOne
          v-show="formPartState == 1"
          @part-one-info="partOenInfoFetch"
        />
        <FormPartTwo
          v-show="formPartState == 2"
          @part-two-info="partTwoInfoFetch"
        />
        <FormPartThree
          v-show="formPartState == 3"
          @part-three-info="partThreeInfoFetch"
        />
        <!-- button control -->
        <div id="btn-control" class="button-panel">
          <button
            @click.stop.prevent="previousStep"
            v-if="formPartState !== 1"
            class="btn btn-previous"
          >
            <span>&#8592; </span>&nbsp; 上一步
          </button>
          <button
            @click.stop.prevent="nextStep"
            v-if="formPartState !== 3"
            class="btn btn-next"
          >
            下一步 &nbsp;<span> &#8594;</span>
          </button>
          <button
            v-if="formPartState == 3"
            class="btn btn-submit"
            type="submit"
          >
            確認下單
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import FormPartOne from "../components/FormPartOne.vue";
import FormPartTwo from "../components/FormPartTwo.vue";
import FormPartThree from "../components/FormPartThree.vue";

export default {
  name: "shoping-form",
  props: {
    formPartState: {
      type: Number,
      required: true,
    },
  },
  components: {
    FormPartOne,
    FormPartTwo,
    FormPartThree,
  },
  data() {
    return {
      partOneInfo: {
        salutation: "",
        username: "",
        phone: "",
        email: "",
        city: "",
        addr: "",
      },
      partTwoInfo: {
        deliveryMethodSelect: "standard",
        shippingFee: 0,
      },
      partThreeInfo: {
        ccname: "",
        cardnumber: "",
        expdate: "",
        cvv: "",
      },
    };
  },
  methods: {
    previousStep() {
      this.$emit("after-previous-step");
    },
    nextStep() {
      this.$emit("after-next-step");
    },
    partOenInfoFetch(info) {
      console.log("fetch1");
      this.partOneInfo = info;
    },
    partTwoInfoFetch(info) {
      console.log("fetch2");
      this.partTwoInfo = info;
    },
    partThreeInfoFetch(info) {
      console.log("fetch3");
      this.partThreeInfo = info;
    },
  },
  watch: {
    partTwoInfo: {
      handler: function () {
        this.$emit("shipping-change", this.partTwoInfo);
      },
      deep: true,
    },
  },
};
</script>

<style>
.part {
  margin-bottom: 24px;
}
</style>

<style scoped>
.form-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 452px;
}
.button-panel {
  border-top: 1px solid #f0f0f5;
  display: flex;
  height: 90px;
  position: relative;
}

.button-panel .btn {
  margin: 20px 0;
  height: 46px;
  border-radius: 8px;
}
.button-panel .btn span {
  font-size: 18px;
}

.btn-previous,
.btn-submit,
.btn-next {
  min-width: 100px;
  width: 30%;
}
.btn-next,
.btn-submit {
  background-color: #f67599;
  color: #ffffff;
  position: absolute;
  right: 0px;
}
.btn-previous {
  position: absolute;
}
</style>