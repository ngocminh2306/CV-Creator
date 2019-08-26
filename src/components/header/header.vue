<template>
  <div class="header__main">
    <div key="header_key" class="header__main_content">
      <ul>
        <li>
          <a href="#/">
            <img class="icon-header" src="@/assets/logo.png">
          </a>
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
        <li v-if="Authenticated">
          <a href="#/create-cv">Hello MINH</a>
        </li>
        <li style="float: right;">
          <a @click="showModal">
            <img class="icon-header" src="@/assets/logo.png">
            Me
          </a>
        </li>
      </ul>
      <modal v-show="isModalVisible" @close="closeModal">
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
          <button
            type="button"
            class="btn-light"
            @click="closeModal()"
            aria-label="Close modal"
          >Cancel</button>
          <button type="button" class="btn-green" @click="login()" aria-label="Login">Login</button>
        </div>
      </modal>
    </div>
  </div>
</template>

<script>
import modal from "@/components/modal/modal";
import { HTTP } from "../../http-common";
export default {
  components: { modal },
  name: "HeaderMain",
  data() {
    return {
      Authenticated: false,
      header_key: 0,
      isModalVisible: false,
      user: "",
      password: ""
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    login() {
      if (this.user && this.password) {
        this.isModalVisible = false;
        HTTP.post(`/TokenAuth/Authenticate`, {
          userNameOrEmailAddress: this.user,
          password: this.password
        })
          .then(response => {
            console.log(response);
            localStorage.setItem("user-info", "Minh");
            this.header_key++;
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    checkAuthenticate() {
      if (localStorage.getItem("user-info")) {
        console.log("user-info");
        this.Authenticated = true;
      } else {
        this.Authenticated = false;
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
