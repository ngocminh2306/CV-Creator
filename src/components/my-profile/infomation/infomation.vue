<template>
  <div class="infomation">
    <form>
      <div class="input-content">
        <div class="label">
          <label>
            Full name
            <span class="required">*</span>
          </label>
        </div>
        <input required v-model="infomation.fullName" placeholder="Full name">
      </div>
      <div class="input-content">
        <div class="label">
          <label>Job</label>
        </div>
        <input v-model="infomation.job" placeholder="Job">
      </div>
      <div class="input-content">
        <div class="label">
          <label>
            Date of birth
            <span class="required">*</span>
          </label>
        </div>
        <input v-model="infomation.dateOfBirth" placeholder="Date of birth">
      </div>
      <div class="input-content">
        <div class="label">
          <label>
            Email
            <span class="required">*</span>
          </label>
        </div>
        <input required v-model="infomation.email" placeholder="Email">
      </div>
      <div class="input-content">
        <div class="label">
          <label>
            Phone
            <span class="required">*</span>
          </label>
        </div>
        <input required v-model="infomation.phone" placeholder="Phone">
      </div>
      <div class="input-content">
        <div class="label">
          <label>
            Address
            <span class="required">*</span>
          </label>
        </div>
        <input required v-model="infomation.address" placeholder="Address">
      </div>
      <div class="input-content">
        <div class="label">
          <label>Github</label>
        </div>
        <input v-model="infomation.gitHub" placeholder="Github">
      </div>
      <div class="input-content">
        <div class="label">
          <label>Facebook</label>
        </div>
        <input v-model="infomation.facebook" placeholder="Facebook">
      </div>
      <div class="update-button">
        <button type="submit" v-on:click="commitInfomation(infomation)">Update</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "infomation",
  data() {
    return {
      infomation: {
        fullName: "",
        job: "",
        dateOfBirth: "",
        email: "",
        phone: "",
        address: "",
        github: "",
        facebook: ""
      }
    };
  },
  methods: {
    commitInfomation: function(data) {
      if (this.isComplete()) {
        const parsed = JSON.stringify(this.infomation);
        localStorage.setItem('infomation', parsed);
      }
    },
    isComplete() {
      return (
        this.infomation.fullName &&
        this.infomation.dateOfBirth &&
        this.infomation.email &&
        this.infomation.phone &&
        this.infomation.address
      );
    }
  },
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.infomation {
  width: 100%;
}
.infomation .input-content input {
  width: 100%;
}
.label {
  text-align: left;
}
.label .required {
  color: red;
}
.update-button {
  display: flex;
}
.update-button button {
  z-index: 100;
  width: 80px;
  height: 30px;
  border-radius: 12px;
  border: 1px solid #5488c7;
  background-color: #5488c7;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
}
</style>
