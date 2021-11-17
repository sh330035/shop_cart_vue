<template>
  <!-- part 3 account information -->
  <div class="part d-none">
    <h3 class="part-title">付款資訊</h3>
    <div class="form-container-three">
      <div class="form-row card-own">
        <label for="">持卡人姓名</label>
        <br />
        <input type="text" id="account-name" placeholder="John Doe" required />
      </div>
      <div class="form-row card-number">
        <label for="">卡號</label>
        <br />
        <div class="bank-account-input">
          <input
            type="text"
            class="card input-seperate"
            id="card"
            name="bank-account-1"
            maxlength="4"
            size="4"
            placeholder="1111"
            required
          />
          <input
            type="text"
            class="card input-seperate"
            name="bank-account-2"
            maxlength="4"
            size="4"
            placeholder="2222"
            required
          />
          <input
            type="text"
            class="card input-seperate"
            name="bank-account-3"
            maxlength="4"
            size="4"
            placeholder="3333"
            required
          />
          <input
            type="text"
            class="card input-seperate"
            name="bank-account-4"
            maxlength="4"
            size="4"
            placeholder="4444"
            required
          />
        </div>
      </div>
      <div class="form-row effective-date">
        <label for="">有效日期</label>
        <br />
        <!-- <input type="date" id="effective-date" required /> -->
        <div class="effective-date-input">
          <input
            type="text"
            name="mouth"
            class="date input-seperate"
            placeholder="MM"
            size="2"
            max="12"
            min="1"
            maxlength="2"
            required
          />
          <input
            type="text"
            name="year"
            class="date input-seperate"
            placeholder="YY"
            size="2"
            maxlength="2"
            required
          />
        </div>
      </div>
      <div class="form-row card-code">
        <label for="">CVC / CCV</label>
        <br />
        <input
          type="text"
          maxlength="3"
          size="2"
          id="card-code"
          placeholder="111"
          required
        />
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
.form-panel .part .form-container-three {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

form .form-row {
  margin-bottom: 24px;
  width: 100%;
}

form .form-row.name,
form .form-row.title,
form .form-row.effective-date,
form .form-row.card-code {
  width: 45%;
}

form .form-row > label {
  font-size: 12px;
  font-weight: 700;
  color: #808080;
}

form .form-row .bank-account-input {
  width: 100%;
  border: 1px solid #000000;
  display: inline-block;
  padding: 0.5rem;
  margin-top: 3px;
  border-radius: 5px;
}

form .form-row .bank-account-input input {
  width: 20%;
  border: 0;
  height: 14px;
  padding: unset;
  background-color: unset;
}

form .form-row .effective-date-input {
  width: 100%;
  border: 1px solid #000000;
  display: inline-block;
  padding: 0.5rem;
  margin-top: 3px;
  border-radius: 5px;
  z-index: 1;
}

form .form-row .effective-date-input input {
  width: 35%;
  border: 0;
  padding: 0;
  height: 14px;
  background-color: unset;
}

.form-panel .part .form-container-three .card-own,
.form-panel .part .form-container-three .card-number {
  width: 70%;
  min-width: 200px;
}
</style>