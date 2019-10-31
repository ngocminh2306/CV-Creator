<template>
  <div class="" style="text-align: left;">
    <div class="">
      <h1>Tính lương Gross sang Net / Net sang Gross chuẩn 2019</h1>
      <i>Áp dụng mức lương cơ sở mới nhất 1,490,000 có hiệu lực từ 1/7/2019 (Theo điều 3, nghị định 38/2019/NĐ-CP)</i>
    </div>
    <b-row class="my-2">
      <b-col class="self-center" sm="2">
        <label for="range-1">Thu nhập</label>
      </b-col>
      <b-col sm="4">
        <b-form-input id="range-1" v-model="income" type="number"></b-form-input>
      </b-col>
      <b-col class="self-center" sm="4">
        <i>Đơn vị: Việt Nam đồng</i>
      </b-col>
    </b-row>
    <div>
      <b-form-group label="Đóng bảo hiểm">
        <b-form-radio-group id="radio-group-1" v-model="insurance" name="radio-sub-component1">
          <b-form-radio name="some-radios" value="1">Trên lượng chính thức</b-form-radio>
          <b-row class="my-2">
            <b-col class="self-center" sm="2">
              <b-form-radio name="some-radios" value="2">Khác</b-form-radio>
            </b-col>
            <b-col sm="4">
              <b-form-input id="range-1" v-model="insuranceAmount" type="text"></b-form-input>
            </b-col>
          </b-row>
        </b-form-radio-group>
      </b-form-group>
    </div>
    <div>
      <b-form-group label="Vùng">
      <b-form-radio-group id="radio-group-2" v-model="area" name="radio-sub-component">
        <b-form-radio value="1">I</b-form-radio>
        <b-form-radio value="2">II</b-form-radio>
        <b-form-radio value="3">III</b-form-radio>
        <b-form-radio :value="4">IV</b-form-radio>
      </b-form-radio-group>
    </b-form-group>
    </div>
    <b-row class="my-2">
      <b-col class="self-center" sm="2">
        <label for="range-2">Số người phụ thuộc</label>
      </b-col>
      <b-col class="self-center" sm="4">
        <b-form-input id="range-2" v-model="dependencyPeople" type="number"></b-form-input>
      </b-col>
      <b-col class="self-center" sm="4">
        <i>Đơn vị: Người</i>
      </b-col>
    </b-row>
    <b-button variant="info" @click="GrossToNet()">Từ Gross sang Net</b-button>
    <b-button variant="warning" @click="NetToGross()">Từ Net sang Gross</b-button>
  </div>
</template>

<script>
export default {
  name: "salary-calculate",
  data() {
    return {
      income: 0,
      area: 1,
      insurance: 1,
      insuranceAmount: 0,
      dependencyPeople: 0
    };
  },
  methods: {
    GrossToNet() {
      console.log(this.income);
    },
    NetToGross() {
      console.log(this.income);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.self-center {
  align-self: center;
}
</style>
