<template>
  <div class="header__main">
    <div class="header__main_content">
      <ul>
        <li>
          <a
            href="#/"
            style="line-height: 38px; width: 50px;
            background-image: url('https://www.truesales.vn/uploads/cv88-logo2.png'; background-repeat: no-repeat; background-size: contain;"
          >&nbsp;</a>
        </li>
        <li>
          <a href="#/mini-tools">Mini Tools</a>
        </li>
        <li>
          <a href="#/my-cv">My CV</a>
        </li>
        <li>
          <a href="#/my-profile">My Profile</a>
        </li>
        <li>
          <a href="#/create-cv">Create CV</a>
        </li>
        <li v-if="!Authenticated" style="float: right;">
          <b-dropdown class="m-2">
            <template v-slot:button-content>
               Xin chào ({{userInfo.fullName}})
            </template>
            <b-dropdown-item href="#/my-profile">My Profile</b-dropdown-item>
            <b-dropdown-item @click="logout()">Đăng xuất</b-dropdown-item>
          </b-dropdown>
        </li>
        <li v-if="Authenticated" style="float: right; margin-bottom: 1vh;"> <b-button v-b-modal.modal-prevent-closing>Đăng nhập</b-button></li>
      </ul>
      <!-- Login Modal -->
      <b-modal id="modal-prevent-closing" ref="modalLogin" title="Đăng nhập" @show="resetModal" @hidden="resetModal" @ok="handleOk">
        <template v-slot:modal-ok> Đăng nhập</template>
        <form ref="formLogin" @submit.stop.prevent="handleSubmit">
          <b-form-group :state="nameState" label="Tài khoản hoặc email" label-for="user-input" invalid-feedback="Name is required">
            <b-form-input id="user-input" v-model="user" :state="nameState" required ></b-form-input>
          </b-form-group>
          <b-form-group :state="nameState" label="Mật khẩu" label-for="pass-input" invalid-feedback="Password is required"> 
            <b-form-input type="password" id="pass-input" v-model="password" :state="nameState" required ></b-form-input>
          </b-form-group>
        </form>
        <b-button size="sm" variant="outline-secondary" v-b-modal.modal-prevent-closing2>
          Đăng ký
        </b-button>
      </b-modal>
      <!--End Login Modal -->

      <!-- Register Modal -->
      <b-modal id="modal-prevent-closing2" ref="modalRegister" title="Đăng ký" @show="resetModal" @hidden="resetModal" @ok="registerMethod">
        <template v-slot:modal-ok> Đăng ký</template>
        <form ref="formLogin" @submit.stop.prevent="handleSubmit">
          <b-form-group :state="nameState" label="Tài khoản hoặc email" label-for="user-input" invalid-feedback="Name is required">
            <b-form-input id="user-input" v-model="register.user" :state="nameState" required ></b-form-input>
          </b-form-group>
          <b-form-group :state="nameState" label="Mật khẩu" label-for="pass-input" invalid-feedback="Password is required"> 
            <b-form-input type="password" id="pass-input" v-model="register.password" :state="nameState" required ></b-form-input>
          </b-form-group>
          <b-form-group :state="nameState" label="Xác nhận lại mật khẩu" label-for="pass-input" invalid-feedback="Confirm password is required"> 
            <b-form-input type="password" id="pass-input" v-model="register.confirm_password" :state="nameState" required ></b-form-input>
          </b-form-group>
        </form>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { HTTP } from "../../http-common";
export default {
  components: { },
  name: "HeaderMain",
  props: [],
  data() {
    return {
      messenger: "",
      register_messenger: "",
      userInfo: { fullName: "" },
      Authenticated: false,
      user: "",
      password: "",
      register: {
        user: "",
        password: "",
        confirm_password: ""
      },
      nameState: null
    };
  },
  methods: {
    checkFormValidity() {
        const valid = this.$refs.formLogin.checkValidity()
        this.nameState = valid ? true : false
        return valid
      },
      resetModal() {
        this.name = ''
        this.nameState = null
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the name to submitted names
        this.login()
      },
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      this.$emit("reset");
    },
    registerMethod() {
      if (
        this.register.user &&
        this.register.password &&
        this.register.confirm_password
      ) {
        if (this.register.password === this.register.confirm_password) {
        } else {
          this.register_messenger = "Mật khẩu và xác nhận mật khẩu phải trùng khớp.";
        }
      } else {
        this.register_messenger = "Tài khoản hoặc mật khẩu, xác nhận mật khẩu không được để trống.";
      }
    },
    login() {
      if (this.user && this.password) {
        this.isModalVisible = false;
        this.$http.post(`/TokenAuth/Authenticate`, {
          userNameOrEmailAddress: this.user,
          password: this.password
        })
          .then(response => {
            localStorage.setItem("token", response.data.result.accessToken);
            this.$http.get(`/User/user`, {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
              }
            }).then(res => {
              localStorage.setItem("user", JSON.stringify(res.data.result));
              this.userInfo.fullName = res.data.fullName;
              // Hide the modal manually
              this.$nextTick(() => {
                this.$refs.modalLogin.hide()
              })
              this.$emit("reset");
            });
          })
          .catch(error => {
            this.messenger = error.response.data.error.details;
          });
      } else {
        this.messenger = "Tài khoản hoặc mật khẩu không để trống.";
      }
    },
    checkAuthenticate() {
      if (localStorage.getItem("token")) {
        this.Authenticated = false;
        var r = localStorage.getItem("user");
        var user = JSON.parse(localStorage.getItem("user"));
        this.userInfo.fullName = user.fullName;
      } else {
        this.Authenticated = true;
      }
    }
  },
  mounted() {
    this.checkAuthenticate();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header__main_content {
  padding: 0 10%;
}
@media only screen and (max-width: 768px) {
  .header__main_content {
    padding: 0 !important;
  }
  li {
    padding: 0 2vw !important;
  }
}
.header__main {
  background: #2a2b50;
  width: 100%;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  width: 100%;
  margin: 0px;
  list-style-type: none;
  padding: 0;
  line-height: 6vh;
}
li {
  display: inline-block;
  padding: 0 20px;
}
a {
  text-decoration: none;
  display: block;
  color: white;
  cursor: pointer;
}
a:hover {
  color:#007bff
}
</style>
