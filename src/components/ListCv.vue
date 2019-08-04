<template>
  <div class="content-list-cv">
    <div class="content">
      <div class="title-list-cv">
        <label>List CV</label>
        <button class="btn-add-new">Add new</button>
      </div>
      <div class="resume-list">
        <div class="content-item">
          <a href="#">
            <img
              src="http://genknews.genkcdn.vn/2019/7/30/photo-1-15644709408241026395635.png"
              alt
              width="120px"
              height="150px"
            >
          </a>
          <div class="content-item-info">
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
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content-list-cv {
  flex: 3 auto;
  display: block;
}
.content {
  display: block;
  margin: 20px auto;
  padding: 20px;
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
.btn-add-new {
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
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
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
.item-action button.delete-action, .content-item .item-action button.delete-action:hover {
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
.item-title .edit-time {
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
