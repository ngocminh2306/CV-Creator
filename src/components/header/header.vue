<template>
  <div class="header__main">
    <div class="header__main_content">
      <ul>
        <li>
          <a
            href="#/"
            style="line-height: 38px; width: 80px;
            background-image: url('https://as2.ftcdn.net/jpg/02/43/20/43/500_F_243204369_umiTVo6ntOITf6TwV4WbU8Zai2uGtmqe.jpg'"
          >&nbsp;</a>
        </li>
        <li>
          <a href="#/">My CV</a>
        </li>
        <li>
          <a href="#/my-profile">My Profile</a>
        </li>
        <li>
          <a href="#/create-cv">Create CV</a>
        </li>
        <li v-if="!Authenticated" style="float: right;">
          <div class="dropdown">
            <button class="dropbtn">
              Xin chào ({{userInfo.fullName}})
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a @click="logout()">Đăng xuất</a>
            </div>
          </div>
        </li>
        <li v-if="Authenticated" style="float: right;">
          <a @click="openLogin()">Login</a>
        </li>
      </ul>
      <!-- Login Modal -->
      <modal v-show="isOpenLogin" @close="closeLogin">
        <div slot="header">Login</div>
        <div slot="body" class="form-group">
          <div class="username">
            <label for="exampleInputEmail1">User</label>
            <input class="form-control" v-model="user">
          </div>
          <div class="password">
            <label for="exampleInputPassword1">Password</label>
            <input class="form-control" v-model="password" type="password">
          </div>
        </div>
        <div slot="footer">
          <button @click="openRegister()" type="button">Register</button>
          <button
            type="button"
            class="btn-light"
            @click="closeLogin()"
            aria-label="Close modal"
          >Cancel</button>
          <button type="button" class="btn-green" @click="login()" aria-label="Login">Login</button>
        </div>
      </modal>
      <!--End Login Modal -->
      <!-- Register Modal -->
      <modal v-show="isOpenRegister" @close="closeRegister">
        <div slot="header">Register</div>
        <div slot="body" class="form-group">
          <div class="username">
            <label for="exampleInputEmail1">User</label>
            <input class="form-control" v-model="user">
          </div>
          <div class="password">
            <label for="exampleInputPassword1">Password</label>
            <input class="form-control" v-model="password" type="password">
          </div>
          <div class="password">
            <label for="exampleInputPassword1">Confirm password</label>
            <input class="form-control" type="password">
          </div>
        </div>
        <div slot="footer">
          <button
            type="button"
            class="btn-light"
            @click="closeRegister()"
            aria-label="Close modal"
          >Cancel</button>
          <button type="button" class="btn-green" @click="login()" aria-label="Register">Register</button>
        </div>
      </modal>
      <!--End Register Modal -->
    </div>
  </div>
</template>

<script>
import modal from "@/components/modal/modal";
import { HTTP } from "../../http-common";
export default {
  components: { modal },
  name: "HeaderMain",
  props: [],
  data() {
    return {
      userInfo:{ fullName: ''},
      Authenticated: false,
      isOpenLogin: false,
      isOpenRegister: false,
      user: "",
      password: ""
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeLogin() {
      this.isOpenLogin = false;
    },
    closeRegister() {
      this.isOpenRegister = false;
    },
    openRegister() {
      this.isOpenRegister = true;
    },
    openLogin() {
      this.isOpenLogin = true;
    },
    logout(){
      localStorage.removeItem("token")
      this.$emit("reset");
    },
    login() {
      if (this.user && this.password) {
        this.isModalVisible = false;
        HTTP.post(`/TokenAuth/Authenticate`, {
          userNameOrEmailAddress: this.user,
          password: this.password }).then(response => {
            console.log(response);
            localStorage.setItem("token", response.data.result.accessToken);
            this.isOpenLogin = false;
            this.$emit("reset");
            HTTP.get(`/UserInfo/Get`, {
            headers: { Authorization: 'Bearer ' + localStorage.getItem("token") }}).then(res =>{
              localStorage.setItem("user",JSON.stringify(res.data.result))
              this.userInfo.fullName = res.data.result.user.fullName;
              console.log(res);
            })
          }).catch(e => {});
      }
    },
    checkAuthenticate() {
      if (localStorage.getItem("token")) {
        this.isOpenLogin = false;
        this.Authenticated = false;
        var user = JSON.parse(localStorage.getItem("user"));
        this.userInfo.fullName = user.user.fullName;

      } else {
        this.isOpenLogin = true;
        this.Authenticated = true;
        var user = JSON.parse(localStorage.getItem("user"));
        this.userInfo.fullName = user.user.fullName;
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
  height: 64px;
  padding: 0 10%;
}
.header__main {
  background: #2a2b50;
  display: block;
  z-index: 100;
  position: fixed;
  width: 100%;
  top: 0px;
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
  line-height: 64px;
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
.dropdown .dropbtn {
  font-size: 17px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}
.dropdown-content {
  border-radius: 4px;
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 120px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  /* padding: 12px 16px; */
  text-decoration: none;
  display: block;
  text-align: center;
}
.dropdown:hover .dropbtn {
  background-color: rgba(85, 85, 85, 0.5);
  color: white;
}
.dropdown-content a:hover {
  background-color: #ddd;
  color: black;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown {
  float: none;
}
.dropdown .dropbtn {
  /* display: block; */
  width: 100%;
  text-align: left;
}
.icon-header {
  width: 66px;
  height: 14px;
}
.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.5rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.btn-green {
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  overflow: visible;
}
.btn-light {
  color: #ffff;
  background-color: #ced4da;
  border-color: #ced4da;
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  overflow: visible;
}
.username {
  align-items: center;
  display: flex;
}
.username label {
  width: 33%;
}
.password {
  align-items: center;
  display: flex;
}
.password label {
  width: 33%;
}
</style>
