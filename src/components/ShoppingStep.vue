<template>
  <div class="stepper-panel">
    <div class="stepper-container">
      <div class="step active" :class="{ checked: formPartState > 1 }">
        <div class="circle-container"></div>
        <div class="label-container">寄送地址</div>
        <span class="connect-line"></span>
      </div>
      <div
        class="step"
        :class="{ active: formPartState > 1, checked: formPartState > 2 }"
      >
        <div class="circle-container"></div>
        <span class="connect-line"></span>
        <div class="label-container">運送方式</div>
      </div>
      <div class="step" :class="{ active: formPartState > 2 }">
        <div class="circle-container"></div>
        <div class="label-container">付款資訊</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "form-stepper",
  props: {
    formPartState: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.stepper-panel {
  width: 100%;
  padding-bottom: 27px;
}

.stepper-panel .stepper-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.stepper-panel .stepper-container :nth-child(2) .circle-container {
  margin: 0 auto;
}

.stepper-panel .stepper-container :nth-child(2) .connect-line {
  -webkit-transform: translate(-25%, 0);
  transform: translate(-25%, 0);
}

.stepper-panel .stepper-container :nth-child(3) .circle-container {
  margin: 0 0 0 auto;
}

.stepper-panel .step {
  position: relative;
  text-align: center;
  line-height: 27px;
  color: #afb1bd;
  width: 33%;
}

.stepper-panel .step:nth-child(1) .circle-container::after {
  content: "1";
}

.stepper-panel .step:nth-child(2) .circle-container::after {
  content: "2";
}

.stepper-panel .step:nth-child(3) .circle-container::after {
  content: "3";
}

.stepper-panel .step .circle-container {
  height: 32px;
  width: 32px;
  border-radius: 50%;
  border: 1px solid #afb1bd;
}

.stepper-panel .step .label-container {
  display: none;
}

.stepper-panel .step .connect-line {
  position: absolute;
  display: block;
  top: 16px;
  left: 100%;
  height: 1px;
  width: 80%;
  -webkit-transform: translate(-75%, 0);
  transform: translate(-75%, 0);
  background-color: #f0f0f5;
}

.stepper-panel .step.active {
  color: #ffffff;
}

.stepper-panel .step.active .circle-container {
  background-color: #000000;
}

.stepper-panel .step.active .connect-line {
  background-color: #000000;
}

.stepper-panel .step.checked .circle-container::after {
  content: "\2714";
}

.stepper-panel .stepper-container .step {
  line-height: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.stepper-panel .stepper-container .step .circle-container {
  height: 24px;
  width: 24px;
}
.stepper-panel .stepper-container .step .label-container {
  display: unset;
  margin-left: 10px;
  line-height: 10px;
  color: #000000;
}
.stepper-panel .stepper-container .step .connect-line {
  top: 12px;
  width: 60px;
}
.stepper-panel .stepper-container :nth-child(2) .circle-container {
  margin: 0 0 0 20%;
}
</style>