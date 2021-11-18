<template>
  <!-- part 1 address information -->
  <div class="part">
    <h3 class="part-title">寄送地址</h3>
    <div class="form-container-One">
      <div class="form-row title">
        <label for="">稱謂</label>
        <div class="select-warpper">
          <select name="salutation" id="" v-model="salutation">
            <option value="" disabled selected>先生 / 女士</option>
            <option value="Mr">先生</option>
            <option value="Ms">女士</option>
          </select>
        </div>
      </div>
      <div class="form-row name">
        <label for="">姓名</label>
        <br />
        <input
          v-model="username"
          type="text"
          id="name"
          name="name"
          placeholder="請輸入姓名"
          required
        />
      </div>
      <div class="form-row phone">
        <label for="">電話</label>
        <br />
        <input
          type="tel"
          v-model="phone"
          id="phone"
          name="phone"
          placeholder="請輸入行動電話"
          required
        />
      </div>
      <div class="form-row email">
        <label for="">Email</label>
        <br />
        <input
          type="email"
          v-model="email"
          id="email"
          name="email"
          placeholder="請輸入電子郵件"
          required
        />
      </div>
      <div class="form-row city">
        <label for="">縣市</label>
        <br />
        <div class="select-warpper">
          <select name="city" v-model="city" id="city">
            <option value="" disabled selected>請選擇縣市</option>
            <option value="new-taipei-city">新北市</option>
            <option value="taipei">台北市</option>
            <option value="">桃園市</option>
            <option value="">台中市</option>
            <option value="">台南市</option>
            <option value="">高雄市</option>
          </select>
        </div>
      </div>
      <div class="form-row address">
        <label for="">地址</label>
        <br />
        <input
          type="text"
          v-model="addr"
          id="address"
          name="addr"
          placeholder="請輸入地址"
          required
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "form-part-one",
  data() {
    return {
      salutation: "",
      username: "",
      phone: "",
      email: "",
      city: "",
      addr: "",
    };
  },
};
</script>

<style scoped>
.part .part-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
}
.form-container-One {
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
.form-panel .part .form-container-One {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(1fr, 4rem)) [6];
  grid-template-columns: repeat(6, minmax(1fr, 4rem));
  -ms-grid-rows: (4rem) [3];
  grid-template-rows: repeat(3, 4rem);
  gap: 2rem;
  grid-template-areas:
    "title title name name name name"
    "phone phone phone email email email"
    "city city address address address address";
}
.form-panel .part .form-container-One .title {
  width: 100%;
  grid-row: 1;
  grid-column: 1;
  -ms-grid-column-span: 2;
  grid-area: title;
}
.form-panel .part .form-container-One .name {
  width: 100%;
  grid-row: 1;
  grid-column: 3;
  -ms-grid-column-span: 4;
  grid-area: name;
}
.form-panel .part .form-container-One .phone {
  grid-row: 2;
  grid-column: 1;
  -ms-grid-column-span: 3;
  grid-area: phone;
}
.form-panel .part .form-container-One .email {
  grid-row: 2;
  grid-column: 4;
  -ms-grid-column-span: 3;
  grid-area: email;
}
.form-panel .part .form-container-One .city {
  grid-row: 3;
  grid-column: 1;
  -ms-grid-column-span: 2;
  grid-area: city;
}
.form-panel .part .form-container-One .address {
  grid-row: 3;
  grid-column: 3;
  -ms-grid-column-span: 4;
  grid-area: address;
}
form select,
form input {
  width: 100%;
}
</style>