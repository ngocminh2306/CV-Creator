<template>
  <div class="" style="text-align: left;">
    <div class="">
      <h1>Tính lương Gross sang Net / Net sang Gross chuẩn 2019</h1>
      <i>Áp dụng mức lương cơ sở mới nhất 1,490,000 có hiệu lực từ 1/7/2019 (Theo điều 3, nghị định 38/2019/NĐ-CP)</i>
    </div>
    <b-row class="my-2">
      <b-col sm="2">
        <label for="range-1">Thu nhập</label>
      </b-col>
      <b-col sm="6">
        <b-form-input id="range-1" v-model="value" type="text"></b-form-input>
      </b-col>
      <b-col sm="4">
        <i>Đơn vị: Việt Nam đồng</i>
      </b-col>
    </b-row>
    <div>
      <b-form-group label="Đóng bảo hiểm">
        <b-form-radio v-model="selected" name="some-radios" value="1">Trên lượng chính thức</b-form-radio>
        <b-row class="my-2">
          <b-col sm="1">
            <b-form-radio v-model="selected" name="some-radios" value="2">Khác</b-form-radio>
          </b-col>
          <b-col sm="4">
            <b-form-input id="range-1" v-model="value" type="text"></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>
    </div>
    <div>
      <b-form-group label="Vùng">
      <b-form-radio-group id="radio-group-2" v-model="selected" name="radio-sub-component">
        <b-form-radio value="1">I</b-form-radio>
        <b-form-radio value="2">II</b-form-radio>
        <b-form-radio value="3">III</b-form-radio>
        <b-form-radio :value="4">IV</b-form-radio>
      </b-form-radio-group>
    </b-form-group>
    </div>
    <b-row class="my-2">
      <b-col sm="2">
        <label for="range-2">Số người phụ thuộc</label>
      </b-col>
      <b-col sm="6">
        <b-form-input id="range-2" v-model="value" type="text"></b-form-input>
      </b-col>
      <b-col sm="4">
        <i>Đơn vị: Người</i>
      </b-col>
    </b-row>
    <b-button variant="info">Từ Gross sang Net</b-button>
    <b-button variant="warning">Từ Net sang Gross</b-button>
  </div>
</template>

<script>
export default {
  name: "salary-calculate",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
