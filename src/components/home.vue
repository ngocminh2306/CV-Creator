<template>
  <div>
    <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="template in templates">
        <img style="cursor: pointer;height:80vh;width:100vw" v-on:click="slideClick(template.path)" src="https://www.cvexpress.com/wp-content/uploads/2017/09/slide1-17v4.jpg">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="title">
        <p class="subtitle">Tạo cv nhanh chóng với hàng chục mẫu cv miễn phí.</p>
        <b-button variant="info" size="lg">Tạo CV ngay</b-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "home",
  data() {
    return {
        templates: [1,2],
        swiperOption: {
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 0,
        // pagination: {
        //   type: "progressbar",
        //   el: ".swiper-pagination",
        //   clickable: true
        // }
      },
      logined: false
    };
  },
  mounted() {
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
.title {
    position: absolute;
    right: 15%;
    top: 10vw;
    left: 15%;
    z-index: 10;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #fff;
    text-align: center;
}

.subtitle {
    font-size: 7vh;
    font-weight: 500;
}
</style>
