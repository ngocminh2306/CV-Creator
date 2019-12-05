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
        <input v-model="infomation.job_title" placeholder="Job">
      </div>
      <div class="input-content">
        <div class="label">
          <label>
            Date of birth
            <span class="required">*</span>
          </label>
        </div>
        <input v-model="infomation.dateOfBirth" type="date" placeholder="Date of birth">
      </div>
      <div class="input-content">
        <div class="label">
          <label>
            Email
            <span class="required">*</span>
          </label>
        </div>
        <input required v-model="infomation.emailAddress" placeholder="Email">
      </div>
      <div class="input-content">
        <div class="label">
          <label>
            Phone
            <span class="required">*</span>
          </label>
        </div>
        <input required v-model="infomation.phone_number" placeholder="Phone">
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
        <button v-on:click="commitInfomation(infomation)">Update</button>
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
        job_title: "",
        dateOfBirth: "",
        emailAddress: "",
        phone_number: "",
        address: "",
        github: "",
        facebook: ""
      }
    };
  },
  methods: {
    commitInfomation(data) {
      if (this.isComplete()) {
        const parsed = JSON.stringify(this.infomation)
        localStorage.setItem("infomation", parsed)
        this.$http.put(`/services/app/User/UpdateUserInfo`,{id: this.infomation.id,fullName: this.infomation.fullName,phone_number: this.infomation.phone_number,address: this.infomation.address}).then(response => {
        }).catch(error => {
          console.log(error)
        })
      }else {
        return
      }
    },
    isComplete() {
      return (
        this.infomation.id&&
        this.infomation.fullName &&
        this.infomation.dateOfBirth &&
        this.infomation.emailAddress &&
        this.infomation.phone_number &&
        this.infomation.address
      );
    }
  },
  computed: {
  },
  mounted() {
    let userInfo = JSON.parse(localStorage.getItem("user"));
    if (userInfo) {
      this.infomation = userInfo;
    }
  }
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
