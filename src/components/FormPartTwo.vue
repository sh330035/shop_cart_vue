<template>
  <!-- part 2 delivery method & price -->
  <div class="part d-none">
    <h3 class="part-title">運送方式</h3>
    <div class="form-container-two delivery-boxes">
      <div class="delivery-box">
        <input
          type="radio"
          id="standard-method"
          name="delivery-method"
          value="standard"
          checked
        />
        <div class="delivery-description">
          <label for="standard-method">標準運送</label>
          <p>約 3~7 個工作天</p>
        </div>
        <div class="delivery-price">
          <p>免費</p>
        </div>
      </div>
      <div class="delivery-box">
        <input
          type="radio"
          id="DHL-method"
          name="delivery-method"
          value="DHL"
        />
        <div class="delivery-description">
          <label for="DHL-method">DHL 貨運</label>
          <p>48 小時內送達</p>
        </div>
        <div class="delivery-price">
          <p>$500</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.part .part-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
}
.form-panel .part .form-container-two .delivery-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border: 1px solid #f0f0f5;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 24px;
}

.form-panel .part .form-container-two .delivery-box:hover {
  border: 1px solid #000000;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

.form-panel .part .form-container-two .delivery-box .delivery-description {
  width: 60%;
}

.form-panel
  .part
  .form-container-two
  .delivery-box
  .delivery-description
  > label {
  font-size: 14px;
  font-weight: 700;
}

.form-panel .part .form-container-two .delivery-box .delivery-description > p {
  font-size: 12px;
}

form input[type="radio"] {
  -webkit-appearance: none;
  border-radius: 50%;
  width: unset;
  height: unset;
  cursor: pointer;
}

form input[type="radio"]:checked {
  -webkit-box-shadow: inset 0 0 0 5px #000000;
  box-shadow: inset 0 0 0 5px #000000;
}
</style>