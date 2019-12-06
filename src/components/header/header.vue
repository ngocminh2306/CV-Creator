<template>
  <div class="header__main">
    <div class="header__main_content">
      <ul>
        <li>
          <a href="#/">Home</a>
        </li>
        <li>
          <a href="#/mini-tools/salary-calculate">Mini Tools</a>
        </li>
        <li v-if="!Authenticated">
          <a href="#/my-cv">My CV</a>
        </li>
        <li v-if="!Authenticated">
          <a href="#/my-profile">My Profile</a>
        </li>
        <li>
          <a href="#/create-cv">Create CV</a>
        </li>
        <div v-if="!Authenticated" class="dropdown" style="float: right;">
          <button class="dropbtn">{{userInfo.fullName}}</button>
          <div class="dropdown-content">
            <a href="#/my-profile">My Profile</a>
            <a href="#/" @click="logout()">Đăng xuất</a>
          </div>
        </div>
        <div v-if="Authenticated" class="dropdown" style="float: right;"> <button class="dropbtn" v-b-modal.modal-prevent-closing>Đăng nhập</button></div>
      </ul>
      <!-- Login Modal -->
      <b-modal id="modal-prevent-closing" ref="modalLogin" title="Đăng nhập" @show="resetModal" @hidden="resetModal" @ok="handleOk">
        <template v-slot:modal-ok><b-spinner small v-if="loading"></b-spinner> Đăng nhập</template>
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
import {Vuex,mapState, mapGetters}  from 'vuex'
export default {
  components: { },
  name: "HeaderMain",
  props: [],
  data() {
    return {
      loading: false,
      messenger: "",
      register_messenger: "",
      userInfo: { fullName: "" },
      Authenticated: false,
      data: mapGetters(['getUser']),
      user:'',
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
      var self = this;
      this.loading = true
      if (this.user && this.password) {
        this.isModalVisible = false;
        this.$http.post(`/TokenAuth/Authenticate`, {
          userNameOrEmailAddress: self.user,
          password: self.password
        })
          .then(response => {
            self.loading = false
            localStorage.setItem("token", response.data.result.accessToken);
            self.$http.get(`/User/user`, {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
              }
            }).then(res => {
              localStorage.setItem("user", JSON.stringify(res.data.result));
              self.userInfo.fullName = res.data.fullName;
              // Hide the modal manually
              self.$nextTick(() => {
                self.$refs.modalLogin.hide()
              })
              self.$store.dispatch('addUser',res.data.result)
              console.log(self.$store)
              
              self.$emit("reset");
            });
          })
          .catch(error => {
            this.loading = false
            this.messenger = error.response.data.error.details;
          });
      } else {
        this.messenger = "Tài khoản hoặc mật khẩu không để trống.";
      }
    },
    checkAuthenticate() {
      if (localStorage.getItem("token")) {
        var self = this
        
        this.$http.get(`/User/user`, {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
              }
            }).then(res => {
              self.$store.dispatch('addUser',res.data.result)
              self.userInfo.fullName = res.data.result.fullName;
              self.Authenticated = false;
            }).catch(e=>{
              this.Authenticated = true;
            })
      } else {
        this.Authenticated = true;
      }
    }
  },
  mounted() {
    this.checkAuthenticate();
  },
  computed: {
    ...mapGetters(['getUser'])
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
li:hover {
  background-color: #343664;
}
a:hover {
  color: aliceblue;
}
a {
  text-decoration: none;
  display: block;
  color: white;
  cursor: pointer;
}
.dropbtn {
  background-color: transparent;
  color: white;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #2a2b50;
  padding: 5px 0;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 2;
}
.dropdown-content a {
  color: white;
  white-space: unset;
  padding: 5px 15px;
  line-height: 1.8;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #343664;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: #343664;}

</style>
