<template>
  <div class="form-panel">
    <form action="" id="shop-form" @submit.stop.prevent="handleSubmit">
      <div class="form-content">
        <FormPartOne v-show="formPartState == 1" />
        <FormPartTwo
          v-show="formPartState == 2"
          @part-two-info="partTwoInfoFetch"
        />
        <FormPartThree v-show="formPartState == 3" />
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
      partTwoInfo: {
        deliveryMethodSelect: "standard",
        shippingFee: 0,
      },
    };
  },
  methods: {
    // 狀態改變傳至Page
    previousStep() {
      this.$emit("after-previous-step");
    },
    nextStep() {
      this.$emit("after-next-step");
    },
    // 監控part two之運送方式
    partTwoInfoFetch(info) {
      this.partTwoInfo = info;
    },
    handleSubmit(e) {
      const form = e.target;
      const formData = new FormData(form);
      this.$emit("after-submit", formData);
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