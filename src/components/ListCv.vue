<template>
  <div>
    <div v-if="!logined&&!loading" class="content">
      <b-alert show variant="danger" >Bạn chưa đăng nhập.</b-alert>
    </div>
    <div class="d-flex justify-content-center mt-3" v-if="loading"><b-spinner  label="Loading..."></b-spinner></div>
    <div v-if="logined" class="content">
      <div class="title-list-cv">
        <label>List CV</label>
        <a class="btn-add-new" type="button" href="#/create-cv">Add new</a>
      </div>
      <div class="resume-list">
        <div class="content-item">
          <a href="#" style="align-self: center;">
            <img
              src="http://genknews.genkcdn.vn/2019/7/30/photo-1-15644709408241026395635.png"
              alt
              style="width: 20vw; height: 20vw; max-width: 120px; max-height: 120px;"
            >
          </a>
          <div class="content-item-info" col-8>
            <div class="item-title">
              <span class="router-title">
                <a href="#">.NET CV</a>
              </span>
              <span class="edit-time">2019-07-30 09:44:44</span>
            </div>
            <div class="item">Item ItemItemItemItemItemItemItem</div>
            <div class="item-action">
              <a href="#">
                <button>View</button>
              </a>
              <a href="#">
                <button>Edit</button>
              </a>
              <button>publish</button>
              <button class="delete-action">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "ListCv",
  data() {
    return {
      loading: false,
      logined: false
    };
  },
  mounted() {
    this.loading = true;
    this.$http.get(`/User/user`, {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    }).then(res => {
      this.loading = false;
      this.logined = true;
    })
    .catch(error => {
      this.loading = false
      this.logined = false;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  display: block;
  margin: 5vh auto;
  width: 75%;
}
.title-list-cv {
  display: flex;
}
.title-list-cv label {
  text-align: left;
  flex: auto;
  color: #0ba25e;
  flex: 1;
  font-size: 24px;
  font-weight: 900;
}
@media only screen and (max-width: 768px) {
  .content {
    display: block;
    margin: 5vh auto;
    width: 100%;
  }
  .content-item .item-action button {
    background-color: transparent;
    border: 1px solid gray;
    border-radius: 4px;
    padding: 0;
    line-height: 28px;
    margin: 0;
    cursor: pointer;
  }
}
.btn-add-new {
  text-decoration: none;
  max-width: 100px;
  flex: auto;
  color: #fff;
  background-color: #0ba25e;
  border-color: #0ba25e;

  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1.2rem;
  line-height: 1.5;
  border-radius: 0.5rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.content-item {
  display: flex;
  flex-direction: row;
  margin: 15px 0;
  border: 1px solid #d1d1d1;
  border-radius: 10px;
  padding: 15px;
}
.content-item .item-action {
}
.content-item .item-action button {
  background-color: transparent;
  border: 1px solid gray;
  border-radius: 4px;
  padding: 0px 15px;
  line-height: 28px;
  margin: 0px 10px;
  cursor: pointer;
}
.item-action button.delete-action,
.content-item .item-action button.delete-action:hover {
  color: red;
  border: 1px solid red;
}
.content-item .item-action button:hover {
  color: #40a9ff;
  background-color: #fff;
  border-color: #40a9ff;
}
.content-item img {
  border: 2px solid #d1d1d1;
}
.content-item .item {
  border: 2px dashed silver;
  padding: 10px;
}
.content-item-info {
  flex: 1;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.content-item-info .item-title {
  display: flex;
}
.item-title .router-title {
  flex: 1;
  text-align: left;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
